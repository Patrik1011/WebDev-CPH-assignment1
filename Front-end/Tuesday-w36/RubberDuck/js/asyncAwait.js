const forceButton = document.getElementById('force-answer-button');
const answerElement = document.getElementById('joke-answer');

const getAnswer = async () => {
  const response = await fetch(
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political,racist,sexist'
  );
  const answer = await response.json();
  return answer;
};

forceButton.addEventListener('click', async () => {
  const answer = await getAnswer();
  answerElement.textContent = '';
  if (answer.joke == undefined) {
    answerElement.textContent = 'No joke found';
    return;
  }
  answerElement.textContent = answer.joke;
});
