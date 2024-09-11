const forceButton = document.getElementById('force-answer-button');
const answerElement = document.getElementById('joke-answer');

const getAnswer = async () => {
  try {
    const response = await fetch(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,racist,sexist&type=single'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const answer = await response.json();
    return answer;
  } catch (error) {
    console.error('Error fetching joke:', error);
    return null;
  }
};

forceButton.addEventListener('click', async () => {
  try {
    answerElement.textContent = 'Loading...';
    const answer = await getAnswer();

    console.log('Fetched answer:', answer);

    if (!answer || !answer.joke) {
      answerElement.textContent = 'No joke found';
      return;
    }
    setTimeout(() => {
      answerElement.textContent = answer.joke;
    }, 2000);
  } catch (error) {
    answerElement.textContent = 'An error occurred while fetching the joke.';
    console.error('Error fetching joke:', error);
  }
});
