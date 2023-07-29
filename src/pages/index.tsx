import styles from '@/styles/Home.module.css'
import { IPost } from '@/types/misc'
import PostList from '@/components/PostList'
import LoadingIndicator from '@/components/LoadingIndicator'
import useIntersection from '@/hooks/useIntersection';
import { useEffect, useState } from 'react';
import useSWRInfinite from 'swr/infinite'
import { usePostsStore } from '@/components/store/posts';

export default function Home() {
	const postStatic = [
		{
			"id": "B8892rcCI7g",
			"userImage": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1682685797527-63b4e495938f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "neom",
			"likesCount": 60,
			"description": "Natural rock bridge in the Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
			"location": "NEOM, Saudi Arabia",
			"blurHash": "LQBfOrs;0LNGxvogRiWA57j[?Gn$",
			"height": 6336,
			"width": 9504
		},
		{
			"id": "LEC8AlLmpUA",
			"userImage": "https://images.unsplash.com/profile-1682418325917-fc756568d88aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1682417844065-07961597146e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "grishevskaya3",
			"likesCount": 10,
			"description": null,
			"location": null,
			"blurHash": "L_KKsEWCazj[~qRkjZayt8axayfQ",
			"height": 2667,
			"width": 4000
		},
		{
			"id": "PuJkLHmo36o",
			"userImage": "https://images.unsplash.com/profile-1690072464615-c6eb043b6820image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690072581831-6541cb9fd6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "marsnez",
			"likesCount": 18,
			"description": null,
			"location": "Rio de Janeiro | 🇧🇷",
			"blurHash": "LFB:ZZ?W0NIWM|R+floe4?M~s.of",
			"height": 5561,
			"width": 3707
		},
		{
			"id": "iqWhsq5-KYQ",
			"userImage": "https://images.unsplash.com/profile-1683016120108-94feb24ab720image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690535922441-939fb8e6e933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "adam_29063",
			"likesCount": 17,
			"description": null,
			"location": "London, United Kingdom",
			"blurHash": "LxHB#r%Nayt7~qxuR%j[?aR%R*of",
			"height": 5841,
			"width": 3894
		},
		{
			"id": "jqAj1dnOpkw",
			"userImage": "https://images.unsplash.com/profile-1670502376980-1d26d1d1db9d?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690263914767-963579f9620c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "isaac_taylor",
			"likesCount": 38,
			"description": null,
			"location": "Utah",
			"blurHash": "LqHCJ@n$M{jZyZj[n$ayjXt7WCbH",
			"height": 5105,
			"width": 8185
		},
		{
			"id": "3DPaL6XDcZE",
			"userImage": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "neom",
			"likesCount": 114,
			"description": "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
			"location": "NEOM, Saudi Arabia",
			"blurHash": "L]Jk7aRjRPof.TWBV@kC?HkCofay",
			"height": 3566,
			"width": 4762
		},
		{
			"id": "CXfhe4t6WCE",
			"userImage": "https://images.unsplash.com/profile-1674221120615-d6e95a902444?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690301458653-915ac42be8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "rudnrina",
			"likesCount": 33,
			"description": "Me ✨💌",
			"location": "Ukraine 🇺🇦",
			"blurHash": "LiLNS#IUE1Rj.7xaoft7?wMxV?t7",
			"height": 5760,
			"width": 3759
		},
		{
			"id": "P4mPMxYpUxI",
			"userImage": "https://images.unsplash.com/profile-1578021854441-1f6abbca2a1dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690375774417-55640a60a061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "aaronburden",
			"likesCount": 31,
			"description": null,
			"location": "Baltimore, MD",
			"blurHash": "LcI5q]S4ofof02a$ofWBxboeWVof",
			"height": 4729,
			"width": 3784
		},
		{
			"id": "X1Hozg__MiA",
			"userImage": "https://images.unsplash.com/profile-fb-1520935645-e58a496183d3.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690261003258-0bbe37fa0209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5MDU1NjkzM3w&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "davidemrich",
			"likesCount": 151,
			"description": null,
			"location": null,
			"blurHash": "L99@O@9a4Uk7-;IURQt7?wxF9FRj",
			"height": 7681,
			"width": 5123
		},
		{
			"id": "iJv8EoAqrbE",
			"userImage": "https://images.unsplash.com/profile-1578021854441-1f6abbca2a1dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
			"postImage": "https://images.unsplash.com/photo-1690375636915-29d19feae92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODEyOTJ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTA1NTY5MzN8&ixlib=rb-4.0.3&q=80&w=1080",
			"username": "aaronburden",
			"likesCount": 61,
			"description": null,
			"location": "Baltimore, MD",
			"blurHash": "L46I[,eYImy9.ie=nSk8R6kBxbRR",
			"height": 3641,
			"width": 4969
		}
	]

	const [isIntersecting, ref] = useIntersection<HTMLDivElement>();
	// const {
	// 	data, 
	// 	size,
	// 	setSize,
	// 	error,
	// 	isLoading,
	// 	isValidating
	// } = useSWRInfinite<IPost[]> (
	// 	(pageIndex, previousPageData) => {
	// 		if (previousPageData && !previousPageData.length) return null
	// 		return `/api/posts?page=${pageIndex + 1}&limit=5`
	// 	},
	// 	(url) => {
	// 		const cachedData = localStorage.getItem('posts')
	// 		if(cachedData) {
	// 			const posts = JSON.parse(cachedData)

	// 			console.log(posts.length, size);

	// 			if(posts.length > size) return posts
	// 		}

	// 		const data = fetch(url).then((res) => res.json())
	// 		return data
	// 	}, {
	// 		initialSize: 1,
	// 		revalidateAll: false,
	// 		parallel: false,
	// 		revalidateFirstPage: false,
	// 		onSuccess(data) {
	// 			// const cachedData = localStorage.getItem('posts')

	// 			// if(cachedData) {
	// 			// 	const posts = JSON.parse(cachedData)
	// 			// 	if(data.length > posts.length) {
	// 			// 		localStorage.setItem('posts', JSON.stringify(data))
	// 			// 	}
	// 			// } else {
	// 			// 	localStorage.setItem('posts', JSON.stringify(data))
	// 			// }
	// 		}
	// 	}
	// )

	// useEffect(() => {
	// 	if (isIntersecting && !isLoading && !isValidating) {
	// 		setSize((size) => size + 1);
	// 	}
	// }, [isIntersecting, isLoading, isValidating])

	// useEffect(() => {
	// 	console.log(data);
	// }, [data])

	// const posts = data?.flat();

	useEffect(() => {
		usePostsStore.persist.rehydrate()
	}, [])

	const getPage = usePostsStore((state) => state.getPage)
	const posts = usePostsStore((state) => state.posts)

	useEffect(() => {
		if (isIntersecting && usePostsStore.persist.hasHydrated()) {
			getPage().then((res) => {
				console.log(res)
			})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [isIntersecting])


	return (
		<div className={styles.hm234PostContainer}>
			<PostList posts={posts} />
			<div ref={ref}>
				<LoadingIndicator />
			</div>
		</div>
	)
}