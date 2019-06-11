-- SETUP DATABASE --

For this project we used PostgreSQL. (https://www.postgresql.org/download/)
To access PostgreSQL from the command prompt:
1.- psql -U postgres (if different, please replace 'postgres' with your username)

To create our database user and the database for our webpage:
1.- CREATE ROLE "postgres" with LOGIN SUPERUSER CREATEROLE CREATEDB REPLICATION BYPASSRLS;
2.- CREATE DATABASE "postgres";
3.- CREATE DATABASE "auth-system";

In the line 5 of the user.js file, located in the models folder, you will find the next line:

const sequelize = new Sequelize('postgres://postgres@localhost:5432/auth-system');

If the user 'postgres' has a password in your computer, please replace that line in the user.js file with the following line and replace the word 'admin' with your password:

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/auth-system');

-- RUN WEBSITE --

1.- npm install
2.- node index.js
3.- http://localhost:8080/
