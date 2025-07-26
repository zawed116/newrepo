import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateContext'

function Header() {
  const [{ basket }] = useStateValue()
  const [showSignIn, setShowSignIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault()
    // Frontend-only validation
    if (email && password) {
      alert(`Welcome! (Frontend-only demo)\nEmail: ${email}`)
      setShowSignIn(false)
    }
  }

  return (
    <header className="bg-amazon_blue text-white sticky top-0 z-50">
      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
              <button 
                onClick={() => setShowSignIn(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amazon_yellow hover:bg-amazon_yellow-dark py-2 rounded text-black font-medium"
              >
                Continue
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="flex items-center p-1 flex-grow py-2">
        <Link to="/">
          <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon Logo"
            className="h-10 mx-4 mt-2"
          />
        </Link>
        
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            placeholder="Search Amazon"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black"
          />
          <div className="h-10 p-4 bg-amazon_yellow-light flex items-center justify-center rounded-r-md">
            <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link" onClick={() => setShowSignIn(true)}>
            <p>Hello Guest</p>
            <p className="font-extrabold md:text-sm">Sign In</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <Link to="/checkout" className="link flex items-center">
            <div className="relative">
              <svg className="h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {basket?.length}
              </span>
            </div>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header