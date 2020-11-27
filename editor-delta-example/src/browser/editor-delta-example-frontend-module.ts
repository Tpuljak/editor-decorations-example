/**
 * Generated using theia-extension-generator
 */
import { EditorDeltaExampleCommandContribution, EditorDeltaExampleMenuContribution } from './editor-delta-example-contribution';
import {
  CommandContribution,
  MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";
import { FrontendApplication } from '@theia/core/lib/browser';
import { EditorDeltaExampleFrontendApp } from './editor-delta-example-frontend-app';

export default new ContainerModule((bind, unbind, isBound, rebind) => {
  // add your contribution bindings here
  bind(CommandContribution).to(EditorDeltaExampleCommandContribution);
  bind(MenuContribution).to(EditorDeltaExampleMenuContribution);

  rebind(FrontendApplication).to(EditorDeltaExampleFrontendApp)
});
