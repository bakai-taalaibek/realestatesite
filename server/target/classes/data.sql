----tb_role-----------------------------------------------------------------------------------------------------------
insert into tb_role (status, name) VALUES ('ACTIVE', 'ROLE_ADMIN');
insert into tb_role (status, name) VALUES ('ACTIVE', 'ROLE_USER');

----tb_users----------------------------------------------------------------------------------------------------------
insert into tb_user(created,status,updated,age, email, gender, password, username)
VALUES ('2023-04-19 02:28:38.593', 'ACTIVE', '2023-04-19 02:28:38.593', 29, 'mirbek@gmail.com','MALE', '$2a$04$j8hS2sCsqpTzZBYPPRpBnubIuhee0Y1DmYOrwfTc9BO56Td7IiYW2', 'mirbek');

insert into tb_user(created,status,updated,age, email, gender, password, username)
VALUES ('2023-04-19 02:28:38.593', 'ACTIVE', '2023-04-19 02:28:38.593', 27, 'springboot1212@gmail.com','MALE', '$2a$10$DCj6yq2S9VHM5gS7p3ZRJ.fBCcjl7e4YHzYIodwwFic3IKR6EwpT2', 'ermek');

----tb_user_roles-----------------------------------------------------------------------------------------------------
insert into tb_user_roles(user_id,role_id)VALUES (1,1);
insert into tb_user_roles(user_id,role_id)VALUES (2,2);