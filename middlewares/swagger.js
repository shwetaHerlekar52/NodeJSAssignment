const constants = require("../constant");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    info: {
      title: "User-Post APIs",
      version: "1.0.0"
    },
    basePath: "/"
  },
  apis: ["../routes/*.js"]
};
const specs = swaggerJsdoc(options);

const setupSwagger = app => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = setupSwagger;
