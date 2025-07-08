import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { env } from "./env.ts";

import { ZodTypeProvider } from "fastify-type-provider-zod"





const app = fastify().withTypeProvider<ZodTypeProvider>()


app.register(fastifyCors, {
  origin: "http://localhost:3333",
})


app.get("/health", (req, res) => {
  res.send({ status: "ok" })
})


app.listen({ port: env.PORT  }, () => {
  console.log("Server is running on port 3333")
})