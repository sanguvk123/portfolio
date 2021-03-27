import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src = "images/img-1.jpg"
                            text = "Project 1 Name"
                            label = "Project1 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "images/img-2.jpg"
                            text = "Project 2 Name"
                            label = "Project2 type"
                            path = '/details'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src = "images/img-3.jpg"
                            text = "Project 3 Name"
                            label = "Project3 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "images/img-4.jpg"
                            text = "Project 4 Name"
                            label = "Project4 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "images/img-5.jpg"
                            text = "Project 5 Name"
                            label = "Project5 type"
                            path = '/details'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src = "images/img-6.jpg"
                            text = "Project 6 Name"
                            label = "Project6 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "images/img-7.jpg"
                            text = "Project 7 Name"
                            label = "Project7 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "images/img-6.jpg"
                            text = "Project 6 Name"
                            label = "Project6 type"
                            path = '/details'
                        />
                        <CardItem 
                            src = "images/img-7.jpg"
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