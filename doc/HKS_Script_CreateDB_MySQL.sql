create database cfgl default character set utf8;

-- For MySQL 8 or later.
create user 'cfgl'@'localhost' identified by '123';
grant all on cfgl.* to cfgl@localhost;
-- GRANT ALL ON hks.* TO hks@localhost IDENTIFIED BY 'Hks@123';
