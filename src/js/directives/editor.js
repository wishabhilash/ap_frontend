"use strict";

let editorControl = function() {

	let controller = function($scope, $document) {
		"ngInject";
		let editorControl = this;
		const TOOLBAR_DEFAULT_POS = {x: -99999, y: -99999};
		
		editorControl.makeBold = makeBold;
		editorControl.makeItalic = makeItalic;
		editorControl.alignLeft = alignLeft;
		editorControl.alignRight = alignRight;
		editorControl.alignCenter = alignCenter;
		
		editorControl.toggleToolbarOnTextSelect = toggleToolbarOnTextSelect;
		editorControl.showEditorTools = showEditorTools;

		this.editorControlOpenFlag = false;
		editorControl.editorToolPosition = {
			x: TOOLBAR_DEFAULT_POS.x,
			y: TOOLBAR_DEFAULT_POS.y
		};

		function isTextSelected() {
			var text = "";
			if (window.getSelection) {
				text = window.getSelection().toString();
			} else if (document.selection && document.selection.type != "Control") {
				text = document.selection.createRange().text;
			}
			return text.length;
		}

		function toggleToolbarOnTextSelect() {
			let flag = false;
			if (isTextSelected()) {
				flag = true;
			}
			if (this.editorControlOpenFlag == flag) return;

			// Save last control open flag
			this.editorControlOpenFlag = flag;
			showEditorTools(flag);
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
			$scope.$apply(function() {
				editorControl.editorToolPosition = {
					x: coords.x,
					y: coords.y
				}
			});
		}

		function getToolbarWidth() {
			return angular.element(document.querySelectorAll(".simple-editor-toolbar")[0])[0].clientWidth;
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

		function save(a, b) {
			console.log('...', a, b);
		}

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
		controllerAs: 'editorControl',
		templateUrl: "./dist/templates/editor/editorControl.html"
	}
}


// let editorTitle = function() {
// 	let controller = function($scope) {

// 	}

// 	let link = function(scope, event, element) {

// 	}

// 	return {
// 		restrict: 'A',
// 		controller: controller,
// 		controllerAs: 'editorTitle',
// 		link: link
// 	}
// }

let editorContent = function() {
	let controller = function($scope, $timeout, contentService) {
		"ngInject";
		let editorContent = this;
		editorContent.contentSaved = true;
		editorContent.lastSavedContent = '';
		editorContent.saveTimeoutPromise = null;

		editorContent.saveContent = function(content) {
			if (editorContent.lastSavedContent != content) {
				editorContent.lastSavedContent = content;
				editorContent.contentSaved = false;
			}

			if (!editorContent.contentSaved) {
				$timeout.cancel(editorContent.saveTimeoutPromise);
				editorContent.saveTimeoutPromise = $timeout(
					contentService.save,
					3000,
					false,
					content
				);
				editorContent.contentSaved = true;
			}
		}
	}

	let link = function(scope, element, attrs) {
		element.on('keyup', function($event) {
			scope.editorControl.toggleToolbarOnTextSelect();
			let newContent = element.html();
			scope.editorContent.saveContent(newContent);
		});

		element.on('paste', function($event) {
			$event.preventDefault();
			let pastedData = $event.clipboardData.getData('text/plain');
			document.execCommand('insertText', false, pastedData);
		});

		element.on('click', function($event) {
			scope.editorControl.toggleToolbarOnTextSelect();
		});
	}

	return {
		restrict: 'A',
		link: link,
		controller: controller,
		controllerAs: 'editorContent'
	}
}

let editor = function() {
	let controller = function($scope) {
		"ngInject";
		
	}

	return {
		restrict: 'E',
		controller: controller,
		controllerAs: 'editor',
		templateUrl: "./dist/templates/editor/editor.html"
	}
}

module.exports = {
	editor: editor,
	editorControl: editorControl,
	editorContent: editorContent,
}

