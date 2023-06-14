export const lang = {
  es: {
    headers: {
      main: "Hola, soy",
      sub: "Desarrollador en React",
      sub1: "Actualmente trabajo en ",
      sub_linked: "LLK",
      sub_linked_link: "https://www.llampukaq.com/",
      home: "Inicio",
      about: "Acerca de mi",
      _about: "Acerca de mi",
      proyects: "Proyectos",
      _proyects: "Habilidades puestas en práctica",
      contributions: "Contribución a la comunidad",
      _contributions: "Contribución a la comunidad",
      services: "Servicios",
      _services: "¿Qué ofrezco?",
      contact: "Contactar",
      _contact: "",
      callme: "Teléfono",
      location: "Ubicación",
      developer: "Desarrollador",
      knowledge: "Conocimiento",
      _knowledge: "Tegnologias que domino",
      my_role: "¿Qué hago en mi puesto?",
      experience: "Experiencia",
      _experience: "1 año 5 meses",
      experience_info:
        "Tengo dos funciones en mi puesto. Uno es hablar con el cliente y adaptar lo que pide en un esquema funcional de cómo se maneja el apartado visual de la App. El otro es programar exclusivamente el frontend con React. Haciendo uso de rest-api para llamar al servidor y posteriormente pasa dichos datos, a información legible para los clientes y usuarios.",
      learning: "Actualmente estoy aprendiendo:",
      basicKnowledge: "Conocimiento básico",
      visit: "Visitar",
      code: "Codigo",
      tools: "Herramientas",
      eng: "Inglés",
      es: "Español",
      downloadCv: "Descargar Curriculum Vitae",
      aboutInfo: `        Hola, soy desarrollador en <span class="text-bold mark-1">React</span>,
      escribí mi primer código a los 14 años. Siempre he
      buscado la manera de
      <span class="text-bold mark-1">solucionar problemas</span>
      cotidanos a través del maravilloso mundo de la 
      <span class="text-bold mark-1">programación</span>. Actualmente tengo 18
      y me mantengo en constante
      <span class="text-bold mark-1">búsqueda de conocimiento</span>. Me especializo en React pero aun así sé mucho acerca de otras tecnologías/librerías/frameworks.`,
      aboutInfo2: `<br> Conozco varios frameworks, librerías y tecnologías web. Como: <span class="text-bold mark-1">ReactJs</span>,<span class="text-bold mark-1">TailwindCss</span> (Tambien manejo Css nativo y Vanila JS). a un nivel avanzado. Por otro lado tengo conocimiento en: Cloudfare(pages), Azure(Webs Apps), Google Cloud(APIs, Oauth) y Telegram(Bots).</br>`,
      footerText: "Hecho con amor, código fuente",
      footerTextLink: "aquí",

      services_segment: [
        {
          title: "Compromiso total",
          text: "Ser leal a la empresa y seguir sus requerimientos por el mayor tiempo posible.",
          image: "services-1",
        },
        {
          title: "Buena organización",
          text: "Ofrezco trabajar con el paradigma Funcional y el orientado a objetos.",
          image: "services-2",
        },
        {
          title: "Trabajo colaborativo",
          text: "Me gusta trabajar en equipo y mantener una comunicación eficaz.",
          image: "services-3",
        },
        {
          title: "Calidad antes que cantidad",
          text: "Cada código escrito por mi garantiza un funcionamiento óptimo del mismo.",
          image: "services-4",
        },
      ],
    },
    repos: [
      {
        title: "react-scroll-video",
        link: "https://www.npmjs.com/package/react-scroll-video",
        description:
          "Componente que ayuda a reproducir un video con el scroll de la pagina web.",
      },
      {
        title: "react-cache-state",
        link: "https://www.npmjs.com/package/react-cache-state",
        description:
          "Componente que guarda en cacha, nombre de variables, objetos o arrays.",
      },
    ],
    contact: {
      about:
        "Si quiere contactarse conmigo puede mandar enviar un mensaje a traves de:",
      number: "+593962716235",
      email: "garridomateo74@gmail.com",
    },
    proyects: [
      {
        title: "Jet Match",
        about: `Registra tus <span class="text-bold">rutinas </span> y <span class="text-bold">préstamos bancarios</span>  de manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
        tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://jetmatch.pages.dev",
        repo: "https://github.com/jorgeortega123/JetMatch",
        onGroup: false,
      },
      {
        title: "My Money",
        about: `        Una billetera digital que permite tener gestionado los
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
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686447766/MyMoney-PNG-Size_zfpncg.png",
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1662085300/cld-sample-3.jpg",
        ],
        web: "https://mymoneyapp.pages.dev/app/myMoney",
        repo: "https://github.com/jorgeortega123/MyMoneyApp",
        onGroup: false,
      },
      {
        title: "CountDowns",
        about: `Página web que permite crear
        <span class="text-bold">conteos regresivos</span>, ya sea para recordar
        alguna <span class="text-bold">fecha importante</span> o para tener en
        cuenta cuantos días falta para que una fecha específica suceda. Tiene
        conteos predefinidos. Como
        <span class="text-bold">eventos astronómicos</span>, feriados y
        <span class="text-bold">sucesos mundiales</span>.`,
        tags: ["react"],
        img: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1674605586/Screenshot_from_2023-01-24_19-05-20_1_vtxqb6.png",
        ],
        web: "https://countdown-holidays.pages.dev/",
        repo: "https://github.com/jorgeortega123/countdown",
        onGroup: false,
      },
      {
        title: "Files Manager",
        about: `   Aplicación sencilla creada a partir de <span class="text-bold">Batch Scripting</span> (Windows)
          Gestionaba documentos (.docx, .pdf) en carpetas con el nombre de alguna
          materia escolar. A inicios de <span class="text-bold">pandemia</span> desarrollé esto como un método
          para hacer más fácil la nueva <span class="text-bold">modalidad online</span> en el colegio.`,
        tags: ["Batch", "Python", "Windows"],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://github.com/jorgeortega123/Files-manager",
        repo: "https://github.com/jorgeortega123/Files-manager",
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
      successSend: "Se enviaron tus datos!",
    },
    extras: {
      footer: {
        name: "Nombre",
        input: "Escribe tu mensaje aqui",
        send: "Enviar",
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
      main: "Hi, I am",
      sub: "React Developer",
      sub1: "Currently working at ",
      sub_linked: "LLK",
      sub_linked_link: "https://www.llampukaq.com/",
      home: "Home",
      about: "About",
      _about: "About",
      proyects: "Proyects",
      _proyects: "Skills into practice",
      contributions: "Contribution to community",
      _contributions: "Contribution to community",
      services: "Services",
      _services: "What I offer?",
      contact: "Contact",
      _contact: "Get in touch",
      callme: "Call me",
      location: "Location",
      developer: "Developer",
      knowledge: "Skills",
      _knowledge: "Technologies that I use",
      my_role: "What is my role ?",
      experience: "Experience",
      _experience: "1 year 5 months",
      experience_info:
        "I have two functions in my position. One is to talk to the client and adapt what they ask for in a functional scheme of how the visual section of the App is handled. The other is to exclusively program the frontend with React. Making use of rest-api to call the server and later passes said data, readable information for clients and users.",
      learning: "Currently I am learning:",
      basicKnowledge: "Basic knowledge",
      visit: "Visit",
      code: "Code",
      tools: "Tools",
      eng: "English",
      es: "Spanish",
      downloadCv: "Download Curriculum Vitae",
      aboutInfo: `Hello, I am a developer in <span class="text-bold mark-1">React</span>,
      I wrote my first code since I was 14 years old. I've always
      searched for the way
      <span class="text-bold mark-1">fix problems</span>
      daily through the wonderful world of
      <span class="text-bold mark-1">programming</span>. I am currently 18
      and I keep constant
      <span class="text-bold mark-1">acquire knowledge</span>. I specialize in React but I still know a lot about other technologies/libraries/frameworks. `,
      aboutInfo2: ` I know how use frameworks, libraries and web technologies. Like: <span class="text-bold mark-1">ReactJs</span>, <span class="text-bold mark-1">TailwindCss</span> (also handle native Css and Vanila JS). at an advanced level. On the other hand I have knowledge in: Cloudfare(pages), Azure(Webs Apps), Google Cloud(APIs, Oauth) and Telegram(Bots).`,
      footerText: "Made with love. Watch code",
      footerTextLink: "here",
      services_segment: [
        {
          title: "Full commitment",
          text: "Be loyal to the company and follow requirements for as long as possible.",
          image:
            "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678817561/group_r5jzkt.png",
        },
        {
          title: "Good organization",
          text: "I offer to work with the Functional paradigm and the object-oriented.",
          image:
            "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678817691/group_2_qb8vxr.png",
        },
        {
          title: "Collaborative work",
          text: "I like to work in a team and maintain effective communication.",
          image:
            "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678816061/Group_1_xvfjme.png",
        },
        {
          title: "Quality before quantity",
          text: "Each code written by me guarantees its optimal functioning.",
          image:
            "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678817639/group_1_karpnt.png",
        },
      ],
    },
    repos: [
      {
        title: "react-scroll-video",
        link: "https://www.npmjs.com/package/react-scroll-video",
        description:
          "Component that reproduce a video when user scroll the page web.",
      },
      {
        title: "react-cache-state",
        link: "https://www.npmjs.com/package/react-cache-state",
        description:
          "Component that save in cache names of variables, objects or arrays.",
      },
    ],
    contact: {
      about: "Get in touch:",
      number: "+593962716235",
      email: "garridomateo74@gmail.com",
    },
    proyects: [
      {
        title: "My Money",
        about: ` A digital wallet that allows you to have managed the
          <span class="text-bold">personal expenses</span>
          of the user in a certain time. Store in the
          <span class="text-bold">history</span> all
          <span class="text-bold">transactions</span> of the user through costs
          and expenses, fixed and variable that allow
          <span class="text-bold">Data sciences </span>
          with information Obtained.`,
        tags: [
          "React",
          "Typescript",
          "NextJS",
          "RealmDatabase",
          "TelegramApi",
          "GoogleApi",
        ],
        img: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686447766/MyMoney-PNG-Size_zfpncg.png",
        ],
        web: "https://mymoneyapp.pages.dev/app/myMoney",
        repo: "https://github.com/jorgeortega123/MyMoneyApp",
        onGroup: false,
      },
      {
        title: "CountDowns",
        about: `Web page that allows you to create
                 <span class="text-bold">countdowns</span>, whether to remember
                 some <span class="text-bold">important date</span> or to keep in mind
                 Count how many days until a specific date happens. Have
                 predefined counts. Such as
                 <span class="text-bold">astronomical events</span>, holidays and
                 <span class="text-bold">world events</span>.`,
        tags: ["React"],
        img: [
          "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1674605586/Screenshot_from_2023-01-24_19-05-20_1_vtxqb6.png",
        ],
        web: "https://countdown-holidays.pages.dev/",
        repo: "https://github.com/jorgeortega123/countdown",
        onGroup: false,
      },
      {
        title: "Files Manager",
        about: `     Simple application created from
          <span class="text-bold">Batch Scripting</span> (Windows) Managed
          documents (.docx, .pdf) in folders with the name of some school subject.
          At the beginning of the <span class="text-bold">pandemic</span>, I
          developed this as a method to make the
          <span class="text-bold">online method</span> at school easier.`,
        tags: ["Batch", "Python", "Windows"],
        img: [
          "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
        ],
        web: "https://github.com/jorgeortega123/Files-manager",
        repo: "https://github.com/jorgeortega123/Files-manager",
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
      successSend: "Data sent success!",
    },
    extras: {
      footer: {
        input: "Let you message here",
        name: "Name",
        send: "Send",
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
        svg: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678901453/174855_ikozff.png",
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
        key: "jm",
      },
      {
        title: "My money",
        key: "mym",
      },
      {
        title: "CountDowns",
        key: "ctn",
      },
      {
        title: "Files Manager",
        key: "flm",
      },
    ],
    incomingKnowledge: [
      {
        title: "PostgreSQL",
        icon: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1672536522/postgresql_mrf5at.png",
        percentage: 79,
      },
      {
        title: "Laravel",
        icon: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1672891267/laravel_hwybdn.png",
        percentage: 57,
      },
    ],
  },
};

// {
//   title: "LLK",
//   about: `       Aplicación web que ofrece servicio de tipo
//     <span class="text-bold">E-commerce </span> para empresas pequeñas
//     medianas y grandes. Incluyendo
//     <span class="text-bold">micro-servicios</span> como gestor de
//     inventario,
//     <span class="text-bold">pedidos online</span>, transacciones y
//     facturación por internet.`,
//   tags: [
//     "React",
//     "Typescript",
//     "Express",
//     "TailwindCss",
//     "MongoDB",
//     "GoogleApi",
//   ],
//   img: [
//     "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
//   ],
//   web: "https://www.llampukaq.com",
//   repo: "https://www.llampukaq.com",
//   onGroup: true,
// },
// {
//   title: "LLK",
//   about: `Web application that offers
//     <span class="text-bold">E-commerce service</span> for small, medium and
//     big companies. Including <span class="text-bold">sub-services</span>
//     such as inventory manager, <span class="text-bold">online orders</span>,
//     transactions and internet billing.`,
//   tags: [
//     "React",
//     "Typescript",
//     "Express",
//     "TailwindCss",
//     "MongoDB",
//     "GoogleApi",
//   ],
//   img: [
//     "https://res.cloudinary.com/luisgarrido/image/upload/v1662252280/Screenshot_55_uiu6he.png",
//   ],
//   web: "https://www.llampukaq.com",
//   repo: "https://www.llampukaq.com",
//   onGroup: true,
// },

// {
//   title: "LLK",
//   key: "llk",
//   all: [
//     "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670434478/Screenshot_from_2022-11-07_17-59-26_1_hnvlbu.png",
//   ],
// },
