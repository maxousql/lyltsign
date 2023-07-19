import React from "react";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import '../styles/planning.css'

import Navbar from '../components/navBar';

export default function Planning() {
    return (
        <>
            <div>
                <Navbar />
            </div><div className="contentCalendar">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridWeek"
                    locales='fr'
                    weekends={false}
                    slotDuration="00:30:00"
                    slotLabelInterval="01:00"
                    startTime="08:00:00"
                    endTime="18:00:00"
                    businessHours={true}
                    events={[
                        { title: 'Développement web et API', start: '2023-07-18T09:45:00', end: '2023-07-18T11:15:00' },
                        { title: 'Unity', start: '2023-07-18T11:30:00', end: '2023-07-18T13:00:00' }
                    ]}
                />
            </div></>
    );
}