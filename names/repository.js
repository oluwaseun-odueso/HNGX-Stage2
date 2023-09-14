const Name = require('./model')

class NameRepository {
   constructor() {}

   addName = async (name) => {
      try {
         const newName = await Name.create({ name })
         return JSON.parse(JSON.stringify(newName))
      } catch (error) {
         return error
      } 
   }

   getAName = async (id) => {
      try {
         const name = await Name.findOne({
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
         const newName = await Name.update({name}, {
            where: { id }
         })
         return newName;
      } catch (error) {
         return error 
      }
   }
}

module.exports = new NameRepository