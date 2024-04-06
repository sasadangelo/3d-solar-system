import {CelestialBody} from './CelestialBody.js';

// This class extends CelestialBody and represents the CelestialBody objects that have group of
// other celestial body. For example, the Sun is a CelestialBodyGroup because it is a CelestialBody
// but it groups also all the CelestialBody that move around it like Earth, Moon, Jupiter, etc.
// Earth is a CelestialBodyGroup because the Moon move around it.
// Saturn is a CelestialBodyGroup because the Rings and other Satellite move around it.
export class CelestialBodyGroup extends CelestialBody {
    constructor(name, position, radius, angleRotation) {
        super(name, position, radius, angleRotation);
        this.celestialGroup = new THREE.Group();
        this.celestialBodies = new Map();
    }

    // Add a CelestialBody to the group
    addCelestialBody(celestialBody) {
        this.celestialBodies.set(celestialBody.name, celestialBody);
        this.celestialGroup.add(celestialBody.mesh)
    }

    // Remove a CelestialBody from the group
    removeCelestialBody(celestialBody) {
        this.celestialBodies.delete(celestialBody.name);
        this.celestialGroup.remove(celestialBody.mesh)
    }
}