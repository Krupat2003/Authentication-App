//express-validator = middleware for inputs validation
const {body} = require("express-validator");

module.exports.registerValidations = [
    body('name').not().isEmpty().trim().escape().withMessage('name is required'),
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('Email is required'),
    // body('password').isLength({ min: 8 }).withMessage('password should be 8 characters or more '),
    body('password').isLength({ min: 8 }).withMessage('password should be 8 characters or more'),
    body('city').not().isEmpty().trim().escape().withMessage('city is required')
    
]

module.exports.loginValidations = [
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('Email is required'),
    body('password').not().isEmpty().withMessage('password is required')
]