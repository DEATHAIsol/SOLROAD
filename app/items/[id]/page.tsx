'use client'

import { notFound } from 'next/navigation'
import { MarketItem } from '../../types'
import Header from '../../components/Header'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

// This would come from an API in a real app
const getItem = (id: string): MarketItem | undefined => {
  const sampleItems: MarketItem[] = [
    {
      id: '1',
      title: 'Item 1',
      image: '/sample/cat1.jpg',
      price: 50,
      signature: 'Sig1',
      category: 'items',
      description: 'This is a detailed description of Item 1. It would contain all the important details about the product that a buyer would want to know.'
    },
    // ... other items would be here
  ]
  return sampleItems.find(item => item.id === id)
}

export default function ItemPage({ params }: { params: { id: string } }) {
  const item = getItem(params.id)
  const [quantity, setQuantity] = useState(1)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  if (!item) {
    notFound()
  }

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (!isNaN(value) && value >= 1) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    setShowVideo(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <>
      {showVideo && (
        <div className="fixed inset-0 z-[9999] bg-black w-screen h-screen" style={{ position: 'fixed', top: 0, left: 0 }}>
          <video
            ref={videoRef}
            className="w-screen h-screen object-cover"
            autoPlay
            playsInline
            muted={false}
            onEnded={handleVideoEnd}
            controls={false}
          >
            <source src="/cart-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      <div className={`min-h-screen ${showVideo ? 'hidden' : ''}`}>
        <Header />
        
        <main className="py-8 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12">
            {/* Left column - Image */}
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right column - Product details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
              <p className="text-2xl font-semibold text-purple-600 mb-6">{item.price} SOL</p>
              
              {/* Quantity selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-2">
                  <button 
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 h-10 rounded-lg border border-gray-300 text-center"
                  />
                  <button 
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <button 
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors mb-8"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              {/* Product signature */}
              <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-700 mb-2">Signature</h2>
                <p className="font-mono text-sm">{item.signature}</p>
              </div>

              {/* Product description */}
              <div>
                <h2 className="text-sm font-medium text-gray-700 mb-2">Description</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
} 