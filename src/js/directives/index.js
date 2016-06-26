'use strict';

var module = 'poem.directives';

let editor = require('./editor');

angular.module(module, [])
	.directive('simpleEditor', editor.editor)
	.directive('simpleEditorControl', editor.editorControl)
	.directive('simpleEditorContent', editor.editorContent);
