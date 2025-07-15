const Hero = () => {

    const handleGetStarted = () => {
        window.location.href = "/signup";
    };

    const handleLearnMore = () => {
        window.location.href = "/about";
    };

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-center mb-[-3rem]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                    Welcome to EventXchange
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                        Your one-stop platform for discovering and sharing events in your community.
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition cursor-pointer"
                        onClick={handleGetStarted}
                    >
                        Get Started
                    </button>
                    <button 
                        className="border border-gray-400 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition cursor-pointer" 
                        onClick={handleLearnMore}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
