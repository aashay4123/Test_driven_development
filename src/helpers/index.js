export const getLetterMatchCount = (guessedWord, secretWord) => {
  let secretLetterSet = secretWord.split("");
  const guessedLetterSet = guessedWord.split("");
  let letters = [...secretLetterSet].filter((letter) =>
    guessedLetterSet.includes(letter)
  );

  return letters.length;
};
