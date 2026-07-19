import React from 'react'
import availability from '../utils/availability'
import CalendarDay from './CalendarDay'

const Calendar = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const daysInMonth = 31;
    const days = Array.from({ length: daysInMonth}, (_, index) => index +1)
    return (
        <section className="mx-auto max-w-4xl p-6">
        <div className="grid grid-cols-7 overflow-hidden rounded-lg border text-sm font-medium text-gray-700">    
            {weekDays.map((day) => (
                <div key={day} className="border p-2 text-center text-xs font-bold text-center">
                    {day}
                </div>
            ))}
            {days.map((day) => {
                return (
                    <CalendarDay key={day} day={day} availability={availability.find(item => item.day === day)} />
                ) 
            })}
        </div>
        </section>
        )
        
        
    } 
 

    
  
  




export default Calendar;