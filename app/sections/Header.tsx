'use client'

import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {

    return(
        <header className="max-w-[1280px] mx-auto">
           <ThemeToggle/>
        </header>
    )
}