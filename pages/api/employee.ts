import Employee from '@/models/Employee';
import { NextApiRequest, NextApiResponse } from 'next';

// Example data store (you may replace this with your actual data store like a database)
let employees: Employee[] = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT' },
  { id: 2, name: 'Jane Smith', age: 25, department: 'HR' },
];

/*
export interface Employee {
  id: number;
  name: string;
  age: number;
  department: string;
}
*/

const employeeHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      handleGetRequest(req, res);
      break;
    case 'POST':
      handlePostRequest(req, res);
      break;
    case 'PUT':
      handlePutRequest(req, res);
      break;
    case 'DELETE':
      handleDeleteRequest(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
};

const handleGetRequest = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(employees);
};

const handlePostRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newEmployee: Employee = req.body;
    if (!newEmployee.name || !newEmployee.age || !newEmployee.department) {
      return res.status(400).json({ error: 'Name, age, and department are required fields' });
    }

    newEmployee.id = employees.length + 1;
    employees.push(newEmployee);

    return res.status(201).json(newEmployee);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong while adding the employee' });
  }
};

const handlePutRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const updatedEmployee: Employee = req.body;
    if (!updatedEmployee.id || !updatedEmployee.name || !updatedEmployee.age || !updatedEmployee.department) {
      return res.status(400).json({ error: 'Invalid employee data. Make sure to include id, name, age, and department.' });
    }

    const existingEmployee = employees.find((employee) => employee.id === updatedEmployee.id);

    if (!existingEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    Object.assign(existingEmployee, updatedEmployee);

    return res.status(200).json(existingEmployee);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong while updating the employee' });
  }
};

const handleDeleteRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const employeeId: number = Number(req.query.id);

    if (isNaN(employeeId)) {
      return res.status(400).json({ error: 'Invalid employee ID' });
    }

    const existingEmployeeIndex = employees.findIndex((employee) => employee.id === employeeId);

    if (existingEmployeeIndex === -1) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    employees.splice(existingEmployeeIndex, 1);

    return res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong while deleting the employee' });
  }
};

export default employeeHandler;
