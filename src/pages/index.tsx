import styles from '@/styles/Home.module.css'
import { IPost } from '@/types/misc'
import PostList from '@/components/PostList'
import LoadingIndicator from '@/components/LoadingIndicator'
import useIntersection from '@/hooks/useIntersection';
import { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite'

export default function Home() {
	const [isIntersecting, ref] = useIntersection<HTMLDivElement>();
	const {
		data, 
		setSize,
		error,
		isLoading,
		isValidating
	} = useSWRInfinite<IPost[]> (
		(pageIndex, previousPageData) => {
			if (previousPageData && !previousPageData.length) return null
			return `/api/posts?page=${pageIndex + 1}&limit=5`
		},
		(url) => {
			const data = fetch(url).then((res) => res.json())
			return data
		}, {
			initialSize: 0,
			revalidateAll: false,
			parallel: false,
			revalidateFirstPage: false,

		}
	)

	useEffect(() => {
		if (isIntersecting && !isLoading && !isValidating) {
			setSize((size) => size + 1);
		}
	}, [isIntersecting, isLoading, isValidating])

	const posts = data?.flat();

	return (
		<>
			{posts && <PostList posts={posts} />}
			<div ref={ref}>
				<LoadingIndicator />
			</div>
		</>
	)
}
