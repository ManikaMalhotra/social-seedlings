import styles from '@/styles/PostGrid.module.css';
import PostGridView from '../PostGridView';
import { IPost } from '@/types/misc';
import { IPostGridProps } from '@/types/props';
import LoadingIndicator from '../LoadingIndicator';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { NextRouter, useRouter } from 'next/router';

export default function PostGrid({ posts, getUserPosts }: IPostGridProps) {
    const router: NextRouter = useRouter();
    const { id } = router.query;

    const {ref, scrollRef} = useInfiniteScroll<IPost>(
		getUserPosts, 
		posts, 
        id as string,
	);

    const renderedPosts = posts.map((post: IPost) => {
        return (
            <div 
                key={`${post.id}${Date.now()}`}
                // ref={posts.indexOf(post) + 1 === posts.length - 12 ? scrollRef : null}
            >
                <PostGridView
                    post={post}
                />
            </div>
        );
    });

    return (
        <div className={styles.postGrid367Container}>
            <div className={styles.postGrid367Gallery}>
                {renderedPosts}
            </div>
            <div ref={ref}>
                <LoadingIndicator />
            </div>
        </div>
    );
}