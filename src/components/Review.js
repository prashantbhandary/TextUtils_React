import React from 'react'

export default function Review() {
  return (
    <div>
<section className="bg-gray-50 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Review 1 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src="https://via.placeholder.com/100" alt="John Doe" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500"/>
        <p className="text-gray-700 mb-4 italic">"TextUtils has transformed my writing process! The tools are intuitive and super effective."</p>
        <h4 className="text-xl font-semibold">- John Doe</h4>
      </div>
      {/* <!-- Review 2 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src="https://via.placeholder.com/100" alt="Jane Smith" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-green-500"/>
        <p className="text-gray-700 mb-4 italic">"I can't believe how easy it is to edit text with TextUtils. Highly recommend it to everyone!"</p>
        <h4 className="text-xl font-semibold">- Jane Smith</h4>
      </div>
      {/* <!-- Review 3 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img src="https://via.placeholder.com/100" alt="Alex Johnson" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-red-500"/>
        <p className="text-gray-700 mb-4 italic">"The user-friendly interface and useful features make it my go-to tool for writing."</p>
        <h4 className="text-xl font-semibold">- Alex Johnson</h4>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
