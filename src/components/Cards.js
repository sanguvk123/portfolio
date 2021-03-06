import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <div className="project__heading">Projects</div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-1.jpg"
                            text = "Project 1 Name"
                            label = "Project1 type"
                            path = "/details"
                        />
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-2.jpg"
                            text = "Project 2 Name"
                            label = "Project2 type"
                            path = '/details'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-3.jpg"
                            text = "Project 3 Name"
                            label = "Project3 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-4.jpg"
                            text = "Project 4 Name"
                            label = "Project4 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-5.jpg"
                            text = "Project 5 Name"
                            label = "Project5 type"
                            path = '/details'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-6.jpg"
                            text = "Project 6 Name"
                            label = "Project6 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-7.jpg"
                            text = "Project 7 Name"
                            label = "Project7 type"
                            path = "<Details/>"
                        />
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-8.jpg"
                            text = "Project 6 Name"
                            label = "Project6 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "https://raw.githubusercontent.com/sanguvk123/portfolio/master/public/images/img-9.jpg"
                            text = "Project 7 Name"
                            label = "Project7 type"
                            path = '/details'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;