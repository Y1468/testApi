import { Router } from "express"

const router=Router()

router.get('/test',(req,res)=>{
    return res.json({ok:true})
})

export{router}