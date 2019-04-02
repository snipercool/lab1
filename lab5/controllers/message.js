let get = (req, res)=> {
    res.json({
        "status": "succes",
        "messages": "Getting a new message from user Pikachu"
    });
}

module.exports.get = get;

let post = (req, res)=>{
    res.json({
        "status": "succes",
        "messages": "Posting a new message for user Pikachu"  
    });
}

module.exports.post = post;