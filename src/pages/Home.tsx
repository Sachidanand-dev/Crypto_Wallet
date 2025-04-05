"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  Wallet,
  
  EclipseIcon as Ethereum,
} from "lucide-react"

// Sample crypto data - in a real app, you would fetch this from an API
const cryptoData = [
  
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3521.75,
    change: -1.2,
    icon: <Ethereum className="w-8 h-8 text-purple-500" />,
    link: "https://coinmarketcap.com/currencies/ethereum/"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 142.33,
    change: 5.7,
    link: "https://coinmarketcap.com/currencies/solana/",
    icon: (
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
        S
      </div>
    ),
  },
]

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-medium">
                Secure Crypto Management
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Gateway to the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Crypto World
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Manage, trade, and grow your cryptocurrency portfolio with our secure and intuitive wallet platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/wallet"
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Go to Wallet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Portfolio Value</h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{currentTime.toLocaleTimeString()}</div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold">$12,345.67</div>
                  <div className="flex items-center text-green-500 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +3.2% today
                  </div>
                </div>
                <div className="space-y-4">
                  {cryptoData.map((crypto) => (
                    <a href={crypto.link} target="_blank" rel="noopener noreferrer" className="block" key={crypto.id}>

                    <div
                      key={crypto.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                      <div className="flex items-center space-x-3">
                        {crypto.icon}
                          <div className="font-medium">{crypto.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${crypto.price.toLocaleString()}</div>
                        <div className={`text-sm ${crypto.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                          {crypto.change >= 0 ? "+" : ""}
                          {crypto.change}%
                        </div>
                      </div>
                    </div>
                      </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CryptoVault?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform offers everything you need to safely manage and grow your cryptocurrency investments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your assets are protected with industry-leading security measures and encryption protocols.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast Trades</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Execute trades instantly with our high-performance trading engine and low latency connections.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Make informed decisions with real-time market data, charts, and personalized insights.
              </p>
            </div>
          </div>
        </section>

        {/* Market Trends Section */}
        <section className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Market Trends</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay updated with real-time cryptocurrency market data and trends.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="grid grid-cols-3 md:grid-cols-5 divide-x divide-gray-200 dark:divide-gray-700">
                <div className="col-span-3 p-6">
                  <h3 className="text-xl font-bold mb-4">Market Overview</h3>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Chart Visualization</p>
                  </div>
                </div>

                <div className="col-span-2 p-6 space-y-6">
                  <h3 className="text-xl font-bold">Top Performers</h3>

                  <div className="space-y-4">
                    {cryptoData.map((crypto) => (
                      <a href={crypto.link} target="_blank" rel="noopener noreferrer" className="block" key={crypto.id}> 

                      <div key={crypto.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {crypto.icon}
                          <div>
                            <div className="font-medium">{crypto.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{crypto.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${crypto.price.toLocaleString()}</div>
                          <div className={`text-sm ${crypto.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {crypto.change >= 0 ? "+" : ""}
                            {crypto.change}%
                          </div>
                        </div>
                      </div>
                      </ a>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors">
                    View All Markets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Crypto Journey?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of users who trust CryptoVault for their cryptocurrency management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/wallet"
                  className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Go to Wallet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">CryptoVault</span>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Support
              </a>
            </div>
          </div>

          <div className="mt-6 text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} CryptoVault. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}



// import  { useState } from 'react';
// import { 
//   ArrowUpRight, 
//   ArrowDownRight, 
//   Wallet, 
//   LineChart, 
//   Send, 
//   Plus, 
//   Settings 
// } from 'lucide-react';

// const Home = () => {
//   const [activeTab, setActiveTab] = useState('assets');
  
//   // Sample data
//   const walletBalance = 24683.45;
//   const percentChange = 12.3;
//   const isPositiveChange = percentChange > 0;
  
//   const assets = [
//     { id: 1, name: 'Bitcoin', symbol: 'BTC', balance: 0.843, value: 15234.67, change: 8.2, icon: '₿', color: 'bg-orange-500' },
//     { id: 2, name: 'Ethereum', symbol: 'ETH', balance: 4.291, value: 7651.34, change: 12.7, icon: 'Ξ', color: 'bg-purple-500' },
//     { id: 3, name: 'Solana', symbol: 'SOL', balance: 45.32, value: 1797.44, change: -3.4, icon: 'Ⓢ', color: 'bg-green-500' }
//   ];

//   const recentTransactions = [
//     { id: 1, type: 'sent', amount: 0.12, symbol: 'BTC', to: '0x72b...3f9', date: 'Today', time: '14:32' },
//     { id: 2, type: 'received', amount: 120, symbol: 'SOL', from: '0x45a...8c1', date: 'Yesterday', time: '09:15' }
//   ];

//   return (
//     <div className="flex flex-col h-screen w-full bg-gray-900 text-white overflow-hidden">
//       {/* Header */}
//       <div className="flex justify-between items-center p-6">
//         <div className="flex items-center">
//           <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
//             <Wallet size={20} />
//           </div>
//           <span className="text-lg font-bold">CryptoVault</span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
//             <Settings size={16} className="text-gray-400" />
//           </div>
//           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
//         </div>
//       </div>

//       {/* Balance Card */}
//       <div className="mx-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
//         <div className="flex justify-between mb-2">
//           <span className="text-gray-200">Total Balance</span>
//           <div className="flex items-center">
//             <span className="text-sm font-medium mr-1">
//               {isPositiveChange ? '+' : ''}{percentChange}%
//             </span>
//             {isPositiveChange ? 
//               <ArrowUpRight size={16} className="text-green-400" /> : 
//               <ArrowDownRight size={16} className="text-red-400" />
//             }
//           </div>
//         </div>
//         <div className="text-3xl font-bold mb-4">${walletBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
//         <div className="flex justify-between">
//           <button className="flex items-center justify-center bg-white bg-opacity-20 rounded-xl py-2 px-4">
//             <Send size={16} className="mr-2" />
//             <span className="text-sm font-medium">Send</span>
//           </button>
//           <button className="flex items-center justify-center bg-white bg-opacity-20 rounded-xl py-2 px-4">
//             <ArrowDownRight size={16} className="mr-2" />
//             <span className="text-sm font-medium">Receive</span>
//           </button>
//           <button className="flex items-center justify-center bg-white bg-opacity-20 rounded-xl py-2 px-4">
//             <Plus size={16} className="mr-2" />
//             <span className="text-sm font-medium">Buy</span>
//           </button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex px-6 mt-6 border-b border-gray-800">
//         <button 
//           className={`pb-4 px-4 text-sm font-medium ${activeTab === 'assets' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('assets')}
//         >
//           Assets
//         </button>
//         <button 
//           className={`pb-4 px-4 text-sm font-medium ${activeTab === 'activity' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('activity')}
//         >
//           Activity
//         </button>
//         <button 
//           className={`pb-4 px-4 text-sm font-medium ${activeTab === 'explore' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
//           onClick={() => setActiveTab('explore')}
//         >
//           Explore
//         </button>
//       </div>

//       {/* Content */}
//       <div className="flex-1 overflow-y-auto p-6">
//         {activeTab === 'assets' && (
//           <div className="space-y-4">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-bold">Your Assets</h2>
//               <button className="text-sm text-blue-500">See All</button>
//             </div>
            
//             {assets.map(asset => (
//               <div key={asset.id} className="flex items-center p-4 bg-gray-800 rounded-xl">
//                 <div className={`h-10 w-10 rounded-full ${asset.color} flex items-center justify-center mr-4`}>
//                   <span className="text-lg font-bold">{asset.icon}</span>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between">
//                     <span className="font-medium">{asset.name}</span>
//                     <span className="font-medium">${asset.value.toLocaleString()}</span>
//                   </div>
//                   <div className="flex justify-between mt-1">
//                     <span className="text-sm text-gray-400">{asset.balance} {asset.symbol}</span>
//                     <div className="flex items-center">
//                       <span className={`text-sm ${asset.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
//                         {asset.change >= 0 ? '+' : ''}{asset.change}%
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div className="mt-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-bold">Recent Transactions</h2>
//                 <button className="text-sm text-blue-500">See All</button>
//               </div>

//               {recentTransactions.map(tx => (
//                 <div key={tx.id} className="flex items-center p-4 bg-gray-800 rounded-xl mb-3">
//                   <div className={`h-10 w-10 rounded-full ${tx.type === 'sent' ? 'bg-red-500/20' : 'bg-green-500/20'} flex items-center justify-center mr-4`}>
//                     {tx.type === 'sent' ? 
//                       <ArrowUpRight size={20} className="text-red-500" /> : 
//                       <ArrowDownRight size={20} className="text-green-500" />
//                     }
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between">
//                       <span className="font-medium">{tx.type === 'sent' ? 'Sent' : 'Received'}</span>
//                       <span className="font-medium">
//                         {tx.type === 'sent' ? '-' : '+'}{tx.amount} {tx.symbol}
//                       </span>
//                     </div>
//                     <div className="flex justify-between mt-1">
//                       <span className="text-sm text-gray-400">{tx.type === 'sent' ? `To: ${tx.to}` : `From: ${tx.from}`}</span>
//                       <span className="text-sm text-gray-400">{tx.date} {tx.time}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Bottom Navigation */}
//       <div className="flex justify-around items-center p-4 bg-gray-800 border-t border-gray-700">
//         <button className="flex flex-col items-center text-blue-500">
//           <Wallet size={20} />
//           <span className="text-xs mt-1">Wallet</span>
//         </button>
//         <button className="flex flex-col items-center text-gray-400">
//           <LineChart size={20} />
//           <span className="text-xs mt-1">Markets</span>
//         </button>
//         <button className="flex flex-col items-center text-gray-400">
//           <Send size={20} />
//           <span className="text-xs mt-1">Transfer</span>
//         </button>
//         <button className="flex flex-col items-center text-gray-400">
//           <Settings size={20} />
//           <span className="text-xs mt-1">Settings</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


// // import React from 'react'

// // const Home = () => {
// //   return (
// //     <div>Home</div>
// //   )
// // }

// // export default Home