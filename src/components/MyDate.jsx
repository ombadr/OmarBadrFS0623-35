import React from 'react';

const MyDate = () => {
  const currentDate = new Date();

  const monthYearOptions = { month: 'long', year: 'numeric' };
  const fullDateOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  const monthYear = currentDate.toLocaleDateString('en-US', monthYearOptions);
  const fullDate = currentDate.toLocaleDateString('en-US', fullDateOptions);

  return (
    <div>
      <div style={{ fontWeight: 'bold' }}>{monthYear}</div>
      <div>{fullDate}</div>
    </div>
  );
};

export default MyDate;
