import Head from "next/head";
import Image from "next/image";
import profile from "../assets/images/profile.jpg";
import SocialMedia from "@/components/SocialMedia";
import About from "@/components/About";
import ContactButtons from "@/components/ContactButtons";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Hobby from "@/components/Hobby";

const Home = () => {
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
      <main className="w full flex flex-col ">
        {/* Section About */}
        <section>
          <div className=" w-full lg:h-[80vh] grid grid-cols-1 lg:grid-cols-2">
            <div className="relative w-full h-[60vh] lg:h-[80vh]">
              <Image
                className="md:absolute position h-full"
                src={profile}
                alt="Profile"
                priority
              />
            </div>
            <div className="w-full md:h-[80vh] bg-gray-100 p-16 flex flex-col justify-center gap-12">
              <SocialMedia />
              <About />
              <ContactButtons />
            </div>
          </div>
        </section>

        {/* Section Projects&Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col pt-10">
            <h2 className="font-bold text-lg ml-8 md:ml-16">Projekty</h2>
            <Projects />
          </div>
          <div className="w-full pt-10">
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">Umiejętności</h2>
            <Skills />
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">Języki</h2>
            <Languages />
            <h2 className="font-bold text-lg ml-8 md:ml-16 ">
              Zainteresowania
            </h2>
            <Hobby />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
