import styles from '@/styles/Post.module.css';
import { IPostProps } from '@/types/props';
import Link from 'next/link';

export default function Post({ 
    description, 
    likesCount, 
    location, 
    postImage, 
    userImage, 
    username 
}: IPostProps) {
    return (
        <>
            <div className={styles.post234Container}>
                <div className={styles.post234Header}>
                    <img className={styles.post234HeaderUserIconImg} src={userImage} />
                    <Link href={`/user/${username}`}>
                        <p className={styles.post234UserName}>{username}</p>
                    </Link>
                    {location && <p className={styles.post234Location}>{location}</p>}
                </div>
                <div>
                    <img src={postImage} width="100%" />
                </div>
                <div className={styles.post234Description}>
                    <p className={styles.post234LikesCount}>{likesCount} likes</p>
                    {description && <p>{description}</p>}
                </div>
            </div>
        </>
    );
}