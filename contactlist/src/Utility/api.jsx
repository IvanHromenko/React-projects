import axios from 'axios';

const getRandomUser = async () => {
  try {
    const response = await axios.get('https://random-data-api.com/api/v2/users', {
      headers: {},
        params: {
            size: 1,
            is_xml: false,
            is_json_schema: false,
        },
    });
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching random user:', error);
    throw error;
  }
}

export {getRandomUser};
// This function fetches a random user from the Random Data API and returns the first result.