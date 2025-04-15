import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ItemCard from './components/ItemCard'
import { MarketItem } from './types'
import Link from 'next/link'

// Sample data - in a real app this would come from an API
const sampleItems: MarketItem[] = [
  {
    id: '1',
    title: 'Item 1',
    image: '/sample/cat1.jpg',
    price: 50,
    signature: 'Sig1',
    category: 'items',
    description: 'This is Item 1. A high quality product with amazing features.'
  },
  {
    id: '2',
    title: 'Item 2',
    image: '/sample/cat2.jpg',
    price: 55,
    signature: 'Sig2',
    category: 'items',
    description: 'Item 2 is a fantastic choice for those seeking excellence.'
  },
  {
    id: '3',
    title: 'Item 3',
    image: '/sample/cat1.jpg',
    price: 60,
    signature: 'Sig3',
    category: 'items',
    description: 'Discover the unique qualities of Item 3.'
  },
  {
    id: '4',
    title: 'Item 4',
    image: '/sample/cat2.jpg',
    price: 65,
    signature: 'Sig4',
    category: 'items',
    description: 'Item 4 stands out with its exceptional characteristics.'
  },
  {
    id: '5',
    title: 'Item 5',
    image: '/sample/cat1.jpg',
    price: 70,
    signature: 'Sig5',
    category: 'items',
    description: 'Experience the premium quality of Item 5.'
  },
  {
    id: '6',
    title: 'Item 6',
    image: '/sample/cat2.jpg',
    price: 75,
    signature: 'Sig6',
    category: 'items',
    description: 'Item 6 offers unmatched value and performance.'
  },
  {
    id: '7',
    title: 'Item 7',
    image: '/sample/cat1.jpg',
    price: 80,
    signature: 'Sig7',
    category: 'items',
    description: 'Discover why Item 7 is a customer favorite.'
  },
  {
    id: '8',
    title: 'Item 8',
    image: '/sample/cat2.jpg',
    price: 85,
    signature: 'Sig8',
    category: 'items',
    description: 'Item 8 delivers exceptional results every time.'
  },
  {
    id: '9',
    title: 'Item 9',
    image: '/sample/cat1.jpg',
    price: 90,
    signature: 'Sig9',
    category: 'items',
    description: 'Experience the innovation of Item 9.'
  },
  {
    id: '10',
    title: 'Item 10',
    image: '/sample/cat2.jpg',
    price: 95,
    signature: 'Sig10',
    category: 'items',
    description: 'Item 10 sets new standards in quality and design.'
  },
  {
    id: '11',
    title: 'Item 11',
    image: '/sample/cat1.jpg',
    price: 100,
    signature: 'Sig11',
    category: 'items',
    description: 'Elevate your experience with Item 11.'
  },
  {
    id: '12',
    title: 'Item 12',
    image: '/sample/cat2.jpg',
    price: 105,
    signature: 'Sig12',
    category: 'items',
    description: 'Item 12 represents the pinnacle of excellence.'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="flex gap-8">
          <Sidebar />
          
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-6">
              {sampleItems.map((item) => (
                <Link href={`/items/${item.id}`} key={item.id}>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <ItemCard item={item} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
