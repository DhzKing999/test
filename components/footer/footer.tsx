import React from 'react'
import { Button } from '../ui/button'

export const Footer = () =>
{
    return (
        <footer className="bg-black text-muted-foreground py-8 md:py-12">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2">
                    <div className=" font-bold text-2xl">rosstech</div>
                    <div>Connecting Your Supply Chain Seamlessly</div>
                    <div>Contact us</div>
                    <div>comapny@gmail.com</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {
                        ['facebook', 'twitter', 'instagram', 'linkedin'].map((data) => (
                            <div>
                                <Button className=' text-white' variant={"link"}>{data}</Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}
