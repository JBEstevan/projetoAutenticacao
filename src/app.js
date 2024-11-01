import e from "express";
import "dotenv/config";

import user_router from "./routes/user-route.js";
import wallet_router from "./routes/wallet-route.js";
import transactions_router from "./routes/transactions-route.js";
import scheduling_router from "./routes/scheduling-route.js";

const app = e();

app.use(e.json());

app.use("/user", user_router);
app.use("/wallet", wallet_router);
app.use("/transactions", transactions_router);
app.use("/scheduling", scheduling_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));