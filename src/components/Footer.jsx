import { Link } from '@nextui-org/react'
import React from 'react'
import { LogoNav } from './Navbar'

const Footer = () => {
  return (
    <div>
        

<footer class="bg-cyan-900 rounded-lg shadow dark:bg-gray-900 p-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex md:mx-0  sm:items-center sm:justify-between">
          <div className='mx-[-15px]'>
          <Link
              className=" text-xs md:text-lg text-inherit text-left pb-4  text-white"
              href="/"
            >
              <LogoNav />
              StudentHub Connect
            </Link>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-xs md:text-sm  text-white sm:mb-0 dark:text-white">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 " />
        <div className='flex justify-end'>
         <span class="block text-xs md:text-sm text-white sm:text-center dark:text-white">© 2023 <a href="/" class="hover:underline">SudentHub Connect™</a>. All Rights Reserved.</span>

        </div>
            </div>
</footer>


    </div>
  )
}

export default Footer