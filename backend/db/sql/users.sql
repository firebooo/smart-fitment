-- 1为超级用户，2为普通用户
CREATE TYPE level as ENUM ('1', '2');

CREATE TABLE IF NOT EXISTS USERS(
    id VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role level DEFAULT '2', 
    created_at date NOT NULL,
    login_at date,
    updated_at date,
    avatar text
);

CREATE UNIQUE INDEX name_idx ON USERS(name);
CREATE INDEX id_idx ON USERS(id);

comment on table  "users" is '用户';
comment on column "users".id  is 'id';
comment on column "users".role is '权限';
comment on column "users".name is '用户名';
comment on column "users".password is '密码';
comment on column "users".created_at is '创建时间';
comment on column "users".login_at is '登录时间';
comment on column "users".updated_at is '修改时间';
comment on column "users".avatar is '头像地址';