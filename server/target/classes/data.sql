----tb_role-----------------------------------------------------------------------------------------------------------
insert into realestatesite.tb_role (status, name)
VALUES ('ACTIVE', 'ROLE_ADMIN');
insert into realestatesite.tb_role (status, name)
VALUES ('ACTIVE', 'ROLE_USER');

----tb_users----------------------------------------------------------------------------------------------------------
insert into realestatesite.tb_user(created, status, updated, age, email, gender, password, username)
VALUES ('2023-04-19 02:28:38.593', 'ACTIVE', '2023-04-19 02:28:38.593', 29, 'mirbek@gmail.com', 'MALE',
        '$2a$04$D4lt18K/P3amgzfb2FGAm.6UEMj2hVE3YWVtbuaCBRTU0g4lMTz3i', 'mirbek');

insert into realestatesite.tb_user(created, status, updated, age, email, gender, password, username)
VALUES ('2023-04-19 02:28:38.593', 'ACTIVE', '2023-04-19 02:28:38.593', 27, 'springboot1212@gmail.com', 'MALE',
        '$2a$10$DCj6yq2S9VHM5gS7p3ZRJ.fBCcjl7e4YHzYIodwwFic3IKR6EwpT2', 'ermek');

----tb_user_roles-----------------------------------------------------------------------------------------------------
insert into realestatesite.tb_user_roles(user_id,role_id)VALUES (1,1);
insert into realestatesite.tb_user_roles(user_id,role_id)VALUES (2,2);

----tb_announcement---------------------------------------------------------------------------------------------------
insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Ленина 123', 80, 'Бишкек', 'Красивая квартира в самом сердце города с прекрасным видом и множеством естественного света.', 'продажа', 50000, 2, '2-комнатная квартира в центре города', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Чуйская 456', 35, 'Бишкек', 'Уютная студия с новым ремонтом, удобным расположением и всем необходимым для комфортного проживания.', 'аренда', 3000, 1, 'Студия на сутки', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Ибраимова 56', 90, 'Бишкек', 'Просторная квартира с панорамными окнами и видом на горы, расположена в новом доме в тихом районе.', 'продажа', 80000, 3, 'Квартира с видом на горы', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Манаса 12', 50, 'Бишкек', 'Квартира с новым ремонтом в центре города, рядом со всеми необходимыми объектами инфраструктуры.', 'аренда', 25000, 1, 'Аренда квартиры в центре', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Токтогула 155', 100, 'Бишкек', 'Просторная квартира в новом доме с высокими потолками и большими окнами, расположена в тихом районе города.', 'продажа', 70000, 3, '3-комнатная квартира', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Ленина 22', 60, 'Ош', 'Продается уютный дом в тихом и зеленом районе, идеальное место для жизни с семьей.', 'продажа', 55000, 2, 'Дом на продажу', 'дом', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Кирова 10', 1500, 'Каракол', 'Продается участок земли в 15 км от города, рядом с лесом и рекой, идеальное место для строительства коттеджа.', 'продажа', 15000, 0, 'Участок земли', 'земля', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Курманжан Датка 5', 50, 'Талас', 'Квартира находится в центре города, рядом с парком и множеством магазинов и кафе.', 'продажа', 45000, 1, 'Квартира в центре города', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Фрунзе 18', 40, 'Баткен', 'Сдаю квартиру на длительный срок, отличный вариант для семейной пары или одинокого человека.', 'аренда', 25000, 1, 'Квартира на длительный срок', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Боконбаева 12', 80, 'Нарын', 'Сдаю квартиру на длительный срок в новом доме, в квартире сделан дорогой ремонт, установлены новые мебель и техника.', 'аренда', 35000, 2, 'Просторная квартира в новом доме', 'квартира', 1);

insert into realestatesite.tb_announcement(created, status, updated, address, area, city, description, offer, price, rooms, title, type, user_id)
VALUES (current_timestamp, 'ACTIVE', current_timestamp, 'ул. Жибек Жолу 33', 100, 'Токмок', 'Сдаю дом на длительный срок, идеальное место для большой семьи или компании друзей.', 'аренда', 50000, 4, 'Дом на съем', 'дом', 1);