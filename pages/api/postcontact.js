import Contact from "../../models/Contact";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) =>{
    if (req.method == 'POST'){
       
        let c = new Contact(req.body)
        
        await c.save()
        res.status(200).json({sucess: "success"})
    }else{
        res.status(400).json({error: "this method is not allowed"})
    }
}
export default connectDb(handler);