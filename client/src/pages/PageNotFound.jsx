const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)]">
      <h1 className="text-8xl font-bold text-center mb-8">404</h1>
      <h2 className="text-lg text-center mb-4">Page Not Found</h2>
      <p className="text-center text-gray-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <p className="text-center text-gray-600">
        Please check the URL or return to the <a href="/" className="text-darkTangerine hover:underline">homepage</a>.
      </p>
    </div>
  )
};

export default PageNotFound;