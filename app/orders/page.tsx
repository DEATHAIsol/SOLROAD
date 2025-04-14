"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Order {
  id: number
  buyer: string
  location: string
  items: string
  timestamp: Date
}

const initialOrders: Order[] = [
  { id: 1, buyer: "James", location: "Los Angeles", items: "100 9mm pewpew snacks", timestamp: new Date() },
  { id: 2, buyer: "LilCrypt0", location: "Berlin", items: "Level 3 shhh tube for his compact pewpew", timestamp: new Date() },
  { id: 3, buyer: "Maddie", location: "Toronto", items: "2 LSD lickysticks and a vape cart of cannawis", timestamp: new Date() },
  { id: 4, buyer: "ghost.exe", location: "", items: "premium phishing kit + email spammer bundle", timestamp: new Date() },
  { id: 5, buyer: "Tommy", location: "Miami", items: "4 zanny-bars and a fake driving license", timestamp: new Date() },
  { id: 6, buyer: "Pix3lDust", location: "Melbourne", items: "plug-and-play keylogger", timestamp: new Date() },
  { id: 7, buyer: "Kayla", location: "Chicago", items: "3 grams of MDMA moonrock and glowsticks lol", timestamp: new Date() },
  { id: 8, buyer: "Vlad", location: "Bucharest", items: "500 rounds of 7.62mm long pewpew food", timestamp: new Date() },
  { id: 9, buyer: "DriftKing88", location: "London", items: "burner phone + PGP encryption setup", timestamp: new Date() },
  { id: 10, buyer: "Sasha", location: "NYC", items: "cannawis brownie sampler box (8ct)", timestamp: new Date() },
  // Add more orders here...
]

const allPossibleOrders: Order[] = [
  { id: 1, buyer: "James", location: "Los Angeles", items: "100 9mm pewpew snacks", timestamp: new Date() },
  { id: 2, buyer: "LilCrypt0", location: "Berlin", items: "Level 3 shhh tube for his compact pewpew", timestamp: new Date() },
  { id: 3, buyer: "Maddie", location: "Toronto", items: "2 LSD lickysticks and a vape cart of cannawis", timestamp: new Date() },
  { id: 4, buyer: "ghost.exe", location: "", items: "premium phishing kit + email spammer bundle", timestamp: new Date() },
  { id: 5, buyer: "Tommy", location: "Miami", items: "4 zanny-bars and a fake driving license", timestamp: new Date() },
  { id: 6, buyer: "Pix3lDust", location: "Melbourne", items: "plug-and-play keylogger", timestamp: new Date() },
  { id: 7, buyer: "Kayla", location: "Chicago", items: "3 grams of MDMA moonrock and glowsticks lol", timestamp: new Date() },
  { id: 8, buyer: "Vlad", location: "Bucharest", items: "500 rounds of 7.62mm long pewpew food", timestamp: new Date() },
  { id: 9, buyer: "DriftKing88", location: "London", items: "burner phone + PGP encryption setup", timestamp: new Date() },
  { id: 10, buyer: "Sasha", location: "NYC", items: "cannawis brownie sampler box (8ct)", timestamp: new Date() },
  { id: 11, buyer: "Connor", location: "Sydney", items: "fake UK passport with scan code enabled", timestamp: new Date() },
  { id: 12, buyer: "anon420", location: "Paris", items: "1g of ketaketa + 2 sleepy pills", timestamp: new Date() },
  { id: 13, buyer: "Dani", location: "Amsterdam", items: "1 DMT vape & a dream journal", timestamp: new Date() },
  { id: 14, buyer: "Ricky", location: "Atlanta", items: "fullz identity kit + 3 fake utility bills", timestamp: new Date() },
  { id: 15, buyer: "Niko", location: "Prague", items: "switchy boi and brass knuckles combo pack", timestamp: new Date() },
  { id: 16, buyer: "TheRealPlug69", location: "Dallas", items: "dark web exit scam ebook lmao", timestamp: new Date() },
  { id: 17, buyer: "Ash", location: "Boston", items: "20 oxy-pops & a cannawis wax pen", timestamp: new Date() },
  { id: 18, buyer: "Jules", location: "Montreal", items: "3g of cranky dust and a scale", timestamp: new Date() },
  { id: 19, buyer: "Trevor", location: "Houston", items: "Rent-a-Fwiend weekend package 😂", timestamp: new Date() },
  { id: 20, buyer: "Crypt0Baby", location: "Tokyo", items: "Monero mixer service voucher", timestamp: new Date() },
  { id: 21, buyer: "Emma", location: "Seattle", items: "encrypted BlackBerry for opsec", timestamp: new Date() },
  { id: 22, buyer: "Mike", location: "Dublin", items: "bundle of bath crystuls & earplugs 💀", timestamp: new Date() },
  { id: 23, buyer: "Angel", location: "Vegas", items: "1g of mephedrone and a mask", timestamp: new Date() },
  { id: 24, buyer: "Brayden", location: "Philly", items: "50 .45cal pewpew snacks", timestamp: new Date() },
  { id: 25, buyer: "Lana", location: "Oslo", items: "5 LSD tabs and a laser show ticket", timestamp: new Date() },
  { id: 26, buyer: "GhostHands", location: "Mexico City", items: "lockpicking kit + gloves", timestamp: new Date() },
  { id: 27, buyer: "Becca", location: "Glasgow", items: "2g of shatter and a chill mixtape link", timestamp: new Date() },
  { id: 28, buyer: "Jake", location: "LA", items: "tutorial: How 2 disappear (2025 edition)", timestamp: new Date() },
  { id: 29, buyer: "Ahmed", location: "Dubai", items: "spoofed banking login pack", timestamp: new Date() },
  { id: 30, buyer: "Chloe", location: "Cape Town", items: "burner debit card preloaded with $500", timestamp: new Date() },
  { id: 31, buyer: "NoScopeJesus", location: "Warsaw", items: "AR-pew with a stealth bag", timestamp: new Date() },
  { id: 32, buyer: "Dylan", location: "San Diego", items: "6 MDMA pills + neon shades", timestamp: new Date() },
  { id: 33, buyer: "Tom", location: "Wellington", items: "1 vial of liquid ketaketa & a droplet bottle", timestamp: new Date() },
  { id: 34, buyer: "KarmaFarm", location: "NYC", items: "grow kit for cannawis (stealth shipping)", timestamp: new Date() },
  { id: 35, buyer: "Jenny", location: "Manchester", items: "2g of mushy caps & a forest rave ticket", timestamp: new Date() },
  { id: 36, buyer: "Zane", location: "Auckland", items: "3 fake college diplomas", timestamp: new Date() },
  { id: 37, buyer: "Blip.exe", location: "Vienna", items: "malware builder & crypter pack", timestamp: new Date() },
  { id: 38, buyer: "Soph", location: "Rome", items: "silencer and red dot combo kit", timestamp: new Date() },
  { id: 39, buyer: "Hunter", location: "Boise", items: "100 fake € bills for club flexin", timestamp: new Date() },
  { id: 40, buyer: "Lex", location: "Helsinki", items: "full VPN + hosting starter pack", timestamp: new Date() },
  { id: 41, buyer: "Tina", location: "Madrid", items: "3g of cannawis wax & a stash can", timestamp: new Date() },
  { id: 42, buyer: "CryptoSanta", location: "Norway", items: "RAT + keylogger deluxe deal", timestamp: new Date() },
  { id: 43, buyer: "Zac", location: "Detroit", items: "10g of coke dust & a fake driver's license", timestamp: new Date() },
  { id: 44, buyer: "Erik", location: "Stockholm", items: "How to Scam a Scammer vol. 2 PDF", timestamp: new Date() },
  { id: 45, buyer: "Milly", location: "Dublin", items: "5 adderall bois and a cold brew lol", timestamp: new Date() },
  { id: 46, buyer: "Zorro420", location: "Barcelona", items: ".22 snub pewpew + ammo pack", timestamp: new Date() },
  { id: 47, buyer: "Ray", location: "Leeds", items: "tazer disguised as a flashlight", timestamp: new Date() },
  { id: 48, buyer: "Ella", location: "Vancouver", items: "2g of DMT & a blowtorch", timestamp: new Date() },
  { id: 49, buyer: "Nash", location: "Prague", items: "fake Airbnb listing scam kit", timestamp: new Date() },
  { id: 50, buyer: "Lo-fiLarry", location: "Seoul", items: "burner SIM & encrypted chat app", timestamp: new Date() }
]

export default function OrdersPage() {
  const [visibleOrders, setVisibleOrders] = useState<Order[]>(allPossibleOrders.slice(0, 8))
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleOrders(prev => {
        const newOrder = allPossibleOrders[Math.floor(Math.random() * allPossibleOrders.length)]
        newOrder.timestamp = new Date()
        return [newOrder, ...prev.slice(0, -1)]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="px-6 py-4 border-b border-gray-700">
            <h1 className="text-xl font-semibold text-purple-400">Live Orders</h1>
          </div>
          
          <div className="divide-y divide-gray-700">
            <AnimatePresence initial={false}>
              {visibleOrders.map((order, index) => (
                <motion.div
                  key={order.id + order.timestamp.getTime()}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 hover:bg-gray-750"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-400 font-medium">{order.buyer}</span>
                        {order.location && (
                          <>
                            <span className="text-gray-500">from</span>
                            <span className="text-gray-300">{order.location}</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-300 mt-1">
                        just purchased {order.items}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(order.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
} 