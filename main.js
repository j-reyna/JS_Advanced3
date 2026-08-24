import getUserInput from "./modules.js";

import {
    Calculator,
    convertToJson,
    saveToLocalStorage,
    getFromLocalStorage,
    isPositive,
    operateOnNumbers,
    fetchData
} from "./modules.js";


// Main Program
document.addEventListener("DOMContentLoaded", async () => {




    // Classes
    const resultAddition = Calculator.add(5, 3);
    const resultSubtraction = Calculator.subtract(10, 7);


    // JSON
    const jsonData = {
        key: "value"
    };

    const jsonString = convertToJson(jsonData);


    // Web Storage
    saveToLocalStorage("savedData", jsonString);

    const retrievedData = getFromLocalStorage("savedData");


    // Higher Order Functions
    const sum = operateOnNumbers(
        4,
        6,
        (a, b) => a + b
    );

    const difference = operateOnNumbers(
        8,
        3,
        (a, b) => a - b
    );



    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";

    const loadButton = document.getElementById("loadButton");
    const clearButton = document.getElementById("clearButton");
    const tableBody = document.getElementById("tableBody");


    // Used to prevent loading the API repeatedly
    let dataLoaded = false;


   

    loadButton.addEventListener("click", async () => {

        // Check if data has already been loaded
        if (dataLoaded) {

            alert("You can only generate the data once, the program will not load again.");

            return;
        }


        // Change button text while loading
        loadButton.textContent = "Loading...";

        try {

            // Fetch data from API
            const fetchedData = await fetchData(apiUrl);


            // Check if data was successfully received
            if (!fetchedData) {

                alert("Failed to load data from API.");

                loadButton.textContent = "Load data from API";

                return;
            }


          

            fetchedData.forEach((item) => {

                // Create a new table row
                const row = document.createElement("tr");


                // Create User ID cell
                const userIdCell = document.createElement("td");
                userIdCell.textContent = item.userId;


                // Create Task ID cell
                const taskIdCell = document.createElement("td");
                taskIdCell.textContent = item.id;


                // Create Title cell
                const titleCell = document.createElement("td");
                titleCell.textContent = item.title;


                // Create Status cell
                const statusCell = document.createElement("td");


                // Ternary Operator
                const status = item.completed
                    ? "Completed"
                    : "Not yet Completed";


                statusCell.textContent = status;


                // Add different class depending on status
                if (item.completed) {

                    statusCell.classList.add("completed");

                } else {

                    statusCell.classList.add("not-completed");

                }


                // Add cells to row
                row.appendChild(userIdCell);
                row.appendChild(taskIdCell);
                row.appendChild(titleCell);
                row.appendChild(statusCell);


                // Add row to table
                tableBody.appendChild(row);

            });


            // Save the API data in Local Storage
            const apiJsonData = convertToJson(fetchedData);

            saveToLocalStorage("apiData", apiJsonData);


            // Mark data as loaded
            dataLoaded = true;


            // Disable load button
            loadButton.disabled = true;

            loadButton.textContent = "Data Loaded";


            console.log("Fetched Data:", fetchedData);

        } catch (error) {

            console.error("Error:", error);

            alert("An error occurred while loading the data.");

            loadButton.textContent = "Load data from API";
        }

    });


   

    clearButton.addEventListener("click", () => {

        // Remove all rows
        tableBody.innerHTML = "";


        // Allow the API to be loaded again
        dataLoaded = false;


        // Enable load button
        loadButton.disabled = false;

        loadButton.textContent = "Load data from API";


        console.log("Table cleared.");

    });


   

    console.log("Result Addition:", resultAddition);

    console.log("Result Subtraction:", resultSubtraction);

    console.log("JSON String:", jsonString);

    console.log(
        "Retrieved Data from Local Storage:",
        retrievedData
    );

    console.log("Sum:", sum);

    console.log("Difference:", difference);

});