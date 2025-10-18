import Image from 'next/image'
import React from 'react'

function Qualitybanner() {
  return (
    <div className="relative w-full h-[150px] lg:h-[150px] overflow-hidden">
    <Image
      src="/img/company/management-page/quality-management-system-business-industrial-260nw-2247879747.webp"
      alt="Information Technology Banner"
      fill
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 flex flex-col justify-center px-[120px] py-12 ">
      <h1 className="text-white !text-[1.625rem] font-bold mb-4">Quality Management System</h1>
     
    </div>
  </div>
  )
}

export default Qualitybanner