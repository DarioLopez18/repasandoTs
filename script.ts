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
