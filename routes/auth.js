const express= require("express");
const authController = require('../controlers/auth');

const router = express.Router();

router.post('/register', authController.register );
router.post('/login', authController.login );
router.post('/forget', authController.forget );


module.exports = router;
