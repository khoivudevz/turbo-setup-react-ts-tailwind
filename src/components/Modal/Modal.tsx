import {cn} from '@/utils/cn'
import DialogWrap from 'rc-dialog'
import 'rc-dialog/assets/index.css'
import styled from 'styled-components'

type Props = {
	visible: boolean
	onClose: () => void
	children: React.ReactNode
	title: string
	wrapClassName?: string
	animation?: string
	maskAnimation?: string
	forceRender?: boolean
	focusTriggerAfterClose?: boolean
	closeIcon?: React.ReactNode
}

const Modal = ({
	visible,
	onClose,
	children,
	wrapClassName,
	animation,
	maskAnimation,
	forceRender,
	focusTriggerAfterClose,
	title,
	closeIcon,
}: Props) => {
	return (
		<StyledDialogWrap
			visible={visible}
			onClose={onClose}
			title={title}
			forceRender={forceRender}
			focusTriggerAfterClose={focusTriggerAfterClose}
			wrapClassName={cn('bg-black/50', wrapClassName)}
			animation={animation}
			maskAnimation={maskAnimation}
			closeIcon={closeIcon}
			destroyOnClose
		>
			{children}
		</StyledDialogWrap>
	)
}

export default Modal

const StyledDialogWrap = styled(DialogWrap)`
	display: flex !important;
	align-items: center;
	justify-content: center;
	min-height: calc(100dvh - 60px);
`
