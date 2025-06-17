import express from "express";
import accountRoutes from "./accounts.routes";

const app = express();
app.use(express.json());

app.use("", accountRoutes);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
