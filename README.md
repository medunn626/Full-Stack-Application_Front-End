## FindMy Barber:

URL to Front-End: https://medunn626.github.io/Full-Stack-Application_Front-End/

URL to API: https://fast-cliffs-72027.herokuapp.com/

The FindMy Barber app is a way for customers to find barbers in the area that meet their needs based on location, hairstyle, max price and most convienent time and day of the week (as well as how highly rated the barber is). It is a connection builder between the customer and the barber as much as it is a way for customers to share information with each other by recommending barbers.

## The Idea:

I came up with this idea because I feel like we are missing something like this, especially in the Boston area. I personally have struggled to find a new barber after my life long barber retired a couple years ago. The barbers I would find either did a terrible job on my hair, or they did a great job but were extremely rude or not available when I was. It turns out there is an existing app called Squire that allows functionality to search for barbers, book appointments and even pay online, but it is primarily based in New York City with little to no results for Boston or other cities.

## App Functionality (From a Client Perspective):

In this app there are 3 resources: customers, barbers and appointments.

Barbers are viewable whether or not a user has and is signed in to their account. The user answers a few questions about their preferences and gets matched with 1 barber that is in the same zip code, offers the hairstyle they're looking for or charges no more than their max price. It also filters out the barber's busiest day and time to ensure it is not the same as the user's best day and time.

After seeing 1 barber, a user can then choose to see all barbers.

Upon creating an accont and signing in, a user can save their preferences so they don't have to answer the same question each time. With the saved info, they can do a quick search every time they log in. Logged in users can also recommend a new barber or book appointments with the barber that was chosen as the top match. At this time, users would still have to call their barber to confirm the appointment since there is not a barber-specific interface to track appointments.

See the back-end repo for details on the back-end perspective.

## Technlologies Used:

Coding Technologies:
- HTML
- CSS
- JavaScript
- jQuery
- Handlebars
- Bootstrap

Helpful Resouces:
- Stack Overflow (a whole lot of it!)
- W3 Schools
- Classmates and GA consultants

## Unsolved Problems:

I would like to resolve the following problems for a future release:

- There are four main panels on the app that work well for responsive design but also move around too much based on user actions. I would like to make this move less.
- Make barber rating field more restrictive to a 1 through 5 range.
- Change all of the time data results that come back from the API so that they are more readable to the user.
- Using a quick search when the barber results field already has barbers appends the new barber instead of replacing it, which is not consistent behavior with using the quick search when there is not barber there or using the form.
- Add more color and theme to the backgound.

## Planning & Development Process:

The process for developing this app was as follows:
- Review requirements
- Sketch wireframes, ERD and come up with user stories (this was continuous throughout the first few days, even into coding)
- Setup back end and front end apps in Heroku and Github
- Create tables without inheriting from OpenReadController or ProtectedController, test using curl scripts.
- Update tables so they function while inheriting from OpenReadController or ProtectedController, test using curl scripts.
- Create HTML and CSS to build the look and feel of the app.
- Create JavaScript index file
- Create Barber CRUD JS files
- Create Customer CRUD JS files
- Create Appointments CRUD JS files
- Test the app and fix defects.
- Provide finishing touches such as bug fixes and styling.

## Wireframes:

https://user-images.githubusercontent.com/17644549/31769399-683b56c6-b4a1-11e7-84d5-d91628a3a895.png

## User Stories:
(1) As a customer in search of a new barber, I want to be able to find a new barber based on my preferences for hairstyle (i.e. services), my location, my price range and times I am available.

(2) As a customer with limited travel options, I want the search criteria to find barbers close to me.

(3) As a customer with a budget, I want the search criteria to find a barber who won't charge more than my max price range for the service desired.

(4) As a customer with a tight schedule, I the search criteria to filter on a barber that will be free when I am free.

(5) As a customer who values customer service, I want the search results to group by highest to lowest customer rating.

(6) As a customer who is on a tight schedule, I want to be able to book appointments with my selected barber through the app without having to call them.

(7) As a customer, I want to have a phone number of the barber and location to their shop, just in case I need to call or cannot find it.

(8) As a customer who enjoyed my experience, I want to be able to give the barber a high rating (or low rating if I did not).

(9) As a customer who likes their barber and has been asked by people who cuts their hair, I want to be able to add my barber to the database (if they aren't already there).
