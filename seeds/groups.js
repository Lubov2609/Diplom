exports.seed = async function(knex) {
    await knex('groups').del()
    await knex('groups').insert([
        {id: 1,year_id :5, group_name: '0091'},
        {id: 2,year_id :5, group_name: '0092'},
        {id: 3,year_id :5, group_name: '0093'}

    ]);
};
