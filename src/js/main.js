import Alpine from '../../node_modules/alpinejs/dist/module.esm.js'

window.Alpine = Alpine

// console.log("main.js: Setting up alpine:init listener.")

// *** Corrected: Register data inside the 'alpine:init' event ***
document.addEventListener('alpine:init', () => {
    // console.log("main.js: alpine:init event fired. Registering gallery component.")
})

// Start Alpine AFTER setting up the listener
Alpine.start()

// console.log("main.js: Alpine.start() called.") 
