import React from "react";

const Subscription: React.FC = () => {
  return (
    <section id="inscricao" className="bg-background pt-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-neutral-light text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
          GARANTA SUA VAGA 
        </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        Inscrição
      </h2>

      <div className="mt-12 max-w-6xl mx-auto grid grid-lines-2 md:grid-lines-2 gap-10 items-center">

        <div className="text-left">
            <p className="text-xl md:text-2xl mx-6 md:mx-0 mb-4 text-neutral-light leading-8 text-center">
              Não perca as oportunidades do maior Hackathon da USP!
            </p>
            <p className="text-xl md:text-2xl mx-6 md:mx-0 text-neutral-light leading-8 text-center">
              Chame seus amigos e tenha chance de ganhar ótimas experiências e prêmios!
            </p>
        </div>
        <div>
          <a
              // quando houver link de inscrição: adicionar href e as classes "bg-highlight hover:bg-primary-darker"
              href="https://forms.gle/WcoDN1SYLFCyKqp68"
              className="text-2xl inline-block bg-highlight hover:bg-primary light:hover:bg-primary-dark text-white font-semibold py-7 px-24 rounded-lg transition-colors duration-300"
            >
              Inscreva-se
            </a>
        </div>
      </div>
    </section>
  );
};

export default Subscription;