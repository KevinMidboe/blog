const express = require("express");
const app = express();
const path = require("path");
global.__base = path.join(__dirname, "..");
global.__middleware = path.join(__dirname, "middleware");
global.__controllers = path.join(__dirname, "controllers");

// logging
const logger = require(`${__base}/logger`);

// middleware
const httpContext = require("express-http-context");
const setupCORS = require(`${__middleware}/setupCORS`);
const setupHeaders = require(`${__middleware}/setupHeaders`);
const addIdToRequest = require(`${__middleware}/addIdToRequest`);
app.use(httpContext.middleware);
app.use(setupCORS);
app.use(setupHeaders);
app.use(addIdToRequest);

// parse application/json
app.use(express.json());

const router = express.Router();
// const TokenController = require(`${__controllers}/tokenController`);
const PostController = require(`${__controllers}/postController`);

router.get("/api/post/:id/render", PostController.renderPost);
router.get("/api/post/:id", PostController.getPost);
router.put("/api/post/:id", PostController.updatePost);
// router.post("/api/payment/callback/v2/payments/:id", PaymentController.updatePayment);

app.use(router);

logger.info("Server started, listening at :30010");

app.listen(30010);
