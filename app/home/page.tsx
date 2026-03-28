import Header from "@/components/navegation/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* BUSCA */}
        <input
          placeholder="Buscar serviços..."
          className="w-full p-4 rounded-lg bg-white border border-gray-300 text-gray-900 mb-10 shadow-sm"
        />

        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Destaques
        </h2>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src="/young-couple-in-shopping.webp"
                className="w-full h-48 object-cover rounded-t-xl"
                alt="serviço"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900">
                  Assistência Técnica
                </h3>
                <p className="text-sm text-gray-500">
                  ⭐ 4.{item}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}