
# To run the project:



## Step 1: 
### `npm install`


## Step 2: You have to install json-server
### `npm install -g json-server`

## Step 3: start json-server (don't change the port 3004)
### `json-server --watch db.json --port 3004`

## Step 4: start the project
### `npm start`

###Please note if you didi't find db.json in the root of the project please create a new one and add this data inside it.
`{
   "users": [
     {
       "id": 1,
       "name": "Ammar Alhasan",
       "email": "a.hasan@ligadata.com",
       "password": "12345678",
       "token": "ammarAlhasanToken"
     }
   ],
   "contents": [
     {
       "id": 1,
       "message": "Welcome in our dashboard"
     }
   ]
 }
`
