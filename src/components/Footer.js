import React from 'react'

export default function Footer() {
  return (
    <div>
     <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; 2024 TextUtils. All rights reserved.
                </p>
                <p className="text-sm mt-2">
                    Made with <span className="text-red-500">❤</span> by Prashant Bhandari
                </p>
                <div className="mt-4">
                    <a href="https://www.linkedin.com" className="text-blue-400 mx-2 hover:underline">LinkedIn</a>
                    <a href="https://www.github.com" className="text-gray-400 mx-2 hover:underline">GitHub</a>
                    <a href="https://twitter.com" className="text-blue-300 mx-2 hover:underline">Twitter</a>
                </div>
            </div>
        </footer>

    </div>
  )
}
