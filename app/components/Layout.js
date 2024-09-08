export default function Layout({ children }) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Plant Identifier</h1>
        {children}
      </div>
    )
  }