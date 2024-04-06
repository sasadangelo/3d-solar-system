import {CelestialBodyView} from './CelestialBodyView.js';
import {CelestialBodyGroup} from '../model/CelestialBodyGroup.js';

export class CelestialBodyGroupView extends CelestialBodyView {
    constructor(celestialBodyGroup) {
        super(celestialBodyGroup)
        this.celestialBodyGroupView = new Map();
        this.celestialBodyGroup.celestialBodies.forEach(celestialBody => {
            const celestialBodyView = new CelestialBodyView(celestialBody);
            this.celestialBodyGroupView.set(celestialBody.name, celestialBodyView);
        });
    }

    rotate() {
        super.rotate()
        this.celestialBodyGroupView.forEach(celestialBodyView => {
            celestialBodyView.mesh.rotation.y += this.celestialBody.angleRotation
        });    
    }

    // Renderizza il corpo celeste sulla scena
    addToScene(scene) {
        super.render(scene)
        this.celestialBodyGroupView.forEach(celestialBodyView => {
            celestialBodyView.addToScene(scene);
        });
    }
}