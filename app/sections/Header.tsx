'use client'

import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {

    return(
        <header className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
           <ThemeToggle/>
        </header>
    )
}