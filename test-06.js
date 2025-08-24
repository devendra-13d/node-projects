import { createLogger, transports, format } from 'winston';
import pino from "pino";
/**
 * Logging
 */

// ============================using winston====================================
const logger = createLogger({
    level: "info",
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename:"app.log"})
    ]
});

logger.info(`App started`);
logger.error(`Something went wrong`);

const target=pino.destination('./app.log')
const loggerPino = pino(target);
loggerPino.info("Server started");
loggerPino.error({ err: "Database connection failed" }, "Error occured");