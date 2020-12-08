"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users
from api.utils import generate_sitemap, APIException

api = Blueprint( 'api', __name__)


#@api.route('/hello', methods=['POST', 'GET'])
#def handle_hello():

    #response_body = {
      #  "message": "Hello! I'm a message that came from the backend"
   # }

    #return jsonify(response_body), 200

#Devuelve la lista de todos los usuarios.
@api.route('/users', methods=['GET'])
def handle_list_users():
    return "List all users."

#Devuelve el usuario que se busca.
@api.route('/users/<int:id>', methods=['GET'])
def handle_get_user(id):
    user1 = Users.query.get(id)
    return jsonify(user1.serialize()), 200


#Se crea un usario nuevo o cualquier cosa nueva que se añada en la base de datos. 

@api.route('/users/<int:id>', methods=['POST'])
def handle_create_user():
    payload = request.get_json()
    print(payload)
    return "Create user."

#Se actualiza un usuario ya creado.
@api.route('/users/<int:id>', methods=['PUT'])
def handle_update_user(id):
    payload = request.get_json()
    print(payload)
    return "User #{} updated.".format(id)

#Borrar usuario.
@api.route('/users/<int:id>', methods=['DELETE'])
def handle_delete_user(id):
    
    return "User #{} updated.".format(id)

### COMMERCES ###

#Creación del commerce
# ASOCIA EL USUARIO A UN NUEVO COMERCIO.
@api.route('/commerces', methods=['POST'])
def handle_create_commerce():
    payload = request.get_json()
    print(payload)
    return "Create Commerce and put as owner_id the user_id"

#Obtener la lista de todos los comercios.
@api.route('/commerces', methods=['GET'])
def handle_list_commerces():
    return "List all commerces."

#Devuelve el comercio que se busca.
@api.route('/commerces/<int:id>', methods=['GET'])
def handle_get_commerces(id):
    commerce1 = commerces.query.get(id)
    return jsonify(commerce1.serialize()), 200

#Se actualiza un comercio ya creado.
@api.route('/commerces/<int:id>', methods=['PUT'])
def handle_update_commerce(id):
    payload = request.get_json()
    print(payload)
    return "Commerce #{} updated.".format(id)

#Borrar un comercio.
@api.route('/commerces/<int:id>', methods=['DELETE'])
def handle_delete_commerce(id):
    
    return "Commerce #{} updated.".format(id)

### POSTS ###

#Creación del POST.
@api.route('/posts', methods=['POST'])
def handle_create_posts():
    payload = request.get_json()
    print(payload)
    return "Create Post"

#Obtener la lista de todos los posts.
@api.route('/posts', methods=['GET'])
def handle_list_posts():
    return "List all Posts of the commerces."

#Devuelve el post del comercio que se busca.
@api.route('/posts/<int:id>', methods=['GET'])
def handle_get_posts(id):
    post1 = posts.query.get(id)
    return jsonify(post1.serialize()), 200

#Se actualiza un post ya creado.
@api.route('/posts/<int:id>', methods=['PUT'])
def handle_update_posts(id):
    payload = request.get_json()
    print(payload)
    return "Post #{} updated.".format(id)

#Borrar un post.
@api.route('/posts/<int:id>', methods=['DELETE'])
def handle_delete_posts(id):
    
    return "Post #{} deleted.".format(id)

### FOLLOWERS ###

#Acción de seguir, no entiendo muy bien como relacionar ambos id (user+commerce)
@api.route('/followers', methods=['POST'])
def handle_create_followers():
    payload = request.get_json()
    print(payload)
    return "Follow a commerce"

#Obtener la lista de todos los comercios seguidos pur un usuario.
@api.route('/users/<int:user_id>/followers', methods=['GET'])
def handle_list_followers_user(user_id):
    return "List of all the commerces this user is following."

#Obtener la lista de todos los usuarios que siguen a este comercio..
@api.route('/commerces/<int:commerce_id>/followers', methods=['GET'])
def handle_list_followers_commerce(commerce_id):
    return "List of all the users following this commerce."

#Dejar de seguir. 
@api.route('/commerces/<int:commerce_id>/followers', methods=['DELETE'])
def handle_delete_followers(id):
    
    return "follower #{} deleted.".format(id)


### LIKES ###

#Hacer el like al post
@api.route('/likes', methods=['POST'])
def handle_likes():
    payload = request.get_json()
    print(payload)
    return "Like a post"

#Obtener la lista de likes (queremos que esto se vea?), no se si el id debe ser el mismo de arriba
@api.route('/users/<int:user_id>/likes', methods=['GET'])
def handle_list_of_likes(user_id):
    return "List of all the likes from a user to the commerce."


#Borrar el like. 
@api.route('/users/<int:user_id>/likes', methods=['DELETE'])
def handle_delete_likes(user_id):
    
    return "Like #{} deleted.".format(id)

### COMMENTS ###

#Creación del comentario
@api.route('/comments', methods=['POST'])
def handle_create_comments():
    payload = request.get_json()
    print(payload)
    return "Create text inside a comment"

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
    payload = request.get_json()
    print(payload)
    return "Comments #{} updated.".format(id)

#Borrar un comentario de un post.
@api.route('/comments/<int:id>', methods=['DELETE'])
def handle_delete_comments(id):
    
    return "Comment #{} deleted.".format(id)