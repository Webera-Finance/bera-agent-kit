"use strict";
// let winston: any = {};
// let path;
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
// // Check if fs module is available
// let fs: typeof import("fs") | null = null;
// try {
//   fs = require("fs");
//   path = require("path");
//   winston = require("winston");
// } catch {
//   fs = null;
// }
// // Simple console logger for environments without winston
// const createSimpleLogger = () => {
//   return {
//     info: (message: string, ...meta: any[]) => {
//       console.log(`[INFO] ${message}`, ...meta);
//     },
//     warn: (message: string, ...meta: any[]) => {
//       console.warn(`[WARN] ${message}`, ...meta);
//     },
//     error: (message: string, ...meta: any[]) => {
//       console.error(`[ERROR] ${message}`, ...meta);
//     },
//     debug: (message: string, ...meta: any[]) => {
//       console.debug(`[DEBUG] ${message}`, ...meta);
//     },
//     add: () => {},
//     log: () => {},
//   };
// };
// // Try to create winston logger, fallback to simple logger
// let logger: any;
// try {
//   // Determine log directory
//   const logDir = fs ? path.join(process.cwd(), "logs") : "./logs";
//   // Ensure logs directory exists if fs is available
//   if (fs) {
//     try {
//       fs.mkdirSync(logDir, { recursive: true });
//     } catch (error) {
//       console.warn("Could not create logs directory:", error);
//     }
//   }
//   logger = winston.createLogger({
//     level: "info",
//     format: winston.format.combine(
//       winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
//       winston.format.errors({ stack: true }),
//       winston.format.splat(),
//       winston.format.json(),
//     ),
//     defaultMeta: { service: "bera-agent-kit" },
//     transports: fs
//       ? [
//           // Error logs
//           new winston.transports.File({
//             filename: path.join(logDir, "error.log"),
//             level: "error",
//             maxsize: 5242880, // 5MB
//             maxFiles: 5,
//           }),
//           // Combined logs
//           new winston.transports.File({
//             filename: path.join(logDir, "combined.log"),
//             maxsize: 5242880, // 5MB
//             maxFiles: 5,
//           }),
//         ]
//       : [],
//   });
//   // Always add console transport
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple(),
//       ),
//     }),
//   );
// } catch {
//   // Fallback to simple console logger if winston is not available
//   logger = createSimpleLogger();
// }
const logger = console;
// Export different log levels for convenience
exports.log = {
    info: (message, ...meta) => logger.info(message, ...meta),
    warn: (message, ...meta) => logger.warn(message, ...meta),
    error: (message, ...meta) => logger.error(message, ...meta),
    debug: (message, ...meta) => logger.debug(message, ...meta),
};
exports.default = logger;
//# sourceMappingURL=logger.js.map