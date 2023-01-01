export const lang = {
  es: {
    headers: {
      main: "Hola, soy Jorge Ortega",
      sub: "Desarrollador Frontend",
      sub1: "Actualmente busco trabajo!",
      home: "Inicio",
      about: "Acerca de mi",
      proyects: "Proyectos",
      contact: "Contactar",
      callme: "Teléfono:",
      developer: "Desarrollador",
      knowledge: "Conocimiento",
      learning: "Actualmente estoy aprendiendo:",
      basicKnowledge: "Conocimiento básico", 
      tools: "Herramientas",
      eng: "Inglés",
      es: "Español",
      downloadCv: "Descargar Curriculum Vitae",
      aboutInfo: `        Hola, soy desarrollador <span class="text-bold mark-1">frontend</span>,
      comencé a escribir mi primer código desde los 14 años. Siempre he
      buscado la manera de
      <span class="text-bold mark-1">solucionar problemas</span>
      cotidanos a través del maravilloso mundo de la 
      <span class="text-bold mark-1">programación</span>. Actualmente tengo 18
      y me mantengo en constante
      <span class="text-bold mark-1">búsqueda de conocimiento</span>. Soy
      autodidacta, proactivo, sé trabajar en equipo y dirigir uno.`,
      aboutInfo2: `<br> Conozco varios frameworks, librerías y tecnologías web. Como: <span class="text-bold mark-1">ReactJs</span>,<span class="text-bold mark-1">TailwindCss</span> (Tambien manejo Css nativo y Vanila JS). a un nivel avanzado. Por otro lado tengo conocimiento en: Cloudfare(pages), Azure(Webs Apps), Google Cloud(APIs, Oauth) y Telegram(Bots).</br>`,
      footerText: "Hecho con amor, código fuente",
      footerTextLink: "aquí"
      
    },
    contact: {
      about:
        "Si quiere contactarse conmigo puede mandar enviar un mensaje a traves de:",
      number: "+593962716235",
      email: "garridomateo74@gmail.com",
    },
    proyects: [
      {
        title: "My Money",
        about:
          `        Una billetera digital que permite tener gestionado los
          <span class="text-bold">egresos personales</span> del usuario en un
          determinado tiempo. Almacena en el
          historial todas las
          <span class="text-bold">transacciones</span> del usuario a través de
          costos y gastos, fijos y variables que permiten hacer
          <span class="text-bold">ciencias de datos</span> con la información
          obtenida.`,
        tags: [
          "React",
          "Typescript",
          "Express",
          "TailwindCss",
          "TelegramApi",
          "GoogleApi",
        ],
        img: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085373/myMoney_rqopx1.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085300/cld-sample-3.jpg",
        ],
        web: "https://mymoneyapp.pages.dev/app/myMoney",
        onGroup: false,
      },
      {
        title: "LLK",
        about:
          `       Aplicación web que ofrece servicio de tipo
          <span class="text-bold">E-commerce </span> para empresas pequeñas
          medianas y grandes. Incluyendo
          <span class="text-bold">micro-servicios</span> como gestor de
          inventario,
          <span class="text-bold">pedidos online</span>, transacciones y
          facturación por internet.`,
        tags: [
          "React",
          "Typescript",
          "Express",
          "TailwindCss",
          "MongoDB",
          "GoogleApi",
        ],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://www.llampukaq.com",
        onGroup: true,
      },
      {
        title: "Files Manager",
        about:
          `   Aplicación sencilla creada a partir de <span class="text-bold">Batch Scripting</span> (Windows)
          Gestionaba documentos (.docx, .pdf) en carpetas con el nombre de alguna
          materia escolar. A inicios de <span class="text-bold">pandemia</span> desarrollé esto como un método
          para hacer más fácil la nueva <span class="text-bold">modalidad online</span> en el colegio.`,
        tags: ["Batch", "Python", "Windows"],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://www.llampukaq.com",
        onGroup: false,
      },
    ],
    functions: {
      copy: {
        number: "Numero copiado en portapapeles!",
        email: "Email copiado en portapapeles!",
      },
      download: "Descargando cv en español...",
      incomplete: "Completa todos los datos!",
      successSend: "Se enviaron tus datos!"
    },
    extras: {
      footer: {
        name: "Nombre", 
        input: "Escribe tu mensaje aqui",
        send: "Enviar"
      },
    },
    social: [
      {
        name: "facebook",
        url: "https://www.facebook.com/mateo.garrido.5268",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/jorgeandresyts/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/jorge-ortega-b87442254/",
      },
      {
        name: "git hub",
        url: "https://github.com/jorgeortega123",
      },
    ],
  },
  en: {
    headers: {
      main: "Hi, I am Jorge Ortega",
      sub: "Frontend Developer",
      sub1: "Currently open to work!",
      home: "Home",
      about: "About",
      proyects: "Proyects",
      contact: "Contact",
      callme: "Call me:",
      developer: "Developer",
      knowledge: "Skills",
      learning: "Currently I am learning:",
      basicKnowledge: "Basic knowledge", 
      tools: "Tools",
      eng: "English",
      es: "Spanish",
      downloadCv: "Download Curriculum Vitae",
      aboutInfo: `Hi, I'm a <span class="text-bold mark-1">frontend</span> developer, I started writing my first code since I was 14 years old. I have always looked for ways to solve everyday problems through the wonderful world of programming. I am currently 18 and I realize that this is really what I like and I want to live from it.`,
      aboutInfo2: ` I know how use frameworks, libraries and web technologies. Like: <span class="text-bold mark-1">ReactJs</span>, <span class="text-bold mark-1">TailwindCss</span> (also handle native Css and Vanila JS). at an advanced level. On the other hand I have knowledge in: Cloudfare(pages), Azure(Webs Apps), Google Cloud(APIs, Oauth) and Telegram(Bots).`,
      footerText: "Made with love. Watch code",
      footerTextLink: "here"
    },
    contact: {
      about: "Get in touch:",
      number: "+593962716235",
      email: "garridomateo74@gmail.com",
    },
    proyects: [
      {
        title: "My Money",
        about:
          "A digital wallet that allows the user-s personal expenses to be managed in a given time. Stores in the history all user transactions through fixed and variable costs and expenses that allow data science to be done with the information obtained",
        tags: [
          "React",
          "Typescript",
          "NextJS",
          "RealmDatabase",
          "TelegramApi",
          "GoogleApi",
        ],
        img: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085373/myMoney_rqopx1.png",
        ],
        web: "https://mymoneyapp.pages.dev/app/myMoney",
        onGroup: false,
      },
      {
        title: "LLK",
        about:
          "Web application that offers E-commerce service for small, medium and big companies. Including sub-services such as inventory manager, online orders, transactions and internet billing.",
        tags: [
          "React",
          "Typescript",
          "Express",
          "TailwindCss",
          "MongoDB",
          "GoogleApi",
        ],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://www.llampukaq.com",
        onGroup: true,
      },
      {
        title: "Files Manager",
        about:
          "Simple application created from Batch Scripting (Windows) Managed documents (.docx, .pdf) in folders with the name of some school subject. At the beginning of the pandemic, I developed this as a method to make the online method at school easier.",
        tags: ["Batch", "Python", "Windows"],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://www.llampukaq.com",
        onGroup: false,
      },
    ],
    functions: {
      copy: {
        number: "Number copy to clipboard!",
        email: "Email copy to clipboard!",
      },
      download: "Downloading cv in english...",
      incomplete: "Complete all inputs!",
      successSend: "Data sent success!"
    },
    extras: {
      footer: {
        input: "Let you message here",
        name: "Name", 
        send: "Send"
      },
    },
    social: [
      {
        name: "facebook",
        url: "https://www.facebook.com/mateo.garrido.5268",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/jorgeandresyts/",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/jorge-ortega-b87442254/",
      },
      {
        name: "git hub",
        url: "https://github.com/jorgeortega123",
      },
    ],
  },
  static: {
    cv: {
      es: {
        text: "Español",
        cv_pdf:
          "https://drive.google.com/uc?id=1r-x3eAw5a0VdpYgw3dVYZfCNXz7vuApY&export=download",
      },
      en: {
        text: "English",
        cv_pdf:
          "https://drive.google.com/uc?id=1xRivrp02A0NpnLYApMfdXOiNwKnBVrNj&export=download",
      },
    },
    name: "Jorge_Ortega",
    social: [
      {
        name: "instagram",
        url: "https://www.instagram.com/jorgeandresyts/",
        svg: "./../../assets/svg/instagram",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/jorge-ortega-b87442254/",
        svg: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1671229962/linkedin_yrcrig.svg",
      },
      {
        name: "git hub",
        url: "https://github.com/jorgeortega123",
        svg: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1671230113/github_mqjg2f.png",
      },
    ],
    images: [
      {
        title: "My money",
        all: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433346/Frame_1_xtlmz4.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433318/Frame_1_1_vabspw.png",
        ],
      },
      {
        title: "LLK",
        all: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670434478/Screenshot_from_2022-11-07_17-59-26_1_hnvlbu.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670434636/Frame_2_cysgp2.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670434628/Frame_3_aakioo.png",
        ],
      },
      {
        title: "Files Manager",
        all: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433485/Frame_2_2_jvxcat.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433485/Frame_1_2_rgnryp.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433485/Frame_2_3_nt77qj.png",
        ],
      },
    ],
    incomingKnowledge: [{
      title: "Angular",
      icon: "./image/angular.png",
      percentage: 57
    },{
      title: "PostgreSQL",
      icon: "./image/postgresql.png",
      percentage: 85
    }

    ]
  },
};