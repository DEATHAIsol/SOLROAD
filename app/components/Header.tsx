"use client"

import Link from 'next/link'
import { UserInfo } from '../types'

const defaultUserInfo: UserInfo = {
  messages: 10,
  orders: 236,
  balance: 50,
  currency: 'SOL'
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Link href="/" className="font-space-grotesk text-2xl font-bold text-purple-600 tracking-wider">
              SOL ROAD
            </Link>
            <span className="text-gray-500 text-sm italic mt-0.5">a degen marketplace</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <nav className="flex items-center space-x-4 text-sm text-gray-600">
              <Link href="/messages" className="hover:text-purple-600">
                messages {defaultUserInfo.messages}
              </Link>
              <Link href="/orders" className="hover:text-purple-600">
                orders {defaultUserInfo.orders}
              </Link>
              <span>
                account {defaultUserInfo.balance} {defaultUserInfo.currency}
              </span>
            </nav>
            
            <div className="flex items-center space-x-4 text-purple-600">
              <Link href="https://x.com/" className="hover:text-purple-700">
                TWITTER
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="https://dexscreener.com/" className="hover:text-purple-700">
                DEXSCREENER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 