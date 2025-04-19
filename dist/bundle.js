/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles/style.css */
:root {
    --primary-color: #4a6bff;
    --primary-dark: #3b56cc;
    --secondary-color: #f8f9fa;
    --text-color: #212529;
    --light-gray: #e9ecef;
    --gray: #6c757d;
    --success: #28a745;
    --danger: #dc3545;
    --warning: #ffc107;
    --border-radius: 8px;
    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: #f5f7fb;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Header */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--light-gray);
    margin-bottom: 30px;
  }
  
  header h1 {
    font-size: 28px;
    color: var(--primary-color);
  }
  
  .search-box {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    width: 300px;
  }
  
  .search-box input {
    flex: 1;
    padding: 10px 15px;
    border: none;
    outline: none;
    font-size: 16px;
  }
  
  .search-box button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .search-box button:hover {
    background-color: var(--primary-dark);
  }
  
  /* Main Layout */
  main {
    display: flex;
    gap: 30px;
  }
  
  .sidebar {
    width: 250px;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 20px;
  }
  
  .content {
    flex: 1;
    display: flex;
    gap: 30px;
  }
  
  .contacts-list-container {
    flex: 1;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 20px;
  }
  
  .contact-details {
    flex: 1;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 20px;
    min-height: 500px;
    max-height: 90vh; /* Prevent the form from exceeding the viewport height */
    overflow-y: auto; /* Add scroll if content overflows */
    position: relative;
  }
  
  /* Filter Section */
  .filter-section h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: var(--gray);
  }
  
  #categories-list {
    list-style: none;
  }
  
  #categories-list li {
    padding: 10px 15px;
    margin-bottom: 5px;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
  }
  
  #categories-list li:hover {
    background-color: var(--light-gray);
  }
  
  #categories-list li.active {
    background-color: var(--primary-color);
    color: white;
  }
  
  /* Buttons */
  .btn-primary {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    transition: var(--transition);
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  
  .btn-primary:hover {
    background-color: var(--primary-dark);
  }
  
  .btn-secondary {
    background-color: var(--light-gray);
    color: var(--text-color);
  }
  
  .btn-secondary:hover {
    background-color: #dadce0;
  }
  
  .btn-danger {
    background-color: var(--danger);
    color: white;
  }
  
  .btn-danger:hover {
    background-color: #bd2130;
  }
  
  /* Contacts List */
  .contacts-list-container h2 {
    margin-bottom: 20px;
    font-size: 22px;
  }
  
  .contacts-list {
    max-height: 600px;
    overflow-y: auto;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid var(--light-gray);
    cursor: pointer;
    transition: var(--transition);
  }
  
  .contact-item:hover {
    background-color: var(--secondary-color);
  }
  
  .contact-item.active {
    background-color: rgba(74, 107, 255, 0.1);
    border-left: 4px solid var(--primary-color);
  }
  
  .contact-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 15px;
  }
  
  .contact-info {
    flex: 1;
  }
  
  .contact-name {
    font-weight: bold;
    font-size: 16px;
  }
  
  .contact-email {
    color: var(--gray);
    font-size: 14px;
  }
  
  .contact-category {
    font-size: 12px;
    background-color: var(--light-gray);
    padding: 3px 8px;
    border-radius: 20px;
  }
  
  /* Contact Details */
  .contact-details-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .contact-details-actions {
    display: flex;
    gap: 10px;
  }
  
  .contact-details-actions button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: var(--gray);
    transition: var(--transition);
  }
  
  .contact-details-actions button:hover {
    color: var(--primary-color);
  }
  
  .contact-details-actions .delete-btn:hover {
    color: var(--danger);
  }
  
  .contact-large-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    margin-bottom: 20px;
  }
  
  .contact-details-content {
    margin-top: 20px;
  }
  
  .contact-field {
    margin-bottom: 15px;
  }
  
  .contact-field-label {
    font-size: 14px;
    color: var(--gray);
  }
  
  .contact-field-value {
    font-size: 16px;
  }
  
  .empty-state {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--gray);
  }
  
  .empty-state i {
    font-size: 60px;
    margin-bottom: 20px;
  }
  
  /* Modal */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }
  
  .modal.show {
    display: flex;
  }
  
  .modal-content {
    background-color: white;
    border-radius: var(--border-radius);
    width: 500px;
    max-width: 90%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: slideDown 0.3s ease;
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid var(--light-gray);
  }
  
  .close-modal, .close-confirm-modal {
    font-size: 24px;
    cursor: pointer;
    color: var(--gray);
  }
  
  .modal-body {
    padding: 20px;
  }
  
  /* Form */
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--light-gray);
    border-radius: var(--border-radius);
    font-size: 16px;
    transition: var(--transition);
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: var(--primary-color);
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 107, 255, 0.2);
  }
  
  .form-group textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
    position: sticky; /* Keep buttons visible at the bottom of the form */
    bottom: 0;
    background-color: white; /* Match the form background */
    padding: 10px 0;
  }

  /* Form Actions Buttons */
  .form-actions button {
    flex: 1; /* Make both buttons take equal width */
    padding: 10px 15px;
    font-size: 16px;
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
  }
  
  /* Enregistrer Button */
  .form-actions .btn-enregistrer {
    background-color: var(--primary-color);
    color: white;
  }
  
  .form-actions .btn-enregistrer:hover {
    background-color: var(--primary-dark);
  }
  
  /* Annuler Button */
  .form-actions .btn-annuler {
    background-color: var(--danger);
    color: white;
  }
  
  .form-actions .btn-annuler:hover {
    background-color: #bd2130; /* Slightly darker danger color */
  }
  
  /* Error Messages */
  .error-messages {
    color: var(--danger);
    margin-top: 10px;
  }
  
  /* Toast Notifications */
  .toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 2000;
  }
  
  .toast {
    padding: 12px 20px;
    border-radius: var(--border-radius);
    color: white;
    margin-bottom: 10px;
    min-width: 250px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
  }
  
  .toast.success {
    background-color: var(--success);
  }
  
  .toast.error {
    background-color: var(--danger);
  }
  
  .toast.warning {
    background-color: var(--warning);
    color: var(--text-color);
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  /* Responsive Design */
  @media (max-width: 900px) {
    main {
      flex-direction: column;
    }
    
    .sidebar {
      width: 100%;
    }
    
    .content {
      flex-direction: column;
    }
  }`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,yBAAyB;AACzB;IACI,wBAAwB;IACxB,uBAAuB;IACvB,0BAA0B;IAC1B,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;IACpB,0CAA0C;IAC1C,2BAA2B;EAC7B;;EAEA;IACE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,4DAA4D;IAC5D,gBAAgB;IAChB,wBAAwB;IACxB,yBAAyB;EAC3B;;EAEA;IACE,iBAAiB;IACjB,cAAc;IACd,aAAa;EACf;;EAEA,WAAW;EACX;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,0CAA0C;IAC1C,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,2BAA2B;EAC7B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,6BAA6B;IAC7B,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,OAAO;IACP,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,eAAe;EACjB;;EAEA;IACE,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,qCAAqC;EACvC;;EAEA,gBAAgB;EAChB;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,uBAAuB;IACvB,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;EACf;;EAEA;IACE,OAAO;IACP,aAAa;IACb,SAAS;EACX;;EAEA;IACE,OAAO;IACP,uBAAuB;IACvB,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;EACf;;EAEA;IACE,OAAO;IACP,uBAAuB;IACvB,mCAAmC;IACnC,6BAA6B;IAC7B,aAAa;IACb,iBAAiB;IACjB,gBAAgB,EAAE,wDAAwD;IAC1E,gBAAgB,EAAE,oCAAoC;IACtD,kBAAkB;EACpB;;EAEA,mBAAmB;EACnB;IACE,mBAAmB;IACnB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,sCAAsC;IACtC,YAAY;EACd;;EAEA,YAAY;EACZ;IACE,qBAAqB;IACrB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,6BAA6B;IAC7B,WAAW;IACX,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,mCAAmC;IACnC,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,+BAA+B;IAC/B,YAAY;EACd;;EAEA;IACE,yBAAyB;EAC3B;;EAEA,kBAAkB;EAClB;IACE,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,0CAA0C;IAC1C,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,yCAAyC;IACzC,2CAA2C;EAC7C;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,mCAAmC;IACnC,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA,oBAAoB;EACpB;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;EAEA;IACE,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,6BAA6B;EAC/B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA,UAAU;EACV;IACE,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,uBAAuB;IACvB,mCAAmC;IACnC,YAAY;IACZ,cAAc;IACd,yCAAyC;IACzC,8BAA8B;EAChC;;EAEA;IACE;MACE,4BAA4B;MAC5B,UAAU;IACZ;IACA;MACE,wBAAwB;MACxB,UAAU;IACZ;EACF;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,0CAA0C;EAC5C;;EAEA;IACE,eAAe;IACf,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA,SAAS;EACT;IACE,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;;;IAGE,WAAW;IACX,aAAa;IACb,mCAAmC;IACnC,mCAAmC;IACnC,eAAe;IACf,6BAA6B;EAC/B;;EAEA;;;IAGE,kCAAkC;IAClC,aAAa;IACb,6CAA6C;EAC/C;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,yBAAyB;IACzB,SAAS;IACT,gBAAgB;IAChB,gBAAgB,EAAE,mDAAmD;IACrE,SAAS;IACT,uBAAuB,EAAE,8BAA8B;IACvD,eAAe;EACjB;;EAEA,yBAAyB;EACzB;IACE,OAAO,EAAE,uCAAuC;IAChD,kBAAkB;IAClB,eAAe;IACf,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,kBAAkB;EACpB;;EAEA,uBAAuB;EACvB;IACE,sCAAsC;IACtC,YAAY;EACd;;EAEA;IACE,qCAAqC;EACvC;;EAEA,mBAAmB;EACnB;IACE,+BAA+B;IAC/B,YAAY;EACd;;EAEA;IACE,yBAAyB,EAAE,iCAAiC;EAC9D;;EAEA,mBAAmB;EACnB;IACE,oBAAoB;IACpB,gBAAgB;EAClB;;EAEA,wBAAwB;EACxB;IACE,eAAe;IACf,YAAY;IACZ,WAAW;IACX,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,yCAAyC;IACzC,aAAa;IACb,8BAA8B;IAC9B,6DAA6D;EAC/D;;EAEA;IACE,gCAAgC;EAClC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,gCAAgC;IAChC,wBAAwB;EAC1B;;EAEA;IACE;MACE,2BAA2B;MAC3B,UAAU;IACZ;IACA;MACE,wBAAwB;MACxB,UAAU;IACZ;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;;EAEA,sBAAsB;EACtB;IACE;MACE,sBAAsB;IACxB;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,sBAAsB;IACxB;EACF","sourcesContent":["/* src/styles/style.css */\r\n:root {\r\n    --primary-color: #4a6bff;\r\n    --primary-dark: #3b56cc;\r\n    --secondary-color: #f8f9fa;\r\n    --text-color: #212529;\r\n    --light-gray: #e9ecef;\r\n    --gray: #6c757d;\r\n    --success: #28a745;\r\n    --danger: #dc3545;\r\n    --warning: #ffc107;\r\n    --border-radius: 8px;\r\n    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    --transition: all 0.3s ease;\r\n  }\r\n  \r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    line-height: 1.6;\r\n    color: var(--text-color);\r\n    background-color: #f5f7fb;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Header */\r\n  header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid var(--light-gray);\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  header h1 {\r\n    font-size: 28px;\r\n    color: var(--primary-color);\r\n  }\r\n  \r\n  .search-box {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    overflow: hidden;\r\n    width: 300px;\r\n  }\r\n  \r\n  .search-box input {\r\n    flex: 1;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .search-box button {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .search-box button:hover {\r\n    background-color: var(--primary-dark);\r\n  }\r\n  \r\n  /* Main Layout */\r\n  main {\r\n    display: flex;\r\n    gap: 30px;\r\n  }\r\n  \r\n  .sidebar {\r\n    width: 250px;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    padding: 20px;\r\n  }\r\n  \r\n  .content {\r\n    flex: 1;\r\n    display: flex;\r\n    gap: 30px;\r\n  }\r\n  \r\n  .contacts-list-container {\r\n    flex: 1;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    padding: 20px;\r\n  }\r\n  \r\n  .contact-details {\r\n    flex: 1;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    padding: 20px;\r\n    min-height: 500px;\r\n    max-height: 90vh; /* Prevent the form from exceeding the viewport height */\r\n    overflow-y: auto; /* Add scroll if content overflows */\r\n    position: relative;\r\n  }\r\n  \r\n  /* Filter Section */\r\n  .filter-section h3 {\r\n    margin-bottom: 15px;\r\n    font-size: 18px;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  #categories-list {\r\n    list-style: none;\r\n  }\r\n  \r\n  #categories-list li {\r\n    padding: 10px 15px;\r\n    margin-bottom: 5px;\r\n    border-radius: var(--border-radius);\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  #categories-list li:hover {\r\n    background-color: var(--light-gray);\r\n  }\r\n  \r\n  #categories-list li.active {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n  }\r\n  \r\n  /* Buttons */\r\n  .btn-primary {\r\n    display: inline-block;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    border-radius: var(--border-radius);\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .btn-primary:hover {\r\n    background-color: var(--primary-dark);\r\n  }\r\n  \r\n  .btn-secondary {\r\n    background-color: var(--light-gray);\r\n    color: var(--text-color);\r\n  }\r\n  \r\n  .btn-secondary:hover {\r\n    background-color: #dadce0;\r\n  }\r\n  \r\n  .btn-danger {\r\n    background-color: var(--danger);\r\n    color: white;\r\n  }\r\n  \r\n  .btn-danger:hover {\r\n    background-color: #bd2130;\r\n  }\r\n  \r\n  /* Contacts List */\r\n  .contacts-list-container h2 {\r\n    margin-bottom: 20px;\r\n    font-size: 22px;\r\n  }\r\n  \r\n  .contacts-list {\r\n    max-height: 600px;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .contact-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 15px;\r\n    border-bottom: 1px solid var(--light-gray);\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .contact-item:hover {\r\n    background-color: var(--secondary-color);\r\n  }\r\n  \r\n  .contact-item.active {\r\n    background-color: rgba(74, 107, 255, 0.1);\r\n    border-left: 4px solid var(--primary-color);\r\n  }\r\n  \r\n  .contact-avatar {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    margin-right: 15px;\r\n  }\r\n  \r\n  .contact-info {\r\n    flex: 1;\r\n  }\r\n  \r\n  .contact-name {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .contact-email {\r\n    color: var(--gray);\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .contact-category {\r\n    font-size: 12px;\r\n    background-color: var(--light-gray);\r\n    padding: 3px 8px;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  /* Contact Details */\r\n  .contact-details-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact-details-actions {\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  \r\n  .contact-details-actions button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    color: var(--gray);\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .contact-details-actions button:hover {\r\n    color: var(--primary-color);\r\n  }\r\n  \r\n  .contact-details-actions .delete-btn:hover {\r\n    color: var(--danger);\r\n  }\r\n  \r\n  .contact-large-avatar {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 32px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact-details-content {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .contact-field {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .contact-field-label {\r\n    font-size: 14px;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  .contact-field-value {\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .empty-state {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  .empty-state i {\r\n    font-size: 60px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  /* Modal */\r\n  .modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 1000;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .modal.show {\r\n    display: flex;\r\n  }\r\n  \r\n  .modal-content {\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    width: 500px;\r\n    max-width: 90%;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n    animation: slideDown 0.3s ease;\r\n  }\r\n  \r\n  @keyframes slideDown {\r\n    from {\r\n      transform: translateY(-50px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .modal-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid var(--light-gray);\r\n  }\r\n  \r\n  .close-modal, .close-confirm-modal {\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  .modal-body {\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Form */\r\n  .form-group {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .form-group label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .form-group input,\r\n  .form-group select,\r\n  .form-group textarea {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid var(--light-gray);\r\n    border-radius: var(--border-radius);\r\n    font-size: 16px;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .form-group input:focus,\r\n  .form-group select:focus,\r\n  .form-group textarea:focus {\r\n    border-color: var(--primary-color);\r\n    outline: none;\r\n    box-shadow: 0 0 0 2px rgba(74, 107, 255, 0.2);\r\n  }\r\n  \r\n  .form-group textarea {\r\n    min-height: 100px;\r\n    resize: vertical;\r\n  }\r\n  \r\n  .form-actions {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    margin-top: 20px;\r\n    position: sticky; /* Keep buttons visible at the bottom of the form */\r\n    bottom: 0;\r\n    background-color: white; /* Match the form background */\r\n    padding: 10px 0;\r\n  }\r\n\r\n  /* Form Actions Buttons */\r\n  .form-actions button {\r\n    flex: 1; /* Make both buttons take equal width */\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    border-radius: var(--border-radius);\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Enregistrer Button */\r\n  .form-actions .btn-enregistrer {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n  }\r\n  \r\n  .form-actions .btn-enregistrer:hover {\r\n    background-color: var(--primary-dark);\r\n  }\r\n  \r\n  /* Annuler Button */\r\n  .form-actions .btn-annuler {\r\n    background-color: var(--danger);\r\n    color: white;\r\n  }\r\n  \r\n  .form-actions .btn-annuler:hover {\r\n    background-color: #bd2130; /* Slightly darker danger color */\r\n  }\r\n  \r\n  /* Error Messages */\r\n  .error-messages {\r\n    color: var(--danger);\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  /* Toast Notifications */\r\n  .toast-container {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    z-index: 2000;\r\n  }\r\n  \r\n  .toast {\r\n    padding: 12px 20px;\r\n    border-radius: var(--border-radius);\r\n    color: white;\r\n    margin-bottom: 10px;\r\n    min-width: 250px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;\r\n  }\r\n  \r\n  .toast.success {\r\n    background-color: var(--success);\r\n  }\r\n  \r\n  .toast.error {\r\n    background-color: var(--danger);\r\n  }\r\n  \r\n  .toast.warning {\r\n    background-color: var(--warning);\r\n    color: var(--text-color);\r\n  }\r\n  \r\n  @keyframes slideIn {\r\n    from {\r\n      transform: translateX(100%);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes fadeOut {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  /* Responsive Design */\r\n  @media (max-width: 900px) {\r\n    main {\r\n      flex-direction: column;\r\n    }\r\n    \r\n    .sidebar {\r\n      width: 100%;\r\n    }\r\n    \r\n    .content {\r\n      flex-direction: column;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0,_rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _services_ContactService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/ContactService */ "./src/services/ContactService.ts");
// src/app.ts

class App {
    constructor() {
        this.selectedContactId = null;
        this.currentFilter = 'all';
        this.contactDeleteCallback = null;
        this.contactService = new _services_ContactService__WEBPACK_IMPORTED_MODULE_0__.ContactService();
        // Initialize DOM elements
        this.contactsList = document.getElementById('contacts-list');
        this.contactDetails = document.getElementById('contact-details');
        this.categoriesList = document.getElementById('categories-list');
        this.searchInput = document.getElementById('search-input');
        this.contactModal = document.getElementById('contact-modal');
        this.confirmModal = document.getElementById('confirm-modal');
        this.contactForm = document.getElementById('contact-form');
        this.contactCountElement = document.getElementById('contact-count');
        this.initEventListeners();
        this.renderContactsList();
        this.renderCategoriesList();
    }
    initEventListeners() {
        var _a, _b, _c, _d, _e, _f, _g;
        // Search
        (_a = document.getElementById('search-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.renderContactsList(this.searchInput.value);
        });
        this.searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.renderContactsList(this.searchInput.value);
            }
        });
        // Add contact
        (_b = document.getElementById('add-contact-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.openAddContactModal();
        });
        // Modal events
        (_c = document.querySelector('.close-modal')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
            this.closeModal(this.contactModal);
        });
        (_d = document.querySelector('.close-confirm-modal')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
            this.closeModal(this.confirmModal);
        });
        (_e = document.getElementById('cancel-button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
            this.closeModal(this.contactModal);
        });
        (_f = document.getElementById('confirm-cancel')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
            this.closeModal(this.confirmModal);
        });
        (_g = document.getElementById('confirm-yes')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => {
            if (this.contactDeleteCallback) {
                this.contactDeleteCallback(this.selectedContactId);
                this.contactDeleteCallback = null;
            }
            this.closeModal(this.confirmModal);
        });
        // Form submission
        this.contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleFormSubmit();
        });
    }
    renderContactsList(searchTerm = '') {
        let contacts;
        if (searchTerm) {
            contacts = this.contactService.rechercherContacts(searchTerm);
        }
        else if (this.currentFilter !== 'all') {
            contacts = this.contactService.filtrerParCategorie(this.currentFilter);
        }
        else {
            contacts = this.contactService.obtenirTousContacts();
        }
        this.contactsList.innerHTML = '';
        this.contactCountElement.textContent = `(${contacts.length})`;
        if (contacts.length === 0) {
            this.contactsList.innerHTML = `
        <div class="empty-state">
          <p>Aucun contact trouvé</p>
        </div>
      `;
            return;
        }
        contacts.forEach(contact => {
            const contactElement = document.createElement('div');
            contactElement.className = `contact-item ${contact.id === this.selectedContactId ? 'active' : ''}`;
            contactElement.dataset.id = contact.id;
            const initials = contact.prenom.charAt(0) + contact.nom.charAt(0);
            // Corrected innerHTML
            contactElement.innerHTML = `
        <div class="contact-avatar">${initials.toUpperCase()}</div>
        <div class="contact-info">
          <div class="contact-name">${contact.prenom} ${contact.nom}</div>
          <div class="contact-email">${contact.email}</div>
        </div>
        <div class="contact-category">${contact.categorie}</div>
      `;
            contactElement.addEventListener('click', () => {
                this.selectContact(contact.id);
            });
            this.contactsList.appendChild(contactElement);
        });
    }
    renderCategoriesList() {
        var _a;
        const categories = this.contactService.obtenirCategories();
        // Clear existing categories except "All"
        const allCategory = this.categoriesList.querySelector('[data-category="all"]');
        this.categoriesList.innerHTML = '';
        if (allCategory) {
            this.categoriesList.appendChild(allCategory);
        }
        categories.forEach(category => {
            const categoryElement = document.createElement('li');
            categoryElement.textContent = category;
            categoryElement.dataset.category = category;
            if (this.currentFilter === category) {
                categoryElement.classList.add('active');
            }
            categoryElement.addEventListener('click', () => {
                this.filterByCategory(category);
            });
            this.categoriesList.appendChild(categoryElement);
        });
        // Add event listener to "All" category if it exists
        (_a = this.categoriesList.querySelector('[data-category="all"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.filterByCategory('all');
        });
    }
    filterByCategory(category) {
        this.currentFilter = category;
        // Update active category
        const categories = this.categoriesList.querySelectorAll('li');
        categories.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.category === category) {
                item.classList.add('active');
            }
        });
        this.renderContactsList();
    }
    selectContact(contactId) {
        this.selectedContactId = contactId;
        // Update active contact in list
        const contactItems = this.contactsList.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.id === contactId) {
                item.classList.add('active');
            }
        });
        this.renderContactDetails();
    }
    renderContactDetails() {
        var _a, _b;
        if (!this.selectedContactId) {
            this.contactDetails.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-user-circle"></i>
          <p>Sélectionnez un contact pour voir les détails</p>
        </div>
      `;
            return;
        }
        const contact = this.contactService.obtenirContactParId(this.selectedContactId);
        if (!contact) {
            return;
        }
        const initials = contact.prenom.charAt(0) + contact.nom.charAt(0);
        this.contactDetails.innerHTML = `
      <div class="contact-details-header">
        <h2>${contact.prenom} ${contact.nom}</h2>
        <div class="contact-details-actions">
          <button class="edit-btn" title="Modifier"><i class="fas fa-edit"></i></button>
          <button class="delete-btn" title="Supprimer"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
      
      <div class="contact-large-avatar">${initials.toUpperCase()}</div>
      
      <div class="contact-details-content">
        <div class="contact-field">
          <div class="contact-field-label">Email</div>
          <div class="contact-field-value">${contact.email}</div>
        </div>
        
        <div class="contact-field">
          <div class="contact-field-label">Téléphone</div>
          <div class="contact-field-value">${contact.telephone}</div>
        </div>
        
        ${contact.adresse ? `
        <div class="contact-field">
          <div class="contact-field-label">Adresse</div>
          <div class="contact-field-value">${contact.adresse}</div>
        </div>
        ` : ''}
        
        <div class="contact-field">
          <div class="contact-field-label">Catégorie</div>
          <div class="contact-field-value">${contact.categorie}</div>
        </div>
        
        ${contact.notes ? `
        <div class="contact-field">
          <div class="contact-field-label">Notes</div>
          <div class="contact-field-value">${contact.notes}</div>
        </div>
        ` : ''}
      </div>
    `;
        // Add event listeners to action buttons
        (_a = this.contactDetails.querySelector('.edit-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.openEditContactModal(contact);
        });
        (_b = this.contactDetails.querySelector('.delete-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            this.openDeleteConfirmation(contact);
        });
    }
    openAddContactModal() {
        var _a;
        // Reset form
        this.contactForm.reset();
        (_a = document.getElementById('contact-id')) === null || _a === void 0 ? void 0 : _a.setAttribute('value', '');
        document.getElementById('modal-title').textContent = 'Ajouter un Contact';
        document.getElementById('form-errors').innerHTML = '';
        // Show modal
        this.openModal(this.contactModal);
    }
    openEditContactModal(contact) {
        var _a;
        // Fill form with contact data
        (_a = document.getElementById('contact-id')) === null || _a === void 0 ? void 0 : _a.setAttribute('value', contact.id);
        document.getElementById('prenom').value = contact.prenom;
        document.getElementById('nom').value = contact.nom;
        document.getElementById('email').value = contact.email;
        document.getElementById('telephone').value = contact.telephone;
        document.getElementById('adresse').value = contact.adresse || '';
        document.getElementById('categorie').value = contact.categorie;
        document.getElementById('notes').value = contact.notes || '';
        document.getElementById('modal-title').textContent = 'Modifier le Contact';
        document.getElementById('form-errors').innerHTML = '';
        // Show modal
        this.openModal(this.contactModal);
    }
    openDeleteConfirmation(contact) {
        document.getElementById('confirm-message').textContent =
            `Êtes-vous sûr de vouloir supprimer le contact ${contact.prenom} ${contact.nom}?`;
        this.contactDeleteCallback = (id) => {
            if (this.contactService.supprimerContact(id)) {
                this.showToast('Contact supprimé avec succès!', 'success');
                this.selectedContactId = null;
                this.renderContactsList();
                this.renderCategoriesList();
                this.renderContactDetails();
            }
            else {
                this.showToast('Erreur lors de la suppression du contact', 'error');
            }
        };
        this.openModal(this.confirmModal);
    }
    handleFormSubmit() {
        var _a;
        const contactId = document.getElementById('contact-id').value;
        const contact = {
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            adresse: document.getElementById('adresse').value || undefined,
            categorie: document.getElementById('categorie').value,
            notes: document.getElementById('notes').value || undefined
        };
        let result;
        if (contactId) {
            // Update existing contact
            result = this.contactService.mettreAJourContact(contactId, contact);
        }
        else {
            // Add new contact
            result = this.contactService.ajouterContact(contact);
        }
        if (result.success) {
            this.showToast(contactId ? 'Contact modifié avec succès!' : 'Contact ajouté avec succès!', 'success');
            this.closeModal(this.contactModal);
            if (result.data) {
                this.selectedContactId = result.data.id;
            }
            this.renderContactsList();
            this.renderCategoriesList();
            this.renderContactDetails();
        }
        else {
            const errorsElement = document.getElementById('form-errors');
            errorsElement.innerHTML = '';
            (_a = result.errors) === null || _a === void 0 ? void 0 : _a.forEach(error => {
                const errorElement = document.createElement('div');
                errorElement.textContent = error;
                errorsElement.appendChild(errorElement);
            });
        }
    }
    openModal(modal) {
        modal.classList.add('show');
    }
    closeModal(modal) {
        modal.classList.remove('show');
    }
    showToast(message, type) {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toastContainer.appendChild(toast);
        // Remove the toast after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}


/***/ }),

/***/ "./src/services/ContactService.ts":
/*!****************************************!*\
  !*** ./src/services/ContactService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactService: () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils_Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Validator */ "./src/utils/Validator.ts");


class ContactService {
    constructor() {
        this.storageKey = 'contacts';
        this.contacts = this.loadContacts();
        // If no contacts exist, add some examples
        if (this.contacts.length === 0) {
            this.ajouterContact({
                nom: 'Dupont',
                prenom: 'Jean',
                email: 'jean.dupont@email.com',
                telephone: '0612345678',
                categorie: 'Famille'
            });
            this.ajouterContact({
                nom: 'Martin',
                prenom: 'Sophie',
                email: 'sophie.martin@email.com',
                telephone: '0687654321',
                categorie: 'Travail'
            });
        }
    }
    loadContacts() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : [];
    }
    saveContacts() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.contacts));
    }
    ajouterContact(contact) {
        const validation = _utils_Validator__WEBPACK_IMPORTED_MODULE_0__.Validator.validateContact(contact);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }
        const nouveauContact = Object.assign(Object.assign({}, contact), { id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])() });
        this.contacts.push(nouveauContact);
        this.saveContacts();
        return { success: true, data: nouveauContact };
    }
    obtenirTousContacts() {
        return [...this.contacts];
    }
    obtenirContactParId(id) {
        return this.contacts.find(contact => contact.id === id);
    }
    mettreAJourContact(id, contactMisAJour) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index === -1) {
            return { success: false, errors: ["Contact non trouvé"] };
        }
        const contactComplet = Object.assign(Object.assign({}, this.contacts[index]), contactMisAJour);
        const validation = _utils_Validator__WEBPACK_IMPORTED_MODULE_0__.Validator.validateContact(contactComplet);
        if (!validation.isValid) {
            return { success: false, errors: validation.errors };
        }
        this.contacts[index] = contactComplet;
        this.saveContacts();
        return { success: true, data: this.contacts[index] };
    }
    supprimerContact(id) {
        const longueurInitiale = this.contacts.length;
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        if (this.contacts.length !== longueurInitiale) {
            this.saveContacts();
            return true;
        }
        return false;
    }
    rechercherContacts(terme) {
        if (!terme)
            return this.obtenirTousContacts();
        const termeRecherche = terme.toLowerCase();
        return this.contacts.filter(contact => contact.nom.toLowerCase().includes(termeRecherche) ||
            contact.prenom.toLowerCase().includes(termeRecherche) ||
            contact.email.toLowerCase().includes(termeRecherche) ||
            contact.telephone.includes(termeRecherche) ||
            (contact.notes && contact.notes.toLowerCase().includes(termeRecherche)));
    }
    filtrerParCategorie(categorie) {
        if (!categorie)
            return this.obtenirTousContacts();
        return this.contacts.filter(contact => contact.categorie.toLowerCase() === categorie.toLowerCase());
    }
    obtenirCategories() {
        const categories = new Set();
        this.contacts.forEach(contact => {
            if (contact.categorie) {
                categories.add(contact.categorie);
            }
        });
        return Array.from(categories);
    }
}


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/Validator.ts":
/*!********************************!*\
  !*** ./src/utils/Validator.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validator: () => (/* binding */ Validator)
/* harmony export */ });
// src/utils/Validator.ts
class Validator {
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    static isValidPhone(phone) {
        // Format for international numbers
        const phoneRegex = /^(?:(?:\+|00)(?:\d{1,3})[\s.-]?)?(?:\d{1,4}[\s.-]?)??(?:[\s.-]?\d{1,4}){1,4}$/;
        return phoneRegex.test(phone);
    }
    static validateContact(contact) {
        const errors = [];
        if (!contact.nom)
            errors.push("Le nom est requis");
        if (!contact.prenom)
            errors.push("Le prénom est requis");
        if (!contact.email) {
            errors.push("L'email est requis");
        }
        else if (!this.isValidEmail(contact.email)) {
            errors.push("Format d'email invalide");
        }
        if (!contact.telephone) {
            errors.push("Le numéro de téléphone est requis");
        }
        else if (!this.isValidPhone(contact.telephone)) {
            errors.push("Format de téléphone invalide");
        }
        if (!contact.categorie)
            errors.push("La catégorie est requise");
        return {
            isValid: errors.length === 0,
            errors
        };
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.ts");
//console.log("Hello, Webpack!");
// src/index.ts


window.addEventListener('DOMContentLoaded', () => {
    new _app__WEBPACK_IMPORTED_MODULE_1__.App();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPLDhGQUE4RixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVkseUJBQXlCLHlCQUF5QixhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9B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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBLGlDQUFpQztBQUNqQyxlQUFlO0FBQ2E7QUFDQTtBQUU1QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLElBQUkscUNBQUcsRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9zcmMvc2VydmljZXMvQ29udGFjdFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9zcmMvdXRpbHMvVmFsaWRhdG9yLnRzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3JjL3N0eWxlcy9zdHlsZS5jc3MgKi9cclxuOnJvb3Qge1xyXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNGE2YmZmO1xyXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzYjU2Y2M7XHJcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIC0tdGV4dC1jb2xvcjogIzIxMjUyOTtcclxuICAgIC0tbGlnaHQtZ3JheTogI2U5ZWNlZjtcclxuICAgIC0tZ3JheTogIzZjNzU3ZDtcclxuICAgIC0tc3VjY2VzczogIzI4YTc0NTtcclxuICAgIC0tZGFuZ2VyOiAjZGMzNTQ1O1xyXG4gICAgLS13YXJuaW5nOiAjZmZjMTA3O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhlYWRlciAqL1xyXG4gIGhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYm94IGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWJveCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICB9XHJcbiAgXHJcbiAgLyogTWFpbiBMYXlvdXQgKi9cclxuICBtYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdHMtbGlzdC1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWRldGFpbHMge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDkwdmg7IC8qIFByZXZlbnQgdGhlIGZvcm0gZnJvbSBleGNlZWRpbmcgdGhlIHZpZXdwb3J0IGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogQWRkIHNjcm9sbCBpZiBjb250ZW50IG92ZXJmbG93cyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAvKiBGaWx0ZXIgU2VjdGlvbiAqL1xyXG4gIC5maWx0ZXItc2VjdGlvbiBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gIH1cclxuICBcclxuICAjY2F0ZWdvcmllcy1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gICNjYXRlZ29yaWVzLWxpc3QgbGkge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICB9XHJcbiAgXHJcbiAgI2NhdGVnb3JpZXMtbGlzdCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcclxuICB9XHJcbiAgXHJcbiAgI2NhdGVnb3JpZXMtbGlzdCBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEJ1dHRvbnMgKi9cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZTA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZGFuZ2VyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENvbnRhY3RzIExpc3QgKi9cclxuICAuY29udGFjdHMtbGlzdC1jb250YWluZXIgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3RzLWxpc3Qge1xyXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW0uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDEwNywgMjU1LCAwLjEpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LW5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWVtYWlsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtY2F0ZWdvcnkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ29udGFjdCBEZXRhaWxzICovXHJcbiAgLmNvbnRhY3QtZGV0YWlscy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZGV0YWlscy1hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzLWFjdGlvbnMgYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZGV0YWlscy1hY3Rpb25zIC5kZWxldGUtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1sYXJnZS1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZmllbGQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1maWVsZC12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eS1zdGF0ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gIH1cclxuICBcclxuICAuZW1wdHktc3RhdGUgaSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCAqL1xyXG4gIC5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLnNob3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc2xpZGVEb3duIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZS1tb2RhbCwgLmNsb3NlLWNvbmZpcm0tbW9kYWwge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBGb3JtICovXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCBpbnB1dCxcclxuICAuZm9ybS1ncm91cCBzZWxlY3QsXHJcbiAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyxcclxuICAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMsXHJcbiAgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSg3NCwgMTA3LCAyNTUsIDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5OyAvKiBLZWVwIGJ1dHRvbnMgdmlzaWJsZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBmb3JtICovXHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogTWF0Y2ggdGhlIGZvcm0gYmFja2dyb3VuZCAqL1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLyogRm9ybSBBY3Rpb25zIEJ1dHRvbnMgKi9cclxuICAuZm9ybS1hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgICBmbGV4OiAxOyAvKiBNYWtlIGJvdGggYnV0dG9ucyB0YWtlIGVxdWFsIHdpZHRoICovXHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBFbnJlZ2lzdHJlciBCdXR0b24gKi9cclxuICAuZm9ybS1hY3Rpb25zIC5idG4tZW5yZWdpc3RyZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWFjdGlvbnMgLmJ0bi1lbnJlZ2lzdHJlcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gIH1cclxuICBcclxuICAvKiBBbm51bGVyIEJ1dHRvbiAqL1xyXG4gIC5mb3JtLWFjdGlvbnMgLmJ0bi1hbm51bGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWFjdGlvbnMgLmJ0bi1hbm51bGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7IC8qIFNsaWdodGx5IGRhcmtlciBkYW5nZXIgY29sb3IgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogRXJyb3IgTWVzc2FnZXMgKi9cclxuICAuZXJyb3ItbWVzc2FnZXMge1xyXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUb2FzdCBOb3RpZmljYXRpb25zICovXHJcbiAgLnRvYXN0LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZSwgZmFkZU91dCAwLjNzIGVhc2UgMi43cyBmb3J3YXJkcztcclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0LnN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC5lcnJvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gIH1cclxuICBcclxuICAudG9hc3Qud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgbWFpbiB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixxQkFB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SUFDRSxzQ0FBc0M7SUFDdEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBLG1CQUFtQjtFQUNuQjtJQUNFLCtCQUErQjtJQUMvQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUIsRUFBRSxpQ0FBaUM7RUFDOUQ7O0VBRUEsbUJBQW1CO0VBQ25CO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjs7RUFFQSx3QkFBd0I7RUFDeEI7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDZEQUE2RDtFQUMvRDs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRTtNQUNFLDJCQUEyQjtNQUMzQixVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjs7RUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7RUFFQSxzQkFBc0I7RUFDdEI7SUFDRTtNQUNFLHNCQUFzQjtJQUN4Qjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLHNCQUFzQjtJQUN4QjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHNyYy9zdHlsZXMvc3R5bGUuY3NzICovXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXByaW1hcnktY29sb3I6ICM0YTZiZmY7XFxyXFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjM2I1NmNjO1xcclxcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2Y4ZjlmYTtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiAjMjEyNTI5O1xcclxcbiAgICAtLWxpZ2h0LWdyYXk6ICNlOWVjZWY7XFxyXFxuICAgIC0tZ3JheTogIzZjNzU3ZDtcXHJcXG4gICAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xcclxcbiAgICAtLWRhbmdlcjogI2RjMzU0NTtcXHJcXG4gICAgLS13YXJuaW5nOiAjZmZjMTA3O1xcclxcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgLS1ib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICoge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogSGVhZGVyICovXFxyXFxuICBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBoZWFkZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1ib3gge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtYm94IGlucHV0IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1ib3ggYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtYm94IGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIE1haW4gTGF5b3V0ICovXFxyXFxuICBtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhciB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRlbnQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0cy1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWRldGFpbHMge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogOTB2aDsgLyogUHJldmVudCB0aGUgZm9ybSBmcm9tIGV4Y2VlZGluZyB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87IC8qIEFkZCBzY3JvbGwgaWYgY29udGVudCBvdmVyZmxvd3MgKi9cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBGaWx0ZXIgU2VjdGlvbiAqL1xcclxcbiAgLmZpbHRlci1zZWN0aW9uIGgzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjYXRlZ29yaWVzLWxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY2F0ZWdvcmllcy1saXN0IGxpIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY2F0ZWdvcmllcy1saXN0IGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjYXRlZ29yaWVzLWxpc3QgbGkuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQnV0dG9ucyAqL1xcclxcbiAgLmJ0bi1wcmltYXJ5IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1zZWNvbmRhcnkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLXNlY29uZGFyeTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYWRjZTA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4tZGFuZ2VyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLWRhbmdlcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIENvbnRhY3RzIExpc3QgKi9cXHJcXG4gIC5jb250YWN0cy1saXN0LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3RzLWxpc3Qge1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWl0ZW0uYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTA3LCAyNTUsIDAuMSk7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWF2YXRhciB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1pbmZvIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtbmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWVtYWlsIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWNhdGVnb3J5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXHJcXG4gICAgcGFkZGluZzogM3B4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ29udGFjdCBEZXRhaWxzICovXFxyXFxuICAuY29udGFjdC1kZXRhaWxzLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZGV0YWlscy1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1kZXRhaWxzLWFjdGlvbnMgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWRldGFpbHMtYWN0aW9ucyBidXR0b246aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWRldGFpbHMtYWN0aW9ucyAuZGVsZXRlLWJ0bjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1sYXJnZS1hdmF0YXIge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWRldGFpbHMtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWZpZWxkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZmllbGQtbGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZmllbGQtdmFsdWUge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lbXB0eS1zdGF0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZW1wdHktc3RhdGUgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTW9kYWwgKi9cXHJcXG4gIC5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwuc2hvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZS1tb2RhbCwgLmNsb3NlLWNvbmZpcm0tbW9kYWwge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZvcm0gKi9cXHJcXG4gIC5mb3JtLWdyb3VwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybS1ncm91cCBpbnB1dCxcXHJcXG4gIC5mb3JtLWdyb3VwIHNlbGVjdCxcXHJcXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsXFxyXFxuICAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMsXFxyXFxuICAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDc0LCAxMDcsIDI1NSwgMC4yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTsgLyogS2VlcCBidXR0b25zIHZpc2libGUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZm9ybSAqL1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBNYXRjaCB0aGUgZm9ybSBiYWNrZ3JvdW5kICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEZvcm0gQWN0aW9ucyBCdXR0b25zICovXFxyXFxuICAuZm9ybS1hY3Rpb25zIGJ1dHRvbiB7XFxyXFxuICAgIGZsZXg6IDE7IC8qIE1ha2UgYm90aCBidXR0b25zIHRha2UgZXF1YWwgd2lkdGggKi9cXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRW5yZWdpc3RyZXIgQnV0dG9uICovXFxyXFxuICAuZm9ybS1hY3Rpb25zIC5idG4tZW5yZWdpc3RyZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybS1hY3Rpb25zIC5idG4tZW5yZWdpc3RyZXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBBbm51bGVyIEJ1dHRvbiAqL1xcclxcbiAgLmZvcm0tYWN0aW9ucyAuYnRuLWFubnVsZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb3JtLWFjdGlvbnMgLmJ0bi1hbm51bGVyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMDsgLyogU2xpZ2h0bHkgZGFya2VyIGRhbmdlciBjb2xvciAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBFcnJvciBNZXNzYWdlcyAqL1xcclxcbiAgLmVycm9yLW1lc3NhZ2VzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFRvYXN0IE5vdGlmaWNhdGlvbnMgKi9cXHJcXG4gIC50b2FzdC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMjBweDtcXHJcXG4gICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC50b2FzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZSwgZmFkZU91dCAwLjNzIGVhc2UgMi43cyBmb3J3YXJkcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvYXN0LnN1Y2Nlc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvYXN0LmVycm9yIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvYXN0Lndhcm5pbmcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBmYWRlT3V0IHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBSZXNwb25zaXZlIERlc2lnbiAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zaWRlYmFyIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tID8/IG9wdGlvbnMucm5nPy4oKSA/PyBybmcoKTtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGlmIChvZmZzZXQgPCAwIHx8IG9mZnNldCArIDE2ID4gYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFVVSUQgYnl0ZSByYW5nZSAke29mZnNldH06JHtvZmZzZXQgKyAxNX0gaXMgb3V0IG9mIGJ1ZmZlciBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gc3JjL2FwcC50c1xyXG5pbXBvcnQgeyBDb250YWN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvQ29udGFjdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9tb2RlbHMvQ29udGFjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBwcml2YXRlIGNvbnRhY3RTZXJ2aWNlOiBDb250YWN0U2VydmljZTtcclxuICBwcml2YXRlIHNlbGVjdGVkQ29udGFjdElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGN1cnJlbnRGaWx0ZXI6IHN0cmluZyA9ICdhbGwnO1xyXG4gIHByaXZhdGUgY29udGFjdERlbGV0ZUNhbGxiYWNrOiAoKGlkOiBzdHJpbmcpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XHJcbiAgXHJcbiAgLy8gRE9NIEVsZW1lbnRzXHJcbiAgcHJpdmF0ZSBjb250YWN0c0xpc3Q6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgY29udGFjdERldGFpbHM6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgY2F0ZWdvcmllc0xpc3Q6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgc2VhcmNoSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb250YWN0TW9kYWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgY29uZmlybU1vZGFsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNvbnRhY3RGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb250YWN0Q291bnRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRhY3RTZXJ2aWNlID0gbmV3IENvbnRhY3RTZXJ2aWNlKCk7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgRE9NIGVsZW1lbnRzXHJcbiAgICB0aGlzLmNvbnRhY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cy1saXN0JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLmNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZGV0YWlscycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzLWxpc3QnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMuY29udGFjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbW9kYWwnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuY29uZmlybU1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tbW9kYWwnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuY29udGFjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5jb250YWN0Q291bnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtY291bnQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIFxyXG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucmVuZGVyQ29udGFjdHNMaXN0KCk7XHJcbiAgICB0aGlzLnJlbmRlckNhdGVnb3JpZXNMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIC8vIFNlYXJjaFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyQ29udGFjdHNMaXN0KHRoaXMuc2VhcmNoSW5wdXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGFjdHNMaXN0KHRoaXMuc2VhcmNoSW5wdXQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gQWRkIGNvbnRhY3RcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY29udGFjdC1idXR0b24nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3BlbkFkZENvbnRhY3RNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIE1vZGFsIGV2ZW50c1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5jb250YWN0TW9kYWwpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1jb25maXJtLW1vZGFsJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5jb25maXJtTW9kYWwpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5jb250YWN0TW9kYWwpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWNhbmNlbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuY29uZmlybU1vZGFsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS15ZXMnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRhY3REZWxldGVDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY29udGFjdERlbGV0ZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWRDb250YWN0SWQhKTtcclxuICAgICAgICB0aGlzLmNvbnRhY3REZWxldGVDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuY29uZmlybU1vZGFsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBGb3JtIHN1Ym1pc3Npb25cclxuICAgIHRoaXMuY29udGFjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbnRhY3RzTGlzdChzZWFyY2hUZXJtOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xyXG4gICAgbGV0IGNvbnRhY3RzOiBDb250YWN0W107XHJcbiAgICBcclxuICAgIGlmIChzZWFyY2hUZXJtKSB7XHJcbiAgICAgIGNvbnRhY3RzID0gdGhpcy5jb250YWN0U2VydmljZS5yZWNoZXJjaGVyQ29udGFjdHMoc2VhcmNoVGVybSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEZpbHRlciAhPT0gJ2FsbCcpIHtcclxuICAgICAgY29udGFjdHMgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLmZpbHRyZXJQYXJDYXRlZ29yaWUodGhpcy5jdXJyZW50RmlsdGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRhY3RzID0gdGhpcy5jb250YWN0U2VydmljZS5vYnRlbmlyVG91c0NvbnRhY3RzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5jb250YWN0Q291bnRFbGVtZW50LnRleHRDb250ZW50ID0gYCgke2NvbnRhY3RzLmxlbmd0aH0pYDtcclxuICAgIFxyXG4gICAgaWYgKGNvbnRhY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmNvbnRhY3RzTGlzdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgICAgICA8cD5BdWN1biBjb250YWN0IHRyb3V2w6k8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29udGFjdHMuZm9yRWFjaChjb250YWN0ID0+IHtcclxuICAgICAgY29uc3QgY29udGFjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29udGFjdEVsZW1lbnQuY2xhc3NOYW1lID0gYGNvbnRhY3QtaXRlbSAke2NvbnRhY3QuaWQgPT09IHRoaXMuc2VsZWN0ZWRDb250YWN0SWQgPyAnYWN0aXZlJyA6ICcnfWA7XHJcbiAgICAgIGNvbnRhY3RFbGVtZW50LmRhdGFzZXQuaWQgPSBjb250YWN0LmlkO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgaW5pdGlhbHMgPSBjb250YWN0LnByZW5vbS5jaGFyQXQoMCkgKyBjb250YWN0Lm5vbS5jaGFyQXQoMCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDb3JyZWN0ZWQgaW5uZXJIVE1MXHJcbiAgICAgIGNvbnRhY3RFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1hdmF0YXJcIj4ke2luaXRpYWxzLnRvVXBwZXJDYXNlKCl9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbmFtZVwiPiR7Y29udGFjdC5wcmVub219ICR7Y29udGFjdC5ub219PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1lbWFpbFwiPiR7Y29udGFjdC5lbWFpbH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXRlZ29yeVwiPiR7Y29udGFjdC5jYXRlZ29yaWV9PC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICAgIFxyXG4gICAgICBjb250YWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdENvbnRhY3QoY29udGFjdC5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb250YWN0c0xpc3QuYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNhdGVnb3JpZXNMaXN0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuY29udGFjdFNlcnZpY2Uub2J0ZW5pckNhdGVnb3JpZXMoKTtcclxuICAgIFxyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY2F0ZWdvcmllcyBleGNlcHQgXCJBbGxcIlxyXG4gICAgY29uc3QgYWxsQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNMaXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhdGVnb3J5PVwiYWxsXCJdJyk7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYgKGFsbENhdGVnb3J5KSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QuYXBwZW5kQ2hpbGQoYWxsQ2F0ZWdvcnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBjYXRlZ29yeUVsZW1lbnQudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcclxuICAgICAgY2F0ZWdvcnlFbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudEZpbHRlciA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICBjYXRlZ29yeUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNhdGVnb3J5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlckJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gXCJBbGxcIiBjYXRlZ29yeSBpZiBpdCBleGlzdHNcclxuICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtY2F0ZWdvcnk9XCJhbGxcIl0nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQnlDYXRlZ29yeSgnYWxsJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyQnlDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWx0ZXIgPSBjYXRlZ29yeTtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGFjdGl2ZSBjYXRlZ29yeVxyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllc0xpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgaWYgKGl0ZW0uZGF0YXNldC5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5yZW5kZXJDb250YWN0c0xpc3QoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0Q29udGFjdChjb250YWN0SWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZENvbnRhY3RJZCA9IGNvbnRhY3RJZDtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGFjdGl2ZSBjb250YWN0IGluIGxpc3RcclxuICAgIGNvbnN0IGNvbnRhY3RJdGVtcyA9IHRoaXMuY29udGFjdHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0LWl0ZW0nKTtcclxuICAgIGNvbnRhY3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpZiAoKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuaWQgPT09IGNvbnRhY3RJZCkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnJlbmRlckNvbnRhY3REZXRhaWxzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNvbnRhY3REZXRhaWxzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkQ29udGFjdElkKSB7XHJcbiAgICAgIHRoaXMuY29udGFjdERldGFpbHMuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICA8cD5Tw6lsZWN0aW9ubmV6IHVuIGNvbnRhY3QgcG91ciB2b2lyIGxlcyBkw6l0YWlsczwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWN0ID0gdGhpcy5jb250YWN0U2VydmljZS5vYnRlbmlyQ29udGFjdFBhcklkKHRoaXMuc2VsZWN0ZWRDb250YWN0SWQpO1xyXG4gICAgaWYgKCFjb250YWN0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgaW5pdGlhbHMgPSBjb250YWN0LnByZW5vbS5jaGFyQXQoMCkgKyBjb250YWN0Lm5vbS5jaGFyQXQoMCk7XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFjdERldGFpbHMuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kZXRhaWxzLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMj4ke2NvbnRhY3QucHJlbm9tfSAke2NvbnRhY3Qubm9tfTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGV0YWlscy1hY3Rpb25zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1idG5cIiB0aXRsZT1cIk1vZGlmaWVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnRuXCIgdGl0bGU9XCJTdXBwcmltZXJcIj48aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtbGFyZ2UtYXZhdGFyXCI+JHtpbml0aWFscy50b1VwcGVyQ2FzZSgpfTwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGV0YWlscy1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkLWxhYmVsXCI+RW1haWw8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkLXZhbHVlXCI+JHtjb250YWN0LmVtYWlsfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZC1sYWJlbFwiPlTDqWzDqXBob25lPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZC12YWx1ZVwiPiR7Y29udGFjdC50ZWxlcGhvbmV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHtjb250YWN0LmFkcmVzc2UgPyBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkLWxhYmVsXCI+QWRyZXNzZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtdmFsdWVcIj4ke2NvbnRhY3QuYWRyZXNzZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgIDogJyd9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkLWxhYmVsXCI+Q2F0w6lnb3JpZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtdmFsdWVcIj4ke2NvbnRhY3QuY2F0ZWdvcmllfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICR7Y29udGFjdC5ub3RlcyA/IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtbGFiZWxcIj5Ob3RlczwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtdmFsdWVcIj4ke2NvbnRhY3Qubm90ZXN9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCA6ICcnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICBcclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gYWN0aW9uIGJ1dHRvbnNcclxuICAgIHRoaXMuY29udGFjdERldGFpbHMucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLm9wZW5FZGl0Q29udGFjdE1vZGFsKGNvbnRhY3QpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFjdERldGFpbHMucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3BlbkRlbGV0ZUNvbmZpcm1hdGlvbihjb250YWN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuQWRkQ29udGFjdE1vZGFsKCk6IHZvaWQge1xyXG4gICAgLy8gUmVzZXQgZm9ybVxyXG4gICAgdGhpcy5jb250YWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtaWQnKT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC10aXRsZScpIS50ZXh0Q29udGVudCA9ICdBam91dGVyIHVuIENvbnRhY3QnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZXJyb3JzJykhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHJcbiAgICAvLyBTaG93IG1vZGFsXHJcbiAgICB0aGlzLm9wZW5Nb2RhbCh0aGlzLmNvbnRhY3RNb2RhbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5FZGl0Q29udGFjdE1vZGFsKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuICAgIC8vIEZpbGwgZm9ybSB3aXRoIGNvbnRhY3QgZGF0YVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtaWQnKT8uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNvbnRhY3QuaWQpO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVub20nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IGNvbnRhY3QucHJlbm9tO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub20nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IGNvbnRhY3Qubm9tO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gY29udGFjdC5lbWFpbDtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVsZXBob25lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBjb250YWN0LnRlbGVwaG9uZTtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gY29udGFjdC5hZHJlc3NlIHx8ICcnO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWUnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWUgPSBjb250YWN0LmNhdGVnb3JpZTtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IGNvbnRhY3Qubm90ZXMgfHwgJyc7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC10aXRsZScpIS50ZXh0Q29udGVudCA9ICdNb2RpZmllciBsZSBDb250YWN0JztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWVycm9ycycpIS5pbm5lckhUTUwgPSAnJztcclxuICAgIFxyXG4gICAgLy8gU2hvdyBtb2RhbFxyXG4gICAgdGhpcy5vcGVuTW9kYWwodGhpcy5jb250YWN0TW9kYWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuRGVsZXRlQ29uZmlybWF0aW9uKGNvbnRhY3Q6IENvbnRhY3QpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLW1lc3NhZ2UnKSEudGV4dENvbnRlbnQgPSBcclxuICAgICAgYMOKdGVzLXZvdXMgc8O7ciBkZSB2b3Vsb2lyIHN1cHByaW1lciBsZSBjb250YWN0ICR7Y29udGFjdC5wcmVub219ICR7Y29udGFjdC5ub219P2A7XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFjdERlbGV0ZUNhbGxiYWNrID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY29udGFjdFNlcnZpY2Uuc3VwcHJpbWVyQ29udGFjdChpZCkpIHtcclxuICAgICAgICB0aGlzLnNob3dUb2FzdCgnQ29udGFjdCBzdXBwcmltw6kgYXZlYyBzdWNjw6hzIScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb250YWN0c0xpc3QoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNhdGVnb3JpZXNMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb250YWN0RGV0YWlscygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KCdFcnJldXIgbG9ycyBkZSBsYSBzdXBwcmVzc2lvbiBkdSBjb250YWN0JywgJ2Vycm9yJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMub3Blbk1vZGFsKHRoaXMuY29uZmlybU1vZGFsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRm9ybVN1Ym1pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbnRhY3RJZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1pZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWN0ID0ge1xyXG4gICAgICBub206IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgIHByZW5vbTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVub20nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgZW1haWw6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgdGVsZXBob25lOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbGVwaG9uZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICBhZHJlc3NlOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkcmVzc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIGNhdGVnb3JpZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWUnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgIG5vdGVzOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgfHwgdW5kZWZpbmVkXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgXHJcbiAgICBpZiAoY29udGFjdElkKSB7XHJcbiAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBjb250YWN0XHJcbiAgICAgIHJlc3VsdCA9IHRoaXMuY29udGFjdFNlcnZpY2UubWV0dHJlQUpvdXJDb250YWN0KGNvbnRhY3RJZCwgY29udGFjdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZGQgbmV3IGNvbnRhY3RcclxuICAgICAgcmVzdWx0ID0gdGhpcy5jb250YWN0U2VydmljZS5ham91dGVyQ29udGFjdChjb250YWN0KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgIHRoaXMuc2hvd1RvYXN0KGNvbnRhY3RJZCA/ICdDb250YWN0IG1vZGlmacOpIGF2ZWMgc3VjY8OocyEnIDogJ0NvbnRhY3QgYWpvdXTDqSBhdmVjIHN1Y2PDqHMhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuY29udGFjdE1vZGFsKTtcclxuICAgICAgXHJcbiAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb250YWN0SWQgPSByZXN1bHQuZGF0YS5pZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5yZW5kZXJDb250YWN0c0xpc3QoKTtcclxuICAgICAgdGhpcy5yZW5kZXJDYXRlZ29yaWVzTGlzdCgpO1xyXG4gICAgICB0aGlzLnJlbmRlckNvbnRhY3REZXRhaWxzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlcnJvcnNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZXJyb3JzJykhO1xyXG4gICAgICBlcnJvcnNFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBcclxuICAgICAgcmVzdWx0LmVycm9ycz8uZm9yRWFjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3I7XHJcbiAgICAgICAgZXJyb3JzRWxlbWVudC5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk1vZGFsKG1vZGFsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZU1vZGFsKG1vZGFsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nLCB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1jb250YWluZXInKSE7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2FzdC5jbGFzc05hbWUgPSBgdG9hc3QgJHt0eXBlfWA7XHJcbiAgICB0b2FzdC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICBcclxuICAgIHRvYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvYXN0KTtcclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBhZnRlciAzIHNlY29uZHNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0b2FzdC5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxufSIsIi8vIHNyYy9zZXJ2aWNlcy9Db250YWN0U2VydmljZS50c1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL0NvbnRhY3QnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vdXRpbHMvVmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb250YWN0czogQ29udGFjdFtdO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RvcmFnZUtleSA9ICdjb250YWN0cyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb250YWN0cyA9IHRoaXMubG9hZENvbnRhY3RzKCk7XHJcbiAgICBcclxuICAgIC8vIElmIG5vIGNvbnRhY3RzIGV4aXN0LCBhZGQgc29tZSBleGFtcGxlc1xyXG4gICAgaWYgKHRoaXMuY29udGFjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuYWpvdXRlckNvbnRhY3Qoe1xyXG4gICAgICAgIG5vbTogJ0R1cG9udCcsXHJcbiAgICAgICAgcHJlbm9tOiAnSmVhbicsXHJcbiAgICAgICAgZW1haWw6ICdqZWFuLmR1cG9udEBlbWFpbC5jb20nLFxyXG4gICAgICAgIHRlbGVwaG9uZTogJzA2MTIzNDU2NzgnLFxyXG4gICAgICAgIGNhdGVnb3JpZTogJ0ZhbWlsbGUnXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ham91dGVyQ29udGFjdCh7XHJcbiAgICAgICAgbm9tOiAnTWFydGluJyxcclxuICAgICAgICBwcmVub206ICdTb3BoaWUnLFxyXG4gICAgICAgIGVtYWlsOiAnc29waGllLm1hcnRpbkBlbWFpbC5jb20nLFxyXG4gICAgICAgIHRlbGVwaG9uZTogJzA2ODc2NTQzMjEnLFxyXG4gICAgICAgIGNhdGVnb3JpZTogJ1RyYXZhaWwnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkQ29udGFjdHMoKTogQ29udGFjdFtdIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xyXG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVDb250YWN0cygpOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0cykpO1xyXG4gIH1cclxuXHJcbiAgYWpvdXRlckNvbnRhY3QoY29udGFjdDogT21pdDxDb250YWN0LCAnaWQnPik6IHsgc3VjY2VzczogYm9vbGVhbjsgZGF0YT86IENvbnRhY3Q7IGVycm9ycz86IHN0cmluZ1tdIH0ge1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IFZhbGlkYXRvci52YWxpZGF0ZUNvbnRhY3QoY29udGFjdCk7XHJcbiAgICBcclxuICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb24uZXJyb3JzIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdXZlYXVDb250YWN0OiBDb250YWN0ID0ge1xyXG4gICAgICAuLi5jb250YWN0IGFzIGFueSxcclxuICAgICAgaWQ6IHV1aWR2NCgpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRhY3RzLnB1c2gobm91dmVhdUNvbnRhY3QpO1xyXG4gICAgdGhpcy5zYXZlQ29udGFjdHMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbm91dmVhdUNvbnRhY3QgfTtcclxuICB9XHJcblxyXG4gIG9idGVuaXJUb3VzQ29udGFjdHMoKTogQ29udGFjdFtdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5jb250YWN0c107XHJcbiAgfVxyXG5cclxuICBvYnRlbmlyQ29udGFjdFBhcklkKGlkOiBzdHJpbmcpOiBDb250YWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhY3RzLmZpbmQoY29udGFjdCA9PiBjb250YWN0LmlkID09PSBpZCk7XHJcbiAgfVxyXG5cclxuICBtZXR0cmVBSm91ckNvbnRhY3QoaWQ6IHN0cmluZywgY29udGFjdE1pc0FKb3VyOiBQYXJ0aWFsPENvbnRhY3Q+KTogeyBzdWNjZXNzOiBib29sZWFuOyBkYXRhPzogQ29udGFjdDsgZXJyb3JzPzogc3RyaW5nW10gfSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY29udGFjdHMuZmluZEluZGV4KGNvbnRhY3QgPT4gY29udGFjdC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBbXCJDb250YWN0IG5vbiB0cm91dsOpXCJdIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3RDb21wbGV0ID0geyAuLi50aGlzLmNvbnRhY3RzW2luZGV4XSwgLi4uY29udGFjdE1pc0FKb3VyIH07XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gVmFsaWRhdG9yLnZhbGlkYXRlQ29udGFjdChjb250YWN0Q29tcGxldCk7XHJcbiAgICBcclxuICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb24uZXJyb3JzIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFjdHNbaW5kZXhdID0gY29udGFjdENvbXBsZXQ7XHJcbiAgICB0aGlzLnNhdmVDb250YWN0cygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0aGlzLmNvbnRhY3RzW2luZGV4XSB9O1xyXG4gIH1cclxuXHJcbiAgc3VwcHJpbWVyQ29udGFjdChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBsb25ndWV1ckluaXRpYWxlID0gdGhpcy5jb250YWN0cy5sZW5ndGg7XHJcbiAgICB0aGlzLmNvbnRhY3RzID0gdGhpcy5jb250YWN0cy5maWx0ZXIoY29udGFjdCA9PiBjb250YWN0LmlkICE9PSBpZCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmNvbnRhY3RzLmxlbmd0aCAhPT0gbG9uZ3VldXJJbml0aWFsZSkge1xyXG4gICAgICB0aGlzLnNhdmVDb250YWN0cygpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVjaGVyY2hlckNvbnRhY3RzKHRlcm1lOiBzdHJpbmcpOiBDb250YWN0W10ge1xyXG4gICAgaWYgKCF0ZXJtZSkgcmV0dXJuIHRoaXMub2J0ZW5pclRvdXNDb250YWN0cygpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZXJtZVJlY2hlcmNoZSA9IHRlcm1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoY29udGFjdCA9PiBcclxuICAgICAgY29udGFjdC5ub20udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZSkgfHxcclxuICAgICAgY29udGFjdC5wcmVub20udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZSkgfHxcclxuICAgICAgY29udGFjdC5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm1lUmVjaGVyY2hlKSB8fFxyXG4gICAgICBjb250YWN0LnRlbGVwaG9uZS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZSkgfHxcclxuICAgICAgKGNvbnRhY3Qubm90ZXMgJiYgY29udGFjdC5ub3Rlcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm1lUmVjaGVyY2hlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmaWx0cmVyUGFyQ2F0ZWdvcmllKGNhdGVnb3JpZT86IHN0cmluZyk6IENvbnRhY3RbXSB7XHJcbiAgICBpZiAoIWNhdGVnb3JpZSkgcmV0dXJuIHRoaXMub2J0ZW5pclRvdXNDb250YWN0cygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoY29udGFjdCA9PiBcclxuICAgICAgY29udGFjdC5jYXRlZ29yaWUudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcmllLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvYnRlbmlyQ2F0ZWdvcmllcygpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICB0aGlzLmNvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XHJcbiAgICAgIGlmIChjb250YWN0LmNhdGVnb3JpZSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMuYWRkKGNvbnRhY3QuY2F0ZWdvcmllKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjYXRlZ29yaWVzKTtcclxuICB9XHJcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gc3JjL3V0aWxzL1ZhbGlkYXRvci50c1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yIHtcclxuICAgIHN0YXRpYyBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcbiAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGlzVmFsaWRQaG9uZShwaG9uZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgIC8vIEZvcm1hdCBmb3IgaW50ZXJuYXRpb25hbCBudW1iZXJzXHJcbiAgICAgIGNvbnN0IHBob25lUmVnZXggPSAvXig/Oig/OlxcK3wwMCkoPzpcXGR7MSwzfSlbXFxzLi1dPyk/KD86XFxkezEsNH1bXFxzLi1dPyk/Pyg/OltcXHMuLV0/XFxkezEsNH0pezEsNH0kLztcclxuICAgICAgcmV0dXJuIHBob25lUmVnZXgudGVzdChwaG9uZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVDb250YWN0KGNvbnRhY3Q6IGFueSk6IHsgaXNWYWxpZDogYm9vbGVhbjsgZXJyb3JzOiBzdHJpbmdbXSB9IHtcclxuICAgICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIFxyXG4gICAgICBpZiAoIWNvbnRhY3Qubm9tKSBlcnJvcnMucHVzaChcIkxlIG5vbSBlc3QgcmVxdWlzXCIpO1xyXG4gICAgICBpZiAoIWNvbnRhY3QucHJlbm9tKSBlcnJvcnMucHVzaChcIkxlIHByw6lub20gZXN0IHJlcXVpc1wiKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghY29udGFjdC5lbWFpbCkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKFwiTCdlbWFpbCBlc3QgcmVxdWlzXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVmFsaWRFbWFpbChjb250YWN0LmVtYWlsKSkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKFwiRm9ybWF0IGQnZW1haWwgaW52YWxpZGVcIik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghY29udGFjdC50ZWxlcGhvbmUpIHtcclxuICAgICAgICBlcnJvcnMucHVzaChcIkxlIG51bcOpcm8gZGUgdMOpbMOpcGhvbmUgZXN0IHJlcXVpc1wiKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1ZhbGlkUGhvbmUoY29udGFjdC50ZWxlcGhvbmUpKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goXCJGb3JtYXQgZGUgdMOpbMOpcGhvbmUgaW52YWxpZGVcIik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKCFjb250YWN0LmNhdGVnb3JpZSkgZXJyb3JzLnB1c2goXCJMYSBjYXTDqWdvcmllIGVzdCByZXF1aXNlXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzVmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgZXJyb3JzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vY29uc29sZS5sb2coXCJIZWxsbywgV2VicGFjayFcIik7XHJcbi8vIHNyYy9pbmRleC50c1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIG5ldyBBcHAoKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9