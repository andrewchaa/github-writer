/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Editor from '../editor/editor';
import { addClickListener } from '../modules/util';

export default class NewInlineCommentEditor extends Editor {
	getSizeContainer() {
		return this.dom.root;
	}

	static run() {
		// Edit option for comments: listen to "comment action" buttons and create the editor.
		addClickListener( '.js-toggle-inline-comment-form', button => {
			const container = button.closest( '.js-inline-comment-form-container' );
			const root = container && container.querySelector( 'form' );
			root && this.createEditor( root );
		} );
	}
}
