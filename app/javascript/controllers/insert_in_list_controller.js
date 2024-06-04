import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ['toggable']
  connect() {
    console.log(this.toggableTarget)
  }

  send() {
    // console.log(this.toggableTarget)
    this.toggableTarget.classList.toggle('d-none')
  }
}
