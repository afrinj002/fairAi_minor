import React from 'react';
import './ManagerDashboard.css';  // Import the CSS file

function ManagerDashboard() {
  const candidates = [
    {
      id: 1,
      name: 'Alice Smith',
      role: 'Software Engineer',
      department: 'Technology',
      performanceScore: 4.5,
      biasScore: 0.1,
    },
    {
      id: 2,
      name: 'Bob Johnson',
      role: 'Data Analyst',
      department: 'Analytics',
      performanceScore: 4.2,
      biasScore: 0.3,
    },
    {
      id: 3,
      name: 'Charlie Davis',
      role: 'Marketing Specialist',
      department: 'Marketing',
      performanceScore: 4.8,
      biasScore: 0.05,
    },
    {
      id: 4,
      name: 'Diana Miller',
      role: 'Sales Executive',
      department: 'Sales',
      performanceScore: 4.1,
      biasScore: 0.4,
    },
    {
      id: 5,
      name: 'Ethan Wilson',
      role: 'Operations Manager',
      department: 'Operations',
      performanceScore: 3.9,
      biasScore: 0.25,
    },
    {
      id: 6,
      name: 'Fiona Clark',
      role: 'HR Specialist',
      department: 'Human Resources',
      performanceScore: 4.7,
      biasScore: 0.15,
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Manager Dashboard</h2>

      {/* Candidate Evaluation Section */}
      <h3 className="section-heading">Candidate Evaluation</h3>
      <div className="promotion-list">
        {candidates.map((candidate) => (
          <div className="promotion-card" key={candidate.id}>
            <h4>{candidate.name}</h4>
            <p><strong>Role:</strong> {candidate.role}</p>
            <p><strong>Department:</strong> {candidate.department}</p>
            <p><strong>Performance Score:</strong> {candidate.performanceScore}</p>
            
            {candidate.biasScore > 0.2 && (
              <div className="bias-alert">
                Warning: Potential bias detected for this candidate!
              </div>
            )}

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="btn btn-approve">Approve</button>
              <button className="btn btn-reject">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagerDashboard;
