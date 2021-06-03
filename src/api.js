export async function fetchImages() {
  const response = await fetch(`https://randomfox.ca/floof/`);
  const data = await response.json();
  return data;
}

export async function fetchAdvice() {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const data = await response.json();
  return data.message;
}