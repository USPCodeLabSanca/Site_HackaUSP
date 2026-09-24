"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const About: React.FC = () => {
  const images = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
    "/images/foto4.jpg",
    "/images/foto5.jpg"
  ];

  return (
    <section id="sobre" className="bg-dark-blue py-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-light-gray text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
          SOBRE 
        </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        O que é o HackaUSP?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image 
                    src={src} 
                    alt={`Hacka-USP momento ${index + 1}`} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-left ">
            <p className="text-xl md:text-2xl mx-6 md:mx-0 text-light-gray leading-12 text-justify">
              O HackathonUSP é uma iniciativa da USP que reúne a comunidade 
              uspiana com um propósito transformador: desenvolver 
              soluções tecnológicas de impacto que impulsionem a inovação 
              dentro da universidade. O evento é organizado pelo CodeLab 
              em parceria com o Núcleo de Empreendedorismo da USP (NEU)
            </p>

            {/* <a
              href="#"
              className="text-2xl mt-6 inline-block bg-highlight text-black font-semibold py-7 px-9 rounded-lg transition-colors duration-300 hover:bg-accent"
            >
              Leia o regulamento
            </a> */}
        </div>

      </div>
    </section>
  );
};

export default About;