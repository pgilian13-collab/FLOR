function dibujarFlor() {
  let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

alert("Tu nombre es muy bonito, igual que tú, se lo mucho que vales como persona, Gracias por todo lo que haz hecho por mi y por mi familia quiza en este momento no pueda hacer para retribuir todo lo que haz hecho por mi pero creeme que cuando pueda sin dudarlo hare lo mejor para que seas feliz por que te quiero, me haces sentir vivo, especial, libre... se que en este momento soy como un extraño por que no he estado presente en tu vida por mucho, pero te aprecio y estoy dispuesto a conocerte, a saber mas de ti y qque tu sepas de mi. Nunca olvides que eres una presona maravillosa, te mereces el mundo y aunque no te lo pueda dar, te prometo que tratare de hacer lo mejor para que te sientas bien, y para que sepas lo mucho me me importas mi FLOR DE LOTO 🌸");

ctx.clearRect(0, 0, canvas.width, canvas.height);

// lista de pasos a dibujar
function dibujarFlor() {
  setTimeout(() => {
    // pétalo arriba
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(150, 70, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }, 500);

  setTimeout(() => {
    // pétalo abajo
    ctx.beginPath();
    ctx.arc(150, 230, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }, 1000);

  setTimeout(() => {
    // pétalo izquierda
    ctx.beginPath();
    ctx.arc(80, 150, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }, 1500);

  setTimeout(() => {
    // pétalo derecha
    ctx.beginPath();
    ctx.arc(220, 150, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }, 2000);

  setTimeout(() => {
    // centro amarillo
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(150, 150, 60, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }, 2500);
}

dibujarFlor();
}





function dibujarCorazon() {
    const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // limpiar
  ctx.beginPath();
  ctx.moveTo(150, 210);
alert("Te quiero mucho Lucero, nunca lo olvides, Gracias por estar en mi vida❤️");
  let paso = 0;

  function animar() {
    paso++;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // limpiar cada frame
    ctx.beginPath();
    ctx.moveTo(150, 210);

    if (paso >= 1) ctx.bezierCurveTo(100, 190, 70, 150, 70, 120);
    if (paso >= 2) ctx.bezierCurveTo(70, 60, 150, 60, 150, 120);
    if (paso >= 3) ctx.bezierCurveTo(150, 60, 230, 60, 230, 120);
    if (paso >= 4) ctx.bezierCurveTo(230, 150, 200, 190, 150, 210);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    if (paso >= 5) {
      ctx.fillStyle = "red";
      ctx.fill();
    } else {
      setTimeout(animar, 1000); // cada 0.5s dibuja un tramo
    }
  }

  animar();

  
}
