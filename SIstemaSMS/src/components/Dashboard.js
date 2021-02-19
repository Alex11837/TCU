import React, { useState, useEffect } from 'react';
import { Panel } from 'primereact/panel';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Chart } from 'primereact/chart';
import { ProgressBar } from 'primereact/progressbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FullCalendar } from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProductService } from '../service/ProductService';
import { EventService } from '../service/EventService';

const dropdownCities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2019-01-01',
    header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true
};

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860'
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e'
        }
    ]
};

export const Dashboard = () => {

    const [tasksCheckbox, setTasksCheckbox] = useState([]);
    const [dropdownCity, setDropdownCity] = useState(null);
    const [events, setEvents] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const productService = new ProductService();
        const eventService = new EventService();
        productService.getProductsSmall().then(data => setProducts(data));
        eventService.getEvents().then(data => setEvents(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onTaskCheckboxChange = (e) => {
        let selectedTasks = [...tasksCheckbox];
        if (e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        setTasksCheckbox(selectedTasks);
    };

    return (
        <div className="p-grid p-fluid dashboard">
          
          
            <h2>Sistema SMS</h2>

           

          
         
        </div>
    );
}
