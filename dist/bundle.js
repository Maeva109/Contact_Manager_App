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
    display: none; /* Hidden by default */
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
    display: flex; /* Show the modal when the "show" class is added */
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
    font-size: 14px;
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
  }

  .form-header {
    font-size: 20px;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 20px;
    text-align: center;
  }`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/styles/style.css */\r\n:root {\r\n    --primary-color: #4a6bff;\r\n    --primary-dark: #3b56cc;\r\n    --secondary-color: #f8f9fa;\r\n    --text-color: #212529;\r\n    --light-gray: #e9ecef;\r\n    --gray: #6c757d;\r\n    --success: #28a745;\r\n    --danger: #dc3545;\r\n    --warning: #ffc107;\r\n    --border-radius: 8px;\r\n    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    --transition: all 0.3s ease;\r\n  }\r\n  \r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    line-height: 1.6;\r\n    color: var(--text-color);\r\n    background-color: #f5f7fb;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Header */\r\n  header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid var(--light-gray);\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  header h1 {\r\n    font-size: 28px;\r\n    color: var(--primary-color);\r\n  }\r\n  \r\n  .search-box {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    overflow: hidden;\r\n    width: 300px;\r\n  }\r\n  \r\n  .search-box input {\r\n    flex: 1;\r\n    padding: 10px 15px;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .search-box button {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .search-box button:hover {\r\n    background-color: var(--primary-dark);\r\n  }\r\n  \r\n  /* Main Layout */\r\n  main {\r\n    display: flex;\r\n    gap: 30px;\r\n  }\r\n  \r\n  .sidebar {\r\n    width: 250px;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    padding: 20px;\r\n  }\r\n  \r\n  .content {\r\n    flex: 1;\r\n    display: flex;\r\n    gap: 30px;\r\n  }\r\n  \r\n  .contacts-list-container {\r\n    flex: 1;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    padding: 20px;\r\n  }\r\n  \r\n  .contact-details {\r\n    flex: 1;\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    box-shadow: var(--box-shadow);\r\n    padding: 20px;\r\n    min-height: 500px;\r\n    max-height: 90vh; /* Prevent the form from exceeding the viewport height */\r\n    overflow-y: auto; /* Add scroll if content overflows */\r\n    position: relative;\r\n  }\r\n  \r\n  /* Filter Section */\r\n  .filter-section h3 {\r\n    margin-bottom: 15px;\r\n    font-size: 18px;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  #categories-list {\r\n    list-style: none;\r\n  }\r\n  \r\n  #categories-list li {\r\n    padding: 10px 15px;\r\n    margin-bottom: 5px;\r\n    border-radius: var(--border-radius);\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  #categories-list li:hover {\r\n    background-color: var(--light-gray);\r\n  }\r\n  \r\n  #categories-list li.active {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n  }\r\n  \r\n  /* Buttons */\r\n  .btn-primary {\r\n    display: inline-block;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    border: none;\r\n    border-radius: var(--border-radius);\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .btn-primary:hover {\r\n    background-color: var(--primary-dark);\r\n  }\r\n  \r\n  .btn-secondary {\r\n    background-color: var(--light-gray);\r\n    color: var(--text-color);\r\n  }\r\n  \r\n  .btn-secondary:hover {\r\n    background-color: #dadce0;\r\n  }\r\n  \r\n  .btn-danger {\r\n    background-color: var(--danger);\r\n    color: white;\r\n  }\r\n  \r\n  .btn-danger:hover {\r\n    background-color: #bd2130;\r\n  }\r\n  \r\n  /* Contacts List */\r\n  .contacts-list-container h2 {\r\n    margin-bottom: 20px;\r\n    font-size: 22px;\r\n  }\r\n  \r\n  .contacts-list {\r\n    max-height: 600px;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .contact-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 15px;\r\n    border-bottom: 1px solid var(--light-gray);\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .contact-item:hover {\r\n    background-color: var(--secondary-color);\r\n  }\r\n  \r\n  .contact-item.active {\r\n    background-color: rgba(74, 107, 255, 0.1);\r\n    border-left: 4px solid var(--primary-color);\r\n  }\r\n  \r\n  .contact-avatar {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    margin-right: 15px;\r\n  }\r\n  \r\n  .contact-info {\r\n    flex: 1;\r\n  }\r\n  \r\n  .contact-name {\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .contact-email {\r\n    color: var(--gray);\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .contact-category {\r\n    font-size: 12px;\r\n    background-color: var(--light-gray);\r\n    padding: 3px 8px;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  /* Contact Details */\r\n  .contact-details-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact-details-actions {\r\n    display: flex;\r\n    gap: 10px;\r\n  }\r\n  \r\n  .contact-details-actions button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    color: var(--gray);\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .contact-details-actions button:hover {\r\n    color: var(--primary-color);\r\n  }\r\n  \r\n  .contact-details-actions .delete-btn:hover {\r\n    color: var(--danger);\r\n  }\r\n  \r\n  .contact-large-avatar {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 32px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .contact-details-content {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .contact-field {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .contact-field-label {\r\n    font-size: 14px;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  .contact-field-value {\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .empty-state {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  .empty-state i {\r\n    font-size: 60px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  /* Modal */\r\n  .modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 1000;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .modal.show {\r\n    display: flex; /* Show the modal when the \"show\" class is added */\r\n  }\r\n  \r\n  .modal-content {\r\n    background-color: white;\r\n    border-radius: var(--border-radius);\r\n    width: 500px;\r\n    max-width: 90%;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n    animation: slideDown 0.3s ease;\r\n  }\r\n  \r\n  @keyframes slideDown {\r\n    from {\r\n      transform: translateY(-50px);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  .modal-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid var(--light-gray);\r\n  }\r\n  \r\n  .close-modal, .close-confirm-modal {\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n    color: var(--gray);\r\n  }\r\n  \r\n  .modal-body {\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Form */\r\n  .form-group {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .form-group label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .form-group input,\r\n  .form-group select,\r\n  .form-group textarea {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid var(--light-gray);\r\n    border-radius: var(--border-radius);\r\n    font-size: 16px;\r\n    transition: var(--transition);\r\n  }\r\n  \r\n  .form-group input:focus,\r\n  .form-group select:focus,\r\n  .form-group textarea:focus {\r\n    border-color: var(--primary-color);\r\n    outline: none;\r\n    box-shadow: 0 0 0 2px rgba(74, 107, 255, 0.2);\r\n  }\r\n  \r\n  .form-group textarea {\r\n    min-height: 100px;\r\n    resize: vertical;\r\n  }\r\n  \r\n  .form-actions {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    margin-top: 20px;\r\n    position: sticky; /* Keep buttons visible at the bottom of the form */\r\n    bottom: 0;\r\n    background-color: white; /* Match the form background */\r\n    padding: 10px 0;\r\n  }\r\n\r\n  /* Form Actions Buttons */\r\n  .form-actions button {\r\n    flex: 1; /* Make both buttons take equal width */\r\n    padding: 10px 15px;\r\n    font-size: 16px;\r\n    border-radius: var(--border-radius);\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: var(--transition);\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Enregistrer Button */\r\n  .form-actions .btn-enregistrer {\r\n    background-color: var(--primary-color);\r\n    color: white;\r\n  }\r\n  \r\n  .form-actions .btn-enregistrer:hover {\r\n    background-color: var(--primary-dark);\r\n  }\r\n  \r\n  /* Annuler Button */\r\n  .form-actions .btn-annuler {\r\n    background-color: var(--danger);\r\n    color: white;\r\n  }\r\n  \r\n  .form-actions .btn-annuler:hover {\r\n    background-color: #bd2130; /* Slightly darker danger color */\r\n  }\r\n  \r\n  /* Error Messages */\r\n  .error-messages {\r\n    color: var(--danger);\r\n    margin-top: 10px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  /* Toast Notifications */\r\n  .toast-container {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    z-index: 2000;\r\n  }\r\n  \r\n  .toast {\r\n    padding: 12px 20px;\r\n    border-radius: var(--border-radius);\r\n    color: white;\r\n    margin-bottom: 10px;\r\n    min-width: 250px;\r\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;\r\n  }\r\n  \r\n  .toast.success {\r\n    background-color: var(--success);\r\n  }\r\n  \r\n  .toast.error {\r\n    background-color: var(--danger);\r\n  }\r\n  \r\n  .toast.warning {\r\n    background-color: var(--warning);\r\n    color: var(--text-color);\r\n  }\r\n  \r\n  @keyframes slideIn {\r\n    from {\r\n      transform: translateX(100%);\r\n      opacity: 0;\r\n    }\r\n    to {\r\n      transform: translateX(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  @keyframes fadeOut {\r\n    from {\r\n      opacity: 1;\r\n    }\r\n    to {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  \r\n  /* Responsive Design */\r\n  @media (max-width: 900px) {\r\n    main {\r\n      flex-direction: column;\r\n    }\r\n    \r\n    .sidebar {\r\n      width: 100%;\r\n    }\r\n    \r\n    .content {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  .form-header {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: var(--primary-color);\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n  }"],"sourceRoot":""}]);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
        (_h = document.querySelector('.btn-annuler')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => {
            const contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                contactModal.classList.remove('show'); // Assuming "show" class makes the modal visible
                contactModal.style.display = 'none'; // Alternatively, hide the modal with CSS
            }
        });
        // Open "Ajouter un Contact" modal
        (_j = document.getElementById('add-contact-button')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', () => {
            const contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                contactModal.classList.add('show'); // Add the "show" class to display the modal
                contactModal.style.display = 'flex'; // Ensure the modal is visible
            }
        });
        // Close "Ajouter un Contact" modal when clicking "Annuler"
        (_k = document.querySelector('.btn-annuler')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', () => {
            const contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                contactModal.classList.remove('show'); // Remove the "show" class
                contactModal.style.display = 'none'; // Hide the modal
            }
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
    ajouterContact(contact) {
        // Check if the phone number already exists
        const existingContact = this.contactService.obtenirTousContacts().find(c => c.telephone === contact.telephone);
        if (existingContact) {
            // Show an error message
            const formErrors = document.getElementById('form-errors');
            if (formErrors) {
                formErrors.textContent = 'Un contact avec ce numéro de téléphone existe déjà.';
            }
            return; // Stop further execution
        }
        // If no duplicate is found, proceed to add the contact
        this.contactService.ajouterContact(contact);
        // Clear the form and close the modal
        this.contactForm.reset();
        const contactModal = document.getElementById('contact-modal');
        if (contactModal) {
            contactModal.classList.remove('show');
            contactModal.style.display = 'none';
        }
        // Re-render the contact list
        this.renderContactsList();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyw4RkFBOEYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLHlCQUF5Qix5QkFBeUIsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssc0JBQXNCLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlB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dEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDO0FBQ2pDLGVBQWU7QUFDYTtBQUNBO0FBRTVCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsSUFBSSxxQ0FBRyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL3NyYy9zZXJ2aWNlcy9Db250YWN0U2VydmljZS50cyIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci8uL3NyYy91dGlscy9WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb250YWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnRhY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY29udGFjdC1tYW5hZ2VyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzcmMvc3R5bGVzL3N0eWxlLmNzcyAqL1xyXG46cm9vdCB7XHJcbiAgICAtLXByaW1hcnktY29sb3I6ICM0YTZiZmY7XHJcbiAgICAtLXByaW1hcnktZGFyazogIzNiNTZjYztcclxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgLS10ZXh0LWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgLS1saWdodC1ncmF5OiAjZTllY2VmO1xyXG4gICAgLS1ncmF5OiAjNmM3NTdkO1xyXG4gICAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xyXG4gICAgLS1kYW5nZXI6ICNkYzM1NDU7XHJcbiAgICAtLXdhcm5pbmc6ICNmZmMxMDc7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIC0tYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGVhZGVyICovXHJcbiAgaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWJveCBpbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1ib3ggYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtYm94IGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gIH1cclxuICBcclxuICAvKiBNYWluIExheW91dCAqL1xyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0cy1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZGV0YWlscyB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDsgLyogUHJldmVudCB0aGUgZm9ybSBmcm9tIGV4Y2VlZGluZyB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBBZGQgc2Nyb2xsIGlmIGNvbnRlbnQgb3ZlcmZsb3dzICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZpbHRlciBTZWN0aW9uICovXHJcbiAgLmZpbHRlci1zZWN0aW9uIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjYXRlZ29yaWVzLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgI2NhdGVnb3JpZXMtbGlzdCBsaSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gIH1cclxuICBcclxuICAjY2F0ZWdvcmllcy1saXN0IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xyXG4gIH1cclxuICBcclxuICAjY2F0ZWdvcmllcy1saXN0IGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogQnV0dG9ucyAqL1xyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNlMDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1kYW5nZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ29udGFjdHMgTGlzdCAqL1xyXG4gIC5jb250YWN0cy1saXN0LWNvbnRhaW5lciBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdHMtbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaXRlbS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgMTA3LCAyNTUsIDAuMSk7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8ge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtZW1haWwge1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1jYXRlZ29yeSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDb250YWN0IERldGFpbHMgKi9cclxuICAuY29udGFjdC1kZXRhaWxzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWRldGFpbHMtYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzLWFjdGlvbnMgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWRldGFpbHMtYWN0aW9ucyBidXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1kZXRhaWxzLWFjdGlvbnMgLmRlbGV0ZS1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWxhcmdlLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWRldGFpbHMtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1maWVsZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWZpZWxkLXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5LXN0YXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbXB0eS1zdGF0ZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsICovXHJcbiAgLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwuc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBTaG93IHRoZSBtb2RhbCB3aGVuIHRoZSBcInNob3dcIiBjbGFzcyBpcyBhZGRlZCAqL1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlLW1vZGFsLCAuY2xvc2UtY29uZmlybS1tb2RhbCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZvcm0gKi9cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIGlucHV0LFxyXG4gIC5mb3JtLWdyb3VwIHNlbGVjdCxcclxuICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLFxyXG4gIC5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyxcclxuICAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDc0LCAxMDcsIDI1NSwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7IC8qIEtlZXAgYnV0dG9ucyB2aXNpYmxlIGF0IHRoZSBib3R0b20gb2YgdGhlIGZvcm0gKi9cclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBNYXRjaCB0aGUgZm9ybSBiYWNrZ3JvdW5kICovXHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAvKiBGb3JtIEFjdGlvbnMgQnV0dG9ucyAqL1xyXG4gIC5mb3JtLWFjdGlvbnMgYnV0dG9uIHtcclxuICAgIGZsZXg6IDE7IC8qIE1ha2UgYm90aCBidXR0b25zIHRha2UgZXF1YWwgd2lkdGggKi9cclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEVucmVnaXN0cmVyIEJ1dHRvbiAqL1xyXG4gIC5mb3JtLWFjdGlvbnMgLmJ0bi1lbnJlZ2lzdHJlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyAuYnRuLWVucmVnaXN0cmVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFubnVsZXIgQnV0dG9uICovXHJcbiAgLmZvcm0tYWN0aW9ucyAuYnRuLWFubnVsZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYWN0aW9ucyAuYnRuLWFubnVsZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMDsgLyogU2xpZ2h0bHkgZGFya2VyIGRhbmdlciBjb2xvciAqL1xyXG4gIH1cclxuICBcclxuICAvKiBFcnJvciBNZXNzYWdlcyAqL1xyXG4gIC5lcnJvci1tZXNzYWdlcyB7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRvYXN0IE5vdGlmaWNhdGlvbnMgKi9cclxuICAudG9hc3QtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgei1pbmRleDogMjAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0IHtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlLCBmYWRlT3V0IDAuM3MgZWFzZSAyLjdzIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICAudG9hc3Quc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0LmVycm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC53YXJuaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNsaWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICBtYWluIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvcm0taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7QUFDekI7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsNERBQTREO0lBQzVELGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUEsV0FBVztFQUNYO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsT0FBTztJQUNQLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQSxnQkFBZ0I7RUFDaEI7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLE9BQU87SUFDUCxhQUFhO0lBQ2IsU0FBUztFQUNYOztFQUVBO0lBQ0UsT0FBTztJQUNQLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFFLHdEQUF3RDtJQUMxRSxnQkFBZ0IsRUFBRSxvQ0FBb0M7SUFDdEQsa0JBQWtCO0VBQ3BCOztFQUVBLG1CQUFtQjtFQUNuQjtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7O0VBRUEsWUFBWTtFQUNaO0lBQ0UscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsK0JBQStCO0lBQy9CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLHlDQUF5QztJQUN6QywyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBLG9CQUFvQjtFQUNwQjtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBLFVBQVU7RUFDVjtJQUNFLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhLEVBQUUsa0RBQWtEO0VBQ25FOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osY0FBYztJQUNkLHlDQUF5QztJQUN6Qyw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRTtNQUNFLDRCQUE0QjtNQUM1QixVQUFVO0lBQ1o7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QixVQUFVO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQSxTQUFTO0VBQ1Q7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTs7O0lBR0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7OztJQUdFLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsNkNBQTZDO0VBQy9DOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBRSxtREFBbUQ7SUFDckUsU0FBUztJQUNULHVCQUF1QixFQUFFLDhCQUE4QjtJQUN2RCxlQUFlO0VBQ2pCOztFQUVBLHlCQUF5QjtFQUN6QjtJQUNFLE9BQU8sRUFBRSx1Q0FBdUM7SUFDaEQsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isa0JBQWtCO0VBQ3BCOztFQUVBLHVCQUF1QjtFQUN2QjtJQUNFLHNDQUFzQztJQUN0QyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkM7O0VBRUEsbUJBQW1CO0VBQ25CO0lBQ0UsK0JBQStCO0lBQy9CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLGlDQUFpQztFQUM5RDs7RUFFQSxtQkFBbUI7RUFDbkI7SUFDRSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUEsd0JBQXdCO0VBQ3hCO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw2REFBNkQ7RUFDL0Q7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0U7TUFDRSwyQkFBMkI7TUFDM0IsVUFBVTtJQUNaO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsVUFBVTtJQUNaO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0Y7O0VBRUEsc0JBQXNCO0VBQ3RCO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7O0lBRUE7TUFDRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEI7RUFDRjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3JjL3N0eWxlcy9zdHlsZS5jc3MgKi9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzRhNmJmZjtcXHJcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMzYjU2Y2M7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZjhmOWZhO1xcclxcbiAgICAtLXRleHQtY29sb3I6ICMyMTI1Mjk7XFxyXFxuICAgIC0tbGlnaHQtZ3JheTogI2U5ZWNlZjtcXHJcXG4gICAgLS1ncmF5OiAjNmM3NTdkO1xcclxcbiAgICAtLXN1Y2Nlc3M6ICMyOGE3NDU7XFxyXFxuICAgIC0tZGFuZ2VyOiAjZGMzNTQ1O1xcclxcbiAgICAtLXdhcm5pbmc6ICNmZmMxMDc7XFxyXFxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAtLWJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2ZiO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBIZWFkZXIgKi9cXHJcXG4gIGhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2VhcmNoLWJveCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1ib3ggaW5wdXQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2VhcmNoLWJveCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1ib3ggYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTWFpbiBMYXlvdXQgKi9cXHJcXG4gIG1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaWRlYmFyIHtcXHJcXG4gICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGVudCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3RzLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZGV0YWlscyB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA5MHZoOyAvKiBQcmV2ZW50IHRoZSBmb3JtIGZyb20gZXhjZWVkaW5nIHRoZSB2aWV3cG9ydCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogQWRkIHNjcm9sbCBpZiBjb250ZW50IG92ZXJmbG93cyAqL1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZpbHRlciBTZWN0aW9uICovXFxyXFxuICAuZmlsdGVyLXNlY3Rpb24gaDMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2NhdGVnb3JpZXMtbGlzdCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjYXRlZ29yaWVzLWxpc3QgbGkge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjYXRlZ29yaWVzLWxpc3QgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI2NhdGVnb3JpZXMtbGlzdCBsaS5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBCdXR0b25zICovXFxyXFxuICAuYnRuLXByaW1hcnkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLXByaW1hcnk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYnRuLXNlY29uZGFyeSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGNlMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJ0bi1kYW5nZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5idG4tZGFuZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogQ29udGFjdHMgTGlzdCAqL1xcclxcbiAgLmNvbnRhY3RzLWxpc3QtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdHMtbGlzdCB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtaXRlbS5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAxMDcsIDI1NSwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtYXZhdGFyIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWluZm8ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZW1haWwge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtY2F0ZWdvcnkge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBDb250YWN0IERldGFpbHMgKi9cXHJcXG4gIC5jb250YWN0LWRldGFpbHMtaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1kZXRhaWxzLWFjdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWRldGFpbHMtYWN0aW9ucyBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZGV0YWlscy1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZGV0YWlscy1hY3Rpb25zIC5kZWxldGUtYnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0LWxhcmdlLWF2YXRhciB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZGV0YWlscy1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3QtZmllbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1maWVsZC1sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdC1maWVsZC12YWx1ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVtcHR5LXN0YXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lbXB0eS1zdGF0ZSBpIHtcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RhbCAqL1xcclxcbiAgLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC5zaG93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgLyogU2hvdyB0aGUgbW9kYWwgd2hlbiB0aGUgXFxcInNob3dcXFwiIGNsYXNzIGlzIGFkZGVkICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogOTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIHNsaWRlRG93biB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZS1tb2RhbCwgLmNsb3NlLWNvbmZpcm0tbW9kYWwge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIEZvcm0gKi9cXHJcXG4gIC5mb3JtLWdyb3VwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybS1ncm91cCBpbnB1dCxcXHJcXG4gIC5mb3JtLWdyb3VwIHNlbGVjdCxcXHJcXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsXFxyXFxuICAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMsXFxyXFxuICAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDc0LCAxMDcsIDI1NSwgMC4yKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTsgLyogS2VlcCBidXR0b25zIHZpc2libGUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZm9ybSAqL1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBNYXRjaCB0aGUgZm9ybSBiYWNrZ3JvdW5kICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEZvcm0gQWN0aW9ucyBCdXR0b25zICovXFxyXFxuICAuZm9ybS1hY3Rpb25zIGJ1dHRvbiB7XFxyXFxuICAgIGZsZXg6IDE7IC8qIE1ha2UgYm90aCBidXR0b25zIHRha2UgZXF1YWwgd2lkdGggKi9cXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogRW5yZWdpc3RyZXIgQnV0dG9uICovXFxyXFxuICAuZm9ybS1hY3Rpb25zIC5idG4tZW5yZWdpc3RyZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybS1hY3Rpb25zIC5idG4tZW5yZWdpc3RyZXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBBbm51bGVyIEJ1dHRvbiAqL1xcclxcbiAgLmZvcm0tYWN0aW9ucyAuYnRuLWFubnVsZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb3JtLWFjdGlvbnMgLmJ0bi1hbm51bGVyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkMjEzMDsgLyogU2xpZ2h0bHkgZGFya2VyIGRhbmdlciBjb2xvciAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBFcnJvciBNZXNzYWdlcyAqL1xcclxcbiAgLmVycm9yLW1lc3NhZ2VzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogVG9hc3QgTm90aWZpY2F0aW9ucyAqL1xcclxcbiAgLnRvYXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICByaWdodDogMjBweDtcXHJcXG4gICAgei1pbmRleDogMjAwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnRvYXN0IHtcXHJcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbmltYXRpb246IHNsaWRlSW4gMC4zcyBlYXNlLCBmYWRlT3V0IDAuM3MgZWFzZSAyLjdzIGZvcndhcmRzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9hc3Quc3VjY2VzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9hc3QuZXJyb3Ige1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAudG9hc3Qud2FybmluZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgc2xpZGVJbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAa2V5ZnJhbWVzIGZhZGVPdXQge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIFJlc3BvbnNpdmUgRGVzaWduICovXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnNpZGViYXIge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm0taGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gcm5nKCk7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIHNyYy9hcHAudHNcclxuaW1wb3J0IHsgQ29udGFjdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0NvbnRhY3RTZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4vbW9kZWxzL0NvbnRhY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgcHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2U7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZENvbnRhY3RJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjdXJyZW50RmlsdGVyOiBzdHJpbmcgPSAnYWxsJztcclxuICBwcml2YXRlIGNvbnRhY3REZWxldGVDYWxsYmFjazogKChpZDogc3RyaW5nKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xyXG4gIFxyXG4gIC8vIERPTSBFbGVtZW50c1xyXG4gIHByaXZhdGUgY29udGFjdHNMaXN0OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNvbnRhY3REZXRhaWxzOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNhdGVnb3JpZXNMaXN0OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIHNlYXJjaElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgY29udGFjdE1vZGFsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNvbmZpcm1Nb2RhbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjb250YWN0Rm9ybTogSFRNTEZvcm1FbGVtZW50O1xyXG4gIHByaXZhdGUgY29udGFjdENvdW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb250YWN0U2VydmljZSA9IG5ldyBDb250YWN0U2VydmljZSgpO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIERPTSBlbGVtZW50c1xyXG4gICAgdGhpcy5jb250YWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHMtbGlzdCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5jb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWRldGFpbHMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcmllcy1saXN0JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLmNvbnRhY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LW1vZGFsJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLmNvbmZpcm1Nb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLW1vZGFsJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLmNvbnRhY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgIHRoaXMuY29udGFjdENvdW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWNvdW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBcclxuICAgIHRoaXMuaW5pdEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnJlbmRlckNvbnRhY3RzTGlzdCgpO1xyXG4gICAgdGhpcy5yZW5kZXJDYXRlZ29yaWVzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICAvLyBTZWFyY2hcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbnRhY3RzTGlzdCh0aGlzLnNlYXJjaElucHV0LnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRhY3RzTGlzdCh0aGlzLnNlYXJjaElucHV0LnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEFkZCBjb250YWN0XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWNvbnRhY3QtYnV0dG9uJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLm9wZW5BZGRDb250YWN0TW9kYWwoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyBNb2RhbCBldmVudHNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuY29udGFjdE1vZGFsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtY29uZmlybS1tb2RhbCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuY29uZmlybU1vZGFsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZU1vZGFsKHRoaXMuY29udGFjdE1vZGFsKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1jYW5jZWwnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLmNvbmZpcm1Nb2RhbCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0teWVzJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb250YWN0RGVsZXRlQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNvbnRhY3REZWxldGVDYWxsYmFjayh0aGlzLnNlbGVjdGVkQ29udGFjdElkISk7XHJcbiAgICAgICAgdGhpcy5jb250YWN0RGVsZXRlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCh0aGlzLmNvbmZpcm1Nb2RhbCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gRm9ybSBzdWJtaXNzaW9uXHJcbiAgICB0aGlzLmNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYW5udWxlcicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY29udGFjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbW9kYWwnKTtcclxuICAgICAgaWYgKGNvbnRhY3RNb2RhbCkge1xyXG4gICAgICAgIGNvbnRhY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7IC8vIEFzc3VtaW5nIFwic2hvd1wiIGNsYXNzIG1ha2VzIHRoZSBtb2RhbCB2aXNpYmxlXHJcbiAgICAgICAgY29udGFjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEFsdGVybmF0aXZlbHksIGhpZGUgdGhlIG1vZGFsIHdpdGggQ1NTXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW4gXCJBam91dGVyIHVuIENvbnRhY3RcIiBtb2RhbFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1jb250YWN0LWJ1dHRvbicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgY29udGFjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbW9kYWwnKTtcclxuICAgICAgaWYgKGNvbnRhY3RNb2RhbCkge1xyXG4gICAgICAgIGNvbnRhY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7IC8vIEFkZCB0aGUgXCJzaG93XCIgY2xhc3MgdG8gZGlzcGxheSB0aGUgbW9kYWxcclxuICAgICAgICBjb250YWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gRW5zdXJlIHRoZSBtb2RhbCBpcyB2aXNpYmxlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsb3NlIFwiQWpvdXRlciB1biBDb250YWN0XCIgbW9kYWwgd2hlbiBjbGlja2luZyBcIkFubnVsZXJcIlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hbm51bGVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250YWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1tb2RhbCcpO1xyXG4gICAgICBpZiAoY29udGFjdE1vZGFsKSB7XHJcbiAgICAgICAgY29udGFjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTsgLy8gUmVtb3ZlIHRoZSBcInNob3dcIiBjbGFzc1xyXG4gICAgICAgIGNvbnRhY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBtb2RhbFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ29udGFjdHNMaXN0KHNlYXJjaFRlcm06IHN0cmluZyA9ICcnKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFjdHM6IENvbnRhY3RbXTtcclxuICAgIFxyXG4gICAgaWYgKHNlYXJjaFRlcm0pIHtcclxuICAgICAgY29udGFjdHMgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLnJlY2hlcmNoZXJDb250YWN0cyhzZWFyY2hUZXJtKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50RmlsdGVyICE9PSAnYWxsJykge1xyXG4gICAgICBjb250YWN0cyA9IHRoaXMuY29udGFjdFNlcnZpY2UuZmlsdHJlclBhckNhdGVnb3JpZSh0aGlzLmN1cnJlbnRGaWx0ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udGFjdHMgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLm9idGVuaXJUb3VzQ29udGFjdHMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5jb250YWN0c0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aGlzLmNvbnRhY3RDb3VudEVsZW1lbnQudGV4dENvbnRlbnQgPSBgKCR7Y29udGFjdHMubGVuZ3RofSlgO1xyXG4gICAgXHJcbiAgICBpZiAoY29udGFjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY29udGFjdHNMaXN0LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1wdHktc3RhdGVcIj5cclxuICAgICAgICAgIDxwPkF1Y3VuIGNvbnRhY3QgdHJvdXbDqTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb250YWN0cy5mb3JFYWNoKGNvbnRhY3QgPT4ge1xyXG4gICAgICBjb25zdCBjb250YWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb250YWN0RWxlbWVudC5jbGFzc05hbWUgPSBgY29udGFjdC1pdGVtICR7Y29udGFjdC5pZCA9PT0gdGhpcy5zZWxlY3RlZENvbnRhY3RJZCA/ICdhY3RpdmUnIDogJyd9YDtcclxuICAgICAgY29udGFjdEVsZW1lbnQuZGF0YXNldC5pZCA9IGNvbnRhY3QuaWQ7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBpbml0aWFscyA9IGNvbnRhY3QucHJlbm9tLmNoYXJBdCgwKSArIGNvbnRhY3Qubm9tLmNoYXJBdCgwKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENvcnJlY3RlZCBpbm5lckhUTUxcclxuICAgICAgY29udGFjdEVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWF2YXRhclwiPiR7aW5pdGlhbHMudG9VcHBlckNhc2UoKX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1uYW1lXCI+JHtjb250YWN0LnByZW5vbX0gJHtjb250YWN0Lm5vbX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWVtYWlsXCI+JHtjb250YWN0LmVtYWlsfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhdGVnb3J5XCI+JHtjb250YWN0LmNhdGVnb3JpZX08L2Rpdj5cclxuICAgICAgYDtcclxuICAgICAgXHJcbiAgICAgIGNvbnRhY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q29udGFjdChjb250YWN0LmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNvbnRhY3RzTGlzdC5hcHBlbmRDaGlsZChjb250YWN0RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ2F0ZWdvcmllc0xpc3QoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jb250YWN0U2VydmljZS5vYnRlbmlyQ2F0ZWdvcmllcygpO1xyXG4gICAgXHJcbiAgICAvLyBDbGVhciBleGlzdGluZyBjYXRlZ29yaWVzIGV4Y2VwdCBcIkFsbFwiXHJcbiAgICBjb25zdCBhbGxDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllc0xpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtY2F0ZWdvcnk9XCJhbGxcIl0nKTtcclxuICAgIHRoaXMuY2F0ZWdvcmllc0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZiAoYWxsQ2F0ZWdvcnkpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzTGlzdC5hcHBlbmRDaGlsZChhbGxDYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNhdGVnb3J5RWxlbWVudC50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xyXG4gICAgICBjYXRlZ29yeUVsZW1lbnQuZGF0YXNldC5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50RmlsdGVyID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgIGNhdGVnb3J5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY2F0ZWdvcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQnlDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jYXRlZ29yaWVzTGlzdC5hcHBlbmRDaGlsZChjYXRlZ29yeUVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBcIkFsbFwiIGNhdGVnb3J5IGlmIGl0IGV4aXN0c1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzTGlzdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYXRlZ29yeT1cImFsbFwiXScpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5maWx0ZXJCeUNhdGVnb3J5KCdhbGwnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWx0ZXJCeUNhdGVnb3J5KGNhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudEZpbHRlciA9IGNhdGVnb3J5O1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgYWN0aXZlIGNhdGVnb3J5XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgY2F0ZWdvcmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBpZiAoaXRlbS5kYXRhc2V0LmNhdGVnb3J5ID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnJlbmRlckNvbnRhY3RzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RDb250YWN0KGNvbnRhY3RJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ29udGFjdElkID0gY29udGFjdElkO1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgYWN0aXZlIGNvbnRhY3QgaW4gbGlzdFxyXG4gICAgY29uc3QgY29udGFjdEl0ZW1zID0gdGhpcy5jb250YWN0c0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3QtaXRlbScpO1xyXG4gICAgY29udGFjdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIGlmICgoaXRlbSBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC5pZCA9PT0gY29udGFjdElkKSB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHRoaXMucmVuZGVyQ29udGFjdERldGFpbHMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ29udGFjdERldGFpbHMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRDb250YWN0SWQpIHtcclxuICAgICAgdGhpcy5jb250YWN0RGV0YWlscy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgIDxwPlPDqWxlY3Rpb25uZXogdW4gY29udGFjdCBwb3VyIHZvaXIgbGVzIGTDqXRhaWxzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3QgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLm9idGVuaXJDb250YWN0UGFySWQodGhpcy5zZWxlY3RlZENvbnRhY3RJZCk7XHJcbiAgICBpZiAoIWNvbnRhY3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFscyA9IGNvbnRhY3QucHJlbm9tLmNoYXJBdCgwKSArIGNvbnRhY3Qubm9tLmNoYXJBdCgwKTtcclxuICAgIFxyXG4gICAgdGhpcy5jb250YWN0RGV0YWlscy5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRldGFpbHMtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPiR7Y29udGFjdC5wcmVub219ICR7Y29udGFjdC5ub219PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kZXRhaWxzLWFjdGlvbnNcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LWJ0blwiIHRpdGxlPVwiTW9kaWZpZXJcIj48aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idG5cIiB0aXRsZT1cIlN1cHByaW1lclwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1sYXJnZS1hdmF0YXJcIj4ke2luaXRpYWxzLnRvVXBwZXJDYXNlKCl9PC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kZXRhaWxzLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtbGFiZWxcIj5FbWFpbDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtdmFsdWVcIj4ke2NvbnRhY3QuZW1haWx9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkLWxhYmVsXCI+VMOpbMOpcGhvbmU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkLXZhbHVlXCI+JHtjb250YWN0LnRlbGVwaG9uZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAke2NvbnRhY3QuYWRyZXNzZSA/IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtbGFiZWxcIj5BZHJlc3NlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZC12YWx1ZVwiPiR7Y29udGFjdC5hZHJlc3NlfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGAgOiAnJ31cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZmllbGQtbGFiZWxcIj5DYXTDqWdvcmllPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZC12YWx1ZVwiPiR7Y29udGFjdC5jYXRlZ29yaWV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgJHtjb250YWN0Lm5vdGVzID8gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWZpZWxkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZC1sYWJlbFwiPk5vdGVzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1maWVsZC12YWx1ZVwiPiR7Y29udGFjdC5ub3Rlc308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgIDogJyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIFxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyB0byBhY3Rpb24gYnV0dG9uc1xyXG4gICAgdGhpcy5jb250YWN0RGV0YWlscy5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3BlbkVkaXRDb250YWN0TW9kYWwoY29udGFjdCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdGhpcy5jb250YWN0RGV0YWlscy5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5vcGVuRGVsZXRlQ29uZmlybWF0aW9uKGNvbnRhY3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5BZGRDb250YWN0TW9kYWwoKTogdm9pZCB7XHJcbiAgICAvLyBSZXNldCBmb3JtXHJcbiAgICB0aGlzLmNvbnRhY3RGb3JtLnJlc2V0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1pZCcpPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRpdGxlJykhLnRleHRDb250ZW50ID0gJ0Fqb3V0ZXIgdW4gQ29udGFjdCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1lcnJvcnMnKSEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBcclxuICAgIC8vIFNob3cgbW9kYWxcclxuICAgIHRoaXMub3Blbk1vZGFsKHRoaXMuY29udGFjdE1vZGFsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlbkVkaXRDb250YWN0TW9kYWwoY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG4gICAgLy8gRmlsbCBmb3JtIHdpdGggY29udGFjdCBkYXRhXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1pZCcpPy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY29udGFjdC5pZCk7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZW5vbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gY29udGFjdC5wcmVub207XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gY29udGFjdC5ub207XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBjb250YWN0LmVtYWlsO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlcGhvbmUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IGNvbnRhY3QudGVsZXBob25lO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZHJlc3NlJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSBjb250YWN0LmFkcmVzc2UgfHwgJyc7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3JpZScpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSA9IGNvbnRhY3QuY2F0ZWdvcmllO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gY29udGFjdC5ub3RlcyB8fCAnJztcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRpdGxlJykhLnRleHRDb250ZW50ID0gJ01vZGlmaWVyIGxlIENvbnRhY3QnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZXJyb3JzJykhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgXHJcbiAgICAvLyBTaG93IG1vZGFsXHJcbiAgICB0aGlzLm9wZW5Nb2RhbCh0aGlzLmNvbnRhY3RNb2RhbCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5EZWxldGVDb25maXJtYXRpb24oY29udGFjdDogQ29udGFjdCk6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tbWVzc2FnZScpIS50ZXh0Q29udGVudCA9IFxyXG4gICAgICBgw4p0ZXMtdm91cyBzw7tyIGRlIHZvdWxvaXIgc3VwcHJpbWVyIGxlIGNvbnRhY3QgJHtjb250YWN0LnByZW5vbX0gJHtjb250YWN0Lm5vbX0/YDtcclxuICAgIFxyXG4gICAgdGhpcy5jb250YWN0RGVsZXRlQ2FsbGJhY2sgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jb250YWN0U2VydmljZS5zdXBwcmltZXJDb250YWN0KGlkKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KCdDb250YWN0IHN1cHByaW3DqSBhdmVjIHN1Y2PDqHMhJywgJ3N1Y2Nlc3MnKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29udGFjdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRhY3RzTGlzdCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2F0ZWdvcmllc0xpc3QoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRhY3REZXRhaWxzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93VG9hc3QoJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIGR1IGNvbnRhY3QnLCAnZXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5vcGVuTW9kYWwodGhpcy5jb25maXJtTW9kYWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVGb3JtU3VibWl0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGFjdElkID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWlkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3QgPSB7XHJcbiAgICAgIG5vbTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub20nKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgcHJlbm9tOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZW5vbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICBlbWFpbDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlLFxyXG4gICAgICB0ZWxlcGhvbmU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVsZXBob25lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUsXHJcbiAgICAgIGFkcmVzc2U6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRyZXNzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlIHx8IHVuZGVmaW5lZCxcclxuICAgICAgY2F0ZWdvcmllOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3JpZScpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSxcclxuICAgICAgbm90ZXM6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSB8fCB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBcclxuICAgIGlmIChjb250YWN0SWQpIHtcclxuICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGNvbnRhY3RcclxuICAgICAgcmVzdWx0ID0gdGhpcy5jb250YWN0U2VydmljZS5tZXR0cmVBSm91ckNvbnRhY3QoY29udGFjdElkLCBjb250YWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFkZCBuZXcgY29udGFjdFxyXG4gICAgICByZXN1bHQgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLmFqb3V0ZXJDb250YWN0KGNvbnRhY3QpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgdGhpcy5zaG93VG9hc3QoY29udGFjdElkID8gJ0NvbnRhY3QgbW9kaWZpw6kgYXZlYyBzdWNjw6hzIScgOiAnQ29udGFjdCBham91dMOpIGF2ZWMgc3VjY8OocyEnLCAnc3VjY2VzcycpO1xyXG4gICAgICB0aGlzLmNsb3NlTW9kYWwodGhpcy5jb250YWN0TW9kYWwpO1xyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbnRhY3RJZCA9IHJlc3VsdC5kYXRhLmlkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnJlbmRlckNvbnRhY3RzTGlzdCgpO1xyXG4gICAgICB0aGlzLnJlbmRlckNhdGVnb3JpZXNMaXN0KCk7XHJcbiAgICAgIHRoaXMucmVuZGVyQ29udGFjdERldGFpbHMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVycm9yc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1lcnJvcnMnKSE7XHJcbiAgICAgIGVycm9yc0VsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIFxyXG4gICAgICByZXN1bHQuZXJyb3JzPy5mb3JFYWNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvcjtcclxuICAgICAgICBlcnJvcnNFbGVtZW50LmFwcGVuZENoaWxkKGVycm9yRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBham91dGVyQ29udGFjdChjb250YWN0OiBDb250YWN0KTogdm9pZCB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgcGhvbmUgbnVtYmVyIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ0NvbnRhY3QgPSB0aGlzLmNvbnRhY3RTZXJ2aWNlLm9idGVuaXJUb3VzQ29udGFjdHMoKS5maW5kKGMgPT4gYy50ZWxlcGhvbmUgPT09IGNvbnRhY3QudGVsZXBob25lKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmdDb250YWN0KSB7XHJcbiAgICAgIC8vIFNob3cgYW4gZXJyb3IgbWVzc2FnZVxyXG4gICAgICBjb25zdCBmb3JtRXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZXJyb3JzJyk7XHJcbiAgICAgIGlmIChmb3JtRXJyb3JzKSB7XHJcbiAgICAgICAgZm9ybUVycm9ycy50ZXh0Q29udGVudCA9ICdVbiBjb250YWN0IGF2ZWMgY2UgbnVtw6lybyBkZSB0w6lsw6lwaG9uZSBleGlzdGUgZMOpasOgLic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuOyAvLyBTdG9wIGZ1cnRoZXIgZXhlY3V0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgbm8gZHVwbGljYXRlIGlzIGZvdW5kLCBwcm9jZWVkIHRvIGFkZCB0aGUgY29udGFjdFxyXG4gICAgdGhpcy5jb250YWN0U2VydmljZS5ham91dGVyQ29udGFjdChjb250YWN0KTtcclxuXHJcbiAgICAvLyBDbGVhciB0aGUgZm9ybSBhbmQgY2xvc2UgdGhlIG1vZGFsXHJcbiAgICB0aGlzLmNvbnRhY3RGb3JtLnJlc2V0KCk7XHJcbiAgICBjb25zdCBjb250YWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1tb2RhbCcpO1xyXG4gICAgaWYgKGNvbnRhY3RNb2RhbCkge1xyXG4gICAgICBjb250YWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICBjb250YWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZS1yZW5kZXIgdGhlIGNvbnRhY3QgbGlzdFxyXG4gICAgdGhpcy5yZW5kZXJDb250YWN0c0xpc3QoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3Blbk1vZGFsKG1vZGFsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZU1vZGFsKG1vZGFsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nLCB0eXBlOiAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0b2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdC1jb250YWluZXInKSE7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2FzdC5jbGFzc05hbWUgPSBgdG9hc3QgJHt0eXBlfWA7XHJcbiAgICB0b2FzdC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICBcclxuICAgIHRvYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvYXN0KTtcclxuICAgIFxyXG4gICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBhZnRlciAzIHNlY29uZHNcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0b2FzdC5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxufSIsIi8vIHNyYy9zZXJ2aWNlcy9Db250YWN0U2VydmljZS50c1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vbW9kZWxzL0NvbnRhY3QnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vdXRpbHMvVmFsaWRhdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb250YWN0czogQ29udGFjdFtdO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RvcmFnZUtleSA9ICdjb250YWN0cyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb250YWN0cyA9IHRoaXMubG9hZENvbnRhY3RzKCk7XHJcbiAgICBcclxuICAgIC8vIElmIG5vIGNvbnRhY3RzIGV4aXN0LCBhZGQgc29tZSBleGFtcGxlc1xyXG4gICAgaWYgKHRoaXMuY29udGFjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuYWpvdXRlckNvbnRhY3Qoe1xyXG4gICAgICAgIG5vbTogJ0R1cG9udCcsXHJcbiAgICAgICAgcHJlbm9tOiAnSmVhbicsXHJcbiAgICAgICAgZW1haWw6ICdqZWFuLmR1cG9udEBlbWFpbC5jb20nLFxyXG4gICAgICAgIHRlbGVwaG9uZTogJzA2MTIzNDU2NzgnLFxyXG4gICAgICAgIGNhdGVnb3JpZTogJ0ZhbWlsbGUnXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ham91dGVyQ29udGFjdCh7XHJcbiAgICAgICAgbm9tOiAnTWFydGluJyxcclxuICAgICAgICBwcmVub206ICdTb3BoaWUnLFxyXG4gICAgICAgIGVtYWlsOiAnc29waGllLm1hcnRpbkBlbWFpbC5jb20nLFxyXG4gICAgICAgIHRlbGVwaG9uZTogJzA2ODc2NTQzMjEnLFxyXG4gICAgICAgIGNhdGVnb3JpZTogJ1RyYXZhaWwnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkQ29udGFjdHMoKTogQ29udGFjdFtdIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpO1xyXG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVDb250YWN0cygpOiB2b2lkIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5jb250YWN0cykpO1xyXG4gIH1cclxuXHJcbiAgYWpvdXRlckNvbnRhY3QoY29udGFjdDogT21pdDxDb250YWN0LCAnaWQnPik6IHsgc3VjY2VzczogYm9vbGVhbjsgZGF0YT86IENvbnRhY3Q7IGVycm9ycz86IHN0cmluZ1tdIH0ge1xyXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IFZhbGlkYXRvci52YWxpZGF0ZUNvbnRhY3QoY29udGFjdCk7XHJcbiAgICBcclxuICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb24uZXJyb3JzIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG5vdXZlYXVDb250YWN0OiBDb250YWN0ID0ge1xyXG4gICAgICAuLi5jb250YWN0IGFzIGFueSxcclxuICAgICAgaWQ6IHV1aWR2NCgpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmNvbnRhY3RzLnB1c2gobm91dmVhdUNvbnRhY3QpO1xyXG4gICAgdGhpcy5zYXZlQ29udGFjdHMoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbm91dmVhdUNvbnRhY3QgfTtcclxuICB9XHJcblxyXG4gIG9idGVuaXJUb3VzQ29udGFjdHMoKTogQ29udGFjdFtdIHtcclxuICAgIHJldHVybiBbLi4udGhpcy5jb250YWN0c107XHJcbiAgfVxyXG5cclxuICBvYnRlbmlyQ29udGFjdFBhcklkKGlkOiBzdHJpbmcpOiBDb250YWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRhY3RzLmZpbmQoY29udGFjdCA9PiBjb250YWN0LmlkID09PSBpZCk7XHJcbiAgfVxyXG5cclxuICBtZXR0cmVBSm91ckNvbnRhY3QoaWQ6IHN0cmluZywgY29udGFjdE1pc0FKb3VyOiBQYXJ0aWFsPENvbnRhY3Q+KTogeyBzdWNjZXNzOiBib29sZWFuOyBkYXRhPzogQ29udGFjdDsgZXJyb3JzPzogc3RyaW5nW10gfSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY29udGFjdHMuZmluZEluZGV4KGNvbnRhY3QgPT4gY29udGFjdC5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3JzOiBbXCJDb250YWN0IG5vbiB0cm91dsOpXCJdIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRhY3RDb21wbGV0ID0geyAuLi50aGlzLmNvbnRhY3RzW2luZGV4XSwgLi4uY29udGFjdE1pc0FKb3VyIH07XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gVmFsaWRhdG9yLnZhbGlkYXRlQ29udGFjdChjb250YWN0Q29tcGxldCk7XHJcbiAgICBcclxuICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcnM6IHZhbGlkYXRpb24uZXJyb3JzIH07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuY29udGFjdHNbaW5kZXhdID0gY29udGFjdENvbXBsZXQ7XHJcbiAgICB0aGlzLnNhdmVDb250YWN0cygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0aGlzLmNvbnRhY3RzW2luZGV4XSB9O1xyXG4gIH1cclxuXHJcbiAgc3VwcHJpbWVyQ29udGFjdChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBsb25ndWV1ckluaXRpYWxlID0gdGhpcy5jb250YWN0cy5sZW5ndGg7XHJcbiAgICB0aGlzLmNvbnRhY3RzID0gdGhpcy5jb250YWN0cy5maWx0ZXIoY29udGFjdCA9PiBjb250YWN0LmlkICE9PSBpZCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmNvbnRhY3RzLmxlbmd0aCAhPT0gbG9uZ3VldXJJbml0aWFsZSkge1xyXG4gICAgICB0aGlzLnNhdmVDb250YWN0cygpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVjaGVyY2hlckNvbnRhY3RzKHRlcm1lOiBzdHJpbmcpOiBDb250YWN0W10ge1xyXG4gICAgaWYgKCF0ZXJtZSkgcmV0dXJuIHRoaXMub2J0ZW5pclRvdXNDb250YWN0cygpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0ZXJtZVJlY2hlcmNoZSA9IHRlcm1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoY29udGFjdCA9PiBcclxuICAgICAgY29udGFjdC5ub20udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZSkgfHxcclxuICAgICAgY29udGFjdC5wcmVub20udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZSkgfHxcclxuICAgICAgY29udGFjdC5lbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm1lUmVjaGVyY2hlKSB8fFxyXG4gICAgICBjb250YWN0LnRlbGVwaG9uZS5pbmNsdWRlcyh0ZXJtZVJlY2hlcmNoZSkgfHxcclxuICAgICAgKGNvbnRhY3Qubm90ZXMgJiYgY29udGFjdC5ub3Rlcy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm1lUmVjaGVyY2hlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmaWx0cmVyUGFyQ2F0ZWdvcmllKGNhdGVnb3JpZT86IHN0cmluZyk6IENvbnRhY3RbXSB7XHJcbiAgICBpZiAoIWNhdGVnb3JpZSkgcmV0dXJuIHRoaXMub2J0ZW5pclRvdXNDb250YWN0cygpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5jb250YWN0cy5maWx0ZXIoY29udGFjdCA9PiBcclxuICAgICAgY29udGFjdC5jYXRlZ29yaWUudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcmllLnRvTG93ZXJDYXNlKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvYnRlbmlyQ2F0ZWdvcmllcygpOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICB0aGlzLmNvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XHJcbiAgICAgIGlmIChjb250YWN0LmNhdGVnb3JpZSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMuYWRkKGNvbnRhY3QuY2F0ZWdvcmllKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjYXRlZ29yaWVzKTtcclxuICB9XHJcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gc3JjL3V0aWxzL1ZhbGlkYXRvci50c1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yIHtcclxuICAgIHN0YXRpYyBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XHJcbiAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc3RhdGljIGlzVmFsaWRQaG9uZShwaG9uZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgIC8vIEZvcm1hdCBmb3IgaW50ZXJuYXRpb25hbCBudW1iZXJzXHJcbiAgICAgIGNvbnN0IHBob25lUmVnZXggPSAvXig/Oig/OlxcK3wwMCkoPzpcXGR7MSwzfSlbXFxzLi1dPyk/KD86XFxkezEsNH1bXFxzLi1dPyk/Pyg/OltcXHMuLV0/XFxkezEsNH0pezEsNH0kLztcclxuICAgICAgcmV0dXJuIHBob25lUmVnZXgudGVzdChwaG9uZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgdmFsaWRhdGVDb250YWN0KGNvbnRhY3Q6IGFueSk6IHsgaXNWYWxpZDogYm9vbGVhbjsgZXJyb3JzOiBzdHJpbmdbXSB9IHtcclxuICAgICAgY29uc3QgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIFxyXG4gICAgICBpZiAoIWNvbnRhY3Qubm9tKSBlcnJvcnMucHVzaChcIkxlIG5vbSBlc3QgcmVxdWlzXCIpO1xyXG4gICAgICBpZiAoIWNvbnRhY3QucHJlbm9tKSBlcnJvcnMucHVzaChcIkxlIHByw6lub20gZXN0IHJlcXVpc1wiKTtcclxuICAgICAgXHJcbiAgICAgIGlmICghY29udGFjdC5lbWFpbCkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKFwiTCdlbWFpbCBlc3QgcmVxdWlzXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVmFsaWRFbWFpbChjb250YWN0LmVtYWlsKSkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKFwiRm9ybWF0IGQnZW1haWwgaW52YWxpZGVcIik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghY29udGFjdC50ZWxlcGhvbmUpIHtcclxuICAgICAgICBlcnJvcnMucHVzaChcIkxlIG51bcOpcm8gZGUgdMOpbMOpcGhvbmUgZXN0IHJlcXVpc1wiKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5pc1ZhbGlkUGhvbmUoY29udGFjdC50ZWxlcGhvbmUpKSB7XHJcbiAgICAgICAgZXJyb3JzLnB1c2goXCJGb3JtYXQgZGUgdMOpbMOpcGhvbmUgaW52YWxpZGVcIik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKCFjb250YWN0LmNhdGVnb3JpZSkgZXJyb3JzLnB1c2goXCJMYSBjYXTDqWdvcmllIGVzdCByZXF1aXNlXCIpO1xyXG4gIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzVmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDAsXHJcbiAgICAgICAgZXJyb3JzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vY29uc29sZS5sb2coXCJIZWxsbywgV2VicGFjayFcIik7XHJcbi8vIHNyYy9pbmRleC50c1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIG5ldyBBcHAoKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9