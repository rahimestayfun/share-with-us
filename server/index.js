const express = require('express');
const app = express();
const {getStories,addStory,editStory,deleteStory,getAdminStatus} = require('./controllers/storyController')

app.use(express.json());

//endpoints
app.get('/api/stories',getStories);
// app.get('/api/admin',getAdminStatus);
app.post('/api/stories', addStory);
app.put('/api/stories/:id',editStory);
app.delete('/api/stories/:id',deleteStory);


const PORT= 3030;
app.listen(PORT ,console.log(`Server is listening on ${PORT}`))