const Name = require('./model')
const Names = require('./model')

class NameRepository {
   constructor() {}

   addName = async (name) => {
      try {
         const name = await Names.create({ name })
         return name
      } catch (error) {
         return error
      } 
   }

   getAName = async (id) => {
      try {
         const name = await Names.findOne({
         where: { id }
         })
         return name
      } catch (error) {
         return error
      }
   }

   deleteAName = async (id) => {
      try {
         const response = await Name.destroy({
            where: { id } 
         })
         return response
      } catch (error) {
         return error
      }
   }

   updateAName = async (id, name) => {
      try {
         const name = await User.update({name}, {
            where: { id }
         })
         return name
      } catch (error) {
         return error 
      }
   }
}

module.exports = new NameRepository