import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        console.log(amount)
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div>
        <input style={{height:"35px",borderRadius:"8px",textAlign:"center",background:"#f6f6f6",color:"black"}} id="to" type="text" placeholder="To" />
        <input style={{height:"35px",borderRadius:"8px",textAlign:"center",background:"#f6f6f6",color:"black"}} id="amount" type="text" placeholder="Amount" />
        <button style={{color:"#f6f6f6"}} onClick={sendTokens}>Send</button>
    </div>
}
