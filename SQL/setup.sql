create database greetings;
create role theCoder login password 'pg123';
grant all privileges on database greetings to theCoder;