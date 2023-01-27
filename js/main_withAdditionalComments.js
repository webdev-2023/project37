/* Requirement Statement: create a shopping list by manipulating the HTML DOM. Follow these steps:
    ○ Open the template file, index.html
    ○ Create a JavaScript file called main.js and link it in index.html using a <script> tag
    ○ In main.js, create an array and initialise it with at least four grocery items
    ○ Create a function which will display each item in the array as list elements in the <ul> tag. You will need to use the <ul> tag’s ID.
    ○ Using JavaScript, change the CSS styling of two of the list items to indicate that they have been bought.
*/

const itemList = ["Sugar", "Corn Flacks", "Milk", "Strawberry"]

const groceryList = document.querySelector('#itemList')

const initializeList = (initArr) => {
    for (item of initArr) {
        let listItem = document.createElement('li')
        listItem.textContent = item
        // listItem.innerHTML = item                                // another way to change content of a list item
        groceryList.appendChild(listItem)
    }
}

const markAsBought = (item) => {
    // Two ways to access list items' array
    // var items = groceryList.getElementsByTagName("li")
    // var items = groceryList.children

    Array.from(groceryList.children).forEach(grItem => {
        if (grItem.textContent == item) {
            // markTag = document.createElement('mark')
            // grItem.appendChild(markTag)
            // grItem.innerHTML = `<li><mark>${item}</mark></li>`
            // grItem.style.color = 'green'
            // grItem.style.innerHTML = 'item-bg'         // not sure why this is not working
            grItem.className = "item-bg"
        }
    })
}

initializeList(itemList)
markAsBought('Sugar')
markAsBought('Milk')
