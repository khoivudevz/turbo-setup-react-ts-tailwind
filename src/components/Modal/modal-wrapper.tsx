import {FC} from 'react'

type Props = {
	children: React.ReactNode
	visible: boolean
}

const ModalWrapper: FC<Props> = ({children, visible}) => {
	if (!visible) return null
	return <>{children}</>
}

export default ModalWrapper
