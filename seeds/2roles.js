exports.seed = async function(knex) {
  await knex('roles').del()
  await knex('roles').insert([
    {id: 1, role_name: 'Председатель'},
    {id: 2, role_name: 'Член ГЭК'},
  ]);
};
