import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ItemCard from './components/ItemCard'
import { MarketItem } from './types'

// Sample data - in a real app this would come from an API
const sampleItems: MarketItem[] = [
  {
    id: '1',
    title: 'Happy Cat',
    image: '/sample/cat1.jpg',
    price: 50,
    signature: 'Plfkl',
    category: 'cats'
  },
  {
    id: '2',
    title: 'Screaming Cat',
    image: '/sample/cat2.jpg',
    price: 45,
    signature: 'Srsfdw',
    category: 'cats'
  },
  // Add more sample items as needed
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-8">
        <div className="flex gap-8">
          <Sidebar />
          
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
