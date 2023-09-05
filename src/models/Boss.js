const { Schema, models, model } = require("mongoose");

const bossSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

const Boss = models.Boss || model("Boss", bossSchema);

export default Boss;
