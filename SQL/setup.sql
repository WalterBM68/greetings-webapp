create database greetings;
create role theCoder login password 'pg123';
grant all privileges on database greetings to theCoder;

//Testing
create user musa with password 'musa2';
create database testing with owner musa;

create table greet (id serial not null primary key, name text not null, count int not null);