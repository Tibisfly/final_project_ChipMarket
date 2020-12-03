from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    deleted_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    avatar = db.Column(db.String(80))

    

class Commerces(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    deleted_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False)
    business_name = db.Column(db.String(80))
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    street_name = db.Column(db.String, nullable=False) 
    street_number = db.Column(db.String, nullable=False)
    zip_code = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)
    website = db.Column(db.String)
    phone_number = db.Column(db.String)

class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    deleted_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'), primary_key=True, nullable=False)

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    created_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    deleted_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow)
    commerce_id = db.Column(db.Integer, db.ForeignKey('commerces.id'), nullable=False)
    media_type=db.Column(db.String) # Revisar esta linea
    media_url=db.Column(db.String) # Revisar esta linea
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=True)

class Likes(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey)
    created_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    deleted_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow)
    

class Comments(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey)
    created_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    updated_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow, nullable=False)
    deleted_at = db.Column(db.DateTime, default=db.datetime.datetime.utcnow)
    text = db.Column(db.string, nullable=False)

    

    










# def __repr__(self):
    #     return '<User %r>' % self.username

    # def serialize(self):
    #     return {
    #         "id": self.id,
    #         "email": self.email,
    #         # do not serialize the password, its a security breach
    #     } quisiera preguntarle a Alejandro. Lo dejamos para preguntarle