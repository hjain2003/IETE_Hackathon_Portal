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
        ref:'Problem'
    }
});



export default model("Team", teamSchema);