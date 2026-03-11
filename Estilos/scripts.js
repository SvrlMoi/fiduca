const modalData = {
  Problemática: {
    icon: '💡',
    title: 'Problemática',
    body: `
      <p>Necesidad de incluir la cultura empresarial y fomento al emprendimiento</p>
      <br>
      <ul>
        <li>Escasez de infraestructura universitaria en comunidades indígenas</li>
        <li>Falta de formación de investigadores y docentes universitarios en metodologías para la intervención en comunidades en vulnerabilidad</li>
        <li>Transformaciones en el capital humano a partir del conocimiento y la investigación</li>
      </ul>

            <br>
      <p>En los pueblos indígenas y comunidades rurales en distintos países:</p>

      <ul>
        <li>Falta de oportunidades para la generación de ingresos y empleos</li>
        <li>Migración de la población, sobre todo en edad productiva, a otros lugares</li>
        <li>Poca inserción de jóvenes indígenas en la educación superior</li>
        <li>Limitaciones y barreras para el desarrollo local de estos grupos y comunidades</li>
      </ul>
    `
  },

  Impacto: {
    icon: '🤝',
    title: 'Impacto',
    body: `
      <p>Para la región Centroamericana:</p>

      <ul>
        <li>El proyecto es un catalizador de cambios significativos y multidimensional</li>
        <li>Fortalece el tejido social, económico y académico en comunidades indígenas centroamericanas</li>
        <li>Aborda desafíos críticos y contribuye a disminuir barreras culturales, de género, de discriminación y educativas</li>
        <li>Empoderamiento económico y social al fomentar la creación de emprendimientos sostenibles</li>
        <li>Preservación y revitalización cultural desde la cosmovisión indígena</li>
        <li>Intercambio de experiencias entre comunidades y países</li>
      </ul>
      <br>
      <p>Para Universidades y otros socios:</p>

      <ul>
        <li>Nueva oportunidad de innovar en la educación superior contribuyendo a la transformación social</li>
        <li>Generación de capacidades en docentes, investigadores y estudiantes</li>
        <li>Reducción de brechas de acceso a educación de calidad</li>
        <li>Integración del conocimiento ancestral con saberes académicos y tecnológicos</li>
        <li>Generación de recursos para las instituciones beneficiarias</li>
        <li>Nuevas líneas de investigación aplicada vinculadas con la realidad actual</li>
        <li>Fortalecimiento de la internacionalización y la vinculación con la sociedad</li>
        <li>Experiencia en la gestión de proyectos innovadores e internacionales</li>
        <li>Acceso a fondos que normalmente no están dentro de presupuestos institucionales</li>
      </ul>
      <br>
      <p>Para Comunidades Indígenas:</p>

      <ul>
        <li>Empoderamiento personal, liderazgo y visibilidad de la juventud indígena</li>
        <li>Refuerzo de la identidad cultural</li>
        <li>Desarrollo de habilidades técnicas y herramientas productivas</li>
        <li>Mejora de la empleabilidad y oportunidades de autoempleo</li>
        <li>Formación de liderazgos comunitarios jóvenes</li>
        <li>Mayor confianza para participar en espacios académicos y sociales</li>
        <li>Impulso al emprendimiento local y sostenible</li>
        <li>Capacitación para transformar saberes tradicionales en iniciativas productivas</li>
        <li>Mejoras en la calidad de vida sin perder identidad cultural</li>
      </ul>
    `
  },

  Emprendimiento: {
  icon:'🚀',
  title:'Emprendimiento',
  body:`
  <p>El proyecto promueve el emprendimiento juvenil en comunidades indígenas mediante la colaboración entre universidades, estudiantes y organizaciones locales.</p>

  <ul>
    <li>Formación en habilidades de emprendimiento, innovación y gestión de proyectos.</li>
    <li>Desarrollo de iniciativas productivas basadas en conocimientos locales y recursos del territorio.</li>
    <li>Acompañamiento universitario para transformar ideas en proyectos sostenibles.</li>
    <li>Creación de espacios de intercambio donde jóvenes emprendedores pueden presentar y desarrollar sus iniciativas.</li>
    <li>Acceso a mentoría, herramientas de innovación y metodologías de emprendimiento.</li>
  </ul>

  <p>Estas acciones buscan fortalecer la autonomía económica de las comunidades y generar oportunidades para que los jóvenes desarrollen proyectos productivos que contribuyan al desarrollo local sostenible.</p>
  `
},
  Difusion: {
  icon:'🌐',
  title:'Difusión y Transferencia',
  body:`
  <p>El proyecto contempla diversas estrategias para compartir los resultados obtenidos y ampliar su impacto en la región centroamericana.</p>

  <ul>
    <li>Publicación de materiales, informes y recursos educativos desarrollados durante el proyecto.</li>
    <li>Organización de talleres, encuentros académicos y actividades de intercambio entre universidades y comunidades.</li>
    <li>Difusión de resultados a través de medios institucionales, plataformas digitales y redes académicas.</li>
    <li>Creación de espacios de diálogo entre investigadores, estudiantes y actores comunitarios.</li>
    <li>Promoción de buenas prácticas para que otras instituciones puedan replicar las experiencias del proyecto.</li>
  </ul>

  <p>Estas acciones permiten que el conocimiento generado tenga un alcance más amplio y contribuya al fortalecimiento de iniciativas de innovación social y emprendimiento en la región.</p>
  `
}
};

function openModal(id) {
  const data = modalData[id];

  if (!data) return;

  const modalContent = document.getElementById('modal-content');
  const modalOverlay = document.getElementById('modal-overlay');

  modalContent.innerHTML = `
    <span class="modal-icon">${data.icon}</span>
    <h2 class="modal-title">${data.title}</h2>
    <div class="modal-body">${data.body}</div>
  `;

  modalOverlay.classList.add('active');
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.classList.remove('active');
}

/* cerrar con tecla ESC */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});