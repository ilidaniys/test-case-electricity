export class Node {
    constructor() {
        this.connectedNodes = [];
    }

    connectTo(node) {
        this.connectedNodes.push(node);
    }

    disconnectFrom(node) {
        this.connectedNodes = this.connectedNodes.filter((neighbor) => neighbor !== node);
    }

    getNeighbors() {
        return this.connectedNodes;
    }
}