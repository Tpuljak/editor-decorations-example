import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const EditorDeltaExampleCommand = {
    id: 'EditorDeltaExample.command',
    label: "Say Hello"
};

@injectable()
export class EditorDeltaExampleCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(EditorDeltaExampleCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class EditorDeltaExampleMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: EditorDeltaExampleCommand.id,
            label: EditorDeltaExampleCommand.label
        });
    }
}
