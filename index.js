import {Vector} from './model/Vector.js';
import {Star} from './model/Star.js';
import {Planet} from './model/Planet.js';
import {StarView} from './view/StarView.js';

const OBJECTS = {
    SUN: 'sun',
    MERCURY: 'mercury',
    VENUS: 'venus',
    EARTH: 'earth',
    MOON: 'moon',
    MARS: 'mars',
    JUPITER: 'jupiter',
    SATURN: 'saturn',
    SATURN_RINGS: 'saturn_rings',
    URANUS: 'uranus',
    NEPTUNE: 'neptune'
};

/*class ObjectGroup {
    constructor(index, title, radius, extra) {
        const objectGroup = new THREE.Group();

        if (extra) {
            switch (title) {
                case OBJECTS.EARTH:
                    extra.position.x += 8 * index + 2.5;

                    break;
                case OBJECTS.SATURN:
                    extra.position.x += 8 * index;
                    extra.rotation.x = 2;

                    break;
            }

            objectGroup.add(extra);
        }

        const planet = ObjectGroup.createObject(title, new THREE.SphereGeometry(radius, 64, 32));

        planet.position.x += 8 * index;
        objectGroup.add(planet);

        return objectGroup;
    }

    static createObject = (title, objectGeometry) => {
        const objectTexture = new THREE.TextureLoader().load(`textures/${title}.jpg`);
        const objectMaterial = new THREE.MeshPhongMaterial({ map: objectTexture });
        const objectMesh = new THREE.Mesh(objectGeometry, objectMaterial);

        return objectMesh;
    };
}
*/
//const planets = [
//    { title: OBJECTS.MERCURY, radius: 1 },
//    { title: OBJECTS.VENUS, radius: 2 },
//    {
//        title: OBJECTS.EARTH,
//        radius: 2,
//        extra: ObjectGroup.createObject(OBJECTS.MOON, new THREE.SphereGeometry(0.5, 64, 32))
//    },
//    { title: OBJECTS.MARS, radius: 1 },
//    { title: OBJECTS.JUPITER, radius: 5 },
//    {
//        title: OBJECTS.SATURN,
//        radius: 4,
//        extra: ObjectGroup.createObject(OBJECTS.SATURN_RINGS, new THREE.TorusGeometry(6, 1, 2, 32))
//    },
//    { title: OBJECTS.URANUS, radius: 3 },
//    { title: OBJECTS.NEPTUNE, radius: 3 }
//];

const EARTH_YEAR = (2 * Math.PI) / 365;

const planets = [
    new Planet(OBJECTS.MERCURY, new Vector(8), 1, EARTH_YEAR * 4),
    new Planet(OBJECTS.VENUS, new Vector(16), 2, EARTH_YEAR * 2),
    new Planet(OBJECTS.EARTH, new Vector(24), 2, EARTH_YEAR),
    new Planet(OBJECTS.MARS, new Vector(32), 1, EARTH_YEAR / 2),
    new Planet(OBJECTS.JUPITER, new Vector(40), 5, EARTH_YEAR * 4),
    new Planet(OBJECTS.SATURN, new Vector(48), 4, EARTH_YEAR * 8),
    new Planet(OBJECTS.URANUS, new Vector(56), 3, EARTH_YEAR * 16),
    new Planet(OBJECTS.NEPTUNE, new Vector(64), 3, EARTH_YEAR * 32),
];

// Inizializzazione della scena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 180;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
//document.body.appendChild(renderer.domElement);
document.getElementById('root').appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1);
const pointLight = new THREE.PointLight(0xffffff, 1);

pointLight.position.set(0, 0, 0);

scene.add(ambientLight, pointLight);

const starsCoords = [];

for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(1000);
    const y = THREE.MathUtils.randFloatSpread(1000);
    const z = THREE.MathUtils.randFloatSpread(1000);

    starsCoords.push(x, y, z);
}

const starsGeometry = new THREE.BufferGeometry();

starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsCoords, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa });
const stars = new THREE.Points(starsGeometry, starsMaterial);

scene.add(stars);

//const sun = ObjectGroup.createObject(OBJECTS.SUN, new THREE.SphereGeometry(11, 64, 32));
//scene.add(sun);

// The Sun is a CelestialBodyGroup, this mean it is a group of celestial body that include
// itself and all the planets
const sun = new Star(OBJECTS.SUN, new Vector(), 11, 0.001)
for (let planet of planets) {
    sun.addCelestialBody(planet);
}
// Add the Sun and all the Planets to the Scene
const sunView = new StarView(sun).addToScene(scene);

//scene.add(sunView.mesh)

//const planetsMap = new Map();

//for (let [index, { title, radius, extra }] of planets.entries()) {
//    const planetGroup = new ObjectGroup(index + 1, title, radius, extra);

//    planetsMap.set(title, planetGroup);
//    sun.add(planetGroup);
//}

//const EARTH_YEAR = (2 * Math.PI) / 365;

const animate = () => {
    sunView.rotate()

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
};

animate()
