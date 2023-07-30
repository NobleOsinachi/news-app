import Category from '@/models/Category';
import { NextApiRequest, NextApiResponse } from 'next';

// Example data store (you may replace this with your actual data store like a database)
let categories: Category[] = [
  { id: 1, name: 'business' },
  { id: 2, name: "entertainment" },
  { id: 3, name: "general" },
  { id: 4, name: "health" },
  { id: 5, name: "science" },
  { id: 6, name: "sports" },
  { id: 7, name: "technology" }
];

/*
export interface Category {
  id: number;
  name: string;
}
*/

const CategoryHandler = (req: NextApiRequest, res: NextApiResponse) => {
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
  res.status(200).json(categories);
};

const handlePostRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newCategory: Category = req.body;
    if (!newCategory.name) {
      return res.status(400).json({ error: 'Name is a required field' });
    }

    newCategory.id = categories.length + 1;
    categories.push(newCategory);

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong while adding the Category' });
  }
};

const handlePutRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const updatedCategory: Category = req.body;
    if (!updatedCategory.id || !updatedCategory.name) {
      return res.status(400).json({ error: 'Invalid Category data. Make sure to include id, name' });
    }

    const existingCategory = categories.find((Category) => Category.id === updatedCategory.id);

    if (!existingCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    Object.assign(existingCategory, updatedCategory);

    return res.status(200).json(existingCategory);
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong while updating the Category' });
  }
};

const handleDeleteRequest = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const CategoryId: number = Number(req.query.id);

    if (isNaN(CategoryId)) {
      return res.status(400).json({ error: 'Invalid Category ID' });
    }

    const existingCategoryIndex = categories.findIndex((Category) => Category.id === CategoryId);

    if (existingCategoryIndex === -1) {
      return res.status(404).json({ error: 'Category not found' });
    }

    categories.splice(existingCategoryIndex, 1);

    return res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong while deleting the Category' });
  }
};

export default CategoryHandler;
