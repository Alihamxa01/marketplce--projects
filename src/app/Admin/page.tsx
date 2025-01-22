import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Management */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Manage Products</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Products</button>
          </div>

          {/* Order Management */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Manage Orders</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Orders</button>
          </div>

          {/* User Management */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Manage Users</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Users</button>
          </div>

          {/* Category Management */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Manage Categories</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Categories</button>
          </div>
        </div>

        {/* Analytics & Renewal Tools */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Analytics Section */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Analytics</h2>
            <p className="text-sm text-gray-600">View detailed analytics about your platform performance.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Analytics</button>
          </div>

          {/* Renewal Dates Section */}
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold mb-2">Renewal Dates</h2>
            <p className="text-sm text-gray-600">Manage subscription and renewal schedules.</p>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Manage Renewals</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
