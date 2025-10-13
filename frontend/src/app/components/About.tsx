import React from "react";
import logo from "../../assets/images/about.png";
import Image from "next/image"; 

const About: React.FC = () => {
  return (
    <section className="bg-dark-blue py-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-white text-xl md:text-2xl lg:text-3xl uppercase tracking-wide mb-2 font-roboto">
          SOBRE 
        </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        O que é o Hacka-USP?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
        
        <div>
          <Image
            src={logo}
            alt="Descrição da imagem sobre o HackaUSP"
            width={400}
            className="rounded-lg mx-auto"
          />
        </div>

        <div className="text-left">
            <p className="text-2xl text-light-gray leading-12 text-justify">
              Lorem ipsum dolor sit amet consectetur. Pellentesque 
              nulla bibendum tristique lacinia. A enim libero turpis 
              facilisi purus a quam. Nisl volutpat sit neque felis etiam 
              sit in tristique libero. Blandit neque fames massa auctor 
              velit elementum tempor. Ipsum ultricies venenatis nam sed 
              elementum libero nunc aliquam. 
            </p>

            <a
              href="#"
              className="text-2xl mt-6 inline-block bg-highlight text-black font-semibold py-7 px-9 rounded-lg transition-colors duration-300 hover:bg-accent"
            >
              Leia o regulamento
            </a>
        </div>

      </div>
    </section>
  );
};

export default About;