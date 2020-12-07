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

    commerce = db.relationship("Commerces")
    follower = db.relationship("Followers")
    like = db.relationship("Likes")
    comment = db.relationship("Comments")
def __str__(self):
    return  '{}: {}.' .format(self.user.first_name, self.email,)



class Commerces(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    #post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
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

    user = db.relationship("Users")
    follower = db.relationship("Followers")
    post = db.relationship("Posts")

class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'),  nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),  nullable=False)

    user = db.relationship("Users")
    commerce = db.relationship("Commerces")


class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    media_type=db.Column(db.String(10)) #
    media_url=db.Column(db.String(255)) 
    title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=True)

    commerce = db.relationship("Commerces")
    comment = db.relationship("Comments")
    like = db.relationship("Likes")

class Likes(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=func.now())
    updated_at = db.Column(db.DateTime, server_default=func.now(), onupdate=func.now())
    deleted_at = db.Column(db.DateTime)
    
    user = db.relationship("Users")
    post = db.relationship("Posts")
    
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



