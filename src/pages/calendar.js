import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        console.log('change')
        setStartDate(date)
    }
    const handleDateSelect = (date) => {
        console.log(date)
    }
    return (
        <div>
            <h1>React Date Picker</h1>
            <ReactDatePicker
                selected={startDate}
                onSelect={(date) => handleDateSelect(date)}
                onChange={(date) => handleDateChange(date)}
            />
            <hr />
            <h1>React Date Picker (Custom CSS)</h1>
            <ReactDatePicker
                className='date-picker'
                selected={startDate}
                onSelect={(date) => handleDateSelect(date)}
                onChange={(date) => handleDateChange(date)}
            />
            <hr />
            <h1>React Date & Time Picker</h1>
            <ReactDatePicker
                selected={startDate}
                onSelect={(date) => handleDateSelect(date)}
                onChange={(date) => handleDateChange(date)}
                showTimeSelect
                dateFormat="Pp"
            />
        </div>
    )
}

export default Calendar
