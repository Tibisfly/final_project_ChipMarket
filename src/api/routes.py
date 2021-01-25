"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import hashlib
import hmac

import jwt

import json, datetime, random, string

from flask import Flask, request, jsonify, url_for, Blueprint, abort
from api.models import db, Users, Commerces, Followers, Likes, Comments, Posts
from api.utils import generate_sitemap, APIException



api = Blueprint( 'api', __name__)

MAC = 'SPAkdj892ARHSZgVKTct9fJSZbxw8Y3zt'
JWT_SECRET = 'FtvZjNnBWRaGaErzdFaQU5W9yMcVdWTd'

def get_one_or_error_404(Models, id):
    row = Models.query.get(id)

    if not row:
        abort(404)

    if row.deleted_at:
        abort(401)

    return jsonify(row.serialize()), 200

def get_list_of(Models):
    list_models = [
        model.serialize()
        for model in Models.query.filter_by(deleted_at=None).all()
    ]

    return jsonify(list_models), 200

def create_one(Model, required, types, payload=None):
    payload = payload or request.get_json()

    for key, value in payload.items():
        if key in types and not isinstance(value, types[key]):
            abort(400, f"{key} is not {types[key]}")

    for field in required:
        if field not in payload or payload[field] is None:
            abort(400, "este es un mensaje en el error 400")

    model = Model(**payload)
    db.session.add(model)
    db.session.commit()

    return jsonify(model.serialize()), 201


def update_one(Models, id, types):
    payload = request.get_json()
    model = Models.query.filter_by(id=id, deleted_at=None).first()

    if not model:
        return "Not found", 404

    payload = request.get_json()

    for key, value in payload.items():
        if key in types and not isinstance(value, types[key]):
            abort(400, f"{key} is not {types[key]}")

    for key, value in payload.items():
        setattr(model, key, payload[key])

    db.session.add(model)
    db.session.commit()

    return jsonify(model.serialize()), 200

def delete_one(Models, id):
    model = Models.query.filter_by(id=id, deleted_at=None).first()

    if not model:
        return "Not found", 404

    model.deleted_at = datetime.datetime.utcnow()
    data = model.serialize()
    db.session.delete(model)
    db.session.commit()

    return jsonify("This user has been eliminated successfully", data), 200

# def authorized_commerce(commerce_id):
#     user = authorized_user()
#     commerce = Commerces.query.filter_by(commerce_id = commerce_id, deleted_at=None).first()

#     if user.id != commerce.owner_id:
#         return False

#     return True

################################## USERS #########################################
#Devuelve el usuario que se busca.
@api.route('/users', methods=['GET'])
def handle_get_user():
    user = authorized_user()
    return jsonify(user.serialize()), 200

#Se crea un usario nuevo o cualquier cosa nueva que se añada en la base de datos.
@api.route('/users', methods=['POST'])
def handle_create_user():
    required = ["first_name", "last_name", "username", "email", "password"]
    types = {
        "first_name": str,
        "last_name": str,
        "username": str,
        "email": str,
        "password": str
    }
    payload = request.get_json()

    for key, value in payload.items():
        if key in types and not isinstance(value, types[key]):
            abort(400, f"{key} is not {types[key]}")

    for field in required:
        if field not in payload or payload[field] is None:
            abort(400, "este es un mensaje en el error 400")

    key = MAC.encode('utf-8')
    msg = payload['password'].encode('utf-8')
    algo = hashlib.sha512

    payload['password'] = hmac.new(key, msg, algo).hexdigest()

    user = Users(**payload)
    db.session.add(user)
    db.session.commit()

    email = {'sub': user.email}
    secret = JWT_SECRET.encode('utf-8')
    algo="HS256"

    token = jwt.encode(email, secret, algorithm=algo)

    return jsonify({"token":token}), 201


#Log in del usuario ya creado.
@api.route('/login', methods=['POST'])
def login():
    payload = request.get_json()

    email = payload['email']
    password = payload ['password']

    user = Users.query.filter_by(email=email, deleted_at=None).first()

    if not user:
        return 'Not allow to access', 403

    key = MAC.encode('utf-8')
    msg = password.encode('utf-8')
    algo = hashlib.sha512

    hashed_password = hmac.new(key, msg, algo).hexdigest()

    if hashed_password != user.password:
        return 'Not allow to access', 403

    payload = {'sub': email}
    secret = JWT_SECRET.encode('utf-8')
    algo="HS256"

    token = jwt.encode(payload, secret, algorithm=algo)

    return jsonify({"token": token}), 201


def authorized_user():

    authorization = request.headers.get('Authorization')

    if not authorization:
        abort (403)

    token = authorization [7:]
    secret = JWT_SECRET.encode('utf-8')
    algo ="HS256"

    payload = jwt.decode(token, secret, algorithms = algo)
    user = Users.query.filter_by(email = payload['sub'], deleted_at=None).first()

    return user


#Se actualiza un usuario ya creado.
@api.route('/users', methods=['PUT'])
def handle_update_user():
    user = authorized_user()
    user_id = user.id
    # payload = request.get_json()
    # payload["user_id"] = user.id


    # required = ["first_name", "last_name", "username", "email"]
    types = {
        "first_name": str,
        "last_name": str,
        "username": str,
        "email": str,
        "password": str
    }

    return update_one(Users, user_id, types)

#Borrar usuario.
@api.route('/users', methods=['DELETE'])
def handle_delete_user(id):
    user = authorized_user()

    return delete_one(Users, id)

@api.route('/test', methods=['GET'])
def test():
    user = authorized_user()

    return jsonify(user.serialize()), 200

################################## COMMERCES #########################################
#Creación del commerce
# ASOCIA EL USUARIO A UN NUEVO COMERCIO.
@api.route('/commerces', methods=['POST'])
def handle_create_commerce():
    user = authorized_user()

    payload= request.get_json()

    payload["owner_id"] = user.id

    required = ["business_name", "city", "country", "street_name", "street_number", "zip_code", "title", "description"]
    types = {
        "business_name": str,
        "city": str,
        "country": str,
        "street_name": str,
        "street_number": str,
        "zip_code": str,
        "title": str,
        "description": str
    }
    return create_one(Commerces, required, types, payload)

#Devuelve el comercio que se busca.
@api.route('/commerces/<int:id>', methods=['GET'])
def handle_get_commerce(id):
    user = authorized_user()

    return get_one_or_error_404(Commerces, id)

#Se actualiza un comercio ya creado.
@api.route('/commerces', methods=['PUT'])
def handle_update_commerce(id):
    user = authorized_user()

    payload= request.get_json()
    payload["owner_id"] = user.id

    required = ["business_name", "city", "country", "street_name", "street_number", "zip_code", "title", "description", "phone_number", "website"]
    types = {
        "business_name": str,
        "city": str,
        "country": str,
        "street_name": str,
        "street_number": str,
        "zip_code": str,
        "title": str,
        "description": str,
        "phone_number": str,
        "website": str
    }

    return update_one(Commerces, id, required, types)

#Borrar un comercio.
@api.route('/commerces/<int:id>', methods=['DELETE'])
def handle_delete_commerce(id):
    return delete_one(Commerces, id)


################################## POSTS #########################################
#Creación del POST. USERS es con quien tengo que relacionarla, esta es una tabla secundaria.
# Hay que hacer dos endpoints uno con commerce y otro con users.
@api.route('commerces/posts', methods=['POST'])
def handle_create_posts():
    user = authorized_user()
    commerce = user.commerces[0]

    payload = request.get_json()
    payload["commerce_id"] = commerce.id
    # commerce = Commerces.query.filter_by(id = payload["commerce_id"], deleted_at=None).first()

    # if commerce is None:
    #     return 'Commerce does not exist', 403

    # if commerce.owner_id is not user.id:
    #     return 'The user is not the owner of the commerce', 403


    required = ["title", "description", "media_type", "media_url", "commerce_id"]
    types = {
        "commerce_id": int,
        "media_type": str,
        "media_url": str,
        "title": str,
        "description": str
    }

    payload["promo_code"] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

    return create_one(Posts, required, types, payload)

#Obtener la lista de todos los posts = Posts de los Commerces que Users sigue :users/<int:user_id>/commerces/posts
@api.route('users/feed', methods=['GET'])
def handle_list_posts():
    user = authorized_user()

    follows = Followers.query.filter_by(user_id = user.id, deleted_at=None)
    commerce_ids = [f.commerce_id for f in follows] #forma de hacer un loop en una línea (pythonic)
    posts = Posts.query.filter(Posts.commerce_id.in_(commerce_ids)).order_by(Posts.updated_at.desc())

    feed = [post.serialize() for post in posts]

    return jsonify(feed), 200

@api.route('commerces/feed/<int:commerce_id>', methods=['GET'])
def handle_get_commerce_feed(commerce_id):
    commerce = Commerces.query.filter_by(id = commerce_id, deleted_at=None).first()
    serialized_commerce = commerce.serialize() 
    
    feed =  serialized_commerce["posts_list"]
    feed.sort(key=lambda x: x.get("updated_date"), reverse = True )
    
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
    user = authorized_user()
    post = Posts.query.get(id)

    if post.commerce_id != user.id:
        return "Post not found", 404

    post.deleted_at = datetime.datetime.utcnow()
    data = post.serialize()
    db.session.delete(post)
    db.session.commit()

    return jsonify("This post has been eliminated successfully", data), 200

################################## FOLLOWERS #########################################

#Acción de seguir, no entiendo muy bien como relacionar ambos id (user+commerce)
@api.route('/followers', methods=['POST'])
def handle_create_followers():
    user = authorized_user()

    payload = request.get_json()
    payload["user_id"] = user.id
    followers = Followers(**payload)

    db.session.add(followers)
    db.session.commit()

    return jsonify(followers.serialize()), 201

#Obtener la lista de todos los comercios seguidos por un usuario. (Following - Siguiendo)
#Maneja los follows del usuario (nombre de la función)
@api.route('/users/followers', methods=['GET'])
def handle_user_follows():
    user = authorized_user()

    follows = Followers.query.filter_by(user_id = user.id, deleted_at=None)

    commerces = []

    for follow in follows:
        commerces.append(follow.commerce.business_name)

    return jsonify(commerces), 200

#Obtener la lista de todos los usuarios que siguen a este comercio. (Followers - Seguidores)
@api.route('/commerces/<int:commerce_id>/followers', methods=['GET'])
def handle_followers_commerce(commerce_id):
    user = authorized_user()

    followers = Followers.query.filter_by(commerce_id = commerce.owner_id, deleted_at=None)

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
    payload = json.loads(request.data)
    likes = Likes(**payload)

    db.session.add(likes)
    db.session.commit()

    return jsonify(likes.serialize()), 201

#Obtener la lista de likes (queremos que esto se vea?), no se si el id debe ser el mismo de arriba
@api.route('/users/likes', methods=['GET'])
def handle_list_of_likes():

    user = authorized_user()

    user_id = user.id
    likes = Likes.query.filter_by(user_id = user_id, deleted_at=None)
    like = []

    for like in likes:
        like.append(like.user.username)

    return jsonify(like), 200


#Borrar el like.
@api.route('/users/likes', methods=['DELETE'])
def handle_delete_likes(like_id):
    user = authorized_user()

    user_id = user.id
    like =  Likes.query.filter_by(user_id = user_id, like_id = like_id)
    like = []

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
    user = authorized_user()

    payload = json.loads(request.data)
    payload["user_id"] = user.id
    comments = Comments(**payload)

    db.session.add(comments)
    db.session.commit()

    return jsonify(comments.serialize()), 201

#Obtener la lista de todos los comentarios en un post hecho por comercios
@api.route('/commerces/<int:commerce_id>/comments', methods=['GET'])
def handle_list_comments_commerce(commerce_id):
    comments = Comments.query.filter_by(commerce_id = commerce_id, deleted_at=None)
    lists_comments = []

    for comment in comments:
        lists_comments.append(comment.serialize())

    return jsonify(lists_comments), 200

#Obtener la lista de todos los comentarios en un post hecho por usuarios
@api.route('/users/comments', methods=['GET'])
def handle_list_comments_user(user_id):
    user = authorized_user()

    user_id = user.id
    comments = Comments.query.filter_by(user_id = user_id, deleted_at=None)
    user_comment = []

    for comment in comments:
        user_comment.append(comment.serialize())

    return jsonify(user_comment), 200

#Obtener la lista de TODOS los comentarios en un post, la forma de ser más semántico es estar claro de que si estás dentro de la función no necesitas repetir que estás en otra lista.
@api.route('/posts/<int:post_id>/comments', methods=['GET'])
def handle_list_comments_post(post_id):
    comments = []

    for comment in  Comments.query.filter_by(post_id = post_id, deleted_at=None):
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
