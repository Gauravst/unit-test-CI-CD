import dotenv from "dotenv";
import { PORT } from "./src/constants";
import { app } from "./src/app";

// dotenv configuration
dotenv.config();

try {
  app.listen(process.env.PORT || PORT, () => {
    console.log(`⚙️ Server is running at port: ${process.env.PORT || PORT}`);
  });
} catch (err) {
  console.log(err);
}
