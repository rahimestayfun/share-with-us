let stories = require('./../stories');
let id = 3;
let adminInfo = require('../admin');
// let isAdmin = false;

getStories=(req,res)=>{
    res.status(200).json(stories);
    // console.log(stories);
};
getStory=(req,res)=>{
    const storyId = +req.params.id;
    let story = stories.filter(el=>(
        el.id == storyId
    ))
    if(story){
        res.status(200).json(story);
    }else{
        res.status(500).json('not found')
    }   
};
addStory=(req,res)=>{
    id++;
    // const {name,title,category,image,content}= req.body;
    stories.push({...req.body,id});
    res.status(200).json(stories);
};
adminLogin=(req,res)=>{
    const {username,password}= req.body
    console.log(username, password)
    console.log(adminInfo.username, adminInfo.password)
    if(username == adminInfo.username && password == adminInfo.password){
        adminInfo = {username:username, password:password, isAdmin: true}
        // adminInfo.isAdmin = !adminInfo.isAdmin;
        res.status(200).json(adminInfo);
    }else{
        res.sendStatus(401)
    }
};
adminLogout=(req,res)=>{
    // const {username,password}= req.body  
    adminInfo = {isAdmin: false}
        // adminInfo.isAdmin = !adminInfo.isAdmin;
    res.status(200).json(adminInfo);
};


getAdminStatus = (req, res) => {
    res.status(200).json(adminInfo)
};

editStory=()=>{

};
deleteStory = ()=>{

};

module.exports ={
    getStories,
    addStory,
    editStory,
    deleteStory,
    getStory,
    getAdminStatus,
    adminLogin,
    adminLogout
}