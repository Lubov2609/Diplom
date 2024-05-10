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
SELECT * FROM vkrs ORDER BY id ASC;

SELECT
groups.id,
groups.group_name,
groups.year_id,
years.year_name AS years
FROM
groups
JOIN years
ON groups.year_id = years.id