----tb_users----------------------------------------------------------------------------------------------------------
insert into realestatesite.tb_user(created, status, updated, age, email, password, username)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 25, 'toktievabdyvali@gmail.com', '$2a$12$r1J2WKkWpPpOz1NPxKRfLuUj297YLCyBi5vEpGFN6LXv.HwoHNB2.', 'Abduvali');

insert into realestatesite.tb_user(created, status, updated, age, email, password, username)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 22, 'testtestovvv7@gmail.com', '$2a$12$he802xXTcL9nmZfBCtFCweY/fDuJ8JV9N8tpANWjKNZggZWxwLXAy', 'Test');

----tb_role-----------------------------------------------------------------------------------------------------------
insert into realestatesite.tb_role (status, name) VALUES ('ACTIVE', 'ROLE_ADMIN');
insert into realestatesite.tb_role (status, name) VALUES ('ACTIVE', 'ROLE_USER');

----tb_user_roles-----------------------------------------------------------------------------------------------------
insert into realestatesite.tb_user_roles(user_id,role_id)VALUES (1,1);
insert into realestatesite.tb_user_roles(user_id,role_id)VALUES (2,2);