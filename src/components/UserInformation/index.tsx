import { IUserInformationProps } from "@/types/props";
import styles from "./styles.module.css";
import PostGrid from "./PostGrid";
import ProfileInfoContainer from "./ProfileInfoContainer";
// import styles from "@/styles/UserInformation.module.css";

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

    const posts = [
        {
            id: "1",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        },
        {
            id: "2",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        },
        {
            id: "3",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        },
        {
            id: "4",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        },
        {
            id: "5",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        },
        {
            id: "6",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        },
        {
            id: "7",
            likesCount: 27843652,
            commentsCount: 3643652,
            imgUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        }
    ];

    return (
        <>
            <header>
                <div className={styles.userInfo251MainContainer}>
                    <ProfileInfoContainer />
                </div>
            </header>
            <main>
                <PostGrid posts={posts}/>
            </main>
        </>
    );
};