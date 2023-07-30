import PostList from '@/components/PostList'
import { usePostsStore } from '@/store/posts';

export default function Home() {
	const getPage = usePostsStore((state) => state.getPage);
	const posts = usePostsStore((state) => state.posts); // setting up subscriber
	const checkHydration = usePostsStore.persist?.hasHydrated;
	const rehydrate = usePostsStore.persist?.rehydrate;

	return (
		<PostList 
			posts={posts} 
			getPage={getPage} 
			checkHydration={checkHydration}
			rehydrate={rehydrate}
		/>
	)
}