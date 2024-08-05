// 1 define obj
const bodyParser = require("body-parser");
const express = require("express");
const { addEmp, search } = require("./module1");

const app = express();

// 2 middle-ware
app.use(bodyParser.urlencoded({ extended: false }));

// 3 routes
app.get("/", (req, res) => {
  res.sendFile("public/emp-form.html", { root: __dirname });
});

app.post("/submitData", (req, res) => {
  let eid = req.body.id;
  let enm = req.body.enm;
  let esal = req.body.esal;
  let e = { eid, enm, esal }; //==> euivalent to {eid:eid,enm:enm:esal:esal}
  if (req.body.btn1 == "add") {
    msg = addEmp(e);

    res.end(JSON.stringify(e));
  } else {
    console.log(e.eid);
    let eid =  parseInt(req.body.eid);
    obj1 = search(eid);
    if(obj1==undefined){
    res.send(JSON.stringify(obj1));
  
    }else{
        res.end("not found");
    }
  }
});

app.listen(3001, () => {
  console.log("server started at 3001");
});
