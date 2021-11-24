CREATE DATABASE art_gallery;

\c art_gallery

CREATE TABLE customer(
    cust_id SERIAL PRIMARY KEY,
    cust_name VARCHAR(30) NOT NULL,
    cust_email VARCHAR(30) NOT NULL,
    cust_password VARCHAR(30) NOT NULL
);

