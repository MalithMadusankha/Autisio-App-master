import ENDPOINT, {ANY_ENDPOINT} from '../constants/constants';

const CreateNewGame = async game => {
  const response = await fetch(`${ENDPOINT}game`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to create new game');
  }
};

export const GetAnalysis = async () => {
  const response = await fetch(`${ANY_ENDPOINT}analysis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: null,
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Failed to create new game');
  }
};

export default CreateNewGame;
