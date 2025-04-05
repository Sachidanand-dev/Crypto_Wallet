import { useState } from 'react';
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import useMnemonicCall from './mnemonic';

export default function SolanaWallet() {
  
  const [currentIndex,setCurrentIndex]=useState("");
  const [publicKey, setPublicKeys] = useState<string[]>([]);

    const { mnemonic, generateAndSetMnemonic } = useMnemonicCall();

    function generateWallet() {
        mnemonicToSeed(mnemonic).then((seed) => {
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString('hex')).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKey, keypair.publicKey.toString()]);
        }).catch((error) => {
            console.error("Error generating wallet:", error);
        });
    }

  return (
    <div>
        <div>{mnemonic}</div>
        <div className=''>
            {publicKey.map((key, index) => (
                <div key={index}>{key}</div>
            ))}
        </div>
        <button onClick={() => generateAndSetMnemonic()}>Create Seed Pharase</button>
      <button onClick={generateWallet}>Create Sol Wallet</button>
    </div>
  )
}
