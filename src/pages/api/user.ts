import { IErrorMessage, IUser } from "@/types/misc";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (
    req: NextApiRequest, 
    res: NextApiResponse<IUser | IErrorMessage>
    ) {
    try {
        const { username } = req.query;

        if (!username) {
            return res.status(400).json({ message: 'Missing query params: username required' });
        }

        if (Array.isArray(username)) {
            return res.status(400).json({ message: 'Query params should be of type string' });
        }

        const unsplashURI = process.env.UNSPLASH_API_URL;
        const clientId = process.env.UNSPLASH_ACCESS_KEY;

        const response = await fetch(`${unsplashURI}/users/${username}/?client_id=${clientId}`);
        const data = await response.json();

        const user: IUser = {
            id: data.id,
            username: data.username,
            name: data.name,
            bio: data.bio,
            location: data.location,
            profile_image: data.profile_image.medium,
            total_photos: data.total_photos,
            followers_count: data.followers_count,
            following_count: data.following_count
        } as IUser;

        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};