const restana = require('restana')
const bodyParser = require('body-parser')
const nearley = require('nearley')
const fs = require("fs")
const shell = require("shelljs")
const cors = require("cors")
const exec = require("sync-exec")

const service = restana()
service.use(bodyParser.json())
service.use(cors())

service.post('/', async (req, res) => {
    // get grammar text
    let { grammar, input } = req.body
    // clean up inputs
    grammar = grammar.trim()
    input = input.trim()
    // make temp file and write grammar to temp
    const grammartemp = "./temp.ne"
    fs.writeFileSync(grammartemp, grammar);
    const grammaroutputtemp = "./temp.js"
    exec(`touch ${grammaroutputtemp}`)
    exec(`npx nearleyc "${grammartemp}" -o ${grammaroutputtemp}`)
    // parse input with grammar
    try {
	res.send(shell.exec(`nearley-test -i "${input}" ${grammaroutputtemp} | ansi2txt`), 200, {
	    'content-type': 'text/plain'
	})
    } catch (e){
	res.send({"message": e.message, req: req.body})
    }
})

service.start(process.env.PORT).then((server) => { console.log("service started", process.env.PORT) })
