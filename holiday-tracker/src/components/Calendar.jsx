import React from 'react'

const Calendar = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const availability = [
        { date: '2024-07-1', status: "green" },
        { date: '2024-07-02', status: "red" },
        { date: '2024-07-03', status: "green" },
        { date: '2024-07-04', status: "green" },
        { date: '2024-07-05', status: "yellow" },
        { date: '2024-07-06', status: "green" },
        { date: '2024-07-07', status: "red" },
        { date: '2024-07-08', status: "green" },
        { date: '2024-07-09', status: "green" },
        { date: '2024-07-10', status: "yellow" },
    ];
    return (
        <section className="mx-auto max-w-4xl p-6">
        <div className="grid grid-cols-7 overflow-hidden rounded-lg border text-sm font-medium text-gray-700">    
            {weekDays.map((day) => (
                <div key={day} className="border p-2 text-center text-xs font-bold text-center">
                    {day}
                </div>
            ))}
            {availability.map((date) => {
                return (
                    <div key={date.date} className={`min-h-16 border p-1 text-sm text-center md:min-h-24 md:p-3 ${date.status === "green" ? "bg-green-500" : date.status === "red" ? "bg-red-500" : "bg-yellow-500"}`}>
                        {new Date(date.date).getDate()}
                    </div>
                )
            })}
        </div>
        </section>
        )
        
        
    } 
 

    
  
  




export default Calendar;