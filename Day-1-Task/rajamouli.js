const dialogues = ["Mahendra Baahubali yagiya naan"];

const getDialogue = () => {
  const randomIndex = Math.floor(Math.random() * dialogues.length);
  return dialogues[randomIndex];
};

export default getDialogue;
