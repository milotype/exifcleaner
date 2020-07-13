import unhandled from "electron-unhandled";
import { isDev } from "../common/is_dev";

// electron-webpack HMR (Hot Module Reload)
// to automatically reload code on save when
// in development mode
if (isDev && module.hot) {
	module.hot.accept();
}

// stylesheets
import "../styles/index.scss";

// app
import { setupDragAndDrop } from "./drag";
import { setupSelectFilesMenu } from "./menu_select_files";

function setup(): void {
	// setup app
	setupDragAndDrop();
	setupSelectFilesMenu();

	// report unhandled errors
	unhandled();
}

setup();
