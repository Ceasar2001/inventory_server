import bcrypt from 'bcrypt';
import User from './models/User.js';
import connectDB from './db/connection.js';

const register = async () => {
    try {
        connectDB();
        const hashPassword = await bcrypt.hash('admin123', 10);
        const newUser = new User({
            name: "admin",
            email: "admin@gmail.com",
            password: hashPassword,
            address: "camiguin",
            role: "admin"
        })

        await newUser.save();
        console.log("admin user created successfully");
    } catch (error) {
        console.log(error);
    }
}

register();