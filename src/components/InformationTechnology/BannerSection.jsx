import Image from 'next/image';
// import BannerImage from "../../../public/img/company/information_technology/banner_it.jpg"
export default function Banner() {
  return (
    <div className="relative w-full lg:h-[325px] overflow-hidden">
      <Image
        src="/img/company/information_technology/banner_it.jpg"
        alt="Information Technology Banner"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center px-[120px] py-12 ">
        <h1 className="text-white !text-[1.625rem] font-bold mb-4">Information Technology</h1>
        <p className="text-white !text-[1.128rem] leading-relaxed mb-3"
        
        >
          Welcome to SSAI's IT team page! We keep SSAI's operations running seamlessly and keep our company safe from
          cybersecurity threats. From maintaining network security to providing technical support, they work tirelessly to
          empower our employees with the tools and resources they need to succeed.
        </p>
        <p className="text-white !text-[1.128rem] mt-6 text-base">
          This page contains a variety of IT resources for you to use, as well as the contact information of key IT
          personnel!
        </p>
      </div>
    </div>
  );
}