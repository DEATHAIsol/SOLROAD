"use client"

import { useState } from 'react'

interface Message {
  id: number
  content: string
  author: string
  timestamp: string
  replies: number
  views: number
}

const messages: Message[] = [
  {
    id: 1,
    content: "yo what's the chillest dwug that won't make me see god but still vibes w a juice wrld playlist?",
    author: "VibeMaster420",
    timestamp: "Today at 03:40:15 PM",
    replies: 23,
    views: 156
  },
  {
    id: 2,
    content: "who tryna trade 2 zanny-bars for a working netflix login 😂",
    author: "StreamingDreams",
    timestamp: "Today at 03:37:42 PM",
    replies: 8,
    views: 89
  },
  {
    id: 3,
    content: "anyone else ever take edibles then forget they exist for 4 hours and wake up in a time loop?",
    author: "TimeLoopTraveler",
    timestamp: "Today at 02:05:49 PM",
    replies: 42,
    views: 301
  },
  {
    id: 4,
    content: "lookin for a pewpew that fits in a fanny pack but still makes ppl rethink life",
    author: "FannyPackTactical",
    timestamp: "Today at 01:33:27 PM",
    replies: 15,
    views: 167
  },
  {
    id: 5,
    content: "how quiet is a shhh tube fr? like could i clap a can of tuna without the neighbors knowing?",
    author: "QuietNeighbor",
    timestamp: "Today at 01:15:10 PM",
    replies: 19,
    views: 203
  },
  {
    id: 6,
    content: "just bought a passport off some dude named 'TrippyDox420' — pray for me boys 💀",
    author: "PassportPrayer",
    timestamp: "Today at 12:45:33 PM",
    replies: 31,
    views: 289
  },
  {
    id: 7,
    content: "bro i used a keylogger on myself by accident, am i officially hacked now?",
    author: "SelfHackedBro",
    timestamp: "Today at 11:20:15 AM",
    replies: 27,
    views: 245
  },
  {
    id: 8,
    content: "what's the best dwug for fighting God but also apologizing after?",
    author: "DivineBoxer",
    timestamp: "Today at 10:55:42 AM",
    replies: 56,
    views: 478
  },
  {
    id: 9,
    content: "anyone ever try to mix lean with protein powder? asking for a gym bro",
    author: "SwoleSipper",
    timestamp: "Today at 10:30:18 AM",
    replies: 34,
    views: 312
  },
  {
    id: 10,
    content: "need help laundering like $32.17, not tryna go big yet just a little rinse test run",
    author: "SmallTimeWasher",
    timestamp: "Today at 09:15:44 AM",
    replies: 45,
    views: 389
  }
]

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h1 className="text-xl font-semibold text-purple-400">Messages</h1>
          </div>
          
          <div className="divide-y divide-gray-700">
            {messages.map((message) => (
              <div key={message.id} className="p-6 hover:bg-gray-750">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-200 mb-2">{message.content}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-purple-400">{message.author}</span>
                      <span className="text-gray-500">{message.timestamp}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1 text-right">
                    <div>Replies: {message.replies}</div>
                    <div>Views: {message.views}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 