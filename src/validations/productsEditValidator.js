const {check} = require('express-validator');



module.exports = [
    check('title')
        .notEmpty().withMessage('El titulo del producto es obligatorio')
        .bail()
        .isLength({
            min : 4,
            max : 50
        }).withMessage('Caracteres entre 4 y 50'),
    
    check('description')
        .notEmpty().withMessage('La descripcion del producto es obligatorio')
        .isLength({
            min : 5,
            max : 1000
        }),
]