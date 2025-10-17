import React from "react";

const Subscription: React.FC = () => {
  return (
    <section id="inscricao" className="bg-dark-blue py-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-light-gray text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
          GARANTA SUA VAGA 
        </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        Inscrição
      </h2>

      <div className="mt-22 max-w-6xl mx-auto grid grid-lines-2 md:grid-lines-2 gap-20 items-center">

        <div className="text-left">
            <p className="text-xl md:text-2xl mx-6 md:mx-0 mb-4 text-light-gray leading-8 text-center">
              Não perca as oportunidades do maior Hackathon da USP!
            </p>
            <p className="text-xl md:text-2xl mx-6 md:mx-0 text-light-gray leading-8 text-center">
              Chame seus amigos e tenha chance de ganhar ótimas experiências e prêmios!
            </p>
        </div>
        <div>
          <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0NXXUtO2sdmwDLPyE579wz6Z-VAvxd2AQUckh5f1sDRZr8A/viewform"
              className="text-2xl mt-6 inline-block bg-highlight text-black font-semibold py-7 px-24 rounded-lg transition-colors duration-300 hover:bg-accent"
            >
              Inscreva-se
            </a>
        </div>
      </div>
    </section>
  );
};

export default Subscription;