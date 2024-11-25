import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirDrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirDrop() {
        try {
            // Ensure wallet is connected
            if (!wallet.publicKey) {
                alert("Wallet not connected. Please connect your wallet first.");
                return;
            }

            // Get and validate the amount
            const amount = parseFloat(document.getElementById("amount").value);
            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount greater than 0.");
                return;
            }

            // Request the airdrop
            await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
            
            
        } catch (error) {
            console.error("Airdrop failed:", error);
            alert("Failed to request airdrop. Check the console for details.");
        }
    }

    return (
        <div>
            <input style={{height:"35px",borderRadius:"8px",textAlign:"center",background:"#f6f6f6",color:"black"}} id="amount" type="text" placeholder="Amount..." />
            <button style={{color:"#f6f6f6"}} onClick={requestAirDrop}>Request Airdrop</button>
        </div>
    );
}
