import { Layout as AntdLayout, Flex } from "antd";
import clsx from "clsx";
import styles from "./layout.module.scss";

const { Header, Content } = AntdLayout;

interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<AntdLayout className={clsx(styles.layoutContainer)}>
			<Header className={clsx(styles.header)}>
				<Flex align="center" justify="space-between">
					<h1 className={clsx("text-base")}>Facility System</h1>
					<div className={clsx("menu")}>123</div>
				</Flex>
			</Header>
			<Content>{children}</Content>
		</AntdLayout>
	);
}
