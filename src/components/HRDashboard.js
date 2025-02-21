import React from 'react';
import './HRDashboard.css';  // Import the CSS file

function HRDashboard() {
  const promotionAnalytics = {
    totalPromotions: 120,
    promotionsByDepartment: {
      Technology: 45,
      Marketing: 30,
      Analytics: 25,
      Sales: 10,
      Operations: 10,
    },
    averagePromotionCycleTime: '6 months',
    promotionSuccessRate: '75%',
  };

  const auditLogs = [
    { id: 1, promotion: 'Senior Software Engineer', decision: 'Approved', reason: 'Based on performance and skills...', date: '2024-03-15' },
    { id: 2, promotion: 'Marketing Manager', decision: 'Pending', reason: 'Awaiting manager review...', date: '2024-03-18' },
    { id: 3, promotion: 'Data Scientist', decision: 'Rejected', reason: 'Insufficient experience in deep learning.', date: '2024-03-20' },
    { id: 4, promotion: 'Sales Director', decision: 'Approved', reason: 'Exceeded sales targets for three consecutive quarters.', date: '2024-03-22' },
  ];

  return (
    <div className="dashboard-container">
      {/* Dashboard Title */}
      <h2 className="dashboard-title">HR Dashboard</h2>

      {/* Promotion Analytics Section */}
      <div className="card">
        <h3 className="section-title">Promotion Analytics</h3>
        <p className="text">Total Promotions: <span>{promotionAnalytics.totalPromotions}</span></p>
        <p className="text">Average Promotion Cycle Time: <span>{promotionAnalytics.averagePromotionCycleTime}</span></p>
        <p className="text">Promotion Success Rate: <span>{promotionAnalytics.promotionSuccessRate}</span></p>

        {/* Promotions by Department */}
        <h4 className="section-title">Promotions by Department</h4>
        <div className="grid-container">
          {Object.entries(promotionAnalytics.promotionsByDepartment).map(([department, count]) => (
            <div key={department} className="grid-item">
              <p>{department}</p>
              <p>{count} Promotions</p>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Logs Section */}
      <div className="card">
        <h3 className="section-title">Audit Logs</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Promotion</th>
                <th>Decision</th>
                <th>Reason</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id}>
                  <td>{log.promotion}</td>
                  <td className={log.decision === 'Approved' ? 'approved' : log.decision === 'Rejected' ? 'rejected' : 'pending'}>
                    {log.decision}
                  </td>
                  <td>{log.reason}</td>
                  <td>{log.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
