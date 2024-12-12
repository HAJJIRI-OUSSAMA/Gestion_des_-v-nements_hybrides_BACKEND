
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    mode : {
        type: String,
        required: true
    },
    lien : {
        type: String,
        required: true
    },
    listeParticipants : [{
        type: mongoose.Types.ObjectId,
        ref: 'Participant'
    }]
})

const EventModel = mongoose.model('Event', eventSchema);

export default EventModel;