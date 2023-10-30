import { useEffect, useRef } from "react";
import { createCodeMirror } from "@codemirror-toolkit/react";

export default function Editor() {
	const editorRef = useRef(null);

	useEffect(() => {
		const codeMirror = createCodeMirror({
			extensions: [],
			doc: "Hello, CodeMirror!",
		});
		console.log(codeMirror);

		if (editorRef.current) {
			const editorView = codeMirror.createView({
				root: editorRef.current,
			});

			// Clean up when the component unmounts
			return () => {
				editorView.destroy();
			};
		}
	}, []);

	return <div ref={editorRef} />;
}
