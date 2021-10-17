const PostModel = require("../models/event.model");
const UserModel = require("../models/user.model");
const { uploadErrors } = require("../utils/errors.utils");
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.readEvent = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("errors to get data :" + err);
  });
};
module.exports.createEvent = async (req, res) => {
  let fileName;
  if (req.file !== null) {
    try {
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.body.posterId + Date.now() + ".jpg";

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../../public/uploads/events/${fileName}`
      )
    );
  }

  const newPost = new PostModel({
    posterId: req.body.posterId,
    eventName: req.body.eventName,
    eventType: req.body.eventType,
    link: req.body.link,
    picture: req.file !== null ? "./uploads/events/" + fileName : "",
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    nature: req.body.nature,
    info: req.body.info,
  });
  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};
module.exports.updateEvent = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);

  
    try{
      await PostModel.findOneAndUpdate(
        {_id:req.params.id},
        {
          $set:{
            posterId:req.body.posterId,
            eventName: req.body.eventName,
            eventType: req.body.eventType,
            link: req.body.eventLink,
            place:req.body.eventPlace,
            location: req.body.eventLocation,
            date: req.body.date,
            time: req.body.time,
            info:req.body.info,
            nature: req.body.stateEvent,
            
          },

        },
        { new: true },

        (err, docs) => {
          if (!err) return res.send(docs);
          if (err) return res.status(500).send({ message: err });
        }
       )
       } catch  (err) {
        return res.status(500).send({ message: err });
      }
      };
    
  





module.exports.deleteEvent = (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);

  PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("delete error :" + err);
  });
};
  


module.exports.likeEvent = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likers: req.body.id },
      },
      { new: true },
      (err, docs) => {
        if (err) return res.status(400).send;
      }
    );

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { likes: req.params.id },
      },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.unlikeEvent = async (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("id unknown :" + req.params.id);
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { unlikers: req.body.id },
      },
      { new: true },
      (err, docs) => {
        if (err) return res.status(400).send;
      }
    );

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        $addToSet: { unlikes: req.params.id },
      },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};
