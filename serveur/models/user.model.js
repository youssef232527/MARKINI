const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
      unique: true,
      trimp: true,
    },
    firstName:{
      type:String,
      minLength: 3,
      maxLength: 55,
      trimp: true,
    },
    lastName:{
      type:String,
      minLength: 3,
      maxLength: 55,
      trimp: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      max: 1024,
      minlength: 6,
    },
    kind: {
      type: String,
      required: true,
      max: 70,
    },
    status:{
      type:String
      
    },
    picture: {
      type: String,
      default: "./uploads/profil/profil.png",
    },
    phone: {
      type: String,
      require: true,
      maxlength: 8,
      minlength: 8,
    },
    likes: {
      type: [String],
    },
    unlikes:{
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

/**crypter le mots de pass avant le save en data  base */
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function(pseudo, password) {
  const user = await this.findOne({ pseudo });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect pseudo')
};

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
