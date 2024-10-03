import React from 'react'

export default function about() {
  return (
    <div>
      <section className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-600 text-lg">
        Welcome to <span className="font-semibold">TextUtils</span>, your ultimate tool for text manipulation and processing.
        Our mission is to simplify text formatting, analysis, and transformation, all in one place. Whether you're looking
        to count words, change case, or manipulate text data, we've got you covered.
      </p>
    </div>

    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-indigo-500" fill="none" strokeLinecap="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8zm0 0V5m0 14v-3"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Text Analysis</h3>
          <p className="text-gray-600">
            Count words, characters, and analyze your text effortlessly.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-indigo-500" fill="none" strokeLinecap="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="/http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Text Conversion</h3>
          <p className="text-gray-600">
            Easily convert text to uppercase, lowercase, or capitalize your text.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-indigo-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="/http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
          <p className="text-gray-600">
            Streamline your workflow with fast, easy-to-use text utilities.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

