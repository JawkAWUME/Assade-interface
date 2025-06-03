export const NosPartenaires = () => {
    return (
        <section className="py-16 px-6 bg-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-10">
                NOS PARTENAIRES
            </h2>
            <div className="flex flex-wrap justify-center gap-10 items-center">
                <img src="msp.png" alt="Ministère de la Santé Publique" 
                     className="h-32 w-auto object-contain"/>
                <img src="FSM.png" alt="Fondation Samuel Menye" 
                     className="h-32 w-auto object-contain"/>

                <div className="h-32 w-32 rounded-full bg-green-200 border border-black"></div>
            </div>
        </section>
    );
}