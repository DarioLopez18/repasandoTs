let estudiastejavascript: boolean = true;

if (estudiastejavascript) {
  console.log("Puedes seguir con el curso de TypeScript");
} else {
  console.log("Debes estudiar JavaScript antes de seguir con TypeScript");
}

let interMiami: number = 11;

let fcDalas: number = 11;

const jugar = (equipo1: number, equipo2: number) => {
  if (equipo1 === equipo2) {
    console.log("Los dos equipos tienen el mismo número de jugadores");
  } else {
    console.log("Los dos equipos tienen distinto número de jugadores");
  }
};

jugar(interMiami, fcDalas);


let separando_datos: string | number | null = "Hola mundo"; // vemos que puede tomar distintos tipos de datos

let arreglo: number[] = [1, 2, 3, 4, 5]; // arreglo de números

let programador = {
  nombre: "Juan",
  edad: 25,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
};

//si nosotros queremos modificar esta variable
//nos va a pedir que tenga los tipos que infiere
//string,number,array de string.

programador = {
  nombre: "Dario",
  edad: 22,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
};


//infiere los tipos del primer objeto que escribimos

//con typescript podemos tipar objetos
//Los tipos clases y interfaces siempre con mayuscula

type ProgramadorType = {
  nombre: string;
  edad: number;
  lenguajes: string[]
}

let programador2: ProgramadorType = {
  nombre: "Juan",
  edad: 25,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
};


//el signo de pregunta lo que me permite
//es que sea opcional  un tipo

type ProgramadorType2 = {
  nombre: string;
  edad: number;
  lenguajes?: string[]
}

let programador3: ProgramadorType2 = {
  nombre: "Juan",
  edad: 25,
};

//si le mando null da problema
//sino tengo que ponerle que quiero que sea null
//o que sea null

interface ProgramadorInterface {
  nombre: string;
  edad: number;
  lenguajes: string[] | null;
}

let programador4: ProgramadorInterface = {
  nombre: "Juan",
  edad: 25,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
};


function enviarCV(programador: ProgramadorInterface) {
  console.log(`Enviando CV a ${programador.nombre}`);
}

// con la interface si puedo mandar mas datos
// lo importante es que estén los datos que requiera
// la interfaz
// la interfaz descarta los datos que no necesita

//como tiene la propiedad nombre si funciona.
//si le saco la propiedad nombre no funciona

let programador5 = {
  nombre: "Juan",
  edad: 25,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
  experiencia: 3
}

enviarCV(programador5);

//si nosotros hicieramos un type programador
//y declaramos una variable que no tenga tipo, pero tenga la propiedad nombre
//igualemete va a funcionar el método,pero la variable no va a ser de tipo 
//programador, va a ser otro tipo.

type ProgramadorType3 = {
  nombre: string;
  edad: number;
  lenguajes: string[] | null;
  experiencia: number;
}

let programador6 = {
  nombre: "Juan",
  edad: 25,
  lenguajes: ["JavaScript", "TypeScript", "Python"],
  experiencia: 3,
  email: "juan@juan.com"
}

enviarCV(programador6); //funciona igualmente pero programador 6 no es de tipo 
//programadorType3

class Pelicula {
  titulo: string; //si no inicializo las variables me va a dar error
  //también puedo iniciarlizarla en el constructor.
  //si no la quiero inicializar acá y en el constructor le pongo ?
  duracion: number;
  constructor(titulo: string, duracion: number) {
    this.titulo = titulo;
    this.duracion = duracion;
  }
  proyectar() {
    console.log(`Proyectando ${this.titulo}`);
  }
}

const pelicula = new Pelicula("Inception", 180);
pelicula.proyectar();

