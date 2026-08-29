"""Agrega description, image_url, time_required y level a learning_paths

Revision ID: a1b2c3d4e5f6
Revises: 03f8022f40cd
Create Date: 2026-08-27 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa


revision = 'a1b2c3d4e5f6'
down_revision = '03f8022f40cd'
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('learning_paths', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.Text(), nullable=True))
        batch_op.add_column(sa.Column('image_url', sa.String(length=300), nullable=True))
        batch_op.add_column(sa.Column('time_required', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('level', sa.String(length=50), nullable=True))


def downgrade():
    with op.batch_alter_table('learning_paths', schema=None) as batch_op:
        batch_op.drop_column('level')
        batch_op.drop_column('time_required')
        batch_op.drop_column('image_url')
        batch_op.drop_column('description')