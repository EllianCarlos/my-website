'use client'

import { Disclosure } from '@headlessui/react'

const navigation = [
    { name: 'About Me', href: '#', current: true },
    { name: 'Portifolio', href: '#', current: false },
    { name: 'Blog Posts', href: '#', current: false },
    { name: 'Socials and Links', href: '#', current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    return (
        <Disclosure as="nav" className="bg-gray-800 w-full">
            {({ open }) => <></>}
        </Disclosure>
    )
}
