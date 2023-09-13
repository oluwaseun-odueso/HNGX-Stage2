const { INTERNAL_SERVER_ERROR, NOT_FOUND, OK, } = require('http-status')

const {
   getAName,
   updateAName
} = require('./repository')

class NameService {
   constructor () {}

   retrieveName = async (id) => {
      try {
         const name = await getAName(name)
         if (!name) throw new Error(NOT_FOUND, "Name not found")
         return name
      } catch (error) {
         throw error
      }
   }

   updateName = async (id, name) => {
      try {
         const name = await getAName(name)
         if (!name) throw new Error(NOT_FOUND, "Name not found")
         const editedName = await updateAName(id, name)
         return editedName;
      } catch (error) {
         throw error
      }
   }
}

module.exports = new NameService;