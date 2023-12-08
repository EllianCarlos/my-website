'use client'

import { Disclosure } from '@headlessui/react'

export function QuickAboutMe() {
    return (
        <Disclosure
            as="div"
            className="bg-secondary flex flex-col items-left justify-between max-w-xl p-6  rounded-xl box-border"
        >
            <h1 className="text-left text-2xl">// About me</h1>
            <div className="h-10"></div>
            <p>
                My name is Ellian Carlos, I'm a Software Engineer, math's
                student, graduated in Systems Information and currently pursuing
                a master's degree in Computational Modeling. My name is Ellian
                Carlos, I'm a Software Engineer, math's student, graduated in
                Systems Information and currently pursuing a master's degree in
                Computational Modeling.
                <br />
                <br />
                My name is Ellian Carlos, I'm a Software Engineer, math's
                student, graduated in Systems Information and currently pursuing
                a master's degree in Computational Modeling. My name is Ellian
                Carlos, I'm a Software Engineer, math's student, graduated in
                Systems Information and currently pursuing a master's degree in
                Computational Modeling.
                <br />
                <br />
                My name is Ellian Carlos, I'm a Software Engineer, math's
                student, graduated in Systems Information and currently pursuing
                a master's degree in Computational Modeling.......
            </p>

            <div className="mt-4 ml-auto">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent btn-primary px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none"
                > more...
                </button>
            </div>
        </Disclosure>
    )
}
