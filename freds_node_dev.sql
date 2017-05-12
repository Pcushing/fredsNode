DROP DATABASE IF EXISTS freds_node_dev;
CREATE DATABASE freds_node_dev;

\c freds_node_dev;

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  transactionAt VARCHAR,
  description VARCHAR,
  teamID INTEGER
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  shortName VARCHAR,
  url VARCHAR
);