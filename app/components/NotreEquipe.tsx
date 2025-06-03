export const NotreEquipe = () => {
    return (
        <section
            className="relative bg-cover bg-center py-20 px-4 text-white"
            style={{ backgroundImage: "url('Notre_Equipe.png')" }}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">NOTRE EQUIPE</h2>
                <div className="bg-black bg-opacity-40 border border-green-500 rounded-lg p-6 
                backdrop-blur-sm transition-all duration-500 hover:shadow-lg">
                    <p className="text-lg leading-relaxed">
                        <span className="font-semibold text-white">Notre équipe</span> est constituée
                        d'Experts en Coopération au Développement et Action Humanitaire, des Médecins,
                        des Epidémiologistes, des Infirmiers et des Relais Communautaires.
                    </p>
                </div>
                <div className="mt-6">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 
                    rounded-full shadow-md transition duration-300 ease-in-out">
                        LIRE PLUS
                    </button>
                </div>
            </div>
        </section>
    );
}