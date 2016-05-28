"use strict";

module.exports = function() {

	let controller = function($scope, $document) {
		"ngInject";
		let editor = this;
		const TOOLBAR_DEFAULT_POS = {x: -99999, y: -99999};

		$scope.toggleToolbarOnTextSelect = toggleToolbarOnTextSelect;
		editor.makeBold = makeBold;
		editor.makeItalic = makeItalic;
		editor.alignLeft = alignLeft;
		editor.alignRight = alignRight;
		editor.alignCenter = alignCenter;
		editor.showEditorTools = showEditorTools;
		editor.editorToolPosition = {
			x: TOOLBAR_DEFAULT_POS.x,
			y: TOOLBAR_DEFAULT_POS.y
		};

		
		function save() {

		}

		function toggleToolbarOnTextSelect($event) {
			var text = "";
			if (window.getSelection) {
				text = window.getSelection().toString();
			} else if (document.selection && document.selection.type != "Control") {
				text = document.selection.createRange().text;
			}
			if(text.length) {
				editor.showEditorTools(true);
			} else {
				editor.showEditorTools(false);
			}
		}

		function showEditorTools(flag) {
			let coords = null;
			if (!flag) {
				coords = {
					x: TOOLBAR_DEFAULT_POS.x,
					y: TOOLBAR_DEFAULT_POS.y
				}
			} else {
				coords = getSelectionCoords();
			}
			editor.editorToolPosition = {
				x: coords.x,
				y: coords.y
			}
		}

		function getToolbarWidth() {
			return angular.element(document.querySelectorAll(".simple-editor-toolbar")[0])[0].clientWidth
		}

		function getSelectionCoords() {
			var selection = window.getSelection();
			var range = selection.getRangeAt(0);
			var boundary = range.getBoundingClientRect();
			return {
				x: (boundary.left + boundary.right)/2 - getToolbarWidth()/2,
				y: boundary.top - 45 + window.pageYOffset
			};
		}

		// function _getSelectionCoords(win) {
		// 	win = win || window;
		// 	var doc = win.document;
		// 	var sel = doc.selection, range, rects, rect;
		// 	var x = 0, y = 0;
		// 	if (sel) {
		// 		if (sel.type != "Control") {
		// 			range = sel.createRange();
		// 			range.collapse(true);
		// 			x = range.boundingLeft;
		// 			y = range.boundingTop;
		// 		}
		// 	} else if (win.getSelection) {
		// 		sel = win.getSelection();
		// 		if (sel.rangeCount) {
		// 			range = sel.getRangeAt(0).cloneRange();
		// 			if (range.getClientRects) {
		// 				range.collapse(true);
		// 				rects = range.getClientRects();
		// 				if (rects.length > 0) {
		// 					rect = rects[0];
		// 				}
		// 				x = rect.left;
		// 				y = rect.top;
		// 			}
		// 			if (x == 0 && y == 0) {
		// 				var span = doc.createElement("span");
		// 				if (span.getClientRects) {
		// 					span.appendChild( doc.createTextNode("\u200b") );
		// 					range.insertNode(span);
		// 					rect = span.getClientRects()[0];
		// 					x = rect.left;
		// 					y = rect.top;
		// 					var spanParent = span.parentNode;
		// 					spanParent.removeChild(span);

		// 					spanParent.normalize();
		// 				}
		// 			}
		// 		}
		// 	}
		// 	return { x: x, y: y };
		// }

		function makeBold() {
			document.execCommand('bold', false, '');
		}

		function makeItalic() {
			document.execCommand('italic', false, '');
		}

		function alignLeft() {
			document.execCommand('justifyLeft', false, '');
			toggleToolbarOnTextSelect();
		}

		function alignRight() {
			document.execCommand('justifyRight', false, '');
			toggleToolbarOnTextSelect();
		}

		function alignCenter() {
			document.execCommand('justifyCenter', false, '');
			toggleToolbarOnTextSelect();
		}

		function makeLink() {
			
		}

		function makeHeader() {
			
		}

	};

	return {
		restrict: 'E',
		controller: controller,
		controllerAs: 'editor',
		templateUrl: "./dist/templates/simple-editor-toolbar.html"
	}
}

