import React from 'react'

import { img1, img2, img3, img4, img5 } from '../assets'

const Destination = () => {
  return (
    <div className='bg-base-200'>
        <h1 className='text-4xl font-bold capitalize text-gray-800 text-center'>all Exclusive Place</h1>
        <p className='text-lg text-gray-600 mt-6 text-center'>On location best photoshoot</p>
        <ul className='grid grid-cols-4 gap-4 m-4'>
            <li className='fgrid'>
                <img className='object-cover block w-full h-full' src={img2} />
            </li>
            <li>
                <img className='object-cover h-full w-full' src={img3}/>
            </li>
            <li>
                <img className='object-cover w-full h-full' src={img4}/>
            </li>
            <li>
                <img className='object-cover w-full h-full' src={img5}/>
            </li>
            <li>
                <img className='object-cover w-full h-full' src={img1}/>
            </li>
        </ul>
    </div>
  )
}

export default Destination