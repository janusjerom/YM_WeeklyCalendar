import React, { useState, useEffect } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
import EventService from './Service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function ComponentCal() {

    const [events, setEvents] = useState([]);

    const options= {
        plugins: [ timeGridPlugin, dayGridPlugin, interactionPlugin],
            defaultView: 'dayGridWeek',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
    }
    

    const eventService = new EventService();

    useEffect(() => {
        eventService.getEvents().then(data => setEvents({events: data}));
    }, [setEvents])

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         events: []
    //     };

    //     this.options = {
    //         plugins: [ timeGridPlugin, dayGridPlugin, interactionPlugin],
    //         defaultView: 'dayGridWeek',
    //         header: {
    //             left: 'prev,next',
    //             center: 'title',
    //             right: 'dayGridMonth,timeGridWeek,timeGridDay'
    //         },
    //         editable: true
    //     };

    //     this.eventService = new EventService();
    // }

    // componentDidMount() {
    //     this.eventService.getEvents().then(data => this.setState({events: data}));
    // }


    return (
        <div>
            <div className="card">
                <FullCalendar events={events} options={options} />
            </div>
        </div>
    );

}