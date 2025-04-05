import { useState } from 'react';
import { generateMnemonic } from 'bip39'
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

export default function SolanaWallet() {
  const [mnemonic, setMnemonic] = useState("");
  const [currentIndex,setCurrentIndex]=useState("");
  const [publicKey, setPublicKeys] = useState<string[]>([]);

    async function mnemoniccall() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
    }

    function generateWallet() {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKey, keypair.publicKey.toString()]);
    }

  return (
    <div>
        <div className=''>
            {publicKey.map((key, index) => (
                <div key={index}>{key}</div>
            ))}
        </div>
      <button onClick={generateWallet}>Create Sol Wallet</button>
    </div>
  )
}
