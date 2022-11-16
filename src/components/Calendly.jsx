import React from "react";
import { GrSchedule } from 'react-icons/gr';

import '../css/calendly.css';

export default props => {
    return (
        <>
            <a onClick={window["openCalendlyModal"] }>
                <button className="btn-calendly btn btn-danger">
                    <GrSchedule />
                </button>
            </a>
        </>
    )
}