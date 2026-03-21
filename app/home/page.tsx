export default function Home() {
  return (
    <div className="p-4">
      <input
        placeholder="Buscar serviços..."
        className="w-full border p-2 rounded"
      />

      <h2 className="mt-4 font-bold">Destaques</h2>

      <div className="grid grid-cols-2 gap-3 mt-2">
        <div className="bg-gray-200 p-3 rounded">
          Assistência Geladeira ⭐ 4.6
        </div>

        <div className="bg-gray-200 p-3 rounded">
          Assistência Microondas ⭐ 4.5
        </div>
      </div>
    </div>
  );
}