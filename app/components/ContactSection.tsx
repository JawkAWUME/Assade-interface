'use client';

import React from "react";
import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

// Lazy-load de la carte client-side uniquement
const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
});

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Formulaire */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Contactez-nous, nous serons heureux d’échanger avec vous
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Votre prénom"
                className="w-full border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <input
              type="tel"
              placeholder="Votre téléphone"
              className="w-full border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              rows={5}
              placeholder="Votre message"
              className="w-full border border-green-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Infos & carte interactive */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-green-600" />
              <span>Guider, Cameroun</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-green-600" />
              <span className="font-bold text-black">+237 698228215</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-green-600" />
              <span className="font-medium text-black">contact@assade.org</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MessageSquare className="text-green-600" />
              <span className="font-bold text-black">+237 653746919</span>
            </div>
          </div>

          {/* Carte interactive */}
          <div className="h-64 rounded-md overflow-hidden shadow-md">
            <MapClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
