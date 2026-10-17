// Sonrisa Imperial — validación y envío del formulario de agendamiento.

const form = document.getElementById("booking-form");
const success = document.getElementById("form-success");
const successName = document.getElementById("success-name");
const fecha = document.getElementById("fecha");

// No permitir agendar en el pasado.
fecha.min = new Date().toISOString().split("T")[0];

const rules = {
  nombre:   (v) => (v.trim().length >= 3 ? "" : "Ingresa tu nombre completo."),
  email:    (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Ingresa un correo válido."),
  telefono: (v) => (v.replace(/\D/g, "").length >= 8 ? "" : "Ingresa un teléfono válido."),
  fecha:    (v) => (v ? "" : "Selecciona una fecha."),
  bloque:   (v) => (v ? "" : "Selecciona un bloque."),
};

function validateField(name) {
  const input = form.elements[name];
  const message = rules[name](input.value);
  const slot = form.querySelector(`[data-error-for="${name}"]`);

  slot.textContent = message;
  input.classList.toggle("is-invalid", Boolean(message));
  return !message;
}

// Al corregir, limpiamos el error de inmediato.
Object.keys(rules).forEach((name) => {
  form.elements[name].addEventListener("input", () => {
    if (form.elements[name].classList.contains("is-invalid")) validateField(name);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ok = Object.keys(rules).map(validateField).every(Boolean);
  if (!ok) {
    form.querySelector(".is-invalid").focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  // TODO: reemplazar por el envío real (endpoint propio, Formspree, Calendly, etc.).
  console.log("Solicitud de hora:", data);

  successName.textContent = data.nombre.trim().split(" ")[0];
  success.hidden = false;
  form.querySelector("button[type=submit]").disabled = true;
  success.scrollIntoView({ behavior: "smooth", block: "center" });
});
