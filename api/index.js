let app = require("express")();
let count;
//<smart type=code author=waff modified>
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://raw.githubusercontent.com/Electogenius/request-counter/main/api/count.txt");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        count = xhr.responseText
      }
    };
    xhr.send();
//</smart>
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
