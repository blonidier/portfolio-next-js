import React from 'react'
import Link from 'next/link'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'> A Revolutionary Developer that is passionate about being the best at all times that I can be.</p>
                <p className='py-2 text-gray-600'>I have played football all my life and loved being competitive but I also had a love for the tech world and computers. In 2019 I started using basic HTML and CSS to make basic, static websites for some companies local in my area. What started out as a fun hobby turned into a burning passion for programming.</p>
                <p className='py-2 text-gray-600'>I became really motivated to be a great developer at all times and learned JavaScript very fast... but I wanted to learn more. That is when I turned my attention to React and Firebase along with Next.js to truly be ahead of the game and now I am fully prepared to make any company happy with my ability.</p>
                <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://freepngimg.com/thumb/software/27297-3-software-transparent-image.png" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About