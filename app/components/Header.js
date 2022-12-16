import Head from "next/head";
import Link from 'next/link';
import React from 'react';

const Header = () => (
  <div>
    <Head>
      <title>Web app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <nav>
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          {/* Home button */}
          <div className="flex-shrink-0">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Home
            </Link>
          </div>
          {/* Contact button */}
          <div className="flex-shrink-0 -ml-px">
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium leading-5 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              Contact
            </Link>
          </div>
          {/* About button */}
          <div className="flex-shrink-0 -ml-px">
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium leading-5 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
              About
            </Link>
          </div>
          {/* Articles button */}
          <div className="flex-shrink-0 -ml-px">
            <Link href="/articles" className="px-3 py-2 rounded-md text-sm font-medium leading-5 hover:text-white hover:bg-gray-700 focus:outline-none focus::text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                Articles
            </Link>
        </div>
       </div>
      </div>
    </div>
  </nav>
  </div>
);

export default Header;