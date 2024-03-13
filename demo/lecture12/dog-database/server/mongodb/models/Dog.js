//store the dog data
import mongoose from "mongoose";

const dogSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: String
})
//has to have a String name, a Number age.
//may have a String breed

export default mongoose.model("Dog", dogSchema)