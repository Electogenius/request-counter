let app = require("express")()
var a=0 //index
app.get("/nth",(req, res)=>{
    a++
    let eth="th",e=String(a)
    if(!(/^\d*1\d$/.test(e))){
    if(e.endsWith("1"))eth="st"
    if(e.endsWith("2"))eth="nd"
    if(e.endsWith("3"))eth="rd"
    }
    res.write(e + eth)
    res.end()
})

app.get("/num",(req, res)=>{
    a++
    res.write(String(a))
    res.end()
})

app.get("/",(_,r)=>r.send(418))

app.get
app.listen(3900)
