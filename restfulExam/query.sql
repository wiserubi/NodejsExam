create database restful;

use restful;

drop table user;

create table user(
id integer primary key auto_increment,
user_id text,
password text,
name text,
age integer
);

create table user_login(
id integer primary key auto_increment,
user_real_id integer,
token text,
create_at DATETIME default current_timestamp
);

create table offer(
user_id text,
indate char(8),
location_si char(20),
location_dong char(10),
location_name char(20),
total_amt int,
original_amt int,
premium int,
rent int,
loan int,
migration_fee int,
tax int,
tel_number char(11),
jisang char(1),
myinterest char(1),
public char(1)
);