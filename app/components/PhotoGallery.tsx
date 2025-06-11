export const PhotoGallery = () => {
 

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">
          Nos Activités en Images
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <div className="">
            <img
              src="ImageASSADE1.png"
              alt="Activité 1"
              className="w-full h-72 object-cover"
            />
          </div>
           <div className="">
            <img
              src="ImageASSADE2.png"
              alt="Activité 2"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE3.png"
              alt="Activité 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE4.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE5.png"
              alt="Activité 5"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
           <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE6.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE7.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE8.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE9.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE10.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 border-green-500 rounded-xl overflow-hidden">
            <img
              src="ImageASSADE11.png"
              alt="Activité 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
