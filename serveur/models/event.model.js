const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    eventType:{
      type:String,
      // require:true,
      maxlength:100,
    },
    link:{
      type:String,

    },
    location:{
      type:String
    },
    place:{
      type:String
    },
    date:{
      type:String
    },
    time:{
      type:String
    },
    nature:{
      type:String
    },
    info: {
      type: String,
      // required: true,
    },
    likers:{
      type:[String]
    },
    unlikers:{
      type:[String]
    },
    picture: {
      type: String,
      default: "./uploads/events/event.PNG",
    },
   
  },
  {
    timestamps: true,
  }
);
module.exports=mongoose.model('events',PostSchema);