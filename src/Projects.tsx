import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-200 p-4 md:p-6 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold text-blue-950">TheBude Dev</div>
        <nav className="space-x-4 text-sm font-medium">
          <Link to="/" className="px-3 py-2 bg-blue-500 text-white font-bold rounded-xl shadow-[0_6px_0_0_#1d4ed8]">
            Bosh Menyu
          </Link>
        </nav>
      </header>

      {/* Loyihalar ro'yxati joylashadigan joy */}
      <main className="flex-1 container mx-auto p-6 md:p-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Mening Loyihalarim</h1>
        <p className="text-gray-700">Bu yerda sizning loyihalaringiz ko'rinadi.</p>
      </main>
    </div>
  );
};

export default Projects;