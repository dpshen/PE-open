#-*- coding:utf-8 -*-

from sqlalchemy import create_engine,Table,Column,Integer,String,MetaData,ForeignKey

# 创建一个连接引擎
engine=create_engine("mysql+pymysql://dpshen:qwe123@localhost:3306/pe",echo=True)

# 创建元数据
metadata=MetaData(engine)

user=Table('user',metadata,
    Column('id',Integer,primary_key=True, autoincrement=True),
    Column('name',String(20)),
    Column('fullname',String(40)),
    Column('pwd',String(64)),
    )

role = Table('role', metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('user_id', None, ForeignKey('user.id')),
    Column('role', String(32), nullable=False)
    )

classes = Table('class', metadata,
	Column('id', Integer, primary_key=True, autoincrement=True),
	Column('class_no', Integer),
	Column('gread', Integer),
	Column('level', String(16)),
	Column('class_name', String(32)),
	)

exam = Table('exam', metadata,
	Column('id', Integer, primary_key=True, autoincrement=True),
    Column('user_role_id', None, ForeignKey('role.id')),
    Column('class_id', None, ForeignKey('class.id')),
	Column('year', String(16)),
	Column('times', Integer ),
	Column('score', Integer)
    )


metadata.drop_all()
metadata.create_all()