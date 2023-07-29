import { IUserInformationProps } from "@/types/props";
import styles from "./styles.module.css";
import PostGrid from "./PostGrid";
import ProfileInfoContainer from "./ProfileInfoContainer";
import ThemeToggleButton from "../ThemeToggleButton";
// import styles from "@/styles/UserInformation.module.css";

export default function UserInformation({ user, posts }: IUserInformationProps) {
    const user1 = {
        "id": "mYizSrdJkkU",
        "username": "neom",
        "name": "NEOM",
        "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        "location": "NEOM, Saudi Arabia",
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        "total_photos": 202,
        "followers_count": 491,
        "following_count": 0
    };

    const posts1 = [
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

    // console.log("userinfo index", posts);

    return (
        <div className={styles.userInfo251ProfileContainer}>
            <div className={styles.userInfo251MainContainer}>
                <ProfileInfoContainer user={user} />
            </div>
            <PostGrid posts={posts} />
        </div>
    );
};