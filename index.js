"use strict";
const express = require("express");
require("dotenv").config();
const app = express();

const env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");
const config = require("./server/config")[env];

require("./server/mongoose")(config);
require("./server/express")(app, config);
require("./server/apiRoutes")(app);

