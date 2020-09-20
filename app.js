const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
let items = ["Buy food", "Cook food", "Eat food"];
let workitem=[];
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  let day = today.toLocaleDateString("en-us", options);
  res.render("list", { listTitle: day, listItem: items }); //render all this options
});

app.post("/", function (req, res) {
  let newitem = req.body.item;
  //console.log(req.body.list);
  if(req.body.list=="Work List"){
      workitem.push(newitem);
      res.redirect("/work");
  }
  else{
    items.push(newitem);
    res.redirect("/");
  }
   //redirects to home route so that app.get will be called
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",listItem:workitem});
})




app.listen(3000, function () {
  console.log("server is up and running!");
});

// if(today.getDay()===6 ){
//     day="saturday";
// }
// else if(today.getDay()==0){
//     day="sunday";
// }
// else if(today.getDay()==1){
//     day="monday";
// }
// else if(today.getDay()==2){
//     day="tuesday";
// }
// else if(today.getDay()==3){
//     day="wednesday";
// }
// else if(today.getDay()==4){
//     day="thursday";
// }
// else if(today.getDay()==5){
//     day="friday";
// }
