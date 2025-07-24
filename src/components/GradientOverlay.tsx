const GradientOverlay = () => {
    return (
        <>
            <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
        </>
    );
};

export default GradientOverlay;
