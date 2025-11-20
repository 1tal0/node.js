// Criação de servidor com http (padrão do Node.js)

const http = require("http")

const port = 8080

const server = http.createServer((request, response) => {
    if(request.url === "/home") {
        response.writeHead(200, {"Content-Type": "text/html"})
        response.end("<h1>Home page</h1>")
    }

    if(request.url === "/users") {
        const users = [
            {
                name: "Joao Silva",
                email: "joao.silva@email.com"
            },
            {
                name: "Maria",
                email: "maria@email.com"
            }
        ]

        response.writeHead(200, {"Content-Type": "application/json"})
        response.end(JSON.stringify(users))
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}`))