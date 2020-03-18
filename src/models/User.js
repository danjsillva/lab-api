import Mongoose from 'mongoose'

const User = Mongoose.model('User', { 
  email: String, 
  password: String 
});

export default User