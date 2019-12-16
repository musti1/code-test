# Code Test
Here is the solutions which I implemented for this code-test assignment.

# Design Pattern
I used Domain Driven Design Pattern to separate out every component according to there specifications. In DDD pattern there are multiple layers Application, Http, Domain and Infrastructure layer. In Http layer all of the http things used to appear in it like controllers, routes and server setup. In Domain layer our Services and Entities exists. In Infrastructure all of the database operations exists there. Services are directly connected with the services and Entities every time allow us to return the objects to store the data into database and also to return the data. Further more services are connected with our controllers. 

I used this pattern so that all of our components stay separate and its easy to debug or adding new features, if it is require to add multiple databases it will also easy to integrate the unlimited databases.

# Code Changes

1. Remove the business logic from the controller, as it is bad practice to set all the business logic in controllers, I move that logic to the services.
2. Implemented Single Responsibility Principle, to specify every class and its methods to do single job. So that if there are any changes required than only that specific method will get change and it won't effect the rest of the code.
 