import React from 'react'
import { RingLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <div>
            <RingLoader
                color="#ffee09"
                size={100}
                speedMultiplier={2}
            />
        </div>
    )
}

export default Spinner
