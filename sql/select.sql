-- Connect database
-- \connect stroysnab_development;

-- Open terminal psql
-- \i sql/select.sql
-- SQL Select roles
-- SELECT * FROM roles ORDER BY id ASC;
-- -- SQL Select group
-- SELECT * FROM groups ORDER BY id ASC;
--
-- -- SQL Select years
-- SELECT * FROM years ORDER BY id ASC;
--
-- -- SQL Select users
-- SELECT * FROM users ORDER BY id ASC;
--
-- -- SQL Select students
-- SELECT * FROM students ORDER BY id_student ASC;
--
-- -- SQL Select protocols
-- SELECT * FROM protocols ORDER BY id ASC;
--
-- -- SQL Select docs
-- SELECT * FROM lists ORDER BY id ASC;
-- SELECT * FROM vkrs ORDER BY id ASC;
--
-- SELECT
-- groups.id,
-- groups.group_name,
-- groups.year_id,
-- years.year_name AS years
-- FROM
-- groups
-- JOIN years
-- ON groups.year_id = years.id

-- select avg(g1+g2+g3_1+g3_2+g3_3)/5 from lists

-- select student_id, g1, g2, g3_1, g3_2, g3_3, g4_1, g4_2, g4_3, g4_4, g4_5, g4_6, round(((g1+g2+g3_1+g3_2+g3_3)/5),2) as avg_vkr, round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),2) as avg_protect, round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),2)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),2))/2),2) as avg_user from lists;


-- select g1, g2, g3_1, g3_2, g3_3, g4_1, g4_2, g4_3, g4_4, g4_5, g4_6,  round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),2)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),2))/2),2) as avg_user,  from lists;





--
-- select lists.*,sum(res)/count(res) as avg from
-- (
-- select  (g1+g2)/2 as res from  lists)lists
-- group by res;
-- select *from lists




-- работает и реализовано в модели
--
--  select  round(avg(x.avg_user),1) as res from
--  (select student_id as st,round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1)
--  as avg_user from lists ) x
--  where student_id=1;

-- SELECT
-- lists.user_id,
-- students.id,
-- students.student_fio,
-- students.student_gpa,
-- lists.g1,
--
-- lists.g2


-- select y.st,round(((y.res+y.gpa)/2),1) as result, y.fio, y.group_id  from (select x.st as st, round(avg(x.avg_user),1) as res, x.fio as fio, x.gpa as gpa, x.group_id as group_id from (select student_id as st,student_fio as fio,student_gpa as gpa, group_id as group_id, round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user from lists join students on lists.student_id=students.id ) x group by st,fio, gpa, group_id)y
select * from lists;

