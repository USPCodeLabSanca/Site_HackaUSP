"use client"

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Previous: React.FC = () => {
  const editions = [
    {
      id: 0,
      image: "/previous/2016.jpg",
      date: "Agosto / 2016",
      theme: "Aproximando os jovens do mundo financeiro",
    },
    {
      id: 1,
      image: "/previous/2016-2.jpg",
      date: "Novembro / 2016",
      theme: "Criando soluções de ética em pesquisa, transparência e eficiência na gestão pública",
    },
    {
      id: 2,
      image: "/previous/2017.jpg",
      date: "Agosto / 2017",
      theme: "Utilizando a tecnologia para melhorar a produção científica",
    },
    {
      id: 3,
      image: "/previous/2017-2.jpg",
      date: "Novembro / 2017",
      theme: "Utilizando a tecnologia para criar cidades inteligentes",
    },
    {
      id: 4,
      image: "/previous/2018.jpg",
      date: "Junho / 2018",
      theme: "Aplicando Data Science para melhorar o dia a dia universitário",
    },
    {
      id: 5,
      image: "/previous/2018-2.jpg",
      date: "Novembro / 2018",
      theme: "Tecnologia a favor da sustentabilidade financeira da Universidade",
    },
    {
      id: 6,
      image: "/previous/2019.jpg",
      date: "Abril / 2019",
      theme: "Smart Campus - Aplicações de tecnologia na Universidade",
    },
    {
      id: 7,
      image: "/previous/2024.jpg",
      date: "Novembro / 2024",
      theme: "Tecnologias para Sustentabilidade Digital",
    },
    {
      id: 8,
      image: "/previous/2025.jpg",
      date: "Novembro / 2025",
      theme: "Tecnologias inovadoras para acessibilidade e inclusão digital",
    },
  ];

  return (
    <section id="edicoes" className="bg-dark-blue py-16 px-4 sm:px-8 text-center font-roboto overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <p className="text-light-gray text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
          NOSSA HISTÓRIA 
        </p>
        <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-6">
          Edições Anteriores
        </h2>
        
        <div className="relative w-full pb-10">
          <div className="hidden md:block absolute top-[50%] left-0 right-0 h-1 bg-highlight/20 -z-0"></div>

          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full !pb-12"
          >
            {editions.map((edition, index) => (
              <SwiperSlide key={edition.id}>
                <div className="flex flex-col group relative rounded-xl overflow-hidden bg-slate-900 border border-highlight/30 hover:border-highlight h-full z-10 shadow-lg">

                  <div className="relative w-full h-[220px] overflow-hidden">
                    <Image 
                      src={edition.image} 
                      alt={`Edição ${edition.id}`} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  <div className="p-6 text-left flex flex-col flex-grow bg-slate-900">
                    <span className="text-highlight font-orbitron font-bold text-sm tracking-widest mb-2 block">
                      {edition.date}
                    </span>
                    <h3 className="text-white text-xl font-bold leading-tight">
                      {edition.theme}
                    </h3>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Previous;