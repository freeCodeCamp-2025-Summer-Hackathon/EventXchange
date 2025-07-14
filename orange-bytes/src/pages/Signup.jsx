const Signup = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-6rem)] bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                <form className="space-y-4">
                    <div className = "mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="username">
                            Full Name
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded"
                            type="text"
                            id="username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded"
                            type="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded"
                            type="password"
                            id="password"
                            required
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer w-full" type="submit">
                        Sign Up
                    </button>
                    <p className="mt-4 text-sm text-center">
                        Already have an account? <a href="/login" className="text-blue-500">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;