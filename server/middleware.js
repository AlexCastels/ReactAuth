export function getMethod(req , res, next){
    console.log(req.method);
    next()
}