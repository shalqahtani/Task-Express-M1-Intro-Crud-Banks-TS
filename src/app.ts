import express from "express";
import accountRoutes from "./apis/accounts.routes";
import connectDB from "./database";

const app = express();
app.use(express.json());

app.use("", accountRoutes);
connectDB();
app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
