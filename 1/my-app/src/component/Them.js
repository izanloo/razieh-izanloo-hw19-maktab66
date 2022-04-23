import React, { useEffect, useState } from "react"
import { BiMoon } from "react-icons/bi";

export default function Them() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const body = document.body
        if (darkMode === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return (
        <div onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}>
            <BiMoon /><span className="textThem">Dark mode</span>
        </div>
    )
}

