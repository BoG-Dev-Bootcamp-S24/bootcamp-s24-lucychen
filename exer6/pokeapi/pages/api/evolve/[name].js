export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon-species/";

    if (req.method === 'GET') {
        try {
            const name = req.query.name;
            const species = await fetch(url + name);
            const detailSpecies = await species.json();

            const evolutionUrl = detailSpecies.evolution_chain.url;

            const evolution = await fetch(evolutionUrl);
            const evolutionRes = await evolution.json();
            const evolutionChain = evolutionRes.chain;

            if (evolutionChain.evolves_to.length === 0) {
                res.status(200).json({"Pokemon": name});
            } else {
                let temp = evolutionChain.evolves_to[0];
                let newName = name;
                while (temp.species.name !== name && temp.evolves_to.length !== 0) {
                    temp = temp.evolves_to[0];
                }
                if (temp.evolves_to.length !== 0) {
                    newName = temp.evolves_to[0].species.name;
                }
                res.status(200).json({"Pokemon": newName});
            }
        } catch (error) {
            res.status(500).json({message: 'error fetching pokemon data'});
        }
    } else {
        res.status(400).json({message: 'method not allowed'});
        //405 -- the request method is known by the server but is not supported by the target resource
    }     
    
}