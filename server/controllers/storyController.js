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
    // const {fullName,title,category,image,content}= req.body;
    stories.push({id,...req.body});
    res.status(200).json(stories);
};
adminLogin=(req,res)=>{
    const {username,password}= req.body
    // console.log(username, password)
    // console.log(adminInfo.username, adminInfo.password)
    if(username == adminInfo.username && password == adminInfo.password){
        adminInfo = {username:username, password:password, isAdmin: true}
        // adminInfo.isAdmin = !adminInfo.isAdmin;
        res.status(200).json(adminInfo);
    }else{
        res.sendStatus(401)
    }
};
adminLogout=(req,res)=>{
    const {username,password}= req.body  
    // adminInfo = {username,password,isAdmin: false}
    adminInfo = {isAdmin: false}
        // adminInfo.isAdmin = !adminInfo.isAdmin;
    res.status(200).json(adminInfo);
};


getAdminStatus = (req, res) => {
    res.status(200).json(adminInfo)
};

deleteStory = (req,res)=>{
    let storyId = +req.params.id;
    let index = stories.findIndex(el=> el.id === storyId);
    stories.splice(index,1);
    res.status(200).json(stories);
    // console.log(stories);
};
editStory=(req,res)=>{
    let storyId = +req.params.id;
    const {fullName,title,category,image,content} = req.body;
    let index = stories.findIndex(el=> el.id === storyId);
    
    stories[index]={
        id:stories[index].id,
        fullName: fullName || stories[index].fullName,
        title: title || stories[index].title,
        category: category || stories[index].category,
        image: image || stories[index].image,
        content:content||stories[index].content
    }
    console.log(stories)
    // stories[index].fullName = fullName;
    // stories[index].title = title;
    // stories[index].category= category;
    // stories[index].image= image;
    // stories[index].content= content;
    res.status(200).json(stories);
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