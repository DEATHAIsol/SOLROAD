import { MarketItem } from '../types'
import Image from 'next/image'

interface ItemCardProps {
  item: MarketItem
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
      <div className="aspect-square relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">
            {item.price} SOL
          </span>
        </div>
      </div>
    </div>
  )
} 