exports.seed = async function(knex) {
    await knex('students').del()
    await knex('students').insert([
        {id: 1,group_id :1, student_fio: 'Cкладник Любовь Сергеевна', student_gpa: '4.5', student_pz: 'https://pz1', student_tz: 'https://tz1'},
        {id: 1,group_id :2, student_fio: 'Соболева Дарья Романовна', student_gpa: '4.2', student_pz: 'https://pz2', student_tz: 'https://tz2'},
        {id: 1,group_id :3, student_fio: 'Нечаев Михаил Сергеевич', student_gpa: '4.0', student_pz: 'https://pz3', student_tz: 'https://tz3'},

    ]);
};