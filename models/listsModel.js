const knex = require('../db/db');

module.exports = listsModel =
{
    getAll: async (student_id) => {
        const lists = await knex('lists')
           .select ('user_id','student_id','g1','g2','g3_1','g3_2','g3_3', 'g4_1', 'g4_2', 'g4_3', 'g4_4', 'g4_5', 'g4_6')

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
    getAll4: async () => {
        const lists =knex
            // .select("lists.id", "lists.student_id" ,  "students.student_fio")
            // .from("lists")
            // .join("students","lists.student_id","students.id")
                .select(knex.raw(' round(avg(x.avg_user),1) as res from(select student_id,round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user from lists ) x '))
            ;



        return  lists;
    },
    getAll5: async (group_id) => {

        const lists =knex()
            .select(knex.raw(' round(avg(x.avg_user),1) as res from(select student_id,round(((round(((g1+g2+g3_1+g3_2+g3_3)/5),1)+round(((g4_1+g4_2+g4_3+g4_4+g4_5+g4_6)/6),1))/2),1) as avg_user from lists ) x '))
            // .select(knex.raw('student_fio as student'))
            // .select(knex.raw('student_gpa as gpa_st'))
            // .select(knex.raw('(student_gpa+res/2) as gpa_st'))
            // .from("students")
            .select("students.id", "students.student_fio", "students.student_gpa", "groups.group_name" )
            .from("students")
            .join("groups","students.group_id","groups.id")
            .join ('students', 'lists.student_id','students.id')
            .where('group_id',group_id);

        return  lists;
    },
    create: async (list) => {
        const lists = await knex("lists").insert(list);
        return lists;
    },
};