// src/components/CalendarPage.js
import React, { useState } from 'react';
import MonthTile from './MonthTile';
import './CalendarPage.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = (month, year) => {
    const days = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();
    let calendar = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(<td key={j}></td>);
        } else if (day > days) {
          week.push(<td key={j}></td>);
        } else {
          week.push(<td key={j}>{day}</td>);
          day++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }
    return calendar;
  };

  const currentYear = new Date().getFullYear();

  const getSeasonClass = () => {
    switch (currentMonth) {
      case 2:
      case 3:
      case 4:
        return 'summer';
      case 11:
      case 0:
      case 1:
        return 'winter';
      case 5:
      case 6:
        return 'spring';
      case 7:
      case 8:
        return 'autumn';
      case 9:
      case 10:
        return 'monsoon';
      default:
        return '';
    }
  };

  return (
    <div className={`calendar-page ${getSeasonClass()}`}>
      <div className="calendar-nav">
        {months.map((month, index) => (
          <MonthTile
            key={index}
            month={month}
            index={index}
            isSelected={index === currentMonth}
            onClick={() => setCurrentMonth(index)}
          />
        ))}
      </div>
      <div className="calendar-display">
        <h2>{months[currentMonth]} {currentYear}</h2>
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {renderCalendar(currentMonth, currentYear)}
          </tbody>
        </table>
        <div className="season-animation">
          {Array.from({ length: 5 }).map((_, idx) => (
            <img
              key={idx}
              src={`${process.env.PUBLIC_URL}/images/${getSeasonClass()}.${getSeasonClass() === 'summer' || getSeasonClass() === 'spring' ? 'png' : 'gif'}`}
              alt={`${getSeasonClass()} animation`}
              className={`animation-element ${getSeasonClass()} ${getSeasonClass() === 'summer' ? 'fixed-top' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
