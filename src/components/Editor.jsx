import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { oneDark } from "@codemirror/theme-one-dark";
import { javascript } from "@codemirror/lang-javascript";

import { useRef, useEffect, useState } from "react";

export default function Editor() {
	const editor = useRef();
	const [code, setCode] = useState("");

	// create event listener and handler on EditorView
	// when v changes, set code state to this
	const onUpdate = EditorView.updateListener.of((v) => {
		setCode(v.state.doc.toString());
		console.log(v.state.doc.toString());
	});

	useEffect(() => {
		const startState = EditorState.create({
			doc: "Hello World",
			extensions: [
				javascript(),
				oneDark,
				basicSetup,
				keymap.of([defaultKeymap, indentWithTab]),
				onUpdate,
			],
		});

		const view = new EditorView({ state: startState, parent: editor.current });

		return () => {
			view.destroy();
		};
	}, []);

	return (
		<div className="editor-container">
			<div ref={editor}></div>
		</div>
	);
}
