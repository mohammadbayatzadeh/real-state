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
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Boss = models.Boss || model("Boss", bossSchema);

export default Boss;
