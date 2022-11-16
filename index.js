import express from "express";
import cors from "cors";
import DestinationRoute from "./routes/DestinationRoute.js";
import RestaurantRoute from "./routes/RestaurantRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use (DestinationRoute);
app.use (RestaurantRoute);

app.get("/",(req, res) => res.send("<h1>Hello World</h1>"));
app.listen(5000, () => console.log("server running on port 5000"));