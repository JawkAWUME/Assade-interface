import { useState } from "react";

export const Header = () => {
     const [menuOpen, setMenuOpen] = useState(false);
    return (
         <header className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('pic1.png')" }}>
        <nav className="flex justify-between items-center p-4 bg-green-700 bg-opacity-80">
          <div className="flex items-center gap-2">
            <img src="Assade.png" alt="Logo Assade" className="w-24"/>
          </div>
          <ul className="hidden md:flex gap-6 text-white font-semibold space-x-4">
            <li><a href="/about" className="hover:text-yellow-300">A PROPOS</a></li>
            <li><a href="/activities" className="hover:text-yellow-300">ACTIVITES</a></li>
            <li><a href="/projects" className="hover:text-yellow-300">PROJETS</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">CONTACTS</a></li>
            <li>
              <a href="/donate" className="bg-green-500 hover:bg-green-600 transition px-4
              py-2 rounded text-white font-bold">
                FAIRE UN DON
              </a>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">&#9776;</button>
          </div>
        </nav>
          <div style={{ paddingBottom: "-10vh"}} className="relative inset-0 flex flex-col items-center justify-center
          text-center px-4 bg-black bg-opacity-50 h-[90vh]">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up delay-1">
              Construire un monde meilleur
            </h1>
            <p className="text-lg md:text-xl mb-6 fade-in-up delay-2 max-w-2xl">
              L'association ASSADE oeuvre pour les populations rurales vulnérables à
              prendre soin de leur propre santé et les accompagner dans le développement
                de leurs communautés .
            </p>
            <div className="flex gap-4 fade-in-up delay-3">
              <a href="#" className="bg-green-500 hover:bg-green-600 px-6 py-3
              rounded-full font-semibold transition-all duration-300">
                Voir les projets
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-3
              rounded-full font-semibold transition-all duration-300">
               Nous Contacter</a>
            </div>
          </div>
      </header>
    );
}