const products = [
    {
        id: '482972',
        title: 'Camera',
        image: '../media/camera.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 499.99
    },
    {
        id: '759207',
        title: 'Cellphone',
        image: '../media/cell.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 399.99
    },
    {
        id: '209471',
        title: 'Processor AMD',
        image: '../media/Cpu.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 469.99
    },
    {
        id: '990758',
        title: 'Laptop',
        image: '../media/lap.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 639.99
    }
];

const image_product1 = document.querySelector('.image_product1');
const name_product1 = document.querySelector('.name_product1');
const id_product1 = document.querySelector('.id_product1');
const description_product1 = document.querySelector('.description_product1');
const price_product1 = document.querySelector('.price_product1');

const image_product2 = document.querySelector('.image_product2');
const name_product2 = document.querySelector('.name_product2');
const id_product2 = document.querySelector('.id_product2');
const description_product2 = document.querySelector('.description_product2');
const price_product2 = document.querySelector('.price_product2');

const image_product3 = document.querySelector('.image_product3');
const name_product3 = document.querySelector('.name_product3');
const id_product3 = document.querySelector('.id_product3');
const description_product3 = document.querySelector('.description_product3');
const price_product3 = document.querySelector('.price_product3');

const image_product4 = document.querySelector('.image_product4');
const name_product4 = document.querySelector('.name_product4');
const id_product4 = document.querySelector('.id_product4');
const description_product4 = document.querySelector('.description_product4');
const price_product4 = document.querySelector('.price_product4');

image_product1.src = `${products[0].image}`;
image_product2.src = `${products[1].image}`;
image_product3.src = `${products[2].image}`;
image_product4.src = `${products[3].image}`;

name_product1.innerHTML = `${products[0].title}`;
name_product2.innerHTML = `${products[1].title}`;
name_product3.innerHTML = `${products[2].title}`;
name_product4.innerHTML = `${products[3].title}`;

id_product1.innerHTML = `ID: ${products[0].id}`;
id_product2.innerHTML = `ID: ${products[1].id}`;
id_product3.innerHTML = `ID: ${products[2].id}`;
id_product4.innerHTML = `ID: ${products[3].id}`;

description_product1.innerHTML = `${products[0].description}`;
description_product2.innerHTML = `${products[1].description}`;
description_product3.innerHTML = `${products[2].description}`;
description_product4.innerHTML = `${products[3].description}`;

price_product1.innerHTML = `$ ${products[0].price} USD`;
price_product2.innerHTML = `$ ${products[1].price} USD`;
price_product3.innerHTML = `$ ${products[2].price} USD`;
price_product4.innerHTML = `$ ${products[3].price} USD`;