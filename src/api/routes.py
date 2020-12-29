"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Commerces, Followers, Likes, Comments, Posts
from api.utils import generate_sitemap, APIException

api = Blueprint( 'api', __name__)

def get_one_or_error_404(models, id):
    row = models.query.get(id)

    if not row:
        return "Not found", 404

    return jsonify(row.serialize()), 200

def get_list_of(Models):
    list_models = []

    for model in Models.query.all():
        list_models.append(model.serialize())
    
    return jsonify(list_models), 200

def create_one(Models):
    payload = request.get_json()
    model = Models(**payload)
    
    db.session.add(model)
    db.session.commit()

    return jsonify(model.serialize()), 201

################################## USERS #########################################
#Devuelve la lista de todos los usuarios.
@api.route('/users', methods=['GET'])
def handle_list_users():
    return get_list_of(Users)

#Devuelve el usuario que se busca.
@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user(id):
    return get_one_or_error_404(Users, id)

#Se crea un usario nuevo o cualquier cosa nueva que se añada en la base de datos. 
@api.route('/users', methods=['POST'])
def handle_create_user():
    return create_one(Users)

#Se actualiza un usuario ya creado.
@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    user = Users.query.get(id)

    if not user:
        return "User not found", 404

    payload = request.get_json()

    if "first_name" in payload:
        user.first_name = payload["first_name"]
    
    if "last_name" in payload:
        user.last_name = payload["last_name"]
    
    if "email" in payload:
        user.email = payload["email"]
    
    if "username" in payload:
        user.username = payload["username"]
    

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 200

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
    return get_list_of(Commerces)

#Devuelve el comercio que se busca.
@api.route('/commerces/<int:id>', methods=['GET'])
def handle_get_commerce(id):
    return get_one_or_error_404(Commerces, id)

#Se actualiza un comercio ya creado.
@api.route('/commerces/<int:id>', methods=['PUT'])
def handle_update_commerce(id):
    commerce = Commerces.query.get(id)

    if not commerce:
        return "Commerce not found", 404

    payload = request.get_json()

    if "business_name" in payload:
        commerce.first_name = payload["business_name"]
    
    if "street_name" in payload:
        commerce.last_name = payload["street_name"]
    
    if "street_number" in payload:
        commerce.email = payload["street_number"]
    
    if "zip_code" in payload:
        commerce.email = payload["zip_code"]
    
    if "city" in payload:
        commerce.email = payload["city"]
    
    if "country" in payload:
        commerce.email = payload["country"]
    
    if "title" in payload:
        commerce.email = payload["title"]
    
    if "description" in payload:
        commerce.email = payload["description"]

    if "phone_number" in payload:
        commerce.email = payload["phone_number"]

    if "website" in payload:
        commerce.email = payload["website"]
    

    db.session.add(commerce)
    db.session.commit()

    return jsonify(commerce.serialize()), 200

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
#Creación del POST. USERS es con quien tengo que relacionarla, esta es una tabla secundaria. 
# Hay que hacer dos endpoints uno con commerce y otro con users.
@api.route('commerces/posts', methods=['POST'])
def handle_create_posts():
    payload = request.get_json()
    post = Posts(**payload)
        
    db.session.add(post)
    db.session.commit()

    return jsonify(post.serialize()), 201

#Obtener la lista de todos los posts = Posts de los Comerces que Users sigue :users/<int:user_id>/commerces/posts
@api.route('users/<int:user_id>/feed', methods=['GET'])
def handle_list_posts(user_id):
    follows = Followers.query.filter_by(user_id = user_id)
    commerce_ids = [f.commerce_id for f in follows] #forma de hacer un loop en una línea (pythonic)
    posts = Posts.query.filter(Posts.commerce_id.in_(commerce_ids)).order_by(Posts.updated_at.desc())

    feed = [post.serialize() for post in posts] #un loop en una línea

    return jsonify(feed), 200

#Devuelve el post del comercio que se busca.
@api.route('/posts/<int:id>', methods=['GET'])
def handle_get_posts(id):
    return get_one_or_error_404(Posts, id)

#Se actualiza un post ya creado.
@api.route('/posts/<int:id>', methods=['PUT'])
def handle_update_posts(id):
    post = Posts.query.get(id)
    
    if not post:
        return "Post not found", 404

    payload = request.get_json()

    if "title" in payload:
        post.title = payload["title"]

    if "description" in payload:
        post.description = payload["description"]

    db.session.add(post)
    db.session.commit()

    return jsonify(post.serialize()), 200

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
#Maneja los follows del usuario (nombre de la función)
@api.route('/users/<int:user_id>/followers', methods=['GET'])
def handle_user_follows(user_id):
    follows = Followers.query.filter_by(user_id = user_id, deleted_at=None)

    commerces = []
    
    for follow in follows:
        commerces.append(follow.commerce.business_name)

    return jsonify(commerces), 200
    
#Obtener la lista de todos los usuarios que siguen a este comercio. (Followers - Seguidores)
@api.route('/commerces/<int:commerce_id>/followers', methods=['GET'])
def handle_followers_commerce(commerce_id):
    followers = Followers.query.filter_by(commerce_id = commerce_id, deleted_at=None)

    users= []
    
    for follow in followers:
        users(follow.user.username)

    return jsonify(users), 200

#Dejar de seguir. 
@api.route('/commerces/<int:follow_id>/followers', methods=['DELETE'])
def handle_delete_followers(follow_id):
    follow = Followers.query.get(follow_id)
    
    if not follow:
        return "Post not found", 404

    payload = request.get_json()

    if "deleted_at" in payload:
        follow.deleted_at = payload["deleted_at"]
    else: 
        return "No estás introduciendo la fecha de borrado"
   
    data = follow.serialize()
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
    
    likes = Likes.query.filter_by(user_id = user_id)
    like = []
    
    for like in likes:
        like.append(like.user.username)

    return jsonify(like), 200
   

#Borrar el like. 
@api.route('/likes/<int:like_id>', methods=['DELETE'])
def handle_delete_likes(like_id):
    like = Likes.query.get(like_id)

    if not like:
        return "Like not found", 404
    
    data = like.serialize()
    db.session.delete(like)
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
    comments = Comments.query.filter_by(commerce_id = commerce_id)
    lists_comments = []
    
    for comment in comments:
        lists_comments.append(comment.serialize())

    return jsonify(lists_comments), 200

#Obtener la lista de todos los comentarios en un post hecho por usuarios
@api.route('/users/<int:user_id>/comments', methods=['GET'])
def handle_list_comments_user(user_id):
    comments = Comments.query.filter_by(user_id = user_id)
    user_comment = []
    
    for comment in comments:
        user_comment.append(comment.serialize())

    return jsonify(user_comment), 200

#Obtener la lista de TODOS los comentarios en un post, la forma de ser más semántico es estar claro de que si estás dentro de la función no necesitas repetir que estás en otra lista.
@api.route('/posts/<int:post_id>/comments', methods=['GET'])
def handle_list_comments_post(post_id):
    comments = []

    for comment in  Comments.query.filter_by(post_id = post_id):
        comments.append(comment.serialize())
    
    return jsonify(comments), 200

#Borrar un comentario de un post.
@api.route('/comments/<int:comment_id>', methods=['DELETE'])
def handle_delete_comments(comment_id):
    comment = Comments.query.get(comment_id)

    if not comment:
        return "Comment not found", 404
    
    data = comment.serialize()
    db.session.delete(comment)
    db.session.commit()

    return jsonify("This comment has been eliminated successfully", data), 200
  