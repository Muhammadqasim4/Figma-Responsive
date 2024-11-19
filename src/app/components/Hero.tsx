import React from 'react'
import Image from 'next/image'
import image from '@/app/assets/girl-boy-img.png'


export default function Hero() {
    return(
        <div>
            
      <div className="bg-[#F2F0F1] mt-5 pl-12 lg:flex max-sm:pl-5">
                <div>
                <h1 className="text-[60px] font-black leading-[65px] pt-12 max-sm:text-[37px] max-sm:leading-[45px] max-sm:text-black ">FIND CLOTHES <br /> THAT MATCHES YOUR STYLE</h1>
                <p className="text-[#00000099] mt-4 max-sm:text-[16px]">Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                <button className="w-[210px] h-[52px] rounded-[62px] py-4 px-[52px] bg-black text-white mt-6 max-sm:w-[340px]">Shop Now</button>
                <div className="flex">
                <p className="text-[40px] font-bold text-black leading-[25px] mt-6 max-sm:text-[25px]">200+ <br /><span className="text-[#00000099] text-[18px] max-sm:text-[12px]">International Brands</span></p>
                <p className="text-[40px] font-bold text-black leading-[25px] mt-6 pl-7  max-sm:text-[25px]">2,000+ <br /><span className="text-[#00000099] text-[18px]  max-sm:text-[12px]">High Quality Products</span></p>
                <p className="text-[40px] font-bold text-black leading-[25px] mt-6 pl-7  max-sm:text-[25px]">30,000+ <br /><span className="text-[#00000099] text-[18px]  max-sm:text-[12px] max-sm:pr-6">Happy Customers</span></p>
                </div>
                </div>
                    <div>
                    <Image src={image} height={653} alt="img" className="max-sm:relative max-sm:right-20  max-sm:h-[300px]" />
                    </div>
            </div>

          
        </div>
    )
}

