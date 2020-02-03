const express = require('express');
const app = express();
const {getStories,addStory,editStory,deleteStory,getAdminStatus,getStory,adminLogin,adminLogout,editLikeCount} = require('./controllers/storyController')

app.use(express.json());

//endpoints
app.get('/api/stories',getStories);
app.get("/api/stories/:id", getStory);
app.post('/api/stories', addStory);
app.delete('/api/stories/:id',deleteStory);
app.put('/api/stories/:id',editStory);

//for admin 
app.get('/api/admin',getAdminStatus);
app.put('/api/login', adminLogin);
app.put('/api/logout', adminLogout);

//for likeCount
// app.get('/api/stories/:id',getLikeCount);
app.put('/api/story/:id',editLikeCount);


const PORT= 3030;
app.listen(PORT ,console.log(`Server is listening on ${PORT}`))