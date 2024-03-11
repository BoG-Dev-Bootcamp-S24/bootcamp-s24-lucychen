export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/type/";
    const type = req.query.type;

    if (req.method === "GET") {
        if (!type) {
            res.status(400).json({error: 'name of pokemon is needed'});
        }
        try {
            const typeUrl = url + type;

            const typeResponse = await fetch(typeUrl);
            const typeData = await typeResponse.json();

            const pokemon = []
            typeData.pokemon.forEach(each => {
                pokemon.push(each.pokemon.name);  
            })
            
            res.status(200).json({pokemon});
        } catch (error) {
            res.status(500).json({message: 'error fetching pokemon data'});
            //500 -- "Internal Server Error" the server encountered an unexpected condition that prevented it from fulfilling the request
        }
    } else {
        res.status(400).json({message: 'method not allowed'});
        //405 -- the request method is known by the server but is not supported by the target resource
    }
}