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