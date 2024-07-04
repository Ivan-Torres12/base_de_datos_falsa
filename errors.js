class PropertyNotFoundError extends Error {
    constructor(property) {
        super(`La propiedad "${property}" no existe.`);
        this.name = "PropertyNotFoundError";
    }
}

class NullNameError extends Error {
    constructor() {
        super("El nombre contiene un valor nulo.");
        this.name = "NullNameError";
    }
}

class InvalidIdError extends Error {
    constructor() {
        super("El ID no es un número.");
        this.name = "InvalidIdError";
    }
}

export { PropertyNotFoundError, NullNameError, InvalidIdError };