//const URL = 'http://localhost:3030';
const URL2 = 'https://apis.codante.io/olympic-games'

export const getAll = async (onde: string) => {
  try {
    const response = await fetch(`${URL2}/${onde}`);
    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error);
  }
};
