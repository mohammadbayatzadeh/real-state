const { Schema, models, model } = require("mongoose");

const profileSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    contructionDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rules: {
      type: [String],
      required: true,
      default: [],
    },
    amenities: {
      type: [String],
      required: true,
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Boss",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;
