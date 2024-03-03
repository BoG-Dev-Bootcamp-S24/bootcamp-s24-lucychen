const pokemonData = {}

export default async function handler(req, res) {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === 'GET') {
        if (name) {
            const callURL = url + name;
            const response = await fetch(callURL);
            const data = await response.json();
            res.status(200).json(data);
        }
        if (pokemonData(name)) {
            res.status(200).json(pokemonData(name));
        }
        if (name) {
            const callURL = url + name;
            const response = await fetch(callURL);
            const data = await response.json();
            res.status(200).json(data);
        } else if (req.method === 'POST') {
            const data = req.query.data;
            pokemonData[name] = data;
            res.status(200).json({message: "data overwritten for ${name}"});
        }
    }
}