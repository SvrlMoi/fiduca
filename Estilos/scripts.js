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
  formacion:     { icon:'🎓', title:'Formación',     body:'Programas de capacitación docente adaptados y escalables.' },
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