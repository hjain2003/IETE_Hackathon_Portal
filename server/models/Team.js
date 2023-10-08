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
        ref:'problem'
    }
});



export default model("Team", teamSchema);