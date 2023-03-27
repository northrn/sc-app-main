import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]  

export default function Home() {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        {/* <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d1f1b1" />
              <stop offset={1} stopColor="#9013fe" />
            </linearGradient>
          </defs>
        </svg> */}
        <svg width="max" height="815px" viewBox="0 0 802 714" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <defs>
        <linearGradient x1="-25.2235763%" y1="18.1846317%" x2="71.6251653%" y2="-120.574526%" id="linearGradient-1">
            <stop stop-color="#4a47ff" offset="10%"></stop>
            <stop stop-color="#5effd5" offset="34.411737%"></stop>
            <stop stop-color="#5effd5" offset="44.2621971%"></stop>
            <stop stop-color="5effd5" offset="23%"></stop>
        </linearGradient>
        <filter x="-8.2%" y="-27.1%" width="116.4%" height="154.1%" filterUnits="objectBoundingBox" id="filter-2">
            <feGaussianBlur stdDeviation="50" in="SourceGraphic"></feGaussianBlur>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Email-Mockup-Copy-8" transform="translate(0.000000, -1240.000000)" fill="url(#linearGradient-1)">
            <path d="M-388,1518.42504 L-388,1880.50282 C223.503203,1847.74475 556.219138,1815.69331 610.147805,1784.34852 C691.040806,1737.33133 825.819558,1684.1427 908.899786,1725.64772 C976.949918,1759.64404 1151.3752,1653.59072 1432.17563,1407.48776 C1473.02895,1505.37346 1343.29863,1517.14991 1042.98468,1442.81712 C951.724498,1420.22867 424.542737,1655.48353 240.645195,1422.57959 C118.046834,1267.31029 -91.501564,1299.25877 -388,1518.42504 Z" id="Path-3-Copy-2" filter="url(#filter-2)" transform="translate(525.756822, 1603.251409) scale(-1, -1) translate(-525.756822, -1603.251409) "></path>
        </g>
    </g>
</svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel Focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding.{' '}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-zinc-900 tracking-tight sm:text-center sm:text-6xl">
                  Data to enrich your online business
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-blue-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700"
                  >
                    Get started
                    <span className="text-indigo-200 pl-4" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Live demo
                    <span className="text-gray-400 pl-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
            <div className="relative items-center py-0 px-8">
                <div className="py-6">
                    <span className="text-white text-7xl font-bold items-center">
                    Startup Club
                    </span>
                    <p className="text-center justify-center mx-auto pt-2">
                    The number one place to start and grow a business
                    </p>
                </div>
                <div className="flex flex-row gap-6 items-center">
                    <button className="rounded-2xl">

                    </button>
                    <button>

                    </button>
                </div>
                <div>
                
                    <img className="w-full"></img>
                </div>
            </div>
            </main></div> 

  )        
}

{/* <svg viewBox="0 0 700 700" width="700" height="700" opacity="0.69">
    
    <defs>
                    
                    <linearGradient gradientTransform="rotate(150, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ffflux-gradient"><stop stop-color="hsl(272, 99%, 54%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(90, 69%, 82%)" stop-opacity="1" offset="100%"></stop>
                    </linearGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    
                    <feTurbulence type="fractalNoise" baseFrequency="0.004 0.004" numOctaves="2" seed="4" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence">
                    </feTurbulence>
                    
                    <feGaussianBlur stdDeviation="20 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur">
                    </feGaussianBlur>
                    
                    <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend">
                    </feBlend>
                </filter>
                        </defs>
                        <rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect>
</svg> */}

