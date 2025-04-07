import '../css/styles.css'; // Import the main stylesheet
import './alpine/galleryComponent.js'; // Import the component definition file

import Alpine from '../../node_modules/alpinejs/dist/module.esm.js'

window.Alpine = Alpine

// console.log("main.js: Setting up alpine:init listener.")


Alpine.start()

// console.log("main.js: Alpine.start() called.") 
