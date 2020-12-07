import { Component } from "@angular/core";

import * as icons from "modules/ghp-common/assets/json/kendo-icon-list.json";

type IconsJson = Record<string, Array<string>>

@Component({
  selector: 'icon-viewer-page',
  styleUrls: ['icon-viewer.scss'],
  templateUrl: 'icon-viewer.html',
})
export class IconViewerPage {
  icons: IconsJson = icons.kendoIcons;
  iconTypes: Array<string> = [];
  iconType = "";

  iconsOfType: Array<string> = [];
  selectedIcon = "";

  constructor() {
    this.loadIconTypes();
  }

  loadIconTypes(): void {
    this.iconTypes = Object.keys(this.icons).map((key) => {
      return (key);
    });
  }

  typeChanged(iconType: string): void {
    this.iconType = iconType;

    this.iconsOfType = this.icons[iconType];
  }

  getIconTypes(type: string): Array<string> {
    return this.icons[type];
  }
  selectedItem(item: string): void {
    this.selectedIcon = item;
  }
}