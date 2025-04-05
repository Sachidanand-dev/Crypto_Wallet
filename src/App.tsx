import './App.css'
import { EthWallet } from './components/eth_wallet'
import useMnemonicCall from './components/mnemonic';
import SolanaWallet from './components/sol_wallet'
function App() {
  const { mnemonic }: { mnemonic: string } = useMnemonicCall();
  return (
    <div className="bg-blue-500 text-black justify-center items-center">
      <SolanaWallet/>
      <EthWallet mnemonic={mnemonic}/>  
    </div>
  )
}

export default App
