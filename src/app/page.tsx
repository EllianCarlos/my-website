import AboutMe from './about-me'
import Nav from './navigation'

export default function Home() {
    return (
        <>
            <header className="flex flex-col items-center justify-between">
                <Nav></Nav>
            </header>
            <main className='min-w-full'>
                <AboutMe></AboutMe>
            </main>
        </>
    )
}
