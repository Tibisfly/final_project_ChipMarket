"""empty message

Revision ID: befcb1cc4d8c
Revises: c05c5f00fac1
Create Date: 2020-12-07 20:38:01.140843

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'befcb1cc4d8c'
down_revision = 'c05c5f00fac1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('commerce_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'posts', 'commerces', ['commerce_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'posts', type_='foreignkey')
    op.drop_column('posts', 'commerce_id')
    # ### end Alembic commands ###
