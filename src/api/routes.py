"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Commerces, Followers, Likes, Comments, Posts
from api.utils import generate_sitemap, APIException

api = Blueprint( 'api', __name__)

################################## USERS #########################################
#Devuelve la lista de todos los usuarios.
@api.route('/users', methods=['GET'])
def handle_list_users():
    users = []

    for user in Users.query.all():
        users.append(user.serialize())
    
    return jsonify(users), 200

#Devuelve el usuario que se busca.
@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user(id):
    users = Users.query.get(id)

    if not users:
        return "User not found", 404

    return jsonify(users.serialize()), 200


#Se crea un usario nuevo o cualquier cosa nueva que se añada en la base de datos. 

@api.route('/users', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    user = Users(**payload)
    
    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 201

#Se actualiza un usuario ya creado.
@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    user = Users.query.get(id)
    if not user:
        return "User not found", 404

    payload = request.get_json()
    user.first_name = payload["first_name"]
    user.last_name = payload["last_name"]
    user.email = payload["email"]
    #user.password = payload["password"]
    user.username = payload["username"]

    return "User #{} updated.".format(id)

#Borrar usuario.
@api.route('/users/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    user = Users.query.get(id)

    if not user:
        return "User not found", 404
    
    data = user.serialize()
    db.session.delete(user)
    db.session.commit()

    return jsonify("This user has been eliminated successfully", data), 200

################################## COMMERCES #########################################

#Creación del commerce
# ASOCIA EL USUARIO A UN NUEVO COMERCIO.
@api.route('/commerces', methods=['POST'])
def handle_create_commerce():
    payload = request.get_json()
    commerce = Commerces(**payload)
        
    db.session.add(commerce)
    db.session.commit()

    return jsonify(commerce.serialize()), 201

    
#Obtener la lista de todos los comercios.
@api.route('/commerces', methods=['GET'])
def handle_list_commerces():
    commerces = []

    for commerce in Commerces.query.all():
        commerces.append(commerce.serialize())
    
    return jsonify(commerces), 200

#Devuelve el comercio que se busca.
@api.route('/commerces/<int:id>', methods=['GET'])
def handle_get_commerce(id):
    commerce = Commerces.query.get(id)

    if not commerce:
        return "Commerce not found", 404

    return jsonify(commerce.serialize()), 200

#Se actualiza un comercio ya creado.
@api.route('/commerces/<int:id>', methods=['PUT'])
def handle_update_commerce(id):
    commerce = Commerces.query.get(id)
    if not commerce:
        return "Commerce not found", 404

    payload = request.get_json()
    commerce.business_name = payload["business_name"]
    commerce.title = payload["title"]
    commerce.description = payload["description"]
    commerce.street_name = payload["street_name"]
    commerce.street_number = payload["street_number"]
    commerce.zip_code = payload["zip_code"]
    commerce.city = payload["city"]
    commerce.country = payload["country"]
    #commerce.owner_id = payload["owner_id"]

    return "Commerce #{} updated.".format(id)

#Borrar un comercio.
@api.route('/commerces/<int:id>', methods=['DELETE'])
def handle_delete_commerce(id):
    commerce = Commerces.query.get(id)

    if not commerce:
        return "Commerce not found", 404
    
    data = commerce.serialize()
    db.session.delete(commerce)
    db.session.commit()

    return jsonify("This commerce has been eliminated successfully", data), 200


################################## POSTS #########################################

#Creación del POST.
@api.route('/posts', methods=['POST'])
def handle_create_posts():
    payload = request.get_json()
    post = Posts(**payload)
        
    db.session.add(post)
    db.session.commit()

    return jsonify(post.serialize()), 201

#Obtener la lista de todos los posts. 
@api.route('/posts', methods=['GET'])
def handle_list_posts():
    posts = []

    for post in Posts.query.all():
        posts.append(post.serialize())
    
    return jsonify(posts), 200

#Devuelve el post del comercio que se busca.
@api.route('/posts/<int:id>', methods=['GET'])
def handle_get_posts(id):
    post = Posts.query.get(id)

    if not post:
        return "Post not found", 404

    return jsonify(post.serialize()), 200

#Se actualiza un post ya creado.
@api.route('/posts/<int:id>', methods=['PUT'])
def handle_update_posts(id):
    post = Posts.query.get(id)
    
    if not post:
        return "Post not found", 404

    payload = request.get_json()
    post.title = payload["title"]
    post.description = payload["description"]

    return "Post #{} updated.".format(id)

#Borrar un post.
@api.route('/posts/<int:id>', methods=['DELETE'])
def handle_delete_posts(id):
    post = Posts.query.get(id)

    if not post:
        return "Post not found", 404
    
    data = post.serialize()
    db.session.delete(post)
    db.session.commit()

    return jsonify("This post has been eliminated successfully", data), 200

################################## FOLLOWERS #########################################

#Acción de seguir, no entiendo muy bien como relacionar ambos id (user+commerce)
@api.route('/followers', methods=['POST'])
def handle_create_followers():
    payload = request.get_json()
    followers = Followers(**payload)
        
    db.session.add(followers)
    db.session.commit()

    return jsonify(followers.serialize()), 201

#Obtener la lista de todos los comercios seguidos por un usuario. (Following - Siguiendo)
@api.route('/users/<int:user_id>/followers', methods=['GET'])
def handle_list_followers_user(user_id):
    #follower = request.user? hay que obtener el usuario y luego hacer todo normal con follower. Es una lista de followers, de la relación entre usuario 1 con el comercio X, usiario 1, comercio X
    list_of_follows = Followers.query.filter_by(user_id = user_id)
    business_name_followed = []
    
    for follow_relation in list_of_follows:
        business_name_followed.append(follow_relation.commerce.business_name)

    return jsonify(business_name_followed), 200
    
#Obtener la lista de todos los usuarios que siguen a este comercio. (Followers - Seguidores)
@api.route('/commerces/<int:commerce_id>/followers', methods=['GET'])
def handle_list_followers_commerce(commerce_id):

    list_of_followers = Followers.query.filter_by(commerce_id = commerce_id)
    user_follower = []
    
    for follow_relation in list_of_followers:
        user_follower.append(follow_relation.user.username)

    return jsonify(user_follower), 200

#Dejar de seguir. 
@api.route('/commerces/<int:follow_id>/followers', methods=['DELETE'])
def handle_delete_followers(follow_id):
    follow = Followers.query.get(follow_id)

    if not follow:
        return "Follower not found", 404
    
    data = follow.serialize()
    db.session.delete(follow)
    db.session.commit()

    return jsonify("This follower has been eliminated successfully", data), 200


################################## LIKES #########################################

#Hacer el like al post
@api.route('/likes', methods=['POST'])
def handle_likes():
    payload = request.get_json()
    likes = Likes(**payload)
        
    db.session.add(likes)
    db.session.commit()

    return jsonify(likes.serialize()), 201

#Obtener la lista de likes (queremos que esto se vea?), no se si el id debe ser el mismo de arriba
@api.route('/users/<int:user_id>/likes', methods=['GET'])
def handle_list_of_likes(user_id):
    
    list_of_likes = Likes.query.filter_by(user_id = user_id)
    user_like = []
    
    for like_relation in list_of_likes:
        user_like.append(like_relation.user.username)

    return jsonify(user_like), 200
   

#Borrar el like. 
@api.route('/users/<int:like_id>/likes', methods=['DELETE'])
def handle_delete_likes(like_id):
    like_deleted = Likes.query.get(like_id)

    if not like_deleted:
        return "Like not found", 404
    
    data = like_deleted.serialize()
    db.session.delete(like_deleted)
    db.session.commit()

    return jsonify("This like has been eliminated successfully", data), 200

################################## COMMENTS #########################################

#Creación del comentario
@api.route('/comments', methods=['POST'])
def handle_create_comments():
    payload = request.get_json()
    comments = Comments(**payload)
        
    db.session.add(comments)
    db.session.commit()

    return jsonify(comments.serialize()), 201

#Obtener la lista de todos los comentarios en un post hecho por comercios
@api.route('/commerces/<int:commerce_id>/comments', methods=['GET'])
def handle_list_comments_commerce(commerce_id):
    return "List of all comments in a post from a commerce."

#Obtener la lista de todos los comentarios en un post hecho por usuarios
@api.route('/users/<int:user_id>/comments', methods=['GET'])
def handle_list_comments_user(user_id):
    return "List of all comments in a post from a user."

#Se actualiza un comentario de un post.
@api.route('/comments/<int:id>', methods=['PUT'])
def handle_update_comments(id):
    comment = Comments.query.get(id)
    
    if not comment:
        return "Comment not found", 404

    payload = request.get_json()
    comment.text = payload["text"]
    
    return "Comment #{} updated.".format(id)

#Borrar un comentario de un post.
@api.route('/comments/<int:comment_id>', methods=['DELETE'])
def handle_delete_comments(comment_id):
    comment_deleted = Comments.query.get(comment_id)

    if not comment_deleted:
        return "Comment not found", 404
    
    data = comment_deleted.serialize()
    db.session.delete(comment_deleted)
    db.session.commit()

    return jsonify("This comment has been eliminated successfully", data), 200
  