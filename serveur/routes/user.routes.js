const router =require ('express').Router();
const authController=require('../controllers/aut.controller');
const userController=require('../controllers/user.controller');
const uploadController=require('../controllers/upload.controller');
const multer= require('multer');
const { checkUser } = require('../middleware/aut.middleware');
const upload=multer();


//auth
router.post("/register",authController.signUp);
router.post('/login',authController.signIn);
router.get('/logout',authController.logout);


//user 
router.get('/' ,userController.getAllUsers);
router.get('/:id' ,userController.userInfo);
router.put('/:id' ,userController.updateUser);
router.delete('/:id',userController.deleteUser);
router.put('/:id',userController.likeEvent);


//upload image
router.post("/upload",upload.single('file') ,uploadController.uploadProfil)



module.exports=router;