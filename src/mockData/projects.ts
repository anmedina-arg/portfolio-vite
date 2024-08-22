import PICountry from '../assets/PI-Country.webp';
import Ecommerce from '../assets/Ecommerce.webp';
//import MyPortfolio from "../../assets/Portfolio.webp";
import Coolco from '../assets/Coolco.webp';
import Gallery from '../assets/The-gallery.webp';
import Cats from '../assets/Cats-and-dog.webp';
import Apes from '../assets/Apes.webp';
import Tateti from '../assets/tateti.webp';
import Memory from '../assets/memory_card_game.webp';
import Sudoku from '../assets/sudoku.webp';
import Pelis from '../assets/buscador_peliculas.webp';
import Todo from '../assets/todoapp.webp';
import Orderix from '../assets/Orderix.webp';
import Kurve from '../assets/kurve.webp';
import CABSA from '../assets/cabsa.webp';

export type ProjectProps = {
  id: number;
  image: string;
  title: string;
  github: string;
  demo: string;
  description: string;
  skill: Array<string>;
};

export const projects: ProjectProps[] = [
  {
    id: 15,
    image: CABSA,
    title: 'CABSA',
    github: 'https://github.com',
    demo: 'https://www.cabsaintl.com/',
    description: '',
    skill: ['NextJS', 'Typescript', 'React', 'CSS', 'EmailJS'],
  },
  {
    id: 14,
    image: Kurve,
    title: 'Kurve',
    github: 'https://github.com',
    demo: 'https://kurve.ai//',
    description: '',
    skill: ['Vite', 'Typescript', 'React', 'CSS', 'EmmailJS'],
  },
  {
    id: 13,
    image: Orderix,
    title: 'Orderix',
    github: 'https://github.com',
    demo: 'https://orderix.co/',
    description: '',
    skill: [
      'Typescript',
      'NextJS',
      'React',
      'Tailwind',
      'NodeJS',
      'Prisma',
      'SQL',
    ],
  },
  {
    id: 12,
    image: Coolco,
    title: 'Coolco',
    github: 'http://github.com',
    demo: 'https://www.coolco.io/',
    description: "Buy a ticket, and get an NFT's gift",
    skill: ['Typescript', 'NextJS', 'React', 'StyledComponents'],
  },
  {
    id: 11,
    image: Apes,
    title: 'Apes International',
    github: 'http://github.com',
    demo: 'https://www.apesgroup.net/',
    description: 'TO COMPLETE... building in progress...',
    skill: ['Typescript', 'NextJS', 'React', 'StyledComponents'],
  },
  {
    id: 10,
    image: Gallery,
    title: 'The Gallery',
    github: 'http://github.com',
    demo: 'https://www.thegallery.live/',
    description: 'TO COMPLETE... building in progress...',
    skill: ['Typescript', 'React', 'StyledComponents'],
  },
  {
    id: 9,
    image: Cats,
    title: 'Cats and dogs',
    github: 'http://github.com',
    demo: 'https://www.catsanddogs.io/',
    description: 'TO COMPLETE... building in progress...',
    skill: ['Typescript', 'React', 'Material UI'],
  },
  {
    id: 8,
    image: Ecommerce,
    title: 'Team Project - E-commerce Davo´s shoes',
    github: 'https://github.com/Nikl4auss/henry-final-project',
    demo: 'https://github.com/Nikl4auss/henry-final-project',
    description:
      "NOT RESPONSIVE YET. The project is an e-commerce of sports shoes. Developed as a team to present at Henry's bootcamp. This project has user administration, different functionalities depending on the profile. In the administrator profile you can control and create stock, manage orders and manage registered users. The shopping cart is managed with Local Storege, you can leave the page and then resume the purchase from your cart without losing the addition! The SPA has a search bar, filters by products according to their stock, registration with Google, MeLi payment gateway and sends emails to the user with the status of their order, among other features. In addition to strengthening our technical knowledge, we have lived the experience of working as a team! with agile methodologies, organization of tasks in Trello and versioning in Github. Really great teamwork!. The technology used: Javascript | react | React-Redux | Pure CSS (modules) | Express | Node | SQL | Sequelize | Auth0 | Mailgun | MeLi payment gateway",
    skill: [
      'Javascript',
      'React - Redux',
      'CSS 3',
      'Node - Express',
      'SQL - Postgres',
      'Pasarela de pago MELI',
    ],
  },
  {
    id: 7,
    image: PICountry,
    title: 'PI - Countries Henry',
    github: 'http://github.com',
    demo: 'https://www.youtube.com/watch?v=2mivlbmIUsA&t=6s',
    description:
      "NOT RESPONSIVE YET. An individual project for Henry's bootcamp. It is a SPA in which requests are made to an external API, but you can also generate and add your own tourist activities for one or more countries. In this SPA, filters, searches, CRUD, paging and relations between tourist activities and one or more countries are carried out",
    skill: ['Javascript', 'React', 'Redux', 'SQL - Postgres'],
  },
  // {
  //   id: 6,
  //   image: MyPortfolio,
  //   title: "My Portfolio",
  //   github: "https://github.com/anmedina-arg/portfolio",
  //   //demo: "http://dribbble.com/Alien_pixels",
  //   description:
  //     "RESPONSIVE DESIGN. This is my personal portfolio, developed 100% in React with Javascript and CSS.In it I have implemented different libraries such as: SwiperJS and EmailJS.You are browsing this project!",
  //   skill: [
  //     "Media Queries - Responsive",
  //     "React",
  //     "CSS",
  //     "EmailJS",
  //     "SwiperJS",
  //   ],
  // },
  {
    id: 5,
    image: Memory,
    title: 'Memory card game',
    github: 'https://github.com/anmedina-arg/memory-card-game',
    demo: 'https://anmedina-arg.github.io/memory-card-game/',
    description: '',
    skill: ['Javascript vanilla', 'CSS modules'],
  },
  {
    id: 4,
    image: Tateti,
    title: 'tic tac toe',
    github: 'https://github.com/anmedina-arg/ta-te-ti-next',
    demo: 'https://ta-te-ti-anmedina-arg.vercel.app/',
    description: '',
    skill: ['Typescript', 'NextJS', 'React', 'Tailwind'],
  },
  {
    id: 3,
    image: Sudoku,
    title: 'Sudoku',
    github: 'https://github.com/anmedina-arg/sudoku-game-nextjs',
    demo: 'https://sudoku-game-nextjs.vercel.app/',
    description: '',
    skill: ['Typescript', 'NextJS', 'React', 'Tailwind'],
  },
  {
    id: 2,
    image: Pelis,
    title: 'buscador de peliculas',
    github: 'https://github.com/anmedina-arg/buscador-de-peliculas-vite',
    demo: 'https://6481e3d5c714880092eaaac7--fantastic-daffodil-aada43.netlify.app/',
    description: '',
    skill: ['Javascript', 'React'],
  },
  {
    id: 1,
    image: Todo,
    title: 'to do app',
    github: 'https://github.com/anmedina-arg/to-do-app-next',
    demo: 'https://to-do-app-next.vercel.app/',
    description: '',
    skill: ['Typescript', 'Next', 'React', 'Tailwind'],
  },
];
