const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
