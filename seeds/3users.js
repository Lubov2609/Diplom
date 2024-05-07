exports.seed = async function(knex) {
    await knex('users').del()
    await knex('users').insert([
        {id: 1,year_id :1,role_id :1, user_fio: 'Цымбалюк Лариса Николаевна', login: 'g1213', password: '1234xa', email: 'q1213@novsu.ru'},
        {id: 2,year_id :1,role_id :1, user_fio: 'Максимов Виктор Андреевич', login: 'g1343', password: '1343qa', email: 'q1343@novsu.ru'},
        {id: 3,year_id :1,role_id :1, user_fio: 'Макаров Николай Антонович', login: 'g1364', password: '1364da', email: 'q1364@novsu.ru'},
    ]);
};