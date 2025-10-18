import Image from 'next/image';
// import BannerImage from "../../../public/img/company/information_technology/banner_it.jpg"
export default function Opportunitirsbanner() {
  return (
    <div className="relative w-full lg:h-[125px] overflow-hidden">
      <Image
        src="/img/company/information_technology/banner_it.jpg"
        alt="Information Technology Banner"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center px-[120px] py-12 ">
        <h1 className="text-white !text-[1.625rem] font-bold mb-4">Opportunites</h1>
       
      </div>
    </div>
  );
}