import Post from '@/components/Post';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { IPost } from '@/types/misc';
import { IPostListProps } from '@/types/props';
import LoadingIndicator from '../LoadingIndicator';

export default function PostList({ 
    posts, 
    getPage,
    username,
    checkHydration,
    rehydrate 
}: IPostListProps) {
	const {ref, scrollRef} = useInfiniteScroll<IPost>(
		getPage, 
		posts, 
        username,
		checkHydration,
        rehydrate
	);

    const postElements = posts.map((post, idx) => {
        return (
            <div 
                ref={(idx + 1 === posts.length - 10) && !username ? scrollRef : null} 
                key={`${post.id}${Date.now()}`}
            >
                <Post post={post}/>
            </div>
        );
    });
    
    return (
        <div>
			{postElements}
			<div ref={ref}>
				<LoadingIndicator />
			</div>
		</div>
    );
};

