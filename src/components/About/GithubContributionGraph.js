import React, { useState, useEffect, useMemo } from "react";
import { Row, Spinner, Alert } from "react-bootstrap";

const GithubContributionGraph = ({ username = "AFA06" }) => {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // GitHub contribution level colors
  const levelColors = {
    NONE: "#161b22",
    FIRST_QUARTILE: "#0e4429",
    SECOND_QUARTILE: "#006d32",
    THIRD_QUARTILE: "#26a641",
    FOURTH_QUARTILE: "#39d353"
  };

  const days = ["", "Mon", "", "Wed", "", "Fri", ""];

  useEffect(() => {
  fetch("/My_Portfolio/contributions.json")
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to load contributions");
      }
      return res.json();
    })
    .then(data => setCalendar(data))
    .catch(err => {
      console.error("Fetch error:", err);
      setError("Failed to load contributions");
    })
    .finally(() => setLoading(false));
}, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const weeks = useMemo(() => {
    return calendar?.weeks || [];
  }, [calendar]);

  const monthLabels = useMemo(() => {
    let lastMonth = "";
    
    return weeks.map((week) => {
      if (!week.contributionDays || week.contributionDays.length === 0) return "";
      
      const firstDay = week.contributionDays[0];
      const month = new Date(firstDay.date).toLocaleString("default", { month: "short" });

      if (month !== lastMonth) {
        lastMonth = month;
        return month;
      }
      return "";
    });
  }, [weeks]);

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

  const formatDateForDisplay = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

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
          paddingRight: "10px"
        }}>
          {monthLabels.map((label, index) => (
            <span 
              key={index} 
              style={{ 
                fontSize: "10px", 
                color: "#8b949e",
                width: "15px",
                marginRight: "3px",
                textAlign: "center"
              }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Contribution grid */}
        <div style={{ display: "flex", gap: "3px" }}>
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
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: levelColors[day.contributionLevel],
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      transform: hoveredDay?.date === day.date ? "scale(1.1)" : "scale(1)",
                      border: day.contributionLevel === "NONE" ? "1px solid #30363d" : "none"
                    }}
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                    title={`${formatDateForDisplay(day.date)}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}`}
                  />
                ))}
              </div>
            ))}
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
              {hoveredDay.contributionCount} contribution{hoveredDay.contributionCount !== 1 ? 's' : ''}
            </div>
            <div style={{ fontSize: "11px", opacity: 0.8 }}>
              {formatDateForDisplay(hoveredDay.date)}
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
          {Object.values(levelColors).map((color, index) => (
            <div
              key={index}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: color,
                borderRadius: "2px",
                marginLeft: "3px",
                border: index === 0 ? "1px solid #30363d" : "none"
              }}
            />
          ))}
          <span style={{ marginLeft: "8px" }}>More</span>
        </div>
      </div>
    </Row>
  );
};

export default GithubContributionGraph;
