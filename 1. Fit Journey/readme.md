# Fit Journey Workout Tracker

This repository contains the code for the Fit Journey workout tracker application, which helps users map and track their workouts. How it works? - Just click on the map and register your workout, URL is here: https://fitjourney.netlify.app/
![alt Appearance](/misc/Screenshot_1.png)

## Features

- **Interactive Map**: The application uses the `Leaflet.js` library to display an interactive map where users can mark the location of their workouts.

- **Workout Form**: Users can input details about their workout, such as the type (running or cycling), distance, duration, cadence, and elevation gain.

- **Responsive Design**: The application is designed to be responsive and works well on both desktop and mobile devices.

## Code Structure

The HTML file index.html is the main entry point of the application. It includes:

Meta tags: These provide information about the webpage to the browser and search engines.

External resources: The application uses external resources such as Google Fonts and Leaflet.js. These are included in the `head` section of the HTML file.

Main content: The main content of the webpage is contained within the `body` tag. This includes a sidebar with a form for inputting workout details and a div for displaying the map.

Scripts: The JavaScript files that provide functionality to the application are included at the end of the `body` tag. These are loaded with the defer attribute, which means they will not block rendering of the page and will execute after the document has been parsed.

## Files

- **`index.html`**: Contains the HTML structure of the application, including the map and workout form. It consists of a header section, a map section, and a workout form section.
- **`style.css`**: Contains the styling for the application, including the layout and design. It includes styles for the header, map, and workout form.
- **`script.js`**: Contains the JavaScript code for the application, including the logic for creating and rendering workouts on the map. It handles user interactions with the workout form and map.
- **some .png(s)** - logo and icon

## Description

### index.html - contains the structure of the application.

The header section includes the application title and a "New Workout" button. The map section displays the Leaflet map where workouts are rendered as markers. The workout form section allows users to input details of their workouts, such as type (running or cycling), distance, duration, and elevation gain.

### style.css - contains the styling for the application.

It defines the layout and design of the header, map, and workout form. It uses CSS grid and flexbox to create a responsive and visually appealing interface.

Here's a breakdown of the main components:

- **Root Variables**: The :root selector defines CSS variables for the primary colors used throughout the application. This includes brand colors, dark shades, and light shades.

- **Reset Styles**: The \* selector resets the margin, padding, and box-sizing for all elements to ensure consistency across different browsers.

- **HTML and Body Styles**: The html and body selectors define global styles such as the font size, font family, and background color.

- **Link Styles**: The a:link and a:visited selectors style the color of links.

- **Sidebar Styles**: The .sidebar class styles a sidebar with a fixed width, background color, and padding. It uses flexbox to layout its children vertically.

- **Workout Styles**: The .workout class styles individual workout items in the sidebar. It uses CSS Grid for layout and differentiates between running and cycling workouts with the .workout--running and .workout--cycling classes.

- **Form Styles**: The .form class styles a form with a grid layout. The .form.hidden class hides the form by moving it off-screen and setting its height and opacity to zero.

- **Map Styles**: The #map ID styles a map component with a flexible width and height. The .leaflet-popup classes style the popup that appears when a map marker is clicked.

- **Miscellaneous Styles**: Other classes style specific components like the logo, workout details, form inputs, and copyright notice.

This CSS file uses such cool layout techniques like flexbox and CSS Grid, and leverages CSS variables for maintainable color management.

### script.js- contains the JavaScript code for the application.

It handles the logic for creating workout objects based on user input in the form, rendering workout markers on the map, and handling user interactions with the workout form and map.

#### Application Architecture

The application uses the Leaflet library to display a map and markers for the workouts. It also uses the Geolocation API to get the user's current position.

#### Activity diagram

![alt diagram](/misc/Activity_diagr.png)

The App class contains the main logic of the application. It has properties for the map, the zoom level of the map, the map event, and an array of workouts. It also has methods to get the user's position, load the map, show and hide the form for adding a new workout, toggle the elevation field, add a new workout, render the workout marker and workout on the map, move to the popup for a workout, and set and get the workouts from local storage.

The application is initialized by creating a new instance of the App class.

#### Usage

To use the application, the user can add a new workout by filling in the form with the type of workout, the distance covered, the duration of the workout, and the cadence or elevation gain (depending on the type of workout). The application will then add a marker for the workout on the map and display the details of the workout in a list. The user can also click on a workout in the list to move to the marker for the workout on the map.

The script.js file you provided is a great example of Object-Oriented Programming (OOP) in JavaScript, itcontains four classes: Workout, Running, Cycling, and App:

- **Workout**: This is the base class for a workout. It has properties like date, id, coords, distance, duration, and clicks. It also has methods like `_setDescription()` and `click()`. The Workout class is not meant to be instantiated directly; instead, it serves as a parent class for more specific types of workouts.

- **Running**: This class extends Workout, meaning it inherits all of its properties and methods. It represents a running workout, and it adds a type property and a cadence property. It also has a calcPace() method to calculate the pace of the run.

- **Cycling**: This class also extends Workout and represents a cycling workout. It adds a type property and an elevationGain property. It also has a calcSpeed() method to calculate the speed of the cycling workout.

- **App**: This class represents the application itself. It has properties to store the map, the zoom level, the map event, and an array of workouts. It also has a number of methods to handle different aspects of the application, such as getting the user's position, loading the map, showing and hiding the form, creating a new workout, rendering workouts on the map and in a list, moving to a popup, and storing and retrieving data from local storage. The App class is instantiated at the end of the script to start the application.

![alt class diagram](/misc/class_diagr.png)

#### Here's a breakdown of the OOP concepts used:

- **Classes and Objects**: The script defines several classes (Workout, Running, Cycling, App). An instance of a class (an object) is created using the new keyword (e.g., new App()).

- **Inheritance**: The Running and Cycling classes extend the Workout class, inheriting its properties and methods. This is done using the extends keyword. They also use the super keyword to call the constructor of the parent class.

- **Encapsulation**: The classes encapsulate related data and behavior. For example, the Workout class encapsulates properties like date, id, coords, distance, duration, and methods like \_setDescription() and click(). The # symbol before a property or method name makes it private, meaning it can only be accessed from within the class.

- **Polymorphism**: The Running and Cycling classes override the \_setDescription method of the Workout class to provide their own implementations. This is a form of polymorphism.

- **Abstraction**: The App class abstracts away the details of managing workouts, handling form inputs, interacting with the map, and storing data in local storage. Its methods provide a high-level interface for these operations.

- **Composition**: The App class contains a list of Workout objects (this.#workouts). This is an example of composition, where an object is composed of other objects.

In summary, this script is a good demonstration of how OOP can be used to structure a JavaScript application in a way that's modular, reusable, and easy to understand and maintain.

## Data

The script.js file uses the Local Storage Web API to persist data across browser sessions. This is done in the App class, specifically in the `_setLocalStorage()` and `_getLocalStorage()` methods.

- `_setLocalStorage()`: This method is used to store the current state of the #workouts array in local storage. It first converts the #workouts array to a JSON string using `JSON.stringify()`, then stores it in local storage with the key 'workouts'.

```
_setLocalStorage() {
  localStorage.setItem('workouts', JSON.stringify(this.#workouts));
}
```

- `_getLocalStorage()`: This method is used to retrieve the stored workouts from local storage when the application starts. It gets the data associated with the key 'workouts', then parses it from a JSON string back into an array using `JSON.parse()`. If there is data in local storage, it sets the #workouts array to this data and renders each workout.

```
_getLocalStorage() {
  const data = JSON.parse(localStorage.getItem('workouts'));
  if (!data) return;
  this.#workouts = data;
  this.#workouts.forEach(work => {
    this._renderWorkout(work);
  });
}
```

- `reset()`: This method is used to clear all data from local storage and reload the page. It removes the item associated with the key 'workouts' from local storage and then reloads the page.

```
reset() {
  localStorage.removeItem('workouts');
  location.reload();
}
```

The `_setLocalStorage()` method is called every time a new workout is added, ensuring that the latest state of the application is always saved. The `_getLocalStorage()` method is called when the application starts, ensuring that any previously saved workouts are loaded and displayed.

## The room for improvement

Adding additional functionality to the application depends on what you want to achieve. Here are a few suggestions:

- **Add more workout types**: Currently, the application supports running and cycling workouts. I could add more workout types like swimming or hiking. I would need to create new classes for these workout types that extend the Workout class, similar to the Running and Cycling classes.

- **Add user authentication**: I could add a login system so that users can save their workouts and access them on different devices. This would involve setting up a backend with a database to store user data and workouts.

- **Improve the UI**: The first thing to be added is a scroll bar for activities listing. More, I could improve the user interface by adding animations, improving the color scheme, or making the application responsive so it looks good on all devices.

- **Add statistics and agriations**: I could add a feature to calculate and display statistics about the user's workouts, like total distance covered or average speed.

To implement these features, I would need to modify the App class and potentially the Workout, Running, and Cycling classes. I would also need to modify the HTML and CSS files to accommodate any changes in the user interface.

## Contributors

- Design: [Nataliia Zabava](#)
- Development: Yurii Kochurovskyi (I am)

## Usage

To use the application, simply run https://fitjourney.netlify.app/ in a web browser. The application allows users to add new running or cycling workouts, which are then displayed on the map and in a list.

## License

This project is licensed under the MIT License
