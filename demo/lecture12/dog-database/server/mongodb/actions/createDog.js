import connectDB from ".."
import Dog from "../models/Dog";

export default async function createDog(data) {
    try {
        await connectDB();
        const dog = new Dog(data); //create a dog
        await dog.save(); //automatcally save that dog to database     
    } catch (e) { //error handling part
        console.log(e);
        throw e;
    }
}