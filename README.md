# Project 4

## Build your own portfolio

A website where you can register and login, add money in cash and buy different stock form different portofolios that we recommend you to buy

## Wireframes
![1](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.04.41%20AM.png)
![2](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.09.05%20AM.png)
![3](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.30.07%20AM.png)

## MVP
​
- Creating a home page to sign in, or log in if you have sign in previously
- Creating a database with the user has many portfolios and the portfolio has many stocks
- Creating a user page where the user can chose between portfolios an stocks
- Backend with full CRUD in ruby
- Shared components, like header and footer and probably portfolios and stocks
​

## Post-MVP
​
- Add money to your portfolio
- Buy stocks and add it to your portfolio and compared in time to the market
- Sell stocks, taking them from your portfolio and adding it to your money
- Auth with Facebook/Google
​

## ERD Diagram
​
![ERD](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%2011.57.07%20AM.png)
​


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


			[
			    {
			        “name” : “mardikian”,
                                “email” : “juan@mardikian.es”,
			        “password” : “laMadre”,
			     
			        “portfolios : [{
						name: portfolio_tech{
							stock:{
								name: apple,
								price: 200
								},
								{
								name: microsoft,
								price: 200
								},
								
						name: portfolio_pharma{
							stock:{
								name: pfizer,
								price: 200
								},
								{
								name: proctel,
								price: 200
								}
						
						}]
						
						
				}
			  ]	
			
				

## React Component Hierarchy
​
​
​![Component Hierachy](https://git.generalassemb.ly/juanmardikian/project_4/blob/master/Screen%20Shot%202020-03-05%20at%202.11.24%20PM.png)
​
