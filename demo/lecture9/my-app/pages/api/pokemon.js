const pokemonData = {}

//can only have 1 export default in a file
export default async function handler(req, res) {
  const name = req.query.name;
  const url = "https://pokeapi.co/api/v2/pokemon/";

  if (req.method === 'GET') { //GET is used to request data from a specified resource
    if(!name) {
      res.status(400).json({error : "name is required"});
    }
    if (pokemonData[name]) {
      res.status(200).json(pokemonData[name]);
    }
    if (name) {
      const callURL = url + name;
      const response = await fetch(callURL);
      const data = await response.json();
      res.status(200).json(data);
    } 
  } else if (req.method === 'PUT') { //PUT is used to update or create a resource at a specified location
    const data = req.query.data;
    pokemonData[name] = data;
    res.status(200).json({ message: `data overwritten for ${name}`});
  }
}