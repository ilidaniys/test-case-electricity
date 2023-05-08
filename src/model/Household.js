import {Node} from "./Node.js";
import {PowerPlant} from "./PowerPlant.js";
export class Household extends Node {
    constructor() {
        super();
    }

    getElectricity(visited = []) {
        visited.push(this);

        for (const connectedNode of this.connectedNodes) {
            if (connectedNode instanceof PowerPlant && connectedNode.alive) {
                return true;
            }
            if (connectedNode instanceof Household && !visited.includes(connectedNode)) {
                if (connectedNode.getElectricity(visited)) {
                    return true;
                }
            }
        }
        return false;
    }
}