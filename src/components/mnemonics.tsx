import { useState } from 'react';
import { generateMnemonic } from 'bip39'
export default function mnemonics() {
  const [mnemonic, setMnemonic] = useState("");

    async function mnemoniccall() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
    }

  return (
    <div>
        <div className=''>
            {mnemonic}
        </div>
      <button onClick={mnemoniccall}>Create Seed Phrase</button>
    </div>
  )
}
