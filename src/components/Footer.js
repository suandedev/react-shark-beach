import React from 'react'

import { FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 p-4 bg-gray-800 text-gray-100'>
        <h1 className='text-sky-500 text-3xl font-semibold capitalize'>Shark Beach</h1>
        <ul className='flex flex-row folink1 space-x-2'>
            <li>
                <a href='#'>About</a>
            </li>
            <li>
                <a href='#'>Partnership</a>
            </li>
            <li>
                <a href='#'>Careers</a>
            </li>
            <li>
                <a href='#'>Newsrooms</a>
            </li>
            <li>
                <a href='#'>Advertising</a>
            </li>
        </ul>
        <ul className='flex flex-row space-x-2 justify-end items-center'>
            <li>
                <FaFacebook className='icon' />
            </li>
            <li>
                <FaInstagram className='icon'/>
            </li>
            <li>
                <FaTwitter className='icon'/>
            </li>
            <li>
                <FaPinterest className='icon'/>
            </li>
            <li>
                <FaYoutube className='icon'/>
            </li>
        </ul>
        <ul className='flex flex-row space-x-2 justify-end'>
            <li>
                <a href='#'>Contact</a>
            </li>
            <li>
                <a href='#'>Term</a>
            </li>
            <li>
                <a href='#'>policy</a>
            </li>
            <li>
                <a href='#'>privacy</a>
            </li>
            <li>
                <a href='#'>pricing</a>
            </li>
            <li>
                <a href='#'>contact</a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer