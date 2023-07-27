import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Post from '@/components/Post'
import { IPost } from '@/types/misc'
import PostList from '@/components/PostList'
import { IPostListProps, IPostProps } from '@/types/props'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const posts: IPost[] = [
		{
			id: "1",
			description: "This is a description",
			likesCount: 27843652,
			location: "New York",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username1"
		},
		{
			id: "2",
			description: "Some random description",
			likesCount: 1276455,
			location: "California",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username2"
		},
		{
			id: "3",
			description: "This is a description",
			likesCount: 10986,
			location: "France",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username3"
		},
		{
			id: "3",
			description: "This is a description",
			likesCount: 10986,
			location: "France",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username3"
		},
		{
			id: "3",
			description: "This is a description",
			likesCount: 10986,
			location: "France",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username3"
		},
		{
			id: "3",
			description: "This is a description",
			likesCount: 10986,
			location: "France",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username3"
		},
		{
			id: "3",
			description: "This is a description",
			likesCount: 10986,
			location: "France",
			postImage: "https://picsum.photos/200",
			userImage: "https://picsum.photos/200",
			username: "Username3"
		}
	];

	return (
		<>
			{/* <Post key={post.id} {...post}/> */}
			{/* <div style={{display: "flex"}}> */}
				<PostList posts={posts} />
			{/* </div> */}
		</>
	)
}
