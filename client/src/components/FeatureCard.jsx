const FeatureCard = ({icon, title, description}) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow-md w-full max-w-sm h-60 flex flex-col items-center">
            <div className="flex items-center mb-4">
                <div className="text-darkTangerine text-3xl mr-4">{icon}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default FeatureCard;
