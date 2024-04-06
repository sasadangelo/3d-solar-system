import {CelestialBodyGroup} from './CelestialBodyGroup.js';

// Star is a CelestialBodyGroup because, usually, planets and satellites move around it.
export class Star extends CelestialBodyGroup {
    constructor(name, position, radius, angleRotation) {
        super(name, position, radius, angleRotation);
    }
}