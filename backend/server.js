const express = require("express");
const connectDB = require('./config/db.js')

const app = express();

app.use(express.json());

connectDB();


// Load Routes
const mainRouter = require('./routes/index.js')

app.use('/api/v1',mainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));