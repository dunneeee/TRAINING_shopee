export const shortWord = (word: string, maxLength = 10) => {
  const wordSplit = word.split(' ');
  if (wordSplit.length < maxLength) return word;
  return wordSplit.slice(0, maxLength).join(' ') + '...';
};
