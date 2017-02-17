/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

export default () => `
<div class="welcomePageContainer">
	<div class="welcomePage">
		<div class="title">
			<h1>Visual Studio Code</h1>
			<p class="subtitle">Editing evolved</p>
		</div>
		<div class="row">
			<div class="splash">
				<div class="section start">
					<h2>Start</h2>
					<ul>
						<li><a href="command:workbench.action.files.newUntitledFile">New file</a></li>
						<li class="mac-only"><a href="command:workbench.action.files.openFileFolder">Open folder...</a></li>
						<li class="windows-only linux-only"><a href="command:workbench.action.files.openFolder">Open folder...</a></li>
						<li class="git-only"><a href="command:workbench.action.git.clone">Clone Git repository...</a></li>
					</ul>
				</div>
				<div class="section recent">
					<h2>Recent</h2>
					<ul class="list">
						<!-- Filled programmatically -->
					</ul>
					<p class="none">No recent folders</p>
				</div>
				<div class="section help">
					<h2>Help</h2>
					<ul>
						<li><a href="command:workbench.action.openDocumentationUrl">Product documentation</a></li>
						<li><a href="command:workbench.action.openIntroductoryVideosUrl">Introductory videos</a></li>
						<li><a href="https://github.com/Microsoft/vscode">GitHub repository</a></li>
						<li><a href="http://stackoverflow.com/questions/tagged/vscode?sort=votes?pageSize=50">Stack Overflow</a></li>
						<!-- TODO: Use commands -->
					</ul>
				</div>
				<p class="showOnStartup"><input type="checkbox" id="showOnStartup"> <label for="showOnStartup">Show welcome page on startup</label></p>
			</div>
			<div class="commands">
				<h2>Quick links</h2>
				<ul>
					<li class="showInteractivePlayground"><button data-href="command:workbench.action.showInteractivePlayground"><h3>Interactive playground</h3> <span>Try essential editor features out in a short walkthrough</span></button></li>
					<li class="showInterfaceOverview"><button data-href="command:workbench.action.showInterfaceOverview"><h3>Interface overview</h3> <span>Get a visual overlay highlighting the major components of the UI</span></button></li>
					<li class="selectTheme"><button data-href="command:workbench.action.selectTheme"><h3>Color theme</h3> <span>Make the editor and your code look the way you love</span></button></li>
					<li class="keybindingsReference"><button data-href="command:workbench.action.keybindingsReference"><h3>Keyboard shortcuts reference</h3> <span>A printable PDF with the most common keyboard shortcuts</span></button></li>
					<li class="showCommands"><button data-href="command:workbench.action.showCommands"><h3>Find and run all commands</h3> <span>Rapidly access and search commands from the control panel (<span class="shortcut" data-command="workbench.action.showCommands"></span>)</span></button></li>
					<li class="openGlobalSettings"><button data-href="command:workbench.action.openGlobalSettings"><h3>Configure settings</h3> <span>Unlock the full power of VS Code by tweaking the settings</span></button></li>
					<li class="showRecommendedKeymapExtensions"><button data-href="command:workbench.extensions.action.showRecommendedKeymapExtensions"><h3>Install keyboard shortcuts</h3> <span>Install the keyboard shortcuts of
						<a class="installKeymap" data-keymap-name="Vim" data-keymap="vscodevim.vim" href="javascript:void(0)">Vim</a>,
						<a class="installKeymap" data-keymap-name="Sublime" data-keymap="ms-vscode.sublime-keybindings" href="javascript:void(0)">Sublime</a>,
						<a class="installKeymap" data-keymap-name="Atom" data-keymap="ms-vscode.atom-keybindings" href="javascript:void(0)">Atom</a> and
						<a href="command:workbench.extensions.action.showRecommendedKeymapExtensions">others</a>
					</span></button></li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;