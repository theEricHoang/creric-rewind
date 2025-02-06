create table "posts" (
    "id" serial primary key,
    "from" varchar(50) not null,
    "content" varchar(1000) not null,
    "created" timestamp default current_timestamp not null
);