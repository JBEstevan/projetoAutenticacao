import e from "express";
import "dotenv/config";
import balance_router from "./routes/balance-route.js";
import coinTransfer_router from "./routes/coinTransfer-route.js";
import history_router from "./routes/history-route.js";
import scheduling_router from "./routes/scheduling-route.js";

const app = e();

app.use(e.json());

app.use("/balance", balance_router);
app.use("/coinTransfer", coinTransfer_router);
app.use("/history", history_router);
app.use("/scheduling", scheduling_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));