const URL = 'http://localhost:3030';

export const getAll = async (onde: string) => {
  try {
    const response = await fetch(`${URL}/${onde}`);
    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error);
  }
};
