const {constants}=require("../constants")
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode:500;

    switch(statusCode){
        case constants.VALIDATON_ERROR:
            res.json({
                tittle:"Validation Filed",
                message: err.message,
                stackTrace:err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({
                tittle:"Not Found",
                message: err.message,
                stackTrace:err.stack});            
            break;
        case constants.UNAUTHORIZED:
            res.json({
                tittle:"Unauthorized",
                message: err.message,
                stackTrace:err.stack});            
            break;               
        case constants.FORBIDDEN:
            res.json({
                tittle:"Forbidden",
                message: err.message,
                stackTrace:err.stack});            
            break;                          
        case constants.SERVER_ERROR:
            res.json({
                tittle:"SERVER ERROR",
                message: err.message,
                stackTrace:err.stack});            
            break;                              
        default:
            console.log("NO ERROR ,all good !");
            break;    
    }

   

};

module.exports=errorHandler;