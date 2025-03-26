// FECHAS = Date

const hoy = new Date()
console.log(hoy);

console.log(hoy.getFullYear());
console.log(hoy.getMonth()); // Enero es el mes con índice 0
console.log(hoy.getDay()); // Domingo es el primer día de la semana y su índice es 0
console.log(hoy.getDate());
console.log(hoy.getTime()); // Segundos transcurridos desde el 1-1-1970

let tomorrow = new Date("2025-03-26")
console.log(tomorrow.getDate());

tomorrow = new Date(hoy)
console.log(tomorrow);
tomorrow.setDate(tomorrow.getDate() + 1)
console.log(tomorrow);
tomorrow.toISOString()
console.log(typeof tomorrow);

let dia31 = new Date ("2025-03-31")
dia31.setDate(dia31.getDate() + 1)
console.log(dia31);
console.log(dia31.toISOString().split('T')[0]);