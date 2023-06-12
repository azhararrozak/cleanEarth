import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.blog || mongoose.model('blog', blogSchema)
export default Dataset