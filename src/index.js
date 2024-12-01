

import express from 'express'
import { router } from './route'

let app=express()
app.use(express.json())
app.use(router)


app.listen(3333,()=>console.log('Servidor rodando'))



