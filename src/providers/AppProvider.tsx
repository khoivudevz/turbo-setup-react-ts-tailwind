import {FC} from 'react'

type Props = {
	children: React.ReactNode
}

const AppProvider: FC<Props> = ({children}) => {
	return <>{children}</>
}

export default AppProvider
