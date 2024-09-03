import * as log4js from "log4js";

log4js.configure({
    appenders: { cheese: { type: "file", filename: "output.log" } },
    categories: { default: { appenders: ["cheese"], level: "info" } },
});

const logger = log4js.getLogger("cheese");

export { logger };