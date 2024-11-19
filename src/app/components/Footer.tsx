import React from 'react';
import Image from 'next/image';
import footer from '@/app/assets/footer.img.png'


const Footer = () => {
     return(
      <div>
          <Image src={footer} alt="footer" className="mt-6"/>

      </div>
     )




}
export default Footer