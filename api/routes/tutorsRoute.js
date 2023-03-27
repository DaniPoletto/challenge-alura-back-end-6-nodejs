const { Router } = require('express')
const TutorController = require('../controllers/TutorController')

const router = Router()

router.get('/tutors', TutorController.all)
router.get('/tutors/:id', TutorController.findOneById)
router.post('/tutors', TutorController.create)
router.put('/tutors/:id', TutorController.update)
router.delete('/tutors/:id', TutorController.delete)

module.exports = router