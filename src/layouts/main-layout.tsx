import ModalsProvider from '@/providers/ModalsProvider'

type Props = {
	children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
	return <ModalsProvider>{children}</ModalsProvider>
}
export default MainLayout
