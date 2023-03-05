import React from "react";

const About = () => {
  return (
    <div className="flex flex-col ">
      <p className="text-xs md:text-sm mb-4">Front End Developer</p>
      <h2 className="text-4xl 2xl:text-5xl font-extrabold mb-6 2xl:mb-10 ">Patryk Kobylarczyk</h2>
      <div className="text-sm 2xl:text-base flex flex-col gap-6">
        <p>
          Front End Developer z wieloletnim doświadczeniem, któremu bliżej do
          Javascript developera niż do developera jednego freameworka. Lubię
          czysty, semantyczny, czytelny kod, i taki sam design.
        </p>
        <p>
          Lubię dobry UX i funkcjonalne rozwiązania, dlatego wartości z książki
          “Nie każ mi myśleć” są mi bardzo bliskie. Angażuję się w prace
          związane z user experience, wspieram wartościowe rozwiązanie i lubię o
          nich dyskutować. W komunikacji jestem zwolennikiem pełnej otwartości i
          szczerości.
        </p>
        <p>
          Uważam, że frontend developer nie powinien być skupiony tylko na
          programowaniu czy stylowaniu lecz w obu tych obszarach powinien
          pracować wydajnie.
         </p>
      </div>
    </div>
  );
};

export default About;
