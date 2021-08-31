# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

Draw out a proposed database schema
Schema drawn on paper >>

What tables do you anticipate you will need?
Table for user that is linked to apartments that users has


What associations do your tables have?
user has_many
apartments belong_to

Explore some of the free Bootstrap themes available, which one do you want to use?
N/a at the moment


Wireframe the main pages in the application.


What forms will you need?
search form for non signed in user to browse apartments and (login_search)
also a search form for signed in user to browse apartments (nologin_search)
signed in users get to create new Apartments (login_create)
signed out users get to create an account   (nologin_account)


What fields are on those forms?
login_search (city) and (state) they wish to search in)
nologin_search (city) and (state) they wish to search in)
login_create "street" "city" "state" "description" "manager" "email" "price"  "bedrooms"  "bathrooms"
nologin_account "email" "verify email" "password" "verify password" 


Do your forms match your database schema?
No

What are the user flows?
No sign in can either create an account or search apartments for

signed in can search,create,delete apartments aswell as sign out.

Protected vs. unprotected pages?
protected if user is not asscociated with the apartment.

What is the most important user flow of the application?
Signed in users being able to create apartments. without there no apartments to search

Is this flow easy and intuitive for the user?
i beleive it will be. 


Challenge 2 - Authentication


Implement your authentication code, with stubbed out main pages


Challenge 3 - Main UI


Implement your main UI pages in your single page application


Use data mocks to work with real data, but without the complexity of API integration


Challenge 4 - API
Finish off your application by hooking up the Database via API endpoints


Is everything secure?

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
