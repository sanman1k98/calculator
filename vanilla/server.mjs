import { Server } from "node-static"
import * as http from "http"

const file = new Server("./src")

http.createServer((req, res) => {
    req.addListener("end", () => { 
        file.serve(req, res)
    }).resume()
}).listen(8080)