export default function ValeursSection() {
  const valeurs = [
    {
      titre: "L’Homme au centre de toutes nos actions",
      image: "humain.png", // remplace avec ton vrai chemin
    },
    {
      titre: "La Qualité des services",
      image: "qualite.png", // remplace avec ton vrai chemin
    },
    {
      titre: "La confidentialité et la redevabilité sont une priorité",
      image: "confidentialite.png", // remplace avec ton vrai chemin
    },
  ];

  return (
    <section id="nos-valeurs" className="bg-white py-12 px-6">
      <div className="flex justify-center gap-3 mb-10 flex-wrap relative w-full">
        <button className="bg-green-300 text-green-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-green-400 transition duration-300">
          QUI SOMMES-NOUS
        </button>
        <button className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800 transition duration-300">
          NOS VALEURS
        </button>
        <button className="bg-green-300 text-green-900 px-5 py-2 rounded-full font-semibold shadow hover:bg-green-400 transition duration-300">
          NOTRE ÉQUIPE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {valeurs.map((valeur, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="w-40 h-40 rounded-full border-4 border-green-500 overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={valeur.image}
                alt={valeur.titre}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800 px-4">{valeur.titre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
