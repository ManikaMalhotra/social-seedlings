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
                <Post
                    description={post.description}
                    likesCount={post.likesCount}
                    location={post.location}
                    postImage={post.postImage}
                    userImage={post.userImage}
                    username={post.username}
                    blurHash={post.blurHash}
                    height={post.height}
                    width={post.width}
                />
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

