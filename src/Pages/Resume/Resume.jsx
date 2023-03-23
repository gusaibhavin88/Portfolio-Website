import React, { useEffect, useState } from 'react'
import { Bhavin_gusai } from "../../assets/Index"
import "./Resume.css"
import { client } from '../../Client'


const Resume = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const query = '*[_type == "pdfupload"]';
        client.fetch(query).then((data) => setdata(data));
    }, []);

    return (
        <div className='resume'>
            <object data={Bhavin_gusai} type="application/pdf" width="100%" height="100%" >
            </object>
        </div >
    )
}

export default Resume