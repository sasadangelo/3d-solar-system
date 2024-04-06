import {CelestialBodyGroup} from './CelestialBodyGroup.js';

// Star is a CelestialBodyGroup because, usually, planets and satellites move around it.
export class Star extends CelestialBodyGroup {
    constructor(name, initialPosition, radius, angleRotation) {
        super(name, initialPosition, radius, angleRotation);
    }

    // Method to describe the star
    describe() {
        return `${super.describe()}`;
    }
}
