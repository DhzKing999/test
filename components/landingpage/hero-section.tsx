import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { TrucKImage } from '@/public/assets'

const HeroSection = () =>
{
    const heroData = {
        title: "Revolutionize Your Supply Chain.",
        description: "Welcome to Rosstech, the ultimate platform for seamless, transparent and efficient trading of fruits and vegetables. Connect producers, suppliers, transport providers, and retailers in a unified system to manage quality, track deliveries, and resolve disputes effortlessly.'",
    }
    return (
        <>
            <section className=' flex justify-evenly pt-10 '>
                {/* hero text */}
                <div className=" flex flex-col w-[50%] space-y-4">
                    <h1 className=' text-4xl font-bold'>{heroData.title}</h1>
                    <p>{heroData.description}</p>
                    <Button className=' w-fit'>Get Started</Button>
                </div>
                {/* hero image */}
                <div className="">
                    <Image src={TrucKImage} alt='hero image' width={500} height={500} />
                </div>
            </section>

        </>
    )
}

export default HeroSection