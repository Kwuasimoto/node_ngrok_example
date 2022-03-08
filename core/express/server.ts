/**
 * Build Express Server
 */

import ExpressServerBuilder from "./ExpressServerBuilder";

export function startServer() {
    new ExpressServerBuilder()
        .open()
        .listen()
}


