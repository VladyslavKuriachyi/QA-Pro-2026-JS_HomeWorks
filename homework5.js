
const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price:function(){
        let total = 0;

        for (let key in this) {
            if (typeof this[key] === "string") {
           let number = parseFloat(this[key].replace(',','.'));
           total += number;
            }
        }
        return total;
    },
    minPrice: function(){
        let min = null;
        for (let key in this) {
            if (typeof this[key] === "string") {
                let number = parseFloat(this[key].replace(',','.'));
                if (min === null || number <= min) {
                    min = number;
                }
            }
        }
        return min;
    },
    maxPrice: function(){
        let max = null;
        for (let key in this) {
            if (typeof this[key] === "string") {
                let number = parseFloat(this[key].replace(',','.'));
                if (max === null || number >= max) {
                    max = number;
                }
            }
        }
        return max;
    }

};
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());

services['Розбити скло'] = "200,20 грн";
services['skin Fade'] = "20 грн";
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
