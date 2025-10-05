//este script se encarga de cargar los productos y exportarlos al resto del backend

const  productos = [//se crea la lista de productos
  { 
    id: 1, 
    nombre: "Aparador Uspallata", 
    precio: "$250", 
    img: "img/Aparador Uspallata.png",
    descripcion: "Cada Aparador Uspallata refleja la pasión por la artesanía y la funcionalidad cotidiana, diseñada para acompañarte en tu hogar con calidez y elegancia.",
    detalles: "Madera nativa de algarrobo certificada FSC, acabados naturales con aceite de lino y cera de abejas. Tres cajones y dos compartimientos que cuentan historias de manos expertas."
  },
  { 
    id: 2, 
    nombre: "Biblioteca Recoleta", 
    precio: "$400", 
    img: "img/Biblioteca Recoleta.png",
    descripcion: "La Biblioteca Recoleta combina tradición y modernidad, ofreciendo un refugio para tus libros y recuerdos más preciados.",
    detalles: "Estructura en madera reciclada con tintes vegetales, cinco estantes regulables. Inspirada en la herencia de los talleres locales, pensada para durar generaciones."
  },
  { 
    id: 3, 
    nombre: "Butaca Mendoza", 
    precio: "$150", 
    img: "img/Butaca Mendoza.png",
    descripcion: "La Butaca Mendoza abraza la comodidad sin sacrificar estilo, invitándote a sentarte y disfrutar de momentos cotidianos con armonía.",
    detalles: "Tapizado en tela natural, patas de madera nativa tratada sin químicos agresivos. Diseño que equilibra nostalgia y modernidad con atención al detalle."
  },  
  { 
    id: 4, 
    nombre: "Escritorio Costa", 
    precio: "$600", 
    img: "img/Escritorio Costa.png",
    descripcion: "Cada Escritorio Costa inspira concentración y creatividad, pensado para quienes valoran la elegancia funcional y la sostenibilidad.",
    detalles: "Fabricado con MDF ecológico y acabados de bajo COV, incluye cajonera lateral y bandeja deslizable. Compromiso con longevidad y cuidado de materiales."
  },
  { 
    id: 5, 
    nombre: "Mesa Comedor Pampa", 
    precio: "$600", 
    img: "img/Mesa Comedor Pampa.png",
    descripcion: "La Mesa Comedor Pampa es un encuentro entre tradición y diseño contemporáneo, ideal para compartir historias y momentos alrededor de ella.",
    detalles: "Madera de quebracho de origen responsable, acabado natural con aceite de linaza. Capacidad para 6-8 personas, diseñada para perdurar y ser heredada."
  },
  { 
    id: 6, 
    nombre: "Mesa de Centro Araucaria", 
    precio: "$600", 
    img: "img/Mesa de Centro Araucaria.png",
    descripcion: "Mesa de Centro Araucaria, donde cada superficie respira calma y cuidado, hecha para sostener conversaciones y recuerdos de tu sala de estar.",
    detalles: "Acabado con cera de abejas de origen local, estante inferior para libros o plantas. Materiales recuperados garantizan sostenibilidad y longevidad."
  },
  { 
    id: 7, 
    nombre: "Mesa de Noche Aconcagua", 
    precio: "$600", 
    img: "img/Mesa de Noche Aconcagua.png",
    descripcion: "La Mesa de Noche Aconcagua acompaña tus noches con discreta elegancia, ofreciendo un espacio cálido y funcional al lado de tu cama.",
    detalles: "Fabricada en madera caldén certificada FSC, cajón con correderas metálicas suaves. Compromiso con la herencia y la sustentabilidad en cada detalle."
  },
  { 
    id: 8, 
    nombre: "Silla de Trabajo Belgrano", 
    precio: "$600", 
    img: "img/Silla de Trabajo Belgrano.png",
    descripcion: "La Silla de Trabajo Belgrano está pensada para largas jornadas con confort y estilo, respetando tu postura y el medio ambiente.",
    detalles: "Altura regulable, respaldo acolchado con telas de bajo impacto ambiental, ruedas duraderas. Inspirada en principios de sostenibilidad y materiales nobles."
  },
  { 
    id: 9, 
    nombre: "Sillas Córdoba", 
    precio: "$600", 
    img: "img/Sillas Córdoba.png",
    descripcion: "Sillas Córdoba, el equilibrio entre robustez y calidez, perfectas para conversaciones, cenas y encuentros memorables.",
    detalles: "Estructura de madera nativa, tapizado en telas vegetales lavables, set de 2. Cada silla cuenta con historia de manos expertas y materiales responsables."
  },
  { 
    id: 10, 
    nombre: "Sillón Copacabana", 
    precio: "$600", 
    img: "img/Sillón Copacabana.png",
    descripcion: "El Sillón Copacabana invita al descanso con estilo y personalidad, fusionando confort, diseño y respeto por la naturaleza.",
    detalles: "Tapizado en algodón natural, cojines desmontables, madera tratada sin químicos. Garantía extendida y compromiso con la longevidad de la pieza."
  },
  { 
    id: 11, 
    nombre: "Sofá Patagonia", 
    precio: "$600", 
    img: "img/Sofá Patagonia.png",
    descripcion: "Sofá Patagonia, una pieza que abraza y conecta tradición y modernidad, perfecta para crear memorias en tu hogar.",
    detalles: "Tapizado premium antimanchas, estructura robusta de madera certificada FSC, cojines de alta densidad. Parte del programa 'Herencia Viva' para asegurar longevidad."
  }
];


export default productos;