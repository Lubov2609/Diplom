-- Connect database
-- \connect my_db;
--
-- Open terminal psql
-- \i sql/insert.sql
-- SQL Insert in Years
INSERT INTO years VALUES (1,2020);
INSERT INTO years VALUES (3,2022);
INSERT INTO years VALUES (4,2023);
INSERT INTO years VALUES (5,2024);
-- SQL Insert in Roles
INSERT INTO roles VALUES (1,'Председатель');
INSERT INTO roles VALUES (2,'Член ГЭК');
-- SQL Insert in Group
INSERT INTO groups VALUES (1,4,'0091');

INSERT INTO groups VALUES (2,4,'0092');

INSERT INTO groups VALUES (3,4,'0093');

-- SQL Insert in Docs
INSERT INTO docs VALUES (1,4,'Приказ','http://qqw');
INSERT INTO docs VALUES (2,3,'Приказ1','http://qqw');
-- SQL Insert in Users
INSERT INTO users VALUES (1,4,2,'Цымбалюк Лариса Николаевна','gg2401','123','qq24@dmail.com');

INSERT INTO users VALUES (2,4,1,'Нечаев Михаил Николаевич','gg2401','123','qq24@dmail.com');


-- SQL Insert in Students
INSERT INTO students VALUES (1,2,'Cкладник Любовь Сергеевна',4.4,'http12','http23',4);


INSERT INTO students VALUES (2,2,'Соболева Дарья Романовна',4.1,'http222','http333',4);
-- SQL Insert in Protocols
INSERT INTO protocols VALUES (1,2,1,3);
INSERT INTO protocols VALUES (2,1,2,3);