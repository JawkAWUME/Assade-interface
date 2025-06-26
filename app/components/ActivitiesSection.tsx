import React from "react";

const activites = [
  {
    image: "/depistage.png",
    titre: "Dépistage communautaire et vaccination communautaire",
  },
  {
    image: "/intrants.png",
    titre: "Distribution des intrants pour lutter contre certaines maladies",
  },
  {
    image: "/mobilisation.png",
    titre: "Mobilisation et sensibilisation communautaire",
  },
  {
    image: "/campagnes.png",
    titre: "Campagnes de santé",
  },
  {
    image: "/planning.png",
    titre: "Planning familial",
  },
  {
    image: "/pathologies.png",
    titre: "La prise en charge de certaines pathologies",
  },
];
const ActivitesSection = () => {
  return (
    <section className="bg-white py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
          Nos principales activités de terrain
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activites.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border rounded-xl shadow-md bg-white transition hover:shadow-lg"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.titre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-green-200 text-center px-4 py-4">
                <p className="text-gray-800 font-medium">{item.titre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitesSection;
