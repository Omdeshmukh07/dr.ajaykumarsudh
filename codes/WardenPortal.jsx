import React from 'react';
import { useNavigate } from 'react-router-dom';

const WardenPortal = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-black border-l-4 border-[#ff5200] pl-4">Warden Administration</h1>
                <button onClick={() => navigate('/')} className="bg-gray-200 px-4 py-2 rounded-lg text-sm">Logout</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats Summary */}
                <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-red-500">
                    <p className="text-gray-500 text-sm">Pending Complaints</p>
                    <h2 className="text-3xl font-bold">12</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-yellow-500">
                    <p className="text-gray-500 text-sm">In Progress</p>
                    <h2 className="text-3xl font-bold">05</h2>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-green-500">
                    <p className="text-gray-500 text-sm">Resolved Today</p>
                    <h2 className="text-3xl font-bold">08</h2>
                </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-100 font-bold text-gray-700">Recent Status of Works</div>
                <table className="w-full text-left">
                    <thead className="text-xs uppercase bg-gray-50 text-gray-500">
                        <tr>
                            <th className="p-4">Student Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Priority</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="p-4 font-medium">Shree</td>
                            <td className="p-4">Electricity</td>
                            <td className="p-4"><span className="text-red-500 font-bold">High</span></td>
                            <td className="p-4"><button className="bg-black text-white px-3 py-1 rounded text-xs">Assign Staff</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WardenPortal;

