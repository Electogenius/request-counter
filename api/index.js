let app = require("express")()
let fs=require("fs")
var a=Number(fs.readFileSync("./count.txt","utf-8"))
app.get("/api",(req, res)=>{
    a++
    fs.writeFileSync("./count.txt",a)
    res.write(String(a))
    res.end()
})
app.get
app.listen(3900)
