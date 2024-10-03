import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        {/* Title Section */}
        <div className="flex-shrink-0">
          <h1 className="text-white text-xl font-bold">{props.title}</h1>
        </div>

        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">{props.homeText}</a>
              <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{props.aboutText}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a href="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">{props.homeText}</a>
        <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{props.aboutText}</a>
      </div>
    </div>
</nav>

  )
}

