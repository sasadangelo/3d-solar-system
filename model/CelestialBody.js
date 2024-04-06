// Define the base class for celestial bodies
export class CelestialBody {
    constructor(name, position, radius, angleRotation) {
        this.name = name;
        //this.position = position
        //this.radius = radius;
        this.angleRotation = angleRotation;

        const geometry = new THREE.SphereGeometry(radius, 64, 32);
        const texture = new THREE.TextureLoader().load(`textures/${name}.jpg`);
        const material = new THREE.MeshPhongMaterial({ map: texture });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.set(position.x, position.y, position.z);
    }

    rotate() {
        this.mesh.rotation.y += this.angleRotation
    }

    // Renderizza il corpo celeste sulla scena
    addToScene(scene) {
        scene.add(this.mesh);
    }
}