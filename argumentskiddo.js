const rightAge = function (age) {
    console.log('I define if someone is old enough');
    if (age >= 18) {
        return true;
    } else {
        return false;
    };
};

const defineAge = function (age) {
    console.log('I define someones age');
    return rightAge();
};

console.log(defineAge(18));


const priceWithVat = function (vatCalculation) {
    console.log(priceWithVat);
};

const vatCalculation = function (price, vat) {
    const priceWithVat = price * vat;
    return priceWithVat();
};

console.log(vatCalculation(20, 0.21))