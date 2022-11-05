import React from 'react'
import { NavLink } from 'react-router-dom'

const NftBanner = () => {
  const users = [
    {
      "id": 1,
      "title": "Artists",
      "border": true,
      "images":
        [
          "https://www.premint.xyz/static/marketing/images/user-avatars/xcopy.0db428c9e9c1.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/snowfro.21545050cbb8.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/deekaymotion.ede90e3364bb.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/pindar-vanarman.e8ba38ca25da.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/coldie.b8e0a33b3764.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/takashi-murakami.0e8d31f8b026.jpeg"
        ]
    },
    {
      "id": 2,
      "title": "Communities",
      "border": true,
      "images":
        [
          "https://www.premint.xyz/static/marketing/images/user-avatars/xcopy.0db428c9e9c1.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/snowfro.21545050cbb8.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/deekaymotion.ede90e3364bb.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/pindar-vanarman.e8ba38ca25da.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/coldie.b8e0a33b3764.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/takashi-murakami.0e8d31f8b026.jpeg"
        ]
    },
    {
      "id": 3,
      "title": "Brands",
      "border": true,
      "images":
        [
          "https://www.premint.xyz/static/marketing/images/user-avatars/xcopy.0db428c9e9c1.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/snowfro.21545050cbb8.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/deekaymotion.ede90e3364bb.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/pindar-vanarman.e8ba38ca25da.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/coldie.b8e0a33b3764.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/takashi-murakami.0e8d31f8b026.jpeg"
        ]
    },
    {
      "id": 4,
      "title": "Celebrities",
      "border": false,
      "images":
        [
          "https://www.premint.xyz/static/marketing/images/user-avatars/xcopy.0db428c9e9c1.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/snowfro.21545050cbb8.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/deekaymotion.ede90e3364bb.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/pindar-vanarman.e8ba38ca25da.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/coldie.b8e0a33b3764.jpeg",
          "https://www.premint.xyz/static/marketing/images/user-avatars/takashi-murakami.0e8d31f8b026.jpeg"
        ]
    },
  ]
  return (
    <div className='lg:px-64 text-center'>
      <div className='my-8'>
        <p className='lg:text-[80px] text-[40px] font-[600] my-2'>The web3 allowlist <br /> platform</p>
        <p className='text-gray-500 text-[20px] my-2'>PREMINT is widely used by the world's top NFT artists, communities, brands,<br /> and celebrities to build allowlists for top NFT projects.</p>
        <NavLink to='/login'><button className='bg-[#2CBBDB] px-10 py-3 my-2 rounded-3xl text-white'>Get Started</button></NavLink>
      </div>
      <div className='container mx-auto'>
        <p className='text-[40px] font-[400] my-2'>Who's used PREMINT?</p>
        <div className='grid justify-items-cneter lg:grid-cols-4 md:grid-cols-4 grid-cols-1 justify-items-center'>
          {
            users.map((item) => (
              <div key={item.id} className={item.border ? "border-r-2 border-[#dee2e6] mx-4 px-8" : "mx-4 px-8"}>
                <p className='text-2xl font-[700] my-4'>{item.title}</p>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-5 justify-items-center'>
                  {
                    item.images.map((img) => (
                      <img src={img} key={img} className="lg:w-24 md:w-24 w-54 rounded-[10rem] lg:rounded-[50px]"/>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NftBanner