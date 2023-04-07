const { Router } = require('express')
const ShelterController = require('../controllers/ShelterController')

const router = Router()

router.get('/shelters', ShelterController.all)
router.get('/shelters/:id', ShelterController.findOneById)
router.post('/shelters', ShelterController.create)
router.put('/shelters/:id', ShelterController.update)
router.delete('/shelters/:id', ShelterController.delete)

module.exports = router