import React from 'react'

const Calendar = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const availability = [
        { date: '2024-01-01', status: "green" },
        { date: '2024-01-02', status: "red" },
        { date: '2024-01-03', status: "green" },
        { date: '2024-01-04', status: "green" },
        { date: '2024-01-05', status: "yellow" },
    ];
    return (
        <div className="calendar">
            {weekDays.map((day) => (
                <div key={day} className="day-header">
                    {day}
                </div>
            ))}
            {availability.map((date) => {
                return (
                    <div key={date.date} className={`day ${date.status}`}>
                        {date.date}
                    </div>
                )
            })}
        </div>
        )
        
        
    } 
 

    
  
  




export default Calendar;