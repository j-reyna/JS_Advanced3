// Module 1: User Input Handling


export default function getUserInput() {

    const userInput = prompt("Enter a number:");

    return userInput ? parseInt(userInput) : null;

}



// Module 2: Classes


export class Calculator {

    static add = (a, b) => a + b;

    static subtract = (a, b) => a - b;

}



// Module 3: JSON


export const convertToJson = (data) => {

    return JSON.stringify(data);

};



// Module 4: Web Storage


export const saveToLocalStorage = (key, value) => {

    localStorage.setItem(key, value);

};


export const getFromLocalStorage = (key) => {

    return localStorage.getItem(key);

};



// Module 5: Ternary Operator


export const isPositive = (number) => {

    return (number > 0) ? true : false;

};



// Module 6: Higher Order Functions


export const operateOnNumbers = (a, b, operation) => {

    return operation(a, b);

};



// Module 7: Fetch API


export const fetchData = async (url) => {

    try {

        const response = await fetch(url);


        // Check if response is successful
        if (!response.ok) {

            throw new Error(
                `HTTP Error: ${response.status}`
            );

        }


        const data = await response.json();

        return data;

    } catch (error) {

        console.error(
            "Error fetching data:",
            error
        );

        return null;

    }

};