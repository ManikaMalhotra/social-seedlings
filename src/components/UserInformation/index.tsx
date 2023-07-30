import { IUserInformationProps } from "@/types/props";
import styles from "@/styles/UserInformation.module.css";
import PostGrid from "../PostGrid";
import ProfileInfoContainer from "../ProfileInfoContainer";
import PostList from "../PostList";

export default function UserInformation({ user, posts, getUserPosts }: IUserInformationProps) {



    return (
        <div className={styles.userInfo251ProfileContainer}>
            <div className={styles.userInfo251MainContainer}>
                <ProfileInfoContainer user={user} />
            </div>            
            <PostGrid posts={posts} getUserPosts={getUserPosts}/>
            {/* <PostList posts={posts} getPage={getUserPosts} username={user.username}/> */}
        </div>
    );
};