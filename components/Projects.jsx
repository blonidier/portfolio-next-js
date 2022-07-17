import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Projectitem from './Projectitem'
import whatsapp from '../public/assets/projects/whatsapp.png'
import twitter from '../public/assets/projects/twitter.png'
import airbnb from '../public/assets/projects/airbnb.png'
import google from '../public/assets/projects/google.png'

function Projects() {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2  className='py-4'>What Ive Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
           <Projectitem title='Chat Clone (WhatsApp)' backgroundImg={whatsapp} projectUrl='/whatsapp' />
           <Projectitem title='Twitter Clone' backgroundImg={twitter} projectUrl='/twitter' />
           <Projectitem title='Airbnb Clone' backgroundImg={airbnb} projectUrl='/airbnb' />
           <Projectitem title='Google Clone' backgroundImg={google} projectUrl='/google' />
            </div>
        </div>

    </div>
  )
}

export default Projects