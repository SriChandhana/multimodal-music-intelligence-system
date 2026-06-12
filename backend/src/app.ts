  import express from "express";
  import cors from "cors";
  import textRoutes
  from "./routes/text.routes";
  import orchestratorRoutes
  from "./routes/orchestrator.routes";

  import audioRoutes from "./routes/audio.routes";

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Music Intelligence Backend Running");
  });

  app.use("/api/audio", audioRoutes);
  app.use(
    "/api/text",
    textRoutes
  );
  app.use(
    "/api/orchestrator",
    orchestratorRoutes
  );
  export default app;