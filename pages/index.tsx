import Head from "next/head";
import Image from "next/image";
import profile from "../assets/images/profile.jpg";
import SocialMedia from "@/components/SocialMedia";
import About from "@/components/About";
import ContactButtons from "@/components/ContactButtons";
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

const projectsData = [
  {
    id: 1,
    name: "Duo Milonga",
    date: "12/2022-01/2023",
    title: "Music group website.",
    description:
      "the main goals were to play with pictures and to be able to listen to music.",
    stack: [
      { name: "Gatsby", icon: <SiGatsby /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ,
      ,
    ],
    links: {
      github: "https://github.com/PatrykKobylarczyk/duo-milonga",
      live: "https://duomilonga.pl/",
    },
  },
  {
    id: 2,
    name: "Netflix clone",
    date: "11/2022-12/2022",
    title: "Netflix clone.",
    description:
      "The main goals were connection to Firebase, possibility of payment, mapping the original.",
    stack: [
      { name: "Next JS", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MUI", icon: <SiMui /> },
      { name: "Stripe", icon: <BsStripe /> },
    ],
  },
  {
    id: 3,
    name: "Fishky",
    date: "05/2022-06/2022",
    title: "Fishky.",
    description:
      "An app with popular flashcards for learning languages or whatever category you can think of. ",
    stack: [
      { name: "React", icon: <SiReact /> },
      { name: "Sass", icon: <SiSass /> },
    ],
  },
];

const Home = () => {

  const projects = projectsData.map(
    ({ name, title, date, description, stack, id }: any) => {
      return (
        <div id={id} className="flex px-5 md:px-16">
          <div className="w-full py-10 col-span-1  border-r-[1px] br-gray-700 flex justify-end items-start">
            <div className="flex flex-col items-end mr-5 gap-5">
              <h2 className="font-bold">{name}</h2>
              <p>{date}</p>
            </div>
          </div>
          <div className="w-full py-10 col-span-2  ml-5">
            <div className="flex flex-col items-start gap-5">
              <h2 className="font-bold">{title}</h2>
              <p>{description}</p>
              <ul className="flex flex-wrap text-lg gap-2">
                {stack.map((el: any, i: number) => (
                  <li key={i} className="tooltip cursor-pointer">
                    {el.icon}{" "}
                    <span className="tooltiptext mt-2">{el.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
      <Head>
        <title>Patryk Kobylarczyk | CV</title>
        <meta
          name="description"
          content="Curriculum Vitae | Patryk Kobylarczyk | Frontend developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w full flex flex-col overflow-x-hidden">
        <section>
          <div className=" w-full md:h-[75vh] grid grid-cols-1 md:grid-cols-2">
            <div className="relative marker:w-full h-[75vh]">
              <Image
                className="md:absolute position h-full"
                src={profile}
                alt="Profile"
                priority
              />
            </div>
            <div className="w-full md:h-[75vh] bg-gray-100 p-16 flex flex-col justify-center gap-12">
              <SocialMedia />
              <About />
              <ContactButtons />
            </div>
          </div>
        </section >
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col py-20">{projects}</div>

          <div></div>
        </section>
      </main>
    </>
  );
};

export default Home;
