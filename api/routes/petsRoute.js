const { Router } = require('express')
const PetsController = require('../controllers/PetController')

const router = Router()

router.get('/pets', PetsController.all)
router.get('/pets/:id', PetsController.findOneById)
router.post('/pets', PetsController.create)
router.put('/pets/:id', PetsController.update)
router.delete('/pets/:id', PetsController.delete)

module.exports = router