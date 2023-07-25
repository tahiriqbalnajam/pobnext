import React from 'react';
import Link from 'next/link'

export default function Header() {
    return (
      <>

        <nav>
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul class="flex flex-col font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                    <Link href="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ED1C24] md:p-0 dark:text-white md:dark:hover:text-[#ED1C24] dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                    </li>
                    <li>
                    <Link href="/page/briefprofile" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ED1C24] md:p-0 dark:text-white md:dark:hover:text-[#ED1C24] dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Brief Profile</Link>
                    </li>
                    <li>
                    <Link href="/page/philosophy" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ED1C24] md:p-0 dark:text-white md:dark:hover:text-[#ED1C24] dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Philosophy</Link>
                    </li>
                    <li>
                    <Link href="/page/contactus" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ED1C24] md:p-0 dark:text-white md:dark:hover:text-[#ED1C24] dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Contact us</Link>
                    </li>
                    <li>
                    <Link href="/page/corevalues" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ED1C24] md:p-0 dark:text-white md:dark:hover:text-[#ED1C24] dark:hover:bg-white dark:hover:text-white md:dark:hover:bg-transparent">Core Values</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>


      </>
      
      
    )
}