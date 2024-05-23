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
            .where('student_id', student_id);

        return  lists;
    },
    create: async (list) => {
        const lists = await knex("lists").insert(list);
        return lists;
    },
};