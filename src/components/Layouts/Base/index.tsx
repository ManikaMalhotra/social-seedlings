import Header from "@/components/Header";
import styles from "@/styles/BaseLayout.module.css";
import { IBaseLayoutProps } from "@/types/props";

export default function BaseLayout({ children }: IBaseLayoutProps) {
	return (
		<div>
            <Header />
			<main className={styles.base734Main}>{children}</main>
		</div>
	);
}