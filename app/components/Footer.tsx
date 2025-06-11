export const Footer = () => {
    return(
        <footer className="bg-green-100 text-gray-800">
            <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8
            items-start">
                <div>
                    <img src="/Logo_ASSADE.jpg" alt="Logo Assade" className="w-24"/>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Siège social</h3>
                    <p>Mendong, Yaoundé</p>
                    <p>Guider, Maroua</p>
                    <p>+237 698228215</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Réseaux Sociaux</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="text-blue-600 hover:underline">Facebook</a></li>
                        <li><a href="#" className="text-blue-400 hover:underline">Instagram</a></li>
                        <li><a href="#" className="text-pink-600 hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Questions</h3>
                    <p>
                        Pour vos questions ou <br />
                        félicitations, veuillez appeler <br />
                        +237 653746919
                    </p>
                </div>
            </div>

            <div className="bg-green-600 text-white text-center py-4 font-bold">
                COPYRIGHT ASSADE 2025
            </div>
        </footer>
    )
}