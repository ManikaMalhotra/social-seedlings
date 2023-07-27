import UserInformation from "@/components/UserInformation";
import { NextRouter, useRouter } from "next/router";

export default function UserPage() {
    const router: NextRouter = useRouter();
    const { id } = router.query;

    if (!id) {
        // TODO: Return an error page component
        return null;
    }

    if (typeof id !== "string") {
        // TODO: Return an error page component
        return null;
    }

    const username: string = id;

    return (
        <>
            <UserInformation username={username} />
        </>
    );
}