// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const expressSession = require("express-session");
// const sessionConfig = require("./sessionConfig");
// const cookieParser = require("cookie-parser");
// // const clearCookie = require("../middleware/clearCookie");
// // const checkIsAuth = require("../middleware/checkIsAuth");

// const config = (app) => {
//   // Use
//   app.use(cookieParser());
//   app.use(express.urlencoded({ extended: true }));
//   app.use(express.json());
//   app.use(
//     cors({
//       origin: ["http://localhost:3000"],
//       credentials: true,
//     })
//   );
//   app.use(helmet());
//   app.use(morgan("dev"));
//   app.use(expressSession(sessionConfig));
//   // app.use(clearCookie);
//   // app.use(checkIsAuth);
// };

// module.exports = config;
