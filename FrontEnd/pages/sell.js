import React from 'react'
import Link from 'next/link'

const sell = () => {
    return (
        <div>
            <p>Hello from sell page</p>
        <Link href='/'>
            <a>Home</a>
        </Link>
        </div>
    )
}

export default sell
