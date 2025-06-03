// components/BannerSection.tsx
import Image from "next/image";

export const BannerSection = () => {
  return (
    <section className="relative w-full">
      <nav className="flex justify-between items-center p-4 bg-green-700 bg-opacity-80">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:text-yellow-300">
              <img src="Assade.png" alt="Logo Assade" className="w-24"/>
            </a>
          </div>
          <ul className="hidden md:flex gap-6 text-white font-semibold space-x-4">
            <li><a href="/about" className="hover:text-yellow-300">A PROPOS</a></li>
            <li><a href="/activities" className="hover:text-yellow-300">ACTIVITES</a></li>
            <li><a href="/projects" className="hover:text-yellow-300">PROJETS</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">CONTACTS</a></li>
            <li>
              <a href="/donate" className="bg-green-500 hover:bg-green-600 transition px-4
              py-2 rounded text-white font-bold">
                FAIRE UN DON
              </a>
            </li>
          </ul>
        </nav>
  <div className="relative w-full max-h-3xl mx-auto">
    <Image
      src="/Image51.png"
      alt="Bannière ASSADE"
      width={50}
      height={50}
      layout="responsive"
      className="rounded-lg shadow-lg object-cover"
      priority
    />
  </div>

  {/* Menu de navigation superposé */}
  
</section>

  );
};
