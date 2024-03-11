export default async function handler(req, res) {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === 'GET') {
        if (!name) {
            res.status(400).json({error: 'name of pokemon is needed'});
        }
        try {
            const nameUrl = url + name;
            const detailResponse = await fetch(nameUrl);
            const detailData = await detailResponse.json();
    
            const sprite = detailData.sprites.front_default; // Default sprite image
            const type = detailData.types.map((typeEntry) => typeEntry.type.name); // Array of types
    
            res.status(200).json({name, sprite, type});
        } catch (error) {
            res.status(500).json({message: 'error fetching pokemon data'});
        }
    } else {
        res.status(400).json({message: 'method not allowed'});
        //405 -- the request method is known by the server but is not supported by the target resource
    }
}