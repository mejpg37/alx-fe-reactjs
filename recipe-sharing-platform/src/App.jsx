function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-2xl p-8 mb-8 text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            í¾‰ SUCCESS! Tailwind CSS is Working!
          </h1>
          <p className="text-gray-700 text-lg">
            If you see colors, gradients, and styled elements below, Tailwind CSS is properly configured.
          </p>
        </header>

        {/* Test Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">í½•</div>
            <h3 className="text-xl font-bold">Pizza Recipe</h3>
            <p className="mt-2">Delicious homemade pizza</p>
          </div>
          
          <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">íµ—</div>
            <h3 className="text-xl font-bold">Fresh Salad</h3>
            <p className="mt-2">Healthy and tasty salad</p>
          </div>
          
          <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">í½°</div>
            <h3 className="text-xl font-bold">Chocolate Cake</h3>
            <p className="mt-2">Decadent dessert</p>
          </div>
        </div>

        {/* Buttons Test */}
        <div className="bg-white rounded-xl p-8 shadow-2xl mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Button Styles Test</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
              Primary Button
            </button>
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-200">
              Rounded Button
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200">
              Gradient Button
            </button>
          </div>
        </div>

        {/* Diagnostic Info */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">âœ… Configuration Successful!</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white">âœ“</span>
              <span>tailwind.config.js created</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white">âœ“</span>
              <span>postcss.config.js created</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white">âœ“</span>
              <span>src/index.css created with Tailwind directives</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white">âœ“</span>
              <span>Tailwind CSS is installed in package.json</span>
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center text-white">âœ“</span>
              <span>CSS imported in main.jsx</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
