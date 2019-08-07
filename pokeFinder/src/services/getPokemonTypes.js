export function getPokemonTypes () {
    return fetch('https://vortigo.blob.core.windows.net/files/pokemon/data/types.json').then(
        res=>res.json()
    )
}