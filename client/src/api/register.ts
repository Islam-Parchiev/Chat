import type { NextApiRequest, NextApiResponse } from 'next';

interface RegistrationResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegistrationResponse>
) {
  if (req.method === 'POST') {
    const { name,email, password } = req.body;

    try {
      const backendUrl = "http://localhost:4000"; // URL вашего бэкенда
      const backendEndpoint = `${backendUrl}/user`;
      const response = await fetch(backendEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        res.status(200).json({ success: true, message: data.message });
      } else {
        res.status(response.status).json({ success: false, message: data.message || 'Ошибка регистрации' });
      }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Ошибка при регистрации:", error);
      res.status(500).json({ success: false, message: error.message || 'Произошла ошибка при регистрации' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Метод не разрешен' });
  }
}