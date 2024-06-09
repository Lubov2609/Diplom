const knex = require('../db/db');

module.exports = listsModel =
{
    studentAll: async (group_id,year_id) => {
        const students = await knex
            .select("students.id", "students.student_fio","students.group_id", "students.student_gpa", "groups.year_id","groups.group_name")
            .from("students")
            .join("groups","students.group_id","groups.id")
            .where('students.group_id',group_id)
            .where('groups.year_id',year_id);

        return students;
    },
    groupsAll: async (year_id) => {
        const docs = await knex('groups').where('year_id', year_id);
        return docs;
    },
    getAll: async (student_id) => {
        const lists = await knex('lists')
           .select ('id','user_id','student_id','g1','g2','g3_1','g3_2','g3_3', 'g4_1', 'g4_2', 'g4_3', 'g4_4', 'g4_5', 'g4_6')
            .select( knex.raw(' round(((g1+g2+g3_1+g3_2+g3_3)/5),1) as avg_vkr'))
            .select( knex.raw('round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1) as avg_protect '))
            .select( knex.raw('round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user'))
            .where('student_id', student_id);
        return  lists;
    },
    getAll2: async (student_id) => {
        const lists = await knex('lists')
            .select ('user_id','student_id','g1','g2','g3_1','g3_2','g3_3', 'g4_1', 'g4_2', 'g4_3', 'g4_4', 'g4_5', 'g4_6')
            .select( knex.raw(' round(((g1+g2+g3_1+g3_2+g3_3)/5),1) as avg_vkr'))
            .select( knex.raw('round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1) as avg_protect '))
            .select( knex.raw('round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user'))
            .select(knex.raw('user_fio as users'))
            .join("users","lists.user_id","users.id")

    .where('student_id', student_id);

        return  lists;
    },
    getAll3: async (student_id) => {
        const lists =knex()
            .select(knex.raw(' round(avg(x.avg_user),1) as res from(select student_id,round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user from lists ) x '))

            .where('student_id', student_id);

        return  lists;
    },
    getAll4: async (group_id) => {
        const lists =knex()

                .select(knex.raw(' y.id,round(((y.res+y.gpa)/2),1) as result, y.fio, y.group_id  from (select x.id as id, round(avg(x.avg_user),1) as res, x.fio as fio, x.gpa as gpa, x.group_id as group_id from (select student_id as id,student_fio as fio,student_gpa as gpa, group_id as group_id, round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user from lists join students on lists.student_id=students.id ) x group by id,fio, gpa, group_id)y\n'))
            .where('group_id', group_id);

        return  lists;
    },



    create: async (list) => {
        const lists = await knex("lists").insert(list);
        return lists;
    },
    groupAll: async () => {
        const groups = await knex
            .select("groups.id", "groups.group_name", "groups.year_id","students.student_fio", "students.id")
            .from("groups")
            .join("students","students.group_id","groups.id");
        return groups;
    },
    getById: async (id) => {
        const list = await knex("lists")
            .where('id', id);

        return list;
    },
    update: async (id, list) => {
        const lists = await knex("lists")
            .select("lists.id", "lists.g1",'list.student_id','lists.g2','lists.g3_1','lists.g3_2','lists.g3_3', 'lists.g4_1', 'lists.g4_2', 'lists.g4_3', 'lists.g4_4', 'lists.g4_5', 'lists.g4_6' , "students.student_fio")
            .from("lists")
            .join("students","lists.student_id","lists.id")
            .where("lists.id", id).update(
                {
                    g1:list.g1,
                    g2: list.g2,
                    g3_1:list.g3_1,
                    g3_2: list.g3_2,
                    g3_3:list.g3_3,
                    g4_1: list.g4_1,
                    g4_2:list.g4_2,
                    g4_3: list.g4_3,
                    g4_4:list.g4_4,
                    g4_5: list.g4_5,
                    g4_6: list.g4_6,

                    student_id:list.student_id,
                }
            );
        return lists;
    },
    studentsAll: async () => {
        const students = await knex('students');

        const lists = await knex("lists")
            .select("lists.id", "lists.g1",'lists.student_id','lists.g2','lists.g3_1','lists.g3_2','lists.g3_3', 'lists.g4_1', 'lists.g4_2', 'lists.g4_3', 'lists.g4_4', 'lists.g4_5', 'lists.g4_6' , "students.student_fio")
            .from("lists")
            .join("students","lists.student_id","lists.id")
        return students;
    },
    usersAll: async () => {
        const users = await knex('users');

        const lists = await knex("lists")
            .select("lists.id", "lists.g1",'lists.user_id','lists.g2','lists.g3_1','lists.g3_2','lists.g3_3', 'lists.g4_1', 'lists.g4_2', 'lists.g4_3', 'lists.g4_4', 'lists.g4_5', 'lists.g4_6' , "users.user_fio")
            .from("lists")
            .join("users","lists.user_id","users.id")
        return users;
    },
    getStudent: async (id) => {
        const student = await knex("students")
            // .select("students.student_fio","lists.student_id","students.id")
            // .from("students")
            // .join("lists","lists.student_id","students.id")
            .where('id', id);
        return student;
    },
};