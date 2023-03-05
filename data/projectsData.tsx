import {
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { BsStripe } from "react-icons/bs";

export const projectsData = [
  {
    id: 1,
    name: "Duo Milonga",
    date: "12/2022-01/2023",
    titlePL: "Strona internetowa zespołu muzycznego.",
    titleEN: "Music group website.",
    descriptionPL:
      "Głównym celem była gra zdjęciami oraz możliwość słuchania muzyki.",
    descriptionEN:
      "The main goals were to play with pictures and to be able to listen to music.",
    stack: [
      { name: "Gatsby", icon: <SiGatsby /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/duo-milonga",
      },
      {
        name: "live",
        link: "https://duomilonga.pl/",
      },
    ],
  },
  {
    id: 2,
    name: "Netflix clone",
    date: "11/2022-12/2022",
    titlePL: "Klon Platformy Netflix.",
    titleEN: "Netflix clone.",
    descriptionPL:
      "Głównym celem było połączenie aplikacji z FIrebase, podłączenie płatności, odwzorowanie oryginalnej strony.",
    descriptionEN:
      "The main goals were connection to Firebase, possibility of payment, mapping the original.",
    stack: [
      { name: "Next JS", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MUI", icon: <SiMui /> },
      { name: "Stripe", icon: <BsStripe /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/Netflix",
      },
      {
        name: "live",
        link: "https://netflix-peach-ten.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    name: "Fishky",
    date: "05/2022-06/2022",
    titlePL: "Fishky.",
    titleEN: "Fishky.",
    descriptionPL:
      "Aplikacja z popularnymi fiszkami do nauki języków lub cokolwiek sobie wymarzysz.",
    descriptionEN:
      "An app with popular flashcards for learning languages or whatever category you can think of. ",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "Sass", icon: <SiSass /> },
    ],
    links: [
      {
        name: "github",
        link: "https://github.com/PatrykKobylarczyk/fishky",
      },
      {
        name: "live",
        link: "https://patrykkobylarczyk.github.io/fishky/",
      },
    ],
  },
];
