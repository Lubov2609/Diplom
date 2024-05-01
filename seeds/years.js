exports.seed = async function(knex) {
    await knex('years').del()
    await knex('years').insert([
        {id: 1, year_name: 2020},
        {id: 2, year_name: 2021},
        {id: 3, year_name: 2022},
        {id: 4, year_name: 2023},
        {id: 5, year_name: 2024}
    ]);
};