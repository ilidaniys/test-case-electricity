import {Node} from "./Node.js";

export class PowerPlant extends Node {
    constructor() {
        super();
        this.alive = true;
    }

    killPowerPlant() {
        this.alive = false;
    }
    repairPowerPlant() {
        this.alive = true;
    }
}