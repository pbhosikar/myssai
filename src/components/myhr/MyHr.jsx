import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const MyHr = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Event photos data
  const eventPhotos = [
    {
      src: "/img/myhr/Carousel/1.jpeg",
      caption: "SSAI's CEO, Dr. Shilpa Bahethi, on smoothie bike",
    },
    {
      src: "/img/myhr/Carousel/2.jpeg",
      caption: `SSAI's Lead Scientific Programmer/Analyst, Jeremy Warner, on smoothie bike`,
    },
    {
      src: "/img/myhr/Carousel/3.jpg",
      caption:
        "Nancy Brambani and Josie Pearson from HR at the registration table ",
    },
    {
      src: "/img/myhr/Carousel/4.jpg",
      caption: "SSAI's Benefits Vendors",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Header with Gradient Background */}
        <div
          className="relative h-32 sm:h-38 md:h-38 lg:h-38"
          style={{
            backgroundImage: 'url("/img/myhr/myhr-background.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Human Resources Text */}
          <div className="absolute top-4 left-4 sm:left-32 sm:top-12">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-lg">
              Human Resources
            </h1>
          </div>

          {/* Center Icon */}
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <p className="text-sm sm:text-base text-gray-700">
              <strong>
                Welcome to my SSAI from the Human Resources Team. It is our
                pleasure to support you!
              </strong>
            </p>
          </div>

          {/* Meet the Team Section */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Responsibilities */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
Cassandra McIntyre
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Policy Management
</li>
                    <li>Employee Relations</li>
                    <li>Budget Management</li>
                    <li>Compliance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Dacia Newsome
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Benefits and Compensation</li>
                    <li>FMLA</li>
                    <li>HRIS (ADP and Costpoint)</li>
                   
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Jolona Davis
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Personnel Action Changes</li>
                    <li>Committee Management</li>
                    <li>EXPLORE Program Coordinator</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                   Josie Pearson
                  </h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>SSAIU: Training & Development</li>
                    <li>Performance & Engagement</li>
                      <li>Corporate Facility Security Officer (FSO)</li>
                        <li>Quality Management</li>
                          <li>Safety and Health</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Jeanne Kachris
</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Recruiting</li>
                    <li>Onboarding and Offboarding
</li>
                  
                  </ul>
                </div>
              </div>

              {/* Right Column - Contact Cards with Profile Images */}
              <div className="space-y-4">
                {/* Cassandra McIntyre */}
                <div className="flex items-start gap-4">
                  <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/CassandraMcIntyre.png"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      Cassandra McIntyre
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Director of HR SSAI and Advanced Mission Partnerships

                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">
Phone: 301-867-6329
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email:{" "}
                      <a
                        href="mailto:cassandra.mcintyre@ssaihq.com"
                        className="text-blue-600 hover:underline"
                      >
                        cassandra.mcintyre@ssaihq.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Josie Pearson */}
                <div className="flex items-start gap-4">
                  <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/JosiePearson.jpg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                     Josie Pearson

                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
Director of Organizational Development                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">
                      Phone: 757-951-1607
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email:{" "}
                      <a
                        href="mailto:josie.pearson@ssaihq.com"
                        className="text-blue-600 hover:underline"
                      >
                        josie.pearson@ssaihq.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Dacia Newsome */}
                <div className="flex items-start gap-4">
                  <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/DaciaNewsome.jpg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      Dacia Newsome
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Compensation and Benefits Manager
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">
                      Phone: 301-867-2099
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email:{" "}
                      <a
                        href="mailto:dacia.newsome@ssaihq.com"
                        className="text-blue-600 hover:underline"
                      >
                        dacia.newsome@ssaihq.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Jeanne Barger */}
                <div className="flex items-start gap-4">
                  <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/JeanneBarger.jpeg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      Jeanne Barger
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Human Resources Generalist
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">
                      Phone: 301-867-2135
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email:{" "}
                      <a
                        href="mailto:jeanne.barger@ssaihq.com"
                        className="text-blue-600 hover:underline"
                      >
                       jeanne.kachris@ssaihq.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Jolona Davis */}
                <div className="flex items-start gap-4">
                  <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/JolonaDavis.jpg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      Jolona Davis
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Senior Human Resources Generalist
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">
                      Phone: (301) 867-6256
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email:{" "}
                      <a
                        href="mailto:jolona.davis@ssaihq.com"
                        className="text-blue-600 hover:underline"
                      >
                       jolona.davis@ssaihq.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness and Benefits Fair 2024 Event Recap */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
             Wellness and Benefits Fair 2024 Event Recap

            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              <p>
               SSAI recently hosted the annual Wellness and Benefits Fair, offering employees a mix of <strong>in-person</strong> and{" "}
                <strong>virtual activities</strong> focused on health and well-being. Highlights included{" "}
                <strong>
                  biometric screenings, flu shots, and massage sessions for in-person attendees.
                </strong>
                Employees also had the chance to join{" "}
                <strong>virtual benefits presentations</strong> from carriers
                like <strong>Legal Resources, Lincoln, and MetLife</strong>,
                covering various <strong>health and financial benefits</strong>.
                Additionally, <strong>wellness sessions</strong> on topics such
                as the{" "}
                <strong>
                  impact of food on mental health, quick healthy recipes, and
                  brain games
                </strong>{" "}
                rounded out the day's activities.
              </p>
            </div>

            {/* Event Photo Carousel */}
            {/* Event Photo Carousel */}
            {/* Event Photo Carousel */}
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-md">
                <div className="relative">
                  {/* Embla Carousel Container */}
                  <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                    <div className="flex">
                      {eventPhotos.map((photo, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                          <div className="relative h-[500px] sm:h-[550px] bg-gray-200">
                            <Image
                              src={photo.src}
                              alt={photo.caption}
                              fill
                              className="object-cover"
                            />
                            {/* Caption Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-2.5 text-center">
                              <Link href="/my-hr" className="text-sm font-medium">
                                {photo.caption}
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Previous Button */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-5 h-5 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-5 h-5 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Dots Navigation */}
                  <div className="flex justify-center gap-2 mt-3">
                    {eventPhotos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === selectedIndex
                            ? "bg-blue-600 w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness and Benefits Fair Prize Winners */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
             Wellness and Benefits Fair Prize Winners

            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              <p>
               Sending many thanks to those who joined us for the Wellness and Benefits Fair! We hope you found the event worthwhile and had a chance to connect with carriers while enjoying the various fun activities.

              </p>
            </div>

            <h3 className="text-base sm:text-lg italic text-gray-800 mb-4">
Congratulations to the following prize winners!

            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Tiejun Chang-</strong> Chefman Multifunctional Digital Air Fryer
              </p>
              <p className="text-sm text-gray-700">
                <strong>Joseph Kwasizur-</strong> SSAI Cruiser Bike
              </p>
              <p className="text-sm text-gray-700">
                <strong>Jeremy Wanner:</strong> Q Ring Smart Ring
              </p>
              <p className="text-sm text-gray-700">
                <strong>Daniel Link- </strong> Lincoln 40oz Stanley Tumbler
              </p>
              <p className="text-sm text-gray-700">
                <strong>Austin Conley:</strong> Lincoln Under Armour Duffel Bag
              </p>
              <p className="text-sm text-gray-700">
                <strong>Jules Kouatchou-</strong> Donama Cervical Pillow for Neck and Shoulder
              </p>
              <p className="text-sm text-gray-700">
                <strong>Grace Chen:</strong> Comfier Massage Seat Cushion with Heat
              </p>
              <p className="text-sm text-gray-700">
                <strong>Holli Kohl-</strong> Levoit Air Purifier
              </p>
              <p className="text-sm text-gray-700">
                <strong>Erica Bradshaw- </strong>  Cuisinart Cordless Compact Blender
              </p>
              <p className="text-sm text-gray-700">
                <strong>Sean McCartney-</strong> 4 Piece Spa Kit
              </p>
              <p className="text-sm text-gray-700">
                <strong>Dawn Alexander-</strong> Cuisinart Cordless Compact Blender
              </p>
              <p className="text-sm text-gray-700">
                <strong>Heather Mortimer-</strong> Amazon Gift Card (Brain Games Winner)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Christine Bloecker-</strong> Amazon Gift Card (Brain Games Winner)
              </p>
              <p className="text-sm text-gray-700">
                <strong>William Muscovich- </strong> Amazon Gift Card (Break Games
                Winner)
              </p>
              <p className="text-sm text-gray-700">
                <strong>William Mooseeh:</strong> Upright Go 2 Premium Posture Corrector
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-4">
              <p className="text-sm text-gray-700">
                <strong>
                  Please stop by the HR office (10210 Greenbelt Road, Suite 600, Room #649)
                </strong>{" "}
                to pick up your prize.
              </p>
            </div>
          </div>

          {/* SSAI Carrier Vendors Presentation Slides */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              SSAI Carrier Vendors Presentation Slides
            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              <p>
               Whether or not you attended any Virtual Benefits Meetings, please explore valuable insights from each of our{" "}
                <strong>carrier vendors</strong> by checking out their{" "}
                <strong>presentation slides below</strong>. Learn more about the
                benefits and services available to SSAI employees.
              </p>
            </div>

            {/* Vendor Grid - First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Lincoln Financial Group */}
              <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/lincolnlogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                    href="https://ssaihq.box.com/s/d6gq836ph5lwra2dve8jwx4na1q8bhx6"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
Lincoln SSAI - Benefits Overview Slides                  </a>
                </div>
              </div>

              {/* MetLife */}
              <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/metlifelogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                   href="https://ssaihq.box.com/s/uh0xwzx4489ix9mpwtcp0z36215cjhw1"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
MetLife OE Slides                  </a>
                </div>
              </div>

              {/* Transamerica */}
              <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/transamericalogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                    href="https://ssaihq.box.com/s/jbs8kzi4x5vhbn9xh7zybf921my0uz04"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
Retirement Plan Essentials - SS&A Slides                  </a>
                </div>
              </div>

              {/* Legal Resources */}
              <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/legalresourceslogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                    href="https://ssaihq.box.com/s/359a3vf7qtj1fpna4o9ztogrr3urr8mg"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
                    SSAI Legal Resources Slides
                  </a>
                </div>
              </div>

            </div>

            {/* Vendor Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bank of America */}
                           <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/bankofamericalogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                   href="https://ssaihq.box.com/s/pn6pu9jiw5z66qkwgbl4wmqufglae94k"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
                    Bank of America SSAI Slides
                  </a>
                </div>
              </div>


              {/* NASA Federal Credit Union */}
                            <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/nasaFCUlogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                    href="https://ssaihq.box.com/s/e1zm6aqh6faecookymfa3sscsad6dsd3"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
                    Credit Union Overview Slides
                  </a>
                </div>
              </div>


              {/* BHS */}
                           <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/bhslogo.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                    href="https://ssaihq.box.com/s/4s0njv62v7p125tw1sgw35lmmztefwfa"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
                   EAP Employee Orientation Slides
                  </a>
                </div>
              </div>


              {/* Cigna */}
                            <div className="flex flex-col">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 flex-1 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src="/img/myhr/Vendors/cigna.png"
                      alt="Lincoln Financial Group"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <a
                  target="_blank"
                    href="https://ssaihq.app.box.com/file/1884420023839?s=fyhcmd2m1naij0xfhdib9hhjbujg1218"
                    className="text-base text-blue-600 hover:underline font-semibold text-center"
                  >
                   Cigna Programs and Resources Presentation
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyHr;
