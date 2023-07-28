import { NextApiRequest, NextApiResponse } from 'next';
interface Data {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>) {
    res.status(200).json({ message: 'Hello, World!' });
}
