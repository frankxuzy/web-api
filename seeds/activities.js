exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 10001, name: 'running', frequency: 'daily', level: 2},
        {id: 10002, name: 'skipping', frequency: 'daily', level: 3},
        {id: 10003, name: 'cycling', frequency: 'weekly', level: 4}
      ])
    })
}
