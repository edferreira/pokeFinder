export async function getPokemonTypes() {
  const res = await fetch(
    "https://vortigo.blob.core.windows.net/files/pokemon/data/types.json"
  );
  return await res.json();
}
