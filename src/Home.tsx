import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    // scroll-smooth scroll bo'lganda silliq tushishini ta'minlaydi
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden scroll-smooth"> 
      
      {/* 1. NAVBAR */}
      <header className="bg-blue-200 p-4 md:p-6 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
        <div className="text-xl font-bold text-blue-950">TheBude Dev</div>
        <nav className="space-x-4 md:space-x-15 text-sm font-medium">
          <a href="#home" className="px-3 py-2 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-none transition-all duration-150 inline-block">
            Bosh Menyu
          </a>
          
          {/* Yangi sahifa ochadigan yagona tugma (Loyihalar) */}
          <Link to="/projects" className="px-3 py-2 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-none transition-all duration-150 inline-block">
            Loyihalar
          </Link>

          {/* Pastga tushiruvchi linklar */}
          <a href="#about" className="px-3 py-2 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-none transition-all duration-150 inline-block">
            Men Haqimda
          </a>
          <a href="#contact" className="px-3 py-2 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1.5 active:shadow-none transition-all duration-150 inline-block">
            Bog'lanish
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION (Bosh sahifa) */}
      <main id="home" className="pt-28 flex-1 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 container mx-auto min-h-screen">
        <div className="md:w-1/2 flex flex-col items-start text-left space-y-6">
          <h1 className="text-2xl md:text-6xl font-bold leading-tight text-blue-900">
            Welcome to <br/>TheBude Dev
          </h1>
          <h1 className="text-lg md:text-6xl leading-tight text-blue-900">
            Full-Stack Developer
          </h1>

          <div className="flex flex-col items-start gap-4 w-full max-w-xs">
            {/* Yangi sahifaga o'tuvchi tugma */}
            <Link to="/projects" className="w-full text-center px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-[0_8px_0_0_#1d4ed8] hover:shadow-[0_4px_0_0_#1d4ed8] hover:translate-y-1 active:translate-y-2 active:shadow-none transition-all duration-150">
              Mening Loyihalarim
            </Link>
            {/* Pastga tushiruvchi tugmalar */}
            <a href="#about" className="w-full text-center px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-[0_8px_0_0_#1d4ed8] hover:shadow-[0_4px_0_0_#1d4ed8] hover:translate-y-1 active:translate-y-2 active:shadow-none transition-all duration-150">
              Men Haqimda
            </a>
            <a href="#contact" className="w-full text-center px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-[0_8px_0_0_#1d4ed8] hover:shadow-[0_4px_0_0_#1d4ed8] hover:translate-y-1 active:translate-y-2 active:shadow-none transition-all duration-150">
              Bog'lanish
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/web_d_gif.gif" 
            alt="Web Development Animation" 
            className="w-full max-w-lg h-auto max-h-[100vh] object-contain drop-shadow-lg"
          />
        </div>
      </main>

            <section id="about" className="min-h-screen bg-gray-950 p-6 md:p-12 flex flex-col items-start justify-center container mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

            {/* Chap tarafdagi rasm */}
            <div className="w-full md:w-1/3 flex justify-start">
            <img 
                src="/ABOUTME-ezgif.com-video-to-gif-converter.gif" 
                alt="Web Development Animation" 
                className="w-full max-w-xs md:max-w-sm h-auto object-contain drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)]"
            />
            </div>

            {/* O'ng tarafdagi (end) sarlavha va matn */}
            <div className="w-full md:w-2/3 flex flex-col items-end text-right">
            
            <p className="text-lg text-gray-300 max-w-2xl text-center mb-4">
                <h2 className="text-4xl font-bold text-blue-400 mb-6 text-center">
                Men Sulaymonov Bunyod
                </h2>
                Hozirda Uzbekiston Milliy unversitida Kompyuter Ilimlari va dasturlash texmologiyalari yunalishida 5-kurs masofaviy ta'lim talabasiman 3-kurs kunduzgi ta'limda oq'iganman Full-Stack dasturchiman. 
                <br /> Mohirdev Ta'lim platformasida Tizim administrotorligi va .NET, PostagreSql kurslarini muvfoqiyatli tamomlaganman. Shu bilan birga, Frontend va Backend dasturlash bo'yicha ham tajribam bor.
                <br /> Men ish tajribasiga ham egaman Corparation Solution Filandiya qo'shma kompaniyasida Software enginer .NET dasturchi bo'lib ishlaganman "2025-11" - "2026-03".
                <br /> Numa Kompaniyasida esa Marketolog va texnik xodim bulib foaliyat yuritganman "2023-09" - "2024-03"
            </p>
            </div>

        </div>
        </section>

      {/* 4. BOG'LANISH BO'LIMI (id="contact") */}
      <section id="contact" className="min-h-screen bg-white p-6 md:p-12 flex flex-col justify-start items-start container mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Bog'lanish</h2>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-4">
          Men bilan bog'lanish uchun quyidagi tarmoqlardan foydalanishingiz mumkin.
        </p>
      </section>

    </div>
  );
};

export default Home;