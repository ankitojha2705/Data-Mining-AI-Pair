'use client'

import { useState } from 'react'
import FileUpload from './components/FileUpload'
import PlantInfo from './components/PlantInfo'

export default function Home() {
  const [plantData, setPlantData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async (file) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await fetch('/api/identify', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      setPlantData(data)
    } catch (error) {
      console.error('Error identifying plant:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <FileUpload onUpload={handleUpload} />
      {loading && <p className="text-center text-green-600">Identifying plant...</p>}
      <PlantInfo plantData={plantData} />

      <section id="about" className="mt-12 pt-16">
        <h2 className="text-2xl font-bold mb-4 text-green-600">About Plant Identifier</h2>
        <div className="bg-green-100 rounded-lg shadow-md p-6 text-green-600">
          <p className="mb-4">
            Plant Identifier is a cutting-edge application that uses advanced image recognition 
            technology to help you identify plants quickly and accurately.
          </p>
          <p>
            Our mission is to connect people with nature by providing easy access to botanical 
            information. Whether you're a gardening enthusiast, a nature lover, or just curious 
            about the plants around you, our app is here to help.
          </p>
        </div>
      </section>

      <section id="contact" className="mt-12 pt-16">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Contact Us</h2>
        <div className="bg-green-100 rounded-lg shadow-md p-6 text-green-600">
          <p className="mb-4">
            We'd love to hear from you! If you have any questions, suggestions, or feedback, 
            please don't hesitate to reach out.
          </p>
          <p>
            Email: contact@plantidentifier.com<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </section>
    </div>
  )
}