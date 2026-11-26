import "dotenv/config";

import app from "./app";
import { connectDatabase, disconnectDatabase } from "./config/db";

const port = Number(process.env.PORT) || 3000;


async function startServer(): Promise<void> {
  try {
    await connectDatabase();
    console.log("PostgreSQL database connected");

    const server = app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });

    const shutdown = async (signal: string): Promise<void> => {
      console.log(`\n${signal} received. Shutting down...`);
      server.close(async () => {
        await disconnectDatabase();
        process.exit(0);
      });
    };

    process.once("SIGINT", () => void shutdown("SIGINT"));
    process.once("SIGTERM", () => void shutdown("SIGTERM"));
  } catch (error) {
    console.error("Failed to start server:", error);
    await disconnectDatabase().catch(() => undefined);
    process.exit(1);
  }
}

void startServer();
