import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    //En el API Client no debo ir a headers sino a Authorization y lo mando por tipo Bearer Token
    let token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error: "Token not provided"});
    }

    //El token lo vuelvo un arreglo y obtengo lo que tengo en el segundo valor del arreglo creado
    token = token.split(" ")[1];

    try {
        const {email, role_id} = jwt.verify(token, process.env.JWT_SECRET);
        req.email = email;
        req.role_id = role_id;

        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({error: "Invalid Token"});
    }
}

export const verifyAdmin = (req, res, next) => {
    if(req.role_id === 1) {
        return next();
    }

    return res.status(403).json({error: "Unauthorized only admin user"});
}