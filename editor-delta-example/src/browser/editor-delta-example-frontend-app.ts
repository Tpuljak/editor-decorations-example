import { FrontendApplication } from '@theia/core/lib/browser'
import { injectable, inject } from 'inversify'
import { Range, EditorDecoration, MinimapPosition } from '@theia/editor/lib/browser'
import { EditorManager } from '@theia/editor/lib/browser'

@injectable()
export class EditorDeltaExampleFrontendApp extends FrontendApplication {
  @inject(EditorManager) private readonly editorManager: EditorManager

  async start() {
    await super.start()

    this.editorManager.onActiveEditorChanged(editorWidget => {
      if (!editorWidget) {
        return
      }

      const editor = editorWidget.editor

      const newDecorations: EditorDecoration[] = []
      newDecorations.push({
        range: Range.create(editor.document.positionAt(0), editor.document.positionAt(10)),
        options: {
          className: 'selection',
          afterContentClassName: 'after',
          beforeContentClassName: 'before',
          minimap: {
            color: 'red',
            position: MinimapPosition.Inline
          }
        }
      })

      console.log(JSON.stringify(newDecorations))

      editor.deltaDecorations({ oldDecorations: [], newDecorations })
    })
  }
}