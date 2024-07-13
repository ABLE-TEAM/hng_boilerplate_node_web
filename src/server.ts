import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

const file = fs.readFileSync(path.join(__dirname, "../openapi.yaml"), "utf8");
const swaggerDocument = YAML.parse(file);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger UI at available at http://localhost:${port}/api-docs`);
});

export default app;
