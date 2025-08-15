// ========================================================================
// 1. ZONA DE DATOS Y CONFIGURACIÓN
// ========================================================================

// ---- Español ----
const portfolioData = {
  header: {
    name: "Vato Trave",
    title: "Compositor Musical | Diseñador Sonoro | Artista Audiovisual Generativo",
    contact: {
      location: "Michoacán, México",
      email: "CONTACTO A TRAVES DE MIS REDES",
    },
  },
  profile: {
    title: "Resumen Profesional",
    text: "Artista audiovisual enfocado en la creación de experiencias inmersivas que fusionan el diseño sonoro, la composición musical y el arte generativo. Mi enfoque combina la producción audiovisual tradicional con técnicas de Creative Coding y flujos de trabajo asistidos por IA para desarrollar estéticas únicas y optimizar procesos creativos. Soy un profesional autodidacta con iniciativa, apasionado por colaborar en proyectos que desafíen la frontera entre el arte y la tecnología.",
  },
  toolbox: {
    title: "CAJA DE HERRAMIENTAS TECNOLÓGICAS (TOOLBOX)",
    categories: {
      "DAW & Audio": [
        "Reaper (Producción, mezcla, sincronización y mastering), Síntesis y diseño sonoro experimental y Producción de visuales sincronizados a la música o instrumentos específicos.",
      ],
      "Visuales Generativos": [
        "TouchDesigner (Visuales generativos en tiempo real)",
        "Inshot (Etalonaje y edición ágil para redes sociales)",
        "Gimp2.0 (Edición ágil para animación 2D y arte base de proyectos).",
      ],
      "Creative Coding": [
        "Processing",
        "Python",
        "p5.js",
        "Habilidad para encontrar el lenguaje preciso para que una IA (Gemini) comprenda el objetivo. Se traduce en un diálogo efectivo para co-crear código funcional, generar ideas y resolver problemas complejos.",
      ],
      "Hardware de Captura": [
        "Dron DJI (Cinematografía aérea)",
        "DJI Osmo Pocket 3 (Video 4K estabilizado, slow-motion, hyperlapse).",
      ],
    },
  },
  experience: {
    title: "EXPERIENCIA Y PROYECTOS DESTACADOS",
    projects: [
      {
        name: "Dirección Creativa y Desarrollo de Marca",
        points: [
          "Proyecto 'VATOTRAVE/by.vatt': Conceptualización y ejecución de una marca personal y un universo creativo transmedia.",
          "Evolución estratégica del proyecto desde un enfoque puramente musical hacia una propuesta audiovisual integral que incorpora arte generativo y tecnología.",
        ],
      },
      {
        name: "Producción Musical y Diseño Sonoro Experimental",
        points: [
          "Composición, producción, mezcla y masterización de un portafolio con más de 20 tracks originales.",
          "Exploración de técnicas de síntesis, grabación y diseño sonoro para crear texturas y ambientes únicos.",
        ],
      },
      {
        name: "Investigación y Desarrollo en Colaboración con IA",
        points: [
          "Desarrollo proactivo de competencias en Creative Coding a través de la colaboración con un asistente de IA.",
          "Creación de prototipos funcionales en Python, como traductores de texto a código Morse y generadores de señales de audio (WAV/MIDI), optimizando flujos de trabajo y acelerando el aprendizaje de nuevas tecnologías.",
        ],
      },
    ],
  },
  socials: [
    { name: "youtube", url: "https://www.youtube.com/channel/UCu_UbecAhZ1J3el1qo0CK4g" },
    { name: "instagram", url: "https://www.instagram.com/vat0trave" },
    { name: "facebook", url: "https://www.facebook.com/vatotraveofficial" },
    { name: "tiktok", url: "https://www.tiktok.com/@vatotrave" },
    { name: "behance", url: "https://www.behance.net/byvatt" },
    { name: "linkedin", url: "https://www.linkedin.com/in/vato-trave-3a70a0342" },
  ],
};

// ---- Inglés ----
const portfolioDataEN = {
  header: {
    name: "Vato Trave",
    title: "Music Composer | Sound Designer | Generative Audiovisual Artist",
    contact: {
      location: "Michoacán, Mexico",
      email: "CONTACT THROUGH MY SOCIAL MEDIA",
    },
  },
  profile: {
    title: "Professional Summary",
    text: "Audiovisual artist focused on creating immersive experiences that blend sound design, musical composition, and generative art. My approach combines traditional audiovisual production with Creative Coding techniques and AI-assisted workflows to develop unique aesthetics and optimize creative processes. I am a self-taught professional with initiative, passionate about collaborating on projects that challenge the boundary between art and technology.",
  },
  toolbox: {
    title: "TECHNOLOGICAL TOOLBOX",
    categories: {
      "DAW & Audio": [
        "Reaper (Production, mixing, synchronization, and mastering), experimental sound design and synthesis, and visuals synced to music or specific instruments.",
      ],
      "Generative Visuals": [
        "TouchDesigner (Real-time generative visuals)",
        "Inshot (Quick grading and editing for social media)",
        "Gimp2.0 (Quick editing for 2D animation and base art for projects).",
      ],
      "Creative Coding": [
        "Processing",
        "Python",
        "p5.js",
        "Ability to find the precise language for AI (Gemini) to understand the objective, resulting in effective co-creation of functional code, idea generation, and solving complex problems.",
      ],
      "Capture Hardware": [
        "DJI Drone (Aerial cinematography)",
        "DJI Osmo Pocket 3 (Stabilized 4K video, slow-motion, hyperlapse).",
      ],
    },
  },
  experience: {
    title: "EXPERIENCE AND HIGHLIGHTED PROJECTS",
    projects: [
      {
        name: "Creative Direction and Brand Development",
        points: [
          "Project 'VATOTRAVE/by.vatt': Conceptualization and execution of a personal brand and a transmedia creative universe.",
          "Strategic evolution of the project from a purely musical focus to an integrated audiovisual proposal incorporating generative art and technology.",
        ],
      },
      {
        name: "Music Production and Experimental Sound Design",
        points: [
          "Composition, production, mixing, and mastering of a portfolio with more than 20 original tracks.",
          "Exploration of synthesis, recording, and sound design techniques to create unique textures and atmospheres.",
        ],
      },
      {
        name: "Research and Development in Collaboration with AI",
        points: [
          "Proactive development of Creative Coding skills through collaboration with an AI assistant.",
          "Creation of functional prototypes in Python, such as text-to-Morse translators and audio signal generators (WAV/MIDI), optimizing workflows and accelerating the learning of new technologies.",
        ],
      },
    ],
  },
  socials: portfolioData.socials,
};

// ========================================================================
// 2. VARIABLES DE P5.JS
// ========================================================================
let iconYoutube, iconInstagram, iconFacebook, iconTiktok, iconBehance, iconLinkedin;
let fondoImg;
let capas = [];
const numeroDeCapas = 8;
const sectionSpacing = 40;
let yPosIcons;
let firstRun = true;
let currentLang = "es";
let btnTranslate;

// ========================================================================
// 3. LÓGICA DEL SKETCH
// ========================================================================
function preload() {
  fondoImg = loadImage("fondo9000.png");
  iconYoutube = loadImage("iconos/youtube.PNG");
  iconInstagram = loadImage("iconos/instagram.PNG");
  iconFacebook = loadImage("iconos/facebook.PNG");
  iconTiktok = loadImage("iconos/tiktok.PNG");
  iconBehance = loadImage("iconos/behance.PNG");
  iconLinkedin = loadImage("iconos/linkedin.PNG");
}

function setup() {
  createCanvas(windowWidth, 1);
  textFont("Helvetica");

  btnTranslate = createButton('EN / ES');
  btnTranslate.position(20, 20);
  btnTranslate.mousePressed(() => {
    currentLang = (currentLang === "es") ? "en" : "es";
  });

  for (let i = 0; i < numeroDeCapas; i++) {
    capas.push({
      factorProfundidad: ((i + 1) / numeroDeCapas) * 0.1,
      escala: 1.0 + (numeroDeCapas - i) * 0.2,
    });
  }
}

function draw() {
  let data = (currentLang === "es") ? portfolioData : portfolioDataEN;

  // Fondo parallax
  if (firstRun) {
    mouseX = width / 2;
    mouseY = height / 2;
    firstRun = false;
  }
  for (let i = 0; i < capas.length; i++) {
    const capa = capas[i];
    let offsetX = map(mouseX, 0, width, -width * capa.factorProfundidad, width * capa.factorProfundidad);
    let offsetY = map(mouseY, 0, height, -height * capa.factorProfundidad, height * capa.factorProfundidad);
    push();
    translate(width / 2, height / 2);
    scale(capa.escala);
    tint(255, 200);
    image(fondoImg, offsetX - fondoImg.width / 2, offsetY - fondoImg.height / 2);
    pop();
  }

  // Texto
  let yPos = 80;
  const xMargin = 60;
  const contentWidth = width - xMargin * 2;

  textAlign(CENTER);
  textSize(32);
  fill(255);
  text(data.header.name, width / 2, yPos);
  yPos += 40;
  textSize(18);
  fill(220);
  text(data.header.title, width / 2, yPos);
  yPos += 35;
  textSize(16);
  fill(200);
  text(`📍 ${data.header.contact.location}`, width / 2, yPos);
  yPos += 25;
  text(`✉️ ${data.header.contact.email}`, width / 2, yPos);
  yPos += sectionSpacing + 10;

  textAlign(CENTER);
  fill(230);
  textSize(20);
  text(data.profile.title, width / 2, yPos);
  yPos += 30;
  textAlign(CENTER);
  fill(200);
  textSize(15);
  text(data.profile.text, xMargin, yPos, contentWidth);
  yPos += textHeight(data.profile.text, contentWidth, 15) + sectionSpacing;

  textAlign(CENTER);
  fill(230);
  textSize(20);
  text(data.toolbox.title, width / 2, yPos);
  yPos += 30;
  textAlign(CENTER);
  for (const categoryName in data.toolbox.categories) {
    fill(210);
    textSize(17);
    text(categoryName, width / 2, yPos);
    yPos += 25;
    for (const point of data.toolbox.categories[categoryName]) {
      fill(190);
      textSize(14);
      text(`• ${point}`, xMargin + 10, yPos, contentWidth - 10);
      yPos += textHeight(point, contentWidth - 10, 14) + 8;
    }
    yPos += 20;
  }

  yPos += sectionSpacing - 15;
  textAlign(CENTER);
  fill(230);
  textSize(20);
  text(data.experience.title, width / 2, yPos);
  yPos += 30;
  textAlign(CENTER);
  for (const project of data.experience.projects) {
    fill(210);
    textSize(17);
    text(project.name, xMargin, yPos, contentWidth);
    yPos += textHeight(project.name, contentWidth, 17) + 12;
    for (const point of project.points) {
      fill(190);
      textSize(14);
      text(`• ${point}`, xMargin + 10, yPos, contentWidth - 10);
      yPos += textHeight(point, contentWidth - 10, 14) + 8;
    }
    yPos += 20;
  }

  // Iconos redes
  yPosIcons = yPos + sectionSpacing;
  const iconSize = 40;
  const iconSpacing = 60;
  const totalWidth = data.socials.length * iconSize + (data.socials.length - 1) * iconSpacing;
  const startX = (width - totalWidth) / 2;

  for (let i = 0; i < data.socials.length; i++) {
    const social = data.socials[i];
    let icon;
    switch (social.name) {
      case "youtube": icon = iconYoutube; break;
      case "instagram": icon = iconInstagram; break;
      case "facebook": icon = iconFacebook; break;
      case "tiktok": icon = iconTiktok; break;
      case "behance": icon = iconBehance; break;
      case "linkedin": icon = iconLinkedin; break;
    }
    if (social.url) {
      image(icon, startX + i * (iconSize + iconSpacing), yPosIcons, iconSize, iconSize);
    }
  }

  // Ajusta la altura del canvas
  const contentHeight = yPosIcons + 60;
  if (height !== contentHeight) resizeCanvas(windowWidth, contentHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  const iconSize = 40;
  const iconSpacing = 60;
  const totalWidth = portfolioData.socials.length * iconSize + (portfolioData.socials.length - 1) * iconSpacing;
  const startX = (width - totalWidth) / 2;
  const iconY = yPosIcons;

  for (let i = 0; i < portfolioData.socials.length; i++) {
    const social = portfolioData.socials[i];
    const iconX = startX + i * (iconSize + iconSpacing);
    if (mouseX > iconX && mouseX < iconX + iconSize && mouseY > iconY && mouseY < iconY + iconSize) {
      if (social.url && social.url.startsWith("https://")) {
        window.open(social.url, "_blank", "noopener,noreferrer");
      }
    }
  }
}

function touchStarted() {
  mousePressed();
}

function textHeight(txt, text_width, text_size) {
  textSize(text_size);
  let currentLeading = textLeading();
  let words = txt.split(" ");
  let line = "";
  let linesCount = 1;
  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + " ";
    let testWidth = textWidth(testLine);
    if (testWidth > text_width && i > 0) {
      linesCount++;
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }
  return linesCount * currentLeading;
}
