import mongoose, { model } from "mongoose";

const problemSchema = new mongoose.Schema({
    psname:{
        type:String
    },
    pscount:{
        type:Number,
        default:0
    }
});



export default model("Problem", problemSchema);