import React from 'react';
import './EmployeeDashboard.css';  // Import the CSS file

function EmployeeDashboard() {
  const promotionOpportunities = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Chicago, IL',
    },
    {
      id: 4,
      title: 'Sales Director',
      department: 'Sales',
      location: 'Los Angeles, CA',
    },
    {
      id: 5,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Houston, TX',
    },
    {
      id: 6,
      title: 'HR Business Partner',
      department: 'Human Resources',
      location: 'Boston, MA',
    },
  ];

  const feedbackInsights = [
    'Your last promotion review suggested improving leadership skills.',
    'Consider enrolling in the Strategic Leadership course.',
    'Peer reviews indicate strong problem-solving skills.',
    'You are in the top 10% of performers in your department.',
  ];

  const learningPathways = [
    {
      id: 1,
      title: 'Advanced Leadership Training',
      description: 'Develop strategic leadership and decision-making skills.',
    },
    {
      id: 2,
      title: 'Technical Certification in AI & ML',
      description: 'Gain hands-on experience in Artificial Intelligence and Machine Learning.',
    },
    {
      id: 3,
      title: 'Negotiation and Influence',
      description: 'Master the art of negotiation for career growth.',
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Employee Dashboard</h2>

      {/* Promotion Opportunities Section */}
      <h3 className="section-heading">Promotion Opportunities</h3>
      <div className="promotion-list">
        {promotionOpportunities.map((opportunity) => (
          <div className="promotion-card" key={opportunity.id}>
            <h4>{opportunity.title}</h4>
            <p><strong>Department:</strong> {opportunity.department}</p>
            <p><strong>Location:</strong> {opportunity.location}</p>
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>

      {/* Feedback & Insights Section */}
      <div className="feedback-section">
        <h3 className="section-heading">Feedback & Insights</h3>
        <ul>
          {feedbackInsights.map((feedback, index) => (
            <li key={index}>{feedback}</li>
          ))}
        </ul>
      </div>

      {/* Learning Pathways Section */}
      <div className="learning-pathways">
        <h3 className="section-heading">Recommended Learning Pathways</h3>
        {learningPathways.map((pathway) => (
          <div className="learning-card" key={pathway.id}>
            <h4>{pathway.title}</h4>
            <p>{pathway.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
