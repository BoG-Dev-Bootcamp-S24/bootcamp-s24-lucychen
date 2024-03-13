import { Bonbon } from "next/font/google";
import createDog from "../../../server/mongodb/actions/createDog";

//when a dog is created, we need to add dog to the pages
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createDog(req.body);
            return res.status(200).send("Dog created successfully");
        } catch (e) {
            return res.status(500).send("Error creating dog");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}

//http://localhost:3000/api/addDog body -> raw -> enter dog message 
// {
//     "name" : "Bob",
//     "age" : 4,
//     "breed" : "hii"
// }