class Persona {
	constructor(pNombre, pApellidos, pDireccion) {
		this.Nombre = pNombre;
		this.Apellidos = pApellidos;
		this.Direccion = pDireccion;
	}

	toString() {
		return `${this.Apellidos} ${this.Direccion}`;
	}

	NombreCompleto() {
		return `${this.Nombre} ${this.Apellidos}`;
	}
}

class Coche {
	constructor(pMatricula, pMarca, pModelo, pPropietario) {
		this.Matricula = pMatricula;
		this.Marca = pMarca;
		this.Modelo = pModelo;
		this.Propietario = pPropietario;
	}

	toString() {
		return `${this.Matricula} ${this.Marca} ${this.Modelo}<br><b>Propietario:</b> ${this.Propietario}`;
	}
}

const coches = [];
const Jorge = new Persona("Jorge", "Washington Usa", "Casa Blanca s/n");
const Barbara = new Persona("Bárbara", "Streissand Cine", "c/ Hollywood 345, 6º B");
coches.push(new Coche("GC1234SG", "Audi", "TT", Jorge));
coches.push(new Coche("1234SDF", "Volkswagen", "Golf GTI", Barbara));

document.addEventListener("DOMContentLoaded", function() {
	const cochesTable1 = document.getElementById("cochesTable1");
	const cochesTable2 = document.getElementById("cochesTable2");
	const cochesTable3 = document.getElementById("cochesTable3");
	const cochesTable4 = document.getElementById("cochesTable4");

	coches.forEach(coche => {
		cochesTable1.innerHTML += `<tr><td>${coche}</td></tr>`;
		cochesTable2.innerHTML += `<tr><td>${coche.Matricula}</td><td>${coche.Marca}</td><td>${coche.Modelo}</td><td>${coche.Propietario}</td></tr>`;
		cochesTable3.innerHTML += `<tr><td>${coche.Matricula}</td><td>${coche.Marca}</td><td>${coche.Modelo}</td><td>${coche.Propietario.NombreCompleto()}</td></tr>`;
		cochesTable4.innerHTML += `<tr><td>${coche.Matricula}</td><td>${coche.Marca}</td><td>${coche.Modelo}</td><td>${coche.Propietario.Nombre}</td><td>${coche.Propietario.Apellidos}</td><td>${coche.Propietario.Direccion}</td></tr>`;
	});
});
