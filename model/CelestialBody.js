// Define the base class for celestial bodies
export class CelestialBody {
    constructor(name, initialPosition, radius, angleRotation) {
        this.name = name;
        this.initialPosition = initialPosition
        this.radius = radius;
        this.angleRotation = angleRotation;
    }

    // Method to describe the celestial body
    describe() {
        return `${this.name} (Radius: ${this.radius})`;
    }
}
