import Mongoose from 'mongoose'

const Course = Mongoose.model('Course',
  Mongoose.Schema({ 
    name: String, 
    description: String,
    tags: Array,
    trailer: String,
    summary: String,
    requirements: String,
    feedbacks: Array,
    deleted: Boolean,
    createdAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  })
);

export default Course