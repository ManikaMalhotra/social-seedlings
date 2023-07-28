import styles from './styles.module.css';
import PostContainer from '../PostContainer';

export default function PostGrid({ posts }: any) {
    const renderedPosts = posts.map((post: any) => {
        return (
            <PostContainer
                key={post.id}
                imgUrl={post.imgUrl}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
            />
        );
    });

    return (
        <div className={styles.postGrid367Container}>
            <div className={styles.postGrid367Gallery}>
                {renderedPosts}
            </div>
            <div className={styles.postGrid367Loader}></div>
        </div>
    );
}