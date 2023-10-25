const { v4: uuidv4 } = require('uuid');

const Product = function ({title,funcion,peso,modelo,description, image, images}) {

    this.id = uuidv4();
    this.title = title.trim();
    this.funcion = funcion.trim();
    this.peso = +peso;
    this.modelo = modelo.trim();
    this.description = description.trim();
    this.image = image;
    this.images = images;
    this.createAt = new Date;
}

module.exports = Product
