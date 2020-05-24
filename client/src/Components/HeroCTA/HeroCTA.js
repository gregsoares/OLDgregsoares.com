import React from 'react'

export const HeroCTA = () => {
  return (
    <div data-testid="HeroCTAContainer">
      <div className="py-20" style={{"background": "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}
      >
        <div className="container px-6 mx-auto">
          <h2 className="mb-2 text-4xl font-bold text-white">
            Smart Health Monitoring Wristwatch!
    </h2>
          <h3 className="mb-8 text-2xl text-gray-200">
            Monitor your health vitals smartly anywhere you go.
    </h3>

          <button className="px-8 py-4 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg">
            Pre Order
    </button>
        </div>
      </div>
    </div>
  )
}
