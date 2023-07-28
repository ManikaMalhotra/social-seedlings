import { IUserInformationProps } from "@/types/props";
import styles from "@/styles/UserInformation.module.css";

export default function UserInformation({ username }: IUserInformationProps) {
    const user = {
        "id": "pXhwzz1JtQU",
        "username": "jimmyexample",
        "name": "James Example",
        "bio": "The user's bio",
        "location": "Montreal, Qc",
        "total_photos": 10,
        "followers_count": 300,
        "following_count": 25,
        "profile_image": {
            "small": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
        }
    };

    return (
        <>
            
        </>
    );
};