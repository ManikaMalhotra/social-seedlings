import Header from "@/components/Header";
import { IBaseLayoutProps } from "@/types/props";

export default function BaseLayout({ children }: IBaseLayoutProps) {
	return (
		<div>
            <Header />
			<main>{children}</main>
		</div>
	);
}