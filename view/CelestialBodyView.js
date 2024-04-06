export class CelestialBodyView {
    constructor(celestialBody) {
        this.celestialBody = celestialBody;
        this.mesh = null;
    }

    rotate() {
        this.mesh.rotation.y += this.celestialBody.angleRotation
    }

    // Renderizza il corpo celeste sulla scena
    addToScene(scene) {
        const geometry = new THREE.SphereGeometry(this.celestialBody.radius, 64, 32);
        const texture = new THREE.TextureLoader().load(`textures/${this.celestialBody.name}.jpg`);
        const material = new THREE.MeshPhongMaterial({ map: texture });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = celestialBody.position.x
        this.mesh.position.y = celestialBody.position.y
        this.mesh.position.z = celestialBody.position.z
        scene.add(this.mesh);
    }
}