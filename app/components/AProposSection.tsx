export const AproposSection = () => {
  return (
    <section id="apropos" className="relative px-6 py-12 bg-white  w-full mx-auto">
      {/* Texte de présentation */}
      <div className="bg-gray-50 rounded-xl shadow-md p-8 space-y-6 text-gray-800 leading-relaxed text-justify border border-gray-200">
        <p>
          <span className="font-bold text-lg text-green-700">ASSADE</span> est une association humanitaire à but non lucratif, créée en février 2018 par un groupe de jeunes camerounais qui avaient pour ambition principale de promouvoir la santé et réduire les inégalités sociales liées à la santé dans des zones défavorisées. ASSADE est ouverte à toute personne sans aucune distinction, désireuse de participer et de soutenir le Cameroun dans son auto-développement.
        </p>

        <div>
          <h3 className="text-lg font-bold text-green-700 mb-1">Notre vision</h3>
          <p>
            Nous contribuons à la construction des communautés plus fortes et plus résilientes capables de répondre durablement aux nouvelles menaces sanitaires.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-green-700 mb-1">Notre objectif principal</h3>
          <p>
            est d’assurer un meilleur accès aux soins de santé et de promouvoir la prise de conscience par les communautés locales de leurs droits et responsabilités.
          </p>
        </div>
      </div>
    </section>
  );
}
