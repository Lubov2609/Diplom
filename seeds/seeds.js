exports.seed = async function(knex) {
    await knex('years').del()
    await knex('years').insert([
        {id: 1, year_name: 2020},
        {id: 2, year_name: 2021},
        {id: 3, year_name: 2022},
        {id: 4, year_name: 2023},
        {id: 5, year_name: 2024},
        {id: 6, year_name: 2025},
    ]);

    await knex('roles').del()
    await knex('roles').insert([
        {id: 1, role_name: 'Председатель'},
        {id: 2, role_name: 'Член ГЭК'},
    ]);

    await knex('users').del()
    await knex('users').insert([
        {id: 1,year_id :2,role_id :2, user_fio: 'Цымбалюк Лариса Николаевна',  password: '1234xa', email: 'q1213@novsu.ru'},
        {id: 2,year_id :1,role_id :1, user_fio: 'Максимов Виктор Андреевич', password: '1343qa', email: 'q1343@novsu.ru'},
        {id: 3,year_id :4,role_id :2, user_fio: 'Макаров Николай Антонович', password: '1364da', email: 'q1364@novsu.ru'},
    ]);

    await knex('groups').del()
    await knex('groups').insert([
        {id: 1,year_id :5, group_name: '0091'},
        {id: 2,year_id :5, group_name: '0092'},
        {id: 3,year_id :5, group_name: '0093'},
        {id: 4,year_id :6, group_name: '0095'}

    ]);

    await knex('students').del()
    await knex('students').insert([
        {id:1, group_id :1, student_fio: 'Cкладник Любовь Сергеевна', student_gpa: '4.5'},
        {id:2, group_id :1, student_fio: 'Соболева Дарья Романовна', student_gpa: '4.2'},
        {id:3, group_id :1, student_fio: 'Нечаев Михаил Сергеевич', student_gpa: '4.0'},
        {id:4, group_id :1, student_fio: 'Васильев Даниил Сергеевич', student_gpa: '4.5'},
        {id:5, group_id :1, student_fio: 'Курилов Роман Анатольевич', student_gpa: '4.2'},
        {id:6, group_id :1, student_fio: 'Радаев Кирилл Владимирович', student_gpa: '4.0'},
        {id:7, group_id :1, student_fio: 'Шапкина Алена Валерьевна', student_gpa: '4.5'},
        {id:8, group_id :1, student_fio: 'Шиков Кирилл Викторович', student_gpa: '4.2'},
        {id:9, group_id :1, student_fio: 'Васильев Дмитрий Александрович', student_gpa: '4.0'},
        {id:10, group_id :1, student_fio: 'Кунец Никита Александрович', student_gpa: '4.0'}


    ]);
    await knex('vkrs').del()
    await knex('vkrs').insert([
        {id:1, student_id :1, file: 'Пояснительная записка_Складник', file_pz: ' записка_Скик'},
        {id:2, student_id :3, file: 'Пояснительная записка_Нечаев', file_pz: ' записка_С'},
        {id:3, student_id :2, file: 'Пояснительная записка_Соболева', file_pz: ' Техническое задание_Соболева'}
    ]);



        await knex('protocols').del()
    await knex('protocols').insert([
        {id: 1, user_id: 1, student_id: 1,list_id: 1},
        {id: 2, user_id: 2,  student_id: 3,list_id: 3},
        {id: 3, user_id: 3, student_id: 1,list_id: 2}
    ]);

    await knex('docs').del()
    await knex('docs').insert([
        {id: 1, file: 'Приказ',  year_id :3},
        {id: 2, file: 'Приказ2', year_id :2},
        {id: 3, file: 'Приказ подтвержденных тем ВКР 0091', year_id :4},
        {id: 4, file: 'Приказ о допуске студентов', year_id :4},
        {id: 5, file: 'График защиты ВКР', year_id :4},
        {id: 6, file: 'Список ГЭК', year_id :4}

    ]);
    await knex('lists').del()
    await knex('lists').insert([
        {id: 1, user_id:1, student_id:1,g1:5,g2:4.5,g3_1:4.8,g3_2:2.7,g3_3:4.5,g4_1:5,g4_2:3.9,g4_3:5,g4_4:4.9,g4_5:4.7,g4_6:5},

        {id: 2, user_id:1, student_id:2,g1:5,g2:3.5,g3_1:3.8,g3_2:4.7,g3_3:4.1,g4_1:3.4,g4_2:4.9,g4_3:4,g4_4:3.9,g4_5:5,g4_6:5},
        {id: 3, user_id:2, student_id:1,g1:5,g2:3.5,g3_1:2.8,g3_2:3.7,g3_3:4.5,g4_1:5,g4_2:3.9,g4_3:5,g4_4:4.9,g4_5:4.7,g4_6:5},
        {id: 4, user_id:2, student_id:2,g1:5,g2:2.5,g3_1:2.8,g3_2:2.7,g3_3:4.1,g4_1:3.4,g4_2:4.9,g4_3:4,g4_4:3.9,g4_5:5,g4_6:4},
        {id: 5, user_id:1, student_id:3,g1:5,g2:3.5,g3_1:3.8,g3_2:3.7,g3_3:4.5,g4_1:5,g4_2:3.9,g4_3:5,g4_4:4.9,g4_5:4.7,g4_6:5},
        {id: 6, user_id:2, student_id:3,g1:5,g2:3.5,g3_1:3.8,g3_2:3.7,g3_3:4.5,g4_1:5,g4_2:3.9,g4_3:4,g4_4:4.9,g4_5:4.7,g4_6:4},
        {id: 7, user_id:3, student_id:3,g1:5,g2:3.5,g3_1:3.8,g3_2:3.7,g3_3:4.5,g4_1:4,g4_2:3.9,g4_3:4,g4_4:4.9,g4_5:4.7,g4_6:5},
        {id: 8, user_id:2, student_id:4,g1:5,g2:3.5,g3_1:3.8,g3_2:3.7,g3_3:3.5,g4_1:5,g4_2:2.9,g4_3:5,g4_4:3.9,g4_5:3.7,g4_6:4},
        {id: 9, user_id:3, student_id:5,g1:5,g2:4.2,g3_1:3.3,g3_2:4.7,g3_3:4.5,g4_1:5,g4_2:3.9,g4_3:4,g4_4:3.9,g4_5:4.7,g4_6:4},
        {id: 10, user_id:3, student_id:6,g1:5,g2:3.5,g3_1:3.8,g3_2:2.7,g3_3:4.5,g4_1:3,g4_2:4.9,g4_3:5,g4_4:4.9,g4_5:4.7,g4_6:5},
        {id: 11, user_id:3, student_id:7,g1:5,g2:4.5,g3_1:3.8,g3_2:3.7,g3_3:3.5,g4_1:5,g4_2:3.9,g4_3:5,g4_4:2.9,g4_5:3.7,g4_6:5},

    ]);
};