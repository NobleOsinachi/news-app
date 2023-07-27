# Employee API Documentation

The Employee API provides CRUD (Create, Read, Update, Delete) operations for managing employee data.

## Base URL

`/api/employee`

## Employee Object

Each employee is represented by the following object:

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 30,
  "department": "IT"
}
```

- `id` (number, required): The unique identifier for the employee.
- `name` (string, required): The name of the employee.
- `age` (number, required): The age of the employee.
- `department` (string, required): The department the employee belongs to.

## Endpoints

### GET /api/employee

Get all employees.

#### Response

Status Code: 200 (OK)

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "department": "IT"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "department": "HR"
  },
  ...
]
```

### POST /api/employee

Create a new employee.

#### Request Body

The request body should be a JSON object representing the new employee to be added.

```json
{
  "name": "John Doe",
  "age": 30,
  "department": "IT"
}
```

#### Response

Status Code: 201 (Created)

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 30,
  "department": "IT"
}
```

Status Code: 400 (Bad Request) - If the request body is missing any required fields.

```json
{
  "error": "Name, age, and department are required fields"
}
```

Status Code: 500 (Internal Server Error) - If there was an issue adding the employee.

```json
{
  "error": "Something went wrong while adding the employee"
}
```

### PUT /api/employee

Update an existing employee.

#### Request Body

The request body should be a JSON object representing the updated employee data. It must include the `id` of the employee to be updated.

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 35,
  "department": "HR"
}
```

#### Response

Status Code: 200 (OK)

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 35,
  "department": "HR"
}
```

Status Code: 400 (Bad Request) - If the request body is missing any required fields or the `id` is not provided.

```json
{
  "error": "Invalid employee data. Make sure to include id, name, age, and department."
}
```

Status Code: 404 (Not Found) - If the employee with the given `id` is not found.

```json
{
  "error": "Employee not found"
}
```

Status Code: 500 (Internal Server Error) - If there was an issue updating the employee.

```json
{
  "error": "Something went wrong while updating the employee"
}
```

### DELETE /api/employee?id=:id

Delete an employee by ID.

#### Parameters

- `id` (number, required): The unique identifier of the employee to be deleted.

#### Response

Status Code: 200 (OK)

```json
{
  "message": "Employee deleted successfully"
}
```

Status Code: 400 (Bad Request) - If the `id` parameter is missing or invalid.

```json
{
  "error": "Invalid employee ID"
}
```

Status Code: 404 (Not Found) - If the employee with the given `id` is not found.

```json
{
  "error": "Employee not found"
}
```

Status Code: 500 (Internal Server Error) - If there was an issue deleting the employee.

```json
{
  "error": "Something went wrong while deleting the employee"
}
```
