import  jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) =>{
    const authHeader = req.headers.token
    if(!authHeader){
        const token = authHeader.split(" ")[1];
          jwt.verify(token, process.env.JWTSECRET,(err,user)=>{
            if(err)  return res.status(404).json("greshen token");
            req.user = user;
            next();
        })
    }else{
        return res.status(404).json("greshna parola/ime")
    }
    
}

export const VeifyTokenAndAuth = (req,res,next)=>{
  verifyToken(req,res, () =>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }else{
        res.status(403).json("you are not allowed")
    }
  });
};
export const VerifyAdmin = (req,res,next)=>{
    verifyToken(req,res, () =>{
      if(req.user.id === req.params.id || req.user.isAdmin){
          next();
      }else{
          res.status(403).json("you are not allowed")
      }
    });
  };