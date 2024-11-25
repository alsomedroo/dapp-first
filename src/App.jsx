import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirDrop } from './requestAirDrop.jsx';
import { ShowBalance } from './showBalance.jsx';
import { SendTokens } from './sendTokens.jsx';

function App() {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <Router>
                        <div style={styles.container}>
                            {/* Navigation */}
                            <nav style={styles.navbar}>
                                <Link to="/" style={styles.navLink}>Home</Link>
                                <Link to="/airdrop" style={styles.navLink}>Request Airdrop</Link>
                                <Link to="/balance" style={styles.navLink}>Show Balance</Link>
                                <Link to="/send" style={styles.navLink}>Send Tokens</Link>
                            </nav>

                            {/* Define Routes */}
                            <div style={styles.content}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/airdrop" element={<RequestAirDrop />} />
                                    <Route path="/balance" element={<ShowBalance />} />
                                    <Route path="/send" element={<SendTokens />} />
                                </Routes>
                            </div>
                        </div>
                    </Router>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

// Home Component
function Home() {
    return (
        <div style={styles.centeredContent}>
            <h1>Welcome to <h2 style={{color:"Highlight"}}>Alsomedroo's</h2> Solana Wallet App</h1>
            <WalletMultiButton style={styles.walletButton} />
        </div>
    );
}

// Styles Object
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
    },
    navbar: {
        display: 'flex',
        gap: '1.5rem',
        padding: '1rem',
        backgroundColor: '#333',
        borderRadius: '8px',
        marginBottom: '2rem',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.2rem',
        padding: '0.5rem 1rem',
        border: '2px solid transparent',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
    },
    
    navLinkHover: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: '#fff',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    centeredContent: {
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    walletButton: {
        marginTop: '1rem',
    },
};

export default App;
