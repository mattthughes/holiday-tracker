import React from 'react'

const Calendar = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const daysInMonth = 31;
    const days = Array.from({ length: daysInMonth}, (_, index) => index +1)
    const availability = [
        {
            day: 1,
            status: 'available',
            employeesOff: 3,
            holidayLimit: 5,
            remainingHolidays: 2    


        }
    ] 
    ;
    return (
        <section className="mx-auto max-w-4xl p-6">
        <div className="grid grid-cols-7 overflow-hidden rounded-lg border text-sm font-medium text-gray-700">    
            {weekDays.map((day) => (
                <div key={day} className="border p-2 text-center text-xs font-bold text-center">
                    {day}
                </div>
            ))}
            {days.map((day) => {
                const availabilityInfo = availability.find(item => item.day === day)
                return (
                    <div key={day} className={availabilityInfo ? "bg-green-500" : ""} min-h-16 border p-1 text-sm text-center md:min-h-24 md:p-3>
                        {day}
                    </div>
                )
            })}
        </div>
        </section>
        )
        
        
    } 
 

    
  
  




export default Calendar;