const { Router } = require('express')
const AdoptionController = require('../controllers/AdoptionController')

const router = Router()

router.post('/adoptions', AdoptionController.create)
router.delete('/adoptions/:id', AdoptionController.delete)

module.exports = router