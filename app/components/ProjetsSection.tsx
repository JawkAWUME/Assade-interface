import React from "react";

const projets = [
  {
    titre: "PROJET DEPISTAGE GRATUIT",
    image: "/depistage-vih.png",
  },
  {
    titre: "PROJET ORPHELINAT",
    image: "/orphelinat.png",
  },
];

const ProjetsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 mt-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projets.map((projet, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02]"
          >
            <img
              src={projet.image}
              alt={projet.titre}
              className="w-full h-64 object-cover hover:brightness-95 transition duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 uppercase tracking-wide">
                {projet.titre}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjetsSection;
