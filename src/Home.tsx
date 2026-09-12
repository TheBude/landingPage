import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    // scroll-smooth scroll bo'lganda silliq tushishini ta'minlaydi
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between overflow-x-hidden scroll-smooth"> 
      
      {/* 1. NAVBAR */}
      <header className="bg-blue-200/90 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center shadow-md fixed top-0 w-full z-50">
        <div className="text-lg sm:text-xl font-bold text-blue-950 truncate">TheBude Dev</div>
        <nav className="flex items-center gap-1 sm:gap-3 text-xs sm:text-sm font-medium overflow-x-auto no-scrollbar">
          <a href="#home" className="px-2.5 sm:px-3 py-1.5 bg-blue-500 text-white font-bold rounded-lg sm:rounded-xl shadow-[0_4px_0_0_#1d4ed8] hover:shadow-[0_2px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150 inline-block whitespace-nowrap">
            Bosh Sahifa
          </a>
          
          <Link to="/projects" className="px-2.5 sm:px-3 py-1.5 bg-blue-500 text-white font-bold rounded-lg sm:rounded-xl shadow-[0_4px_0_0_#1d4ed8] hover:shadow-[0_2px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150 inline-block whitespace-nowrap">
            Loyihalar
          </Link>

          <a href="#about" className="px-2.5 sm:px-3 py-1.5 bg-blue-500 text-white font-bold rounded-lg sm:rounded-xl shadow-[0_4px_0_0_#1d4ed8] hover:shadow-[0_2px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150 inline-block whitespace-nowrap">
            Men Haqimda
          </a>
          
          <a href="#contact" className="px-2.5 sm:px-3 py-1.5 bg-blue-500 text-white font-bold rounded-lg sm:rounded-xl shadow-[0_4px_0_0_#1d4ed8] hover:shadow-[0_2px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150 inline-block whitespace-nowrap">
            Bog'lanish
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION (Bosh sahifa) */}
      <main id="home" className="pt-24 sm:pt-28 flex-1 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 container mx-auto min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-blue-900">
              Welcome to <br className="hidden sm:inline" />TheBude Dev
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-blue-700">
              Full-Stack Developer
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 sm:gap-4 w-full max-w-xs">
            <Link to="/projects" className="w-full text-center px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150">
              Mening Loyihalarim
            </Link>
            <a href="#about" className="w-full text-center px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150">
              Men Haqimda
            </a>
            <a href="#contact" className="w-full text-center px-4 py-3 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_3px_0_0_#1d4ed8] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all duration-150">
              Bog'lanish
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/web_d_gif.gif" 
            alt="Web Development Animation" 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain drop-shadow-lg"
          />
        </div>
      </main>

      {/* 3. MEN HAQIMDA BO'LIMI */}
      <section id="about" className="min-h-screen bg-gray-950 p-6 md:p-12 flex flex-col items-center justify-center container mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Chap tarafdagi rasm */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img 
              src="/ABOUTME-ezgif.com-video-to-gif-converter.gif" 
              alt="Web Development Animation" 
              className="w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)]"
            />
          </div>

          {/* O'ng tarafdagi sarlavha va matn */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-end text-center md:text-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">
              Men Sulaymonov Bunyod
            </h2>
            <div className="text-base sm:text-lg text-gray-300 max-w-2xl space-y-4 leading-relaxed">
              <p>
                Hozirda O'zbekiston Milliy universitetida Kompyuter ilmlari va dasturlash texnologiyalari yo'nalishida 5-kurs masofaviy ta'lim talabasiman (3-kursni kunduzgi ta'limda o'qiganman). Full-Stack dasturchiman.
              </p>
              <p>
                Mohirdev Ta'lim platformasida Tizim administratorligi, .NET hamda PostgreSQL kurslarini muvaffaqiyatli tamomlaganman. Shu bilan birga, Frontend va Backend dasturlash bo'yicha ham tajribam bor.
              </p>
              <p>
                Men ish tajribasiga ham egaman: <span className="text-blue-300 font-semibold">Corporation Solution (Finlandiya)</span> qo'shma korxonasida Software Engineer (.NET dasturchi) bo'lib faoliyat yuritganman (2025-11 - 2026-03).
              </p>
              <p>
                <span className="text-blue-300 font-semibold">Numa</span> kompaniyasida esa Marketolog va texnik xodim bo'lib ishlaganman (2023-09 - 2024-03).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BOG'LANISH BO'LIMI (id="contact") */}
      <section id="contact" className="min-h-screen bg-purple-950 px-4 py-12 md:p-12 flex flex-col justify-center items-center container mx-auto text-white">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          
          {/* Sarlavha va matn */}
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-3">
            📞 Bog'lanish
          </h2>
          <p className="text-base sm:text-lg text-purple-200 max-w-2xl mb-8 leading-relaxed">
            Men bilan bog'lanish uchun quyidagi tarmoqlardan foydalanishingiz mumkin.
          </p>

          {/* Ma'lumotlar kartochkalari tarmog'i */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            
            {/* Telefon raqam */}
            <a 
              href="tel:+99850072270" 
              className="flex items-center gap-4 p-4 sm:p-5 bg-purple-900/60 border border-purple-800 rounded-xl sm:rounded-2xl hover:border-purple-400 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-950/50"
            >
              <span className="text-2xl sm:text-3xl shrink-0">📱</span>
              <div className="text-left overflow-hidden">
                <p className="text-xs text-purple-300 font-medium">Telefon Raqam</p>
                <p className="text-base sm:text-lg font-bold text-purple-200 truncate">+998 50 072 22 70</p>
              </div>
            </a>

            {/* E-mail */}
            <a 
              href="mailto:Sbunyod15@gmail.com" 
              className="flex items-center gap-4 p-4 sm:p-5 bg-purple-900/60 border border-purple-800 rounded-xl sm:rounded-2xl hover:border-purple-400 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-950/50"
            >
              <span className="text-2xl sm:text-3xl shrink-0">✉️</span>
              <div className="text-left overflow-hidden">
                <p className="text-xs text-purple-300 font-medium">E-mail</p>
                <p className="text-base sm:text-lg font-bold text-purple-200 truncate">Sbunyod15@gmail.com</p>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/the_bude" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 sm:p-5 bg-purple-900/60 border border-purple-800 rounded-xl sm:rounded-2xl hover:border-purple-400 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-950/50"
            >
              <span className="text-2xl sm:text-3xl shrink-0">✈️</span>
              <div className="text-left overflow-hidden">
                <p className="text-xs text-purple-300 font-medium">Telegram</p>
                <p className="text-base sm:text-lg font-bold text-purple-200 truncate">@the_bude</p>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/TheBude" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 sm:p-5 bg-purple-900/60 border border-purple-800 rounded-xl sm:rounded-2xl hover:border-purple-400 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-950/50"
            >
              <span className="text-2xl sm:text-3xl shrink-0">💻</span>
              <div className="text-left overflow-hidden">
                <p className="text-xs text-purple-300 font-medium">GitHub</p>
                <p className="text-base sm:text-lg font-bold text-purple-200 truncate">github.com/TheBude</p>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;