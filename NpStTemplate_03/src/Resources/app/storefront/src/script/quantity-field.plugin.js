import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'

export default class QuantityFieldPlugin extends Plugin {
    init() {
        this.minus = DomAccess.querySelector(this.el, '.decrease')
        this.plus = DomAccess.querySelector(this.el, '.increase')
        this.field = DomAccess.querySelector(this.el, 'input[type="number"]')

        this.registerEvents()
    }

    registerEvents() {
        this.minus.addEventListener('click', this.decreaseQuantity.bind(this))
        this.plus.addEventListener('click', this.increaseQuantity.bind(this))
    }

    decreaseQuantity() {
        //assignment says minimum number should be 0 but it makes no sense so I keep it at minimum purchaseStep
        const priceDetail = document.getElementsByClassName('product-detail-price')[0]
        const step = parseInt(this.options.purchaseSteps)
        const newQuant = parseInt(this.field.value) - step
        if(newQuant <= step) {
            this.field.value = step
            const price = parseFloat(this.options.unitPrice)*step
            priceDetail.innerText = "€" + price.toFixed(2) + "*"
            return
        }
        this.field.value = newQuant
        const price = parseFloat(this.options.unitPrice)*newQuant
        priceDetail.innerText = "€" + price.toFixed(2) + "*"
    }

    increaseQuantity() {
        //--formatter for currency-- 
        //---but don't know how to get the € symbol in front of the number :(---
        /**
        *var formatter = new Intl.NumberFormat('de-DE', {
        *    style: 'currency',
        *    currency: 'EUR'
        *})
        */

        const priceDetail = document.getElementsByClassName('product-detail-price')[0]
        const step = parseInt(this.options.purchaseSteps)
        const maxQuant = parseInt(this.options.maxQuantity)
        const newQuant = parseInt(this.field.value) + step
        if(newQuant >= maxQuant) {
            this.field.value = maxQuant
            const price = parseFloat(this.options.unitPrice)*maxQuant
            priceDetail.innerText = "€" + price.toFixed(2) + "*"
            return
        }
        this.field.value = newQuant
        const price = parseFloat(this.options.unitPrice)*newQuant
        priceDetail.innerText = "€" + price.toFixed(2) + "*"
    }
}