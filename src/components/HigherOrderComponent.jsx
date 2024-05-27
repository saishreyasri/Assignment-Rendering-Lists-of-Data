import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        };
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderItemsByUserType = (userType) => {
        const data = this.state.userData.filter(item => item.user_type === userType);
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    filterNamesStartingWithJ = () => {
        const data = this.state.userData.filter(item => item.name.charAt(0).toLowerCase() === 'j');
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    filterByAge = () => {
        const data = this.state.userData.filter(item => item.age > 28 && item.age <= 50);
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name: {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    totalExperienceOfDesigners = () => {
        const designersData = this.state.userData.filter(item => item.user_type === 'Designer');
        const totalExperience = designersData.reduce((acc, curr) => acc + curr.years, 0);
        return totalExperience;
    };

    render() {
        return (
            <div className="App">
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()}</ul>
                </div>
                <h1>Display items by user type</h1>
                <div className="display-box">
                    <ul>{this.renderItemsByUserType('Designer')}</ul>
                </div>
                <h1>Filter names starting with 'J'</h1>
                <div className="display-box">
                    <ul>{this.filterNamesStartingWithJ()}</ul>
                </div>
                <h1>Filter data based on age</h1>
                <div className="display-box">
                    <ul>{this.filterByAge()}</ul>
                </div>
                <h1>Total Experience of Designers: {this.totalExperienceOfDesigners()} years</h1>
            </div>
        );
    }
}

export default HigherOrderComponent;
