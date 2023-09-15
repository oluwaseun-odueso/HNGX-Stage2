const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, UNAUTHORIZED, NOT_ACCEPTABLE} = require('http-status')
const {
   addName,
} = require('./repository')

const {
   retrieveName,
   updateName,
   deleteAName
} = require('./services')


class NameController {

   saveName = async (req, res) => {
      try {
         const { name } = req.body;
         if (typeof(name) !== "string") {
            res.status(NOT_ACCEPTABLE).json({message: "Input should only be string"})
            return;
         }

         const newName = await addName (name)
         res.status(CREATED).json({message: "Name saved", newName})
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: 'Error saving name',
            error: error.message
        });
      }
   };

   getName = async (req, res) => {
      try {
         const name = await retrieveName (req.params.user_id)
         if (!name) {
            res.status(NOT_FOUND).json({message: "Name not found"})
            return
         }

         return res.status(OK).json({name})
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: 'Error getting name',
            error: error.message
        });
      }
   }

   editName = async (req, res) => {
      try {
         const userNname = await retrieveName (req.params.user_id)
         if (!userNname) {
            res.status(NOT_FOUND).json({message: "Name not found"})
            return
         }

         const { name } = req.body;
         if (typeof(name) !== "string") {
            res.status(400).json({message: "Input should only be string"})
            return
         }

         const newName = await updateName(req.params.user_id, name)
         res.status(OK).json({message: "Name updated", newName})
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: 'Error editing name',
            error: error.message
        });
      }
   }

   deleteName = async (req, res) => {
      try {
         const name = await retrieveName (req.params.user_id)
         if (!name) {
            res.status(NOT_FOUND).json({message: "Name not found"})
            return
         }

         await deleteAName(req.params.user_id)
         res.status(OK).json({message: "Name deleted"})
      } catch (error) {
         return res.status(500).json({
            success: false,
            message: 'Error deleting name',
            error: error.message
        });
      }
   }
}

module.exports = new NameController;