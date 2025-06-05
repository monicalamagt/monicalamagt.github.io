import './App.css';

function App() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Monica Lama</h1>
      </div>

      <div className="divider"></div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Column */}
        <div className="column">
          {/* Section 1 */}
          <div className="card">
            <h2>Section Title</h2>
            
            <div className="metric-large">
              <div className="metric-value">Main Metric</div>
              <div className="metric-label">Metric Label</div>
            </div>
            
            <div className="state-grid">
              <div className="state-abbreviations">
                <div className="state-abbr">Item 1</div>
                <div className="state-abbr">Item 2</div>
                <div className="state-abbr">Item 3</div>
                <div className="state-abbr">Item 4</div>
              </div>
              
              <div className="state-amounts">
                <div className="amount">Value 1</div>
                <div className="amount">Value 2</div>
                <div className="amount">Value 3</div>
                <div className="amount">Value 4</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="column">
          {/* Section 2 */}
          <div className="card">
            <h2>Section Title</h2>
            
            <div className="details-grid">
              <div className="detail-value">Value 1</div>
              <div className="detail-value">Value 2</div>
              <div className="detail-value">Value 3</div>
              
              <div className="detail-label">Label 1</div>
              <div className="detail-label">Label 2</div>
              <div className="detail-label">Label 3</div>
            </div>
            
            <div className="trend-section">
              <h3>Trend Title</h3>
              <div className="trend-grid">
                <div className="trend-value">Value 1</div>
                <div className="trend-value">Value 2</div>
                <div className="trend-value">Value 3</div>
                <div className="trend-value">Value 4</div>
                
                <div className="trend-label">Label 1</div>
                <div className="trend-label">Label 2</div>
                <div className="trend-label">Label 3</div>
                <div className="trend-label">Label 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 