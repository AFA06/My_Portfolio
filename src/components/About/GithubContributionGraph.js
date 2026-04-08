import React, { useState, useEffect } from "react";
import { Row, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const GithubContributionGraph = ({ username = "AFA06" }) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // GitHub-style color scheme for dark theme
  const colors = {
    0: "#161b22",      // No contributions
    1: "#0e4429",      // 1-2 contributions
    2: "#006d32",      // 3-5 contributions  
    3: "#26a641",      // 6-10 contributions
    4: "#39d353"       // 11+ contributions
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Mon", "", "Wed", "", "Fri", ""];

  useEffect(() => {
    fetchContributions();
  }, [username]);

  const fetchContributions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use correct GitHub contributions API
      const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`);
      const data = response.data;
      
      // Validate response structure
      if (!data || !data.contributions || !Array.isArray(data.contributions)) {
        throw new Error("Invalid contributions data received");
      }
      
      // Filter to last year of contributions
      const today = new Date();
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
      
      const filteredContributions = data.contributions.filter(contrib => {
        const contribDate = new Date(contrib.date);
        return contribDate >= oneYearAgo && contribDate <= today;
      });
      
      // Validate we have some data
      if (filteredContributions.length === 0) {
        console.warn("No contributions found in last year");
      }
      
      setContributions(filteredContributions);
      
    } catch (err) {
      console.error("Error fetching GitHub contributions:", err);
      if (err.response?.status === 404) {
        setError(`GitHub user '${username}' not found or has no public contributions.`);
      } else if (err.response?.status === 429) {
        setError("Rate limit exceeded. Please try again in a few minutes.");
      } else {
        setError("Failed to load GitHub contributions. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const getWeeks = () => {
    // Create a map of contributions by date for quick lookup
    const contributionsMap = {};
    contributions.forEach(contrib => {
      contributionsMap[contrib.date] = contrib;
    });

    // Calculate date range: last 365 days ending today
    const today = new Date();
    const endDate = new Date(today);
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364); // 365 days total including today
    
    // Find the Sunday before or on the start date (GitHub starts weeks on Sunday)
    const startSunday = new Date(startDate);
    const dayOfWeek = startSunday.getDay();
    startSunday.setDate(startSunday.getDate() - dayOfWeek);
    
    const weeks = [];
    const currentDate = new Date(startSunday);
    
    // Generate weeks until we pass the end date
    while (currentDate <= endDate) {
      const week = [];
      
      // Generate 7 days for this week (Sunday to Saturday)
      for (let i = 0; i < 7; i++) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const contribution = contributionsMap[dateStr];
        
        week.push({
          date: dateStr,
          count: contribution ? contribution.count : 0,
          level: contribution ? contribution.level : 0
        });
        
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      weeks.push(week);
    }
    
    return weeks;
  };

  const getMonthLabels = () => {
    const labels = [];
    const weekWidth = 16; // Width per week (15px box + 3px gap + 2px padding)
    
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
      const week = weeks[weekIndex];
      if (week && week.length > 0) {
        const firstDayOfWeek = new Date(week[0].date);
        const monthName = months[firstDayOfWeek.getMonth()];
        
        // Only add month label if it's different from previous week's month
        if (weekIndex === 0 || 
            new Date(weeks[weekIndex - 1][0].date).getMonth() !== firstDayOfWeek.getMonth()) {
          labels.push({
            month: monthName,
            position: weekIndex * weekWidth
          });
        }
      }
    }
    
    return labels;
  };

  const weeks = getWeeks();

  if (loading) {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Spinner animation="border" variant="primary" />
      </Row>
    );
  }

  if (error) {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Alert variant="danger">{error}</Alert>
      </Row>
    );
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} onMouseMove={handleMouseMove}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      
      <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
        {/* Month labels */}
        <div style={{ 
          display: "flex", 
          marginBottom: "8px",
          paddingLeft: "40px",
          paddingRight: "10px",
          position: "relative",
          zIndex: 10
        }}>
          {getMonthLabels().map((label, index) => (
            <span 
              key={index} 
              style={{ 
                position: "absolute",
                left: `${label.position}px`,
                fontSize: "10px", 
                color: "#8b949e",
                backgroundColor: "transparent"
              }}
            >
              {label.month}
            </span>
          ))}
        </div>

        {/* Contribution grid container */}
        <div style={{ display: "flex", gap: "3px", overflow: "auto", zIndex: 1 }}>
          {/* Day labels */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginRight: "5px" }}>
            {days.map((day, index) => (
              <div 
                key={index} 
                style={{ 
                  height: "15px", 
                  fontSize: "10px", 
                  color: "#8b949e",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Weeks */}
          <div style={{ display: "flex", gap: "3px", overflow: "auto" }}>
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: colors[day.level] || colors[0],
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      transform: hoveredDay?.date === day.date ? "scale(1.1)" : "scale(1)",
                      border: day.level === 0 ? "1px solid #30363d" : "none"
                    }}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    title={`${formatDate(day.date)}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Tooltip */}
        {hoveredDay && (
          <div
            style={{
              position: "fixed",
              left: mousePosition.x + 10,
              top: mousePosition.y - 30,
              backgroundColor: "#0d1117",
              color: "#c9d1d9",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "12px",
              pointerEvents: "none",
              zIndex: 1000,
              boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
              border: "1px solid #30363d"
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
              {hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}
            </div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>
              {formatDate(hoveredDay.date)}
            </div>
          </div>
        )}

        {/* Legend */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-end",
          marginTop: "15px",
          fontSize: "11px",
          color: "#8b949e"
        }}>
          <span style={{ marginRight: "8px" }}>Less</span>
          {Object.entries(colors).map(([level, color]) => (
            <div
              key={level}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: color,
                borderRadius: "2px",
                marginLeft: "3px",
                border: level === "0" ? "1px solid #30363d" : "none"
              }}
            />
          ))}
          <span style={{ marginLeft: "8px" }}>More</span>
        </div>
      </Row>
  );
};

export default GithubContributionGraph;
