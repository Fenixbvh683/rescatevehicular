const {check, body} = require('express-validator');



module.exports = [
    check('title')
        .notEmpty().withMessage('El titulo del producto es obligatorio')
        .bail()
        .isLength({
            min : 4,
            max : 50
                }).withMessage('Caracteres entre 4 y 50'),
    check('funcion')
        .notEmpty().withMessage('La categoria del producto es obligatorio'),
    
    check('modelo')
        .notEmpty().withMessage('El precio del producto es obligatorio'),
    check('description')
        .notEmpty().withMessage('La descripcion del producto es obligatorio')
        .isLength({
            min : 5, 
            max : 1000
                }).withMessage('Caracteres entre 5 y 1000'),
        body('image')
                .custom((value,{req}) => {
                    if(req.files.image){
                        return true
                    }
                    return false
                }).withMessage('Imagen pricipal obligatoria'),
];