//Still Developed

//Routers
var route_main = require('./mainRouter');
var route_user = require('./userRouter');
var route_blog = require('./blogRouter');
var route_comment = require('./commentRouter');

//Routing URL
module.exports = function(app){

    app.use('/main', route_api);
    app.use('/user',route_user);
    app.use('/blog',route_blog);
    app.use('/comment',route_comment);
    

}