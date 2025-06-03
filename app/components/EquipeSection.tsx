export const EquipeSection = () => {
    return (
<section className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-12">
      Notre équipe est constituée d’<span className="font-semibold text-green-600"> Experts en Coopération au Développement</span> et Action Humanitaire,
      des Médecins, des Épidémiologistes, des Infirmiers et des Relais Communautaires.
    </h2>

    {/* Première ligne : 3 cartes */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mb-10">
      {/* Carte 1 */}
      <div className="w-full max-w-xs border rounded-md overflow-hidden shadow-sm">
        <div className="h-64 w-full overflow-hidden">
          <img
            src="christine-yolande.edou.png"
            alt="Christine Yolande Edou"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-100 text-center py-6 space-y-1">
          <p className="font-semibold text-gray-800">Christine Yolande Edou</p>
          <p className="text-[#00cc44] font-bold">Présidente</p>
        </div>
      </div>

      {/* Carte 2 */}
      <div className="w-full max-w-xs border rounded-md overflow-hidden shadow-sm">
        <div className="h-64 w-full overflow-hidden">
          <img
            src="christian.bitang.png"
            alt="Christian Bitang"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-100 text-center py-6 space-y-1">
          <p className="font-semibold text-gray-800">Christian Bitang</p>
          <p className="text-[#00cc44] font-bold">Vice Présidente N°1</p>
        </div>
      </div>

      {/* Carte 3 */}
      <div className="w-full max-w-xs border rounded-md overflow-hidden shadow-sm">
        <div className="h-64 w-full overflow-hidden">
          <img
            src="patrick.nkolo.png"
            alt="Père Patrick Nkolo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-100 text-center py-6 space-y-1">
          <p className="font-semibold text-gray-800">Père Patrick Nkolo</p>
          <p className="text-[#00cc44] font-bold">Secrétaire Général</p>
        </div>
      </div>
    </div>

    {/* Deuxième ligne : 2 cartes centrées */}
    <div className="flex flex-wrap justify-center gap-10">
      {/* Carte 4 */}
      <div className="w-full max-w-xs border rounded-md overflow-hidden shadow-sm">
        <div className="h-64 w-full overflow-hidden">
          <img
            src="ngono-rose.pelagie.png"
            alt="Ngono Rose Pelagie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-100 text-center py-6 space-y-1">
          <p className="font-semibold text-gray-800">Ngono Rose Pelagie</p>
          <p className="text-[#00cc44] font-bold">Trésorière</p>
        </div>
      </div>

      {/* Carte 5 */}
      <div className="w-full max-w-xs border rounded-md overflow-hidden shadow-sm">
        <div className="h-64 w-full overflow-hidden">
          <img
            src="paul-edou.essono.png"
            alt="Dr Paul Edou Essono"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-green-100 text-center py-6 space-y-1">
          <p className="font-semibold text-gray-800">Dr Paul Edou Essono</p>
          <p className="text-[#00cc44] font-bold">Conseiller</p>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}