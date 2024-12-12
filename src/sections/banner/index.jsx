import React from 'react'
import './styles.css'

const Banner = () => {
  return (
    <div className="banner">
    <div className="banner-container">
      <div className="accolades">
        <a
          target="_blank"
          href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
          className="accolade-item"
        >
          <div className="accolade-content">
            <div className="accolade-logo">
              <h2>IDC</h2>
            </div>
            <p className="accolade-description">
              Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>
        </a>
  
        <div className="divider"></div>
  
        <a
          target="_blank"
          href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
          className="accolade-item"
        >
          <div className="accolade-content">
            <div className="accolade-logo">
            <h2>Gartner</h2>
            </div>
            <p className="accolade-description">
              Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management
              tools 2022.
            </p>
          </div>
        </a>
  
        <div className="divider"></div>
  
        <a
          target="_blank"
          href="https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/"
          className="accolade-item"
        >
          <div className="accolade-content">
            <div className="accolade-logo">
            <h2>FORRESTER</h2>
            </div>
            <p className="accolade-description">
              Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
  
  )
}

export default Banner