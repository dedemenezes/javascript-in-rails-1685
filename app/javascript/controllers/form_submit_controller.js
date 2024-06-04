import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-submit"
export default class extends Controller {
  static targets = ['list', 'form']
  connect() {
    console.log(this.formTarget.outerHTML)
  }

  send(event) {
    event.preventDefault()
    // console.log(this.formTarget.action)
    fetch(this.formTarget.action, {
      method: 'POST',
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        if (data.insert_item) {
          this.listTarget.insertAdjacentHTML('beforeend', data.insert_item)
        }
        this.formTarget.outerHTML = data.form
      })
  }
}
