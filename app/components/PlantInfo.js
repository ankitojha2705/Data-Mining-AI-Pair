export default function PlantInfo({ plantData }) {
    if (!plantData) return null
  
    return (
      <div className="mt-8 bg-green-100 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-800">{plantData.name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2 text-green-500">Scientific Name:</h3>
            <p className="text-green-800">{plantData.scientificName}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-green-500">Family:</h3>
            <p className="text-green-800">{plantData.family}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-green-500">Habitat:</h3>
            <p className="text-green-800">{plantData.habitat}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-green-500">Uses:</h3>
            <p className="text-green-800">{plantData.uses}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2 text-green-500">Description:</h3>
          <p className="text-green-800">{plantData.description}</p>
        </div>
      </div>
    )
  }