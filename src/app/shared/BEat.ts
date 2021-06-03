
export class BEat {

    private restaurants : string[];

    constructor() {
        this.restaurants = ["ristorante1", "ristorante2", "ristorante3", "ristorante4", "ristorante5"];
    }

    getRistoranti() : string[] {
        return this.restaurants;
    }

}