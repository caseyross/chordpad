import type { ButtonDefinition, ButtonID } from './defs/buttons.ts'

interface ButtonProps {
	definition: ButtonDefinition
	onPress: (id: ButtonID) => void
	onRelease: (id: ButtonID) => void
}

function Button({ definition, onPress, onRelease }: ButtonProps) {

	// Handle pointing device moving between a button and "the air"
	function handlePointerDown(e: React.PointerEvent) {
		if(e.button === 0) {
			if(e.target instanceof HTMLElement && e.target.hasPointerCapture(e.pointerId)) {
				// Revert implicit pointer capture on direct-manipulation devices
				e.target.releasePointerCapture(e.pointerId)
			}
			onPress(definition.id)
		}
	}
	function handlePointerUp(e: React.PointerEvent) {
		if(e.button === 0) {
			onRelease(definition.id)
		}
	}
	
	// Handle pointing device moving between two buttons
	function handlePointerEnter(e: React.PointerEvent) {
		if(e.buttons === 1 && e.button === -1) {
			onPress(definition.id)
		}
	}
	function handlePointerLeave(e: React.PointerEvent) {
		if(e.buttons === 1 && e.button === -1) {
			onRelease(definition.id)
		}
	}

	// Handle pointing device being inactivated via OS-level user actions on direct-manipulation devices
	// (on non-direct-manipulation devices, this capability is generally not available, violating spec) 
	function handlePointerCancel() {
		onRelease(definition.id)
	}

	return (
		<button
			id={definition.id}
			style={{gridArea: definition.grid}}
			onPointerCancel={handlePointerCancel}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onPointerUp={handlePointerUp}
		>
			{definition.id}
		</button>
	)
}

export default Button