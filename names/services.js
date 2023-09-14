const { INTERNAL_SERVER_ERROR, NOT_FOUND, OK, } = require('http-status')

const {
   getAName,
   updateAName,
   deleteAName
} = require('./repository')

class NameService {
   constructor () {}

   retrieveName = async (id) => {
      try {
         const name = await getAName(id)
         return name
      } catch (error) {
         throw error
      }
   }

   updateName = async (id, newName) => {
      try {
         await updateAName(id, newName)
         const editedName = await getAName(id)
         return editedName;
      } catch (error) {
         throw error
      }
   }

   deleteAName = async (id) => {
      try {
         await deleteAName(id)
         return true 
      } catch (error) {
         throw error
      }
   }
}

module.exports = new NameService;