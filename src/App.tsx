import Button from './Button.tsx'
import buttons, { ButtonID } from './defs/buttons.ts'

function onPress(id: ButtonID) {

}

function onRelease(id: ButtonID) {

}

function App() {
  return (
		<>
			<header>

			</header>
			<output>

			</output>
			<menu>
				{Object.values(buttons).map(definition =>
					<Button definition={definition} key={definition.id} onPress={onPress} onRelease={onRelease} />)
				}
			</menu>
		</>
  )
}

export default App
