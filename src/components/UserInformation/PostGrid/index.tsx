import styles from './styles.module.css';
import PostContainer from '../PostContainer';
import { IPost } from '@/types/misc';
import { IPostGridProps } from '@/types/props';

export default function PostGrid({ posts }: IPostGridProps) {
    const renderedPosts = posts.map((post: IPost) => {
        return (
            <PostContainer
                key={post.id}
                post={post}
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