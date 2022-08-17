import React, { useEffect, useState } from 'react'
import {getUserAddress} from "../components/SmartContract/Web3Actions"
import { GetReserveTokens, ReserveNFTs } from './SmartContract/smartActions'
import "./reserveNft.css"
function ReserveNft() {
const [address , setAddress] = useState()
const [nftToken, setNftToken] = useState()
const [isNft , setIsNft] = useState()
const [allNfts, setAllNfts] = useState()
     const WalletConnect = async()=>{
        const address = await getUserAddress()
        setAddress(address)
    }

    const Reserve = async()=>{
        setNftToken('')
        try{
            const res = await ReserveNFTs([+nftToken])
            if(res) {
                setIsNft(res)
            }
        }catch(error) {
            console.log(error)
        }
    } 

    const handleChange = (e)=>{
        setNftToken(e.target.value)
    }

    useEffect(()=>{
        const GetReserveNfts = async()=>{
            const nfts = await GetReserveTokens()
            const result = nfts.filter(checkAdult);
            function checkAdult(nfts) {
              return nfts !== "0";
            }
            setAllNfts(result)
            console.log(result)
        }
        GetReserveNfts()
    },[isNft])
  return (
    <div className='nft_wrp'>
        <h3>Connect your wallet </h3>
            
            <button className='btn' onClick={WalletConnect}> Connect Wallet</button>
            {
                address ? <p>{address}</p> : "not connected"
            }
            <h4>Reserve your nfts</h4>
            <input placeholder='enter nft number' type='number' value={nftToken} onChange={handleChange}/>
            <button onClick={Reserve}> Reserve</button>

            <div className='allNfts'>
                {allNfts && allNfts.map((elem, id)=>{
                    return(
                        <p className='nfts_values' key = {id}>
                        {elem}
                        </p>
                    )
                })}
            </div>
    
    </div>
  )
}

export default ReserveNft