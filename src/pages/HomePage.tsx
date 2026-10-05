import React from "react";
import { AiFillPlaySquare } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";



export function HomePage() {
  return (
    <div className="min-h-screen bg-[#3f4b4f] text-slate-100 font-bold selection:bg-blue-500 selection:text-white">
      {/*HEADER*/}
      <header className="sticky top-0 z-50 h-[90px] border-b border-slate-800/80 bg-[#506d78]/90 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-[99%] items-center justify-between px-6 lg:px-10">
          <div className="flex justify-between h-10 font-bold text-white ">
            <div className="flex w-full gap-8">
              <div className="flex w-50 items-center">
                <AiFillPlaySquare className="text-white w-15 h-10"/>
                <p className='text-white text-[25px] font-semibold'>STREAMVERSE</p>
              </div>
              <div className='flex gap-6 '>

              <button>Home </button>
              <button>TV Shows</button>
              <button>Movies</button>
              <button>New & Popular </button>
              <button>My list</button>

            </div>
        
            </div>

          </div>
          <div className="flex items-center w-[400px] h-[40px] bg-white rounded-sm">
            <input 
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 text-sm text-gray-700 outline-none" />
            <button className="px-3 text-gray-500"><FaSearch /></button>
          </div>
          <IoMdNotificationsOutline className="text-4xl"/>
          <button className="flex w-[120px] gap-4 "><FaRegCircleUser className="text-4xl"/>
          <p className="flex  ">User A</p></button>
        </div>
      </header>
      <main>
        <section className="w-full max-w-[1400px] mx-auto p-4">
      
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        
        <img
          src="https://i.pinimg.com/736x/00/9e/3e/009e3e80e1565e7c00bcb7a5291ca838.jpg"
          className="absolute left-1/2 top-1/2 w-[400px] h-[700px] object-contain -translate-x-1/2 -translate-y-1/2 rotate-270 scale-[1.2]" />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white">
          <p className="text-sm">Premium Streaming Website</p>

          <h1 className="text-4xl font-bold mt-2">
            The Astral Frontier
          </h1>

          <p className="mt-3 text-sm max-w-[500px]">
            A journey into deep space and the unknown.
          </p>

          <button className="mt-5 bg-blue-600 px-5 py-2 rounded">
            PLAY NOW
          </button>
        </div>

      </div>

    </section>
    <section className="w-full px-6 py-8">

  <h2 className="text-2xl font-bold mb-5">
    Popular Movies
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">

    <div>
      <img
        src="https://i.pinimg.com/1200x/03/67/74/036774af6f913baaf1d159902e1ba377.jpg"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">
        Movie 1
      </h3>
    </div>

    <div>
      <img
        src="https://i.pinimg.com/736x/13/28/b8/1328b8db5cf77bdbbcc366d99a02b138.jpg"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">
        Movie 2
      </h3>
    </div>

    <div>
      <img
        src="https://i.pinimg.com/736x/a3/19/69/a319697386c13cc6d64dff5797de9f5d.jpg"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">
        Movie 3
      </h3>
    </div>

    <div>
      <img
        src="https://i.pinimg.com/736x/5d/23/e8/5d23e8cea42ba4a5513f6ab32f0b40c7.jpg"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">
        Movie 4
      </h3>
    </div>

    <div>
      <img
        src="https://i.pinimg.com/736x/a5/0f/15/a50f15b368a57617dccd67a5d7fc5d07.jpg"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">
        Movie 5
      </h3>
    </div>

    <div>
      <img
        src="https://i.pinimg.com/1200x/a5/5c/91/a55c9167b161b77b5980873adac2277b.jpg"
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="mt-2 font-semibold">
        Movie 6
      </h3>
    </div>

  </div>

</section>
      </main>
    </div>
  );
}