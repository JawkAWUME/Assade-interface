'use client';

import { useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/pic1.png')" }}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 bg-green-700 bg-opacity-80">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Assade.png" alt="Logo Assade" width={96} height={64} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <li><a href="/about" className="hover:text-yellow-300">A PROPOS</a></li>
          <li><a href="/activities" className="hover:text-yellow-300">ACTIVITES</a></li>
          <li><a href="/projects" className="hover:text-yellow-300">PROJETS</a></li>
          <li><a href="/contact" className="hover:text-yellow-300">CONTACTS</a></li>
          <li>
            <a href="/donate" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-bold transition">
              FAIRE UN DON
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-20 left-0 right-0 bg-green-700 bg-opacity-90 text-white font-semibold z-50 flex flex-col space-y-2 px-6 py-4">
          <li><a href="/about" className="hover:text-yellow-300">A PROPOS</a></li>
          <li><a href="/activities" className="hover:text-yellow-300">ACTIVITES</a></li>
          <li><a href="/projects" className="hover:text-yellow-300">PROJETS</a></li>
          <li><a href="/contact" className="hover:text-yellow-300">CONTACTS</a></li>
          <li>
            <a href="/donate" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-bold text-center transition">
              FAIRE UN DON
            </a>
          </li>
        </ul>
      )}

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50 h-[85vh]">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Construire un monde meilleur</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          L'association ASSADE œuvre pour les populations rurales vulnérables à
          prendre soin de leur propre santé et les accompagner dans le développement
          de leurs communautés.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Voir les projets
          </a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Nous Contacter
          </a>
        </div>
      </div>
    </header>
  );
};
