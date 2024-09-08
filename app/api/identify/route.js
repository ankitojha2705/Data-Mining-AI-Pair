import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    console.log("API route called");
    const formData = await request.formData();
    const imageFile = formData.get('image');

    if (!imageFile) {
      console.log("No image file received");
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    console.log("Image file received:", imageFile.name);

    // Convert the file to a byte array
    const imageBytes = await imageFile.arrayBuffer();

    console.log("Image converted to array buffer");

  //   {
  //     "error": "Failed to identify plant",
  //     "details": "[GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent: [404 Not Found] Gemini 1.0 Pro Vision has been deprecated on July 12, 2024. Consider switching to different model, for example gemini-1.5-flash."
  // }
    // const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

    // generation_config = {
    //   "temperature": 0.1,
    //   "top_p": 1,
    //   "top_k": 1,
    //   "max_output_tokens": 2048,
    // }
    
    const model = genAI.getGenerativeModel({ model:"gemini-1.5-pro-latest"})

    const prompt = "Identify this plant and provide its name, scientific name, family, habitat, uses, and a brief description.";

    console.log("Sending request to Gemini API");
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: imageFile.type,
          data: Buffer.from(imageBytes).toString('base64')
        }
      }
    ]);

    console.log("Received response from Gemini API");
    const response = await result.response;
    const text = response.text();

    console.log("Gemini API response:", text);

    // Parse the text response into structured data
    const plantData = {
      name: extractInfo(text, 'Name:'),
      scientificName: extractInfo(text, 'Scientific Name:'),
      family: extractInfo(text, 'Family:'),
      habitat: extractInfo(text, 'Habitat:'),
      uses: extractInfo(text, 'Uses:'),
      description: extractInfo(text, 'Description:'),
    };

    console.log("Parsed plant data:", plantData);

    return NextResponse.json(plantData);

  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Failed to identify plant', details: error.message }, { status: 500 });
  }
}

function extractInfo(text, label) {
  const regex = new RegExp(`${label}\\s*(.+?)(?=\\n|$)`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : 'Not available';
}