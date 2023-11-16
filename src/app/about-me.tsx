'use client'

import { Disclosure } from '@headlessui/react'

export default function AboutMe() {
    return (
        <Disclosure
            as="div"
            className="bg-black text-white mx-auto w-9/12 py-12 sm:py-28"
        >
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                        About Me
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
                        Hi there, 👋! My name is Ellian Carlos, I'm a Software
                        Engineer, math's student, graduated in Systems
                        Information and currently pursuing a master's degree in
                        Computational Modeling.
                        <br></br>
                        <br></br>
                        I'm a Backend Developer in{' '}
                        <a href="https://ciandt.com/">CI&T</a>, I love
                        technlogy, software architecture and systems design, I
                        also love solving problems and abstracting solutions.
                        I'm often found studying software architecture, clean
                        code and new languagens and tools. I have a very
                        restrict work ethic and always make a priority to
                        deliver software with quality.
                        <br></br>
                        <br></br>
                        I'm also a master's student in the{' '}
                        <a href="https://www.uff.br/">
                            Federal University Fluminense
                        </a>
                        , the masters program is in{' '}
                        <a href="http://mcct.uff.br/">
                            Computational Modeling for Science and Technology
                        </a>{' '}
                        and I'm my main interests is in computational modeling
                        for computation problems and bioinformatics.
                        <br></br>
                        <br></br>I love languages, both the humans and the
                        computer ones. Right now, I’m working with Typescript,
                        Javascript and Python. I’m learning Julia, Typescript
                        and Python. I want to learn Rust and Elixir. I also know
                        C/C++, but haven't used in production. About the human
                        languages, I’m fluent in Portuguese and English. I’m
                        currently learning Spanish and Japanese and I want to
                        learn Mandarim and French someday.
                        <br></br>
                        <br></br>
                        Besides the languages I’m working with I also use
                        Docker, AWS, SQL in my everyday work and many other
                        tools/languages. I'm also studying to achieve a AWS
                        certification.
                    </p>
                    <h2 className="m-6 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                        Hobbies and Interests
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
                        I love to watch football, the good one, and to play
                        competitive online games, but I do suck at it. I also
                        love to read and watch content about science and math, I
                        also like to play the guitar and the piano.
                    </p>
                </div>
            </div>
        </Disclosure>
    )
}
