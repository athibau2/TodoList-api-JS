# Lab-6-Boilerplate
Starter Files for lab 6

# <strong>API Documentation</strong>

## <em>GET/api/v1/tasks</em>

This endpoint lists one task with a unique task id. <br>

| Type            | Name  | Value |
| --------------- | ----- | ----- |
| Path parameters | "_id" | 60746a906865321bc7afd09d |

Request body JSON example: N/A <br>
Response body JSON example: <br>
    ```json
    {
    "_id": "60746a906865321bc7afd09d",
    "UserId": "eebea0c7-a5ad-41c5-a178-5fea0e64c221",
    "Text": "study for finals",
    "Date": "2021-04-15",
    "Done": false,
    "__v": 0
    }
    ```

## <em>GET/api/v1/tasks</em>

This endpoint lists all the tasks. The API displays them in JSON format in the browser window. <br>

Path parameters: none <br>
Request body JSON example: N/A <br>
Response body JSON example: <br>
    ```json
    {
        "_id":"606cf78dd253e12ad0fd3a35",
        "UserId":"eebea0c7-a5ad-41c5-a178-5fea0e64c221",
        "Text":"don't die",
        "Date":"2021-04-06",
        "Done":false,"__v":0
    }
    ```

## <em>POST/api/v1/tasks

This endpoint sends new data to MongoDB to create and store a new task. <br>

Path parameters: none <br>
Request body JSON example: <br>
    ```json
    {
        "Text": "study for finals",
        "Date": "2021-04-15"
    }
    ```
    <br>
Response body JSON example: <br>
    ```json
    {
    "_id": "60746a906865321bc7afd09d",
    "UserId": "eebea0c7-a5ad-41c5-a178-5fea0e64c221",
    "Text": "study for finals",
    "Date": "2021-04-15",
    "Done": false,
    "__v": 0
    }
    ```
    <br>

## <em>PUT/api/v1/tasks</em>

This endpoint updates a task's "Done" value in MongoDB. <br>

| Type            | Name  | Value |
| --------------- | ----- | ----- |
| Path parameters | "_id" | 60746a906865321bc7afd09d |

Request body JSON example: <br>
    ```json
    {
        "Done": true
    }
    ```
    <br>
Response body JSON example: <br>
    ```json
    {
    "_id": "60746a906865321bc7afd09d",
    "UserId": "eebea0c7-a5ad-41c5-a178-5fea0e64c221",
    "Text": "study for finals",
    "Date": "2021-04-15",
    "Done": true,
    "__v": 0
    }
    ```
    <br>

## <em>DELETE/api/v1/tasks</em>

This endpoint deletes a task with a unique task id from MongoDB. <br>

| Type            | Name  | Value |
| --------------- | ----- | ----- |
| Path parameters | "_id" | 60746a906865321bc7afd09d |

Request body JSON example: N/A <br>
Response body JSON example (after running delete twice): <br>
    ```json
    Task with ID 60746a906865321bc7afd09d does not exist.
    ```
    <br>

## <em>api/v1/user</em>

This endpoint shows the current user id and user variables and status. <br>

Path parameters: None <br>
Request body JSON example: N/A <br>
Response body JSON example: <br>
    ```json
    {"Id": "eebea0c7-a5ad-41c5-a178-5fea0e64c221", "UserName": "a.thibs98@gmail.com", "NormalizedUserName": "A.THIBS98@GMAIL.COM", "Email": " a.thibs98@gmail.com "," NormalizedEmail ":" A.THIBS98@GMAIL.COM "," EmailConfirmed ": true," PasswordHash ": null," SecurityStamp ":" XXXXXXXXXXXXXXXXXX "," ConcurrencyStamp ":" f732-47e3-9ea7-e57c13d7c48c "," PhoneNumber ": null," PhoneNumberConfirmed ": false," TwoFactorEnabled ": false," LockoutEnd ": null," LockoutEnabled ": true," AccessFailedCount ": 0}
    ```
    <br>

## <em>api/v1/auth/google</em>

This endpoint routes the user to google authentication, which logs the user in. <br>

Path parameters: none <br>
Request body JSON example: N/A <br>
Response body JSON example: <br>
    `Logs user in, shows tasks`
    <br>

## <em>api/v1/auth/logout</em>

This endpoint logs the user out and destroys session variables. <br>

Path parameters: none <br>
Request body JSON example: N/A <br>
Response body JSON example: <br>
    `Unauthorized`
    <br>
