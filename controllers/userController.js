export let home = (req,res)=>{
    res.render("index")
}

export let about = (req,res)=>{
    res.send("about")
}

export let dynamicID = (req,res)=>{
    const {pid} = req.params
    res.send(`<h1>welcome to my page mr : ${pid}</h1>`)
   
}