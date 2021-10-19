import express from "express"
import cors from "cors"
import fetch from "node-fetch";
import fs from "fs";
// import xmlParser from "xml2json";

const app = express()
const port = 5000

app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {

    const response = {
        name: "ram"
    }
    res.send(response)
})

app.get("/news", async (req, res) => {
    
    fetch('https://rss.walla.co.il/feed/557')
        .then(response => {
            console.log(response);
            // parsing xml data
            fs.readFile(response.body, 'utf8', function (err, data) {
                if (err) {
                    console.error(err)
                    return
                }
                let jsonData = xmlParser.toJson(data);
                console.log(jsonData);

            });
        })
        // .then(data => {
        //     console.log(data);
        //     res.send(data)
        // })
})

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })