import Button from './Button.tsx'
import buttons from './defs/buttons.ts'

function App() {
  return (
		<>
			<header>

			</header>
			<output>

			</output>
			<menu>
				{Object.values(buttons).map(definition =>
					<Button definition={definition} key={definition.id} />)
				}
			</menu>
		</>
  )
}

export default App
