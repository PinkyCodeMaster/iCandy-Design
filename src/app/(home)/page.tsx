// app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 py-8 lg:px-36 mx-auto">
      <div className="my-8">
        <div className="flex items-center mb-4">
          <div className="line"></div>
          <h1 className="text-white text-4xl sm:text-6xl ml-4 heading">GALLERY</h1>
        </div>
        <div className="flex justify-between">
          <div></div>
          <a
            href="#gallery"
            className="hidden md:block bg-orange text-black px-6 py-2 font-bold hover:bg-yellow-500"
          >
            Discover Our Gallery
          </a>
        </div>
      </div>
      <div className="flex items-center text-white py-4">
        <div className="flex items-center space-x-2">
          <a href="#hill" className="hover:underline">
            Hill
          </a>
          <span>|</span>
          <a href="#ironworks" className="hover:underline">
            Ironworks
          </a>
          <span>|</span>
          <a href="#cambridge" className="hover:underline">
            Cambridge
          </a>
        </div>
        <span className="text-yellow-500 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      <section id="gallery" className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1 grid gap-4">
          <div className="relative w-full h-64 overflow-hidden">
            <Image src="/lion.jpeg" alt="lion" layout="fill" objectFit="cover" />
          </div>
          <div className="relative w-full h-64 overflow-hidden">
            <Image src="/flamingo.jpeg" alt="flamingo" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="relative md:col-span-2 row-span-2 w-full h-64 md:h-full overflow-hidden">
          <Image src="/elephant.jpeg" alt="elephant" layout="fill" objectFit="cover" objectPosition="left" />
        </div>
        <div className="relative col-span-1 row-span-2 w-full h-64 md:h-full overflow-hidden">
          <Image className="w-full h-full object-[right_20%]" src="/giraffe.jpeg" alt="giraffe" layout="fill" objectFit="cover" objectPosition="right 20%" />
        </div>
      </section>
      <div className="md:hidden text-right my-8">
        <a href="#gallery" className="bg-orange text-black px-6 py-2 font-bold hover:bg-yellow-500">
          Discover Our Gallery
        </a>
      </div>
    </main>
  );
}
