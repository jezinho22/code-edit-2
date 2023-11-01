import { basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { oneDark } from '@codemirror/theme-one-dark'
import  { javascript } from '@codemirror/lang-javascript'



import { useRef, useEffect } from "react";

export default function Editor() {
	const editor = useRef();

	useEffect(() => {
		const startState = EditorState.create({
			doc: "Hello World",
			extensions: [javascript(), oneDark, basicSetup, keymap.of([defaultKeymap, indentWithTab])],
		});

		const view = new EditorView({ state: startState, parent: editor.current });

		return () => {
			view.destroy();
		};
	}, []);

	return <div ref={editor}></div>;
}
