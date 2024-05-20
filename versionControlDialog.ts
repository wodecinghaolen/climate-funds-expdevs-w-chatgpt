import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/mwc-dialog';

@customElement('text-version-selector')
export class TextVersionSelector extends LitElement {
  @property({ type: Array }) listOfTextVersions: string[] = [];
  @property({ type: String }) selectedVersion: string = '';
  @property({ type: String }) selectedText: string = '';

  static styles = css`
    /* Add your component styles here */
  `;

  render() {
    return html`
      <mwc-dialog heading="Select Text Version">
        <select @change="${this.handleVersionChange}">
          ${this.listOfTextVersions.map(version => html`
            <option value="${version}">${version}</option>
          `)}
        </select>
        <textarea .value="${this.selectedText}" readonly></textarea>
      </mwc-dialog>
    `;
  }

  handleVersionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedVersion = selectElement.value;
    // Assuming you have a function to get the text based on the selected version
    this.selectedText = this.getTextForVersion(this.selectedVersion);
  }

  getTextForVersion(version: string): string {
    // Implement your logic to get the text based on the selected version
    // This is just a placeholder implementation
    return `Text for ${version}`;
  }
}
