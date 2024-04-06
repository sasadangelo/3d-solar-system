import {CelestialBodyGroup} from './CelestialBodyGroup.js';

// Planet is a CelestialBodyGroup because satellites move around it.
export class Planet extends CelestialBodyGroup {
    constructor(name, initialPosition, radius, angleRotation) {
        super(name, initialPosition, radius, angleRotation);
    }

    // Method to describe the planet
    describe() {
        return `${super.describe()}, Angle Rotation: ${this.angleRotation}`;
    }
}

