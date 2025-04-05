import { useState } from 'react';
import { mnemonicToSeedSync, generateMnemonic } from 'bip39';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { Keypair } from '@solana/web3.js';

export default function SolanaWallet() {
  const [mnemonic, setMnemonic] = useState(generateMnemonic());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keypairs, setKeypairs] = useState<Keypair[]>([]);

  const generateWallet = () => {
    const seed = mnemonicToSeedSync(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const { key } = derivePath(path, seed.toString('hex'));
    const secretKey = nacl.sign.keyPair.fromSeed(key).secretKey;
    const keypair = Keypair.fromSecretKey(secretKey);

    setKeypairs([...keypairs, keypair]);
    setCurrentIndex(currentIndex + 1);
  };

  // const regenerateMnemonic = () => {
  //   setMnemonic(generateMnemonic());
  //   setKeypairs([]);
  //   setCurrentIndex(0);
  // };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 space-y-6 animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          🪙 Solana Wallet Generator
        </h1>

          {/* <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Mnemonic Phrase:</h2>
            <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600 break-words">
              {mnemonic}
            </div>
          </div> */}

        <div className="flex gap-4">
          {/* <button
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
            onClick={regenerateMnemonic}
          >
            🔁 New Mnemonic
          </button> */}

          <button
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
            onClick={generateWallet}
          >
            ➕ Add Wallet
          </button>
        </div>

        {keypairs.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Generated Wallets:
            </h2>

            <div className="space-y-2 max-h-60 overflow-auto">
              {keypairs.map((kp, i) => (
                <div
                  key={i}
                  className="bg-gray-100 p-2 rounded-lg text-gray-700 text-sm border border-gray-300 break-words"
                >
                  {kp.publicKey.toBase58()}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}


// import { useState } from 'react';
// import { mnemonicToSeedSync, generateMnemonic } from 'bip39';
// import { derivePath } from 'ed25519-hd-key';
// import nacl from 'tweetnacl';
// import { Keypair } from '@solana/web3.js';

// export default function SolanaWallet() {
//   const [mnemonic, setMnemonic] = useState(generateMnemonic());
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [keypairs, setKeypairs] = useState<Keypair[]>([]);

//   const generateWallet = () => {
//     const seed = mnemonicToSeedSync(mnemonic); // sync version returns Buffer
//     const path = `m/44'/501'/${currentIndex}'/0'`;
//     const { key } = derivePath(path, seed.toString('hex'));
//     const secretKey = nacl.sign.keyPair.fromSeed(key).secretKey;
//     const keypair = Keypair.fromSecretKey(secretKey);

//     setKeypairs([...keypairs, keypair]);
//     setCurrentIndex(currentIndex + 1);
//   };

//   const regenerateMnemonic = () => {
//     setMnemonic(generateMnemonic());
//     setKeypairs([]);
//     setCurrentIndex(0);
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto font-mono">
//       <h1 className="text-xl font-bold mb-4">🪙 Solana Wallet Generator</h1>
      
//       <div className="mb-4">
//         <strong>Mnemonic:</strong>
//         <p className="bg-gray-100 p-2 rounded break-words">{mnemonic}</p>
//       </div>

//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
//         onClick={regenerateMnemonic}
//       >
//         🔁 New Mnemonic
//       </button>

//       <button
//         className="bg-green-600 text-white px-4 py-2 rounded"
//         onClick={generateWallet}
//       >
//         ➕ Generate Solana Wallet
//       </button>

//       <div className="mt-6">
//         <h2 className="text-lg font-semibold mb-2">Generated Public Keys:</h2>
//         {keypairs.map((kp, i) => (
//           <div key={i} className="bg-gray-100 p-2 rounded mb-1 break-all">
//             {kp.publicKey.toBase58()}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
