import express, { NextFunction, Request, Response } from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);

app.use((err: any, request: Request, response: Response, next: NextFunction) => {
    return response.status(400).json({ error: err.message });
})


export { app };
