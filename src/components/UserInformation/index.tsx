import { IUserInformationProps } from "@/types/props";
import styles from "@/styles/UserInformation.module.css";
import PostGrid from "../PostGrid";
import ProfileInfoContainer from "../ProfileInfoContainer";
import PostList from "../PostList";
import { useState } from "react";
import ViewButton from "../ViewButton";

export default function UserInformation({ user, posts, getUserPosts }: IUserInformationProps) {
    const [view, setView] = useState<boolean>(true);

    return (
        <div className={styles.userInfo251ProfileContainer}>
            <div className={styles.userInfo251MainContainer}>
                <ProfileInfoContainer user={user} />
                <ViewButton view={view} setView={setView} />
            </div>            
            {
                view ? 
                    <PostGrid posts={posts} getUserPosts={getUserPosts}/> : 
                    <PostList posts={posts} getPage={getUserPosts} username={user.username}/>
            }            
        </div>
    );
};