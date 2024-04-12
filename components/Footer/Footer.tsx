import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-gray-300 mt-10'>

        <div className='mx-auto max-w-5xl px-4 py-8 '>
            <div className='flex justify-center '>
                <Image
                src="/logo.png"
                width={200}
                height={300}
                alt='logo'
                />
            </div>

            <p className='mx-auto mt-6 max-w-3xl text-center text-gray-500 text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptas molestias adipisci quasi, ratione placeat aut eius aliquam ut, facilis obcaecati delectus natus dicta ab, incidunt quis veniam voluptates asperiores.


            </p>

            <ul className='mt-6 flex flex-wrap gap-8 justify-center '>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'>About</a>
                </li>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'>Carreers</a>
                </li>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'>History</a>
                </li>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'>Mission</a>
                </li>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'>Services</a>
                </li>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'>Project</a>
                </li>

                <li>
                    <a className='text-gray-800 hover:text-gray-950'>Blog</a>
                </li>

                  <li>
                    <a className='text-gray-800 hover:text-gray-950'>Contact</a>
                </li>



            </ul>

            <ul className='mt-6 flex flex-wrap gap-8 justify-center '>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'><FaFacebook  className='h-5 w-5'/></a>
                </li>
                <li>
                    <a className='text-gray-800 hover:text-gray-950'><FaTwitterSquare   className='h-5 w-5'/></a>
                </li>
                <li>
                <a className='text-gray-800 hover:text-gray-950'><FaGithub    className='h-5 w-5'/></a>
                </li>
                <li>
                <a className='text-gray-800 hover:text-gray-950'><FaYoutube     className='h-5 w-5'/></a>
                </li>
              



            </ul>



        </div>



    </footer>
  )
}

export default Footer