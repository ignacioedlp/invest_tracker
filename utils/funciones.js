export function obtenerDiaMasGanado(data) {
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].dolars > max) {
      max = data[i].dolars;
      maxIndex = i;
    }
  }
  return {
    title: "Dia con mas ganacias",
    number: max,
    situation: "none",
    date: data[maxIndex].createdAt,
  };
}

export function obtenerConMenosGanancia(data) {
  let min = 99999999999;
  let minIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].dolars < min) {
      min = data[i].dolars;
      minIndex = i;
    }
  }
  return {
    title: "Dia con menos ganacias",
    number: min,
    situation: "none",
    date: data[minIndex].createdAt,
  };
}

export function obtenerGanaciasDeHoy(data) {
  let gananciaHoy = data[data.length - 1];
  let gananciaAyer = data[data.length - 2];
  if (data.length > 1) {
    if (gananciaHoy.dolars > gananciaAyer.dolars) {
      return {
        title: "Ganancia de hoy",
        number: gananciaHoy.dolars,
        situation: "up",
        date: gananciaHoy.createdAt,
      };
    } else {
      return {
        title: "Ganancia de hoy",
        number: gananciaHoy.dolars,
        situation: "down",
        date: gananciaHoy.createdAt,
      };
    }
  } else {
    return {
      title: "Ganancia de hoy",
      number: gananciaHoy.dolars,
      situation: "none",
      date: gananciaHoy.createdAt,
    };
  }
}
