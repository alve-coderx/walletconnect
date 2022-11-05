import React from 'react'

const BaseContainer = ({ title, subTitle, text }) => {
    return (
        <div className="text-left w-80">'
            <p className='border-t-4 w-20 border-[#2CBBDB]'>.</p>
            <span className='text-white text-[70px] pb-4'>{title}</span>
            <p className='text-white py-4 text-lg'>{subTitle}</p>
            <p className='text-gray-500 py-4 font-[500]'>{text}</p>
        </div>
    )
}

const NftServices = () => {

    return (
        <div className='my-20 bg-[#051620] p-24 text-center'>
            <div>
                <p className='text-3xl text-white'>PREMINT is Massive</p>
                <p className='text-gray-500'>PREMINT is one of the most heavily used NFT services, loved by the entire <br /> web3 community.</p>
            </div>
            <div className='grid justify-items-cneter lg:grid-cols-3 grid-cols-1 justify-items-center'>
                <BaseContainer title={"26,813"} subTitle={"Projects"} text={"Over 26,800 projects have managed their access list with PREMINT."}/>
                <BaseContainer title={"46,412,77"} subTitle={"Registrations"} text={"Projects have registered over 46,410,000 entries to their access lists."}/>
                <BaseContainer title={"3,215,351"} subTitle={"Collectors"} text={"Over 3,210,000 wallets have connected to PREMINT to register for lists."}/>
            </div>
        </div>
    )
}

export default NftServices