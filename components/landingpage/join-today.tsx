import React from 'react'
import RegisterForm from './form'
import Image from 'next/image'
import { LastImg } from '@/public/assets'

const JoinToday = () =>
{
    return (
        <section className=' py-10'>
            <div className="">
                <h1 className=' text-4xl py-4 text-center  font-bold'>Join Rosstech Today</h1>
                <p className=' text-center'>Transform your trading operations with Rosstech. Simplify processes, improve communication, and ensure top-quality standards.</p>
            </div>

            <div className=" flex justify-evenly items-center ">
                <RegisterForm />
                <Image src={LastImg} alt='hero image' width={600} height={600} />
            </div>

        </section>
    )
}

export default JoinToday