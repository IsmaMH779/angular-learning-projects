import { taxCalculation, type Product } from "./06-function-destructuring";


const shopingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 160
    }
];

const [ total, tax ] = taxCalculation({
    products: shopingCart,
    tax: 1.50
});

console.log('Total', total)
console.log('Tax', tax)