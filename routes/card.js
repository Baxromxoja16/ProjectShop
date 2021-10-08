const { Router } = require("express");
const router = Router();
const Phone = require("../model/Phone");
const Card = require("../model/Card");

router.post("/add", async (req, res) => {
  const phone = await Phone.getById(req.body.id);
  await Card.add(phone);
  res.redirect("/card/add");
});

router.get('/add',(req,res)=>{
    res.render('/card',{
        title:'Shopping card'
    })
})

module.exports = router;
