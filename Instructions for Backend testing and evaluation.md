Install "Rest Client" Plugin in VSCode.

Create a new file in VSCode having .rest extension.

In this file you will write following  API calls for your deployed Servers:

For all Servers:

a. Access root path / introduction path

For Authentication Server:

a. Register user
b. Login User and key authentication key.

For Database Servers (for each server)

Using authentication key , issued by Authentication server, perform
CRUD operations on each server.
------------------------------------------------------------

You will bring your created  file with you at the time of viava 


------------------------------------------------------------
					
					EXAMPLE APIs
					
NOTE: You will user your rendor server url instead of localhost

How to Write API Calls

GET http://localhost:8000/

//                          create
###
GET http://localhost:8000/create?name=majid&email=majid@email.com&password=majid

###
GET http://localhost:8000/create?name=absar&email=absar@email.com&password=absar

###
GET http://localhost:8000/create?name=bilal&email=bilal@email.com&password=bilal

//                          duplicate user
###
GET http://localhost:8000/create?name=majid&email=majid@email.com&password=majid


//                           read all
###
GET http://localhost:8000/all

//                          read
###
GET http://localhost:8000/read?email=majid@email.com


//                          update
###
GET http://localhost:8000/update?name=naeem&email=majid@email.com

//                          delete
###
GET http://localhost:8000/delete?email=majid@email.com

###
GET http://localhost:8000/all

###
GET http://localhost:8000/delete?email=absar@email.com

###
GET http://localhost:8000/all

###
GET http://localhost:8000/delete?email=bilal@email.com

###
GET http://localhost:8000/all



