import Image from 'next/image';

export default function Opportunitirsbanner() {
  return (
    <div className="relative w-full h-[150px] lg:h-[150px] overflow-hidden">
      <Image
        src="/img/company/opportunities/united_states_space_force_cover.jpg"
        alt="Information Technology Banner"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-[120px] py-12">
        <h1 className="text-white !text-[1.625rem] font-bold mb-4">Opportunites</h1>
      </div>
    </div>
  );
}