import { Controller } from "@hotwired/stimulus"
import flatpickr from 'flatpickr'

// Connects to data-controller="datepicker"
export default class extends Controller {
  connect() {
    console.log('DATEPICKER CONTROLLER')
    // this.element = element with data-controller
    flatpickr(this.element)
  }
}
