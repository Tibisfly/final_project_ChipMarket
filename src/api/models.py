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
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    avatar = db.Column(db.String(80))

    commerce = db.relationship("Commerces", backref='users')
    follower = db.relationship("Followers", backref='users')
    like = db.relationship("Likes", backref='users')
    comment = db.relationship("Comments", backref='users')

    # def __str__(self):
    #     return '{}: {}.'.format(self.username)
    
    # def serialize(self):
    #     return{
    #         "id" : self.id,
    #         "first_name" : self.first_name,
    #         "last_name": self.last_name,
    #         "username": self.username,
    #         "email": self.email,
    #         "avatar": self.avatar
    #     }


class Commerces(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    business_name = db.Column(db.String(80))
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

    follower = db.relationship("Followers", backref='commerces')
    post = db.relationship("Posts", backref='commerces')

    # def __str__(self):
    #     return  '{}: {}.'.format(self.business_name)
    
    # def serialize(self):
    #     return{
    #         "id": self.id,
    #         "owner_id": self.owner_id,
    #         "business_name": self.business_name,
    #         "title": self.title,
    #         "description": self.description,
    #         "city": self.city,
    #         "country": self.country,
    #         "website": self.website,
    #         "phone_number": self.phone_number
    #     }

class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'),  nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),  nullable=False)

    # def __str__(self):
        # return  '{}: {}.'.format(self.user_id)
    
    # def serialize(self):
    #     return{
    #         "id": self.id,
    #         "commerce_id": self.commerce_id,
    #         "user_id": self. user_id
    #     }

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    media_type=db.Column(db.String(10)) 
    media_url=db.Column(db.String(255)) 
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=True)

    comment = db.relationship("Comments",  backref='posts')
    like = db.relationship("Likes", backref='posts')

    # def __str__(self):
    #     return  '{}: {}.'.format(self.title)
    
    # def serialize(self):
    #     return{
    #         "id": self.id,
    #         "commerce_id": self.commerce_id,
    #         "media_type": self.media_type,
    #         "media_url": self.media_url,
    #         "title": self.title,
    #         "description": self.description,
    #     }

class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False) 
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)

    # def __str__(self):
    #     return  '{}: {}.'.format(self.user_id)
    
    # def serialize(self):
    #     return{
    #         "id": self.id,
    #         "user_id": self.user_id,
    #         "post_id": self.post_id
    #     }
    
class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    text = db.Column(db.Text, nullable=False)
    
    # def __str__(self):
    #     return  '{}: {}.'.format(self.user_id) #los commerce tambien pueden hacer el comment, basta con user?
    
    # def serialize(self):
    #     return{
    #         "id": self.id,
    #         "user_id": self.user_id,
    #         "post_id": self.post_id,
    #         "text": self.text
    #     }



