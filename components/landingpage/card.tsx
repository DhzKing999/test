

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { HowImage1 } from '@/public/assets'

type CardTypes = {
    title: string
    description: string
    link: string
    imageLink: string
    index: number
}
const HowItWorkCard = ({ title, description, link, imageLink, index }: CardTypes) =>
{
    return (
        <div className={`flex justify-evenly pt-20 ${index % 2 != 0 ? "flex-row-reverse" : "flex-row"} `}>
            {/* steps */}
            <div className=' w-[55%] space-y-4 '>

                <h1 className=' underline text-purple-500 text-4xl font-bold'>{title}</h1>
                <p className=' w-[90%]'>
                    {description}
                </p>
                <Button className=' bg-transparent border-none text-purple-400' variant={"outline"} >{link}</Button>
            </div>
            {/* image */}
            <div >
                <Image src={imageLink} alt='hero image' width={500} height={500} />
            </div>
        </div>
    )
}

export default HowItWorkCard