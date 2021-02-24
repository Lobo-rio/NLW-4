import express from 'express'

const app = express()

app.get("/users", (request, response)=>{
    return response.json({ message: "hello world! - nlw-04"})
})

app.post("/users", (request, response)=>{

    return response.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen(3003, ()=> console.log("Server is running!"))
