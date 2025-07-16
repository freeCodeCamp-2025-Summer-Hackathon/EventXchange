import { useContext, useState } from 'react';
import { UserContext } from '../App.jsx';

const Login = () => {
    const [_user, setUser] = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (setFn, event) => {
        setFn(event.currentTarget.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!password || !username) return;
        const u = fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })

        if (u) {
            setUser(u)
            // TODO: use a router parameter to determine where to redirect to
            // while using "/" as a fallback or default.
            redirect("/")
        } else {
            // TODO: an error happened so we should tell the user
            alert('Invalid credentials. Try again.')
        }
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-6rem)] bg-gray-100 ">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form className="space-y-4" onSubmit={(event) => handleLogin(event)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full rounded"
                            type="email"
                            id="email"
                            required
                            value={username}
                            onInput={(event) => handleInput(setUsername, event)}
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
                            value={password}
                            onInput={(event) => handleInput(setPassword, event)}
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer w-full" type="submit">
                        Login
                    </button>
                    <p className="mt-4 text-sm text-center">
                        Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default Login;