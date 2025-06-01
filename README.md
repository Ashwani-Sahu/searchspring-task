# FashionFusion

![image](https://github.com/user-attachments/assets/f3c0debf-002c-499c-a117-b34454ef1f68)

This Searchspring project, called FashionFusion, is a simple search application implementing the Search API. Users can search for clothing and makeup items, and the results are displayed in a grid format. The app is also mobile responsive.


# Demo

[FashionFusion Demo](https://newfashionfusion.netlify.app/)

# Technologies

- React
- Javascript
- HTML5
- CSS3


# Features

- Implements the Search API.
- Uses Fetch API and Promises to make HTTP Requests to the Search API.
- Search bar with search button to allow for custom user input.
- A category dropdown is included with default search terms to add to the user experience.
- After a request has been made, results are shown using CSS Grid.
- Conditionals are put in place to:
  - Prevent the previous buttons from displaying if previous page = 0 from the HTTP request.
  - Prevent the next buttons from displaying if there are no pages left in the result.
  - Handle searches with no results.
  - Include a default image if an image is throwing a 404 from the API.
  - Prevent MSRP from displaying if the MSRP is equal or less than the listed price.
- "Add to cart" functionality that mimics adding an item to a shopping cart.
- Implemented a modern and colorful User Interface.
- Responsive website.

