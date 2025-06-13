"use client"
import { useState } from "react";
import { BannerSection } from "../components/BannerSection";
import { AproposSection } from "../components/AProposSection";
import ValeursSection from "../components/ValeursSection";
import { EquipeSection } from "../components/EquipeSection";
import { Footer } from "../components/Footer";




export default function About() {
  const [activeTab, setActiveTab] = useState("apropos");

  return (
    <>
      <BannerSection />

      <section className="relative px-6 py-12 bg-white w-full mx-auto">
        {/* Onglets de navigation */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap relative w-full">
          <button
            className={`px-5 py-2 rounded-full font-semibold shadow transition duration-300 ${
              activeTab === "apropos"
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-green-300 text-green-900 hover:bg-green-400"
            }`}
            onClick={() => setActiveTab("apropos")}
          >
            QUI SOMMES-NOUS
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold shadow transition duration-300 ${
              activeTab === "valeurs"
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-green-300 text-green-900 hover:bg-green-400"
            }`}
            onClick={() => setActiveTab("valeurs")}
          >
            NOS VALEURS
          </button>
          <button
            className={`px-5 py-2 rounded-full font-semibold shadow transition duration-300 ${
              activeTab === "equipe"
                ? "bg-green-700 text-white hover:bg-green-800"
                : "bg-green-300 text-green-900 hover:bg-green-400"
            }`}
            onClick={() => setActiveTab("equipe")}
          >
            NOTRE ÉQUIPE
          </button>
        </div>

        {/* Affichage conditionnel selon l’onglet actif */}
        {activeTab === "apropos" && <AproposSection />}
        {activeTab === "valeurs" && <ValeursSection />}
        {activeTab === "equipe" && <EquipeSection />}
      </section>

      <Footer />
    </>
  );
}

