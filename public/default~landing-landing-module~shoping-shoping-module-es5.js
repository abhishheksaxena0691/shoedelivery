function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~landing-landing-module~shoping-shoping-module"], {
  /***/
  "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js ***!
    \*******************************************************************************/

  /*! exports provided: AngularEditorComponent, AngularEditorModule, AngularEditorService, AngularEditorToolbarComponent, ɵa */

  /***/
  function node_modulesKolkovAngularEditorFesm2015KolkovAngularEditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorComponent", function () {
      return AngularEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorModule", function () {
      return AngularEditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorService", function () {
      return AngularEditorService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularEditorToolbarComponent", function () {
      return AngularEditorToolbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return AeSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-editor.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function UploadResponse() {}

    if (false) {}

    var AngularEditorService = /*#__PURE__*/function () {
      /**
       * @param {?} http
       * @param {?} doc
       */
      function AngularEditorService(http, doc) {
        var _this = this;

        _classCallCheck(this, AngularEditorService);

        this.http = http;
        this.doc = doc;
        /**
         * save selection when the editor is focussed out
         */

        this.saveSelection =
        /**
        * @return {?}
        */
        function () {
          if (_this.doc.getSelection) {
            /** @type {?} */
            var sel = _this.doc.getSelection();

            if (sel.getRangeAt && sel.rangeCount) {
              _this.savedSelection = sel.getRangeAt(0);
              _this.selectedText = sel.toString();
            }
          } else if (_this.doc.getSelection && _this.doc.createRange) {
            _this.savedSelection = document.createRange();
          } else {
            _this.savedSelection = null;
          }
        };
      }
      /**
       * Executed command from editor header buttons exclude toggleEditorMode
       * @param {?} command string from triggerCommand
       * @return {?}
       */


      _createClass(AngularEditorService, [{
        key: "executeCommand",
        value: function executeCommand(command) {
          /** @type {?} */
          var commands = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre'];

          if (commands.includes(command)) {
            this.doc.execCommand('formatBlock', false, command);
            return;
          }

          this.doc.execCommand(command, false, null);
        }
        /**
         * Create URL link
         * @param {?} url string from UI prompt
         * @return {?}
         */

      }, {
        key: "createLink",
        value: function createLink(url) {
          if (!url.includes('http')) {
            this.doc.execCommand('createlink', false, url);
          } else {
            /** @type {?} */
            var newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + '</a>';
            this.insertHtml(newUrl);
          }
        }
        /**
         * insert color either font or background
         *
         * @param {?} color color to be inserted
         * @param {?} where where the color has to be inserted either text/background
         * @return {?}
         */

      }, {
        key: "insertColor",
        value: function insertColor(color, where) {
          /** @type {?} */
          var restored = this.restoreSelection();

          if (restored) {
            if (where === 'textColor') {
              this.doc.execCommand('foreColor', false, color);
            } else {
              this.doc.execCommand('hiliteColor', false, color);
            }
          }
        }
        /**
         * Set font name
         * @param {?} fontName string
         * @return {?}
         */

      }, {
        key: "setFontName",
        value: function setFontName(fontName) {
          this.doc.execCommand('fontName', false, fontName);
        }
        /**
         * Set font size
         * @param {?} fontSize string
         * @return {?}
         */

      }, {
        key: "setFontSize",
        value: function setFontSize(fontSize) {
          this.doc.execCommand('fontSize', false, fontSize);
        }
        /**
         * Create raw HTML
         * @param {?} html HTML string
         * @return {?}
         */

      }, {
        key: "insertHtml",
        value: function insertHtml(html) {
          /** @type {?} */
          var isHTMLInserted = this.doc.execCommand('insertHTML', false, html);

          if (!isHTMLInserted) {
            throw new Error('Unable to perform the operation');
          }
        }
        /**
         * restore selection when the editor is focused in
         *
         * saved selection when the editor is focused out
         * @return {?}
         */

      }, {
        key: "restoreSelection",
        value: function restoreSelection() {
          if (this.savedSelection) {
            if (this.doc.getSelection) {
              /** @type {?} */
              var sel = this.doc.getSelection();
              sel.removeAllRanges();
              sel.addRange(this.savedSelection);
              return true;
            } else if (this.doc.getSelection
            /*&& this.savedSelection.select*/
            ) {
                // this.savedSelection.select();
                return true;
              }
          } else {
            return false;
          }
        }
        /**
         * setTimeout used for execute 'saveSelection' method in next event loop iteration
         * @param {?} callbackFn
         * @param {?=} timeout
         * @return {?}
         */

      }, {
        key: "executeInNextQueueIteration",
        value: function executeInNextQueueIteration(callbackFn) {
          var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e2;
          setTimeout(callbackFn, timeout);
        }
        /**
         * check any selection is made or not
         * @private
         * @return {?}
         */

      }, {
        key: "checkSelection",
        value: function checkSelection() {
          /** @type {?} */
          var selectedText = this.savedSelection.toString();

          if (selectedText.length === 0) {
            throw new Error('No Selection Made');
          }

          return true;
        }
        /**
         * Upload file to uploadUrl
         * @param {?} file The file
         * @return {?}
         */

      }, {
        key: "uploadImage",
        value: function uploadImage(file) {
          /** @type {?} */
          var uploadData = new FormData();
          uploadData.append('file', file, file.name);
          return this.http.post(this.uploadUrl, uploadData, {
            reportProgress: true,
            observe: 'events',
            withCredentials: this.uploadWithCredentials
          });
        }
        /**
         * Insert image with Url
         * @param {?} imageUrl The imageUrl.
         * @return {?}
         */

      }, {
        key: "insertImage",
        value: function insertImage(imageUrl) {
          this.doc.execCommand('insertImage', false, imageUrl);
        }
        /**
         * @param {?} separator
         * @return {?}
         */

      }, {
        key: "setDefaultParagraphSeparator",
        value: function setDefaultParagraphSeparator(separator) {
          this.doc.execCommand('defaultParagraphSeparator', false, separator);
        }
        /**
         * @param {?} customClass
         * @return {?}
         */

      }, {
        key: "createCustomClass",
        value: function createCustomClass(customClass) {
          /** @type {?} */
          var newTag = this.selectedText;

          if (customClass) {
            /** @type {?} */
            var tagName = customClass.tag ? customClass.tag : 'span';
            newTag = '<' + tagName + ' class="' + customClass["class"] + '">' + this.selectedText + '</' + tagName + '>';
          }

          this.insertHtml(newTag);
        }
        /**
         * @param {?} videoUrl
         * @return {?}
         */

      }, {
        key: "insertVideo",
        value: function insertVideo(videoUrl) {
          if (videoUrl.match('www.youtube.com')) {
            this.insertYouTubeVideoTag(videoUrl);
          }

          if (videoUrl.match('vimeo.com')) {
            this.insertVimeoVideoTag(videoUrl);
          }
        }
        /**
         * @private
         * @param {?} videoUrl
         * @return {?}
         */

      }, {
        key: "insertYouTubeVideoTag",
        value: function insertYouTubeVideoTag(videoUrl) {
          /** @type {?} */
          var id = videoUrl.split('v=')[1];
          /** @type {?} */

          var imageUrl = "https://img.youtube.com/vi/".concat(id, "/0.jpg");
          /** @type {?} */

          var thumbnail = "\n      <div style='position: relative'>\n        <img style='position: absolute; left:200px; top:140px'\n             src=\"https://img.icons8.com/color/96/000000/youtube-play.png\"/>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"click to watch\"/>\n        </a>\n      </div>");
          this.insertHtml(thumbnail);
        }
        /**
         * @private
         * @param {?} videoUrl
         * @return {?}
         */

      }, {
        key: "insertVimeoVideoTag",
        value: function insertVimeoVideoTag(videoUrl) {
          var _this2 = this;

          /** @type {?} */
          var sub = this.http.get("https://vimeo.com/api/oembed.json?url=".concat(videoUrl)).subscribe(
          /**
          * @param {?} data
          * @return {?}
          */
          function (data) {
            /** @type {?} */
            var imageUrl = data.thumbnail_url_with_play_button;
            /** @type {?} */

            var thumbnail = "<div>\n        <a href='".concat(videoUrl, "' target='_blank'>\n          <img src=\"").concat(imageUrl, "\" alt=\"").concat(data.title, "\"/>\n        </a>\n      </div>");

            _this2.insertHtml(thumbnail);

            sub.unsubscribe();
          });
        }
        /**
         * @param {?} node
         * @return {?}
         */

      }, {
        key: "nextNode",
        value: function nextNode(node) {
          if (node.hasChildNodes()) {
            return node.firstChild;
          } else {
            while (node && !node.nextSibling) {
              node = node.parentNode;
            }

            if (!node) {
              return null;
            }

            return node.nextSibling;
          }
        }
        /**
         * @param {?} range
         * @param {?} includePartiallySelectedContainers
         * @return {?}
         */

      }, {
        key: "getRangeSelectedNodes",
        value: function getRangeSelectedNodes(range, includePartiallySelectedContainers) {
          /** @type {?} */
          var node = range.startContainer;
          /** @type {?} */

          var endNode = range.endContainer;
          /** @type {?} */

          var rangeNodes = []; // Special case for a range that is contained within a single node

          if (node === endNode) {
            rangeNodes = [node];
          } else {
            // Iterate nodes until we hit the end container
            while (node && node !== endNode) {
              rangeNodes.push(node = this.nextNode(node));
            } // Add partially selected nodes at the start of the range


            node = range.startContainer;

            while (node && node !== range.commonAncestorContainer) {
              rangeNodes.unshift(node);
              node = node.parentNode;
            }
          } // Add ancestors of the range container, if required


          if (includePartiallySelectedContainers) {
            node = range.commonAncestorContainer;

            while (node) {
              rangeNodes.push(node);
              node = node.parentNode;
            }
          }

          return rangeNodes;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getSelectedNodes",
        value: function getSelectedNodes() {
          /** @type {?} */
          var nodes = [];

          if (this.doc.getSelection) {
            /** @type {?} */
            var sel = this.doc.getSelection();

            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
              nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
            }
          }

          return nodes;
        }
        /**
         * @param {?} el
         * @return {?}
         */

      }, {
        key: "replaceWithOwnChildren",
        value: function replaceWithOwnChildren(el) {
          /** @type {?} */
          var parent = el.parentNode;

          while (el.hasChildNodes()) {
            parent.insertBefore(el.firstChild, el);
          }

          parent.removeChild(el);
        }
        /**
         * @param {?} tagNames
         * @return {?}
         */

      }, {
        key: "removeSelectedElements",
        value: function removeSelectedElements(tagNames) {
          var _this3 = this;

          /** @type {?} */
          var tagNamesArray = tagNames.toLowerCase().split(',');
          this.getSelectedNodes().forEach(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
              // Remove the node and replace it with its children
              _this3.replaceWithOwnChildren(node);
            }
          });
        }
      }]);

      return AngularEditorService;
    }();

    AngularEditorService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    AngularEditorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function CustomClass() {}

    if (false) {}
    /**
     * @record
     */


    function Font() {}

    if (false) {}
    /**
     * @record
     */


    function AngularEditorConfig() {}

    if (false) {}
    /** @type {?} */


    var angularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [{
        "class": 'arial',
        name: 'Arial'
      }, {
        "class": 'times-new-roman',
        name: 'Times New Roman'
      }, {
        "class": 'calibri',
        name: 'Calibri'
      }, {
        "class": 'comic-sans-ms',
        name: 'Comic Sans MS'
      }],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      outline: true
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-editor-toolbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AngularEditorToolbarComponent = /*#__PURE__*/function () {
      /**
       * @param {?} r
       * @param {?} editorService
       * @param {?} er
       * @param {?} doc
       */
      function AngularEditorToolbarComponent(r, editorService, er, doc) {
        _classCallCheck(this, AngularEditorToolbarComponent);

        this.r = r;
        this.editorService = editorService;
        this.er = er;
        this.doc = doc;
        this.htmlMode = false;
        this.linkSelected = false;
        this.block = 'default';
        this.fontName = 'Times New Roman';
        this.fontSize = '3';
        this.headings = [{
          label: 'Heading 1',
          value: 'h1'
        }, {
          label: 'Heading 2',
          value: 'h2'
        }, {
          label: 'Heading 3',
          value: 'h3'
        }, {
          label: 'Heading 4',
          value: 'h4'
        }, {
          label: 'Heading 5',
          value: 'h5'
        }, {
          label: 'Heading 6',
          value: 'h6'
        }, {
          label: 'Heading 7',
          value: 'h7'
        }, {
          label: 'Paragraph',
          value: 'p'
        }, {
          label: 'Predefined',
          value: 'pre'
        }, {
          label: 'Standard',
          value: 'div'
        }, {
          label: 'default',
          value: 'default'
        }];
        this.fontSizes = [{
          label: '1',
          value: '1'
        }, {
          label: '2',
          value: '2'
        }, {
          label: '3',
          value: '3'
        }, {
          label: '4',
          value: '4'
        }, {
          label: '5',
          value: '5'
        }, {
          label: '6',
          value: '6'
        }, {
          label: '7',
          value: '7'
        }];
        this.customClassId = '-1';
        this.customClassList = [{
          label: '',
          value: ''
        }]; // uploadUrl: string;

        this.tagMap = {
          BLOCKQUOTE: 'indent',
          A: 'link'
        };
        this.select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
        this.buttons = ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList', 'link'];
        this.fonts = [{
          label: '',
          value: ''
        }];
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} classes
       * @return {?}
       */


      _createClass(AngularEditorToolbarComponent, [{
        key: "triggerCommand",

        /**
         * Trigger command from editor header buttons
         * @param {?} command string from toolbar buttons
         * @return {?}
         */
        value: function triggerCommand(command) {
          this.execute.emit(command);
        }
        /**
         * highlight editor buttons when cursor moved or positioning
         * @return {?}
         */

      }, {
        key: "triggerButtons",
        value: function triggerButtons() {
          var _this4 = this;

          if (!this.showToolbar) {
            return;
          }

          this.buttons.forEach(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            /** @type {?} */
            var result = _this4.doc.queryCommandState(e);
            /** @type {?} */


            var elementById = _this4.doc.getElementById(e + '-' + _this4.id);

            if (result) {
              _this4.r.addClass(elementById, 'active');
            } else {
              _this4.r.removeClass(elementById, 'active');
            }
          });
        }
        /**
         * trigger highlight editor buttons when cursor moved or positioning in block
         * @param {?} nodes
         * @return {?}
         */

      }, {
        key: "triggerBlocks",
        value: function triggerBlocks(nodes) {
          var _this5 = this;

          if (!this.showToolbar) {
            return;
          }

          this.linkSelected = nodes.findIndex(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.nodeName === 'A';
          }) > -1;
          /** @type {?} */

          var found = false;
          this.select.forEach(
          /**
          * @param {?} y
          * @return {?}
          */
          function (y) {
            /** @type {?} */
            var node = nodes.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.nodeName === y;
            });

            if (node !== undefined && y === node.nodeName) {
              if (found === false) {
                _this5.block = node.nodeName.toLowerCase();
                found = true;
              }
            } else if (found === false) {
              _this5.block = 'default';
            }
          });
          found = false;

          if (this._customClasses) {
            this._customClasses.forEach(
            /**
            * @param {?} y
            * @param {?} index
            * @return {?}
            */
            function (y, index) {
              /** @type {?} */
              var node = nodes.find(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                if (x instanceof Element) {
                  return x.className === y["class"];
                }
              });

              if (node !== undefined) {
                if (found === false) {
                  _this5.customClassId = index.toString();
                  found = true;
                }
              } else if (found === false) {
                _this5.customClassId = '-1';
              }
            });
          }

          Object.keys(this.tagMap).map(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            /** @type {?} */
            var elementById = _this5.doc.getElementById(_this5.tagMap[e] + '-' + _this5.id);
            /** @type {?} */


            var node = nodes.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.nodeName === e;
            });

            if (node !== undefined && e === node.nodeName) {
              _this5.r.addClass(elementById, 'active');
            } else {
              _this5.r.removeClass(elementById, 'active');
            }
          });
          this.foreColour = this.doc.queryCommandValue('ForeColor');
          this.fontSize = this.doc.queryCommandValue('FontSize');
          this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
          this.backColor = this.doc.queryCommandValue('backColor');
        }
        /**
         * insert URL link
         * @return {?}
         */

      }, {
        key: "insertUrl",
        value: function insertUrl() {
          /** @type {?} */
          var url = 'https:\/\/';
          /** @type {?} */

          var selection = this.editorService.savedSelection;

          if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
            /** @type {?} */
            var parent =
            /** @type {?} */
            selection.commonAncestorContainer.parentElement;

            if (parent.href !== '') {
              url = parent.href;
            }
          }

          url = prompt('Insert URL link', url);

          if (url && url !== '' && url !== 'https://') {
            this.editorService.createLink(url);
          }
        }
        /**
         * insert Video link
         * @return {?}
         */

      }, {
        key: "insertVideo",
        value: function insertVideo() {
          this.execute.emit('');
          /** @type {?} */

          var url = prompt('Insert Video link', "https://");

          if (url && url !== '' && url !== "https://") {
            this.editorService.insertVideo(url);
          }
        }
        /**
         * insert color
         * @param {?} color
         * @param {?} where
         * @return {?}
         */

      }, {
        key: "insertColor",
        value: function insertColor(color, where) {
          this.editorService.insertColor(color, where);
          this.execute.emit('');
        }
        /**
         * set font Name/family
         * @param {?} foreColor string
         * @return {?}
         */

      }, {
        key: "setFontName",
        value: function setFontName(foreColor) {
          this.editorService.setFontName(foreColor);
          this.execute.emit('');
        }
        /**
         * set font Size
         * @param {?} fontSize string
         * @return {?}
         */

      }, {
        key: "setFontSize",
        value: function setFontSize(fontSize) {
          this.editorService.setFontSize(fontSize);
          this.execute.emit('');
        }
        /**
         * toggle editor mode (WYSIWYG or SOURCE)
         * @param {?} m boolean
         * @return {?}
         */

      }, {
        key: "setEditorMode",
        value: function setEditorMode(m) {
          /** @type {?} */
          var toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);

          if (m) {
            this.r.addClass(toggleEditorModeButton, 'active');
          } else {
            this.r.removeClass(toggleEditorModeButton, 'active');
          }

          this.htmlMode = m;
        }
        /**
         * Upload image when file is selected
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          var _this6 = this;

          /** @type {?} */
          var file = event.target.files[0];

          if (file.type.includes('image/')) {
            if (this.uploadUrl) {
              this.editorService.uploadImage(file).subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                  _this6.editorService.insertImage(e.body.imageUrl);

                  event.srcElement.value = null;
                }
              });
            } else {
              /** @type {?} */
              var reader = new FileReader();

              reader.onload =
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                /** @type {?} */
                var fr =
                /** @type {?} */
                e.currentTarget;

                _this6.editorService.insertImage(fr.result.toString());
              };

              reader.readAsDataURL(file);
            }
          }
        }
        /**
         * Set custom class
         * @param {?} classId
         * @return {?}
         */

      }, {
        key: "setCustomClass",
        value: function setCustomClass(classId) {
          if (classId === '-1') {
            this.execute.emit('clear');
          } else {
            this.editorService.createCustomClass(this._customClasses[+classId]);
          }
        }
        /**
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "isButtonHidden",
        value: function isButtonHidden(name) {
          if (!name) {
            return false;
          }

          if (!(this.hiddenButtons instanceof Array)) {
            return false;
          }
          /** @type {?} */


          var result;

          var _iterator = _createForOfIteratorHelper(this.hiddenButtons),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var arr = _step.value;

              if (arr instanceof Array) {
                result = arr.find(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item === name;
                });
              }

              if (result) {
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result !== undefined;
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.execute.emit('focus');
          console.log('focused');
        }
      }, {
        key: "customClasses",
        set: function set(classes) {
          if (classes) {
            this._customClasses = classes;
            this.customClassList = this._customClasses.map(
            /**
            * @param {?} x
            * @param {?} i
            * @return {?}
            */
            function (x, i) {
              return {
                label: x.name,
                value: i.toString()
              };
            });
            this.customClassList.unshift({
              label: 'Clear Class',
              value: '-1'
            });
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "defaultFontName",
        set: function set(value) {
          if (value) {
            this.fontName = value;
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "defaultFontSize",
        set: function set(value) {
          if (value) {
            this.fontSize = value;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLinkButtonDisabled",
        get: function get() {
          return this.htmlMode || !Boolean(this.editorService.selectedText);
        }
      }]);

      return AngularEditorToolbarComponent;
    }();

    AngularEditorToolbarComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'angular-editor-toolbar',
        template: "<div class=\"angular-editor-toolbar\" *ngIf=\"showToolbar\">\n  <div class=\"angular-editor-toolbar-set\">\n    <button type=\"button\" title=\"Undo\" class=\"angular-editor-button\" (click)=\"triggerCommand('undo')\"\n            [hidden]=\"isButtonHidden('undo')\" tabindex=\"-1\"><i\n      class='fa fa-undo'></i></button>\n    <button type=\"button\" title=\"Redo\" class=\"angular-editor-button\" (click)=\"triggerCommand('redo')\"\n            [hidden]=\"isButtonHidden('redo')\" tabindex=\"-1\"><i\n      class='fa fa-repeat'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'bold-'+id\" type=\"button\" title=\"Bold\" class=\"angular-editor-button\" (click)=\"triggerCommand('bold')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('bold')\" tabindex=\"-1\"><i class='fa fa-bold'></i></button>\n    <button [id]=\"'italic-'+id\" type=\"button\" title=\"Italic\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('italic')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('italic')\" tabindex=\"-1\"><i class='fa fa-italic'></i>\n    </button>\n    <button [id]=\"'underline-'+id\" type=\"button\" title=\"Underline\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('underline')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('underline')\"\n            tabindex=\"-1\"><i class='fa fa-underline'></i></button>\n    <button [id]=\"'strikeThrough-'+id\" type=\"button\" title=\"Strikethrough\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('strikeThrough')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('strikeThrough')\"\n            tabindex=\"-1\"><i class='fa fa-strikethrough'></i></button>\n    <button [id]=\"'subscript-'+id\" type=\"button\" title=\"Subscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('subscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('subscript')\"\n            tabindex=\"-1\"><i class='fa fa-subscript'></i></button>\n    <button [id]=\"'superscript-'+id\" type=\"button\" title=\"Superscript\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('superscript')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('superscript')\"\n            tabindex=\"-1\"><i class='fa fa-superscript'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'justifyLeft-'+id\" type=\"button\" title=\"Justify Left\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyLeft')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyLeft')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-left'></i></button>\n    <button [id]=\"'justifyCenter-'+id\" type=\"button\" title=\"Justify Center\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyCenter')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyCenter')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-center'></i></button>\n    <button [id]=\"'justifyRight-'+id\" type=\"button\" title=\"Justify Right\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyRight')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyRight')\"\n            tabindex=\"-1\">\n      <i class='fa fa-align-right'></i></button>\n    <button [id]=\"'justifyFull-'+id\" type=\"button\" title=\"Justify Full\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('justifyFull')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('justifyFull')\"\n            tabindex=\"-1\"><i\n      class='fa fa-align-justify'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'indent-'+id\" type=\"button\" title=\"Indent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('indent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('indent')\" tabindex=\"-1\"><i\n      class='fa fa-indent'></i></button>\n    <button [id]=\"'outdent-'+id\" type=\"button\" title=\"Outdent\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('outdent')\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('outdent')\" tabindex=\"-1\"><i\n      class='fa fa-outdent'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'insertUnorderedList-'+id\" type=\"button\" title=\"Unordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertUnorderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertUnorderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ul'></i></button>\n    <button [id]=\"'insertOrderedList-'+id\" type=\"button\" title=\"Ordered List\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertOrderedList')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertOrderedList')\" tabindex=\"-1\"><i\n      class='fa fa-list-ol'></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-heading\" [options]=\"headings\"\n               [(ngModel)]=\"block\"\n               (change)=\"triggerCommand(block)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('heading')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font\" [options]=\"fonts\"\n               [(ngModel)]=\"fontName\"\n               (change)=\"setFontName(fontName)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontName')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n\n    <ae-select class=\"select-font-size\" [options]=\"fontSizes\"\n               [(ngModel)]=\"fontSize\"\n               (change)=\"setFontSize(fontSize)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('fontSize')\"\n               tabindex=\"-1\">\n    </ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(fgInput.value, 'textColor')\"\n      #fgInput>\n    <button [id]=\"'foregroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; fgInput.click()\"\n            title=\"Text Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('textColor')\" tabindex=\"-1\"><span\n      class=\"color-label foreground\"><i class=\"fa fa-font\"></i></span>\n    </button>\n    <input\n      style=\"display: none\"\n      type=\"color\" (change)=\"insertColor(bgInput.value, 'backgroundColor')\"\n      #bgInput>\n    <button [id]=\"'backgroundColorPicker-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); ; bgInput.click()\"\n            title=\"Background Color\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('backgroundColor')\" tabindex=\"-1\"><span\n      class=\"color-label background\"><i class=\"fa fa-font\"></i></span>\n    </button>\n  </div>\n  <div *ngIf=\"_customClasses\" class=\"angular-editor-toolbar-set\">\n    <ae-select class=\"select-custom-style\" [options]=\"customClassList\"\n               [(ngModel)]=\"customClassId\"\n               (change)=\"setCustomClass(customClassId)\"\n               [disabled]=\"htmlMode\"\n               [hidden]=\"isButtonHidden('customClasses')\"\n               tabindex=\"-1\"></ae-select>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'link-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"insertUrl()\"\n            title=\"Insert Link\" [disabled]=\"isLinkButtonDisabled\" [hidden]=\"isButtonHidden('link')\" tabindex=\"-1\">\n      <i class=\"fa fa-link\"></i>\n    </button>\n    <button [id]=\"'unlink-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"triggerCommand('unlink')\"\n            title=\"Unlink\" [disabled]=\"htmlMode || !linkSelected\" [hidden]=\"isButtonHidden('unlink')\" tabindex=\"-1\">\n      <i class=\"fa fa-chain-broken\"></i>\n    </button>\n    <input\n      style=\"display: none\"\n      accept=\"image/*\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button [id]=\"'insertImage-'+id\" type=\"button\" class=\"angular-editor-button\" (click)=\"focus(); fileInput.click()\"\n            title=\"Insert Image\"\n            [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertImage')\" tabindex=\"-1\"><i class=\"fa fa-image\"></i>\n    </button>\n    <button [id]=\"'insertVideo-'+id\" type=\"button\" class=\"angular-editor-button\"\n            (click)=\"insertVideo()\" title=\"Insert Video\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('insertVideo')\"\n            tabindex=\"-1\"><i\n      class=\"fa fa-video-camera\"></i></button>\n    <button [id]=\"'insertHorizontalRule-'+id\" type=\"button\" title=\"Horizontal Line\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('insertHorizontalRule')\" [disabled]=\"htmlMode\"\n            [hidden]=\"isButtonHidden('insertHorizontalRule')\" tabindex=\"-1\"><i\n      class=\"fa fa-minus\"></i></button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'clearFormatting-'+id\" type=\"button\" title=\"Clear Formatting\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('removeFormat')\" [disabled]=\"htmlMode\" [hidden]=\"isButtonHidden('removeFormat')\"\n            tabindex=\"-1\"><i class='fa fa-remove'></i>\n    </button>\n  </div>\n  <div class=\"angular-editor-toolbar-set\">\n    <button [id]=\"'toggleEditorMode-'+id\" type=\"button\" title=\"HTML Code\" class=\"angular-editor-button\"\n            (click)=\"triggerCommand('toggleEditorMode')\" [hidden]=\"isButtonHidden('toggleEditorMode')\" tabindex=\"-1\"><i\n      class='fa fa-code'></i></button>\n  </div>\n</div>\n",
        styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]),.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}"]
      }]
    }];
    /** @nocollapse */

    AngularEditorToolbarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: AngularEditorService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    AngularEditorToolbarComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      uploadUrl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showToolbar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fonts: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      defaultFontName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      defaultFontSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hiddenButtons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      execute: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      myInputFile: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['fileInput', {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return value !== undefined && value !== null;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-editor.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularEditorComponent = /*#__PURE__*/function () {
      /**
       * @param {?} r
       * @param {?} editorService
       * @param {?} doc
       * @param {?} sanitizer
       * @param {?} cdRef
       * @param {?} defaultTabIndex
       * @param {?} autoFocus
       */
      function AngularEditorComponent(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
        _classCallCheck(this, AngularEditorComponent);

        this.r = r;
        this.editorService = editorService;
        this.doc = doc;
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.autoFocus = autoFocus;
        this.modeVisual = true;
        this.showPlaceholder = false;
        this.disabled = false;
        this.focused = false;
        this.touched = false;
        this.changed = false;
        this.id = '';
        this.config = angularEditorConfig;
        this.placeholder = '';
        this.viewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `blur` event when focused out from the textarea
         */
        // tslint:disable-next-line:no-output-native no-output-rename

        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * emits `focus` event when focused in to the textarea
         */
        // tslint:disable-next-line:no-output-rename no-output-native

        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabindex = -1;
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
      }
      /**
       * @return {?}
       */


      _createClass(AngularEditorComponent, [{
        key: "onFocus",
        value: function onFocus() {
          this.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (isDefined(this.autoFocus)) {
            this.focus();
          }
        }
        /**
         * Executed command from editor header buttons
         * @param {?} command string from triggerCommand
         * @return {?}
         */

      }, {
        key: "executeCommand",
        value: function executeCommand(command) {
          this.focus();

          if (command === 'focus') {
            return;
          }

          if (command === 'toggleEditorMode') {
            this.toggleEditorMode(this.modeVisual);
          } else if (command !== '') {
            if (command === 'clear') {
              this.editorService.removeSelectedElements(this.getCustomTags());
              this.onContentChange(this.textArea.nativeElement);
            } else if (command === 'default') {
              this.editorService.removeSelectedElements('h1,h2,h3,h4,h5,h6,p,pre');
              this.onContentChange(this.textArea.nativeElement);
            } else {
              this.editorService.executeCommand(command);
            }

            this.exec();
          }
        }
        /**
         * focus event
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTextAreaFocus",
        value: function onTextAreaFocus(event) {
          var _this7 = this;

          if (this.focused) {
            event.stopPropagation();
            return;
          }

          this.focused = true;
          this.focusEvent.emit(event);

          if (!this.touched || !this.changed) {
            this.editorService.executeInNextQueueIteration(
            /**
            * @return {?}
            */
            function () {
              _this7.configure();

              _this7.touched = true;
            });
          }
        }
        /**
         * \@description fires when cursor leaves textarea
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTextAreaMouseOut",
        value: function onTextAreaMouseOut(event) {
          this.editorService.saveSelection();
        }
        /**
         * blur event
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onTextAreaBlur",
        value: function onTextAreaBlur(event) {
          /**
           * save selection if focussed out
           */
          this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);

          if (typeof this.onTouched === 'function') {
            this.onTouched();
          }

          if (event.relatedTarget !== null) {
            /** @type {?} */
            var parent =
            /** @type {?} */
            event.relatedTarget.parentElement;

            if (!parent.classList.contains('angular-editor-toolbar-set') && !parent.classList.contains('ae-picker')) {
              this.blurEvent.emit(event);
              this.focused = false;
            }
          }
        }
        /**
         *  focus the text area when the editor is focused
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          if (this.modeVisual) {
            this.textArea.nativeElement.focus();
          } else {
            /** @type {?} */
            var sourceText = this.doc.getElementById('sourceText' + this.id);
            sourceText.focus();
            this.focused = true;
          }
        }
        /**
         * Executed from the contenteditable section while the input property changes
         * @param {?} element html element from contenteditable
         * @return {?}
         */

      }, {
        key: "onContentChange",
        value: function onContentChange(element) {
          /** @type {?} */
          var html = '';

          if (this.modeVisual) {
            html = element.innerHTML;
          } else {
            html = element.innerText;
          }

          if (!html || html === '<br>') {
            html = '';
          }

          if (typeof this.onChange === 'function') {
            this.onChange(this.config.sanitize || this.config.sanitize === undefined ? this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, html) : html);

            if (!html !== this.showPlaceholder) {
              this.togglePlaceholder(this.showPlaceholder);
            }
          }

          this.changed = true;
        }
        /**
         * Set the function to be called
         * when the control receives a change event.
         *
         * @param {?} fn a function
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange =
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e === '<br>' ? fn('') : fn(e);
          };
        }
        /**
         * Set the function to be called
         * when the control receives a touch event.
         *
         * @param {?} fn a function
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Write a new value to the element.
         *
         * @param {?} value value to be executed when there is a change in contenteditable
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if ((!value || value === '<br>' || value === '') !== this.showPlaceholder) {
            this.togglePlaceholder(this.showPlaceholder);
          }

          if (value === undefined || value === '' || value === '<br>') {
            value = null;
          }

          this.refreshView(value);
        }
        /**
         * refresh view/HTML of the editor
         *
         * @param {?} value html string from the editor
         * @return {?}
         */

      }, {
        key: "refreshView",
        value: function refreshView(value) {
          /** @type {?} */
          var normalizedValue = value === null ? '' : value;
          this.r.setProperty(this.textArea.nativeElement, 'innerHTML', normalizedValue);
          return;
        }
        /**
         * toggles placeholder based on input string
         *
         * @param {?} value A HTML string from the editor
         * @return {?}
         */

      }, {
        key: "togglePlaceholder",
        value: function togglePlaceholder(value) {
          if (!value) {
            this.r.addClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = true;
          } else {
            this.r.removeClass(this.editorWrapper.nativeElement, 'show-placeholder');
            this.showPlaceholder = false;
          }
        }
        /**
         * Implements disabled state for this element
         *
         * @param {?} isDisabled Disabled flag
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          /** @type {?} */
          var div = this.textArea.nativeElement;
          /** @type {?} */

          var action = isDisabled ? 'addClass' : 'removeClass';
          this.r[action](div, 'disabled');
          this.disabled = isDisabled;
        }
        /**
         * toggles editor mode based on bToSource bool
         *
         * @param {?} bToSource A boolean value from the editor
         * @return {?}
         */

      }, {
        key: "toggleEditorMode",
        value: function toggleEditorMode(bToSource) {
          var _this8 = this;

          /** @type {?} */
          var oContent;
          /** @type {?} */

          var editableElement = this.textArea.nativeElement;

          if (bToSource) {
            oContent = this.r.createText(editableElement.innerHTML);
            this.r.setProperty(editableElement, 'innerHTML', '');
            this.r.setProperty(editableElement, 'contentEditable', false);
            /** @type {?} */

            var oPre = this.r.createElement('pre');
            this.r.setStyle(oPre, 'margin', '0');
            this.r.setStyle(oPre, 'outline', 'none');
            /** @type {?} */

            var oCode = this.r.createElement('code');
            this.r.setProperty(oCode, 'id', 'sourceText' + this.id);
            this.r.setStyle(oCode, 'display', 'block');
            this.r.setStyle(oCode, 'white-space', 'pre-wrap');
            this.r.setStyle(oCode, 'word-break', 'keep-all');
            this.r.setStyle(oCode, 'outline', 'none');
            this.r.setStyle(oCode, 'margin', '0');
            this.r.setStyle(oCode, 'background-color', '#fff5b9');
            this.r.setProperty(oCode, 'contentEditable', true);
            this.r.appendChild(oCode, oContent);
            this.focusInstance = this.r.listen(oCode, 'focus',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this8.onTextAreaFocus(event);
            });
            this.blurInstance = this.r.listen(oCode, 'blur',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return _this8.onTextAreaBlur(event);
            });
            this.r.appendChild(oPre, oCode);
            this.r.appendChild(editableElement, oPre); // ToDo move to service

            this.doc.execCommand('defaultParagraphSeparator', false, 'div');
            this.modeVisual = false;
            this.viewMode.emit(false);
            oCode.focus();
          } else {
            if (this.doc.querySelectorAll) {
              this.r.setProperty(editableElement, 'innerHTML', editableElement.innerText);
            } else {
              oContent = this.doc.createRange();
              oContent.selectNodeContents(editableElement.firstChild);
              this.r.setProperty(editableElement, 'innerHTML', oContent.toString());
            }

            this.r.setProperty(editableElement, 'contentEditable', true);
            this.modeVisual = true;
            this.viewMode.emit(true);
            this.onContentChange(editableElement);
            editableElement.focus();
          }

          this.editorToolbar.setEditorMode(!this.modeVisual);
        }
        /**
         * toggles editor buttons when cursor moved or positioning
         *
         * Send a node array from the contentEditable of the editor
         * @return {?}
         */

      }, {
        key: "exec",
        value: function exec() {
          this.editorToolbar.triggerButtons();
          /** @type {?} */

          var userSelection;

          if (this.doc.getSelection) {
            userSelection = this.doc.getSelection();
            this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
          }
          /** @type {?} */


          var a = userSelection.focusNode;
          /** @type {?} */

          var els = [];

          while (a && a.id !== 'editor') {
            els.unshift(a);
            a = a.parentNode;
          }

          this.editorToolbar.triggerBlocks(els);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "configure",
        value: function configure() {
          this.editorService.uploadUrl = this.config.uploadUrl;
          this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;

          if (this.config.defaultParagraphSeparator) {
            this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
          }

          if (this.config.defaultFontName) {
            this.editorService.setFontName(this.config.defaultFontName);
          }

          if (this.config.defaultFontSize) {
            this.editorService.setFontSize(this.config.defaultFontSize);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFonts",
        value: function getFonts() {
          /** @type {?} */
          var fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
          return fonts.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return {
              label: x.name,
              value: x.name
            };
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "getCustomTags",
        value: function getCustomTags() {
          /** @type {?} */
          var tags = ['span'];
          this.config.customClasses.forEach(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            if (x.tag !== undefined) {
              if (!tags.includes(x.tag)) {
                tags.push(x.tag);
              }
            }
          });
          return tags.join(',');
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.blurInstance) {
            this.blurInstance();
          }

          if (this.focusInstance) {
            this.focusInstance();
          }
        }
        /**
         * @param {?} html
         * @return {?}
         */

      }, {
        key: "filterStyles",
        value: function filterStyles(html) {
          html = html.replace('position: fixed;', '');
          return html;
        }
      }]);

      return AngularEditorComponent;
    }();

    AngularEditorComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'angular-editor',
        template: "<div class=\"angular-editor\" #angularEditor [style.width]=\"config.width\"\n     [style.minWidth]=\"config.minWidth\">\n  <angular-editor-toolbar *ngIf=\"config.toolbarPosition === 'top'\" #editorToolbar\n                          [id]=\"id\"\n                          [uploadUrl]=\"config.uploadUrl\"\n                          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n                          [fonts]=\"getFonts()\"\n                          [customClasses]=\"config.customClasses\"\n                          [defaultFontName]=\"config.defaultFontName\"\n                          [defaultFontSize]=\"config.defaultFontSize\"\n                          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n                          (execute)=\"executeCommand($event)\"></angular-editor-toolbar>\n\n  <div class=\"angular-editor-wrapper\" #editorWrapper>\n    <div #editor class=\"angular-editor-textarea\"\n         [attr.contenteditable]=\"config.editable\"\n         [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n         [attr.translate]=\"config.translate\"\n         [attr.spellcheck]=\"config.spellcheck\"\n         [style.height]=\"config.height\"\n         [style.minHeight]=\"config.minHeight\"\n         [style.maxHeight]=\"config.maxHeight\"\n         [style.outline]=\"config.outline === false ? 'none': undefined\"\n         (input)=\"onContentChange($event.target)\"\n         (focus)=\"onTextAreaFocus($event)\"\n         (blur)=\"onTextAreaBlur($event)\"\n         (click)=\"exec()\"\n         (keyup)=\"exec()\"\n         (mouseout)=\"onTextAreaMouseOut($event)\"\n    >\n    </div>\n    <span class=\"angular-editor-placeholder\">{{ placeholder || config['placeholder'] }}</span>\n  </div>\n  <angular-editor-toolbar *ngIf=\"config.toolbarPosition === 'bottom'\" #editorToolbar\n                          [id]=\"id\"\n                          [uploadUrl]=\"config.uploadUrl\"\n                          [showToolbar]=\"config.showToolbar !== undefined ? config.showToolbar : true\"\n                          [fonts]=\"getFonts()\"\n                          [customClasses]=\"config.customClasses\"\n                          [defaultFontName]=\"config.defaultFontName\"\n                          [defaultFontSize]=\"config.defaultFontSize\"\n                          [hiddenButtons]=\"config.toolbarHiddenButtons\"\n                          (execute)=\"executeCommand($event)\"></angular-editor-toolbar>\n</div>\n",
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return AngularEditorComponent;
          }),
          multi: true
        }, AngularEditorService],
        styles: ["@charset \"UTF-8\";/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0) format(\"woff2\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0) format(\"woff\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0) format(\"truetype\"),url(https://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:2s linear infinite fa-spin;animation:2s linear infinite fa-spin}.fa-pulse{-webkit-animation:1s steps(8) infinite fa-spin;animation:1s steps(8) infinite fa-spin}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\uF000\"}.fa-music:before{content:\"\uF001\"}.fa-search:before{content:\"\uF002\"}.fa-envelope-o:before{content:\"\uF003\"}.fa-heart:before{content:\"\uF004\"}.fa-star:before{content:\"\uF005\"}.fa-star-o:before{content:\"\uF006\"}.fa-user:before{content:\"\uF007\"}.fa-film:before{content:\"\uF008\"}.fa-th-large:before{content:\"\uF009\"}.fa-th:before{content:\"\uF00A\"}.fa-th-list:before{content:\"\uF00B\"}.fa-check:before{content:\"\uF00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\uF00D\"}.fa-search-plus:before{content:\"\uF00E\"}.fa-search-minus:before{content:\"\uF010\"}.fa-power-off:before{content:\"\uF011\"}.fa-signal:before{content:\"\uF012\"}.fa-cog:before,.fa-gear:before{content:\"\uF013\"}.fa-trash-o:before{content:\"\uF014\"}.fa-home:before{content:\"\uF015\"}.fa-file-o:before{content:\"\uF016\"}.fa-clock-o:before{content:\"\uF017\"}.fa-road:before{content:\"\uF018\"}.fa-download:before{content:\"\uF019\"}.fa-arrow-circle-o-down:before{content:\"\uF01A\"}.fa-arrow-circle-o-up:before{content:\"\uF01B\"}.fa-inbox:before{content:\"\uF01C\"}.fa-play-circle-o:before{content:\"\uF01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\uF01E\"}.fa-refresh:before{content:\"\uF021\"}.fa-list-alt:before{content:\"\uF022\"}.fa-lock:before{content:\"\uF023\"}.fa-flag:before{content:\"\uF024\"}.fa-headphones:before{content:\"\uF025\"}.fa-volume-off:before{content:\"\uF026\"}.fa-volume-down:before{content:\"\uF027\"}.fa-volume-up:before{content:\"\uF028\"}.fa-qrcode:before{content:\"\uF029\"}.fa-barcode:before{content:\"\uF02A\"}.fa-tag:before{content:\"\uF02B\"}.fa-tags:before{content:\"\uF02C\"}.fa-book:before{content:\"\uF02D\"}.fa-bookmark:before{content:\"\uF02E\"}.fa-print:before{content:\"\uF02F\"}.fa-camera:before{content:\"\uF030\"}.fa-font:before{content:\"\uF031\"}.fa-bold:before{content:\"\uF032\"}.fa-italic:before{content:\"\uF033\"}.fa-text-height:before{content:\"\uF034\"}.fa-text-width:before{content:\"\uF035\"}.fa-align-left:before{content:\"\uF036\"}.fa-align-center:before{content:\"\uF037\"}.fa-align-right:before{content:\"\uF038\"}.fa-align-justify:before{content:\"\uF039\"}.fa-list:before{content:\"\uF03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\uF03B\"}.fa-indent:before{content:\"\uF03C\"}.fa-video-camera:before{content:\"\uF03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\uF03E\"}.fa-pencil:before{content:\"\uF040\"}.fa-map-marker:before{content:\"\uF041\"}.fa-adjust:before{content:\"\uF042\"}.fa-tint:before{content:\"\uF043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\uF044\"}.fa-share-square-o:before{content:\"\uF045\"}.fa-check-square-o:before{content:\"\uF046\"}.fa-arrows:before{content:\"\uF047\"}.fa-step-backward:before{content:\"\uF048\"}.fa-fast-backward:before{content:\"\uF049\"}.fa-backward:before{content:\"\uF04A\"}.fa-play:before{content:\"\uF04B\"}.fa-pause:before{content:\"\uF04C\"}.fa-stop:before{content:\"\uF04D\"}.fa-forward:before{content:\"\uF04E\"}.fa-fast-forward:before{content:\"\uF050\"}.fa-step-forward:before{content:\"\uF051\"}.fa-eject:before{content:\"\uF052\"}.fa-chevron-left:before{content:\"\uF053\"}.fa-chevron-right:before{content:\"\uF054\"}.fa-plus-circle:before{content:\"\uF055\"}.fa-minus-circle:before{content:\"\uF056\"}.fa-times-circle:before{content:\"\uF057\"}.fa-check-circle:before{content:\"\uF058\"}.fa-question-circle:before{content:\"\uF059\"}.fa-info-circle:before{content:\"\uF05A\"}.fa-crosshairs:before{content:\"\uF05B\"}.fa-times-circle-o:before{content:\"\uF05C\"}.fa-check-circle-o:before{content:\"\uF05D\"}.fa-ban:before{content:\"\uF05E\"}.fa-arrow-left:before{content:\"\uF060\"}.fa-arrow-right:before{content:\"\uF061\"}.fa-arrow-up:before{content:\"\uF062\"}.fa-arrow-down:before{content:\"\uF063\"}.fa-mail-forward:before,.fa-share:before{content:\"\uF064\"}.fa-expand:before{content:\"\uF065\"}.fa-compress:before{content:\"\uF066\"}.fa-plus:before{content:\"\uF067\"}.fa-minus:before{content:\"\uF068\"}.fa-asterisk:before{content:\"\uF069\"}.fa-exclamation-circle:before{content:\"\uF06A\"}.fa-gift:before{content:\"\uF06B\"}.fa-leaf:before{content:\"\uF06C\"}.fa-fire:before{content:\"\uF06D\"}.fa-eye:before{content:\"\uF06E\"}.fa-eye-slash:before{content:\"\uF070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\uF071\"}.fa-plane:before{content:\"\uF072\"}.fa-calendar:before{content:\"\uF073\"}.fa-random:before{content:\"\uF074\"}.fa-comment:before{content:\"\uF075\"}.fa-magnet:before{content:\"\uF076\"}.fa-chevron-up:before{content:\"\uF077\"}.fa-chevron-down:before{content:\"\uF078\"}.fa-retweet:before{content:\"\uF079\"}.fa-shopping-cart:before{content:\"\uF07A\"}.fa-folder:before{content:\"\uF07B\"}.fa-folder-open:before{content:\"\uF07C\"}.fa-arrows-v:before{content:\"\uF07D\"}.fa-arrows-h:before{content:\"\uF07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\uF080\"}.fa-twitter-square:before{content:\"\uF081\"}.fa-facebook-square:before{content:\"\uF082\"}.fa-camera-retro:before{content:\"\uF083\"}.fa-key:before{content:\"\uF084\"}.fa-cogs:before,.fa-gears:before{content:\"\uF085\"}.fa-comments:before{content:\"\uF086\"}.fa-thumbs-o-up:before{content:\"\uF087\"}.fa-thumbs-o-down:before{content:\"\uF088\"}.fa-star-half:before{content:\"\uF089\"}.fa-heart-o:before{content:\"\uF08A\"}.fa-sign-out:before{content:\"\uF08B\"}.fa-linkedin-square:before{content:\"\uF08C\"}.fa-thumb-tack:before{content:\"\uF08D\"}.fa-external-link:before{content:\"\uF08E\"}.fa-sign-in:before{content:\"\uF090\"}.fa-trophy:before{content:\"\uF091\"}.fa-github-square:before{content:\"\uF092\"}.fa-upload:before{content:\"\uF093\"}.fa-lemon-o:before{content:\"\uF094\"}.fa-phone:before{content:\"\uF095\"}.fa-square-o:before{content:\"\uF096\"}.fa-bookmark-o:before{content:\"\uF097\"}.fa-phone-square:before{content:\"\uF098\"}.fa-twitter:before{content:\"\uF099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\uF09A\"}.fa-github:before{content:\"\uF09B\"}.fa-unlock:before{content:\"\uF09C\"}.fa-credit-card:before{content:\"\uF09D\"}.fa-feed:before,.fa-rss:before{content:\"\uF09E\"}.fa-hdd-o:before{content:\"\uF0A0\"}.fa-bullhorn:before{content:\"\uF0A1\"}.fa-bell:before{content:\"\uF0F3\"}.fa-certificate:before{content:\"\uF0A3\"}.fa-hand-o-right:before{content:\"\uF0A4\"}.fa-hand-o-left:before{content:\"\uF0A5\"}.fa-hand-o-up:before{content:\"\uF0A6\"}.fa-hand-o-down:before{content:\"\uF0A7\"}.fa-arrow-circle-left:before{content:\"\uF0A8\"}.fa-arrow-circle-right:before{content:\"\uF0A9\"}.fa-arrow-circle-up:before{content:\"\uF0AA\"}.fa-arrow-circle-down:before{content:\"\uF0AB\"}.fa-globe:before{content:\"\uF0AC\"}.fa-wrench:before{content:\"\uF0AD\"}.fa-tasks:before{content:\"\uF0AE\"}.fa-filter:before{content:\"\uF0B0\"}.fa-briefcase:before{content:\"\uF0B1\"}.fa-arrows-alt:before{content:\"\uF0B2\"}.fa-group:before,.fa-users:before{content:\"\uF0C0\"}.fa-chain:before,.fa-link:before{content:\"\uF0C1\"}.fa-cloud:before{content:\"\uF0C2\"}.fa-flask:before{content:\"\uF0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\uF0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\uF0C5\"}.fa-paperclip:before{content:\"\uF0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\uF0C7\"}.fa-square:before{content:\"\uF0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\uF0C9\"}.fa-list-ul:before{content:\"\uF0CA\"}.fa-list-ol:before{content:\"\uF0CB\"}.fa-strikethrough:before{content:\"\uF0CC\"}.fa-underline:before{content:\"\uF0CD\"}.fa-table:before{content:\"\uF0CE\"}.fa-magic:before{content:\"\uF0D0\"}.fa-truck:before{content:\"\uF0D1\"}.fa-pinterest:before{content:\"\uF0D2\"}.fa-pinterest-square:before{content:\"\uF0D3\"}.fa-google-plus-square:before{content:\"\uF0D4\"}.fa-google-plus:before{content:\"\uF0D5\"}.fa-money:before{content:\"\uF0D6\"}.fa-caret-down:before{content:\"\uF0D7\"}.fa-caret-up:before{content:\"\uF0D8\"}.fa-caret-left:before{content:\"\uF0D9\"}.fa-caret-right:before{content:\"\uF0DA\"}.fa-columns:before{content:\"\uF0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\uF0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\uF0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\uF0DE\"}.fa-envelope:before{content:\"\uF0E0\"}.fa-linkedin:before{content:\"\uF0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\uF0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\uF0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\uF0E4\"}.fa-comment-o:before{content:\"\uF0E5\"}.fa-comments-o:before{content:\"\uF0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\uF0E7\"}.fa-sitemap:before{content:\"\uF0E8\"}.fa-umbrella:before{content:\"\uF0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\uF0EA\"}.fa-lightbulb-o:before{content:\"\uF0EB\"}.fa-exchange:before{content:\"\uF0EC\"}.fa-cloud-download:before{content:\"\uF0ED\"}.fa-cloud-upload:before{content:\"\uF0EE\"}.fa-user-md:before{content:\"\uF0F0\"}.fa-stethoscope:before{content:\"\uF0F1\"}.fa-suitcase:before{content:\"\uF0F2\"}.fa-bell-o:before{content:\"\uF0A2\"}.fa-coffee:before{content:\"\uF0F4\"}.fa-cutlery:before{content:\"\uF0F5\"}.fa-file-text-o:before{content:\"\uF0F6\"}.fa-building-o:before{content:\"\uF0F7\"}.fa-hospital-o:before{content:\"\uF0F8\"}.fa-ambulance:before{content:\"\uF0F9\"}.fa-medkit:before{content:\"\uF0FA\"}.fa-fighter-jet:before{content:\"\uF0FB\"}.fa-beer:before{content:\"\uF0FC\"}.fa-h-square:before{content:\"\uF0FD\"}.fa-plus-square:before{content:\"\uF0FE\"}.fa-angle-double-left:before{content:\"\uF100\"}.fa-angle-double-right:before{content:\"\uF101\"}.fa-angle-double-up:before{content:\"\uF102\"}.fa-angle-double-down:before{content:\"\uF103\"}.fa-angle-left:before{content:\"\uF104\"}.fa-angle-right:before{content:\"\uF105\"}.fa-angle-up:before{content:\"\uF106\"}.fa-angle-down:before{content:\"\uF107\"}.fa-desktop:before{content:\"\uF108\"}.fa-laptop:before{content:\"\uF109\"}.fa-tablet:before{content:\"\uF10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\uF10B\"}.fa-circle-o:before{content:\"\uF10C\"}.fa-quote-left:before{content:\"\uF10D\"}.fa-quote-right:before{content:\"\uF10E\"}.fa-spinner:before{content:\"\uF110\"}.fa-circle:before{content:\"\uF111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\uF112\"}.fa-github-alt:before{content:\"\uF113\"}.fa-folder-o:before{content:\"\uF114\"}.fa-folder-open-o:before{content:\"\uF115\"}.fa-smile-o:before{content:\"\uF118\"}.fa-frown-o:before{content:\"\uF119\"}.fa-meh-o:before{content:\"\uF11A\"}.fa-gamepad:before{content:\"\uF11B\"}.fa-keyboard-o:before{content:\"\uF11C\"}.fa-flag-o:before{content:\"\uF11D\"}.fa-flag-checkered:before{content:\"\uF11E\"}.fa-terminal:before{content:\"\uF120\"}.fa-code:before{content:\"\uF121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\uF122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\uF123\"}.fa-location-arrow:before{content:\"\uF124\"}.fa-crop:before{content:\"\uF125\"}.fa-code-fork:before{content:\"\uF126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\uF127\"}.fa-question:before{content:\"\uF128\"}.fa-info:before{content:\"\uF129\"}.fa-exclamation:before{content:\"\uF12A\"}.fa-superscript:before{content:\"\uF12B\"}.fa-subscript:before{content:\"\uF12C\"}.fa-eraser:before{content:\"\uF12D\"}.fa-puzzle-piece:before{content:\"\uF12E\"}.fa-microphone:before{content:\"\uF130\"}.fa-microphone-slash:before{content:\"\uF131\"}.fa-shield:before{content:\"\uF132\"}.fa-calendar-o:before{content:\"\uF133\"}.fa-fire-extinguisher:before{content:\"\uF134\"}.fa-rocket:before{content:\"\uF135\"}.fa-maxcdn:before{content:\"\uF136\"}.fa-chevron-circle-left:before{content:\"\uF137\"}.fa-chevron-circle-right:before{content:\"\uF138\"}.fa-chevron-circle-up:before{content:\"\uF139\"}.fa-chevron-circle-down:before{content:\"\uF13A\"}.fa-html5:before{content:\"\uF13B\"}.fa-css3:before{content:\"\uF13C\"}.fa-anchor:before{content:\"\uF13D\"}.fa-unlock-alt:before{content:\"\uF13E\"}.fa-bullseye:before{content:\"\uF140\"}.fa-ellipsis-h:before{content:\"\uF141\"}.fa-ellipsis-v:before{content:\"\uF142\"}.fa-rss-square:before{content:\"\uF143\"}.fa-play-circle:before{content:\"\uF144\"}.fa-ticket:before{content:\"\uF145\"}.fa-minus-square:before{content:\"\uF146\"}.fa-minus-square-o:before{content:\"\uF147\"}.fa-level-up:before{content:\"\uF148\"}.fa-level-down:before{content:\"\uF149\"}.fa-check-square:before{content:\"\uF14A\"}.fa-pencil-square:before{content:\"\uF14B\"}.fa-external-link-square:before{content:\"\uF14C\"}.fa-share-square:before{content:\"\uF14D\"}.fa-compass:before{content:\"\uF14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\uF150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\uF151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\uF152\"}.fa-eur:before,.fa-euro:before{content:\"\uF153\"}.fa-gbp:before{content:\"\uF154\"}.fa-dollar:before,.fa-usd:before{content:\"\uF155\"}.fa-inr:before,.fa-rupee:before{content:\"\uF156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\uF157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\uF158\"}.fa-krw:before,.fa-won:before{content:\"\uF159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\uF15A\"}.fa-file:before{content:\"\uF15B\"}.fa-file-text:before{content:\"\uF15C\"}.fa-sort-alpha-asc:before{content:\"\uF15D\"}.fa-sort-alpha-desc:before{content:\"\uF15E\"}.fa-sort-amount-asc:before{content:\"\uF160\"}.fa-sort-amount-desc:before{content:\"\uF161\"}.fa-sort-numeric-asc:before{content:\"\uF162\"}.fa-sort-numeric-desc:before{content:\"\uF163\"}.fa-thumbs-up:before{content:\"\uF164\"}.fa-thumbs-down:before{content:\"\uF165\"}.fa-youtube-square:before{content:\"\uF166\"}.fa-youtube:before{content:\"\uF167\"}.fa-xing:before{content:\"\uF168\"}.fa-xing-square:before{content:\"\uF169\"}.fa-youtube-play:before{content:\"\uF16A\"}.fa-dropbox:before{content:\"\uF16B\"}.fa-stack-overflow:before{content:\"\uF16C\"}.fa-instagram:before{content:\"\uF16D\"}.fa-flickr:before{content:\"\uF16E\"}.fa-adn:before{content:\"\uF170\"}.fa-bitbucket:before{content:\"\uF171\"}.fa-bitbucket-square:before{content:\"\uF172\"}.fa-tumblr:before{content:\"\uF173\"}.fa-tumblr-square:before{content:\"\uF174\"}.fa-long-arrow-down:before{content:\"\uF175\"}.fa-long-arrow-up:before{content:\"\uF176\"}.fa-long-arrow-left:before{content:\"\uF177\"}.fa-long-arrow-right:before{content:\"\uF178\"}.fa-apple:before{content:\"\uF179\"}.fa-windows:before{content:\"\uF17A\"}.fa-android:before{content:\"\uF17B\"}.fa-linux:before{content:\"\uF17C\"}.fa-dribbble:before{content:\"\uF17D\"}.fa-skype:before{content:\"\uF17E\"}.fa-foursquare:before{content:\"\uF180\"}.fa-trello:before{content:\"\uF181\"}.fa-female:before{content:\"\uF182\"}.fa-male:before{content:\"\uF183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\uF184\"}.fa-sun-o:before{content:\"\uF185\"}.fa-moon-o:before{content:\"\uF186\"}.fa-archive:before{content:\"\uF187\"}.fa-bug:before{content:\"\uF188\"}.fa-vk:before{content:\"\uF189\"}.fa-weibo:before{content:\"\uF18A\"}.fa-renren:before{content:\"\uF18B\"}.fa-pagelines:before{content:\"\uF18C\"}.fa-stack-exchange:before{content:\"\uF18D\"}.fa-arrow-circle-o-right:before{content:\"\uF18E\"}.fa-arrow-circle-o-left:before{content:\"\uF190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\uF191\"}.fa-dot-circle-o:before{content:\"\uF192\"}.fa-wheelchair:before{content:\"\uF193\"}.fa-vimeo-square:before{content:\"\uF194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\uF195\"}.fa-plus-square-o:before{content:\"\uF196\"}.fa-space-shuttle:before{content:\"\uF197\"}.fa-slack:before{content:\"\uF198\"}.fa-envelope-square:before{content:\"\uF199\"}.fa-wordpress:before{content:\"\uF19A\"}.fa-openid:before{content:\"\uF19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\uF19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\uF19D\"}.fa-yahoo:before{content:\"\uF19E\"}.fa-google:before{content:\"\uF1A0\"}.fa-reddit:before{content:\"\uF1A1\"}.fa-reddit-square:before{content:\"\uF1A2\"}.fa-stumbleupon-circle:before{content:\"\uF1A3\"}.fa-stumbleupon:before{content:\"\uF1A4\"}.fa-delicious:before{content:\"\uF1A5\"}.fa-digg:before{content:\"\uF1A6\"}.fa-pied-piper-pp:before{content:\"\uF1A7\"}.fa-pied-piper-alt:before{content:\"\uF1A8\"}.fa-drupal:before{content:\"\uF1A9\"}.fa-joomla:before{content:\"\uF1AA\"}.fa-language:before{content:\"\uF1AB\"}.fa-fax:before{content:\"\uF1AC\"}.fa-building:before{content:\"\uF1AD\"}.fa-child:before{content:\"\uF1AE\"}.fa-paw:before{content:\"\uF1B0\"}.fa-spoon:before{content:\"\uF1B1\"}.fa-cube:before{content:\"\uF1B2\"}.fa-cubes:before{content:\"\uF1B3\"}.fa-behance:before{content:\"\uF1B4\"}.fa-behance-square:before{content:\"\uF1B5\"}.fa-steam:before{content:\"\uF1B6\"}.fa-steam-square:before{content:\"\uF1B7\"}.fa-recycle:before{content:\"\uF1B8\"}.fa-automobile:before,.fa-car:before{content:\"\uF1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\uF1BA\"}.fa-tree:before{content:\"\uF1BB\"}.fa-spotify:before{content:\"\uF1BC\"}.fa-deviantart:before{content:\"\uF1BD\"}.fa-soundcloud:before{content:\"\uF1BE\"}.fa-database:before{content:\"\uF1C0\"}.fa-file-pdf-o:before{content:\"\uF1C1\"}.fa-file-word-o:before{content:\"\uF1C2\"}.fa-file-excel-o:before{content:\"\uF1C3\"}.fa-file-powerpoint-o:before{content:\"\uF1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\uF1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\uF1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\uF1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\uF1C8\"}.fa-file-code-o:before{content:\"\uF1C9\"}.fa-vine:before{content:\"\uF1CA\"}.fa-codepen:before{content:\"\uF1CB\"}.fa-jsfiddle:before{content:\"\uF1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\uF1CD\"}.fa-circle-o-notch:before{content:\"\uF1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\uF1D0\"}.fa-empire:before,.fa-ge:before{content:\"\uF1D1\"}.fa-git-square:before{content:\"\uF1D2\"}.fa-git:before{content:\"\uF1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\uF1D4\"}.fa-tencent-weibo:before{content:\"\uF1D5\"}.fa-qq:before{content:\"\uF1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\uF1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\uF1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\uF1D9\"}.fa-history:before{content:\"\uF1DA\"}.fa-circle-thin:before{content:\"\uF1DB\"}.fa-header:before{content:\"\uF1DC\"}.fa-paragraph:before{content:\"\uF1DD\"}.fa-sliders:before{content:\"\uF1DE\"}.fa-share-alt:before{content:\"\uF1E0\"}.fa-share-alt-square:before{content:\"\uF1E1\"}.fa-bomb:before{content:\"\uF1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\uF1E3\"}.fa-tty:before{content:\"\uF1E4\"}.fa-binoculars:before{content:\"\uF1E5\"}.fa-plug:before{content:\"\uF1E6\"}.fa-slideshare:before{content:\"\uF1E7\"}.fa-twitch:before{content:\"\uF1E8\"}.fa-yelp:before{content:\"\uF1E9\"}.fa-newspaper-o:before{content:\"\uF1EA\"}.fa-wifi:before{content:\"\uF1EB\"}.fa-calculator:before{content:\"\uF1EC\"}.fa-paypal:before{content:\"\uF1ED\"}.fa-google-wallet:before{content:\"\uF1EE\"}.fa-cc-visa:before{content:\"\uF1F0\"}.fa-cc-mastercard:before{content:\"\uF1F1\"}.fa-cc-discover:before{content:\"\uF1F2\"}.fa-cc-amex:before{content:\"\uF1F3\"}.fa-cc-paypal:before{content:\"\uF1F4\"}.fa-cc-stripe:before{content:\"\uF1F5\"}.fa-bell-slash:before{content:\"\uF1F6\"}.fa-bell-slash-o:before{content:\"\uF1F7\"}.fa-trash:before{content:\"\uF1F8\"}.fa-copyright:before{content:\"\uF1F9\"}.fa-at:before{content:\"\uF1FA\"}.fa-eyedropper:before{content:\"\uF1FB\"}.fa-paint-brush:before{content:\"\uF1FC\"}.fa-birthday-cake:before{content:\"\uF1FD\"}.fa-area-chart:before{content:\"\uF1FE\"}.fa-pie-chart:before{content:\"\uF200\"}.fa-line-chart:before{content:\"\uF201\"}.fa-lastfm:before{content:\"\uF202\"}.fa-lastfm-square:before{content:\"\uF203\"}.fa-toggle-off:before{content:\"\uF204\"}.fa-toggle-on:before{content:\"\uF205\"}.fa-bicycle:before{content:\"\uF206\"}.fa-bus:before{content:\"\uF207\"}.fa-ioxhost:before{content:\"\uF208\"}.fa-angellist:before{content:\"\uF209\"}.fa-cc:before{content:\"\uF20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\uF20B\"}.fa-meanpath:before{content:\"\uF20C\"}.fa-buysellads:before{content:\"\uF20D\"}.fa-connectdevelop:before{content:\"\uF20E\"}.fa-dashcube:before{content:\"\uF210\"}.fa-forumbee:before{content:\"\uF211\"}.fa-leanpub:before{content:\"\uF212\"}.fa-sellsy:before{content:\"\uF213\"}.fa-shirtsinbulk:before{content:\"\uF214\"}.fa-simplybuilt:before{content:\"\uF215\"}.fa-skyatlas:before{content:\"\uF216\"}.fa-cart-plus:before{content:\"\uF217\"}.fa-cart-arrow-down:before{content:\"\uF218\"}.fa-diamond:before{content:\"\uF219\"}.fa-ship:before{content:\"\uF21A\"}.fa-user-secret:before{content:\"\uF21B\"}.fa-motorcycle:before{content:\"\uF21C\"}.fa-street-view:before{content:\"\uF21D\"}.fa-heartbeat:before{content:\"\uF21E\"}.fa-venus:before{content:\"\uF221\"}.fa-mars:before{content:\"\uF222\"}.fa-mercury:before{content:\"\uF223\"}.fa-intersex:before,.fa-transgender:before{content:\"\uF224\"}.fa-transgender-alt:before{content:\"\uF225\"}.fa-venus-double:before{content:\"\uF226\"}.fa-mars-double:before{content:\"\uF227\"}.fa-venus-mars:before{content:\"\uF228\"}.fa-mars-stroke:before{content:\"\uF229\"}.fa-mars-stroke-v:before{content:\"\uF22A\"}.fa-mars-stroke-h:before{content:\"\uF22B\"}.fa-neuter:before{content:\"\uF22C\"}.fa-genderless:before{content:\"\uF22D\"}.fa-facebook-official:before{content:\"\uF230\"}.fa-pinterest-p:before{content:\"\uF231\"}.fa-whatsapp:before{content:\"\uF232\"}.fa-server:before{content:\"\uF233\"}.fa-user-plus:before{content:\"\uF234\"}.fa-user-times:before{content:\"\uF235\"}.fa-bed:before,.fa-hotel:before{content:\"\uF236\"}.fa-viacoin:before{content:\"\uF237\"}.fa-train:before{content:\"\uF238\"}.fa-subway:before{content:\"\uF239\"}.fa-medium:before{content:\"\uF23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\uF23B\"}.fa-optin-monster:before{content:\"\uF23C\"}.fa-opencart:before{content:\"\uF23D\"}.fa-expeditedssl:before{content:\"\uF23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\uF240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\uF241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\uF242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\uF243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\uF244\"}.fa-mouse-pointer:before{content:\"\uF245\"}.fa-i-cursor:before{content:\"\uF246\"}.fa-object-group:before{content:\"\uF247\"}.fa-object-ungroup:before{content:\"\uF248\"}.fa-sticky-note:before{content:\"\uF249\"}.fa-sticky-note-o:before{content:\"\uF24A\"}.fa-cc-jcb:before{content:\"\uF24B\"}.fa-cc-diners-club:before{content:\"\uF24C\"}.fa-clone:before{content:\"\uF24D\"}.fa-balance-scale:before{content:\"\uF24E\"}.fa-hourglass-o:before{content:\"\uF250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\uF251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\uF252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\uF253\"}.fa-hourglass:before{content:\"\uF254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\uF255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\uF256\"}.fa-hand-scissors-o:before{content:\"\uF257\"}.fa-hand-lizard-o:before{content:\"\uF258\"}.fa-hand-spock-o:before{content:\"\uF259\"}.fa-hand-pointer-o:before{content:\"\uF25A\"}.fa-hand-peace-o:before{content:\"\uF25B\"}.fa-trademark:before{content:\"\uF25C\"}.fa-registered:before{content:\"\uF25D\"}.fa-creative-commons:before{content:\"\uF25E\"}.fa-gg:before{content:\"\uF260\"}.fa-gg-circle:before{content:\"\uF261\"}.fa-tripadvisor:before{content:\"\uF262\"}.fa-odnoklassniki:before{content:\"\uF263\"}.fa-odnoklassniki-square:before{content:\"\uF264\"}.fa-get-pocket:before{content:\"\uF265\"}.fa-wikipedia-w:before{content:\"\uF266\"}.fa-safari:before{content:\"\uF267\"}.fa-chrome:before{content:\"\uF268\"}.fa-firefox:before{content:\"\uF269\"}.fa-opera:before{content:\"\uF26A\"}.fa-internet-explorer:before{content:\"\uF26B\"}.fa-television:before,.fa-tv:before{content:\"\uF26C\"}.fa-contao:before{content:\"\uF26D\"}.fa-500px:before{content:\"\uF26E\"}.fa-amazon:before{content:\"\uF270\"}.fa-calendar-plus-o:before{content:\"\uF271\"}.fa-calendar-minus-o:before{content:\"\uF272\"}.fa-calendar-times-o:before{content:\"\uF273\"}.fa-calendar-check-o:before{content:\"\uF274\"}.fa-industry:before{content:\"\uF275\"}.fa-map-pin:before{content:\"\uF276\"}.fa-map-signs:before{content:\"\uF277\"}.fa-map-o:before{content:\"\uF278\"}.fa-map:before{content:\"\uF279\"}.fa-commenting:before{content:\"\uF27A\"}.fa-commenting-o:before{content:\"\uF27B\"}.fa-houzz:before{content:\"\uF27C\"}.fa-vimeo:before{content:\"\uF27D\"}.fa-black-tie:before{content:\"\uF27E\"}.fa-fonticons:before{content:\"\uF280\"}.fa-reddit-alien:before{content:\"\uF281\"}.fa-edge:before{content:\"\uF282\"}.fa-credit-card-alt:before{content:\"\uF283\"}.fa-codiepie:before{content:\"\uF284\"}.fa-modx:before{content:\"\uF285\"}.fa-fort-awesome:before{content:\"\uF286\"}.fa-usb:before{content:\"\uF287\"}.fa-product-hunt:before{content:\"\uF288\"}.fa-mixcloud:before{content:\"\uF289\"}.fa-scribd:before{content:\"\uF28A\"}.fa-pause-circle:before{content:\"\uF28B\"}.fa-pause-circle-o:before{content:\"\uF28C\"}.fa-stop-circle:before{content:\"\uF28D\"}.fa-stop-circle-o:before{content:\"\uF28E\"}.fa-shopping-bag:before{content:\"\uF290\"}.fa-shopping-basket:before{content:\"\uF291\"}.fa-hashtag:before{content:\"\uF292\"}.fa-bluetooth:before{content:\"\uF293\"}.fa-bluetooth-b:before{content:\"\uF294\"}.fa-percent:before{content:\"\uF295\"}.fa-gitlab:before{content:\"\uF296\"}.fa-wpbeginner:before{content:\"\uF297\"}.fa-wpforms:before{content:\"\uF298\"}.fa-envira:before{content:\"\uF299\"}.fa-universal-access:before{content:\"\uF29A\"}.fa-wheelchair-alt:before{content:\"\uF29B\"}.fa-question-circle-o:before{content:\"\uF29C\"}.fa-blind:before{content:\"\uF29D\"}.fa-audio-description:before{content:\"\uF29E\"}.fa-volume-control-phone:before{content:\"\uF2A0\"}.fa-braille:before{content:\"\uF2A1\"}.fa-assistive-listening-systems:before{content:\"\uF2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\uF2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\uF2A4\"}.fa-glide:before{content:\"\uF2A5\"}.fa-glide-g:before{content:\"\uF2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\uF2A7\"}.fa-low-vision:before{content:\"\uF2A8\"}.fa-viadeo:before{content:\"\uF2A9\"}.fa-viadeo-square:before{content:\"\uF2AA\"}.fa-snapchat:before{content:\"\uF2AB\"}.fa-snapchat-ghost:before{content:\"\uF2AC\"}.fa-snapchat-square:before{content:\"\uF2AD\"}.fa-pied-piper:before{content:\"\uF2AE\"}.fa-first-order:before{content:\"\uF2B0\"}.fa-yoast:before{content:\"\uF2B1\"}.fa-themeisle:before{content:\"\uF2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\uF2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\uF2B4\"}.fa-handshake-o:before{content:\"\uF2B5\"}.fa-envelope-open:before{content:\"\uF2B6\"}.fa-envelope-open-o:before{content:\"\uF2B7\"}.fa-linode:before{content:\"\uF2B8\"}.fa-address-book:before{content:\"\uF2B9\"}.fa-address-book-o:before{content:\"\uF2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\uF2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\uF2BC\"}.fa-user-circle:before{content:\"\uF2BD\"}.fa-user-circle-o:before{content:\"\uF2BE\"}.fa-user-o:before{content:\"\uF2C0\"}.fa-id-badge:before{content:\"\uF2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\uF2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\uF2C3\"}.fa-quora:before{content:\"\uF2C4\"}.fa-free-code-camp:before{content:\"\uF2C5\"}.fa-telegram:before{content:\"\uF2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\uF2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\uF2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\uF2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\uF2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\uF2CB\"}.fa-shower:before{content:\"\uF2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\uF2CD\"}.fa-podcast:before{content:\"\uF2CE\"}.fa-window-maximize:before{content:\"\uF2D0\"}.fa-window-minimize:before{content:\"\uF2D1\"}.fa-window-restore:before{content:\"\uF2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\uF2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\uF2D4\"}.fa-bandcamp:before{content:\"\uF2D5\"}.fa-grav:before{content:\"\uF2D6\"}.fa-etsy:before{content:\"\uF2D7\"}.fa-imdb:before{content:\"\uF2D8\"}.fa-ravelry:before{content:\"\uF2D9\"}.fa-eercast:before{content:\"\uF2DA\"}.fa-microchip:before{content:\"\uF2DB\"}.fa-snowflake-o:before{content:\"\uF2DC\"}.fa-superpowers:before{content:\"\uF2DD\"}.fa-wpexplorer:before{content:\"\uF2DE\"}.fa-meetup:before{content:\"\uF2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:\"\";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:rgba(255,255,255,.5)}.angular-editor-toolbar{font:100 .8rem/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:0;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance:none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:\"\";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*=\"display:none\"]):not([style*=\"display: none\"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}"]
      }]
    }];
    /** @nocollapse */

    AngularEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: AngularEditorService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['autofocus']
        }]
      }];
    };

    AngularEditorComponent.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      html: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      textArea: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['editor', {
          "static": true
        }]
      }],
      editorWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['editorWrapper', {
          "static": true
        }]
      }],
      editorToolbar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['editorToolbar', {
          "static": false
        }]
      }],
      viewMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      blurEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['blur']
      }],
      focusEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['focus']
      }],
      tabindex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['attr.tabindex']
      }],
      onFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['focus']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ae-select/ae-select.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function SelectOption() {}

    if (false) {}

    var AeSelectComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elRef
       * @param {?} r
       */
      function AeSelectComponent(elRef, r) {
        _classCallCheck(this, AeSelectComponent);

        this.elRef = elRef;
        this.r = r;
        this.options = [];
        this.disabled = false;
        this.optionId = 0;
        this.opened = false;
        this.hidden = 'inline-block'; // tslint:disable-next-line:no-output-native no-output-rename

        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.onChange =
        /**
        * @return {?}
        */
        function () {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * @return {?}
       */


      _createClass(AeSelectComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this.selectedOption = this.options[0];

          if (isDefined(this.isHidden) && this.isHidden) {
            this.hide();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this.hidden = 'none';
        }
        /**
         * @param {?} option
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "optionSelect",
        value: function optionSelect(option, event) {
          event.stopPropagation();
          this.setValue(option.value);
          this.onChange(this.selectedOption.value);
          this.changeEvent.emit(this.selectedOption.value);
          this.onTouched();
          this.opened = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "toggleOpen",
        value: function toggleOpen(event) {
          // event.stopPropagation();
          if (this.disabled) {
            return;
          }

          this.opened = !this.opened;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onClick",
        value: function onClick($event) {
          if (!this.elRef.nativeElement.contains($event.target)) {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.opened = false;
        }
        /**
         * @return {?}
         */

      }, {
        key: "writeValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function writeValue(value) {
          if (!value || typeof value !== 'string') {
            return;
          }

          this.setValue(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          /** @type {?} */
          var index = 0;
          /** @type {?} */

          var selectedEl = this.options.find(
          /**
          * @param {?} el
          * @param {?} i
          * @return {?}
          */
          function (el, i) {
            index = i;
            return el.value === value;
          });

          if (selectedEl) {
            this.selectedOption = selectedEl;
            this.optionId = index;
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.labelButton.nativeElement.disabled = isDisabled;
          /** @type {?} */

          var div = this.labelButton.nativeElement;
          /** @type {?} */

          var action = isDisabled ? 'addClass' : 'removeClass';
          this.r[action](div, 'disabled');
          this.disabled = isDisabled;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown($event) {
          if (!this.opened) {
            return;
          } // console.log($event.key);
          // if (KeyCode[$event.key]) {


          switch ($event.key) {
            case 'ArrowDown':
              this._handleArrowDown($event);

              break;

            case 'ArrowUp':
              this._handleArrowUp($event);

              break;

            case 'Space':
              this._handleSpace($event);

              break;

            case 'Enter':
              this._handleEnter($event);

              break;

            case 'Tab':
              this._handleTab($event);

              break;

            case 'Escape':
              this.close();
              $event.preventDefault();
              break;

            case 'Backspace':
              this._handleBackspace();

              break;
          } // } else if ($event.key && $event.key.length === 1) {
          // this._keyPress$.next($event.key.toLocaleLowerCase());
          // }

        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowDown",
        value: function _handleArrowDown($event) {
          if (this.optionId < this.options.length - 1) {
            this.optionId++;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowUp",
        value: function _handleArrowUp($event) {
          if (this.optionId >= 1) {
            this.optionId--;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleSpace",
        value: function _handleSpace($event) {}
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleEnter",
        value: function _handleEnter($event) {
          this.optionSelect(this.options[this.optionId], $event);
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleTab",
        value: function _handleTab($event) {}
        /**
         * @return {?}
         */

      }, {
        key: "_handleBackspace",
        value: function _handleBackspace() {}
      }, {
        key: "label",
        get: function get() {
          return this.selectedOption && this.selectedOption.hasOwnProperty('label') ? this.selectedOption.label : 'Select';
        }
        /**
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this.selectedOption.value;
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this.opened;
        }
      }]);

      return AeSelectComponent;
    }();

    AeSelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ae-select',
        template: "<span class=\"ae-font ae-picker\" [ngClass]=\"{'ae-expanded':isOpen}\">\n  <button [tabIndex]=\"-1\" #labelButton tabindex=\"0\" type=\"button\" role=\"button\" class=\"ae-picker-label\" (click)=\"toggleOpen($event);\">{{label}}\n    <svg viewBox=\"0 0 18 18\">\n     <!-- <use x=\"0\" y=\"0\" xlink:href=\"../assets/icons.svg#hom\"></use>-->\n      <polygon class=\"ae-stroke\" points=\"7 11 9 13 11 11 7 11\"></polygon>\n      <polygon class=\"ae-stroke\" points=\"7 7 9 5 11 7 7 7\"></polygon>\n    </svg>\n  </button>\n  <span class=\"ae-picker-options\">\n    <button tabindex=\"-1\" type=\"button\" role=\"button\" class=\"ae-picker-item\"\n          *ngFor=\"let item of options; let i = index\"\n          [ngClass]=\"{'selected': item.value === value, 'focused': i === optionId}\"\n          (click)=\"optionSelect(item, $event)\">\n          {{item.label}}\n    </button>\n    <span class=\"dropdown-item\" *ngIf=\"!options.length\">No items for select</span>\n  </span>\n</span>\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return AeSelectComponent;
          }),
          multi: true
        }],
        styles: [".ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:\"\";position:absolute;right:0;top:0;width:20px;height:100%;background:-webkit-gradient(linear,left top,right top,from(white),to(#fff));background:linear-gradient(to right,#fff,#fff 100%)}.ae-font .ae-picker-label:focus{outline:0}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;-webkit-transition:.2s;transition:.2s}.ae-font .ae-picker-label:hover:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:-webkit-gradient(linear,left top,right top,color-stop(100%,#f5f5f5),to(#fff));background:linear-gradient(to right,#f5f5f5 100%,#fff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:rgba(0,0,0,.2) 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label,.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}"]
      }]
    }];
    /** @nocollapse */

    AeSelectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    AeSelectComponent.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['hidden']
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['style.display']
      }],
      changeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['change']
      }],
      labelButton: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['labelButton', {
          "static": true
        }]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['document:click', ['$event']]
      }],
      handleKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/angular-editor.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AngularEditorModule = function AngularEditorModule() {
      _classCallCheck(this, AngularEditorModule);
    };

    AngularEditorModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
        exports: [AngularEditorComponent, AngularEditorToolbarComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: kolkov-angular-editor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=kolkov-angular-editor.js.map

    /***/
  },

  /***/
  "./node_modules/sweetalert2/dist/sweetalert2.all.min.js":
  /*!**************************************************************!*\
    !*** ./node_modules/sweetalert2/dist/sweetalert2.all.min.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSweetalert2DistSweetalert2AllMinJs(module, exports, __webpack_require__) {
    !function (t, e) {
      true ? module.exports = e() : undefined;
    }(this, function () {
      "use strict";

      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
      }

      function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function s(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      }

      function u() {
        return (u = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n,
                o = arguments[e];

            for (n in o) {
              Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
            }
          }

          return t;
        }).apply(this, arguments);
      }

      function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }

      function l(t, e) {
        return (l = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      function i(t, e, n) {
        return (i = d() ? Reflect.construct : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          o = new (Function.bind.apply(t, o))();
          return n && l(o, n.prototype), o;
        }).apply(null, arguments);
      }

      function p(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : e;
      }

      function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
          t = function (t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t));) {
              ;
            }

            return t;
          }(t, e);

          if (t) {
            e = Object.getOwnPropertyDescriptor(t, e);
            return e.get ? e.get.call(n) : e.value;
          }
        })(t, e, n || t);
      }

      function m(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }

      function h(e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }

      function g(t) {
        return Array.prototype.slice.call(t);
      }

      function v(t, e) {
        e = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === Y.indexOf(e) && (Y.push(e), W(e));
      }

      function b(t) {
        return t && "function" == typeof t.toPromise;
      }

      function y(t) {
        return b(t) ? t.toPromise() : Promise.resolve(t);
      }

      function w(t) {
        return t && Promise.resolve(t) === t;
      }

      function C(t) {
        return t instanceof Element || "object" === r(t = t) && t.jquery;
      }

      function k() {
        return document.body.querySelector(".".concat($.container));
      }

      function e(t) {
        var e = k();
        return e ? e.querySelector(t) : null;
      }

      function t(t) {
        return e(".".concat(t));
      }

      function A() {
        return t($.popup);
      }

      function x() {
        return t($.icon);
      }

      function B() {
        return t($.title);
      }

      function P() {
        return t($.content);
      }

      function O() {
        return t($["html-container"]);
      }

      function E() {
        return t($.image);
      }

      function n() {
        return t($["progress-steps"]);
      }

      function S() {
        return t($["validation-message"]);
      }

      function T() {
        return e(".".concat($.actions, " .").concat($.confirm));
      }

      function L() {
        return e(".".concat($.actions, " .").concat($.deny));
      }

      function D() {
        return e(".".concat($.loader));
      }

      function q() {
        return e(".".concat($.actions, " .").concat($.cancel));
      }

      function j() {
        return t($.actions);
      }

      function M() {
        return t($.header);
      }

      function I() {
        return t($.footer);
      }

      function H() {
        return t($["timer-progress-bar"]);
      }

      function V() {
        return t($.close);
      }

      function R() {
        var t = g(A().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
          return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0;
        }),
            e = g(A().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function (t) {
          return "-1" !== t.getAttribute("tabindex");
        });
        return function (t) {
          for (var e = [], n = 0; n < t.length; n++) {
            -1 === e.indexOf(t[n]) && e.push(t[n]);
          }

          return e;
        }(t.concat(e)).filter(function (t) {
          return wt(t);
        });
      }

      function N() {
        return !G() && !document.body.classList.contains($["no-backdrop"]);
      }

      function U(e, t) {
        e.textContent = "", t && (t = new DOMParser().parseFromString(t, "text/html"), g(t.querySelector("head").childNodes).forEach(function (t) {
          e.appendChild(t);
        }), g(t.querySelector("body").childNodes).forEach(function (t) {
          e.appendChild(t);
        }));
      }

      function F(t, e) {
        if (e) {
          for (var n = e.split(/\s+/), o = 0; o < n.length; o++) {
            if (!t.classList.contains(n[o])) return;
          }

          return 1;
        }
      }

      function _(t, e, n) {
        var o, i;

        if (i = e, g((o = t).classList).forEach(function (t) {
          -1 === h($).indexOf(t) && -1 === h(X).indexOf(t) && -1 === h(i.showClass).indexOf(t) && o.classList.remove(t);
        }), e.customClass && e.customClass[n]) {
          if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return W("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
          vt(t, e.customClass[n]);
        }
      }

      var z = "SweetAlert2:",
          W = function W(t) {
        console.warn("".concat(z, " ").concat("object" === r(t) ? t.join(" ") : t));
      },
          K = function K(t) {
        console.error("".concat(z, " ").concat(t));
      },
          Y = [],
          Z = function Z(t) {
        return "function" == typeof t ? t() : t;
      },
          Q = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
      }),
          J = function J(t) {
        var e,
            n = {};

        for (e in t) {
          n[t[e]] = "swal2-" + t[e];
        }

        return n;
      },
          $ = J(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
          X = J(["success", "warning", "info", "question", "error"]),
          G = function G() {
        return document.body.classList.contains($["toast-shown"]);
      },
          tt = {
        previousBodyPadding: null
      };

      function et(t, e) {
        if (!e) return null;

        switch (e) {
          case "select":
          case "textarea":
          case "file":
            return yt(t, $[e]);

          case "checkbox":
            return t.querySelector(".".concat($.checkbox, " input"));

          case "radio":
            return t.querySelector(".".concat($.radio, " input:checked")) || t.querySelector(".".concat($.radio, " input:first-child"));

          case "range":
            return t.querySelector(".".concat($.range, " input"));

          default:
            return yt(t, $.input);
        }
      }

      function nt(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e);
      }

      function ot(t, e, n) {
        t && e && (e = "string" == typeof e ? e.split(/\s+/).filter(Boolean) : e).forEach(function (e) {
          t.forEach ? t.forEach(function (t) {
            n ? t.classList.add(e) : t.classList.remove(e);
          }) : n ? t.classList.add(e) : t.classList.remove(e);
        });
      }

      function it(t, e, n) {
        (n = n === "".concat(parseInt(n)) ? parseInt(n) : n) || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e);
      }

      function rt(t) {
        t.style.display = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "flex";
      }

      function at(t) {
        t.style.display = "none";
      }

      function st(t, e, n, o) {
        (e = t.querySelector(e)) && (e.style[n] = o);
      }

      function ut(t, e, n) {
        e ? rt(t, n) : at(t);
      }

      function ct(t) {
        return !!(t.scrollHeight > t.clientHeight);
      }

      function lt(t) {
        var e = window.getComputedStyle(t),
            t = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            e = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < t || 0 < e;
      }

      function dt(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = H();
        wt(n) && (e && (n.style.transition = "none", n.style.width = "100%"), setTimeout(function () {
          n.style.transition = "width ".concat(t / 1e3, "s linear"), n.style.width = "0%";
        }, 10));
      }

      function pt() {
        return "undefined" == typeof window || "undefined" == typeof document;
      }

      function ft(t) {
        Mn.isVisible() && gt !== t.target.value && Mn.resetValidationMessage(), gt = t.target.value;
      }

      function mt(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? At(t, e) : t && U(e, t);
      }

      function ht(t, e) {
        var n = j(),
            o = D(),
            i = T(),
            r = L(),
            a = q();
        e.showConfirmButton || e.showDenyButton || e.showCancelButton || at(n), _(n, e, "actions"), Pt(i, "confirm", e), Pt(r, "deny", e), Pt(a, "cancel", e), function (t, e, n, o) {
          if (!o.buttonsStyling) return bt([t, e, n], $.styled);
          vt([t, e, n], $.styled), o.confirmButtonColor && (t.style.backgroundColor = o.confirmButtonColor);
          o.denyButtonColor && (e.style.backgroundColor = o.denyButtonColor);
          o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor);
        }(i, r, a, e), e.reverseButtons && (n.insertBefore(a, o), n.insertBefore(r, o), n.insertBefore(i, o)), U(o, e.loaderHtml), _(o, e, "loader");
      }

      var gt,
          vt = function vt(t, e) {
        ot(t, e, !0);
      },
          bt = function bt(t, e) {
        ot(t, e, !1);
      },
          yt = function yt(t, e) {
        for (var n = 0; n < t.childNodes.length; n++) {
          if (F(t.childNodes[n], e)) return t.childNodes[n];
        }
      },
          wt = function wt(t) {
        return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length));
      },
          Ct = '\n <div aria-labelledby="'.concat($.title, '" aria-describedby="').concat($.content, '" class="').concat($.popup, '" tabindex="-1">\n   <div class="').concat($.header, '">\n     <ul class="').concat($["progress-steps"], '"></ul>\n     <div class="').concat($.icon, '"></div>\n     <img class="').concat($.image, '" />\n     <h2 class="').concat($.title, '" id="').concat($.title, '"></h2>\n     <button type="button" class="').concat($.close, '"></button>\n   </div>\n   <div class="').concat($.content, '">\n     <div id="').concat($.content, '" class="').concat($["html-container"], '"></div>\n     <input class="').concat($.input, '" />\n     <input type="file" class="').concat($.file, '" />\n     <div class="').concat($.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat($.select, '"></select>\n     <div class="').concat($.radio, '"></div>\n     <label for="').concat($.checkbox, '" class="').concat($.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat($.label, '"></span>\n     </label>\n     <textarea class="').concat($.textarea, '"></textarea>\n     <div class="').concat($["validation-message"], '" id="').concat($["validation-message"], '"></div>\n   </div>\n   <div class="').concat($.actions, '">\n     <div class="').concat($.loader, '"></div>\n     <button type="button" class="').concat($.confirm, '"></button>\n     <button type="button" class="').concat($.deny, '"></button>\n     <button type="button" class="').concat($.cancel, '"></button>\n   </div>\n   <div class="').concat($.footer, '"></div>\n   <div class="').concat($["timer-progress-bar-container"], '">\n     <div class="').concat($["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
          kt = function kt(t) {
        var e,
            n,
            o,
            i,
            r,
            a = !!(i = k()) && (i.parentNode.removeChild(i), bt([document.documentElement, document.body], [$["no-backdrop"], $["toast-shown"], $["has-column"]]), !0);
        pt() ? K("SweetAlert2 requires document to initialize") : ((r = document.createElement("div")).className = $.container, a && vt(r, $["no-transition"]), U(r, Ct), (i = "string" == typeof (e = t.target) ? document.querySelector(e) : e).appendChild(r), a = t, (e = A()).setAttribute("role", a.toast ? "alert" : "dialog"), e.setAttribute("aria-live", a.toast ? "polite" : "assertive"), a.toast || e.setAttribute("aria-modal", "true"), r = i, "rtl" === window.getComputedStyle(r).direction && vt(k(), $.rtl), t = P(), a = yt(t, $.input), e = yt(t, $.file), n = t.querySelector(".".concat($.range, " input")), o = t.querySelector(".".concat($.range, " output")), i = yt(t, $.select), r = t.querySelector(".".concat($.checkbox, " input")), t = yt(t, $.textarea), a.oninput = ft, e.onchange = ft, i.onchange = ft, r.onchange = ft, t.oninput = ft, n.oninput = function (t) {
          ft(t), o.value = n.value;
        }, n.onchange = function (t) {
          ft(t), n.nextSibling.value = n.value;
        });
      },
          At = function At(t, e) {
        t.jquery ? xt(e, t) : U(e, t.toString());
      },
          xt = function xt(t, e) {
        if (t.textContent = "", 0 in e) for (var n = 0; (n in e); n++) {
          t.appendChild(e[n].cloneNode(!0));
        } else t.appendChild(e.cloneNode(!0));
      },
          Bt = function () {
        if (pt()) return !1;
        var t,
            e = document.createElement("div"),
            n = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend"
        };

        for (t in n) {
          if (Object.prototype.hasOwnProperty.call(n, t) && void 0 !== e.style[t]) return n[t];
        }

        return !1;
      }();

      function Pt(t, e, n) {
        ut(t, n["show".concat(m(e), "Button")], "inline-block"), U(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = $[e], _(t, n, "".concat(e, "Button")), vt(t, n["".concat(e, "ButtonClass")]);
      }

      function Ot(t, e) {
        var n,
            o,
            i = k();
        i && (o = i, "string" == typeof (n = e.backdrop) ? o.style.background = n : n || vt([document.documentElement, document.body], $["no-backdrop"]), !e.backdrop && e.allowOutsideClick && W('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), o = i, (n = e.position) in $ ? vt(o, $[n]) : (W('The "position" parameter is not valid, defaulting to "center"'), vt(o, $.center)), n = i, !(o = e.grow) || "string" != typeof o || (o = "grow-".concat(o)) in $ && vt(n, $[o]), _(i, e, "container"), (e = document.body.getAttribute("data-swal2-queue-step")) && (i.setAttribute("data-queue-step", e), document.body.removeAttribute("data-swal2-queue-step")));
      }

      function Et(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder);
      }

      function St(t, e, n) {
        var o, i;
        n.inputLabel && (t.id = $.input, o = document.createElement("label"), i = $["input-label"], o.setAttribute("for", t.id), o.className = i, vt(o, n.customClass.inputLabel), o.innerText = n.inputLabel, e.insertAdjacentElement("beforebegin", o));
      }

      var Tt = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
      },
          Lt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
          Dt = function Dt(t) {
        if (!It[t.input]) return K('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
        var e = Mt(t.input),
            n = It[t.input](e, t);
        rt(n), setTimeout(function () {
          nt(n);
        });
      },
          qt = function qt(t, e) {
        var n = et(P(), t);
        if (n) for (var o in !function (t) {
          for (var e = 0; e < t.attributes.length; e++) {
            var n = t.attributes[e].name;
            -1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n);
          }
        }(n), e) {
          "range" === t && "placeholder" === o || n.setAttribute(o, e[o]);
        }
      },
          jt = function jt(t) {
        var e = Mt(t.input);
        t.customClass && vt(e, t.customClass.input);
      },
          Mt = function Mt(t) {
        t = $[t] || $.input;
        return yt(P(), t);
      },
          It = {};

      It.text = It.email = It.password = It.number = It.tel = It.url = function (t, e) {
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : w(e.inputValue) || W('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), St(t, t, e), Et(t, e), t.type = e.input, t;
      }, It.file = function (t, e) {
        return St(t, t, e), Et(t, e), t;
      }, It.range = function (t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, St(n, t, e), t;
      }, It.select = function (t, e) {
        var n;
        return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), U(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), St(t, t, e), t;
      }, It.radio = function (t) {
        return t.textContent = "", t;
      }, It.checkbox = function (t, e) {
        var n = et(P(), "checkbox");
        n.value = 1, n.id = $.checkbox, n.checked = Boolean(e.inputValue);
        n = t.querySelector("span");
        return U(n, e.inputPlaceholder), t;
      }, It.textarea = function (e, t) {
        e.value = t.inputValue, Et(e, t), St(e, e, t);

        function n(t) {
          return parseInt(window.getComputedStyle(t).paddingLeft) + parseInt(window.getComputedStyle(t).paddingRight);
        }

        var o;
        return "MutationObserver" in window && (o = parseInt(window.getComputedStyle(A()).width), new MutationObserver(function () {
          var t = e.offsetWidth + n(A()) + n(P());
          A().style.width = o < t ? "".concat(t, "px") : null;
        }).observe(e, {
          attributes: !0,
          attributeFilter: ["style"]
        })), e;
      };

      function Ht(t, e) {
        var o,
            i,
            r,
            n = O();
        _(n, e, "htmlContainer"), e.html ? (mt(e.html, n), rt(n, "block")) : e.text ? (n.textContent = e.text, rt(n, "block")) : at(n), t = t, o = e, i = P(), t = Tt.innerParams.get(t), r = !t || o.input !== t.input, Lt.forEach(function (t) {
          var e = $[t],
              n = yt(i, e);
          qt(t, o.inputAttributes), n.className = e, r && at(n);
        }), o.input && (r && Dt(o), jt(o)), _(P(), e, "content");
      }

      function Vt() {
        return k() && k().getAttribute("data-queue-step");
      }

      function Rt(t, o) {
        var i = n();
        if (!o.progressSteps || 0 === o.progressSteps.length) return at(i), 0;
        rt(i), i.textContent = "";
        var r = parseInt(void 0 === o.currentProgressStep ? Vt() : o.currentProgressStep);
        r >= o.progressSteps.length && W("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach(function (t, e) {
          var n,
              t = (n = t, t = document.createElement("li"), vt(t, $["progress-step"]), U(t, n), t);
          i.appendChild(t), e === r && vt(t, $["active-progress-step"]), e !== o.progressSteps.length - 1 && (t = o, e = document.createElement("li"), vt(e, $["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), i.appendChild(e));
        });
      }

      function Nt(t, e) {
        var n,
            o = M();
        _(o, e, "header"), Rt(0, e), n = t, o = e, t = Tt.innerParams.get(n), n = x(), t && o.icon === t.icon ? (Wt(n, o), _t(n, o)) : o.icon || o.iconHtml ? o.icon && -1 === Object.keys(X).indexOf(o.icon) ? (K('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(o.icon, '"')), at(n)) : (rt(n), Wt(n, o), _t(n, o), vt(n, o.showClass.icon)) : at(n), function (t) {
          var e = E();
          if (!t.imageUrl) return at(e);
          rt(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), it(e, "width", t.imageWidth), it(e, "height", t.imageHeight), e.className = $.image, _(e, t, "image");
        }(e), o = e, n = B(), ut(n, o.title || o.titleText, "block"), o.title && mt(o.title, n), o.titleText && (n.innerText = o.titleText), _(n, o, "title"), o = e, e = V(), U(e, o.closeButtonHtml), _(e, o, "closeButton"), ut(e, o.showCloseButton), e.setAttribute("aria-label", o.closeButtonAriaLabel);
      }

      function Ut(t, e) {
        var n, o, i;
        i = e, n = k(), o = A(), i.toast ? (it(n, "width", i.width), o.style.width = "100%") : it(o, "width", i.width), it(o, "padding", i.padding), i.background && (o.style.background = i.background), at(S()), Qt(o, i), Ot(0, e), Nt(t, e), Ht(t, e), ht(0, e), i = e, t = I(), ut(t, i.footer), i.footer && mt(i.footer, t), _(t, i, "footer"), "function" == typeof e.didRender ? e.didRender(A()) : "function" == typeof e.onRender && e.onRender(A());
      }

      function Ft() {
        return T() && T().click();
      }

      var _t = function _t(t, e) {
        for (var n in X) {
          e.icon !== n && bt(t, X[n]);
        }

        vt(t, X[e.icon]), Kt(t, e), zt(), _(t, e, "icon");
      },
          zt = function zt() {
        for (var t = A(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) {
          n[o].style.backgroundColor = e;
        }
      },
          Wt = function Wt(t, e) {
        t.textContent = "", e.iconHtml ? U(t, Yt(e.iconHtml)) : "success" === e.icon ? U(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? U(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : U(t, Yt({
          question: "?",
          warning: "!",
          info: "i"
        }[e.icon]));
      },
          Kt = function Kt(t, e) {
        if (e.iconColor) {
          t.style.color = e.iconColor, t.style.borderColor = e.iconColor;

          for (var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; n < o.length; n++) {
            st(t, o[n], "backgroundColor", e.iconColor);
          }

          st(t, ".swal2-success-ring", "borderColor", e.iconColor);
        }
      },
          Yt = function Yt(t) {
        return '<div class="'.concat($["icon-content"], '">').concat(t, "</div>");
      },
          Zt = [],
          Qt = function Qt(t, e) {
        t.className = "".concat($.popup, " ").concat(wt(t) ? e.showClass.popup : ""), e.toast ? (vt([document.documentElement, document.body], $["toast-shown"]), vt(t, $.toast)) : vt(t, $.modal), _(t, e, "popup"), "string" == typeof e.customClass && vt(t, e.customClass), e.icon && vt(t, $["icon-".concat(e.icon)]);
      };

      function Jt(t) {
        (e = A()) || Mn.fire();
        var e = A(),
            n = j(),
            o = D();
        !t && wt(T()) && (t = T()), rt(n), t && (at(t), o.setAttribute("data-button-to-replace", t.className)), o.parentNode.insertBefore(o, t), vt([e, n], $.loading), rt(o), e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus();
      }

      function $t(o) {
        return new Promise(function (t) {
          if (!o) return t();
          var e = window.scrollX,
              n = window.scrollY;
          te.restoreFocusTimeout = setTimeout(function () {
            te.previousActiveElement && te.previousActiveElement.focus ? (te.previousActiveElement.focus(), te.previousActiveElement = null) : document.body && document.body.focus(), t();
          }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n);
        });
      }

      function Xt() {
        if (te.timeout) return function () {
          var t = H(),
              e = parseInt(window.getComputedStyle(t).width);
          t.style.removeProperty("transition"), t.style.width = "100%";
          var n = parseInt(window.getComputedStyle(t).width),
              n = parseInt(e / n * 100);
          t.style.removeProperty("transition"), t.style.width = "".concat(n, "%");
        }(), te.timeout.stop();
      }

      function Gt() {
        if (te.timeout) {
          var t = te.timeout.start();
          return dt(t), t;
        }
      }

      var te = {},
          ee = !1,
          ne = {};

      function oe(t) {
        for (var e = t.target; e && e !== document; e = e.parentNode) {
          for (var n in ne) {
            var o = e.getAttribute(n);
            if (o) return void ne[n].fire({
              template: o
            });
          }
        }
      }

      function ie(t) {
        return Object.prototype.hasOwnProperty.call(se, t);
      }

      function re(t) {
        return ce[t];
      }

      function ae(t) {
        for (var e in t) {
          ie(n = e) || W('Unknown parameter "'.concat(n, '"')), t.toast && (n = e, -1 !== le.indexOf(n) && W('The parameter "'.concat(n, '" is incompatible with toasts'))), re(e = e) && v(e, re(e));
        }

        var n;
      }

      var se = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        animation: !0,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show"
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        onBeforeOpen: void 0,
        onOpen: void 0,
        willOpen: void 0,
        didOpen: void 0,
        onRender: void 0,
        didRender: void 0,
        onClose: void 0,
        onAfterClose: void 0,
        willClose: void 0,
        didClose: void 0,
        onDestroy: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
      },
          ue = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
          ce = {
        animation: 'showClass" and "hideClass',
        onBeforeOpen: "willOpen",
        onOpen: "didOpen",
        onRender: "didRender",
        onClose: "willClose",
        onAfterClose: "didClose",
        onDestroy: "didDestroy"
      },
          le = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
          de = Object.freeze({
        isValidParameter: ie,
        isUpdatableParameter: function isUpdatableParameter(t) {
          return -1 !== ue.indexOf(t);
        },
        isDeprecatedParameter: re,
        argsToParams: function argsToParams(n) {
          var o = {};
          return "object" !== r(n[0]) || C(n[0]) ? ["title", "html", "icon"].forEach(function (t, e) {
            e = n[e];
            "string" == typeof e || C(e) ? o[t] = e : void 0 !== e && K("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(e)));
          }) : u(o, n[0]), o;
        },
        isVisible: function isVisible() {
          return wt(A());
        },
        clickConfirm: Ft,
        clickDeny: function clickDeny() {
          return L() && L().click();
        },
        clickCancel: function clickCancel() {
          return q() && q().click();
        },
        getContainer: k,
        getPopup: A,
        getTitle: B,
        getContent: P,
        getHtmlContainer: O,
        getImage: E,
        getIcon: x,
        getInputLabel: function getInputLabel() {
          return t($["input-label"]);
        },
        getCloseButton: V,
        getActions: j,
        getConfirmButton: T,
        getDenyButton: L,
        getCancelButton: q,
        getLoader: D,
        getHeader: M,
        getFooter: I,
        getTimerProgressBar: H,
        getFocusableElements: R,
        getValidationMessage: S,
        isLoading: function isLoading() {
          return A().hasAttribute("data-loading");
        },
        fire: function fire() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }

          return i(this, e);
        },
        mixin: function mixin(r) {
          return function (t) {
            !function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
                }
              }), e && l(t, e);
            }(i, t);
            var n,
                o,
                e = (n = i, o = d(), function () {
              var t,
                  e = c(n);
              return p(this, o ? (t = c(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments));
            });

            function i() {
              return a(this, i), e.apply(this, arguments);
            }

            return s(i, [{
              key: "_main",
              value: function value(t, e) {
                return f(c(i.prototype), "_main", this).call(this, t, u({}, r, e));
              }
            }]), i;
          }(this);
        },
        queue: function queue(t) {
          var r = this;
          Zt = t;

          function a(t, e) {
            Zt = [], t(e);
          }

          var s = [];
          return new Promise(function (i) {
            !function e(n, o) {
              n < Zt.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Zt[n]).then(function (t) {
                void 0 !== t.value ? (s.push(t.value), e(n + 1, o)) : a(i, {
                  dismiss: t.dismiss
                });
              })) : a(i, {
                value: s
              });
            }(0);
          });
        },
        getQueueStep: Vt,
        insertQueueStep: function insertQueueStep(t, e) {
          return e && e < Zt.length ? Zt.splice(e, 0, t) : Zt.push(t);
        },
        deleteQueueStep: function deleteQueueStep(t) {
          void 0 !== Zt[t] && Zt.splice(t, 1);
        },
        showLoading: Jt,
        enableLoading: Jt,
        getTimerLeft: function getTimerLeft() {
          return te.timeout && te.timeout.getTimerLeft();
        },
        stopTimer: Xt,
        resumeTimer: Gt,
        toggleTimer: function toggleTimer() {
          var t = te.timeout;
          return t && (t.running ? Xt : Gt)();
        },
        increaseTimer: function increaseTimer(t) {
          if (te.timeout) {
            t = te.timeout.increase(t);
            return dt(t, !0), t;
          }
        },
        isTimerRunning: function isTimerRunning() {
          return te.timeout && te.timeout.isRunning();
        },
        bindClickHandler: function bindClickHandler() {
          ne[0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "data-swal-template"] = this, ee || (document.body.addEventListener("click", oe), ee = !0);
        }
      });

      function pe() {
        var t, e;
        Tt.innerParams.get(this) && (t = Tt.domCache.get(this), at(t.loader), (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? rt(e[0], "inline-block") : wt(T()) || wt(L()) || wt(q()) || at(t.actions), bt([t.popup, t.actions], $.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1);
      }

      function fe() {
        null === tt.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (tt.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(tt.previousBodyPadding + function () {
          var t = document.createElement("div");
          t.className = $["scrollbar-measure"], document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }(), "px"));
      }

      function me() {
        return !!window.MSInputMethodContext && !!document.documentMode;
      }

      function he() {
        var t = k(),
            e = A();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start");
      }

      var ge = function ge() {
        navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || A().scrollHeight > window.innerHeight - 44 && (k().style.paddingBottom = "".concat(44, "px"));
      },
          ve = function ve() {
        var e,
            t = k();
        t.ontouchstart = function (t) {
          e = be(t);
        }, t.ontouchmove = function (t) {
          e && (t.preventDefault(), t.stopPropagation());
        };
      },
          be = function be(t) {
        var e = t.target,
            n = k();
        return !ye(t) && !we(t) && (e === n || !(ct(n) || "INPUT" === e.tagName || ct(P()) && P().contains(e)));
      },
          ye = function ye(t) {
        return t.touches && t.touches.length && "stylus" === t.touches[0].touchType;
      },
          we = function we(t) {
        return t.touches && 1 < t.touches.length;
      },
          Ce = {
        swalPromiseResolve: new WeakMap()
      };

      function ke(t, e, n, o) {
        G() ? Ee(t, o) : ($t(n).then(function () {
          return Ee(t, o);
        }), te.keydownTarget.removeEventListener("keydown", te.keydownHandler, {
          capture: te.keydownListenerCapture
        }), te.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), N() && (null !== tt.previousBodyPadding && (document.body.style.paddingRight = "".concat(tt.previousBodyPadding, "px"), tt.previousBodyPadding = null), F(document.body, $.iosfix) && (e = parseInt(document.body.style.top, 10), bt(document.body, $.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e), "undefined" != typeof window && me() && window.removeEventListener("resize", he), g(document.body.children).forEach(function (t) {
          t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden");
        })), bt([document.documentElement, document.body], [$.shown, $["height-auto"], $["no-backdrop"], $["toast-shown"]]);
      }

      function Ae(t) {
        var e,
            n,
            o,
            i = A();
        i && (t = xe(t), (e = Tt.innerParams.get(this)) && !F(i, e.hideClass.popup) && (n = Ce.swalPromiseResolve.get(this), bt(i, e.showClass.popup), vt(i, e.hideClass.popup), o = k(), bt(o, e.showClass.backdrop), vt(o, e.hideClass.backdrop), Be(this, i, e), n(t)));
      }

      function xe(t) {
        return void 0 === t ? {
          isConfirmed: !1,
          isDenied: !1,
          isDismissed: !0
        } : u({
          isConfirmed: !1,
          isDenied: !1,
          isDismissed: !1
        }, t);
      }

      function Be(t, e, n) {
        var o = k(),
            i = Bt && lt(e),
            r = n.onClose,
            a = n.onAfterClose,
            s = n.willClose,
            u = n.didClose;
        Pe(e, s, r), i ? Oe(t, e, o, n.returnFocus, u || a) : ke(t, o, n.returnFocus, u || a);
      }

      var Pe = function Pe(t, e, n) {
        null !== e && "function" == typeof e ? e(t) : null !== n && "function" == typeof n && n(t);
      },
          Oe = function Oe(t, e, n, o, i) {
        te.swalCloseEventFinishedCallback = ke.bind(null, t, n, o, i), e.addEventListener(Bt, function (t) {
          t.target === e && (te.swalCloseEventFinishedCallback(), delete te.swalCloseEventFinishedCallback);
        });
      },
          Ee = function Ee(t, e) {
        setTimeout(function () {
          "function" == typeof e && e(), t._destroy();
        });
      };

      function Se(t, e, n) {
        var o = Tt.domCache.get(t);
        e.forEach(function (t) {
          o[t].disabled = n;
        });
      }

      function Te(t, e) {
        if (!t) return !1;
        if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) {
          n[o].disabled = e;
        } else t.disabled = e;
      }

      var Le = function () {
        function n(t, e) {
          a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start();
        }

        return s(n, [{
          key: "start",
          value: function value() {
            return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
          }
        }, {
          key: "stop",
          value: function value() {
            return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date() - this.started), this.remaining;
          }
        }, {
          key: "increase",
          value: function value(t) {
            var e = this.running;
            return e && this.stop(), this.remaining += t, e && this.start(), this.remaining;
          }
        }, {
          key: "getTimerLeft",
          value: function value() {
            return this.running && (this.stop(), this.start()), this.remaining;
          }
        }, {
          key: "isRunning",
          value: function value() {
            return this.running;
          }
        }]), n;
      }(),
          De = {
        email: function email(t, e) {
          return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address");
        },
        url: function url(t, e) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL");
        }
      };

      function qe(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(De).forEach(function (t) {
          e.input === t && (e.inputValidator = De[t]);
        }), t.showLoaderOnConfirm && !t.preConfirm && W("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = Z(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (W('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), kt(t);
      }

      function je(t) {
        var e = k(),
            n = A();
        "function" == typeof t.willOpen ? t.willOpen(n) : "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        Je(e, n, t), setTimeout(function () {
          Ze(e, n);
        }, 10), N() && (Qe(e, t.scrollbarPadding, o), g(document.body.children).forEach(function (t) {
          t === k() || function (t, e) {
            if ("function" == typeof t.contains) return t.contains(e);
          }(t, k()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"));
        })), G() || te.previousActiveElement || (te.previousActiveElement = document.activeElement), Ye(n, t), bt(e, $["no-transition"]);
      }

      function Me(t) {
        var e = A();
        t.target === e && (t = k(), e.removeEventListener(Bt, Me), t.style.overflowY = "auto");
      }

      function Ie(t, e) {
        t.closePopup({
          isConfirmed: !0,
          value: e
        });
      }

      function He(t, e, n) {
        var o = R();
        if (o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        A().focus();
      }

      var Ve = ["swal-title", "swal-html", "swal-footer"],
          Re = function Re(t) {
        var n = {};
        return g(t.querySelectorAll("swal-param")).forEach(function (t) {
          Ke(t, ["name", "value"]);
          var e = t.getAttribute("name"),
              t = t.getAttribute("value");
          "boolean" == typeof se[e] && "false" === t && (t = !1), "object" === r(se[e]) && (t = JSON.parse(t)), n[e] = t;
        }), n;
      },
          Ne = function Ne(t) {
        var n = {};
        return g(t.querySelectorAll("swal-button")).forEach(function (t) {
          Ke(t, ["type", "color", "aria-label"]);
          var e = t.getAttribute("type");
          n["".concat(e, "ButtonText")] = t.innerHTML, n["show".concat(m(e), "Button")] = !0, t.hasAttribute("color") && (n["".concat(e, "ButtonColor")] = t.getAttribute("color")), t.hasAttribute("aria-label") && (n["".concat(e, "ButtonAriaLabel")] = t.getAttribute("aria-label"));
        }), n;
      },
          Ue = function Ue(t) {
        var e = {},
            t = t.querySelector("swal-image");
        return t && (Ke(t, ["src", "width", "height", "alt"]), t.hasAttribute("src") && (e.imageUrl = t.getAttribute("src")), t.hasAttribute("width") && (e.imageWidth = t.getAttribute("width")), t.hasAttribute("height") && (e.imageHeight = t.getAttribute("height")), t.hasAttribute("alt") && (e.imageAlt = t.getAttribute("alt"))), e;
      },
          Fe = function Fe(t) {
        var e = {},
            t = t.querySelector("swal-icon");
        return t && (Ke(t, ["type", "color"]), t.hasAttribute("type") && (e.icon = t.getAttribute("type")), t.hasAttribute("color") && (e.iconColor = t.getAttribute("color")), e.iconHtml = t.innerHTML), e;
      },
          _e = function _e(t) {
        var n = {},
            e = t.querySelector("swal-input");
        e && (Ke(e, ["type", "label", "placeholder", "value"]), n.input = e.getAttribute("type") || "text", e.hasAttribute("label") && (n.inputLabel = e.getAttribute("label")), e.hasAttribute("placeholder") && (n.inputPlaceholder = e.getAttribute("placeholder")), e.hasAttribute("value") && (n.inputValue = e.getAttribute("value")));
        t = t.querySelectorAll("swal-input-option");
        return t.length && (n.inputOptions = {}, g(t).forEach(function (t) {
          Ke(t, ["value"]);
          var e = t.getAttribute("value"),
              t = t.innerHTML;
          n.inputOptions[e] = t;
        })), n;
      },
          ze = function ze(t, e) {
        var n,
            o = {};

        for (n in e) {
          var i = e[n],
              r = t.querySelector(i);
          r && (Ke(r, []), o[i.replace(/^swal-/, "")] = r.innerHTML.trim());
        }

        return o;
      },
          We = function We(e) {
        var n = Ve.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        g(e.querySelectorAll("*")).forEach(function (t) {
          t.parentNode === e && (t = t.tagName.toLowerCase(), -1 === n.indexOf(t) && W("Unrecognized element <".concat(t, ">")));
        });
      },
          Ke = function Ke(e, n) {
        g(e.attributes).forEach(function (t) {
          -1 === n.indexOf(t.name) && W(['Unrecognized attribute "'.concat(t.name, '" on <').concat(e.tagName.toLowerCase(), ">."), "".concat(n.length ? "Allowed attributes are: ".concat(n.join(", ")) : "To set the value, use HTML within the element.")]);
        });
      },
          Ye = function Ye(t, e) {
        "function" == typeof e.didOpen ? setTimeout(function () {
          return e.didOpen(t);
        }) : "function" == typeof e.onOpen && setTimeout(function () {
          return e.onOpen(t);
        });
      },
          Ze = function Ze(t, e) {
        Bt && lt(e) ? (t.style.overflowY = "hidden", e.addEventListener(Bt, Me)) : t.style.overflowY = "auto";
      },
          Qe = function Qe(t, e, n) {
        var o;
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !F(document.body, $.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), vt(document.body, $.iosfix), ve(), ge()), "undefined" != typeof window && me() && (he(), window.addEventListener("resize", he)), e && "hidden" !== n && fe(), setTimeout(function () {
          t.scrollTop = 0;
        });
      },
          Je = function Je(t, e, n) {
        vt(t, n.showClass.backdrop), e.style.setProperty("opacity", "0", "important"), rt(e), setTimeout(function () {
          vt(e, n.showClass.popup), e.style.removeProperty("opacity");
        }, 10), vt([document.documentElement, document.body], $.shown), n.heightAuto && n.backdrop && !n.toast && vt([document.documentElement, document.body], $["height-auto"]);
      },
          $e = function $e(t) {
        return t.checked ? 1 : 0;
      },
          Xe = function Xe(t) {
        return t.checked ? t.value : null;
      },
          Ge = function Ge(t) {
        return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null;
      },
          tn = function tn(e, n) {
        function o(t) {
          return nn[n.input](i, on(t), n);
        }

        var i = P();
        b(n.inputOptions) || w(n.inputOptions) ? (Jt(T()), y(n.inputOptions).then(function (t) {
          e.hideLoading(), o(t);
        })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : K("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)));
      },
          en = function en(e, n) {
        var o = e.getInput();
        at(o), y(n.inputValue).then(function (t) {
          o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), rt(o), o.focus(), e.hideLoading();
        })["catch"](function (t) {
          K("Error in inputValue promise: ".concat(t)), o.value = "", rt(o), o.focus(), e.hideLoading();
        });
      },
          nn = {
        select: function select(t, e, i) {
          function o(t, e, n) {
            var o = document.createElement("option");
            o.value = n, U(o, e), o.selected = rn(n, i.inputValue), t.appendChild(o);
          }

          var r = yt(t, $.select);
          e.forEach(function (t) {
            var e,
                n = t[0],
                t = t[1];
            Array.isArray(t) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, r.appendChild(e), t.forEach(function (t) {
              return o(e, t[1], t[0]);
            })) : o(r, t, n);
          }), r.focus();
        },
        radio: function radio(t, e, i) {
          var r = yt(t, $.radio);
          e.forEach(function (t) {
            var e = t[0],
                n = t[1],
                o = document.createElement("input"),
                t = document.createElement("label");
            o.type = "radio", o.name = $.radio, o.value = e, rn(e, i.inputValue) && (o.checked = !0);
            e = document.createElement("span");
            U(e, n), e.className = $.label, t.appendChild(o), t.appendChild(e), r.appendChild(t);
          });
          e = r.querySelectorAll("input");
          e.length && e[0].focus();
        }
      },
          on = function n(o) {
        var i = [];
        return "undefined" != typeof Map && o instanceof Map ? o.forEach(function (t, e) {
          "object" === r(t) && (t = n(t)), i.push([e, t]);
        }) : Object.keys(o).forEach(function (t) {
          var e = o[t];
          "object" === r(e) && (e = n(e)), i.push([t, e]);
        }), i;
      },
          rn = function rn(t, e) {
        return e && e.toString() === t.toString();
      },
          an = function an(t, e, n) {
        var o = function (t, e) {
          var n = t.getInput();
          if (!n) return null;

          switch (e.input) {
            case "checkbox":
              return $e(n);

            case "radio":
              return Xe(n);

            case "file":
              return Ge(n);

            default:
              return e.inputAutoTrim ? n.value.trim() : n.value;
          }
        }(t, e);

        e.inputValidator ? sn(t, e, o) : t.getInput().checkValidity() ? ("deny" === n ? un : cn)(t, e, o) : (t.enableButtons(), t.showValidationMessage(e.validationMessage));
      },
          sn = function sn(e, n, o) {
        e.disableInput(), Promise.resolve().then(function () {
          return y(n.inputValidator(o, n.validationMessage));
        }).then(function (t) {
          e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : cn(e, n, o);
        });
      },
          un = function un(e, t, n) {
        t.showLoaderOnDeny && Jt(L()), t.preDeny ? Promise.resolve().then(function () {
          return y(t.preDeny(n, t.validationMessage));
        }).then(function (t) {
          !1 === t ? e.hideLoading() : e.closePopup({
            isDenied: !0,
            value: void 0 === t ? n : t
          });
        }) : e.closePopup({
          isDenied: !0,
          value: n
        });
      },
          cn = function cn(e, t, n) {
        t.showLoaderOnConfirm && Jt(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function () {
          return y(t.preConfirm(n, t.validationMessage));
        }).then(function (t) {
          wt(S()) || !1 === t ? e.hideLoading() : Ie(e, void 0 === t ? n : t);
        })) : Ie(e, n);
      },
          ln = ["ArrowRight", "ArrowDown", "Right", "Down"],
          dn = ["ArrowLeft", "ArrowUp", "Left", "Up"],
          pn = ["Escape", "Esc"],
          fn = function fn(t, e, n) {
        var o = Tt.innerParams.get(t);
        o && (o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? mn(t, e, o) : "Tab" === e.key ? hn(e, o) : -1 !== [].concat(ln, dn).indexOf(e.key) ? gn(e.key) : -1 !== pn.indexOf(e.key) && vn(e, o, n));
      },
          mn = function mn(t, e, n) {
        e.isComposing || e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML && -1 === ["textarea", "file"].indexOf(n.input) && (Ft(), e.preventDefault());
      },
          hn = function hn(t, e) {
        for (var n = t.target, o = R(), i = -1, r = 0; r < o.length; r++) {
          if (n === o[r]) {
            i = r;
            break;
          }
        }

        t.shiftKey ? He(0, i, -1) : He(0, i, 1), t.stopPropagation(), t.preventDefault();
      },
          gn = function gn(t) {
        -1 !== [T(), L(), q()].indexOf(document.activeElement) && (t = -1 !== ln.indexOf(t) ? "nextElementSibling" : "previousElementSibling", (t = document.activeElement[t]) && t.focus());
      },
          vn = function vn(t, e, n) {
        Z(e.allowEscapeKey) && (t.preventDefault(), n(Q.esc));
      },
          bn = function bn(e, t, n) {
        t.popup.onclick = function () {
          var t = Tt.innerParams.get(e);
          t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || t.timer || t.input || n(Q.close);
        };
      },
          yn = !1,
          wn = function wn(e) {
        e.popup.onmousedown = function () {
          e.container.onmouseup = function (t) {
            e.container.onmouseup = void 0, t.target === e.container && (yn = !0);
          };
        };
      },
          Cn = function Cn(e) {
        e.container.onmousedown = function () {
          e.popup.onmouseup = function (t) {
            e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (yn = !0);
          };
        };
      },
          kn = function kn(n, o, i) {
        o.container.onclick = function (t) {
          var e = Tt.innerParams.get(n);
          yn ? yn = !1 : t.target === o.container && Z(e.allowOutsideClick) && i(Q.backdrop);
        };
      };

      function An(t, e) {
        var n = function (t) {
          t = "string" == typeof t.template ? document.querySelector(t.template) : t.template;
          if (!t) return {};
          t = t.content || t;
          return We(t), u(Re(t), Ne(t), Ue(t), Fe(t), _e(t), ze(t, Ve));
        }(t);

        return (n = u({}, se, e, n, t)).showClass = u({}, se.showClass, n.showClass), n.hideClass = u({}, se.hideClass, n.hideClass), !1 === t.animation && (n.showClass = {
          popup: "swal2-noanimation",
          backdrop: "swal2-noanimation"
        }, n.hideClass = {}), n;
      }

      function xn(a, s, u) {
        return new Promise(function (t) {
          function e(t) {
            a.closePopup({
              isDismissed: !0,
              dismiss: t
            });
          }

          var n, o, i, r;
          Ce.swalPromiseResolve.set(a, t), s.confirmButton.onclick = function () {
            return e = u, (t = a).disableButtons(), void (e.input ? an(t, e, "confirm") : cn(t, e, !0));
            var t, e;
          }, s.denyButton.onclick = function () {
            return e = u, (t = a).disableButtons(), void (e.returnInputValueOnDeny ? an(t, e, "deny") : un(t, e, !1));
            var t, e;
          }, s.cancelButton.onclick = function () {
            return t = e, a.disableButtons(), void t(Q.cancel);
            var t;
          }, s.closeButton.onclick = function () {
            return e(Q.close);
          }, n = a, r = s, t = e, Tt.innerParams.get(n).toast ? bn(n, r, t) : (wn(r), Cn(r), kn(n, r, t)), o = a, r = u, i = e, (t = te).keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
          }), t.keydownHandlerAdded = !1), r.toast || (t.keydownHandler = function (t) {
            return fn(o, t, i);
          }, t.keydownTarget = r.keydownListenerCapture ? window : A(), t.keydownListenerCapture = r.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture
          }), t.keydownHandlerAdded = !0), r = a, "select" === (t = u).input || "radio" === t.input ? tn(r, t) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(t.input) && (b(t.inputValue) || w(t.inputValue)) && en(r, t), je(u), Pn(te, u, e), On(s, u), setTimeout(function () {
            s.container.scrollTop = 0;
          });
        });
      }

      function Bn(t) {
        var e = {
          popup: A(),
          container: k(),
          content: P(),
          actions: j(),
          confirmButton: T(),
          denyButton: L(),
          cancelButton: q(),
          loader: D(),
          closeButton: V(),
          validationMessage: S(),
          progressSteps: n()
        };
        return Tt.domCache.set(t, e), e;
      }

      var Pn = function Pn(t, e, n) {
        var o = H();
        at(o), e.timer && (t.timeout = new Le(function () {
          n("timer"), delete t.timeout;
        }, e.timer), e.timerProgressBar && (rt(o), setTimeout(function () {
          t.timeout && t.timeout.running && dt(e.timer);
        })));
      },
          On = function On(t, e) {
        if (!e.toast) return Z(e.allowEnterKey) ? void (En(t, e) || He(0, -1, 1)) : Sn();
      },
          En = function En(t, e) {
        return e.focusDeny && wt(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && wt(t.cancelButton) ? (t.cancelButton.focus(), !0) : !(!e.focusConfirm || !wt(t.confirmButton)) && (t.confirmButton.focus(), !0);
      },
          Sn = function Sn() {
        document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur();
      };

      function Tn(t) {
        "function" == typeof t.didDestroy ? t.didDestroy() : "function" == typeof t.onDestroy && t.onDestroy();
      }

      function Ln(t) {
        delete t.params, delete te.keydownHandler, delete te.keydownTarget, qn(Tt), qn(Ce);
      }

      var Dn,
          qn = function qn(t) {
        for (var e in t) {
          t[e] = new WeakMap();
        }
      },
          J = Object.freeze({
        hideLoading: pe,
        disableLoading: pe,
        getInput: function getInput(t) {
          var e = Tt.innerParams.get(t || this);
          return (t = Tt.domCache.get(t || this)) ? et(t.content, e.input) : null;
        },
        close: Ae,
        closePopup: Ae,
        closeModal: Ae,
        closeToast: Ae,
        enableButtons: function enableButtons() {
          Se(this, ["confirmButton", "denyButton", "cancelButton"], !1);
        },
        disableButtons: function disableButtons() {
          Se(this, ["confirmButton", "denyButton", "cancelButton"], !0);
        },
        enableInput: function enableInput() {
          return Te(this.getInput(), !1);
        },
        disableInput: function disableInput() {
          return Te(this.getInput(), !0);
        },
        showValidationMessage: function showValidationMessage(t) {
          var e = Tt.domCache.get(this),
              n = Tt.innerParams.get(this);
          U(e.validationMessage, t), e.validationMessage.className = $["validation-message"], n.customClass && n.customClass.validationMessage && vt(e.validationMessage, n.customClass.validationMessage), rt(e.validationMessage), (e = this.getInput()) && (e.setAttribute("aria-invalid", !0), e.setAttribute("aria-describedBy", $["validation-message"]), nt(e), vt(e, $.inputerror));
        },
        resetValidationMessage: function resetValidationMessage() {
          var t = Tt.domCache.get(this);
          t.validationMessage && at(t.validationMessage), (t = this.getInput()) && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), bt(t, $.inputerror));
        },
        getProgressSteps: function getProgressSteps() {
          return Tt.domCache.get(this).progressSteps;
        },
        _main: function _main(t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          return ae(u({}, e, t)), te.currentInstance && te.currentInstance._destroy(), te.currentInstance = this, qe(t = An(t, e)), Object.freeze(t), te.timeout && (te.timeout.stop(), delete te.timeout), clearTimeout(te.restoreFocusTimeout), e = Bn(this), Ut(this, t), Tt.innerParams.set(this, t), xn(this, e, t);
        },
        update: function update(e) {
          var t = A(),
              n = Tt.innerParams.get(this);
          if (!t || F(t, n.hideClass.popup)) return W("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          var o = {};
          Object.keys(e).forEach(function (t) {
            Mn.isUpdatableParameter(t) ? o[t] = e[t] : W('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'));
          }), n = u({}, n, o), Ut(this, n), Tt.innerParams.set(this, n), Object.defineProperties(this, {
            params: {
              value: u({}, this.params, e),
              writable: !1,
              enumerable: !0
            }
          });
        },
        _destroy: function _destroy() {
          var t = Tt.domCache.get(this),
              e = Tt.innerParams.get(this);
          e && (t.popup && te.swalCloseEventFinishedCallback && (te.swalCloseEventFinishedCallback(), delete te.swalCloseEventFinishedCallback), te.deferDisposalTimer && (clearTimeout(te.deferDisposalTimer), delete te.deferDisposalTimer), Tn(e), Ln(this));
        }
      }),
          jn = function () {
        function i() {
          if (a(this, i), "undefined" != typeof window) {
            "undefined" == typeof Promise && K("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), Dn = this;

            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
              e[n] = arguments[n];
            }

            var o = Object.freeze(this.constructor.argsToParams(e));
            Object.defineProperties(this, {
              params: {
                value: o,
                writable: !1,
                enumerable: !0,
                configurable: !0
              }
            });
            o = this._main(this.params);
            Tt.promise.set(this, o);
          }
        }

        return s(i, [{
          key: "then",
          value: function value(t) {
            return Tt.promise.get(this).then(t);
          }
        }, {
          key: "finally",
          value: function value(t) {
            return Tt.promise.get(this)["finally"](t);
          }
        }]), i;
      }();

      u(jn.prototype, J), u(jn, de), Object.keys(J).forEach(function (t) {
        jn[t] = function () {
          if (Dn) return Dn[t].apply(Dn, arguments);
        };
      }), jn.DismissReason = Q, jn.version = "10.16.5";
      var Mn = jn;
      return Mn["default"] = Mn;
    }), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
    "undefined" != typeof document && function (e, t) {
      var n = e.createElement("style");
      if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
    }(document, ".swal2-popup.swal2-toast{flex-direction:column;align-items:stretch;width:auto;padding:1.25em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;margin:0 .625em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container{padding:.625em 0 0}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex:1;flex-basis:auto!important;align-self:stretch;width:auto;height:2.2em;height:auto;margin:0 .3125em;margin-top:.3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");
    /***/
  },

  /***/
  "./node_modules/sweetalert2/src/sweetalert2.scss":
  /*!*******************************************************!*\
    !*** ./node_modules/sweetalert2/src/sweetalert2.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSweetalert2SrcSweetalert2Scss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".swal2-popup.swal2-toast {\n  flex-direction: column;\n  align-items: stretch;\n  width: auto;\n  padding: 1.25em;\n  overflow-y: hidden;\n  background: #fff;\n  box-shadow: 0 0 0.625em #d9d9d9;\n}\n.swal2-popup.swal2-toast .swal2-header {\n  flex-direction: row;\n  padding: 0;\n}\n.swal2-popup.swal2-toast .swal2-title {\n  flex-grow: 1;\n  justify-content: flex-start;\n  margin: 0 0.625em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-loading {\n  justify-content: center;\n}\n.swal2-popup.swal2-toast .swal2-input {\n  height: 2em;\n  margin: 0.3125em auto;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-validation-message {\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-footer {\n  margin: 0.5em 0 0;\n  padding: 0.5em 0 0;\n  font-size: 0.8em;\n}\n.swal2-popup.swal2-toast .swal2-close {\n  position: static;\n  width: 0.8em;\n  height: 0.8em;\n  line-height: 0.8;\n}\n.swal2-popup.swal2-toast .swal2-content {\n  justify-content: flex-start;\n  margin: 0 0.625em;\n  padding: 0;\n  font-size: 1em;\n  text-align: initial;\n}\n.swal2-popup.swal2-toast .swal2-html-container {\n  padding: 0.625em 0 0;\n}\n.swal2-popup.swal2-toast .swal2-html-container:empty {\n  padding: 0;\n}\n.swal2-popup.swal2-toast .swal2-icon {\n  width: 2em;\n  min-width: 2em;\n  height: 2em;\n  margin: 0 0.5em 0 0;\n}\n.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 1.8em;\n  font-weight: bold;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-popup.swal2-toast .swal2-icon .swal2-icon-content {\n    font-size: 0.25em;\n  }\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  top: 0.875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-actions {\n  flex: 1;\n  flex-basis: auto !important;\n  align-self: stretch;\n  width: auto;\n  height: 2.2em;\n  height: auto;\n  margin: 0 0.3125em;\n  margin-top: 0.3125em;\n  padding: 0;\n}\n.swal2-popup.swal2-toast .swal2-styled {\n  margin: 0.125em 0.3125em;\n  padding: 0.3125em 0.625em;\n  font-size: 1em;\n}\n.swal2-popup.swal2-toast .swal2-styled:focus {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-popup.swal2-toast .swal2-success {\n  border-color: #a5dc86;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 1.6em;\n  height: 3em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.8em;\n  left: -0.5em;\n  transform: rotate(-45deg);\n  transform-origin: 2em 2em;\n  border-radius: 4em 0 0 4em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.25em;\n  left: 0.9375em;\n  transform-origin: 0 1.5em;\n  border-radius: 0 4em 4em 0;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n  width: 2em;\n  height: 2em;\n}\n.swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n  top: 0;\n  left: 0.4375em;\n  width: 0.4375em;\n  height: 2.6875em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line] {\n  height: 0.3125em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 1.125em;\n  left: 0.1875em;\n  width: 0.75em;\n}\n.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long] {\n  top: 0.9375em;\n  right: 0.1875em;\n  width: 1.375em;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-toast-animate-success-line-tip 0.75s;\n          animation: swal2-toast-animate-success-line-tip 0.75s;\n}\n.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-toast-animate-success-line-long 0.75s;\n          animation: swal2-toast-animate-success-line-long 0.75s;\n}\n.swal2-popup.swal2-toast.swal2-show {\n  -webkit-animation: swal2-toast-show 0.5s;\n          animation: swal2-toast-show 0.5s;\n}\n.swal2-popup.swal2-toast.swal2-hide {\n  -webkit-animation: swal2-toast-hide 0.1s forwards;\n          animation: swal2-toast-hide 0.1s forwards;\n}\n.swal2-container {\n  display: flex;\n  position: fixed;\n  z-index: 1060;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  padding: 0.625em;\n  overflow-x: hidden;\n  transition: background-color 0.1s;\n  -webkit-overflow-scrolling: touch;\n}\n.swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation {\n  background: rgba(0, 0, 0, 0.4);\n}\n.swal2-container.swal2-backdrop-hide {\n  background: transparent !important;\n}\n.swal2-container.swal2-top {\n  align-items: flex-start;\n}\n.swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-center {\n  align-items: center;\n}\n.swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n  align-items: center;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n  align-items: center;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-bottom {\n  align-items: flex-end;\n}\n.swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n.swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.swal2-container.swal2-bottom > :first-child, .swal2-container.swal2-bottom-start > :first-child, .swal2-container.swal2-bottom-left > :first-child, .swal2-container.swal2-bottom-end > :first-child, .swal2-container.swal2-bottom-right > :first-child {\n  margin-top: auto;\n}\n.swal2-container.swal2-grow-fullscreen > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-self: stretch;\n  justify-content: center;\n}\n.swal2-container.swal2-grow-row > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-content: center;\n  justify-content: center;\n}\n.swal2-container.swal2-grow-column {\n  flex: 1;\n  flex-direction: column;\n}\n.swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n  align-items: center;\n}\n.swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n  align-items: flex-start;\n}\n.swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n  align-items: flex-end;\n}\n.swal2-container.swal2-grow-column > .swal2-modal {\n  display: flex !important;\n  flex: 1;\n  align-content: center;\n  justify-content: center;\n}\n.swal2-container.swal2-no-transition {\n  transition: none !important;\n}\n.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen) > .swal2-modal {\n  margin: auto;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-container .swal2-modal {\n    margin: 0 !important;\n  }\n}\n.swal2-popup {\n  display: none;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: column;\n  justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n}\n.swal2-popup:focus {\n  outline: none;\n}\n.swal2-popup.swal2-loading {\n  overflow-y: hidden;\n}\n.swal2-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 1.8em;\n}\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0 0 0.4em;\n  padding: 0;\n  color: #595959;\n  font-size: 1.875em;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n.swal2-actions {\n  display: flex;\n  z-index: 1;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin: 1.25em auto 0;\n  padding: 0;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n  opacity: 0.4;\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));\n}\n.swal2-actions:not(.swal2-loading) .swal2-styled:active {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));\n}\n.swal2-loader {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  width: 2.2em;\n  height: 2.2em;\n  margin: 0 1.875em;\n  -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n          animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n  border-width: 0.25em;\n  border-style: solid;\n  border-radius: 100%;\n  border-color: #2778c4 transparent #2778c4 transparent;\n}\n.swal2-styled {\n  margin: 0.3125em;\n  padding: 0.625em 1.1em;\n  box-shadow: none;\n  font-weight: 500;\n}\n.swal2-styled:not([disabled]) {\n  cursor: pointer;\n}\n.swal2-styled.swal2-confirm {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #2778c4;\n  color: #fff;\n  font-size: 1em;\n}\n.swal2-styled.swal2-deny {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #d14529;\n  color: #fff;\n  font-size: 1em;\n}\n.swal2-styled.swal2-cancel {\n  border: 0;\n  border-radius: 0.25em;\n  background: initial;\n  background-color: #757575;\n  color: #fff;\n  font-size: 1em;\n}\n.swal2-styled:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-styled::-moz-focus-inner {\n  border: 0;\n}\n.swal2-footer {\n  justify-content: center;\n  margin: 1.25em 0 0;\n  padding: 1em 0 0;\n  border-top: 1px solid #eee;\n  color: #545454;\n  font-size: 1em;\n}\n.swal2-timer-progress-bar-container {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 0.25em;\n  overflow: hidden;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.swal2-timer-progress-bar {\n  width: 100%;\n  height: 0.25em;\n  background: rgba(0, 0, 0, 0.2);\n}\n.swal2-image {\n  max-width: 100%;\n  margin: 1.25em auto;\n}\n.swal2-close {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  overflow: hidden;\n  transition: color 0.1s ease-out;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  color: #cccccc;\n  font-family: serif;\n  font-size: 2.5em;\n  line-height: 1.2;\n  cursor: pointer;\n}\n.swal2-close:hover {\n  transform: none;\n  background: transparent;\n  color: #f27474;\n}\n.swal2-close:focus {\n  outline: none;\n  box-shadow: inset 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-close::-moz-focus-inner {\n  border: 0;\n}\n.swal2-content {\n  z-index: 1;\n  justify-content: center;\n  margin: 0;\n  padding: 0 1.6em;\n  color: #545454;\n  font-size: 1.125em;\n  font-weight: normal;\n  line-height: normal;\n  text-align: center;\n  word-wrap: break-word;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea,\n.swal2-select,\n.swal2-radio,\n.swal2-checkbox {\n  margin: 1em auto;\n}\n.swal2-input,\n.swal2-file,\n.swal2-textarea {\n  box-sizing: border-box;\n  width: 100%;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  border: 1px solid #d9d9d9;\n  border-radius: 0.1875em;\n  background: inherit;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-input.swal2-inputerror,\n.swal2-file.swal2-inputerror,\n.swal2-textarea.swal2-inputerror {\n  border-color: #f27474 !important;\n  box-shadow: 0 0 2px #f27474 !important;\n}\n.swal2-input:focus,\n.swal2-file:focus,\n.swal2-textarea:focus {\n  border: 1px solid #b4dbed;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(100, 150, 200, 0.5);\n}\n.swal2-input::-webkit-input-placeholder,\n.swal2-file::-webkit-input-placeholder,\n.swal2-textarea::-webkit-input-placeholder {\n  color: #cccccc;\n}\n.swal2-input::-moz-placeholder,\n.swal2-file::-moz-placeholder,\n.swal2-textarea::-moz-placeholder {\n  color: #cccccc;\n}\n.swal2-input::-ms-input-placeholder,\n.swal2-file::-ms-input-placeholder,\n.swal2-textarea::-ms-input-placeholder {\n  color: #cccccc;\n}\n.swal2-input::placeholder,\n.swal2-file::placeholder,\n.swal2-textarea::placeholder {\n  color: #cccccc;\n}\n.swal2-range {\n  margin: 1em auto;\n  background: #fff;\n}\n.swal2-range input {\n  width: 80%;\n}\n.swal2-range output {\n  width: 20%;\n  color: inherit;\n  font-weight: 600;\n  text-align: center;\n}\n.swal2-range input,\n.swal2-range output {\n  height: 2.625em;\n  padding: 0;\n  font-size: 1.125em;\n  line-height: 2.625em;\n}\n.swal2-input {\n  height: 2.625em;\n  padding: 0 0.75em;\n}\n.swal2-input[type=number] {\n  max-width: 10em;\n}\n.swal2-file {\n  background: inherit;\n  font-size: 1.125em;\n}\n.swal2-textarea {\n  height: 6.75em;\n  padding: 0.75em;\n}\n.swal2-select {\n  min-width: 50%;\n  max-width: 100%;\n  padding: 0.375em 0.625em;\n  background: inherit;\n  color: inherit;\n  font-size: 1.125em;\n}\n.swal2-radio,\n.swal2-checkbox {\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: inherit;\n}\n.swal2-radio label,\n.swal2-checkbox label {\n  margin: 0 0.6em;\n  font-size: 1.125em;\n}\n.swal2-radio input,\n.swal2-checkbox input {\n  margin: 0 0.4em;\n}\n.swal2-input-label {\n  display: flex;\n  justify-content: center;\n  margin: 1em auto;\n}\n.swal2-validation-message {\n  align-items: center;\n  justify-content: center;\n  margin: 0 -2.7em;\n  padding: 0.625em;\n  overflow: hidden;\n  background: #f0f0f0;\n  color: #666666;\n  font-size: 1em;\n  font-weight: 300;\n}\n.swal2-validation-message::before {\n  content: \"!\";\n  display: inline-block;\n  width: 1.5em;\n  min-width: 1.5em;\n  height: 1.5em;\n  margin: 0 0.625em;\n  border-radius: 50%;\n  background-color: #f27474;\n  color: #fff;\n  font-weight: 600;\n  line-height: 1.5em;\n  text-align: center;\n}\n.swal2-icon {\n  position: relative;\n  box-sizing: content-box;\n  justify-content: center;\n  width: 5em;\n  height: 5em;\n  margin: 1.25em auto 1.875em;\n  border: 0.25em solid transparent;\n  border-radius: 50%;\n  border-color: #000;\n  font-family: inherit;\n  line-height: 5em;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.swal2-icon .swal2-icon-content {\n  display: flex;\n  align-items: center;\n  font-size: 3.75em;\n}\n.swal2-icon.swal2-error {\n  border-color: #f27474;\n  color: #f27474;\n}\n.swal2-icon.swal2-error .swal2-x-mark {\n  position: relative;\n  flex-grow: 1;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line] {\n  display: block;\n  position: absolute;\n  top: 2.3125em;\n  width: 2.9375em;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #f27474;\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left] {\n  left: 1.0625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right] {\n  right: 1em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-error.swal2-icon-show {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s;\n}\n.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark {\n  -webkit-animation: swal2-animate-error-x-mark 0.5s;\n          animation: swal2-animate-error-x-mark 0.5s;\n}\n.swal2-icon.swal2-warning {\n  border-color: #facea8;\n  color: #f8bb86;\n}\n.swal2-icon.swal2-info {\n  border-color: #9de0f6;\n  color: #3fc3ee;\n}\n.swal2-icon.swal2-question {\n  border-color: #c9dae1;\n  color: #87adbd;\n}\n.swal2-icon.swal2-success {\n  border-color: #a5dc86;\n  color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line] {\n  position: absolute;\n  width: 3.75em;\n  height: 7.5em;\n  transform: rotate(45deg);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left] {\n  top: -0.4375em;\n  left: -2.0635em;\n  transform: rotate(-45deg);\n  transform-origin: 3.75em 3.75em;\n  border-radius: 7.5em 0 0 7.5em;\n}\n.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right] {\n  top: -0.6875em;\n  left: 1.875em;\n  transform: rotate(-45deg);\n  transform-origin: 0 3.75em;\n  border-radius: 0 7.5em 7.5em 0;\n}\n.swal2-icon.swal2-success .swal2-success-ring {\n  position: absolute;\n  z-index: 2;\n  top: -0.25em;\n  left: -0.25em;\n  box-sizing: content-box;\n  width: 100%;\n  height: 100%;\n  border: 0.25em solid rgba(165, 220, 134, 0.3);\n  border-radius: 50%;\n}\n.swal2-icon.swal2-success .swal2-success-fix {\n  position: absolute;\n  z-index: 1;\n  top: 0.5em;\n  left: 1.625em;\n  width: 0.4375em;\n  height: 5.625em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line] {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 0.3125em;\n  border-radius: 0.125em;\n  background-color: #a5dc86;\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip] {\n  top: 2.875em;\n  left: 0.8125em;\n  width: 1.5625em;\n  transform: rotate(45deg);\n}\n.swal2-icon.swal2-success [class^=swal2-success-line][class$=long] {\n  top: 2.375em;\n  right: 0.5em;\n  width: 2.9375em;\n  transform: rotate(-45deg);\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s;\n}\n.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in;\n}\n.swal2-progress-steps {\n  flex-wrap: wrap;\n  align-items: center;\n  max-width: 100%;\n  margin: 0 0 1.25em;\n  padding: 0;\n  background: inherit;\n  font-weight: 600;\n}\n.swal2-progress-steps li {\n  display: inline-block;\n  position: relative;\n}\n.swal2-progress-steps .swal2-progress-step {\n  z-index: 20;\n  flex-shrink: 0;\n  width: 2em;\n  height: 2em;\n  border-radius: 2em;\n  background: #2778c4;\n  color: #fff;\n  line-height: 2em;\n  text-align: center;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step {\n  background: #2778c4;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background: #add8e6;\n  color: #fff;\n}\n.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line {\n  background: #add8e6;\n}\n.swal2-progress-steps .swal2-progress-step-line {\n  z-index: 10;\n  flex-shrink: 0;\n  width: 2.5em;\n  height: 0.4em;\n  margin: 0 -1px;\n  background: #2778c4;\n}\n[class^=swal2] {\n  -webkit-tap-highlight-color: transparent;\n}\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s;\n}\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards;\n}\n.swal2-noanimation {\n  transition: none;\n}\n.swal2-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n.swal2-rtl .swal2-close {\n  right: auto;\n  left: 0;\n}\n.swal2-rtl .swal2-timer-progress-bar {\n  right: 0;\n  left: auto;\n}\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important;\n  }\n  .swal2-range output {\n    display: none;\n  }\n}\n@-webkit-keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@keyframes swal2-toast-show {\n  0% {\n    transform: translateY(-0.625em) rotateZ(2deg);\n  }\n  33% {\n    transform: translateY(0) rotateZ(-2deg);\n  }\n  66% {\n    transform: translateY(0.3125em) rotateZ(2deg);\n  }\n  100% {\n    transform: translateY(0) rotateZ(0deg);\n  }\n}\n@-webkit-keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@keyframes swal2-toast-hide {\n  100% {\n    transform: rotateZ(1deg);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-tip {\n  0% {\n    top: 0.5625em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 0.125em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 0.625em;\n    left: -0.25em;\n    width: 1.625em;\n  }\n  84% {\n    top: 1.0625em;\n    left: 0.75em;\n    width: 0.5em;\n  }\n  100% {\n    top: 1.125em;\n    left: 0.1875em;\n    width: 0.75em;\n  }\n}\n@-webkit-keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@keyframes swal2-toast-animate-success-line-long {\n  0% {\n    top: 1.625em;\n    right: 1.375em;\n    width: 0;\n  }\n  65% {\n    top: 1.25em;\n    right: 0.9375em;\n    width: 0;\n  }\n  84% {\n    top: 0.9375em;\n    right: 0;\n    width: 1.125em;\n  }\n  100% {\n    top: 0.9375em;\n    right: 0.1875em;\n    width: 1.375em;\n  }\n}\n@-webkit-keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes swal2-show {\n  0% {\n    transform: scale(0.7);\n  }\n  45% {\n    transform: scale(1.05);\n  }\n  80% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@keyframes swal2-hide {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 1.1875em;\n    left: 0.0625em;\n    width: 0;\n  }\n  54% {\n    top: 1.0625em;\n    left: 0.125em;\n    width: 0;\n  }\n  70% {\n    top: 2.1875em;\n    left: -0.375em;\n    width: 3.125em;\n  }\n  84% {\n    top: 3em;\n    left: 1.3125em;\n    width: 1.0625em;\n  }\n  100% {\n    top: 2.8125em;\n    left: 0.8125em;\n    width: 1.5625em;\n  }\n}\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  65% {\n    top: 3.375em;\n    right: 2.875em;\n    width: 0;\n  }\n  84% {\n    top: 2.1875em;\n    right: 0;\n    width: 3.4375em;\n  }\n  100% {\n    top: 2.375em;\n    right: 0.5em;\n    width: 2.9375em;\n  }\n}\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  50% {\n    margin-top: 1.625em;\n    transform: scale(0.4);\n    opacity: 0;\n  }\n  80% {\n    margin-top: -0.375em;\n    transform: scale(1.15);\n  }\n  100% {\n    margin-top: 0;\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@keyframes swal2-animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes swal2-rotate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  overflow: hidden;\n}\nbody.swal2-height-auto {\n  height: auto !important;\n}\nbody.swal2-no-backdrop .swal2-container {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  max-width: calc(100% - 0.625em * 2);\n  background-color: transparent !important;\n}\nbody.swal2-no-backdrop .swal2-container > .swal2-modal {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-start, body.swal2-no-backdrop .swal2-container.swal2-top-left {\n  top: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-top-end, body.swal2-no-backdrop .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-start, body.swal2-no-backdrop .swal2-container.swal2-center-left {\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-center-end, body.swal2-no-backdrop .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-start, body.swal2-no-backdrop .swal2-container.swal2-bottom-left {\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-no-backdrop .swal2-container.swal2-bottom-end, body.swal2-no-backdrop .swal2-container.swal2-bottom-right {\n  right: 0;\n  bottom: 0;\n}\n@media print {\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n    overflow-y: scroll !important;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) > [aria-hidden=true] {\n    display: none;\n  }\n  body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container {\n    position: static !important;\n  }\n}\nbody.swal2-toast-shown .swal2-container {\n  background-color: transparent;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-end, body.swal2-toast-shown .swal2-container.swal2-top-right {\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n}\nbody.swal2-toast-shown .swal2-container.swal2-top-start, body.swal2-toast-shown .swal2-container.swal2-top-left {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-start, body.swal2-toast-shown .swal2-container.swal2-center-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-center-end, body.swal2-toast-shown .swal2-container.swal2-center-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  transform: translateY(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-start, body.swal2-toast-shown .swal2-container.swal2-bottom-left {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\nbody.swal2-toast-shown .swal2-container.swal2-bottom-end, body.swal2-toast-shown .swal2-container.swal2-bottom-right {\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHNjc3NcXF90b2FzdHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHZhcmlhYmxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zd2VldGFsZXJ0Mi5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHNjc3NcXF9wb2x5ZmlsbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHNjc3NcXF90b2FzdHMtYW5pbWF0aW9ucy5zY3NzIiwibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL25vZGVfbW9kdWxlc1xcc3dlZXRhbGVydDJcXHNyY1xcc2Nzc1xcX2FuaW1hdGlvbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9zd2VldGFsZXJ0Mi9zcmMvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9ub2RlX21vZHVsZXNcXHN3ZWV0YWxlcnQyXFxzcmNcXHNjc3NcXF9ib2R5LnNjc3MiLCJub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvc3JjL0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvbm9kZV9tb2R1bGVzXFxzd2VldGFsZXJ0Mlxcc3JjXFxzY3NzXFxfdG9hc3RzLWJvZHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQzJOZ0I7RUQxTmhCLGVDMk5rQjtFRDFObEIsa0JBQUE7RUFDQSxnQkNQa0I7RURRbEIsK0JDa05xQjtBQ2xOekI7QUZFSTtFQUNFLG1CQUFBO0VBQ0EsVUNxTnVCO0FDck43QjtBRkdJO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJDZ05xQjtFRC9NckIsY0NnTndCO0FDak45QjtBRklJO0VBQ0UsdUJBQUE7QUVGTjtBRktJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0MyTXdCO0FDOU05QjtBRk1JO0VBQ0UsY0N3TTZCO0FDNU1uQztBRk9JO0VBQ0UsaUJDdU1zQjtFRHRNdEIsa0JDc01zQjtFRHJNdEIsZ0JDdU15QjtBQzVNL0I7QUZRSTtFQUNFLGdCQUFBO0VBQ0EsWUNnTDJCO0VEL0szQixhQ2dMNEI7RUQvSzVCLGdCQ2dMaUM7QUN0THZDO0FGU0k7RUFDRSwyQkFBQTtFQUNBLGlCQ2tMdUI7RURqTHZCLFVDa0x3QjtFRGpMeEIsY0NrTDBCO0VEakwxQixtQkFBQTtBRVBOO0FGVUk7RUFDRSxvQkFBQTtBRVJOO0FGVU07RUFDRSxVQUFBO0FFUlI7QUZZSTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FFVk47QUZZTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQzBKcUI7RUR6SnJCLGlCQUFBO0FFVlI7QUNoRUU7RUhzRUk7SUFPSSxpQkFBQTtFRVRSO0FBQ0Y7QUZhUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FFWFY7QUZnQlE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBRWRWO0FGZ0JVO0VBQ0UsY0FBQTtBRWRaO0FGaUJVO0VBQ0UsZUFBQTtBRWZaO0FGcUJJO0VBQ0UsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBRW5CTjtBRnNCSTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQ2tIMEI7QUN0SWhDO0FGc0JNO0VBQ0UsOERDZ0g4QjtBQ3BJdEM7QUZ3Qkk7RUFDRSxxQkN4RlU7QUNrRWhCO0FGd0JNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUV0QlI7QUZ3QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBRXRCVjtBRnlCUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBRXZCVjtBRjJCTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FFekJSO0FGNEJNO0VBQ0UsTUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUUxQlI7QUY2Qk07RUFDRSxnQkFBQTtBRTNCUjtBRjZCUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRTNCVjtBRjhCUTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRTVCVjtBRmtDVTtFQUNFLDZEQUFBO1VBQUEscURBQUE7QUVoQ1o7QUZtQ1U7RUFDRSw4REFBQTtVQUFBLHNEQUFBO0FFakNaO0FGdUNJO0VBQ0Usd0NDb0J1QjtVRHBCdkIsZ0NDb0J1QjtBQ3pEN0I7QUZ3Q0k7RUFDRSxpRENpQnVCO1VEakJ2Qix5Q0NpQnVCO0FDdkQ3QjtBRWpLQTtFQUVFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkhQd0I7RUdReEIsa0JBQUE7RUFDQSxpQ0hhMEI7RUdWMUIsaUNBQUE7QUZpS0Y7QUUvSkU7RUFFRSw4QkhLYTtBQzJKakI7QUU3SkU7RUFDRSxrQ0FBQTtBRitKSjtBRTVKRTtFQUNFLHVCQUFBO0FGOEpKO0FFM0pFO0VBRUUsdUJBQUE7RUFDQSwyQkFBQTtBRjRKSjtBRXpKRTtFQUVFLHVCQUFBO0VBQ0EseUJBQUE7QUYwSko7QUV2SkU7RUFDRSxtQkFBQTtBRnlKSjtBRXRKRTtFQUVFLG1CQUFBO0VBQ0EsMkJBQUE7QUZ1Sko7QUVwSkU7RUFFRSxtQkFBQTtFQUNBLHlCQUFBO0FGcUpKO0FFbEpFO0VBQ0UscUJBQUE7QUZvSko7QUVqSkU7RUFFRSxxQkFBQTtFQUNBLDJCQUFBO0FGa0pKO0FFL0lFO0VBRUUscUJBQUE7RUFDQSx5QkFBQTtBRmdKSjtBRTdJRTtFQUtFLGdCQUFBO0FGMklKO0FFeElFO0VBQ0Usd0JBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRjBJSjtBRXZJRTtFQUNFLHdCQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUZ5SUo7QUV0SUU7RUFDRSxPQUFBO0VBQ0Esc0JBQUE7QUZ3SUo7QUV0SUk7RUFHRSxtQkFBQTtBRnNJTjtBRW5JSTtFQU1FLHVCQUFBO0FGZ0lOO0FFN0hJO0VBTUUscUJBQUE7QUYwSE47QUV2SEk7RUFDRSx3QkFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FGeUhOO0FFckhFO0VBQ0UsMkJBQUE7QUZ1SEo7QUVyR0k7RUFDRSxZQUFBO0FGdUdOO0FDaFFFO0VDOEpFO0lBQ0Usb0JBQUE7RUZxR0o7QUFDRjtBRWpHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdIbktZO0VHb0taLGVBQUE7RUFDQSxlSHBLYztFR3FLZCxZSHBLYTtFR3FLYixrQkhwS29CO0VHcUtwQixnQkhoTG9CO0VHaUxwQixvQkgzSlc7RUc0SlgsZUgzSmdCO0FDK1BsQjtBRWxHRTtFQUNFLGFBQUE7QUZvR0o7QUVqR0U7RUFDRSxrQkFBQTtBRm1HSjtBRS9GQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JIbktxQjtBQ3FRdkI7QUUvRkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkhwSm1CO0VHcUpuQixVQUFBO0VBQ0EsY0hySmtCO0VHc0psQixrQkhySnNCO0VHc0p0QixnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBRmtHRjtBRS9GQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxlSHJEd0I7RUdzRHhCLG1CSHJEMEI7RUdzRDFCLHVCSHJEOEI7RUdzRDlCLFdIckRvQjtFR3NEcEIscUJIckRxQjtFR3NEckIsVUhyRHNCO0FDdUp4QjtBRTlGTTtFQUNFLFlBQUE7QUZnR1I7QUU3Rk07RUFDRSx5RUFBQTtBRitGUjtBRTVGTTtFQUNFLHlFQUFBO0FGOEZSO0FFeEZBO0VBQ0UsYUFBQTtFQUNBLG1CSHBDeUI7RUdxQ3pCLHVCSHBDNkI7RUdxQzdCLFlIcENtQjtFR3FDbkIsYUhwQ29CO0VHcUNwQixpQkhwQ29CO0VHcUNwQixzRUhwQ3VCO1VHb0N2Qiw4REhwQ3VCO0VHcUN2QixvQkhwQzBCO0VHcUMxQixtQkhwQzBCO0VHcUMxQixtQkhwQzJCO0VHcUMzQixxREhwQzBCO0FDK0g1QjtBRXhGQTtFQUNFLGdCSDVEb0I7RUc2RHBCLHNCSDVEcUI7RUc2RHJCLGdCSDVEd0I7RUc2RHhCLGdCSDVEeUI7QUN1SjNCO0FFekZFO0VBQ0UsZUFBQTtBRjJGSjtBRXhGRTtFQUVFLFNIOUYwQjtFRytGMUIscUJIOUZpQztFRytGakMsbUJBQUE7RUFDQSx5QkgvRm9DO0VHZ0dwQyxXSDNRa0I7RUc0UWxCLGNIL0Y2QjtBQ3dMakM7QUV0RkU7RUFFRSxTSGhHdUI7RUdpR3ZCLHFCSGhHOEI7RUdpRzlCLG1CQUFBO0VBQ0EseUJIakdpQztFR2tHakMsV0hyUmtCO0VHc1JsQixjSGpHMEI7QUN3TDlCO0FFcEZFO0VBRUUsU0hsR3lCO0VHbUd6QixxQkhsR2dDO0VHbUdoQyxtQkFBQTtFQUNBLHlCSG5HbUM7RUdvR25DLFdIL1JrQjtFR2dTbEIsY0huRzRCO0FDd0xoQztBRWxGRTtFQUNFLGFIOUZ5QjtFR2dHekIsOENIOUY0QjtBQ2lMaEM7QUVoRkU7RUFDRSxTQUFBO0FGa0ZKO0FFOUVBO0VBQ0UsdUJBQUE7RUFDQSxrQkhyTG9CO0VHc0xwQixnQkhyTHFCO0VHc0xyQiwwQkFBQTtFQUNBLGNIckxtQjtFR3NMbkIsY0hyTHVCO0FDc1F6QjtBRTlFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0gxTGdDO0VHMkxoQyxnQkFBQTtFQUNBLCtCSG5Ub0I7RUdvVHBCLDhCSHBUb0I7QUNxWXRCO0FFOUVBO0VBQ0UsV0FBQTtFQUNBLGNIbE1nQztFR21NaEMsOEJIbE1vQztBQ21SdEM7QUU5RUE7RUFDRSxlQUFBO0VBQ0EsbUJIMVJtQjtBQzJXckI7QUU5RUE7RUFDRSxrQkhuTTRCO0VHb001QixVQUFBO0VBQ0EsTUhwTXVCO0VHcU12QixRSHJNdUI7RUdzTXZCLG1CSDVNK0I7RUc2TS9CLHVCSDVNbUM7RUc2TW5DLFlINU15QjtFRzZNekIsYUg1TTBCO0VHNk0xQixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkgzTThCO0VHNE05QixZSDNNMEI7RUc0TTFCLGtCSC9Vb0I7RUdpVnBCLHVCSDNNOEI7RUc0TTlCLGNIM015QjtFRzRNekIsa0JIM00rQjtFRzRNL0IsZ0JIM002QjtFRzRNN0IsZ0JIdE4rQjtFR3VOL0IsZUFBQTtBRmdGRjtBRTlFRTtFQUNFLGVIN01pQztFRzhNakMsdUJINU1rQztFRzZNbEMsY0g1VFU7QUM0WWQ7QUU3RUU7RUFDRSxhSDlNK0I7RUcrTS9CLG9ESDlNa0M7QUM2UnRDO0FFNUVFO0VBQ0UsU0FBQTtBRjhFSjtBRTFFQTtFQUNFLFVBQUE7RUFDQSx1Qkg3VDhCO0VHOFQ5QixTSDdUcUI7RUc4VHJCLGdCSDdUc0I7RUc4VHRCLGNIN1RvQjtFRzhUcEIsa0JIN1R3QjtFRzhUeEIsbUJIN1QwQjtFRzhUMUIsbUJIN1QwQjtFRzhUMUIsa0JIN1R5QjtFRzhUekIscUJIN1R3QjtBQzBZMUI7QUUxRUE7Ozs7OztFQU1FLGdCSG5VbUI7QUNnWnJCO0FFMUVBOzs7RUFHRSxzQkFBQTtFQUNBLFdIelVrQjtFRzBVbEIsOENIalV1QjtFR2tVdkIseUJIeFVtQjtFR3lVbkIsdUJIeFUwQjtFR3lVMUIsbUJIdFV1QjtFR3VVdkIsK0NIelV1QjtFRzBVdkIsY0h2VWtCO0VHd1VsQixrQkgxVXNCO0FDdVp4QjtBRTNFRTs7O0VBQ0UsZ0NBQUE7RUFDQSxzQ0FBQTtBRitFSjtBRTVFRTs7O0VBQ0UseUJINVV1QjtFRzZVdkIsYUg1VXdCO0VHNlV4Qiw4Q0g1VTJCO0FDNFovQjtBRTdFRTs7O0VBQ0UsY0FBQTtBRmlGSjtBRWxGRTs7O0VBQ0UsY0FBQTtBRmlGSjtBRWxGRTs7O0VBQ0UsY0FBQTtBRmlGSjtBRWxGRTs7O0VBQ0UsY0FBQTtBRmlGSjtBRTdFQTtFQUNFLGdCSHBXbUI7RUdxV25CLGdCSHhhb0I7QUN3ZnRCO0FFOUVFO0VBQ0UsVUFBQTtBRmdGSjtBRTdFRTtFQUNFLFVBQUE7RUFDQSxjSHBXZ0I7RUdxV2hCLGdCQUFBO0VBQ0Esa0JBQUE7QUYrRUo7QUU1RUU7O0VBRUUsZUhsWGlCO0VHbVhqQixVQUFBO0VBQ0Esa0JIL1dvQjtFR2dYcEIsb0JIclhpQjtBQ21jckI7QUUxRUE7RUFDRSxlSDFYbUI7RUcyWG5CLGlCSDFYb0I7QUN1Y3RCO0FFM0VFO0VBQ0UsZUFBQTtBRjZFSjtBRXpFQTtFQUNFLG1CSDdYdUI7RUc4WHZCLGtCSC9Yc0I7QUMyY3hCO0FFekVBO0VBQ0UsY0h4WHNCO0VHeVh0QixlSHhYdUI7QUNvY3pCO0FFekVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG1CSDFZdUI7RUcyWXZCLGNIMVlrQjtFRzJZbEIsa0JIN1lzQjtBQ3lkeEI7QUV6RUE7O0VBRUUsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCSDlkb0I7RUcrZHBCLGNIblprQjtBQytkcEI7QUUxRUU7O0VBQ0UsZUFBQTtFQUNBLGtCSHpab0I7QUNzZXhCO0FFMUVFOztFQUNFLGVBQUE7QUY2RUo7QUV6RUE7RUFDRSxhQUFBO0VBQ0EsdUJIblprQztFR29abEMsZ0JIclp5QjtBQ2llM0I7QUV6RUE7RUFDRSxtQkhyWnFDO0VHc1pyQyx1QkhyWnlDO0VHc1p6QyxnQkhyWmdDO0VHc1poQyxnQkhyWmlDO0VHc1pqQyxnQkFBQTtFQUNBLG1CSHRab0M7RUd1WnBDLGNIdForQjtFR3VaL0IsY0h0Wm1DO0VHdVpuQyxnQkh0WnFDO0FDa2V2QztBRTFFRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJIM2RVO0VHNGRWLFdIdGdCa0I7RUd1Z0JsQixnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUYyRUo7QUVqRUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVSHRmZ0I7RUd1ZmhCLFdIdmZnQjtFR3dmaEIsMkJIdGZrQjtFR3dmbEIsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCSHZmd0I7RUd3ZnhCLG9CSDFmdUI7RUcyZnZCLGdCSDlmZ0I7RUcrZmhCLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBRm1FRjtBRWpFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCSGpnQm1CO0FDb2tCdkI7QUVoRUU7RUFDRSxxQkhoZ0JVO0VHaWdCVixjSGpnQlU7QUNta0JkO0FFaEVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FGa0VOO0FFM0RJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJIbmhCUTtBQ2dsQmQ7QUUzRE07RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUY2RFI7QUUxRE07RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUY0RFI7QUV2REk7RUFFSSxnREFBQTtVQUFBLHdDQUFBO0FGd0RSO0FFdERRO0VBQ0Usa0RBQUE7VUFBQSwwQ0FBQTtBRndEVjtBRWxERTtFQUNFLHFCQUFBO0VBQ0EsY0g3aUJZO0FDaW1CaEI7QUVqREU7RUFDRSxxQkFBQTtFQUNBLGNIampCUztBQ29tQmI7QUVoREU7RUFDRSxxQkFBQTtFQUNBLGNIcmpCYTtBQ3VtQmpCO0FFL0NFO0VBQ0UscUJIOWpCWTtFRytqQlosY0gvakJZO0FDZ25CaEI7QUUvQ0k7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBRmdETjtBRTlDTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FGZ0RSO0FFekNNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUYyQ1I7QUVuQ0k7RUFFRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FGb0NOO0FFN0JJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FGOEJOO0FFdkJJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Qkh4b0JVO0FDaXFCaEI7QUV2Qk07RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBRnlCUjtBRXRCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FGd0JSO0FFYlE7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FGZVY7QUVaUTtFQUNFLHdEQUFBO1VBQUEsZ0RBQUE7QUZjVjtBRVhRO0VBQ0UsbUVBQUE7VUFBQSwyREFBQTtBRmFWO0FFTkE7RUFDRSxlSC9tQitCO0VHZ25CL0IsbUJIL21CaUM7RUdnbkJqQyxlSC9tQitCO0VHZ25CL0Isa0JIOW1CNEI7RUcrbUI1QixVSDltQjZCO0VHK21CN0IsbUJIam5CZ0M7RUdrbkJoQyxnQkgvbUJpQztBQ3duQm5DO0FFUEU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FGU0o7QUVORTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUh2bkJ3QjtFR3duQnhCLFdIdm5CeUI7RUd3bkJ6QixrQkh2bkJnQztFR3duQmhDLG1CSHJuQjJCO0VHc25CM0IsV0g3dUJrQjtFRzh1QmxCLGdCSDNuQnlCO0VHNG5CekIsa0JBQUE7QUZRSjtBRU5JO0VBQ0UsbUJIM25CeUI7QUNtb0IvQjtBRU5NO0VBQ0UsbUJIaG9CeUI7RUdpb0J6QixXSHR2QmM7QUM4dkJ0QjtBRUxNO0VBQ0UsbUJIcm9CeUI7QUM0b0JqQztBRUZFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZSGpwQjRCO0VHa3BCNUIsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkg5b0IyQjtBQ2twQi9CO0FFQ0E7RUFDRSx3Q0FBQTtBRkVGO0FFQ0E7RUFDRSxrQ0hod0JxQjtVR2d3QnJCLDBCSGh3QnFCO0FDa3dCdkI7QUVDQTtFQUNFLDRDSG53QnFCO1VHbXdCckIsb0NIbndCcUI7QUNxd0J2QjtBRUNBO0VBQ0UsZ0JBQUE7QUZFRjtBRUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRkNGO0FFSUU7RUFDRSxXQUFBO0VBQ0EsT0gzcEJxQjtBQzBwQnpCO0FFSUU7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBRkZKO0FHenlCQTtFQUVJO0lBQ0Usc0JBQUE7RUgyeUJKO0VHeHlCRTtJQUNFLGFBQUE7RUgweUJKO0FBQ0Y7QUdyeUJBO0VBR0k7SUFDRSxzQkFBQTtFSHF5Qko7RUdseUJFO0lBQ0UsYUFBQTtFSG95Qko7QUFDRjtBSTF6QkE7RUFDRTtJQUNFLDZDQUFBO0VKNHpCRjtFSXp6QkE7SUFDRSx1Q0FBQTtFSjJ6QkY7RUl4ekJBO0lBQ0UsNkNBQUE7RUowekJGO0VJdnpCQTtJQUNFLHNDQUFBO0VKeXpCRjtBQUNGO0FJeDBCQTtFQUNFO0lBQ0UsNkNBQUE7RUo0ekJGO0VJenpCQTtJQUNFLHVDQUFBO0VKMnpCRjtFSXh6QkE7SUFDRSw2Q0FBQTtFSjB6QkY7RUl2ekJBO0lBQ0Usc0NBQUE7RUp5ekJGO0FBQ0Y7QUl0ekJBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUp3ekJGO0FBQ0Y7QUk1ekJBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUp3ekJGO0FBQ0Y7QUlyekJBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUp1ekJGO0VJcHpCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFSnN6QkY7RUluekJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VKcXpCRjtFSWx6QkE7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUpvekJGO0VJanpCQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtFSm16QkY7QUFDRjtBSWgxQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFSnV6QkY7RUlwekJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0VKc3pCRjtFSW56QkE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUpxekJGO0VJbHpCQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFSm96QkY7RUlqekJBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0VKbXpCRjtBQUNGO0FJaHpCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VKa3pCRjtFSS95QkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7RUppekJGO0VJOXlCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFSmd6QkY7RUk3eUJBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VKK3lCRjtBQUNGO0FJdDBCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VKa3pCRjtFSS95QkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7RUppekJGO0VJOXlCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtFSmd6QkY7RUk3eUJBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VKK3lCRjtBQUNGO0FLNzNCQTtFQUNFO0lBQ0UscUJBQUE7RUwrM0JGO0VLNTNCQTtJQUNFLHNCQUFBO0VMODNCRjtFSzMzQkE7SUFDRSxzQkFBQTtFTDYzQkY7RUsxM0JBO0lBQ0UsbUJBQUE7RUw0M0JGO0FBQ0Y7QUszNEJBO0VBQ0U7SUFDRSxxQkFBQTtFTCszQkY7RUs1M0JBO0lBQ0Usc0JBQUE7RUw4M0JGO0VLMzNCQTtJQUNFLHNCQUFBO0VMNjNCRjtFSzEzQkE7SUFDRSxtQkFBQTtFTDQzQkY7QUFDRjtBS3gzQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFTDAzQkY7RUt2M0JBO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0VMeTNCRjtBQUNGO0FLbDRCQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VMMDNCRjtFS3YzQkE7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUx5M0JGO0FBQ0Y7QUtyM0JBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUx1M0JGO0VLcDNCQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsUUFBQTtFTHMzQkY7RUtuM0JBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VMcTNCRjtFS2wzQkE7SUFDRSxRQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUxvM0JGO0VLajNCQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTG0zQkY7QUFDRjtBS2g1QkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsUUFBQTtFTHUzQkY7RUtwM0JBO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0VMczNCRjtFS24zQkE7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUxxM0JGO0VLbDNCQTtJQUNFLFFBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFTG8zQkY7RUtqM0JBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VMbTNCRjtBQUNGO0FLaDNCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMazNCRjtFSy8yQkE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUxpM0JGO0VLOTJCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFTGczQkY7RUs3MkJBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VMKzJCRjtBQUNGO0FLdDRCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxRQUFBO0VMazNCRjtFSy8yQkE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFFBQUE7RUxpM0JGO0VLOTJCQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtFTGczQkY7RUs3MkJBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VMKzJCRjtBQUNGO0FLNTJCQTtFQUNFO0lBQ0UseUJBQUE7RUw4MkJGO0VLMzJCQTtJQUNFLHlCQUFBO0VMNjJCRjtFSzEyQkE7SUFDRSwwQkFBQTtFTDQyQkY7RUt6MkJBO0lBQ0UsMEJBQUE7RUwyMkJGO0FBQ0Y7QUsxM0JBO0VBQ0U7SUFDRSx5QkFBQTtFTDgyQkY7RUszMkJBO0lBQ0UseUJBQUE7RUw2MkJGO0VLMTJCQTtJQUNFLDBCQUFBO0VMNDJCRjtFS3oyQkE7SUFDRSwwQkFBQTtFTDIyQkY7QUFDRjtBS3YyQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VMeTJCRjtFS3QyQkE7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFTHcyQkY7RUtyMkJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFBQTtFTHUyQkY7RUtwMkJBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFTHMyQkY7QUFDRjtBSzUzQkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VMeTJCRjtFS3QyQkE7SUFDRSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFTHcyQkY7RUtyMkJBO0lBQ0Usb0JBQUE7SUFDQSxzQkFBQTtFTHUyQkY7RUtwMkJBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFTHMyQkY7QUFDRjtBS24yQkE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFTHEyQkY7RUtsMkJBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VMbzJCRjtBQUNGO0FLNzJCQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxVQUFBO0VMcTJCRjtFS2wyQkE7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUxvMkJGO0FBQ0Y7QUtqMkJBO0VBQ0U7SUFDRSx1QkFBQTtFTG0yQkY7RUtoMkJBO0lBQ0UseUJBQUE7RUxrMkJGO0FBQ0Y7QUt6MkJBO0VBQ0U7SUFDRSx1QkFBQTtFTG0yQkY7RUtoMkJBO0lBQ0UseUJBQUE7RUxrMkJGO0FBQ0Y7QUM1K0JFO0VLYkksZ0JBQUE7QU40L0JOO0FNeC9CRTtFQUNFLHVCQUFBO0FOMC9CSjtBTXQvQkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSx3Q0FBQTtBTncvQk47QU10L0JNO0VBQ0UsdUNBQUE7QU53L0JSO0FNci9CTTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QU51L0JSO0FNcC9CTTtFQUVFLE1BQUE7RUFDQSxPQUFBO0FOcS9CUjtBTWwvQk07RUFFRSxNQUFBO0VBQ0EsUUFBQTtBTm0vQlI7QU1oL0JNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBTmsvQlI7QU0vK0JNO0VBRUUsUUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtBTmcvQlI7QU03K0JNO0VBRUUsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBTjgrQlI7QU0zK0JNO0VBQ0UsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBTjYrQlI7QU0xK0JNO0VBRUUsU0FBQTtFQUNBLE9BQUE7QU4yK0JSO0FNeCtCTTtFQUVFLFFBQUE7RUFDQSxTQUFBO0FOeStCUjtBTXArQkU7RUxsRUE7SUtxRU0sNkJBQUE7RU5xK0JOO0VNbitCTTtJQUNFLGFBQUE7RU5xK0JSO0VNbCtCTTtJQUNFLDJCQUFBO0VObytCUjtBQUNGO0FPamtDSTtFQUNFLDZCQUFBO0FQbWtDTjtBT2prQ007RUFDRSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QVBta0NSO0FPaGtDTTtFQUVFLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QVBpa0NSO0FPOWpDTTtFQUVFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QVArakNSO0FPNWpDTTtFQUVFLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtBUDZqQ1I7QU8xakNNO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FQNGpDUjtBT3pqQ007RUFFRSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QVAwakNSO0FPdmpDTTtFQUVFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7QVB3akNSO0FPcmpDTTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBUHVqQ1I7QU9wakNNO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUHFqQ1IiLCJmaWxlIjoibm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL3NyYy9zd2VldGFsZXJ0Mi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3YWwyLXBvcHVwIHtcbiAgJi5zd2FsMi10b2FzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICB3aWR0aDogJHN3YWwyLXRvYXN0LXdpZHRoO1xuICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1wYWRkaW5nO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItdG9hc3QtYmFja2dyb3VuZDtcbiAgICBib3gtc2hhZG93OiAkc3dhbDItdG9hc3QtYm94LXNoYWRvdztcblxuICAgIC5zd2FsMi1oZWFkZXIge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBhZGRpbmc6ICRzd2FsMi10b2FzdC1oZWFkZXItcGFkZGluZztcbiAgICB9XG5cbiAgICAuc3dhbDItdGl0bGUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdGl0bGUtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1sb2FkaW5nIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5zd2FsMi1pbnB1dCB7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIG1hcmdpbjogLjMxMjVlbSBhdXRvO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtaW5wdXQtZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Uge1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtdmFsaWRhdGlvbi1mb250LXNpemU7XG4gICAgfVxuXG4gICAgLnN3YWwyLWZvb3RlciB7XG4gICAgICBtYXJnaW46ICRzd2FsMi10b2FzdC1mb290ZXItbWFyZ2luO1xuICAgICAgcGFkZGluZzogJHN3YWwyLXRvYXN0LWZvb3Rlci1tYXJnaW47XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1mb290ZXItZm9udC1zaXplO1xuICAgIH1cblxuICAgIC5zd2FsMi1jbG9zZSB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgd2lkdGg6ICRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24td2lkdGg7XG4gICAgICBoZWlnaHQ6ICRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24taGVpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6ICRzd2FsMi10b2FzdC1jbG9zZS1idXR0b24tbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLnN3YWwyLWNvbnRlbnQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luOiAkc3dhbDItdG9hc3QtY29udGVudC1tYXJnaW47XG4gICAgICBwYWRkaW5nOiAkc3dhbDItdG9hc3QtY29udGVudC1wYWRkaW5nO1xuICAgICAgZm9udC1zaXplOiAkc3dhbDItdG9hc3QtY29udGVudC1mb250LXNpemU7XG4gICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIH1cblxuICAgIC5zd2FsMi1odG1sLWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAuNjI1ZW0gMCAwO1xuXG4gICAgICAmOmVtcHR5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItaWNvbiB7XG4gICAgICB3aWR0aDogMmVtO1xuICAgICAgbWluLXdpZHRoOiAyZW07XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIG1hcmdpbjogMCAuNWVtIDAgMDtcblxuICAgICAgLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogJHN3YWwyLXRvYXN0LWljb24tZm9udC1zaXplO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICAgICBAaW5jbHVkZSBpZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXN1Y2Nlc3Mge1xuICAgICAgICAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItZXJyb3Ige1xuICAgICAgICBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcbiAgICAgICAgICB0b3A6IC44NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcblxuICAgICAgICAgICZbY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICAgICAgbGVmdDogLjMxMjVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmW2NsYXNzJD0ncmlnaHQnXSB7XG4gICAgICAgICAgICByaWdodDogLjMxMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItYWN0aW9ucyB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiAyLjJlbTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1hcmdpbjogMCAuMzEyNWVtO1xuICAgICAgbWFyZ2luLXRvcDogLjMxMjVlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICBtYXJnaW46IC4xMjVlbSAuMzEyNWVtO1xuICAgICAgcGFkZGluZzogLjMxMjVlbSAuNjI1ZW07XG4gICAgICBmb250LXNpemU6ICRzd2FsMi10b2FzdC1idXR0b25zLWZvbnQtc2l6ZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6ICRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dhbDItc3VjY2VzcyB7XG4gICAgICBib3JkZXItY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUnXSB7IC8vIEVtdWxhdGUgbW92aW5nIGNpcmN1bGFyIGxpbmVcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAmW2NsYXNzJD0nbGVmdCddIHtcbiAgICAgICAgICB0b3A6IC0uOGVtO1xuICAgICAgICAgIGxlZnQ6IC0uNWVtO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0ZW0gMCAwIDRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgICB0b3A6IC0uMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuOTM3NWVtO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMS41ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0ZW0gNGVtIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgfVxuXG4gICAgICAuc3dhbDItc3VjY2Vzcy1maXgge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC40Mzc1ZW07XG4gICAgICAgIHdpZHRoOiAuNDM3NWVtO1xuICAgICAgICBoZWlnaHQ6IDIuNjg3NWVtO1xuICAgICAgfVxuXG4gICAgICBbY2xhc3NePSdzd2FsMi1zdWNjZXNzLWxpbmUnXSB7XG4gICAgICAgIGhlaWdodDogLjMxMjVlbTtcblxuICAgICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICAgIHRvcDogMS4xMjVlbTtcbiAgICAgICAgICBsZWZ0OiAuMTg3NWVtO1xuICAgICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbY2xhc3MkPSdsb25nJ10ge1xuICAgICAgICAgIHRvcDogLjkzNzVlbTtcbiAgICAgICAgICByaWdodDogLjE4NzVlbTtcbiAgICAgICAgICB3aWR0aDogMS4zNzVlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWljb24tc2hvdyB7XG4gICAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnN3YWwyLXNob3cge1xuICAgICAgYW5pbWF0aW9uOiAkc3dhbDItdG9hc3Qtc2hvdy1hbmltYXRpb247XG4gICAgfVxuXG4gICAgJi5zd2FsMi1oaWRlIHtcbiAgICAgIGFuaW1hdGlvbjogJHN3YWwyLXRvYXN0LWhpZGUtYW5pbWF0aW9uO1xuICAgIH1cbiAgfVxufVxuIiwiJHN3YWwyLXdoaXRlOiAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kc3dhbDItYmxhY2s6ICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRzd2FsMi1vdXRsaW5lLWNvbG9yOiByZ2JhKDEwMCwgMTUwLCAyMDAsIC41KSAhZGVmYXVsdDtcblxuLy8gQ09OVEFJTkVSXG4kc3dhbDItY29udGFpbmVyLXBhZGRpbmc6IC42MjVlbSAhZGVmYXVsdDtcblxuLy8gQk9YIE1PREVMXG4kc3dhbDItd2lkdGg6IDMyZW0gIWRlZmF1bHQ7XG4kc3dhbDItcGFkZGluZzogMS4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLWJvcmRlcjogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1ib3JkZXItcmFkaXVzOiA1cHggIWRlZmF1bHQ7XG4kc3dhbDItYm94LXNoYWRvdzogI2Q5ZDlkOSAhZGVmYXVsdDtcblxuLy8gQU5JTUFUSU9OU1xuJHN3YWwyLXNob3ctYW5pbWF0aW9uOiBzd2FsMi1zaG93IC4zcyAhZGVmYXVsdDtcbiRzd2FsMi1oaWRlLWFuaW1hdGlvbjogc3dhbDItaGlkZSAuMTVzIGZvcndhcmRzICFkZWZhdWx0O1xuXG4vLyBCQUNLR1JPVU5EXG4kc3dhbDItYmFja2dyb3VuZDogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuXG4vLyBUWVBPR1JBUEhZXG4kc3dhbDItZm9udDogaW5oZXJpdCAhZGVmYXVsdDtcbiRzd2FsMi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJBQ0tEUk9QXG4kc3dhbDItYmFja2Ryb3A6IHJnYmEoJHN3YWwyLWJsYWNrLCAuNCkgIWRlZmF1bHQ7XG4kc3dhbDItYmFja2Ryb3AtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMXMgIWRlZmF1bHQ7XG5cbi8vIEhFQURFUlxuJHN3YWwyLWhlYWRlci1wYWRkaW5nOiAwIDEuOGVtICFkZWZhdWx0O1xuXG4vLyBJQ09OU1xuJHN3YWwyLWljb24tc2l6ZTogNWVtICFkZWZhdWx0O1xuJHN3YWwyLWljb24tYW5pbWF0aW9uczogdHJ1ZSAhZGVmYXVsdDtcbiRzd2FsMi1pY29uLW1hcmdpbjogMS4yNWVtIGF1dG8gMS44NzVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pY29uLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLWljb24tZm9udC1zaXplOiAzLjc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi1ib3JkZXItY29sb3I6ICMwMDAgIWRlZmF1bHQ7XG4kc3dhbDItaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuJHN3YWwyLXN1Y2Nlc3M6ICNhNWRjODYgIWRlZmF1bHQ7XG4kc3dhbDItc3VjY2Vzcy1ib3JkZXI6IHJnYmEoJHN3YWwyLXN1Y2Nlc3MsIC4zKSAhZGVmYXVsdDtcbiRzd2FsMi1lcnJvcjogI2YyNzQ3NCAhZGVmYXVsdDtcbiRzd2FsMi13YXJuaW5nOiAjZjhiYjg2ICFkZWZhdWx0O1xuJHN3YWwyLWluZm86ICMzZmMzZWUgIWRlZmF1bHQ7XG4kc3dhbDItcXVlc3Rpb246ICM4N2FkYmQgIWRlZmF1bHQ7XG5cbi8vIElNQUdFXG4kc3dhbDItaW1hZ2UtbWFyZ2luOiAxLjI1ZW0gYXV0byAhZGVmYXVsdDtcblxuLy8gVElUTEVcbiRzd2FsMi10aXRsZS1tYXJnaW46IDAgMCAuNGVtICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzUpICFkZWZhdWx0O1xuJHN3YWwyLXRpdGxlLWZvbnQtc2l6ZTogMS44NzVlbSAhZGVmYXVsdDtcblxuLy8gQ09OVEVOVFxuJHN3YWwyLWNvbnRlbnQtanVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1tYXJnaW46IDAgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1wYWRkaW5nOiAwIDEuNmVtICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCAzMykgIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1mb250LXNpemU6IDEuMTI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItY29udGVudC1mb250LXdlaWdodDogbm9ybWFsICFkZWZhdWx0O1xuJHN3YWwyLWNvbnRlbnQtbGluZS1oZWlnaHQ6IG5vcm1hbCAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LXRleHQtYWxpZ246IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1jb250ZW50LXdvcmQtd3JhcDogYnJlYWstd29yZCAhZGVmYXVsdDtcblxuLy8gSU5QVVRcbiRzd2FsMi1pbnB1dC1tYXJnaW46IDFlbSBhdXRvICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LXdpZHRoOiAxMDAlICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWhlaWdodDogMi42MjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1wYWRkaW5nOiAwIC43NWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4NSkgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1czogLjE4NzVlbSAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgkc3dhbDItYmxhY2ssIC4wNikgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtZm9udC1zaXplOiAxLjEyNWVtICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWJhY2tncm91bmQ6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4kc3dhbDItaW5wdXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4zcywgYm94LXNoYWRvdyAuM3MgIWRlZmF1bHQ7XG5cbi8vIElOUFVUOkZPQ1VTXG4kc3dhbDItaW5wdXQtZm9jdXMtYm9yZGVyOiAxcHggc29saWQgI2I0ZGJlZCAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1mb2N1cy1vdXRsaW5lOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwIDNweCAkc3dhbDItb3V0bGluZS1jb2xvciAhZGVmYXVsdDtcblxuLy8gVEVYVEFSRUEgU1BFQ0lGSUMgVkFSSUFCTEVTXG4kc3dhbDItdGV4dGFyZWEtaGVpZ2h0OiA2Ljc1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdGV4dGFyZWEtcGFkZGluZzogLjc1ZW0gIWRlZmF1bHQ7XG5cbi8vIElOUFVUIExBQkVMXG4kc3dhbDItaW5wdXQtbGFiZWwtbWFyZ2luOiAxZW0gYXV0byAhZGVmYXVsdDtcbiRzd2FsMi1pbnB1dC1sYWJlbC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhZGVmYXVsdDtcblxuLy8gVkFMSURBVElPTiBNRVNTQUdFXG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWFsaWduLWl0ZW1zOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1tYXJnaW46IDAgLTIuN2VtICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1wYWRkaW5nOiAuNjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWJhY2tncm91bmQ6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA5NCkgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgNDApICFkZWZhdWx0O1xuJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1iYWNrZ3JvdW5kOiAkc3dhbDItZXJyb3IgIWRlZmF1bHQ7XG4kc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi16b29tOiBudWxsICFkZWZhdWx0O1xuXG4vLyBQUk9HUkVTUyBTVEVQU1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWZsZXgtd3JhcDogd3JhcCAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1hbGlnbi1pdGVtczogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLW1heC13aWR0aDogMTAwJSAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1iYWNrZ3JvdW5kOiBpbmhlcml0ICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLW1hcmdpbjogMCAwIDEuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwcy1wYWRkaW5nOiAwICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWZvbnQtd2VpZ2h0OiA2MDAgIWRlZmF1bHQ7XG4kc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZGlzdGFuY2U6IDIuNWVtICFkZWZhdWx0O1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtd2lkdGg6IDJlbTtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwLWhlaWdodDogMmVtO1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtYm9yZGVyLXJhZGl1czogMmVtO1xuJHN3YWwyLXByb2dyZXNzLXN0ZXAtYmFja2dyb3VuZDogI2FkZDhlNiAhZGVmYXVsdDtcbiRzd2FsMi1wcm9ncmVzcy1zdGVwLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aXZlLXN0ZXAtYmFja2dyb3VuZDogIzI3NzhjNCAhZGVmYXVsdDtcbiRzd2FsMi1hY3RpdmUtc3RlcC1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuXG4vLyBGT09URVJcbiRzd2FsMi1mb290ZXItbWFyZ2luOiAxLjI1ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1wYWRkaW5nOiAxZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1ib3JkZXItY29sb3I6ICNlZWUgIWRlZmF1bHQ7XG4kc3dhbDItZm9vdGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1ibGFjaywgMzMpICFkZWZhdWx0O1xuJHN3YWwyLWZvb3Rlci1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcblxuLy8gVElNRVIgUE9HUkVTUyBCQVJcbiRzd2FsMi10aW1lci1wcm9ncmVzcy1iYXItaGVpZ2h0OiAuMjVlbTtcbiRzd2FsMi10aW1lci1wcm9ncmVzcy1iYXItYmFja2dyb3VuZDogcmdiYSgkc3dhbDItYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuLy8gQ0xPU0UgQlVUVE9OXG4kc3dhbDItY2xvc2UtYnV0dG9uLWFsaWduLWl0ZW1zOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi13aWR0aDogMS4yZW0gIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWhlaWdodDogMS4yZW0gIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0OiAxLjIgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLXBvc2l0aW9uOiBhYnNvbHV0ZSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZ2FwOiAwICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi10cmFuc2l0aW9uOiBjb2xvciAuMXMgZWFzZS1vdXQgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlcjogbm9uZSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tYm9yZGVyLXJhZGl1czogJHN3YWwyLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmU6IG51bGwgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1jb2xvcjogbGlnaHRlbigkc3dhbDItYmxhY2ssIDgwKSAhZGVmYXVsdDtcbiRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1mYW1pbHk6IHNlcmlmICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb250LXNpemU6IDIuNWVtICFkZWZhdWx0O1xuXG4vLyBDTE9TRSBCVVRUT046SE9WRVJcbiRzd2FsMi1jbG9zZS1idXR0b24taG92ZXItdHJhbnNmb3JtOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1jb2xvcjogJHN3YWwyLWVycm9yICFkZWZhdWx0O1xuJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuLy8gQ0xPU0UgQlVUVE9OOkZPQ1VTXG4kc3dhbDItY2xvc2UtYnV0dG9uLWZvY3VzLW91dGxpbmU6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItY2xvc2UtYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCAkc3dhbDItb3V0bGluZS1jb2xvciAhZGVmYXVsdDtcblxuLy8gQUNUSU9OU1xuJHN3YWwyLWFjdGlvbnMtZmxleC13cmFwOiB3cmFwICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtYWxpZ24taXRlbXM6IGNlbnRlciAhZGVmYXVsdDtcbiRzd2FsMi1hY3Rpb25zLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWFjdGlvbnMtd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1tYXJnaW46IDEuMjVlbSBhdXRvIDAgIWRlZmF1bHQ7XG4kc3dhbDItYWN0aW9ucy1wYWRkaW5nOiAwICFkZWZhdWx0O1xuXG4vLyBDT05GSVJNIEJVVFRPTlxuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLW9yZGVyOiBudWxsICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJvcmRlcjogMCAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jb25maXJtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjc3OGM0ICFkZWZhdWx0O1xuJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWNvbG9yOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItY29uZmlybS1idXR0b24tZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG5cbi8vIERFTlkgQlVUVE9OXG4kc3dhbDItZGVueS1idXR0b24tb3JkZXI6IG51bGwgIWRlZmF1bHQ7XG4kc3dhbDItZGVueS1idXR0b24tYm9yZGVyOiAwICFkZWZhdWx0O1xuJHN3YWwyLWRlbnktYnV0dG9uLWJvcmRlci1yYWRpdXM6IC4yNWVtICFkZWZhdWx0O1xuJHN3YWwyLWRlbnktYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICNkMTQ1MjkgIWRlZmF1bHQ7XG4kc3dhbDItZGVueS1idXR0b24tY29sb3I6ICRzd2FsMi13aGl0ZSAhZGVmYXVsdDtcbiRzd2FsMi1kZW55LWJ1dHRvbi1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcblxuLy8gQ0FOQ0VMIEJVVFRPTlxuJHN3YWwyLWNhbmNlbC1idXR0b24tb3JkZXI6IG51bGwgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXI6IDAgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1ib3JkZXItcmFkaXVzOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1jYW5jZWwtYnV0dG9uLWJhY2tncm91bmQtY29sb3I6ICM3NTc1NzUgIWRlZmF1bHQ7XG4kc3dhbDItY2FuY2VsLWJ1dHRvbi1jb2xvcjogJHN3YWwyLXdoaXRlICFkZWZhdWx0O1xuJHN3YWwyLWNhbmNlbC1idXR0b24tZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG5cbi8vIENPTU1PTiBWQVJJQUJMRVMgRk9SIEFMTCBCVVRUT05TXG4kc3dhbDItYnV0dG9uLW1hcmdpbjogLjMxMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1idXR0b24tcGFkZGluZzogLjYyNWVtIDEuMWVtICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1ib3gtc2hhZG93OiBub25lICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJHN3YWwyLWJ1dHRvbi1kYXJrZW4taG92ZXI6IHJnYmEoJHN3YWwyLWJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kc3dhbDItYnV0dG9uLWRhcmtlbi1hY3RpdmU6IHJnYmEoJHN3YWwyLWJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kc3dhbDItYnV0dG9uLWZvY3VzLW91dGxpbmU6IG5vbmUgIWRlZmF1bHQ7XG4kc3dhbDItYnV0dG9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IG51bGwgIWRlZmF1bHQ7XG4kc3dhbDItYnV0dG9uLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwIDNweCAkc3dhbDItb3V0bGluZS1jb2xvciAhZGVmYXVsdDtcblxuLy8gTE9BREVSXG4kc3dhbDItbG9hZGVyLWFsaWduLWl0ZW1zOiBjZW50ZXIgIWRlZmF1bHQ7XG4kc3dhbDItbG9hZGVyLWp1c3RpZnktY29udGVudDogY2VudGVyICFkZWZhdWx0O1xuJHN3YWwyLWxvYWRlci13aWR0aDogMi4yZW0gIWRlZmF1bHQ7XG4kc3dhbDItbG9hZGVyLWhlaWdodDogMi4yZW0gIWRlZmF1bHQ7XG4kc3dhbDItbG9hZGVyLW1hcmdpbjogMCAxLjg3NWVtICFkZWZhdWx0O1xuJHN3YWwyLWxvYWRlci1hbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbCAhZGVmYXVsdDtcbiRzd2FsMi1sb2FkZXItYm9yZGVyLXdpZHRoOiAuMjVlbSAhZGVmYXVsdDtcbiRzd2FsMi1sb2FkZXItYm9yZGVyLXN0eWxlOiBzb2xpZCAhZGVmYXVsdDtcbiRzd2FsMi1sb2FkZXItYm9yZGVyLXJhZGl1czogMTAwJSAhZGVmYXVsdDtcbiRzd2FsMi1sb2FkZXItYm9yZGVyLWNvbG9yOiAjMjc3OGM0IHRyYW5zcGFyZW50ICMyNzc4YzQgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIFRPQVNUU1xuJHN3YWwyLXRvYXN0LXNob3ctYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1zaG93IC41cyAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1oaWRlLWFuaW1hdGlvbjogc3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHMgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYm9yZGVyOiBub25lICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWJveC1zaGFkb3c6IDAgMCAuNjI1ZW0gI2Q5ZDlkOSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1iYWNrZ3JvdW5kOiAkc3dhbDItd2hpdGUgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLXdpZHRoOiAuOGVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNsb3NlLWJ1dHRvbi1oZWlnaHQ6IC44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY2xvc2UtYnV0dG9uLWxpbmUtaGVpZ2h0OiAuOCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC13aWR0aDogYXV0byAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1wYWRkaW5nOiAxLjI1ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtaGVhZGVyLXBhZGRpbmc6IDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtdGl0bGUtbWFyZ2luOiAwIC42MjVlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC10aXRsZS1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1pY29uLWZvbnQtc2l6ZTogMS44ZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtY29udGVudC1tYXJnaW46IDAgLjYyNWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWNvbnRlbnQtcGFkZGluZzogMCAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1jb250ZW50LWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWlucHV0LWZvbnQtc2l6ZTogMWVtICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LXZhbGlkYXRpb24tZm9udC1zaXplOiAxZW0gIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtYnV0dG9ucy1mb250LXNpemU6IDFlbSAhZGVmYXVsdDtcbiRzd2FsMi10b2FzdC1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgMXB4ICRzd2FsMi1iYWNrZ3JvdW5kLCAwIDAgMCAzcHggJHN3YWwyLW91dGxpbmUtY29sb3IgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtZm9vdGVyLW1hcmdpbjogLjVlbSAwIDAgIWRlZmF1bHQ7XG4kc3dhbDItdG9hc3QtZm9vdGVyLXBhZGRpbmc6IC41ZW0gMCAwICFkZWZhdWx0O1xuJHN3YWwyLXRvYXN0LWZvb3Rlci1mb250LXNpemU6IC44ZW0gIWRlZmF1bHQ7XG4iLCIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDEuMjVlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMC42MjVlbSAjZDlkOWQ5O1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1oZWFkZXIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAwO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDAgMC42MjVlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAwLjMxMjVlbSBhdXRvO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlciB7XG4gIG1hcmdpbjogMC41ZW0gMCAwO1xuICBwYWRkaW5nOiAwLjVlbSAwIDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3NlIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IDAuOGVtO1xuICBoZWlnaHQ6IDAuOGVtO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jb250ZW50IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDAgMC42MjVlbTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC42MjVlbSAwIDA7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWh0bWwtY29udGFpbmVyOmVtcHR5IHtcbiAgcGFkZGluZzogMDtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiB7XG4gIHdpZHRoOiAyZW07XG4gIG1pbi13aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgbWFyZ2luOiAwIDAuNWVtIDAgMDtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgZm9udC1zaXplOiAwLjI1ZW07XG4gIH1cbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXSB7XG4gIHRvcDogMC44NzVlbTtcbiAgd2lkdGg6IDEuMzc1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRdIHtcbiAgbGVmdDogMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XSB7XG4gIHJpZ2h0OiAwLjMxMjVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9ucyB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtYmFzaXM6IGF1dG8gIWltcG9ydGFudDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMi4yZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwIDAuMzEyNWVtO1xuICBtYXJnaW4tdG9wOiAwLjMxMjVlbTtcbiAgcGFkZGluZzogMDtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAwLjEyNWVtIDAuMzEyNWVtO1xuICBwYWRkaW5nOiAwLjMxMjVlbSAwLjYyNWVtO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmZmYsIDAgMCAwIDNweCByZ2JhKDEwMCwgMTUwLCAyMDAsIDAuNSk7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS42ZW07XG4gIGhlaWdodDogM2VtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRdIHtcbiAgdG9wOiAtMC44ZW07XG4gIGxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMmVtIDJlbTtcbiAgYm9yZGVyLXJhZGl1czogNGVtIDAgMCA0ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF0ge1xuICB0b3A6IC0wLjI1ZW07XG4gIGxlZnQ6IDAuOTM3NWVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAwIDRlbSA0ZW0gMDtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5nIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiAyZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwLjQzNzVlbTtcbiAgd2lkdGg6IDAuNDM3NWVtO1xuICBoZWlnaHQ6IDIuNjg3NWVtO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXSB7XG4gIGhlaWdodDogMC4zMTI1ZW07XG59XG4uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBdIHtcbiAgdG9wOiAxLjEyNWVtO1xuICBsZWZ0OiAwLjE4NzVlbTtcbiAgd2lkdGg6IDAuNzVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmddIHtcbiAgdG9wOiAwLjkzNzVlbTtcbiAgcmlnaHQ6IDAuMTg3NWVtO1xuICB3aWR0aDogMS4zNzVlbTtcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAwLjc1cztcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLXRvYXN0LXNob3cgMC41cztcbn1cbi5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRlIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi10b2FzdC1oaWRlIDAuMXMgZm9yd2FyZHM7XG59XG5cbi5zd2FsMi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwNjA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLXNob3csIC5zd2FsMi1jb250YWluZXIuc3dhbDItbm9hbmltYXRpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJhY2tkcm9wLWhpZGUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20gPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0ID4gOmZpcnN0LWNoaWxkLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0ID4gOmZpcnN0LWNoaWxkLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQgPiA6Zmlyc3QtY2hpbGQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0ID4gOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuID4gLnN3YWwyLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uIHtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlciwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3Atc3RhcnQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXN0YXJ0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1zdGFydCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tbGVmdCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHQsIC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLXJpZ2h0LCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4gPiAuc3dhbDItbW9kYWwge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3dhbDItY29udGFpbmVyLnN3YWwyLW5vLXRyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4uc3dhbDItY29udGFpbmVyOm5vdCguc3dhbDItdG9wKTpub3QoLnN3YWwyLXRvcC1zdGFydCk6bm90KC5zd2FsMi10b3AtZW5kKTpub3QoLnN3YWwyLXRvcC1sZWZ0KTpub3QoLnN3YWwyLXRvcC1yaWdodCk6bm90KC5zd2FsMi1jZW50ZXItc3RhcnQpOm5vdCguc3dhbDItY2VudGVyLWVuZCk6bm90KC5zd2FsMi1jZW50ZXItbGVmdCk6bm90KC5zd2FsMi1jZW50ZXItcmlnaHQpOm5vdCguc3dhbDItYm90dG9tKTpub3QoLnN3YWwyLWJvdHRvbS1zdGFydCk6bm90KC5zd2FsMi1ib3R0b20tZW5kKTpub3QoLnN3YWwyLWJvdHRvbS1sZWZ0KTpub3QoLnN3YWwyLWJvdHRvbS1yaWdodCk6bm90KC5zd2FsMi1ncm93LWZ1bGxzY3JlZW4pID4gLnN3YWwyLW1vZGFsIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWwge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zd2FsMi1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEuMjVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDFyZW07XG59XG4uc3dhbDItcG9wdXA6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmcge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5zd2FsMi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEuOGVtO1xufVxuXG4uc3dhbDItdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMC40ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBmb250LXNpemU6IDEuODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLnN3YWwyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxLjI1ZW0gYXV0byAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSksIHJnYmEoMCwgMCwgMCwgMC4xKSk7XG59XG4uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKTtcbn1cblxuLnN3YWwyLWxvYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMi4yZW07XG4gIGhlaWdodDogMi4yZW07XG4gIG1hcmdpbjogMCAxLjg3NWVtO1xuICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtcbiAgYm9yZGVyLXdpZHRoOiAwLjI1ZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogIzI3NzhjNCB0cmFuc3BhcmVudCAjMjc3OGM0IHRyYW5zcGFyZW50O1xufVxuXG4uc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAwLjMxMjVlbTtcbiAgcGFkZGluZzogMC42MjVlbSAxLjFlbTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zd2FsMi1zdHlsZWQ6bm90KFtkaXNhYmxlZF0pIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJtIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzc4YzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zd2FsMi1zdHlsZWQuc3dhbDItZGVueSB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDE0NTI5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbCB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3dhbDItc3R5bGVkOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMTAwLCAxNTAsIDIwMCwgMC41KTtcbn1cbi5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxLjI1ZW0gMCAwO1xuICBwYWRkaW5nOiAxZW0gMCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAwLjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMjVlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3dhbDItaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS4yNWVtIGF1dG87XG59XG5cbi5zd2FsMi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBlYXNlLW91dDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2NjY2NjYztcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3dhbDItY2xvc2U6aG92ZXIge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2YyNzQ3NDtcbn1cbi5zd2FsMi1jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCByZ2JhKDEwMCwgMTUwLCAyMDAsIDAuNSk7XG59XG4uc3dhbDItY2xvc2U6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG59XG5cbi5zd2FsMi1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAxLjZlbTtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogMWVtIGF1dG87XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzLCBib3gtc2hhZG93IDAuM3M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NWVtO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cbi5zd2FsMi1pbnB1dC5zd2FsMi1pbnB1dGVycm9yLFxuLnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvcixcbi5zd2FsMi10ZXh0YXJlYS5zd2FsMi1pbnB1dGVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjI3NDc0ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2YyNzQ3NCAhaW1wb3J0YW50O1xufVxuLnN3YWwyLWlucHV0OmZvY3VzLFxuLnN3YWwyLWZpbGU6Zm9jdXMsXG4uc3dhbDItdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjRkYmVkO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxMDAsIDE1MCwgMjAwLCAwLjUpO1xufVxuLnN3YWwyLWlucHV0OjpwbGFjZWhvbGRlcixcbi5zd2FsMi1maWxlOjpwbGFjZWhvbGRlcixcbi5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuLnN3YWwyLXJhbmdlIHtcbiAgbWFyZ2luOiAxZW0gYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gIHdpZHRoOiA4MCU7XG59XG4uc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zd2FsMi1yYW5nZSBpbnB1dCxcbi5zd2FsMi1yYW5nZSBvdXRwdXQge1xuICBoZWlnaHQ6IDIuNjI1ZW07XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNjI1ZW07XG59XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogMi42MjVlbTtcbiAgcGFkZGluZzogMCAwLjc1ZW07XG59XG4uc3dhbDItaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgbWF4LXdpZHRoOiAxMGVtO1xufVxuXG4uc3dhbDItZmlsZSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiA2Ljc1ZW07XG4gIHBhZGRpbmc6IDAuNzVlbTtcbn1cblxuLnN3YWwyLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcbn1cblxuLnN3YWwyLXJhZGlvLFxuLnN3YWwyLWNoZWNrYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLnN3YWwyLXJhZGlvIGxhYmVsLFxuLnN3YWwyLWNoZWNrYm94IGxhYmVsIHtcbiAgbWFyZ2luOiAwIDAuNmVtO1xuICBmb250LXNpemU6IDEuMTI1ZW07XG59XG4uc3dhbDItcmFkaW8gaW5wdXQsXG4uc3dhbDItY2hlY2tib3ggaW5wdXQge1xuICBtYXJnaW46IDAgMC40ZW07XG59XG5cbi5zd2FsMi1pbnB1dC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDFlbSBhdXRvO1xufVxuXG4uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAtMi43ZW07XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIVwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxLjVlbTtcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgbWFyZ2luOiAwIDAuNjI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNzQ3NDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3dhbDItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDVlbTtcbiAgbWFyZ2luOiAxLjI1ZW0gYXV0byAxLjg3NWVtO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogNWVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnN3YWwyLWljb24gLnN3YWwyLWljb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMy43NWVtO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNmMjc0NzQ7XG4gIGNvbG9yOiAjZjI3NDc0O1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1ncm93OiAxO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIuMzEyNWVtO1xuICB3aWR0aDogMi45Mzc1ZW07XG4gIGhlaWdodDogMC4zMTI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjc0NzQ7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICBsZWZ0OiAxLjA2MjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XSB7XG4gIHJpZ2h0OiAxZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1lcnJvci5zd2FsMi1pY29uLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAwLjVzO1xufVxuLnN3YWwyLWljb24uc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmsge1xuICBhbmltYXRpb246IHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIDAuNXM7XG59XG4uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmFjZWE4O1xuICBjb2xvcjogI2Y4YmI4Njtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLWluZm8ge1xuICBib3JkZXItY29sb3I6ICM5ZGUwZjY7XG4gIGNvbG9yOiAjM2ZjM2VlO1xufVxuLnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb24ge1xuICBib3JkZXItY29sb3I6ICNjOWRhZTE7XG4gIGNvbG9yOiAjODdhZGJkO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyB7XG4gIGJvcmRlci1jb2xvcjogI2E1ZGM4NjtcbiAgY29sb3I6ICNhNWRjODY7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMuNzVlbTtcbiAgaGVpZ2h0OiA3LjVlbTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF0ge1xuICB0b3A6IC0wLjQzNzVlbTtcbiAgbGVmdDogLTIuMDYzNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzLjc1ZW0gMy43NWVtO1xuICBib3JkZXItcmFkaXVzOiA3LjVlbSAwIDAgNy41ZW07XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRdIHtcbiAgdG9wOiAtMC42ODc1ZW07XG4gIGxlZnQ6IDEuODc1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMy43NWVtO1xuICBib3JkZXItcmFkaXVzOiAwIDcuNWVtIDcuNWVtIDA7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogLTAuMjVlbTtcbiAgbGVmdDogLTAuMjVlbTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIHJnYmEoMTY1LCAyMjAsIDEzNCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMC41ZW07XG4gIGxlZnQ6IDEuNjI1ZW07XG4gIHdpZHRoOiAwLjQzNzVlbTtcbiAgaGVpZ2h0OiA1LjYyNWVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDAuMzEyNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVkYzg2O1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF0ge1xuICB0b3A6IDIuODc1ZW07XG4gIGxlZnQ6IDAuODEyNWVtO1xuICB3aWR0aDogMS41NjI1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXSB7XG4gIHRvcDogMi4zNzVlbTtcbiAgcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMi45Mzc1ZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG4uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIDAuNzVzO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nIHtcbiAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIDAuNzVzO1xufVxuLnN3YWwyLWljb24uc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodCB7XG4gIGFuaW1hdGlvbjogc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO1xufVxuXG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMS4yNWVtO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICB6LWluZGV4OiAyMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGJhY2tncm91bmQ6ICMyNzc4YzQ7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjMjc3OGM0O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcCB+IC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xufVxuLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmUge1xuICB6LWluZGV4OiAxMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAyLjVlbTtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgbWFyZ2luOiAwIC0xcHg7XG4gIGJhY2tncm91bmQ6ICMyNzc4YzQ7XG59XG5cbltjbGFzc149c3dhbDJdIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3YWwyLXNob3cge1xuICBhbmltYXRpb246IHN3YWwyLXNob3cgMC4zcztcbn1cblxuLnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246IHN3YWwyLWhpZGUgMC4xNXMgZm9yd2FyZHM7XG59XG5cbi5zd2FsMi1ub2FuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5zd2FsMi1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc3dhbDItcnRsIC5zd2FsMi1jbG9zZSB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xufVxuLnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG59XG5cbkBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOiB0cnVlKSB7XG4gIC5zd2FsMi1yYW5nZSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAuc3dhbDItcmFuZ2Ugb3V0cHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuc3dhbDItcmFuZ2UgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnN3YWwyLXJhbmdlIG91dHB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTtcbiAgfVxuICA2NiUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDFkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMC41NjI1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDAuMTI1ZW07XG4gICAgbGVmdDogMC4xMjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuICA3MCUge1xuICAgIHRvcDogMC42MjVlbTtcbiAgICBsZWZ0OiAtMC4yNWVtO1xuICAgIHdpZHRoOiAxLjYyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAwLjc1ZW07XG4gICAgd2lkdGg6IDAuNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMS4xMjVlbTtcbiAgICBsZWZ0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMC43NWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuOTM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAwLjkzNzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMS4xMjVlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwLjE4NzVlbTtcbiAgICB3aWR0aDogMS4zNzVlbTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2FsMi1zaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgfVxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItaGlkZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogMC4wNjI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNTQlIHtcbiAgICB0b3A6IDEuMDYyNWVtO1xuICAgIGxlZnQ6IDAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgNzAlIHtcbiAgICB0b3A6IDIuMTg3NWVtO1xuICAgIGxlZnQ6IC0wLjM3NWVtO1xuICAgIHdpZHRoOiAzLjEyNWVtO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMi44MTI1ZW07XG4gICAgbGVmdDogMC44MTI1ZW07XG4gICAgd2lkdGg6IDEuNTYyNWVtO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDY1JSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDg0JSB7XG4gICAgdG9wOiAyLjE4NzVlbTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMy40Mzc1ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAwLjVlbTtcbiAgICB3aWR0aDogMi45Mzc1ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEyJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQwNWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsge1xuICAwJSB7XG4gICAgbWFyZ2luLXRvcDogMS42MjVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgODAlIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbmJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYm9keS5zd2FsMi1oZWlnaHQtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDAuNjI1ZW0gKiAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lciA+IC5zd2FsMi1tb2RhbCB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Age1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1zdGFydCwgYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0IHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsIGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbkBtZWRpYSBwcmludCB7XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICB9XG4gIGJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgPiBbYXJpYS1oaWRkZW49dHJ1ZV0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYm9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1yaWdodCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogYXV0bztcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bztcbiAgbGVmdDogMDtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsIGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwgYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0LCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQge1xuICB0b3A6IGF1dG87XG4gIHJpZ2h0OiBhdXRvO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tIHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbmJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLCBib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgdG9wOiBhdXRvO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiBhdXRvO1xufSIsIkBtaXhpbiBpZSB7XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwMjUwMTYxXG5AbWl4aW4gbm90KCRpZ25vci1saXN0Li4uKSB7XG4gIEBpZiAobGVuZ3RoKCRpZ25vci1saXN0KSA9PSAxKSB7XG4gICAgJGlnbm9yLWxpc3Q6IG50aCgkaWdub3ItbGlzdCwgMSk7XG4gIH1cblxuICAkbm90LW91dHB1dDogJyc7XG5cbiAgQGVhY2ggJG5vdCBpbiAkaWdub3ItbGlzdCB7XG4gICAgJG5vdC1vdXRwdXQ6ICRub3Qtb3V0cHV0ICsgJzpub3QoI3skbm90fSknOyAvLyBzdHlsZWxpbnQtZGlzYWJsZS1saW5lIHNjc3Mvbm8tZHVwbGljYXRlLWRvbGxhci12YXJpYWJsZXNcbiAgfVxuXG4gICYjeyRub3Qtb3V0cHV0fSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIi5zd2FsMi1jb250YWluZXIge1xuICAvLyBjZW50ZXJpbmdcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDYwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAkc3dhbDItY29udGFpbmVyLXBhZGRpbmc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogJHN3YWwyLWJhY2tkcm9wLXRyYW5zaXRpb247XG5cbiAgLy8gc3dlZXRhbGVydDIvaXNzdWVzLzkwNVxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgJi5zd2FsMi1iYWNrZHJvcC1zaG93LFxuICAmLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2Ryb3A7XG4gIH1cblxuICAmLnN3YWwyLWJhY2tkcm9wLWhpZGUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmLnN3YWwyLXRvcCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi10b3AtZW5kLFxuICAmLnN3YWwyLXRvcC1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICYuc3dhbDItY2VudGVyLWxlZnQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAmLnN3YWwyLWNlbnRlci1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxuXG4gICYuc3dhbDItYm90dG9tLXN0YXJ0LFxuICAmLnN3YWwyLWJvdHRvbS1sZWZ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAmLnN3YWwyLWJvdHRvbS1yaWdodCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAmLnN3YWwyLWJvdHRvbSA+IDpmaXJzdC1jaGlsZCxcbiAgJi5zd2FsMi1ib3R0b20tc3RhcnQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLWxlZnQgPiA6Zmlyc3QtY2hpbGQsXG4gICYuc3dhbDItYm90dG9tLWVuZCA+IDpmaXJzdC1jaGlsZCxcbiAgJi5zd2FsMi1ib3R0b20tcmlnaHQgPiA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cblxuICAmLnN3YWwyLWdyb3ctZnVsbHNjcmVlbiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1yb3cgPiAuc3dhbDItbW9kYWwge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gICYuc3dhbDItZ3Jvdy1jb2x1bW4ge1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYuc3dhbDItdG9wLFxuICAgICYuc3dhbDItY2VudGVyLFxuICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi5zd2FsMi10b3Atc3RhcnQsXG4gICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgJi5zd2FsMi1ib3R0b20tc3RhcnQsXG4gICAgJi5zd2FsMi10b3AtbGVmdCxcbiAgICAmLnN3YWwyLWNlbnRlci1sZWZ0LFxuICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICYuc3dhbDItY2VudGVyLWVuZCxcbiAgICAmLnN3YWwyLWJvdHRvbS1lbmQsXG4gICAgJi5zd2FsMi10b3AtcmlnaHQsXG4gICAgJi5zd2FsMi1jZW50ZXItcmlnaHQsXG4gICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgICYgPiAuc3dhbDItbW9kYWwge1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgZmxleDogMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICYuc3dhbDItbm8tdHJhbnNpdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgQGluY2x1ZGUgbm90KCcuc3dhbDItdG9wJyxcbiAgJy5zd2FsMi10b3Atc3RhcnQnLFxuICAnLnN3YWwyLXRvcC1lbmQnLFxuICAnLnN3YWwyLXRvcC1sZWZ0JyxcbiAgJy5zd2FsMi10b3AtcmlnaHQnLFxuICAnLnN3YWwyLWNlbnRlci1zdGFydCcsXG4gICcuc3dhbDItY2VudGVyLWVuZCcsXG4gICcuc3dhbDItY2VudGVyLWxlZnQnLFxuICAnLnN3YWwyLWNlbnRlci1yaWdodCcsXG4gICcuc3dhbDItYm90dG9tJyxcbiAgJy5zd2FsMi1ib3R0b20tc3RhcnQnLFxuICAnLnN3YWwyLWJvdHRvbS1lbmQnLFxuICAnLnN3YWwyLWJvdHRvbS1sZWZ0JyxcbiAgJy5zd2FsMi1ib3R0b20tcmlnaHQnLFxuICAnLnN3YWwyLWdyb3ctZnVsbHNjcmVlbicpIHtcbiAgICAmID4gLnN3YWwyLW1vZGFsIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBpZSB7XG4gICAgLnN3YWwyLW1vZGFsIHtcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4uc3dhbDItcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogJHN3YWwyLXdpZHRoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6ICRzd2FsMi1wYWRkaW5nO1xuICBib3JkZXI6ICRzd2FsMi1ib3JkZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1ib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcbiAgZm9udC1mYW1pbHk6ICRzd2FsMi1mb250O1xuICBmb250LXNpemU6ICRzd2FsMi1mb250LXNpemU7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICYuc3dhbDItbG9hZGluZyB7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG59XG5cbi5zd2FsMi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAkc3dhbDItaGVhZGVyLXBhZGRpbmc7XG59XG5cbi5zd2FsMi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46ICRzd2FsMi10aXRsZS1tYXJnaW47XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAkc3dhbDItdGl0bGUtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLXRpdGxlLWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uc3dhbDItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDE7IC8vIHByZXZlbnQgc3VjZXNzIGljb24gZnJvbSBvdmVybGFwcGluZyBidXR0b25zXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogJHN3YWwyLWFjdGlvbnMtZmxleC13cmFwO1xuICBhbGlnbi1pdGVtczogJHN3YWwyLWFjdGlvbnMtYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLWFjdGlvbnMtanVzdGlmeS1jb250ZW50O1xuICB3aWR0aDogJHN3YWwyLWFjdGlvbnMtd2lkdGg7XG4gIG1hcmdpbjogJHN3YWwyLWFjdGlvbnMtbWFyZ2luO1xuICBwYWRkaW5nOiAkc3dhbDItYWN0aW9ucy1wYWRkaW5nO1xuXG4gICY6bm90KC5zd2FsMi1sb2FkaW5nKSB7XG4gICAgLnN3YWwyLXN0eWxlZCB7XG4gICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzd2FsMi1idXR0b24tZGFya2VuLWhvdmVyLCAkc3dhbDItYnV0dG9uLWRhcmtlbi1ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzd2FsMi1idXR0b24tZGFya2VuLWFjdGl2ZSwgJHN3YWwyLWJ1dHRvbi1kYXJrZW4tYWN0aXZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN3YWwyLWxvYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItbG9hZGVyLWFsaWduLWl0ZW1zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRzd2FsMi1sb2FkZXItanVzdGlmeS1jb250ZW50O1xuICB3aWR0aDogJHN3YWwyLWxvYWRlci13aWR0aDtcbiAgaGVpZ2h0OiAkc3dhbDItbG9hZGVyLWhlaWdodDtcbiAgbWFyZ2luOiAkc3dhbDItbG9hZGVyLW1hcmdpbjtcbiAgYW5pbWF0aW9uOiAkc3dhbDItbG9hZGVyLWFuaW1hdGlvbjtcbiAgYm9yZGVyLXdpZHRoOiAkc3dhbDItbG9hZGVyLWJvcmRlci13aWR0aDtcbiAgYm9yZGVyLXN0eWxlOiAkc3dhbDItbG9hZGVyLWJvcmRlci1zdHlsZTtcbiAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWxvYWRlci1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6ICRzd2FsMi1sb2FkZXItYm9yZGVyLWNvbG9yO1xufVxuXG4uc3dhbDItc3R5bGVkIHtcbiAgbWFyZ2luOiAkc3dhbDItYnV0dG9uLW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWJ1dHRvbi1wYWRkaW5nO1xuICBib3gtc2hhZG93OiAkc3dhbDItYnV0dG9uLWJveC1zaGFkb3c7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItYnV0dG9uLWZvbnQtd2VpZ2h0O1xuXG4gICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmLnN3YWwyLWNvbmZpcm0ge1xuICAgIG9yZGVyOiAkc3dhbDItY29uZmlybS1idXR0b24tb3JkZXI7XG4gICAgYm9yZGVyOiAkc3dhbDItY29uZmlybS1idXR0b24tYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWNvbmZpcm0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1jb2xvcjtcbiAgICBmb250LXNpemU6ICRzd2FsMi1jb25maXJtLWJ1dHRvbi1mb250LXNpemU7XG4gIH1cblxuICAmLnN3YWwyLWRlbnkge1xuICAgIG9yZGVyOiAkc3dhbDItZGVueS1idXR0b24tb3JkZXI7XG4gICAgYm9yZGVyOiAkc3dhbDItZGVueS1idXR0b24tYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1kZW55LWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLWRlbnktYnV0dG9uLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6ICRzd2FsMi1kZW55LWJ1dHRvbi1jb2xvcjtcbiAgICBmb250LXNpemU6ICRzd2FsMi1kZW55LWJ1dHRvbi1mb250LXNpemU7XG4gIH1cblxuICAmLnN3YWwyLWNhbmNlbCB7XG4gICAgb3JkZXI6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLW9yZGVyO1xuICAgIGJvcmRlcjogJHN3YWwyLWNhbmNlbC1idXR0b24tYm9yZGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiAkc3dhbDItY2FuY2VsLWJ1dHRvbi1jb2xvcjtcbiAgICBmb250LXNpemU6ICRzd2FsMi1jYW5jZWwtYnV0dG9uLWZvbnQtc2l6ZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6ICRzd2FsMi1idXR0b24tZm9jdXMtb3V0bGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3dhbDItYnV0dG9uLWZvY3VzLWJhY2tncm91bmQtY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHN3YWwyLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93O1xuICB9XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbi5zd2FsMi1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAkc3dhbDItZm9vdGVyLW1hcmdpbjtcbiAgcGFkZGluZzogJHN3YWwyLWZvb3Rlci1wYWRkaW5nO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHN3YWwyLWZvb3Rlci1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiAkc3dhbDItZm9vdGVyLWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1mb290ZXItZm9udC1zaXplO1xufVxuXG4uc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWhlaWdodDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRzd2FsMi1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc3dhbDItYm9yZGVyLXJhZGl1cztcbn1cblxuLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRzd2FsMi10aW1lci1wcm9ncmVzcy1iYXItaGVpZ2h0O1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ7XG59XG5cbi5zd2FsMi1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAkc3dhbDItaW1hZ2UtbWFyZ2luO1xufVxuXG4uc3dhbDItY2xvc2Uge1xuICBwb3NpdGlvbjogJHN3YWwyLWNsb3NlLWJ1dHRvbi1wb3NpdGlvbjtcbiAgei1pbmRleDogMjsgLy8gc3dlZXRhbGVydDIvaXNzdWVzLzE2MTdcbiAgdG9wOiAkc3dhbDItY2xvc2UtYnV0dG9uLWdhcDtcbiAgcmlnaHQ6ICRzd2FsMi1jbG9zZS1idXR0b24tZ2FwO1xuICBhbGlnbi1pdGVtczogJHN3YWwyLWNsb3NlLWJ1dHRvbi1hbGlnbi1pdGVtcztcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItY2xvc2UtYnV0dG9uLWp1c3RpZnktY29udGVudDtcbiAgd2lkdGg6ICRzd2FsMi1jbG9zZS1idXR0b24td2lkdGg7XG4gIGhlaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1oZWlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246ICRzd2FsMi1jbG9zZS1idXR0b24tdHJhbnNpdGlvbjtcbiAgYm9yZGVyOiAkc3dhbDItY2xvc2UtYnV0dG9uLWJvcmRlcjtcbiAgYm9yZGVyLXJhZGl1czogJHN3YWwyLWNsb3NlLWJ1dHRvbi1ib3JkZXItcmFkaXVzO1xuICBvdXRsaW5lOiAkc3dhbDItY2xvc2UtYnV0dG9uLW91dGxpbmU7XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1jbG9zZS1idXR0b24tYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1jbG9zZS1idXR0b24tY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItY2xvc2UtYnV0dG9uLWZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9udC1zaXplO1xuICBsaW5lLWhlaWdodDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1saW5lLWhlaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci10cmFuc2Zvcm07XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWNsb3NlLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAkc3dhbDItY2xvc2UtYnV0dG9uLWhvdmVyLWNvbG9yO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogJHN3YWwyLWNsb3NlLWJ1dHRvbi1mb2N1cy1vdXRsaW5lO1xuICAgIGJveC1zaGFkb3c6ICRzd2FsMi1jbG9zZS1idXR0b24tZm9jdXMtYm94LXNoYWRvdztcbiAgfVxuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4uc3dhbDItY29udGVudCB7XG4gIHotaW5kZXg6IDE7IC8vIHByZXZlbnQgc3VjZXNzIGljb24gb3ZlcmxhcHBpbmcgdGhlIGNvbnRlbnRcbiAganVzdGlmeS1jb250ZW50OiAkc3dhbDItY29udGVudC1qdXN0aWZ5LWNvbnRlbnQ7XG4gIG1hcmdpbjogJHN3YWwyLWNvbnRlbnQtbWFyZ2luO1xuICBwYWRkaW5nOiAkc3dhbDItY29udGVudC1wYWRkaW5nO1xuICBjb2xvcjogJHN3YWwyLWNvbnRlbnQtY29sb3I7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWNvbnRlbnQtZm9udC1zaXplO1xuICBmb250LXdlaWdodDogJHN3YWwyLWNvbnRlbnQtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkc3dhbDItY29udGVudC1saW5lLWhlaWdodDtcbiAgdGV4dC1hbGlnbjogJHN3YWwyLWNvbnRlbnQtdGV4dC1hbGlnbjtcbiAgd29yZC13cmFwOiAkc3dhbDItY29udGVudC13b3JkLXdyYXA7XG59XG5cbi5zd2FsMi1pbnB1dCxcbi5zd2FsMi1maWxlLFxuLnN3YWwyLXRleHRhcmVhLFxuLnN3YWwyLXNlbGVjdCxcbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIG1hcmdpbjogJHN3YWwyLWlucHV0LW1hcmdpbjtcbn1cblxuLnN3YWwyLWlucHV0LFxuLnN3YWwyLWZpbGUsXG4uc3dhbDItdGV4dGFyZWEge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogJHN3YWwyLWlucHV0LXdpZHRoO1xuICB0cmFuc2l0aW9uOiAkc3dhbDItaW5wdXQtdHJhbnNpdGlvbjtcbiAgYm9yZGVyOiAkc3dhbDItaW5wdXQtYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAkc3dhbDItaW5wdXQtYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6ICRzd2FsMi1pbnB1dC1ib3gtc2hhZG93O1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG5cbiAgJi5zd2FsMi1pbnB1dGVycm9yIHtcbiAgICBib3JkZXItY29sb3I6ICRzd2FsMi1lcnJvciAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggJHN3YWwyLWVycm9yICFpbXBvcnRhbnQ7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICRzd2FsMi1pbnB1dC1mb2N1cy1ib3JkZXI7XG4gICAgb3V0bGluZTogJHN3YWwyLWlucHV0LWZvY3VzLW91dGxpbmU7XG4gICAgYm94LXNoYWRvdzogJHN3YWwyLWlucHV0LWZvY3VzLWJveC1zaGFkb3c7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLWJsYWNrLCA4MCk7XG4gIH1cbn1cblxuLnN3YWwyLXJhbmdlIHtcbiAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbWFyZ2luO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIG91dHB1dCB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaW5wdXQsXG4gIG91dHB1dCB7XG4gICAgaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc3dhbDItaW5wdXQtaGVpZ2h0O1xuICB9XG59XG5cbi5zd2FsMi1pbnB1dCB7XG4gIGhlaWdodDogJHN3YWwyLWlucHV0LWhlaWdodDtcbiAgcGFkZGluZzogJHN3YWwyLWlucHV0LXBhZGRpbmc7XG5cbiAgJlt0eXBlPSdudW1iZXInXSB7XG4gICAgbWF4LXdpZHRoOiAxMGVtO1xuICB9XG59XG5cbi5zd2FsMi1maWxlIHtcbiAgYmFja2dyb3VuZDogJHN3YWwyLWlucHV0LWJhY2tncm91bmQ7XG4gIGZvbnQtc2l6ZTogJHN3YWwyLWlucHV0LWZvbnQtc2l6ZTtcbn1cblxuLnN3YWwyLXRleHRhcmVhIHtcbiAgaGVpZ2h0OiAkc3dhbDItdGV4dGFyZWEtaGVpZ2h0O1xuICBwYWRkaW5nOiAkc3dhbDItdGV4dGFyZWEtcGFkZGluZztcbn1cblxuLnN3YWwyLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IC4zNzVlbSAuNjI1ZW07XG4gIGJhY2tncm91bmQ6ICRzd2FsMi1pbnB1dC1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLWlucHV0LWNvbG9yO1xuICBmb250LXNpemU6ICRzd2FsMi1pbnB1dC1mb250LXNpemU7XG59XG5cbi5zd2FsMi1yYWRpbyxcbi5zd2FsMi1jaGVja2JveCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkc3dhbDItYmFja2dyb3VuZDtcbiAgY29sb3I6ICRzd2FsMi1pbnB1dC1jb2xvcjtcblxuICBsYWJlbCB7XG4gICAgbWFyZ2luOiAwIC42ZW07XG4gICAgZm9udC1zaXplOiAkc3dhbDItaW5wdXQtZm9udC1zaXplO1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbjogMCAuNGVtO1xuICB9XG59XG5cbi5zd2FsMi1pbnB1dC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLWlucHV0LWxhYmVsLWp1c3RpZnktY29udGVudDtcbiAgbWFyZ2luOiAkc3dhbDItaW5wdXQtbGFiZWwtbWFyZ2luO1xufVxuXG4uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlIHtcbiAgYWxpZ24taXRlbXM6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtYWxpZ24taXRlbXM7XG4gIGp1c3RpZnktY29udGVudDogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1qdXN0aWZ5LWNvbnRlbnQ7XG4gIG1hcmdpbjogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1tYXJnaW47XG4gIHBhZGRpbmc6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtcGFkZGluZztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1iYWNrZ3JvdW5kO1xuICBjb2xvcjogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1jb2xvcjtcbiAgZm9udC1zaXplOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWZvbnQtc2l6ZTtcbiAgZm9udC13ZWlnaHQ6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtZm9udC13ZWlnaHQ7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnISc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWFyZ2luOiAwIC42MjVlbTtcbiAgICB6b29tOiAkc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlLWljb24tem9vbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZS1pY29uLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UtaWNvbi1jb2xvcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEyMzM1ODQxLzEzMzE0MjVcbkBmdW5jdGlvbiBzdHJpcC11bml0cygkbnVtYmVyKSB7XG4gIEByZXR1cm4gJG51bWJlciAvICgkbnVtYmVyICogMCArIDEpO1xufVxuJGljb24tem9vbTogc3RyaXAtdW5pdHMoJHN3YWwyLWljb24tc2l6ZSkgLyA1O1xuXG4uc3dhbDItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogJHN3YWwyLWljb24tc2l6ZTtcbiAgaGVpZ2h0OiAkc3dhbDItaWNvbi1zaXplO1xuICBtYXJnaW46ICRzd2FsMi1pY29uLW1hcmdpbjtcbiAgem9vbTogJHN3YWwyLWljb24tem9vbTtcbiAgYm9yZGVyOiAjey4yNWVtICogJGljb24tem9vbX0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWNvbG9yOiAkc3dhbDItaWNvbi1ib3JkZXItY29sb3I7XG4gIGZvbnQtZmFtaWx5OiAkc3dhbDItaWNvbi1mb250LWZhbWlseTtcbiAgbGluZS1oZWlnaHQ6ICRzd2FsMi1pY29uLXNpemU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLnN3YWwyLWljb24tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogJHN3YWwyLWljb24tZm9udC1zaXplO1xuICB9XG5cbiAgJi5zd2FsMi1lcnJvciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkc3dhbDItZXJyb3I7XG4gICAgY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxO1xuXG4gICAgICBAaWYgJGljb24tem9vbSAhPSAxIHtcbiAgICAgICAgem9vbTogJGljb24tem9vbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbY2xhc3NePSdzd2FsMi14LW1hcmstbGluZSddIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAyLjMxMjVlbTtcbiAgICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgICAgIGhlaWdodDogLjMxMjVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1lcnJvcjtcblxuICAgICAgJltjbGFzcyQ9J2xlZnQnXSB7XG4gICAgICAgIGxlZnQ6IDEuMDYyNWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG5cbiAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgcmlnaHQ6IDFlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFcnJvciBpY29uIGFuaW1hdGlvblxuICAgICYuc3dhbDItaWNvbi1zaG93IHtcbiAgICAgIEBpZiAkc3dhbDItaWNvbi1hbmltYXRpb25zIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO1xuXG4gICAgICAgIC5zd2FsMi14LW1hcmsge1xuICAgICAgICAgIGFuaW1hdGlvbjogc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5zd2FsMi13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJHN3YWwyLXdhcm5pbmcsIDcpO1xuICAgIGNvbG9yOiAkc3dhbDItd2FybmluZztcbiAgfVxuXG4gICYuc3dhbDItaW5mbyB7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1pbmZvLCAyMCk7XG4gICAgY29sb3I6ICRzd2FsMi1pbmZvO1xuICB9XG5cbiAgJi5zd2FsMi1xdWVzdGlvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRzd2FsMi1xdWVzdGlvbiwgMjApO1xuICAgIGNvbG9yOiAkc3dhbDItcXVlc3Rpb247XG4gIH1cblxuICAmLnN3YWwyLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogJHN3YWwyLXN1Y2Nlc3M7XG4gICAgY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgW2NsYXNzXj0nc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lJ10ge1xuICAgICAgLy8gRW11bGF0ZSBtb3ZpbmcgY2lyY3VsYXIgbGluZVxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDMuNzVlbTtcbiAgICAgIGhlaWdodDogNy41ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICZbY2xhc3MkPSdsZWZ0J10ge1xuICAgICAgICB0b3A6IC0uNDM3NWVtO1xuICAgICAgICBsZWZ0OiAtMi4wNjM1ZW07XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMuNzVlbSAzLjc1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNWVtIDAgMCA3LjVlbTtcblxuICAgICAgICBAaWYgJGljb24tem9vbSAhPSAxIHtcbiAgICAgICAgICB6b29tOiAkaWNvbi16b29tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICZbY2xhc3MkPSdyaWdodCddIHtcbiAgICAgICAgdG9wOiAtLjY4NzVlbTtcbiAgICAgICAgbGVmdDogMS44NzVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAzLjc1ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNy41ZW0gNy41ZW0gMDtcblxuICAgICAgICBAaWYgJGljb24tem9vbSAhPSAxIHtcbiAgICAgICAgICB6b29tOiAkaWNvbi16b29tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN3YWwyLXN1Y2Nlc3MtcmluZyB7XG4gICAgICAvLyBSaW5nXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgdG9wOiAtLjI1ZW07XG4gICAgICBsZWZ0OiAtLjI1ZW07XG4gICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiAuMjVlbSBzb2xpZCAkc3dhbDItc3VjY2Vzcy1ib3JkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIEBpZiAkaWNvbi16b29tICE9IDEge1xuICAgICAgICB6b29tOiAkaWNvbi16b29tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zd2FsMi1zdWNjZXNzLWZpeCB7XG4gICAgICAvLyBIaWRlIGNvcm5lcnMgbGVmdCBmcm9tIGFuaW1hdGlvblxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRvcDogLjVlbTtcbiAgICAgIGxlZnQ6IDEuNjI1ZW07XG4gICAgICB3aWR0aDogLjQzNzVlbTtcbiAgICAgIGhlaWdodDogNS42MjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG5cbiAgICAgIEBpZiAkaWNvbi16b29tICE9IDEge1xuICAgICAgICB6b29tOiAkaWNvbi16b29tO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtjbGFzc149J3N3YWwyLXN1Y2Nlc3MtbGluZSddIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGhlaWdodDogLjMxMjVlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4xMjVlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzd2FsMi1zdWNjZXNzO1xuXG4gICAgICAmW2NsYXNzJD0ndGlwJ10ge1xuICAgICAgICB0b3A6IDIuODc1ZW07XG4gICAgICAgIGxlZnQ6IC44MTI1ZW07XG4gICAgICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAmW2NsYXNzJD0nbG9uZyddIHtcbiAgICAgICAgdG9wOiAyLjM3NWVtO1xuICAgICAgICByaWdodDogLjVlbTtcbiAgICAgICAgd2lkdGg6IDIuOTM3NWVtO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGljb24tem9vbSAhPSAxIHtcbiAgICAgICAgem9vbTogJGljb24tem9vbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdWNjZXNzIGljb24gYW5pbWF0aW9uXG4gICAgJi5zd2FsMi1pY29uLXNob3cge1xuICAgICAgQGlmICRzd2FsMi1pY29uLWFuaW1hdGlvbnMge1xuICAgICAgICAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZyB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0IHtcbiAgICAgICAgICBhbmltYXRpb246IHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMge1xuICBmbGV4LXdyYXA6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1mbGV4LXdyYXA7XG4gIGFsaWduLWl0ZW1zOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtYWxpZ24taXRlbXM7XG4gIG1heC13aWR0aDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLW1heC13aWR0aDtcbiAgbWFyZ2luOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtbWFyZ2luO1xuICBwYWRkaW5nOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtcGFkZGluZztcbiAgYmFja2dyb3VuZDogJHN3YWwyLXByb2dyZXNzLXN0ZXBzLWJhY2tncm91bmQ7XG4gIGZvbnQtd2VpZ2h0OiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcHMtZm9udC13ZWlnaHQ7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuc3dhbDItcHJvZ3Jlc3Mtc3RlcCB7XG4gICAgei1pbmRleDogMjA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgd2lkdGg6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLXdpZHRoO1xuICAgIGhlaWdodDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0O1xuICAgIGJvcmRlci1yYWRpdXM6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ7XG4gICAgY29sb3I6ICRzd2FsMi1hY3RpdmUtc3RlcC1jb2xvcjtcbiAgICBsaW5lLWhlaWdodDogJHN3YWwyLXByb2dyZXNzLXN0ZXAtaGVpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICYuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXAge1xuICAgICAgYmFja2dyb3VuZDogJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ7XG5cbiAgICAgIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkc3dhbDItcHJvZ3Jlc3Mtc3RlcC1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJHN3YWwyLXByb2dyZXNzLXN0ZXAtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIH4gLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRzd2FsMi1wcm9ncmVzcy1zdGVwLWJhY2tncm91bmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZSB7XG4gICAgei1pbmRleDogMTA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgd2lkdGg6ICRzd2FsMi1wcm9ncmVzcy1zdGVwcy1kaXN0YW5jZTtcbiAgICBoZWlnaHQ6IC40ZW07XG4gICAgbWFyZ2luOiAwIC0xcHg7XG4gICAgYmFja2dyb3VuZDogJHN3YWwyLWFjdGl2ZS1zdGVwLWJhY2tncm91bmQ7XG4gIH1cbn1cblxuLy8gZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjY4XG5bY2xhc3NePSdzd2FsMiddIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3YWwyLXNob3cge1xuICBhbmltYXRpb246ICRzd2FsMi1zaG93LWFuaW1hdGlvbjtcbn1cblxuLnN3YWwyLWhpZGUge1xuICBhbmltYXRpb246ICRzd2FsMi1oaWRlLWFuaW1hdGlvbjtcbn1cblxuLnN3YWwyLW5vYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLy8gTWVhc3VyZSBzY3JvbGxiYXIgd2lkdGggZm9yIHBhZGRpbmcgYm9keSBkdXJpbmcgbW9kYWwgc2hvdy9oaWRlXG4uc3dhbDItc2Nyb2xsYmFyLW1lYXN1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTk5OTlweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLy8gUmlnaHQtdG8tbGVmdCBzdXBwb3J0XG4uc3dhbDItcnRsIHtcbiAgLnN3YWwyLWNsb3NlIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAkc3dhbDItY2xvc2UtYnV0dG9uLWdhcDtcbiAgfVxuXG4gIC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIge1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cbiIsIi8vIE1pY3Jvc29mdCBFZGdlXG5Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjogdHJ1ZSkge1xuICAuc3dhbDItcmFuZ2Uge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgb3V0cHV0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8vIElFMTFcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXG4gICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5zd2FsMi1yYW5nZSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBvdXRwdXQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuXG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO1xuICB9XG5cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGVaKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigxZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogLjU2MjVlbTtcbiAgICBsZWZ0OiAuMDYyNWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNTQlIHtcbiAgICB0b3A6IC4xMjVlbTtcbiAgICBsZWZ0OiAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA3MCUge1xuICAgIHRvcDogLjYyNWVtO1xuICAgIGxlZnQ6IC0uMjVlbTtcbiAgICB3aWR0aDogMS42MjVlbTtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuNzVlbTtcbiAgICB3aWR0aDogLjVlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRvcDogMS4xMjVlbTtcbiAgICBsZWZ0OiAuMTg3NWVtO1xuICAgIHdpZHRoOiAuNzVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAxLjYyNWVtO1xuICAgIHJpZ2h0OiAxLjM3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0b3A6IDEuMjVlbTtcbiAgICByaWdodDogLjkzNzVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAuOTM3NWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxLjEyNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAuOTM3NWVtO1xuICAgIHJpZ2h0OiAuMTg3NWVtO1xuICAgIHdpZHRoOiAxLjM3NWVtO1xuICB9XG59XG4iLCJAaW1wb3J0ICd0b2FzdHMtYW5pbWF0aW9ucyc7XG5cbi8vIEFwcGVhcmFuY2UgYW5pbWF0aW9uXG5Aa2V5ZnJhbWVzIHN3YWwyLXNob3cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XG4gIH1cblxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLy8gRGlzcHBlYXJhbmNlIGFuaW1hdGlvblxuQGtleWZyYW1lcyBzd2FsMi1oaWRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLy8gU3VjY2VzcyBpY29uIGFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIHtcbiAgMCUge1xuICAgIHRvcDogMS4xODc1ZW07XG4gICAgbGVmdDogLjA2MjVlbTtcbiAgICB3aWR0aDogMDtcbiAgfVxuXG4gIDU0JSB7XG4gICAgdG9wOiAxLjA2MjVlbTtcbiAgICBsZWZ0OiAuMTI1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA3MCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgbGVmdDogLS4zNzVlbTtcbiAgICB3aWR0aDogMy4xMjVlbTtcbiAgfVxuXG4gIDg0JSB7XG4gICAgdG9wOiAzZW07XG4gICAgbGVmdDogMS4zMTI1ZW07XG4gICAgd2lkdGg6IDEuMDYyNWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjgxMjVlbTtcbiAgICBsZWZ0OiAuODEyNWVtO1xuICAgIHdpZHRoOiAxLjU2MjVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcge1xuICAwJSB7XG4gICAgdG9wOiAzLjM3NWVtO1xuICAgIHJpZ2h0OiAyLjg3NWVtO1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgNjUlIHtcbiAgICB0b3A6IDMuMzc1ZW07XG4gICAgcmlnaHQ6IDIuODc1ZW07XG4gICAgd2lkdGg6IDA7XG4gIH1cblxuICA4NCUge1xuICAgIHRvcDogMi4xODc1ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDMuNDM3NWVtO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdG9wOiAyLjM3NWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xuICAgIHdpZHRoOiAyLjkzNzVlbTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIDUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgMTIlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDA1ZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00MDVkZWcpO1xuICB9XG59XG5cbi8vIEVycm9yIGljb24gYW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayB7XG4gIDAlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjYyNWVtO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjQpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEuNjI1ZW07XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDgwJSB7XG4gICAgbWFyZ2luLXRvcDogLS4zNzVlbTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iLCJAaW1wb3J0ICd0b2FzdHMtYm9keSc7XG5cbkBtaXhpbiBzd2VldGFsZXJ0Mi1ib2R5KCkge1xuICAmLnN3YWwyLXNob3duIHtcbiAgICBAaW5jbHVkZSBub3QoJy5zd2FsMi1uby1iYWNrZHJvcCcsICcuc3dhbDItdG9hc3Qtc2hvd24nKSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyAvLyBub3Qgb3ZlcmZsb3cteSBiZWNhdXNlIG9mIFNhcmFyaSwgIzEyNTNcbiAgICB9XG4gIH1cblxuICAmLnN3YWwyLWhlaWdodC1hdXRvIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgLy8gIzc4MSAjMTEwN1xuICB9XG5cbiAgJi5zd2FsMi1uby1iYWNrZHJvcCB7XG4gICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICN7JHN3YWwyLWNvbnRhaW5lci1wYWRkaW5nfSAqIDIpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgJiA+IC5zd2FsMi1tb2RhbCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICRzd2FsMi1iYWNrZHJvcDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLXRvcC1zdGFydCxcbiAgICAgICYuc3dhbDItdG9wLWxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLWVuZCxcbiAgICAgICYuc3dhbDItdG9wLXJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAgICAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tLWVuZCxcbiAgICAgICYuc3dhbDItYm90dG9tLXJpZ2h0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgcHJpbnQge1xuICAgICYuc3dhbDItc2hvd24ge1xuICAgICAgQGluY2x1ZGUgbm90KCcuc3dhbDItbm8tYmFja2Ryb3AnLCAnLnN3YWwyLXRvYXN0LXNob3duJykge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcblxuICAgICAgICA+IFthcmlhLWhpZGRlbj0ndHJ1ZSddIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN3YWwyLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gc3dlZXRhbGVydDItdG9hc3RzLWJvZHkoKSB7XG4gICYuc3dhbDItdG9hc3Qtc2hvd24ge1xuICAgIC5zd2FsMi1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICYuc3dhbDItdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi10b3AtZW5kLFxuICAgICAgJi5zd2FsMi10b3AtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItdG9wLXN0YXJ0LFxuICAgICAgJi5zd2FsMi10b3AtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItc3RhcnQsXG4gICAgICAmLnN3YWwyLWNlbnRlci1sZWZ0IHtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXIge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1jZW50ZXItZW5kLFxuICAgICAgJi5zd2FsMi1jZW50ZXItcmlnaHQge1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAmLnN3YWwyLWJvdHRvbS1zdGFydCxcbiAgICAgICYuc3dhbDItYm90dG9tLWxlZnQge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYuc3dhbDItYm90dG9tIHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgJi5zd2FsMi1ib3R0b20tZW5kLFxuICAgICAgJi5zd2FsMi1ib3R0b20tcmlnaHQge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.service.ts ***!
    \************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/api-link.service */
    "./src/app/shared/api-link.service.ts");
    /* harmony import */


    var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../guard/auth.service */
    "./src/app/guard/auth.service.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http, api, auth) {
        _classCallCheck(this, DashboardService);

        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': "application/json",
          'Authorization': this.auth.getLogged()
        });
        this.profileInfo = {};
      }

      _createClass(DashboardService, [{
        key: "getProfInfo",
        value: function getProfInfo() {
          return this.http.get(this.api.server + "profile", {
            headers: this.headers
          });
        }
      }, {
        key: "getAllBill",
        value: function getAllBill(month, year) {
          return this.http.get(this.api.server + "bill/" + month + "/" + year, {
            headers: this.headers
          });
        }
      }, {
        key: "getSponsor",
        value: function getSponsor() {
          return this.http.get(this.api.server + "sponsor", {
            headers: this.headers
          });
        }
      }, {
        key: "addSponsor",
        value: function addSponsor(data) {
          return this.http.post(this.api.server + "sponsor/bill", data, {
            headers: this.headers
          });
        }
      }, {
        key: "getPayee",
        value: function getPayee() {
          return this.http.get(this.api.server + "payee", {
            headers: this.headers
          });
        }
      }, {
        key: "addDelivery",
        value: function addDelivery(data) {
          return this.http.post(this.api.server + "delivery", data, {
            headers: this.headers
          });
        }
      }, {
        key: "getPayeeBill",
        value: function getPayeeBill() {
          return this.http.get(this.api.server + "payee/bill", {
            headers: this.headers
          });
        }
      }, {
        key: "getSponsorBill",
        value: function getSponsorBill() {
          return this.http.get(this.api.server + "sponsor/bill", {
            headers: this.headers
          });
        }
      }, {
        key: "getUploadBill",
        value: function getUploadBill() {
          return this.http.get(this.api.server + "bill-info", {
            headers: this.headers
          });
        }
      }, {
        key: "getProductList",
        value: function getProductList(data) {
          return this.http.post(this.api.server + "product/getProductList", data, {
            headers: this.headers
          });
        }
      }, {
        key: "createNewInvoice",
        value: function createNewInvoice(data) {
          return this.http.post(this.api.server + "bill/generateDealerBill", data, {
            headers: this.headers
          });
        }
      }, {
        key: "generateImageNewInvoice",
        value: function generateImageNewInvoice(data) {
          return this.http.post(this.api.server + "bill/generateDealerBill", data, {
            headers: this.headers
          });
        }
      }, {
        key: "updateDeleiveryInoice",
        value: function updateDeleiveryInoice(data) {
          return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, {
            headers: this.headers
          });
        }
      }, {
        key: "updateCreditInvoice",
        value: function updateCreditInvoice(data) {
          return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, {
            headers: this.headers
          });
        }
      }, {
        key: "updateInvoiceStatus",
        value: function updateInvoiceStatus(data) {
          return this.http.post(this.api.server + "delivery/updateInvoiceStatus", data, {
            headers: this.headers
          });
        }
      }, {
        key: "verifyRetailerMobileNumber",
        value: function verifyRetailerMobileNumber(data) {
          return this.http.post(this.api.server + "verifyMobileNumber", data, {
            headers: this.headers
          });
        }
      }, {
        key: "setProfileInfo",
        value: function setProfileInfo(data) {
          this.profileInfo = data;
        }
      }, {
        key: "getProfileInfo",
        value: function getProfileInfo() {
          return this.profileInfo;
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"]
      }, {
        type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/shoping/shoping.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shoping/shoping.service.ts ***!
    \********************************************/

  /*! exports provided: ShopingService */

  /***/
  function srcAppShopingShopingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopingService", function () {
      return ShopingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/api-link.service */
    "./src/app/shared/api-link.service.ts");
    /* harmony import */


    var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../guard/auth.service */
    "./src/app/guard/auth.service.ts");

    var ShopingService = /*#__PURE__*/function () {
      function ShopingService(http, api, auth) {
        _classCallCheck(this, ShopingService);

        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': "application/json",
          'Authorization': this.auth.getLogged()
        });
        this.upHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': this.auth.getLogged()
        });
        this.upHeaders1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({});
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(ShopingService, [{
        key: "uploadImg",
        value: function uploadImg(data) {
          console.log(data);
          return this.http.post(this.api.delear + "api/comunication/image", data, {
            headers: this.upHeaders1,
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "uploadclassifiedImage",
        value: function uploadclassifiedImage(data) {
          return this.http.post(this.api.delear + "api/comunication/imageuploadclassified", data, {
            headers: this.upHeaders1,
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "uploadclassifiedImage1",
        value: function uploadclassifiedImage1(data) {
          return this.http.post(this.api.delear + "api/comunication/imageLogoUpload", data, {
            headers: this.upHeaders1,
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct(data, url) {
          return this.http.post(this.api.server + url, data, {
            headers: this.headers
          });
        }
      }, {
        key: "getAllProduct",
        value: function getAllProduct(data, token) {
          var duplicateHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
          });
          return this.http.post(this.api.delear + "api/product/allProduct", data, {
            headers: duplicateHeader
          });
        }
      }, {
        key: "delProduct",
        value: function delProduct(data) {
          return this.http.post(this.api.server + 'product/deleteProduct', data, {
            headers: this.headers
          });
        }
      }, {
        key: "myorder",
        value: function myorder(token) {
          var duplicateHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
          });
          return this.http.get(this.api.server + 'product/myOrder', {
            headers: duplicateHeader
          });
        }
      }, {
        key: "acceptedInvoice",
        value: function acceptedInvoice(data) {
          return this.http.post(this.api.server + 'product/updateStatus', data, {
            headers: this.headers
          });
        }
      }, {
        key: "InvoiceSend",
        value: function InvoiceSend(data) {
          return this.http.post(this.api.server + 'product/InvoiceSend', data, {
            headers: this.headers
          });
        }
      }, {
        key: "getSopkeeperInfo",
        value: function getSopkeeperInfo(data) {
          return this.http.post(this.api.server + "profileInformation", data, {
            headers: this.upHeaders1
          });
        }
      }, {
        key: "updateDiscount",
        value: function updateDiscount(data) {
          return this.http.post(this.api.server + 'addDiscount', data, {
            headers: this.headers
          });
        }
      }, {
        key: "reviewMerchant",
        value: function reviewMerchant(data) {
          return this.http.post(this.api.server + "product/writeMerchantReview", data, {
            headers: this.headers
          });
        }
      }]);

      return ShopingService;
    }();

    ShopingService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"]
      }, {
        type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ShopingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShopingService);
    /***/
  }
}]);
//# sourceMappingURL=default~landing-landing-module~shoping-shoping-module-es5.js.map