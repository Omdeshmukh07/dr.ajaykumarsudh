import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentPortal = () => {
    const navigate = useNavigate();

    // State to manage list of complaints (Requirement/Complaint)
    const [complaints, setComplaints] = useState([
        { id: 'TKT-001', topic: 'Electricity', desc: 'Fan regulator broken', status: 'In Progress', priority: 'High' },
        { id: 'TKT-002', topic: 'Plumbing', desc: 'Leakage in bathroom tap', status: 'Resolved', priority: 'Medium' }
    ]);

    return (
        <div className="min-h-screen bg-[#f8f9fb] font-sans">
            {/* Top Navigation */}
            <nav className="bg-black p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                    <div className="bg-[#ff5200] w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white">R</div>
                    <h1 className="text-xl font-bold text-white tracking-tight">ResiFix <span className="text-[#ff5200]">Student</span></h1>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="text-white/70 hover:text-[#ff5200] text-sm font-medium transition-colors"
                >
                    Logout
                </button>
            </nav>

            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left: Raise Requirement Form */}
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Raise a New Ticket</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Issue Category</label>
                            <select className="w-full p-3 rounded-xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#ff5200] outline-none transition-all">
                                <option>Plumbing</option>
                                <option>Electricity</option>
                                <option>Internet/Wi-Fi</option>
                                <option>Cleaning</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Description</label>
                            <textarea
                                className="w-full p-3 rounded-xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-[#ff5200] outline-none h-24 transition-all"
                                placeholder="Details of the requirement..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-[#ff5200] text-white py-3 rounded-xl font-bold shadow-lg shadow-orange-200 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Submit Complaint
                        </button>
                    </form>
                </div>

                {/* Right: Work Status & Feedback */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-bold text-gray-800">Your Work Status Tracking</h2>

                    {complaints.map((item) => (
                        <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="font-bold text-gray-800">{item.topic} Request</h3>
                                    <p className="text-xs text-gray-400">{item.id} • Assigned Priority: {item.priority}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${item.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-[#ff5200]'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>

                            {/* Progress Bar (Visualizing the Workflow) */}
                            <div className="flex items-center justify-between mb-6 px-2">
                                {['Submit', 'Assigned', 'In Progress', 'Resolved'].map((step, i) => (
                                    <div key={step} className="flex flex-col items-center flex-1 relative">
                                        <div className={`w-3 h-3 rounded-full z-10 ${item.status === 'Resolved' || i < 2 ? 'bg-[#ff5200]' : 'bg-gray-200'
                                            }`}></div>
                                        <span className="text-[9px] mt-2 font-bold text-gray-400 uppercase tracking-tighter">{step}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Feedback Loop (Enabled only when Resolved) */}
                            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-400">Feedback:</span>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <button
                                            key={s}
                                            className={`text-xl ${item.status === 'Resolved' ? 'text-yellow-400 cursor-pointer' : 'text-gray-100 cursor-default'}`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default StudentPortal;