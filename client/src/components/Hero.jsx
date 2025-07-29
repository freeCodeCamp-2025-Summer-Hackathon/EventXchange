import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App"

const Hero = () => {
    const [user] = useContext(UserContext);

    return (
        <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6 text-center mb-[-3rem]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                    Welcome to EventXchange
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                        Your one-stop platform for discovering and sharing events in your community.
                </p>
                <div className="flex justify-center gap-4">
                    {user && (
                        <Link className="bg-darkTangerine text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 transition cursor-pointer" to="/signup">Get Started</Link>

                    )
                }
                    <Link className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition cursor-pointer" to="/about">Learn More</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
