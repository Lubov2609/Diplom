exports.seed = async function(knex) {
    await knex('protocols').del()
    await knex('protocols').insert([
        {id: 1,year_id :3, user_id: 1, student_id: 1,list_id: 1},
        {id: 2,year_id :2, user_id: 2,  student_id: 3,list_id: 3},
        {id: 3,year_id :5, user_id: 3, student_id: 1,list_id: 2}

    ]);
};