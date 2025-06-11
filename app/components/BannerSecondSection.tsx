"use client";

import { useState } from "react";
import Image from "next/image";

export const BannerSecondSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full">
      <nav className="flex justify-between items-center p-4 bg-green-700 bg-opacity-80">
        <div className="flex items-center gap-2">
          <a href="/" className="hover:text-yellow-300">
            <img src="/Logo_ASSADE.jpg" alt="Logo Assade" className="w-24" />
          </a>
        </div>
        <ul className="hidden md:flex gap-6 text-white font-semibold space-x-4">
          <li><a href="/about" className="hover:text-yellow-300">A PROPOS</a></li>
          <li><a href="/activities" className="hover:text-yellow-300">ACTIVITES</a></li>
          <li><a href="/projects" className="hover:text-yellow-300">PROJETS</a></li>
          <li><a href="/contact" className="hover:text-yellow-300">CONTACTS</a></li>
          <li>
            <a href="/donate" className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded text-white font-bold">
              FAIRE UN DON
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-green-700 bg-opacity-95 text-white font-semibold px-6 py-4 space-y-2">
          <a href="/about" className="block hover:text-yellow-300">A PROPOS</a>
          <a href="/activities" className="block hover:text-yellow-300">ACTIVITES</a>
          <a href="/projects" className="block hover:text-yellow-300">PROJETS</a>
          <a href="/contact" className="block hover:text-yellow-300">CONTACTS</a>
          <a href="/donate" className="block bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-bold text-center">
            FAIRE UN DON
          </a>
        </div>
      )}

      <div className="relative w-full max-h-[700px] mx-auto">
        <Image
          src="/Contact.png"
          alt="Bannière de contact"
          width={1920}
          height={600}
          layout="responsive"
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
};
