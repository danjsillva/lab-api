import Mongoose from 'mongoose'

const User = Mongoose.model('User',
  Mongoose.Schema({ 
    email: String, 
    password: String,
    profile: String,
    deleted: Boolean,
    createdAt: Date,
    updatedAt: Date
  },
  {
    timestamps: true
  })
);

export default User