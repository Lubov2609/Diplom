exports.seed = async function(knex) {
    await knex('docs').del()
    await knex('docs').insert([
        {id: 1,year_id :3, doc_name: 'Приказ', doc_link: 'https://docs1'},
        {id: 2,year_id :2, doc_name: 'Приказ2', doc_link: 'https://docs2'},
        {id: 3,year_id :5, doc_name: 'Приказ3', doc_link: 'https://docs3'}

    ]);
};