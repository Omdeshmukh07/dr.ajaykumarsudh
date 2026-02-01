import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StaffPortal = () => {
    const navigate = useNavigate();

    // State representing the "Task Assign" and "Work Status" from your sketch
    const [tasks, setTasks] = useState([
        { id: 'TKT-001', location: 'Room 302', task: 'Fan Repair', priority: 'High', status: 'Assigned' },
        { id: 'TKT-005', location: 'Wing B - Bathroom', task: 'Pipe Leakage', priority: 'Medium', status: 'In Progress' }
    ]);

    const updateStatus = (id, newStatus) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Staff Header */}
            <nav className="bg-black text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-[#ff5200] w-8 h-8 rounded flex items-center justify-center font-bold italic">S</div>
                    <h1 className="text-xl font-bold">ResiFix <span className="text-gray-400">Staff</span></h1>
                </div>
                <button onClick={() => navigate('/')} className="text-sm bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition-all">
                    Logout
                </button>
            </nav>

            <div className="max-w-5xl mx-auto p-6">
                <header className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">My Assigned Tasks</h2>
                    <p className="text-gray-500">Manage your daily maintenance work orders</p>
                </header>

                <div className="grid gap-4">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">

                            {/* Task Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold text-white uppercase ${task.priority === 'High' ? 'bg-red-500' : 'bg-yellow-500'
                                        }`}>
                                        {task.priority} Priority
                                    </span>
                                    <span className="text-xs font-mono text-gray-400">#{task.id}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{task.task}</h3>
                                <p className="text-sm text-gray-600">Location: <span className="font-semibold">{task.location}</span></p>
                            </div>

                            {/* Status Controls - Implements your "Work Status" logic */}
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="text-right mr-4 hidden md:block">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Current Status</p>
                                    <p className="text-sm font-bold text-[#ff5200]">{task.status}</p>
                                </div>

                                {task.status === 'Assigned' && (
                                    <button
                                        onClick={() => updateStatus(task.id, 'In Progress')}
                                        className="bg-black text-white px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                                    >
                                        Start Work
                                    </button>
                                )}

                                {task.status === 'In Progress' && (
                                    <button
                                        onClick={() => updateStatus(task.id, 'Resolved')}
                                        className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                                    >
                                        Mark as Resolved
                                    </button>
                                )}

                                {task.status === 'Resolved' && (
                                    <span className="flex items-center gap-2 text-green-600 font-bold text-sm">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        Work Complete
                                    </span>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StaffPortal;