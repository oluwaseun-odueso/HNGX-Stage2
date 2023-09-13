const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, UNAUTHORIZED} = require('http-status')
const {
   addName,
} = require('./repository')

const {
   retrieveName,
   updateName,
   deleteAName
} = require('./services')


class NameController {
   constructor(
      namesServices
   ) {}

   saveName = async (req, res) => {
      try {
         const { name } = req.body;
         const newName = await addName (name)
         res.staus(CREATED).json({message: "Name saved", newName})
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
         const { name } = req.body;
         const editedName = await updateName(req.params.user_id, name)
         res.staus(OK).json({message: "Name updated", editedName})
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
         await deleteAName(req.params.user_id)
         res.staus(OK).json({message: "Name deleted", editedName})
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