import { Layout as AntdLayout, Flex } from "antd";
import styles from "./layout.module.scss";
const { Header, Content } = AntdLayout;


interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<AntdLayout className={styles.layoutContainer}>
			<Header className={styles.header}>
				<Flex align="center" justify="space-between">
					<h1>Facility System</h1>
					<div className="menu">123</div>
				</Flex>
			</Header>
			<Content>{children}</Content>
		</AntdLayout>
	);
}
