import Mongoose from 'mongoose'

const Setting = Mongoose.model('Setting',
  Mongoose.Schema({ 
    name: String
  },
  {
    timestamps: true
  })
);

export default Setting