import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requied: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        requied: true
    },
    message:{
        type: String,
        required: true
    },
    conversationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        default:[]
    }
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

export default Message;