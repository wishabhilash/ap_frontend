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
		editorControl.editorToolPosition = {
			x: TOOLBAR_DEFAULT_POS.x,
			y: TOOLBAR_DEFAULT_POS.y
		};


		function toggleToolbarOnTextSelect($event) {
			var text = "";
			if (window.getSelection) {
				text = window.getSelection().toString();
			} else if (document.selection && document.selection.type != "Control") {
				text = document.selection.createRange().text;
			}
			if(text.length) {
				editorControl.showEditorTools(true);
			} else {
				editorControl.showEditorTools(false);
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
			editorControl.editorToolPosition = {
				x: coords.x,
				y: coords.y
			}
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
	let controller = function($scope) {
		"ngInject";
		let editorContent = this;

		editorContent.toggleToolbarOnTextSelect = toggleToolbarOnTextSelect;
		
		function toggleToolbarOnTextSelect() {
			$scope.editorControl.toggleToolbarOnTextSelect();
		}
		
	}

	let link = function(scope, element, attrs) {
		element.on('keyup', function($event) {
			scope.$apply(function() {
				scope.editorControl.toggleToolbarOnTextSelect();
			})
			
		});

		element.on('click', function($event) {
			scope.$apply(function() {
				scope.editorControl.toggleToolbarOnTextSelect();
			})
		});
	}

	return {
		restrict: 'A',
		link: link
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

