let app = require("express")()
let fs=require("fs")
let count = Number(fs.readFileSync("./count.txt","utf-8"))
app.get("/api",(req, res)=>{
    //<smart type=code author=waff>
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://api.github.com/repos/liimee/request-counter/actions/workflows/rickroll.yml/dispatches');
    xhr.setRequestHeader("Authorization", "Bearer sometokenhere");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    };
    xhr.send('{"ref": "main"}');
    //</smart>
    count++
    res.write(count)
    res.end()
})
app.listen(3900)
