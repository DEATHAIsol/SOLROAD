import { MarketItem } from '../types'
import Image from 'next/image'

interface ItemCardProps {
  item: MarketItem
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
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
          <span className="text-lg font-bold text-green-500">
            {item.price} SOL
          </span>
        </div>
      </div>
    </div>
  )
} 