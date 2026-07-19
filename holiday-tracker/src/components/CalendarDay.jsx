const calendarDays = ({ day, availability }) => {
    const availabilityColours = {
        available: 'bg-green-500',
        unavailable: 'bg-red-500',
        limited: 'bg-yellow-500'
    }
    const calendarColour = availability ? availabilityColours[availability.status] : 'bg-gray-500';
    return (
        <div className={`border p-2 text-center text-xs font-bold text-center ${calendarColour}`}>
            {day}
        </div>
    )
}

export default calendarDays;