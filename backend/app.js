import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import koaCors from 'koa-cors';

import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

const port = 5000;
const app = new Koa();
const router = new KoaRouter();

//use as middlware
app.use(bodyParser());
app.use(koaCors())

app.use(bookRoutes.routes());
app.use(userRoutes.routes());
app.use(customerRoutes.routes());

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => { console.log("Server is runig on : " + port) })

