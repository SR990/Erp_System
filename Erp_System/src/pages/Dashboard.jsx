// src/pages/Dashboard.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const pieData = {
    labels: ['Pending', 'Approved', 'Completed'],
    datasets: [
      {
        data: [80, 370, 50],
        backgroundColor: ['#fbbf24', '#10b981', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 w-full p-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Welcome, Mr. Otor John</h2>
          <p className="text-sm text-gray-500">Today is Saturday, 13th November 2022</p>
        </div>
        <div className="flex items-center gap-3">
          <span>Otor John</span>
          <div className="w-10 h-10 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ['250', 'Total number of staff', '↑ 12 more than last quarter', 'green'],
          ['100', 'Total application', '↓ 6.2% lower than last quarter', 'red'],
          ['10', 'Total projects', '↑ 2 more than last quarter', 'green'],
          ['10', 'Total departments', '', 'gray'],
        ].map(([count, label, note, color], idx) => (
          <div key={idx} className="bg-white shadow-sm p-4 rounded border">
            <div className="text-2xl font-bold">{count}</div>
            <div className="text-gray-600">{label}</div>
            {note && (
              <div className={`text-xs mt-1 ${color === 'green' ? 'text-green-500' : 'text-red-500'}`}>
                {note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tables and Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Memo Table */}
        <div className="bg-white p-4 rounded shadow-sm overflow-x-auto">
          <h3 className="font-semibold mb-2">Memo</h3>
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th>S/N</th><th>Memo Title</th><th>Sent From</th><th>Sent To</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['01', 'Operations memo', 'Otor John', 'Ibrahim Sadik', 'Pending'],
                ['02', 'Operations project memo', 'Fatima Funki', 'Shola Akinola', 'Approved'],
                ['03', 'Project onboard notice', 'Otor John', 'James Emeka', 'Approved'],
                ['04', 'Operations memo', 'Ibrahim Musa', 'Otor John', 'Approved'],
              ].map(([sn, title, from, to, status]) => (
                <tr key={sn} className="border-b">
                  <td>{sn}</td><td>{title}</td><td>{from}</td><td>{to}</td>
                  <td className={`text-xs ${status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Staff List Table */}
        <div className="bg-white p-4 rounded shadow-sm overflow-x-auto">
          <h3 className="font-semibold mb-2">Staff List</h3>
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 border-b">
              <tr><th>S/N</th><th>Staff Name</th><th>Role</th><th>Department</th></tr>
            </thead>
            <tbody>
              {[
                ['01', 'Jonathan Ismaila Gajie', 'Admin', 'Human Resource Dept.'],
                ['02', 'Ikenzy Obinna', 'Admin', 'Management'],
                ['03', 'Osadebe Oluwaseyi', 'HOD IT', 'People and Operation'],
                ['04', 'Christina Ebere', 'HOD Account', 'Accounts'],
              ].map(([sn, name, role, dept]) => (
                <tr key={sn} className="border-b">
                  <td>{sn}</td><td>{name}</td><td>{role}</td><td>{dept}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Vouchers */}
        <div className="bg-white p-4 rounded shadow-sm overflow-x-auto">
          <h3 className="font-semibold mb-2">Payment Vouchers</h3>
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 border-b">
              <tr><th>S/N</th><th>Subject</th><th>Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              {[
                ['01', 'Request for FAKS Oct 2022', '25/10/2022', 'Pending'],
                ['02', 'Request for project proposal fee', '19/10/2022', 'Approved'],
                ['03', 'Request for FAKS Oct 2022', '10/10/2022', 'Approved'],
                ['04', 'Request for project proposal fee', '02/10/2022', 'Pending'],
              ].map(([sn, subject, date, status]) => (
                <tr key={sn} className="border-b">
                  <td>{sn}</td><td>{subject}</td><td>{date}</td>
                  <td className={`text-xs ${status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow-sm flex flex-col justify-between">
          <h3 className="font-semibold mb-2">Staff Applications Card</h3>
          <div className="mb-2 text-gray-600">500 Total applications</div>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
