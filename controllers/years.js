// const knex = require('../db/db');
//
//
// const slugify = require('slug');
//
// /*
//  * GET /brands
//  */
// // eslint-disable-next-line import/prefer-default-export, consistent-return
// export async function getAll(req, res, next) {
//     let years;
//
//     try {
//         years = await knex('years').orderBy('id', 'ASC');
//     } catch ({ message }) {
//         return next({
//             status: 500,
//             message,
//         });
//     }
//
//     res.json({ years });
// }
//
// /*
//  * POST /brands
//  */
// // eslint-disable-next-line import/prefer-default-export, consistent-return
// export async function create(req, res, next) {
//     const yearData = {
//         year_name: req.body.year_name,
//     };
//
//     try {
//         await knex('years').insert(yearData);
//     } catch ({ message }) {
//         return next({
//             status: 400,
//             message,
//         });
//     }
//
//     res.json({ message: 'Year created success' });
// }
//
// /*
//  * GET /brands/:guid
//  */
// export async function getYear(req, res, next) {
//     const guid = req.params.year_name;
//     let year;
//
//     try {
//         year = await knex('years').where('year', guid);
//     } catch ({ message }) {
//         return next({
//             status: 500,
//             message,
//         });
//     }
//
//     if (!year[0]) {
//         return res.status(404).json({ message: 'Year not found' });
//     }
//
//     // [0] - удаляет квадратные скобки в выводе
//     return res.json(year[0]);
// }
//
// /*
//  * PUT /brands/:guid
//  */
// export async function editYear(req, res, next) {
//     const guid = req.params.year;
//     const dateNow = new Date();
//     const yearData = {
//         year_name: req.body.year_name,
//
//     };
//     let year;
//
//     try {
//         year = await knex('years').where('year', guid);
//     } catch ({ message }) {
//         return next({
//             status: 500,
//             message,
//         });
//     }
//
//     if (!year[0]) {
//         return res.status(404).json({ message: 'Year not found' });
//     }
//
//     try {
//         await knex('years')
//             .where('year', guid)
//             .update(yearData)
//             .update({ updated_at: dateNow });
//     } catch  {
//         return next({
//             status: 500,
//             // message,
//         });
//     }
//
//     return res.json({ message: 'Years updated success' });
// }
//
// /*
//  * DELETE /brands/:guid
//  */
// export async function deleteYear(req, res, next) {
//     const guid = req.params.year;
//     let year;
//
//     try {
//         year = await knex('years').where('year', guid);
//     } catch   {
//         return next({
//             status: 500,
//             // message,
//         });
//     }
//
//     if (!year[0]) {
//         return res.status(404).json({ message: 'Year not found' });
//     }
//
//     try {
//         await knex('years')
//             .where('year', guid)
//             .del();
//     } catch ({ message }) {
//         return next({
//             status: 500,
//             message,
//         });
//     }
//
//     return res.json({ message: 'Year deleted success' });
// }










// const express = require('express')
//
// const { Years, Docs } = require('../models/years')
//
// const router = express.Router()
//
// router.get('/',  (req, res) => {
//     Years.query("").then(years=>{
//         res.json(years)
//     })
//
// })
//
// router.get('/:id', async (req, res) => {
//     const year = await Years.query().findById(req.params.id).eager('docs')
//     res.json(year)
// })
//
// router.post('/', async (req, res) => {
//     const newYear = req.body
//
//     const year = await Years.query()
//         .allowInsert('[year, creator]')
//         .insertGraph(newYear)
//
//     res.send(year)
// })
//
// router.post('/:id/docs', async (req, res) => {
//     const year = await Years.query().findById(req.params.id)
//
//     await year.$relatedQuery('docs')
//         .allowInsert('[doc, creator]')
//         .insert(req.body)
//
//     res.send(year)
// })
//
// router.delete('/:id', async (req, res) => {
//     await Years.query().deleteById(req.params.id)
//
//     res.redirect('/years')
// })
//
// router.delete('/:id/docs/:docId', async (req, res) => {
//     await Docs.query().deleteById(req.params.docId)
//
//     res.redirect(`/years/${req.params.id}`)
// })
//
// module.exports = router