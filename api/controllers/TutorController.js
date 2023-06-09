const database = require('../models')

class TutorController {
    static async all(req, res) {
        try {
            const allTutor = await database.Tutors.findAll()
            return res.status(200).json(allTutor)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneById (req, res) {
        const { id } = req.params
        try {
            const classFound = await database.Tutors.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(classFound)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create (req, res) {
        const newClass = req.body
        try {
            const newClassCreated = await database.Tutors.create(newClass);
            return res.status(200).json(newClassCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update (req, res) {
        const classToUpdate = req.body
        const { id } = req.params
        try {
            await database.Tutors.update(classToUpdate, { where : { 
                id : Number(id)
            }});
            const classUpdated = await database.Tutors.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(classUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try {
            const classDeleted = await database.Tutors.destroy( { where : { 
                id : Number(id)
            }});
            return res.status(200).json({ message: `id ${id} was deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TutorController