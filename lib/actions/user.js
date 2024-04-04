import User from "../models/User";
import connectToDB from "../mongodb/mongoose";

export const createOrUpdateUser = async(id, first_name, last_name, email_adresses) => {
    try {
        await connectToDB();

        const user = await User.findOneAndUpdate(
            {clerkId: id},
            {
                $set: {
                    clerkId: id,
                    firstName: first_name,
                    lastName: last_name,
                    email: email_adresses[0].email_adress
                }
            }, {upsert: true, new: true}) //  if user doesn't exist create one

        await user.save();
        return user;
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async(id) => {
    try {
        await connectToDB();
        await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
        console.log(error)
    }
}