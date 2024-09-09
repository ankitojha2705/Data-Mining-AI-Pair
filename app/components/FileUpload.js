'use client';

import { useState } from 'react'

export default function FileUpload({ onUpload }) {
  const [dragging, setDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    onUpload(file)
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    onUpload(file)
  }

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 mt-20 text-center ${
        dragging ? 'border-green-500 bg-green-100' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p className="mb-4 text-gray-600">Drag and drop an image here, or click to select a file</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Select Image
      </label>
    </div>
  )
}