/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import 'vs/css!./rulers';
import { StyleMutator } from 'vs/base/browser/styleMutator';
import * as editorCommon from 'vs/editor/common/editorCommon';
import { ViewPart } from 'vs/editor/browser/view/viewPart';
import { ViewContext } from 'vs/editor/common/view/viewContext';
import { IRenderingContext, IRestrictedRenderingContext } from 'vs/editor/common/view/renderingContext';
import { ScrollEvent } from 'vs/base/common/scrollable';

export class Rulers extends ViewPart {

	public domNode: HTMLElement;
	private _rulers: number[];
	private _height: number;
	private _typicalHalfwidthCharacterWidth: number;

	constructor(context: ViewContext) {
		super(context);
		this.domNode = document.createElement('div');
		this.domNode.className = 'view-rulers';
		this._rulers = this._context.configuration.editor.viewInfo.rulers;
		this._height = this._context.configuration.editor.layoutInfo.contentHeight;
		this._typicalHalfwidthCharacterWidth = this._context.configuration.editor.fontInfo.typicalHalfwidthCharacterWidth;
	}

	public dispose(): void {
		super.dispose();
	}

	// --- begin event handlers

	public onConfigurationChanged(e: editorCommon.IConfigurationChangedEvent): boolean {
		if (e.viewInfo.rulers || e.layoutInfo || e.fontInfo) {
			this._rulers = this._context.configuration.editor.viewInfo.rulers;
			this._height = this._context.configuration.editor.layoutInfo.contentHeight;
			this._typicalHalfwidthCharacterWidth = this._context.configuration.editor.fontInfo.typicalHalfwidthCharacterWidth;
			return true;
		}
		return false;
	}
	public onScrollChanged(e: ScrollEvent): boolean {
		return super.onScrollChanged(e) || e.scrollHeightChanged;
	}

	// --- end event handlers

	public prepareRender(ctx: IRenderingContext): void {
		// Nothing to read
	}

	public render(ctx: IRestrictedRenderingContext): void {
		let existingRulersLength = this.domNode.children.length;
		let max = Math.max(existingRulersLength, this._rulers.length);

		for (let i = 0; i < max; i++) {

			if (i >= this._rulers.length) {
				this.domNode.removeChild(this.domNode.lastChild);
				continue;
			}

			let node: HTMLElement;
			if (i < existingRulersLength) {
				node = <HTMLElement>this.domNode.children[i];
			} else {
				node = document.createElement('div');
				node.className = 'view-ruler';
				this.domNode.appendChild(node);
			}

			StyleMutator.setHeight(node, Math.min(ctx.scrollHeight, 1000000));
			StyleMutator.setLeft(node, this._rulers[i] * this._typicalHalfwidthCharacterWidth);
		}
	}
}
