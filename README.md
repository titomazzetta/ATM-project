

# ATM Machine

A simple ATM machine simulation with deposit and cashback functionality.

## Description

This project provides a basic ATM machine simulation using React. Users can select whether to make a deposit or request cashback, enter the desired amount, and perform the transaction. The account balance is displayed dynamically, and the interface adjusts based on the selected action.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```shell
   $ git clone https://github.com/your-username/your-repo.git

Open the project directory:


2. Copy code
$ cd your-repo

Start a local server to view the HTML file properly. You can use the https-server package for this purpose. If you don't have it installed, you can install it globally using npm:


3. Copy code
$ npm install -g http-server
Start the local server with caching disabled:


4. Copy code
$ http-server -c-1
Open your web browser and visit http://localhost:8080/standalone.html to see the ATM machine simulation.

## Usage
When the page loads, you will see the title "ATM Machine" at the center of the screen.

Select an action by choosing "Deposit" or "Cash Back" from the dropdown menu.

If you select "Deposit", enter the amount you want to deposit in the input field. If you select "Cash Back", enter the amount you want to withdraw.

The account balance will be displayed below the input field, indicating the current account balance.

If the entered amount is valid (greater than 0 and within the available balance for cashback), the "Submit" button will be enabled. Otherwise, it will remain disabled.

Click the "Submit" button to perform the transaction. The account balance will be updated accordingly.



License
This project is licensed under the MIT License.







