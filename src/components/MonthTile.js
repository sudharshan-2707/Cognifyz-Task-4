// src/components/MonthTile.js
import React from 'react';
import './MonthTile.css';

const MonthTile = ({ month, index, isSelected, onClick }) => {
  const getSeasonClass = () => {
    switch (month) {
      case 'March':
      case 'April':
      case 'May':
        return 'summer';
      case 'December':
      case 'January':
      case 'February':
        return 'winter';
      case 'June':
      case 'July':
        return 'spring';
      case 'August':
      case 'September':
        return 'autumn';
      case 'October':
      case 'November':
        return 'monsoon';
      default:
        return '';
    }
  };

  return (
    <div className={`month-tile ${isSelected ? 'selected' : ''} ${getSeasonClass()}`} onClick={onClick}>
      <div className="month-name">{month}</div>
    </div>
  );
};

export default MonthTile;
