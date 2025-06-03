'use client';

import React, { useState } from 'react';
import Image from 'next/image';


const paymentMethods = [
  { id: 'mtn', label: 'MTN Mobile Money', image: "/mtn.png" },
  { id: 'orange', label: 'Orange Money', image: "/orange.png" },
  { id: 'mastercard', label: 'Mastercard', image: "/mastercard.png" },
  { id: 'visa', label: 'Visa', image: "/visa.png" },
];

const DonateSection = () => {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !phone || !selectedMethod) {
      alert('Veuillez remplir tous les champs et sélectionner un moyen de paiement.');
      return;
    }

    // Traiter la soumission ici (API, redirection, etc.)
    alert(`Montant: ${amount} FCFA\nTéléphone: ${phone}\nMoyen de paiement: ${selectedMethod}`);
  };

  return (
    <section className="bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto border rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Soutenez l’association ASSADE</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="MONTANT"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-green-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="tel"
            placeholder="TELEPHONE"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-2 border-green-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <div className="flex justify-between items-center gap-4 mt-4">
            {paymentMethods.map((method) => (
              <label key={method.id} className="flex flex-col items-center cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={() => setSelectedMethod(method.id)}
                  className="peer hidden"
                />
                <div className="w-6 h-6 mb-2 rounded-full border-2 border-green-500 peer-checked:bg-green-500" />
                <Image src={method.image} alt={method.label} width={50} height={50} />
              </label>
            ))}
          </div>

          <p className="text-sm text-gray-500 text-center mt-2">Sélectionnez un moyen de paiement</p>

          <button
            type="submit"
            className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition"
          >
            Valider
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonateSection;
