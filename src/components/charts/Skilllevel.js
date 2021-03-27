import React from 'react';
import './Skilllevel.css';

import { Bar } from 'react-chartjs-2';
const Skilllevel = () => {
    return (
        <>
        <div className = "skill_set">
            <h1>Skills</h1>
            <Bar 
               data  = {{
                labels: ['C++', 'Javascript', 'C', 'Python', 'HTML', 'CSS'],
                datasets: [{
                    label: '#marked out of 10' ,
                    data: [8,6,9,6,8,8],
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

export default Skilllevel;