const router =require('express').Router();
const eventController =require('../controllers/event.controller');
const multer= require('multer');
const upload=multer();

router.get('/' ,eventController.readEvent);
router.post('/' ,upload.single('file'),eventController.createEvent);
router.put('/:id' ,eventController.updateEvent);
router.delete('/:id' ,eventController.deleteEvent);
router.patch('/like-event/:id', eventController.likeEvent);
router.patch('/unlike-event/:id', eventController.unlikeEvent);
module.exports=router

