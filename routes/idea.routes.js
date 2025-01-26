const idea_controller=require('../controllers/idea.controller')

module.exports=(app)=>{
    app.get('/ideaApp/api/v1/ideas',idea_controller.getAllIdeas);
}