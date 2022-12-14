import React from 'react';
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner: { discount, largeText2, largeText3, bruhText, saleTime, smallText, midText, desc, product, buttonText, image, image2 } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <h3>{largeText3}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{bruhText}</p>
          <h3>{bruhText}</h3>
          <p>{bruhText}</p>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image2)} 
          className="footer-banner-image" />
      </div>
    </div>
  )
}

export default FooterBanner