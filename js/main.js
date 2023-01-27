/* Requirement Statement: create a shopping list by manipulating the HTML DOM. Follow these steps:
    ○ Open the template file, index.html
    ○ Create a JavaScript file called main.js and link it in index.html using a <script> tag
    ○ In main.js, create an array and initialise it with at least four grocery items
    ○ Create a function which will display each item in the array as list elements in the <ul> tag. You will need to use the <ul> tag’s ID.
    ○ Using JavaScript, change the CSS styling of two of the list items to indicate that they have been bought.
*/

// initial array
const itemArr = ["Sugar", "Corn Flacks", "Milk", "Strawberry"]

// list elements in the <ul> tag 
const groceryList = document.querySelector('#itemList')

// function to display each item in the array as list elements in the <ul> tag. 

const displayItems = (initArr) => {
    for (item of initArr) {
        let listItem = document.createElement('li')
        listItem.textContent = item
        groceryList.appendChild(listItem)
    }
}

// change the CSS styling of the list items to indicate that they have been bought.
const markAsBought = (item) => {
    Array.from(groceryList.children).forEach(grItem => {
        if (grItem.textContent == item) {
            grItem.className = "item-bg"
        }
    })
}

displayItems(itemArr)
markAsBought('Sugar')
markAsBought('Milk')
