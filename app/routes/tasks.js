const express = require(`express`)
const router = express.Router()

const Task = require(`../models/Task`)

/**
 * GET: Returns one task with the task's id specified in the path
 */
router.get(`/:id`, async (req, res) => {
	try {
		const task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		else res.status(200).send(task)
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

/**
 * GET: Returns all tasks
 */
router.get(`/`, async (req, res) => {
	try {
		const taskList = await Task.find({UserId: req.user.Id})
		res.status(201).send(taskList);
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

/**
 * POST: Creates a new task
 */
router.post(`/`, async (req, res) => {
	try {
		if (req.body.Text == "" || req.body.Date == "") res.status(500).send()
		else{
			req.body.Done = false;
			req.body.UserId = req.user.Id
			let task = new Task(req.body)
			task = await task.save()
			res.status(201).send(task);
		}
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

/**
 * PUT: Updates a Task with unique id
 */
router.put(`/:id`, async (req, res) => {
	try {
		let task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		task.Done = req.body.Done;
		task = await task.save();
		res.status(201).send(task);
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

/**
 * DELETE: Deletes a task with unique id
 */
router.delete(`/:id`, async (req, res) => {
	try {
		let task = await Task.findById(req.params.id)
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		task = await Task.findByIdAndDelete(req.params.id)
		res.status(201).send(task);
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

module.exports = router