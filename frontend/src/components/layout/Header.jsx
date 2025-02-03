import React from 'react';

export default function Header() {
    const home = [
        { name: 'Home', href: '/' },
    ]

    const navItems = [
        { name: 'New Record', href: '/new-record' },
        { name: 'Profile' },
    ]

    return (
        <header className="bg-[#1e1e1e] py-5 mb-12">
            <nav className="flex flex-wrap justify-between max-w-7xl mx-auto px-7">
                <div>
                    {home.map(item => (
                        <a key={item.name} href={item.href} className="text-base text-white hover:text-slate-700 rounded-md font-medium">{item.name}</a>
                    ))}
                </div>
                <div>
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} className="text-base text-white hover:text-slate-700 px-7 rounded-md font-medium" >{item.name}</a>
                    ))}
                </div>
            </nav>
        </header>
    )
}

