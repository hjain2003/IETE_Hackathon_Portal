import mongoose, { model } from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName:{
        type:String
    },
    teamMembers:{
        type:String
    },
    psname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ps'
    }
});



export default model("team", teamSchema);