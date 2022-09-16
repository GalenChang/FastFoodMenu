const fastFoodItems = {
    sodaLarge:     {calories: 380, fat: 0, sodium: 10},
    sodaMedium:    {calories: 290, fat: 0, sodium: 5},
    sodaSmall:     {calories: 140, fat: 0, sodium: 0},
    frappeLarge:   {calories: 600, fat: 25, sodium: 360},
    frappeSmall:   {calories: 410, fat: 19, sodium: 230},
    burger:        {calories: 650, fat: 37, sodium: 910},
    doubleBurger: {calories: 900, fat: 56, sodium: 980},
    tripleBurger: {calories: 1160, fat: 75, sodium: 1050},
    chickenSandwich: {calories: 660, fat: 40, sodium: 1220},
    friesLarge:    {calories: 500, fat: 22, sodium: 900},
    friesMedium:   {calories: 410, fat: 18, sodium: 570},
    friesSmall:    {calories: 240, fat: 10, sodium: 330}
};

class fastFoodMenu {
    constructor(foodItems) {
        this.foodItems = foodItems;
        this.calLim = 2000;
        this.fatLim = 70;
        this.sodLim = 2300;
        this.curCal = 0;
        this.curFat = 0;
        this.curSod = 0;
    }

    add(food) {
        this.curCal += this.foodItems[food].calories;
        this.curFat += this.foodItems[food].fat;
        this.curSod += this.foodItems[food].sodium;

        if (this.curCal > this.calLim) {
            console.log("Calories exceeds allowance of 2000: " + this.curCal);
        }

        if (this.curFat > this.fatLim) {
            console.log("Fat exceeds allowance of 70: " + this.curFat);
        }

        if (this.curSod > this.sodLim) {
            console.log("Sodium exceeds allowance of 2300: " + this.curSod);
        }
    }
}

const userOrder = new fastFoodMenu(fastFoodItems);
userOrder.add("sodaLarge");
userOrder.add("frappeLarge");
userOrder.add("tripleBurger");
userOrder.add("friesLarge");