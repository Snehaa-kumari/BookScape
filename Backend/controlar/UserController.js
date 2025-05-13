import User from "../model/user.model.js";
import bcrypt from 'bcrypt'

export const signup =async (req, res) =>{
    try {
        const{name, email, password, cpassword} = req.body;
        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const hashPassword =await bcrypt.hash(password, 10)
        const createUser = new User({
            name: name,
            email: email,
            password: hashPassword,
            cpassword: hashPassword
        })
        await createUser.save();
        res.status(201).json({message:"User created successfully", user:{
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            cpassword: createUser.cpassword
        }})
    } catch (error) {
        console.error("Error:", error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
