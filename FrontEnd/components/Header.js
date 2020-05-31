import React from 'react'
import Link from 'next/link';



const Header = () => {
    return (
        <div>
            <div>
                <h1>
                    <Link href='/'>
                        <a>ALWarass</a>
                    </Link>
                </h1>
            </div>
            
            <p>Navigation items </p>
            <p>Search</p>
        </div>
    )
}
export default Header