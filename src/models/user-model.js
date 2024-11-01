import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            required: true,
        },
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    createdAt: {
        type: Date.now,
        required: true,
        minLength: 5,
    },
    role: {
        type: String,
        enum: ["ADM", "USU"],
        required: true,
        default: "USU",
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

userSchema.pre("save", async function () {
    // Monta o hash criptografado
    this.password = await bcrypt.hash(this.password, 10);
});

// Define um método para a classe
userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.password);
};

const User = db.model("User", userSchema);

export default User;