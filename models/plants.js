const mongoose = require ('mongoose');

const plantSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    common_names: {
        type: {
            English: [String],
            Hindi: [String]
        },
        required: true
    },
    soil_and_climate: {
        description: {
            type: String,
            required: true
        }
    },
    land_preparation: {
        description: {
            type: String,
            required: true
        }
    },
    propagation: {
        description: {
            type: String,
            required: true
        },
        seedlings_ready: {
            type: String,
            required: true
        },
        spacing: {
            type: String,
            required: true
        }
    },
    nursery: {
        preparation: {
            type: String,
            required: true
        },
        germination_time: {
            type: String,
            required: true
        },
        additional_info: String
    },
    planting_time: {
        type: String,
        required: true
    },
    types: [
        {
            name: String,
            description: String
        }
    ],
    manure_and_fertilizer: {
        description: {
            type: String,
            required: true
        },
        application_timing: String
    },
    irrigation: {
        description: {
            type: String,
            required: true
        },
        summer: String,
        winter: String,
        mulch: String
    }
});

module.exports = mongoose.model('Plant', plantSchema);