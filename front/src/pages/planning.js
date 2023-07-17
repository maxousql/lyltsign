import React from "react";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '../styles/planning.css'

import Navbar from '../components/navBar';

export default function Planning() {
    return (
        <><Navbar />
            <div>
                <Navbar />
            </div><div className="contentCalendar">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridWeek"
                    locales='fr'
                    weekends={false}
                    events={[
                        { title: 'Développement web et API', date: '2023-07-07' }
                    ]}
                />
            </div></>
    );
}