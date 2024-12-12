import React from 'react'
import './platform.css'

const Platforms = () => {
    const platforms = [
        { name: "Android", src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg" },
        { name: "Windows", src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg" },
        { name: "iOS", src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg" },
        { name: "Android TV", src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg" },
        { name: "Apple TV", src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg" },
        { name: "Amazon Fire", src: "https://static.hexnode.com/v2/assets/img/ads-pages/platform/amazon-fire.png" },
      ];
    
      return (
        <div className="platform-support-wrapper">
          <h2 className="platform-heading">Platforms supported</h2>
          <div className="platform-list">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`platform-card ${
                  index % 2 === 0 ? "platform-card-even" : "platform-card-odd"
                }`}
              >
                <div className="platform-logo">
                  <img
                    alt={platform.name}
                    src={platform.src}
                    className="platform-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Platforms