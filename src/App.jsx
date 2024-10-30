import { useState } from "react";
import { morseDict } from "./moresDict";

function App() {

	const [text, setText] = useState('');
	const [morseCode, setMorseCode] = useState('');
	const [error, setError] = useState(null);

	const toMorseCode = () => {
		setError(null)

		if (!/^[a-zA-Z0-9\s]+$/.test(text)) {
			setError('use only letters and numbers')
			return
		}

		let code = text
		let res = []

		for (const char of code) {
			code = code.replace(char, morseDict[char.toUpperCase()])
			res.push(morseDict[char.toUpperCase()])
		}
		setMorseCode(res.toString().replaceAll(',', ''))
	}

  return (
    <>
      <main>
        <h1>Morse Code Translator</h1>
        <textarea placeholder="write text here" rows={5} value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={toMorseCode}>Convert</button>
        <div className="output">
					{morseCode}
				</div>
				{error &&  <div className="error">{error}</div>}
      </main>
    </>
  );
}

export default App;
