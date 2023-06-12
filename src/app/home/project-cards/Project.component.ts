import { MyProjectsDto } from "./dto/Projexts.dto";

let thisImg = new Image()

export const myProjects: MyProjectsDto[] = [
    {
        id: 1,
        theme: 'Crowdfounding',
        name: 'Emprendar',
        summary: 'Proyecto Final / Grupal, desarrollado en el bootcamp "Soy Henry" con tematica de Crowdfunding',
        about: 'Emprendar es una plataforma comprometida con brindar apoyo a emprendedores al permitir que los usuarios contribuyan de manera significativa en la consecución de sus objetivos. Nuestra aplicación ofrece una amplia gama de oportunidades, donde no solo se pueden publicar emprendimientos, sino también proyectos que buscan respaldo financiero para ayudar a comunidades necesitadas.',
        img: thisImg.src = '../../../assets/img/project-img/Emprendar.png',
        carriedOut: '02/2023',
        link: `https://emprendar-front.vercel.app`,
        team: [
            { img: thisImg.src = '../../../assets/img/team-img/me.jpg', url: `https://www.linkedin.com/in/garcialautaro/` },
            { img: thisImg.src = '../../../assets/img/team-img/me.jpg', url: `https://www.linkedin.com/in/garcialautaro/` },
            { img: thisImg.src = '../../../assets/img/team-img/me.jpg', url: `https://www.linkedin.com/in/garcialautaro/` },
            { img: thisImg.src = '../../../assets/img/team-img/me.jpg', url: `https://www.linkedin.com/in/garcialautaro/` },
        ]
    },
    {
        id: 2,
        theme: 'Commerce',
        name: 'Wine Cellar',
        summary: 'Proyecto de promoción y presentación de vinos, diseñado específicamente para impulsar el crecimiento de un emprendimiento local en el sector vitivinícola.',
        about: 'Wine Cellar (nombre provisional) es un proyecto dedicado a la presentación integral del catálogo de vinos disponibles en un establecimiento local. Mediante esta plataforma, los usuarios podrán acceder a información detallada sobre las características destacadas de cada vino, así como verificar la disponibilidad de stock. Además, se ofrecerá la opción de realizar compras directamente a través del sitio en un futuro cercano.',
        img: thisImg.src = '../../../assets/img/project-img/Wine-cellar.jpg',
        carriedOut: 'In Progres',
        link: null,
        team: [
            { img: thisImg.src = '../../../assets/img/team-img/me.jpg', url: `https://www.linkedin.com/in/garcialautaro/` },
            { img: thisImg.src = '../../../assets/img/team-img/me.jpg', url: `https://www.linkedin.com/in/garcialautaro/` }
        ]
    },
    {
        id: 2,
        theme: '',
        name: 'Wine Cellar',
        summary: 'Proyecto de promoción y presentación de vinos, diseñado específicamente para impulsar el crecimiento de un emprendimiento local en el sector vitivinícola.',
        about: 'Wine Cellar (nombre provisional) es un proyecto dedicado a la presentación integral del catálogo de vinos disponibles en un establecimiento local. Mediante esta plataforma, los usuarios podrán acceder a información detallada sobre las características destacadas de cada vino, así como verificar la disponibilidad de stock. Además, se ofrecerá la opción de realizar compras directamente a través del sitio en un futuro cercano.',
        img: '',
        carriedOut: 'In Progres',
        link: null,
        team: [{ img: '', url: '' }]
    }
]