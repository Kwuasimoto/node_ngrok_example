/**
 * Express Server Builder
 */

import express, {Express} from "express";
import bodyParser from "body-parser";

export default class ExpressServerBuilder {
    private readonly _app: Express
    private readonly _port: number = 3000

    constructor() {
        this._app = express()
            .use(express.json({type: "*/*"}))
            .use(bodyParser.json())
    }

    /**
     * Open Express Endpoints
     */
    open(): ExpressServerBuilder {

        this._app.post('/api/webhook', (req, res) => {

            console.log(req.body)

            return res.status(200).json({success:"Route hit"})
        })

        return this
    }

    /**
     * Express.listen
     */
    listen(): void {
        this._app.listen(this._port, () => console.log(`Server listening on ${this._port}`))
    }
}