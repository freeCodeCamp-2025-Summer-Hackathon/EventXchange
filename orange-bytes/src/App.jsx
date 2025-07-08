import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/auth/RegisterPage';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* Add other routes */}
            </Routes>
          </main>
          
          <footer className="py-4 text-center text-gray-600">
            <p>© 2024 Your App Name. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;