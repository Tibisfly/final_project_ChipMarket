from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    username =db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, default=True)
    avatar = db.Column(db.String(80))

    commerces = db.relationship("Commerces")
    followers = db.relationship("Followers")
    like = db.relationship("Likes")
    comment = db.relationship("Comments")

    def __str__(self):
        return '{}'.format(self.username)
    
    def serialize(self):

        commerces_list = []
        
        for commerce in self.commerces:
            commerces_list.append({
                "business_name": commerce.business_name,
                "commerce_id": commerce.id
            })
        
        following_list = []
        
        for follow in self.followers:
            following_list.append({
                "business_name": follow.commerces.business_name,
                "commerce_id": follow.commerces.id
            })
            
        return{
            "id" : self.id,
            "first_name" : self.first_name,
            "last_name": self.last_name,
            "username": self.username,
            "email": self.email,
            "avatar": self.avatar,
            "commerce_list": commerces_list,
            "following_list": following_list
        }


class Commerces(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    business_name = db.Column(db.String(80), unique=True, nullable=False)
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(80), nullable=False)
    street_name = db.Column(db.String(30), nullable=False) 
    street_number = db.Column(db.String(4), nullable=False)
    zip_code = db.Column(db.String(10), nullable=False)
    city = db.Column(db.String(10), nullable=False)
    country = db.Column(db.String(10), nullable=False)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    website = db.Column(db.String(300))
    phone_number = db.Column(db.String(12))
    avatar = db.Column(db.String(80))
    
    user = db.relationship("Users")
    followers = db.relationship("Followers")
    posts = db.relationship("Posts")

    def __str__(self):
        return  '{}'.format(self.business_name)
    
    def serialize(self):

        posts_list = []
        
        for post in self.posts:
            posts_list.append(post.serialize())

        return{
            "id": self.id,
            "owner_id": self.owner_id,
            "user": self.user.serialize(),
            "business_name": self.business_name,
            "title": self.title,
            "description": self.description,
            "city": self.city,
            "country": self.country,
            "zip_code": self.zip_code,
            "website": self.website,
            "phone_number": self.phone_number,
            "posts_list" : posts_list,
            "street_name": self.street_name,
            "street_number": self.street_number
        }

class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'),  nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),  nullable=False)
    
    user = db.relationship("Users")
    commerces = db.relationship("Commerces")

    def __str__(self):
        return  '{}:{}'.format(self.user.username, self.commerce.business_name) 
    
    def serialize(self):
    #self.commerce.post, hacer la relacion que alejandro explico en clases de comments. simplificar peticiones. 
        return{
            "id": self.id,
            "commerce_id": self.commerce_id,
            "user_id": self.user_id,
            "user": self.user.serialize(),
            "commerce": self.commerce.serialize(),
        }

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    promo_expired_at = db.Column(db.DateTime)
    promo_code= db.Column(db.String(10))
    media_type=db.Column(db.String(200)) 
    media_url=db.Column(db.String(255)) 
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(500), nullable=True)

    commerce = db.relationship("Commerces")
    comments = db.relationship("Comments")
    likes = db.relationship("Likes")

    def __str__(self):
        return  '{}'.format(self.title)
    
    def serialize(self):
        comments = []

        for comment in self.comments:
            comments.append(comment.serialize())

        return{
            "id": self.id,
            "commerce_id": self.commerce_id,
            "media_type": self.media_type,
            "media_url": self.media_url,
            "title": self.title,
            "description": self.description,
            "business_name": self.commerce.business_name,
            "comments": comments,
            "promo_code": self.promo_code
        }

class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False) 
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)

    user = db.relationship("Users")
    post = db.relationship("Posts")

    def __str__(self):
        return  '{}'.format(self.user_id)
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id
        }
    
class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    text = db.Column(db.Text, nullable=False)

    user = db.relationship("Users")
    post = db.relationship("Posts")
    
    
    def __str__(self):
        return  '{}:{}'.format(self.user.username, self.text) #los commerce tambien pueden hacer el comment, basta con user?
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "text": self.text,
            "author": self.user_id == self.post.commerce.owner_id
        }



