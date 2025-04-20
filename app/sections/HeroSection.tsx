'use client'

import Button from '@/components/Button'
import MainSlider from '@/components/MainSlider'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {

  const isLgUp = useIsLgUp()
  
  return (
    <main className="pt-[160px] pb-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className='space-y-[32px] m-b-[163px]'>
            <h1 className="text-[40px] sm:text-[54px] font-heading font-bold text-foreground leading-tight">
              Become a <span className="text-primary">certified investor </span> 
              and start earning from real estate
            </h1>
            <p className="max-w-md mx-auto lg:mx-0">
              A step-by-step REI Institute program that helps you close your first real estate deal within 90 days — with expert guidance, community support, and proven strategies.
            </p>
            <div className='flex justify-center lg:hidden'>
              <div className='flex'>
              <div className="flex items-center -space-x-3">
                <Image
                  className="rounded-full border border-white border-[1px]"
                  src="/avatar1.png"
                  alt="avatar1"
                  width={50}
                  height={50}
                />
                <Image
                  className="rounded-full border border-white border-[1px] -tranform-[-20%]"
                  src="/avatar2.png"
                  alt="avatar2"
                  width={50}
                  height={50}
                />
                <Image
                  className="rounded-full border border-white border-[1px]"
                  src="/avatar3.png"
                  alt="avatar3"
                  width={50}
                  height={50}
                />
              </div>
              </div>
              <div>
                <p className='text-[20px] font-bold text-foreground'>16K +</p>
                <p className='text-[16px] text-foreground' >User Active</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start gap-4 mt-[56px]">
            <Button/>
          </div>
        </motion.div>

        {/* Visual preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl bg-white dark:bg-[#1f2937] p-4 sm:p-6 shadow-classic">
            <Image
              src="/images/hero-dashboard.png"
              alt="Dashboard preview"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
      <MainSlider/>
    </main>
  )
}


import { useEffect, useState } from 'react'

function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    const handler = (e: MediaQueryListEvent) => setIsLgUp(e.matches)

    setIsLgUp(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return isLgUp
}