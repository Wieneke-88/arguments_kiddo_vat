//INHOUD; LEEFTIJDSSCAN MET GREETING 
//          -VAT BEREKENING 
//          -EERSTE GEBRUIK WHILE EN FOR LOOP ZOALS GEBRUIKT IN DE VIDEO 
//          NOG NIET HELEMAAL BEGRPEN - VAT BEREKENING GOED DOORLEZEN EN DOORGRONDEN 

const adultAge = function (age) {
    console.log('I define if someone if is old enough');
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const defineAge = function (age) {
    console.log('I define someones age');
    if (adultAge(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
}

console.log(defineAge(16)); // Hey kiddo 
console.log(defineAge(30));

/*
//VAT-berekening - opdracht 1
const calculateVAT = function (basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const priceIncludingVat = function (basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(priceIncludingVat(1000, 21));
console.log(priceIncludingVat(2, 9));

//Berekening VAT - opdracht 2 - nog bestuderen
const calculateBasePrice = function (priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function (priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]
*/

/*
let age = 5;
while (age < 10) {
    console.log("Your age is less than 10");
    age++;
}

console.log("You are now over 10");


for (age = 0; age < 10; age++) {
    console.log("Your age is less than 10");
}
console.log("You are now over 10");
*/