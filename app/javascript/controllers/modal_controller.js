import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="modal"
export default class extends Controller {
  static targets = ["container"]

  connect() {
    this.containerTarget.addEventListener("turbo:submit-end", this.handleSubmit)
  }

  disconnect(){
    this.containerTarget.removeEventListener("turbo:submit-end", this.handleSubmit);
  }

  handleSubmit(){
    this.remove();
    const parentFrame = document.getElementById("modal");
    parentFrame.src = undefined;
  }
}
