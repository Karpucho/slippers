<<<<<<< HEAD
// const { Product} = require('../db/models')
// const { Op } = require('@sequelize/core');

// async function ( req, res) =>{
//    await Product.findAll({
//      where: {
//        [Product.like]
//      }
//    })
// }

// module.exports = 
=======
const { Product} = require('../db/models')
const { Op } = require('@sequelize/core');

async function ( req, res) =>{
   await Product.findAll({
     where: {
       [Product.like]
     }
   })
}

module.exports = 
>>>>>>> 5b49821df5d4bef19398b224c3699b53538b8778
