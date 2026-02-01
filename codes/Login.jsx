import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [role, setRole] = useState('Student');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you'd check credentials here.
        // For now, we redirect based on the role state.
        if (role === 'Student') navigate('/student-dashboard');
        else if (role === 'Staff') navigate('/staff-dashboard');
        else if (role === 'Warden') navigate('/warden-dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#ff5200] p-8 text-center">
                    <h2 className="text-3xl font-bold text-white">ResiFix</h2>
                    <p className="text-white/80 mt-2">Hostel Maintenance Portal</p>
                </div>

                <div className="p-8">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="flex bg-gray-100 p-1 rounded-xl">
                            {['Student', 'Staff', 'Warden'].map((r) => (
                                <button
                                    key={r}
                                    type="button"
                                    onClick={() => setRole(r)}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${role === r ? 'bg-white shadow-sm text-[#ff5200]' : 'text-gray-500'
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{role} ID</label>
                            <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-[#ff5200]" placeholder={`Enter ${role} ID`} />
                        </div>

                        <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all">
                            Login as {role}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;