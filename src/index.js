/**
 * This class is just a facade for your implementation, the tests below are using the `World` class only.
 * Feel free to add the data and behavior, but don't change the public interface.
 */
import {PowerPlant} from "./model/PowerPlant.js";
import {Household} from "./model/Household.js";


export class World {
    constructor() {
    }

    createPowerPlant() {
        return new PowerPlant();
    }

    createHousehold() {
        return new Household();
    }

    connectHouseholdToPowerPlant(household, powerPlant) {
        household.connectTo(powerPlant);
    }

    connectHouseholdToHousehold(household1, household2) {
        household1.connectTo(household2);
    }

    disconnectHouseholdFromPowerPlant(household, powerPlant) {
        household.disconnectFrom(powerPlant);
    }

    killPowerPlant(powerPlant) {
        powerPlant.killPowerPlant();
    }

    repairPowerPlant(powerPlant) {
        powerPlant.repairPowerPlant();
    }

    householdHasEletricity(household) {
       return household.getElectricity();
    }
}
