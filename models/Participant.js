import mongoose, { Mongoose } from "mongoose";

// Connect to MongoDB

const participantSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    modeParticipation: { 
        type: String,
        enum: ["individual", "group"],
        required: false
    },
    eventRef: { 
        type : mongoose.Types.ObjectId, 
        ref : "Event"
    }
});

const ParticipantModel = mongoose.model("Participant", participantSchema);

export default ParticipantModel;