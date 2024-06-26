import React from 'react'
import { HowImage1, HowImage2, HowImage3, HowImage4 } from '@/public/assets'
import HowItWorkCard from './card'

const HowItWorksSection = () =>
{

    const howItWorksData = {
        title: "How it works ?",
        description: "Learn how Rosstech transforms the trading of fruits and vegetables by connecting producers, suppliers, transport providers, and retailers through our unified platform. Our step-by-step video guides will walk you through the entire process, ensuring you understand how to make the most of FreshTrade.",
        steps: [
            {
                title: "Sign Up",
                description: "Create your account tailored to your role—producer, supplier, transport provider, or retailer. ",
                link: "“Watch the video to see how easy it is to get started.”",
                image: HowImage1,
            },
            {
                title: "Centralized Dashboard",
                description: " Connect producers, suppliers, transport providers, and retailers in a unified system to manage quality, track deliveries, and resolve disputes effortlessly.",
                link: " “See how the centralized dashboard simplifies your workflow.”",
                image: HowImage2,
            },
            {
                title: "Real-Time Updates",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, assumenda.",
                link: " “See how the centralized dashboard simplifies your workflow.”",
                image: HowImage3,
            },
            {
                title: "Efficient Dispute Resolution",
                description: "Handle quality or quantity disputes swiftly through our streamlined support case system. Upload documents, communicate with relevant parties, and work towards automated resolutions.",
                link: " “See how the centralized dashboard simplifies your workflow.”",
                image: HowImage4
                ,
            }
        ]
    }
    return (
        <>
            <section className=' flex flex-col justify-center items-center'>
                <div className=" w-[80%] space-y-2">
                    <h1 className=' text-center text-4xl font-bold'>{howItWorksData.title}</h1>
                    <p className=' text-center pt-4'>{howItWorksData.description}</p>
                </div>
                {/* how it works */}
                <div className=" flex justify-evenly  flex-col pt-10">
                    {howItWorksData.steps.map((data, index) => (
                        // @ts-ignore
                        <HowItWorkCard index={index} title={data.title} description={data.description} link={data.link} imageLink={data.image} />
                    ))}
                </div>
            </section>

        </>
    )
}

export default HowItWorksSection