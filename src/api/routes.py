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
# AQUÍ CREO QUE NO VA TODAVÍA EL <int:id> porque se debe genrar es después de que se haga el POST.
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
# ASOCIA EL USUARIO A UN NUEVO COMERCIO, ese <int:id> es el id del usuario, pero con el post se crea el owner_id
@api.route('/commerces/<int:id_user>', methods=['POST'])
def handle_create_commerce():
    payload = request.get_json()
    print(payload)
    return "Create Commerce and put as owner_id the user_id"

#Obtener la lista de todos los comercios, aquí mi duda es si en el endpoint lleva el <int:id>
@api.route('/commerces/<int:id>', methods=['GET'])
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

#Creación del POST, recordemos que sólo lo puede hacer el commerce
#Si estamos logeados como commerce no debería hacer falta pasar el id (porque ya sabemos quién es el que hace el post)
#Si es un usuario debe dar error 404 (seguro habrá que hacer un if)
@api.route('/posts/<int:id>', methods=['POST'])
def handle_create_posts():
    payload = request.get_json()
    print(payload)
    return "Create Post"

#Obtener la lista de todos los posts, aquí mi duda es si en el endpoint lleva el <int:id> (al igual que en los de arriba)
@api.route('/posts/<int:id>', methods=['GET'])
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
    
    return "Post #{} updated.".format(id)

### FOLLOWERS ###

#Acción de seguir, no entiendo muy bien como relacionar ambos id (user+commerce)
@api.route('/followers/<int:id_commerce>/<int:id_user>', methods=['POST'])
def handle_create_followers(id_commerce, id_user):
    payload = request.get_json()
    print(payload)
    return "Follow a commerce"

#Obtener la lista de todos los followers de un comercio? No se como hacer con ese id
@api.route('/followers/<int:id>', methods=['GET'])
def handle_list_followers():
    return "List of all followes."

#Devuelve el follower específico que quieras buscar.
#Esto sería si quiero ver algún follower en específico?
@api.route('/followers/<int:id>', methods=['GET'])
def handle_get_followers(id):
    follower1 = followers.query.get(id)
    return jsonify(follower1.serialize()), 200

#Dejar de seguir. 
@api.route('/followers/<int:id>', methods=['DELETE'])
def handle_delete_followers(id):
    
    return "follower #{} deleted.".format(id)



