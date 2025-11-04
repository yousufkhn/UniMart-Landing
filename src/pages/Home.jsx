import Header from "../components/Header"
import Landing from "../components/Landing"
import VisionDemo from "../components/VisionDemo"

export default function Home(){
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Landing />
                <VisionDemo />
            </main>
        </div>
    )
}