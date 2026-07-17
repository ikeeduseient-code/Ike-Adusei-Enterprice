import React from 'react';
import './Brands.css';

function Brands() {
  const partnerBrands = [
    { name: "HOFFMAN", styleClass: "brand-hoffman" },
    { name: "JERRY", styleClass: "brand-jerry" },
    { name: "IKE", styleClass: "brand-ike" },
    { name: "BOKO", styleClass: "brand-boko" },
    { name: "SUTAI", styleClass: "brand-sutai" },
    { name: "RAF", styleClass: "brand-raf" },
    { name: "SILVER CREST", styleClass: "brand-silvercrest" },
    { name: "BARDEFU", styleClass: "brand-bardefu" },
    { name: "CLINET", styleClass: "brand-clinet" },
    { name: "DESSINI", styleClass: "brand-dessini" },
    { name: "UNIQUE", styleClass: "brand-unique" },
    { name: "CHIGO", styleClass: "brand-chigo" }
  ];

  return (
    <div className="brands-showcase">
      <div className="brands-title">Brands We Operate With</div>
      
      <div className="brands-slider">
        {/* The animation moves this track. Double arrays mean it never ends or cuts off. */}
        <div className="brands-track">
          {partnerBrands.map((brand, index) => (
            <div className="brand-logo-card" key={`group1-${index}`}>
              <span className={`brand-wordmark ${brand.styleClass}`}>{brand.name}</span>
            </div>
          ))}

          {partnerBrands.map((brand, index) => (
            <div className="brand-logo-card" key={`group2-${index}`}>
              <span className={`brand-wordmark ${brand.styleClass}`}>{brand.name}</span>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export { Brands };