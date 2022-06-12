$(document).ready(function () {
	var code = $(".codemirror-textarea"[0]);
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers: true,
		mode: "text/javascript",
		theme: "monokai",
		indentUnit: 4,
		indentWithTabs: true,
		lineWrapping: true,
		tabSize: 4,
		extraKeys: {
			"Ctrl-Space": "autocomplete",
			"F11": function (cm) {
				cm.setOption("fullScreen", !cm.getOption("fullScreen"));
			},
			"Esc": function (cm) {
				if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
			},
			"Ctrl-S": function (cm) {
				$("#save-button").click();
			},
			"Ctrl-Q": function (cm) {
				$("#quit-button").click();
			}
	}
});

//------------------------------

// let editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
// 	lineNumbers: true,
// 	mode: "javascript",
// 	theme: "3024-night",
// 	indentUnit: 4,
// 	indentWithTabs: true,
// 	tabSize: 4,
// 	lineWrapping: true,
// 	extraKeys: {
// 		"Ctrl-Space": "autocomplete",
// 		F11: function (cm) {
// 			cm.setOption("fullScreen", !cm.getOption("fullScreen"));
// 		},
// 		Esc: function (cm) {
// 			if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
// 		},
// 	},
// 	hintOptions: {
// 		tables: {
// 			users: {
// 				name: null,
// 				score: null,
// 				birthDate: null,
// 			},
// 		},
// 	},
// 	autoCloseBrackets: true,
// 	matchBrackets: true,
// 	showCursorWhenSelecting: true,
// 	autoCloseTags: true,
// 	autoCloseBrackets: true,
// 	matchTags: { bothTags: true },
// 	autoRefresh: true,
// 	scrollPastEnd: true,
// 	styleActiveSelected: true,
// 	styleSelectedText: true,
// 	styleSelectedLine: true,
// 	styleActiveLine: true,
// 	styleFoldColumn: true,
// });
