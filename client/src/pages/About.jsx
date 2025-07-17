import FeatureCard from "../components/FeatureCard";

const About = () => {
    return (
        <div className="py-4 px-28 w-full max-w-8xl mx-auto">
            <section>
            <h1 className="text-4xl font-bold my-4 text-center">What is EventXchange?</h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to EventXchange, your go-to platform for discovering and managing events in your community. Our mission is to connect people through events, making it easier for you to find, share, and participate in activities that matter to you.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                EventXchange has something for everyone. Our user-friendly interface allows you to browse events by category, date, or location, ensuring you never miss out on what's happening around you.
            </p>
            <h2 className="text-2xl font-bold text-center">What We Stand For</h2>
            <div className="max-w-8xl mx-auto px-4 py-12 flex flex-row items-center justify-center gap-8 flex-wrap">
                <FeatureCard icon="🌟" title="Inclusivity" description="We welcome everyone and celebrate diverse backgrounds and ideas." />
                <FeatureCard icon="🤝" title="Connection" description="We help people build genuine relationships and strengthen communities." />
                <FeatureCard icon="🚀" title="Empowerment" description="We give you the tools to create, share, and participate in events that matter." />
            </div>
            <p className="text-lg text-gray-700 mb-6">
                We believe in the power of community and the importance of bringing people together. That's why we strive to provide a platform that not only helps you discover events but also allows you to create and share your own events with ease. From small meetups to grand celebrations, EventXchange is here to support your event journey.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Join us in building a vibrant community where events thrive and connections flourish. 
            </p>
            </section>
            <section>
                <h1 className="text-4xl font-bold my-4 text-center">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    This project is developed by a passionate team of developers as a part of the July 2025 freeCodeCamp hackathon. Our goal is to create a platform that enhances community engagement and makes event management accessible to everyone.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for choosing EventXchange, and we look forward to being part of your event experiences!
                </p>
            </section>

        </div>
    )
}

export default About;