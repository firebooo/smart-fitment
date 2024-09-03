CREATE TABLE IF NOT EXISTS PROJECTS(
    id VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    created_at date NOT NULL,
    updated_at date
);

CREATE UNIQUE INDEX name_idx ON PROJECTS(name);
CREATE INDEX id_idx ON PROJECTS(id);
CREATE INDEX user_idx ON PROJECTS(user_id);

comment on table "PROJECTS" is '项目';
comment on column "PROJECTS".id  is 'id';
comment on column "PROJECTS".name is '项目名称';
comment on column "PROJECTS".user_id is '创建人';
comment on column "PROJECTS".created_at is '创建时间';
comment on column "PROJECTS".updated_at is '修改时间';