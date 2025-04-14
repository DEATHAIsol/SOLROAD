"use client"

import { useState } from 'react'
import { Category, SubCategory } from '../types'
import { ChevronDown, ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

const categories: Category[] = [
  {
    id: '1',
    name: 'Appawel & Reaw Wewwdies',
    count: 1337,
    slug: 'apparel',
    subcategories: [
      { name: 'Fake branded clothes (Gucci, Supreme, Yeezy)', slug: 'fake-clothes' },
      { name: 'Stolen or knock-off jewelry', slug: 'jewelry' },
      { name: 'Tactical vests & armor', slug: 'tactical' },
      { name: 'Encrypted/PGP phones', slug: 'encrypted-phones' },
      { name: 'Hidden compartment backpacks & gear', slug: 'hidden-gear' }
    ]
  },
  {
    id: '2',
    name: 'Digitaw Goodz',
    count: 5237,
    slug: 'digital',
    subcategories: [
      { name: 'Stolen account logins', slug: 'stolen-accounts' },
      { name: 'Premium subscriptions', slug: 'premium-subs' },
      { name: 'Leaked databases & dumps', slug: 'databases' },
      { name: 'Darknet vendor guides', slug: 'vendor-guides' },
      { name: 'How-To eBooks', slug: 'ebooks' }
    ]
  },
  {
    id: '3',
    name: 'Dwug Pawaphernawia',
    count: 823,
    slug: 'paraphernalia',
    subcategories: [
      { name: 'Baggies & containers', slug: 'containers' },
      { name: 'Digital scales', slug: 'scales' },
      { name: 'Vaporizers & dab pens', slug: 'vaporizers' },
      { name: 'Syringies', slug: 'syringes' },
      { name: 'Grinders & rollers', slug: 'grinders' },
      { name: 'Sneaky stash cans', slug: 'stash-cans' }
    ]
  },
  {
    id: '4',
    name: 'Dwugs',
    count: 10512,
    slug: 'drugs',
    subcategories: [
      { name: 'Cannawis', slug: 'cannabis' },
      { name: 'Dissowciatives', slug: 'dissociatives' },
      { name: 'Ecstawsee', slug: 'ecstasy' },
      { name: 'Opioyds', slug: 'opioids' },
      { name: 'Psychedeeleeks', slug: 'psychedelics' },
      { name: 'Pwescripshun', slug: 'prescription' },
      { name: 'Stimuwants', slug: 'stimulants' },
      { name: 'Precuwsows', slug: 'precursors' }
    ]
  },
  {
    id: '5',
    name: 'Fwawdies & Fakies',
    count: 3421,
    slug: 'fraud',
    subcategories: [
      { name: 'Fake IDs', slug: 'fake-ids' },
      { name: 'Fakey diplomas & university docs', slug: 'fake-docs' },
      { name: 'Counterfeit currency', slug: 'counterfeit' },
      { name: 'Utility bills & bank statements', slug: 'utility-bills' },
      { name: 'Fullz', slug: 'fullz' }
    ]
  },
  {
    id: '6',
    name: 'Hacky Hack Goodz',
    count: 2891,
    slug: 'hacking',
    subcategories: [
      { name: 'Keyloggers', slug: 'keyloggers' },
      { name: 'Remote Access Trojans (RATs)', slug: 'rats' },
      { name: 'Malware packs', slug: 'malware' },
      { name: 'SIM-swap kits', slug: 'sim-swap' },
      { name: 'DDoS-for-hire', slug: 'ddos' },
      { name: 'Ransomware-as-a-service', slug: 'ransomware' },
      { name: 'Custom viruses', slug: 'viruses' }
    ]
  },
  {
    id: '7',
    name: 'Hoomans & Naughties',
    count: 1738,
    slug: 'humans',
    subcategories: [
      { name: 'Rent-a-fwiend escorts', slug: 'escorts' },
      { name: 'Mail-order snuggle buddies', slug: 'mail-order' },
      { name: 'Trafficky listings', slug: 'trafficking' },
      { name: 'Dark cam shows', slug: 'cam-shows' },
      { name: 'Exploitive worker posts', slug: 'workers' }
    ]
  },
  {
    id: '8',
    name: 'Moneystuff & Crypty Coins',
    count: 4269,
    slug: 'money',
    subcategories: [
      { name: 'BTC cleanin', slug: 'btc-cleaning' },
      { name: 'Convert dirty to clean services', slug: 'conversion' },
      { name: 'Wallet cracking', slug: 'wallet-crack' },
      { name: 'Fake exchanges', slug: 'fake-exchanges' },
      { name: 'Private coin sale middlemen', slug: 'middlemen' },
      { name: 'Pump & dump invite groups', slug: 'pump-dump' }
    ]
  },
  {
    id: '9',
    name: 'Pewpews & Boombooms',
    count: 1911,
    slug: 'weapons',
    subcategories: [
      { name: 'Hand pewpews', slug: 'handguns' },
      { name: 'Long pewpews', slug: 'rifles' },
      { name: 'Ammo (pewfood)', slug: 'ammo' },
      { name: 'Silencers', slug: 'silencers' },
      { name: 'Boom kits', slug: 'explosives' },
      { name: 'Knives, stabby bois', slug: 'knives' },
      { name: 'Tazers, zappy sticks', slug: 'tasers' }
    ]
  },
  {
    id: '10',
    name: 'Randos & Oddities',
    count: 2077,
    slug: 'misc',
    subcategories: [
      { name: 'Fireworks', slug: 'fireworks' },
      { name: 'Lockpicking kits', slug: 'lockpicking' },
      { name: 'Magic spells & curses', slug: 'magic' },
      { name: 'Survival gear', slug: 'survival' },
      { name: 'VPNs, bulletproof hosting', slug: 'vpn' },
      { name: 'Home grow kits', slug: 'grow-kits' },
      { name: 'Rare books & occult manuals', slug: 'books' }
    ]
  }
]

const otherCategories = [
  { name: 'Twitter Accounts', count: 5237, slug: 'twitter' },
  { name: 'AI Deepfakes', count: 367, slug: 'deepfakes' },
  { name: 'NFTs', count: 10512, slug: 'nfts' },
  { name: 'MEV Bots', count: 523, slug: 'mev-bots' },
]

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <aside className="w-72 pr-8 overflow-y-auto max-h-[calc(100vh-4rem)]">
      <Link 
        href="/"
        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 py-2 mb-4 text-lg font-medium"
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="space-y-1">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between text-purple-600 hover:text-purple-700 py-2"
            >
              <div className="flex items-center gap-2">
                {expandedCategories.includes(category.id) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                <span>{category.name}</span>
              </div>
              <span className="text-gray-500">{category.count}</span>
            </button>
            
            {expandedCategories.includes(category.id) && (
              <div className="ml-6 space-y-1">
                {category.subcategories.map((sub) => (
                  <a
                    key={sub.slug}
                    href={`/category/${category.slug}/${sub.slug}`}
                    className="block text-sm text-gray-400 hover:text-purple-300 py-1"
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  )
} 