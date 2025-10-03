export const useText = () => {
  const truncate = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return { truncate };
};
