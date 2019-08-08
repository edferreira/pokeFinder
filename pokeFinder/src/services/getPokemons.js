export async function getPokemons() {
  const res = await fetch(
    "https://vortigo.blob.core.windows.net/files/pokemon/data/pokemons.json"
  );
  const la = await res.json();
  console.log(la);
  return la;
}
