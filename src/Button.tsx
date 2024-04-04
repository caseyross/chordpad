import type { ButtonDefinition } from './defs/buttons.ts'

interface ButtonProps {
	definition: ButtonDefinition
}

function Button({ definition }: ButtonProps) {
	return <button id={definition.id} style={{gridArea: definition.grid}}>{definition.id}</button>
}

export default Button