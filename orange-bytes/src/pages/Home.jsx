import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
    return (
        <>  
            <Hero />
            <div className="max-w-8xl mx-auto px-4 py-12 flex flex-row items-center justify-center gap-8 flex-wrap">
                <FeatureCard icon="🌟" title="Discover Events" description="Find and explore events happening around you." />
                <FeatureCard icon="📅" title="Manage Your Schedule" description="Keep track of your events and never miss out." />
                <FeatureCard icon="🤝" title="Connect with People" description="Meet new friends and network with like-minded individuals." />
            </div>
            
        </>
    );
}

export default Home;