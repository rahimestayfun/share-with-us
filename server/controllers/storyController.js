let stories = require('./../stories');
let id = 3;
let isAdmin = false;

function getStories(req,res){
    res.status(200).json(stories);
    // console.log(stories);
};
addStory=(req,res)=>{
    const {name,title,category,image,content}= req.body;
    stories.push({
        id,name,title,category,image,content
    });
    res.status(200).json(stories);
    id++;
};
editStory=()=>{

};
deleteStory = ()=>{

};
// getAdminStatus = (req, res) => {
//     res.status(200).json(isAdmin)
// }

module.exports ={
    getStories,
    addStory,
    editStory,
    deleteStory,
    // getAdminStatus
}