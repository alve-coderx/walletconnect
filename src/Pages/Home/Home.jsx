import React from 'react'
import { BaseContainer, FAQ, NftBanner, NftServices } from '../../Components';

const Home = () => {
  return (
    <div>
      <NftBanner />
      <NftServices />
      <BaseContainer
        position="primary"
        direction='flex-row'
        title="FOR CREATORS"
        subtitle="Fewer bots, zero gas wars."
        banner="https://www.premint.xyz/static/marketing/images/list-screenshot.b8fc629d5265.png"      
        text="PREMINT lets you define exactly who is able to join your list. Allow everyone, or set eligibility requirements. It's all part of our effort to fill your list with real collectors, not bots." />
      <BaseContainer
        position="secondary"
        direction='flex-row-reverse'
        title="FOR COLLECTORS"
        subtitle="Get exclusive access to our holder benefits"
        banner="https://www.premint.xyz/static/marketing/images/collector-pass.6d68936dc48f.png"            
        text="As a PREMINT Collector Pass holder, you will get access to an evolving collector dashboard and features to keep you on top of the hottest mints." />
      <FAQ/>
    </div>
  )
}

export default Home