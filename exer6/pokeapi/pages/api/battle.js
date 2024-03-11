export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method === "POST") {
        try {
            const poke_1 = req.query.poke_1;
            const poke_2 = req.query.poke_2;
        
            const data_1 = await fetch(url + poke_1);
            const dataPoke_1 = await data_1.json(); 
            const data_2 = await fetch(url + poke_2);
            const dataPoke_2 = await data_2.json();
        
            let sum_1 = 0;
            dataPoke_1.stats.forEach(each => {
                sum_1 += each.base_stat;
            })
        
            let sum_2 = 0;
            dataPoke_2.stats.forEach(each => {
                sum_2 += each.base_stat;
            })
        
            if (sum_1 > sum_2) {
                res.status(200).json({winner: poke_1});
            } else if (sum_1 < sum_2) {
                res.status(200).json({winner: poke_2});
            } else {
                res.status(200).json({winner: poke_1 + 'and' + poke_2 + 'are tied'});
            }
        } catch (error) {
            res.status(500).json({message: 'error fetching pokemon data'});
        }    
    } else {
        res.status(400).json({message: 'method not allowed'});
    }   
}