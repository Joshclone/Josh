const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: [String],
    education: [{
        institution: String,
        degree: String,
        major: String,
        startDate: Date,
        endDate: Date
    }],
    experience: [{
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        responsibilities: [String]
    }],
    portfolio: [{
        title: String,
        description: String,
        filePath: String
    }]
});

const profileSchema = mongoose.model("profiles", profile);
module.exports = profileSchema;
