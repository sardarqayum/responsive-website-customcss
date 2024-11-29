import React from "react";
import Link from "next/link";
import {FaShoppingCart} from "react-icons/fa"

const Header =()=>{
    return(
        <header className="header">
            <h1 className="logo">Brands-Shop</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/NewDesgn">NewDesgn</Link>
                <Link href="/contact">Contact</Link>
                <FaShoppingCart style={{color:"white", fontSize:"25px"}} />
            </nav>
        </header>
    )
}

export default Header;