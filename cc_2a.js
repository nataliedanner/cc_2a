let productname = "waterBottle";
console.log(productname);

let costPerUnit = 10;
let basePrice = 15;
let discountRate = 0.2;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 500;

let discountedPrice = (basePrice * (1 - discountRate));
console.log(discountedPrice.);

let finalPriceWithTax = (discountedPrice * (1 + salesTaxRate));
console.log(finalPriceWithTax);

let profitPerUnit = (finalPriceWithTax - costPerUnit);
console.log(profitPerUnit);

let breakEvenUnits = (Math.ceil(fixedMonthlyCosts / profitPerUnit));
console.log(breakEvenUnits);

