export function getMethod(req , res, next){
    console.log(`Richiesta: ${req.method} | URL: ${req.url}`);
    next()
}