const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");

const app = express();
const PORT = process.env.PORT || 6969;

dotenv.config();
// 
app.use(cors({
    origin: "https://notes-frontend-five-henna.vercel.app",  // 🔹 Replace with your Vercel frontend URL
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));
// 
// https://notes-frontend-five-henna.vercel.app/
app.use(bodyParser.json());
app.use(express.json());


try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Successfull");
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("Server Is Running");
});


app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/files", express.static("files"));

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})