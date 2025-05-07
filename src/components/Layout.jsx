import React from 'react'
import LoanCalculator from './HeroContent'
import bgVideo from '../../public/earth2.mp4'

function Layout({darkMode}) {
  return (
    <div style={{
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '0',
        height:'100%'
    }}>
      <image
      style={{
        position:'absolute',
        top:'0',
        left:'0',
        width:'100%',
        height:'120',
        objectFit:'cover',
        backgroundRepeat:'repeat',
        zIndex:'-1',
      }}>
          <source src={bgVideo} type="video/mp4" />
      </image>
      <LoanCalculator darkMode={darkMode} />
    </div>
  )
}

export default Layout
