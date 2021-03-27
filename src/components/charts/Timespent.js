import React from 'react';
import './Skilllevel.css';

import { Pie } from 'react-chartjs-2';
const Timespent = () => {
    return (
        <>
        <div className = "skill_set">
            <h1>Routine</h1>
            < Pie
               data  = {{
                labels: ['Sleep', 'Classes', 'Competetive Programming', 'Web Development', 'Surfing', 'Youtube Learning'],
                datasets: [{
                    label: '#of 24 hours' ,
                    data: [6,7,3,3,1,4],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
               }}
               width = {100}
               height = {80}
               options = {{
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }}
                
            />
        </div>
        </>
    )
}

export default Timespent;