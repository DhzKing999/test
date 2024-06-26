import { ConnectionIgm, DataBaseImag, ManImag, MonitorImg } from '@/public/assets'
import Image from 'next/image'
import { features } from 'process'
import React from 'react'

const KeyFeature = () =>
{
    const KeyFeatureData = {
        title: "Key features of rosstech",
        features: [
            {
                title: "Centralized Data Repository",
                image: DataBaseImag,
            },
            {
                title: "Seamless Communication",
                image: ConnectionIgm,
            },
            {
                title: "Real-Time Updates",
                image: MonitorImg,
            }
        ]
    }
    return (
        <section className=' flex  justify-evenly w-full items-center '>
            <div className="">
                <Image src={ManImag} alt='hero image' width={500} height={500} />
            </div>
            <div className="">
                <h1 className=' text-4xl font-bold'>{KeyFeatureData.title}</h1>
                <div className=" flex flex-col space-y-4 pt-5">
                    {
                        KeyFeatureData.features.map((data) => (
                            <div className=" flex space-x-4 items-center">
                                <Image src={data.image} alt='hero image' width={20} height={20} />
                                <p>{data.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default KeyFeature