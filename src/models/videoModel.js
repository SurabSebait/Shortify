import mongoose from "mongoose";


const VideoSchema = new mongoose.Schema({
    Videoname: {
        type: String,
        required: [true, "Please enter the video name"],
    },
    VideoFile: {
        type: mongoose.Schema.Types.ObjectId, // Storing GridFS ObjectId
        ref: 'uploads.files', // Refers to the GridFS bucket
        required: [true, "Choose a file"],
    },
    Likes: {
        type: Number,
        default: 0
    },
    Tags: {
        type: Array,
        required: [true, "Please enter atleast one tag"],
        default: []
    },
    Comments: {
        type: Array,
        default: []
    },
    UserId: {
        type: String,
    },



})

const Video = mongoose.models.videos || mongoose.model("videos", VideoSchema)
export default Video

// at the end the name of the collection is all lowercase letters so in code, keep the variable name slightly different so as to keep the code look cleaner...