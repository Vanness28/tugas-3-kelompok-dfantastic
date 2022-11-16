import express from "express";
import cors from "cors";
import DestinationRoute from "./routes/DestinationRoute.js";
import RestaurantRoute from "./routes/RestaurantRoute.js"
import DetailRestaurantRoute from "./routes/DetailRestaurantRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use (DestinationRoute);
app.use (RestaurantRoute);
app.use (DetailRestaurantRoute);

app.get("/",(req, res) => res.send("<h1>Hello World</h1>"));
app.listen(6000, () => console.log("server running on port 6000"));