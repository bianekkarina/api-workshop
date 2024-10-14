import { Schema, model } from 'mongoose'

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: 'Workshop',
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    services: [
        {
            name: {
                type: String,
                required: true
            },
            prices: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
})

export default model('Maintenance', maintenanceSchema)

/*{
  "workshop": "6708265c1ebe85b958a77775",
  "vehicle": "6708229f94225091927a6511",
  "services": [
    {"name": "teste2", 
    "prices": "666"}
      ],
  "date": "2000-12-03",
  "totalCost": "2222"
}
*/