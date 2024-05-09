export const code = {
i:'npm i express cors',
first:
`import express from 'express'

const app = express()
app.get('/',(req,res)=>{
    res.send({data:'Hello World!'})
})

app.listen(3001,()=>console.log('server connected'))`
}
