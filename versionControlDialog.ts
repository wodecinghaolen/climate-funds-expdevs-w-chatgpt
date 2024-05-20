import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@material/mwc-dialog';

@customElement('version-control-dialog')
export class TextVersionSelector extends LitElement {
  @property({ type: Array }) listOfTextVersions: string[] = [];
  @property({ type: String }) selectedVersion: string = '';
  @property({ type: String }) selectedText: string = '';
  @property({ type: Boolean }) showDialog: boolean = false;

  static styles = css`
    /* Add your component styles here */
  `;

  render() {
    return html`
      <mwc-dialog .open="${this.showDialog}" @closed="${this.handleDialogClose}" heading="Select Text Version">
        <select @change="${this.handleVersionChange}">
          ${this.listOfTextVersions.map(version => html`
            <option value="${version}">${version}</option>
          `)}
        </select>
        <textarea .value="${this.selectedText}" readonly></textarea>
        <mwc-button slot="primaryAction" @click="${this.handleOk}">OK</mwc-button>
        <mwc-button slot="secondaryAction" @click="${this.handleCancel}">Cancel</mwc-button>
      </mwc-dialog>
    `;
  }

  openDialog() {
    this.showDialog = true;
  }

  handleDialogClose() {
    this.showDialog = false;
  }

  handleVersionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedVersion = selectElement.value;
    // Assuming you have a function to get the text based on the selected version
    this.selectedText = this.getTextForVersion(this.selectedVersion);
  }

  handleOk() {
    // Handle OK button click, for example, submit the selected version
    console.log('OK clicked');
    // Close the dialog
    this.showDialog = false;
  }

  handleCancel() {
    // Handle Cancel button click, for example, discard changes
    console.log('Cancel clicked');
    // Close the dialog
    this.showDialog = false;
  }

  getTextForVersion(version: string): string {
    // Implement your logic to get the text based on the selected version
    // This is just a placeholder implementation
    return `Text for ${version}`;
  }
}
