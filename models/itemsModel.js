const mongoose = require('mongoose');

const Schema = mongoose.Schema; // get access to Schema constructor 

const itemSchema = new Schema({
    itemName: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: true },
    goalDate: { type: Date, required: false },
    subject: { type: String, required: false },
    filename: { type: String, required: false },
    attachmentUrl: { type: String, required: false },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

// happens initially when save is called
itemSchema.pre('save', function (next) {
    // if createdAt does not exist, assign it new date
    if (!this.createdAt) { this.createdAt = new Date(); }
    this.updatedAt = new Date();

    next();
});

module.exports = mongoose.model('Item', itemSchema);