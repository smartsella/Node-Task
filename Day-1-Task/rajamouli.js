const dialogues = ["Mahendra Baahubali thanne!"];

const getDialogue = () => {
  const randomIndex = Math.floor(Math.random() * dialogues.length);
  return dialogues[randomIndex];
};

export default getDialogue;
