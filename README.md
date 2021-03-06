# Project 4





## Overview

**Build your own portfolio** A website where you can register and login, add money in cash and buy different stock form different portofolios that we recommend you to buy




## MVP Goals
​
- Creating a home page to sign in, or log in if you have sign in previously
- Creating a database with the user has many portfolios and the portfolio has many stocks
- Creating a user page where the user can chose between portfolios an stocks
- Backend with full CRUD in ruby
- Shared components, like header and footer and probably portfolios and stocks
​

### MVP Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end                        |
|   React Router   | react-router-dom |
|     Ruby     | Ruby gems |
|  Ruby Rails  | Rake |

### MVP Client (Front End)
## Wireframes
![1](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.04.41%20AM.png)
![2](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.09.05%20AM.png)
![3](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.30.07%20AM.png)

## ERD Diagram
​
![ERD](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.57.07%20AM.png)
​

## React Component Hierarchy
​
​
​![Component Hierachy](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%203.36.52%20PM.png)
​

## Components
​
Breakdown the initial logic of the component pseudocode
​
## ​Routes

| Components | Description                                                                                                              | Type       | State                      |
|------------|--------------------------------------------------------------------------------------------------------------------------|------------|----------------------------|
| App        | This component will render the Header, Footer and Routes.                                                                | Functional | User Sign up an login|
| Login      | This component allows a user to authenticate themselves, to allow the user to access to the portfolios | Functional | Username, Password         | 
| Sign In       | This component will render the Header, Footer and the sign in form.                                                                | Functional | User Sign up an login|
| Header      | This component will render the Header                                                                | Functional | Not Applicable|
| Footer     | This component will rsocial media Icons      | Functional | Not Applicable|
| Welcome     | This component render a welcome for you to log in or sing in      | Functional | Not Applicable|
| Portfolio     | This component will render the different porffolios of the user    | Functional | API Data|
| Stocks Viewer   | This component will render the different stocks   | Functional | API Data|
| Money    | This component will add the money the user can spen in stocks  | Functional | Not applicable|
| useroverview    | This component will some personal data, and the portfolio the user has    | Functional | API Data|
| main   | This have the user overview once you are logged in, or the login button if your are signed out| Functional | API Data|

### MVP Server (Back End)

## Endpoints
getUsers - returns users
	* GET /users. return all of the users
  * GET /users/:id
  * GET /users/:id/portfolios
  * GET /users/:id/portfolios/:id
  * PUT /users/:id/portfolios/:id/stock/:id
  
  * createUser, updateUser, deleteUser - create, update or delete user information
	* POST /users/:id
	* PUT users/:id
	* DELETE users/:id
  
  Sample JSON from GET `/users`
​
users[0].portfolios[0].stocks[0].name = 'apple'

			[
			    {
			        "id": 1
				“name” : “mardikian”,
                                “email” : “juan@mardikian.es”,
			        “password” : “laMadre”,
			  
			        “portfolios : [{
						{
							"id":1
							name: 'tech'
							stocks:[{
								id: 1
								name: apple,
								price: 200
								},
								{
								name: "microsoft",
								"price": 200
								}]
						},
								
						{
							id:2
							name: 'pharma'
							stocks:[{
								id: 1
								name: pfizer,
								price: 200
								},
								{
								name: proctel,
								price: 200
								}]
						}
						
						]
						
						
				}
			  ]	
			
				



## Priority Matris
​
![Matrix](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%202.47.32%20PM.png)
​


### Timeframes
| Component                | Estimated Time | Actual Time |
|--------------------------|----------------|-------------|
| Functionality | 10 hrs         |           |
| Home Sign in          | 12 hrs         |          |
| LOG IN        | 12 hrs         |           |
| PORTFOLIO          | 10 hrs         |           |
| STOCKS              | 8 hrs          |           |
| Full CSS                 | 10 hrs         |           |
| Full Backend CRUD        | 10 hrs         |          |
| GRAPHICS           | 12 hrs         |           |
| Front End CRUD           | 8 hrs          |           |
|                          |  80 Hours      |         |



### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | project proposal worksheet / psuedocoding |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | Build out front-end components            |
|Mar 7th | OFF                                       |
|Mar 8th | impliment user auth                       |
|Mar 9th | styling                                   |
|Mar 10th| MVP, begin post-MVP                       |
|Mar 11th| post-MVP                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |


## Post-MVP
​
- Add money to your portfolio
- Buy stocks and add it to your portfolio and compared in time to the market
- Sell stocks, taking them from your portfolio and adding it to your money
- Auth with Facebook/Google
​


## Expected Issues

#### Back-End
​
Issues about my capacity in order to do a back en properly by my own, to fully understand what am i doing
​

#### Front-End
​
Try to make and understand how to relate the front end with the back end. And try to associate the user with the portfolios, update the portfolios and make the logic and math behind making a portfolio
​​
## Issues and Resolutions


