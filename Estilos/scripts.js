const modalData = {
  Problemática: {
    icon: '💡',
    title: 'Problemática',
    body: `
      <p>Necesidad de incluir la cultura empresarial y fomento al emprendimiento</p>
      <br>
      <li> Escasez de infraestructura universitaria es comunidades indígenas</li>
      <li> Falta de formación de investigadores y docentes universitarios, en metodologías para la intervención en comunidades en vulnerabilidad</li>
      <li> Transformaciones en el capital humano a partir del conocimiento y la investigación </li>
        <br>
        En los pueblos indígenas y comunidades rurales en distintos países:
         <li> Falta de oportunidades para la generación de ingresos y empleos  </li>
         <li> Migración de la población, sobre todo en edad productiva, a otros lugares  </li>
         <li> Poca inserción de jóvenes indígenas en la educación superior </li>
         <li> Limitaciones y barreras para el desarrollo local de estos grupos y comunidades </li>
         `
  },
  Impacto:     { icon:'🤝', 
    title:'Impacto',     
    body:`
      <p>Para la región Centroamericana: </p>
      <li>El proyecto es un catalizador de cambios significativos y multidimensional </li>
      <li>Fortalece el tejido social, económico y académico en comunidades indígenas centroamericanas </li>
      <li>Aborda desafíos críticos y contribuye a disminuir barreras culturales, de género, de discriminación, de educación </li>
      <li>Empoderamiento económico y social al fomentar la creación de emprendimientos sostenibles </li>
      <li>Preservación y revitalización cultural desde la cosmovisión indígena </li>
      <li>Intercambio de experiencias entre comunidades y países </li>
      <br>
      <p>Para Universidades y otros Socios: </p>
         <li>Una nueva oportunidad de Innovar en la Educación Superior, contribuyendo a la transformación de la sociedad (IV Misión de la Academia) </li>
         <li>Generar capacidades en docentes, investigadores y estudiantes </li>
         <li>Reducción de brechas de acceso a la educación de calidad </li>
         <li>Integración del conocimiento ancestral con saberes académicos y tecnológicos </li>         
         <li>Se generan recursos para las instituciones beneficiarias </li>
         <li>Nuevas líneas de investigación aplicada y vinculadas con la realidad actual </li>
         <li>Fortalecimiento del ejes de internacionalización y vinculación con la Sociedad y visibilidad institucional </li>
         <li>Experiencia relevante en la gestión de proyectos innovadores e internacionales </li>
         <li>Acceder a fondos que tradicionalmente no están en el alcance de los objetivos del proyecto, ni en los presupuestos institucionales </li>
        <br>              
        <p>Para Comunidades Indígenas: </p>
         <li>Empoderamiento personal, liderazgo y visibilidad de la juventud indígena </li>
         <li>Refuerzo de la identidad cultural </li>
         <li>Desarrollo de habilidades técnicas y herramientas para la vida productiva </li>
         <li>Mejora de la empleabilidad y de las oportunidades de autoempleo </li>         
         <li>Formación de liderazgos comunitarios jóvenes </li>
         <li>Mayor confianza para participar en espacios académicos y sociales </li>
         <li>Impulso al emprendimiento local y sostenible </li>
         <li>Capacitación para transformar saberes tradicionales en iniciativas productivas de alto valor agregado </li>
         <li>Mejoras a las condiciones de vida, sin perder la identidad cultural </li>
         `
},

  inclusion:     { icon:'♀️', title:'Inclusión',     body:'Foco especial en género y colectivos subrepresentados.' },
  diseminacion:  { icon:'🌐', title:'Diseminación',  body:'Recursos abiertos y policy briefs para instituciones.' }
};

function openModal(id) {
  const data = modalData[id];
  document.getElementById('modal-content').innerHTML = `
    <span style="font-size:48px">${data.icon}</span>
    <h2 style="margin:16px 0 12px">${data.title}</h2>
    <p style="color:#4A5568;line-height:1.8">${data.body}</p>
  `;
  document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}