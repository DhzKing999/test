import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const NavBar = () =>
{

    const navbarData = ['ABOUT US', 'HOW IT WORKS ?', 'CONTACT US']
    return (
        <>
            <header className='px-40 py-16 '>
                <nav className=' flex justify-evenly items-center '>
                    <h1>rosstech</h1>
                    <ul className=' flex justify-between'>
                        {navbarData.map((data) => <li>
                            <Button variant={"link"}>
                                {data}
                            </Button>
                        </li>)}
                    </ul>
                    <Button variant={"outline"} className=' rounded-full px-6'>Login</Button>
                </nav>
            </header>
        </>
    )
}

export default NavBar