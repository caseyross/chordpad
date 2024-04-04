import type { Hotkey } from './hotkeys.ts'

export type ButtonID = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'AddSus' | 'Borrow' | 'ChangeBass' | 'ChangeKey' | 'Lower' | 'Raise' | 'Seventh' | 'XOfX'

export interface ButtonDefinition {
	id: ButtonID
	grid: string // CSS grid area within the pad layout
	hotkeys: Hotkey[]
}

type ButtonDefinitions = Record<ButtonID, ButtonDefinition>

const definitions: ButtonDefinitions = {
	'1': {
		id: '1',
		grid: '4 / 1',
		hotkeys: ['Numpad1'],
	},
	'2': {
		id: '2',
		grid: '4 / 2',
		hotkeys: ['Numpad2'],
	},
	'3': {
		id: '3',
		grid: '4 / 3',
		hotkeys: ['Numpad3'],
	},
	'4': {
		id: '4',
		grid: '3 / 1',
		hotkeys: ['Numpad4'],
	},
	'5': {
		id: '5',
		grid: '3 / 2',
		hotkeys: ['Numpad5'],
	},
	'6': {
		id: '6',
		grid: '3 / 3',
		hotkeys: ['Numpad6'],
	},
	'7': {
		id: '7',
		grid: '2 / 1',
		hotkeys: ['Numpad7'],
	},
	'8': {
		id: '8',
		grid: '2 / 2',
		hotkeys: ['Numpad8'],
	},
	'9': {
		id: '9',
		grid: '2 / 3',
		hotkeys: ['Numpad9'],
	},
	'AddSus': {
		id: 'AddSus',
		grid: '1 / 3',
		hotkeys: ['NumpadMultiply'],
	},
	'Borrow': {
		id: 'Borrow',
		grid: '5 / 3',
		hotkeys: ['NumpadDecimal'],
	},
	'ChangeBass': {
		id: 'ChangeBass',
		grid: '5 / 1 / 5 / 3',
		hotkeys: ['Numpad0'],
	},
	'ChangeKey': {
		id: 'ChangeKey',
		grid: '1 / 1',
		hotkeys: ['NumLock'],
	},
	'Lower': {
		id: 'Lower',
		grid: '1 / 4',
		hotkeys: ['NumpadSubtract'],
	},
	'Raise': {
		id: 'Raise',
		grid: '2 / 4 / 4 / 4',
		hotkeys: ['NumpadAdd'],
	},
	'Seventh': {
		id: 'Seventh',
		grid: '4 / 4 / 6 / 4',
		hotkeys: ['Enter'],
	},
	'XOfX': {
		id: 'XOfX',
		grid: '1 / 2',
		hotkeys: ['NumpadDivide'],
	},
}

export default definitions