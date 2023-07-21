/* Le code importe divers modules et composants nécessaires au composant Planning. */
import React from "react";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import '../styles/planning.css'

import Navbar from '../components/navBar';

/**
 * La fonction renvoie un composant qui affiche un calendrier avec des événements pour une semaine.
 * @returns un élément JSX qui contient un composant Navbar et un composant FullCalendar. Le composant
 * FullCalendar est configuré avec divers accessoires tels que plugins, initialView, locales, weekends,
 * slotDuration, startTime, endTime, businessHours et events.
 */
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
                        { title: 'Développement web et API', start: '2023-07-18T11:30:00', end: '2023-07-18T13:00:00' },
                        { title: 'Unity', start: '2023-07-18T14:00:00', end: '2023-07-18T15:30:00' },
                        { title: 'Unity', start: '2023-07-18T15:45:00', end: '2023-07-18T17:15:00' },
                        { title: 'Développement web et API', start: '2023-07-19T09:45:00', end: '2023-07-18T11:15:00' },
                        { title: 'Développement web et API', start: '2023-07-19T11:30:00', end: '2023-07-18T13:00:00' },
                        { title: 'Unity', start: '2023-07-19T14:00:00', end: '2023-07-19T15:30:00' },
                        { title: 'Unity', start: '2023-07-19T15:45:00', end: '2023-07-19T17:15:00' },
                        { title: 'Développement web et API', start: '2023-07-20T09:45:00', end: '2023-07-20T11:15:00' },
                        { title: 'Développement web et API', start: '2023-07-20T11:30:00', end: '2023-07-20T13:00:00' },
                        { title: 'Unity', start: '2023-07-20T14:00:00', end: '2023-07-20T15:30:00' },
                        { title: 'Unity', start: '2023-07-20T15:45:00', end: '2023-07-20T17:15:00' },
                        { title: 'Développement web et API', start: '2023-07-21T09:45:00', end: '2023-07-21T11:15:00' },
                        { title: 'Développement web et API', start: '2023-07-21T11:30:00', end: '2023-07-21T13:00:00' },
                        { title: 'Unity', start: '2023-07-21T14:00:00', end: '2023-07-21T15:30:00' },
                        { title: 'Unity', start: '2023-07-21T15:45:00', end: '2023-07-21T17:15:00' },
                    ]}
                />
            </div></>
    );
}