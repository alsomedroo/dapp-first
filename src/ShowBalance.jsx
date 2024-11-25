import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect } from "react"

export function ShowBalance(){
    const {connection} = useConnection()
    const wallet = useWallet()

    async function showBalance(){
        const balance = await connection.getBalance(wallet.publicKey)
        document.getElementById("bal").innerHTML = balance/LAMPORTS_PER_SOL +"SOL"

    }
    showBalance()
    return(
        <div>
            Balance: <span style={{color:"black",fontSize:"30px",fontFamily:"bold" }} id="bal"></span> 
        </div>
    )
}