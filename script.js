// Lista de síntomas
// 1️⃣ Lista de síntomas con sus trastornos asociados
// 🔹 Lista de síntomas y a qué trastornos están asociados
const sintomas = [
  { nombre: "Evitar comer o saltarse comidas", tipos: ["Anorexia"] },
  { nombre: "Comer en exceso y sentir culpa", tipos: ["Bulimia", "Atracón"] },
  { nombre: "Vomitar después de comer", tipos: ["Bulimia"] },
  { nombre: "Obsesión por el peso o la figura", tipos: ["Anorexia", "Bulimia"] },
  { nombre: "Ejercicio excesivo para compensar", tipos: ["Anorexia", "Bulimia"] },
  { nombre: "Comer rápido y en secreto", tipos: ["Atracón"] },
  { nombre: "Ansiedad o culpa después de comer", tipos: ["Bulimia", "Atracón"] },
  { nombre: "Fluctuaciones de peso", tipos: ["Bulimia", "Atracón"] },
  { nombre: "Uso de laxantes o diuréticos", tipos: ["Bulimia"] },
  { nombre: "Miedo intenso a subir de peso", tipos: ["Anorexia"] },
  { nombre: "Comer solo o a escondidas", tipos: ["Atracón"] },
  { nombre: "Cansancio o debilidad física", tipos: ["Anorexia"] }
];

// 🔹 Mostramos los síntomas como lista con checkboxes
const lista = document.getElementById("opciones");
for (let i = 0; i < sintomas.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" value="${i}">
      ${sintomas[i].nombre}
    </label>
  `;
  lista.appendChild(li);
}

// 🔹 Función para analizar los síntomas seleccionados
function verResultados() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let seleccionados = [];
  
  // Guardamos los síntomas que fueron marcados
  checkboxes.forEach(cb => {
    if (cb.checked) seleccionados.push(parseInt(cb.value));
  });

  // Contamos cuántas veces aparece cada trastorno
  let contador = { "Anorexia": 0, "Bulimia": 0, "Atracón": 0 };
  seleccionados.forEach(i => {
    sintomas[i].tipos.forEach(tipo => {
      contador[tipo]++;
    });
  });

  // Mostramos cuántos síntomas fueron seleccionados
  let texto = `Seleccionaste ${seleccionados.length} posibles síntomas.`;

  // Si hay síntomas marcados, detectamos el trastorno predominante
  if (seleccionados.length > 0) {
    let max = Math.max(contador.Anorexia, contador.Bulimia, contador["Atracón"]);
    let relacionados = [];
    for (let key in contador) {
      if (contador[key] === max && max > 0) {
        relacionados.push(key);
      }
    }

    if (relacionados.length > 0) {
      texto += `\n\n Posible trastorno relacionado: ${relacionados.join(" y ")}.`;
    } else {
      texto += `\n\nNo podria decirte un trastorno claro con los síntomas seleccionados.`;
    }
  }

  // Mostramos el resultado en pantalla
  document.getElementById("resultado").textContent = texto;
}

// Frases motivacionales
const frases = [
  "No estás solx. Buscar ayuda es un acto de fuerza.",
  "Tu valor no depende de tu apariencia.",
  "Cuidar tu salud mental también es cuidarte.",
  "Hablar del tema puede salvar vidas.",
  "Recuperarse es posible, paso a paso."
];

function mostrarFrase() {
  const random = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").textContent = frases[random];
}
