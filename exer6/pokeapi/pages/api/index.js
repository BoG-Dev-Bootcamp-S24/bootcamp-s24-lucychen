export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "GET") {
        try {
            const response = await fetch(url);
            const listData = await response.json();

            const randomIndex = Math.floor(Math.random() * listData.results.length); 
            // results is a list in pokeAPI, each entry of the list include poke's name + url
            const randomUrl = listData.results[randomIndex].url;

            const detailResponse = await fetch(randomUrl);
            const detailData = await detailResponse.json();

            const name = listData.results[randomIndex].name;
            const sprite = detailData.sprites.front_default; // Default sprite image
            const type = detailData.types.map((typeEntry) => typeEntry.type.name); // Array of types
            
            res.status(200).json({name, sprite, type});
        } catch (error) {
            res.status(500).json({message: 'error fetching pokemon data'});
            //500 -- "Internal Server Error" the server encountered an unexpected condition that prevented it from fulfilling the request
        }
    } else {
        res.status(400).json({message: 'method not allowed'});
        //405 -- the request method is known by the server but is not supported by the target resource
    }
}