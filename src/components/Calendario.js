import React, { useState } from 'react'
import { DatePicker} from 'antd';
import locale from 'antd/es/date-picker/locale/es_ES'

import 'antd/dist/antd.css'; 


export const Calendario = () => {

    const [dates, setDates] = useState()

    const handleDate = (data) => {
        let date = new Date(data)
        let resultDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
        setDates(resultDate)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(dates)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <DatePicker 
                    locale={locale}
                    onChange={ (value)=>handleDate(value) }
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}
