/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/metronic/js/pages/features/cards/tools.js":
/*!*************************************************************!*\
  !*** ./resources/metronic/js/pages/features/cards/tools.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\nvar KTCardTools = function () {\n  // Toastr\n  var initToastr = function initToastr() {\n    toastr.options.showDuration = 1000;\n  }; // Demo 1\n\n\n  var demo1 = function demo1() {\n    // This card is lazy initialized using data-card=\"true\" attribute. You can access to the card object as shown below and override its behavior\n    var card = new KTCard('kt_card_1'); // Toggle event handlers\n\n    card.on('beforeCollapse', function (card) {\n      setTimeout(function () {\n        toastr.info('Before collapse event fired!');\n      }, 100);\n    });\n    card.on('afterCollapse', function (card) {\n      setTimeout(function () {\n        toastr.warning('Before collapse event fired!');\n      }, 2000);\n    });\n    card.on('beforeExpand', function (card) {\n      setTimeout(function () {\n        toastr.info('Before expand event fired!');\n      }, 100);\n    });\n    card.on('afterExpand', function (card) {\n      setTimeout(function () {\n        toastr.warning('After expand event fired!');\n      }, 2000);\n    }); // Remove event handlers\n\n    card.on('beforeRemove', function (card) {\n      toastr.info('Before remove event fired!');\n      return confirm('Are you sure to remove this card ?'); // remove card after user confirmation\n    });\n    card.on('afterRemove', function (card) {\n      setTimeout(function () {\n        toastr.warning('After remove event fired!');\n      }, 2000);\n    }); // Reload event handlers\n\n    card.on('reload', function (card) {\n      toastr.info('Leload event fired!');\n      KTApp.block(card.getSelf(), {\n        overlayColor: '#ffffff',\n        type: 'loader',\n        state: 'primary',\n        opacity: 0.3,\n        size: 'lg'\n      }); // update the content here\n\n      setTimeout(function () {\n        KTApp.unblock(card.getSelf());\n      }, 2000);\n    });\n  }; // Demo 2\n\n\n  var demo2 = function demo2() {\n    // This card is lazy initialized using data-card=\"true\" attribute. You can access to the card object as shown below and override its behavior\n    var card = new KTCard('kt_card_2'); // Toggle event handlers\n\n    card.on('beforeCollapse', function (card) {\n      setTimeout(function () {\n        toastr.info('Before collapse event fired!');\n      }, 100);\n    });\n    card.on('afterCollapse', function (card) {\n      setTimeout(function () {\n        toastr.warning('Before collapse event fired!');\n      }, 2000);\n    });\n    card.on('beforeExpand', function (card) {\n      setTimeout(function () {\n        toastr.info('Before expand event fired!');\n      }, 100);\n    });\n    card.on('afterExpand', function (card) {\n      setTimeout(function () {\n        toastr.warning('After expand event fired!');\n      }, 2000);\n    }); // Remove event handlers\n\n    card.on('beforeRemove', function (card) {\n      toastr.info('Before remove event fired!');\n      return confirm('Are you sure to remove this card ?'); // remove card after user confirmation\n    });\n    card.on('afterRemove', function (card) {\n      setTimeout(function () {\n        toastr.warning('After remove event fired!');\n      }, 2000);\n    }); // Reload event handlers\n\n    card.on('reload', function (card) {\n      toastr.info('Leload event fired!');\n      KTApp.block(card.getSelf(), {\n        overlayColor: '#000000',\n        type: 'spinner',\n        state: 'primary',\n        opacity: 0.05,\n        size: 'lg'\n      }); // update the content here\n\n      setTimeout(function () {\n        KTApp.unblock(card.getSelf());\n      }, 2000);\n    });\n  }; // Demo 3\n\n\n  var demo3 = function demo3() {\n    // This card is lazy initialized using data-card=\"true\" attribute. You can access to the card object as shown below and override its behavior\n    var card = new KTCard('kt_card_3'); // Toggle event handlers\n\n    card.on('beforeCollapse', function (card) {\n      setTimeout(function () {\n        toastr.info('Before collapse event fired!');\n      }, 100);\n    });\n    card.on('afterCollapse', function (card) {\n      setTimeout(function () {\n        toastr.warning('Before collapse event fired!');\n      }, 2000);\n    });\n    card.on('beforeExpand', function (card) {\n      setTimeout(function () {\n        toastr.info('Before expand event fired!');\n      }, 100);\n    });\n    card.on('afterExpand', function (card) {\n      setTimeout(function () {\n        toastr.warning('After expand event fired!');\n      }, 2000);\n    }); // Remove event handlers\n\n    card.on('beforeRemove', function (card) {\n      toastr.info('Before remove event fired!');\n      return confirm('Are you sure to remove this card ?'); // remove card after user confirmation\n    });\n    card.on('afterRemove', function (card) {\n      setTimeout(function () {\n        toastr.warning('After remove event fired!');\n      }, 2000);\n    }); // Reload event handlers\n\n    card.on('reload', function (card) {\n      toastr.info('Leload event fired!');\n      KTApp.block(card.getSelf(), {\n        type: 'loader',\n        state: 'success',\n        message: 'Please wait...'\n      }); // update the content here\n\n      setTimeout(function () {\n        KTApp.unblock(card.getSelf());\n      }, 2000);\n    });\n  }; // Demo 4\n\n\n  var demo4 = function demo4() {\n    // This card is lazy initialized using data-card=\"true\" attribute. You can access to the card object as shown below and override its behavior\n    var card = new KTCard('kt_card_4'); // Toggle event handlers\n\n    card.on('beforeCollapse', function (card) {\n      setTimeout(function () {\n        toastr.info('Before collapse event fired!');\n      }, 100);\n    });\n    card.on('afterCollapse', function (card) {\n      setTimeout(function () {\n        toastr.warning('Before collapse event fired!');\n      }, 2000);\n    });\n    card.on('beforeExpand', function (card) {\n      setTimeout(function () {\n        toastr.info('Before expand event fired!');\n      }, 100);\n    });\n    card.on('afterExpand', function (card) {\n      setTimeout(function () {\n        toastr.warning('After expand event fired!');\n      }, 2000);\n    }); // Remove event handlers\n\n    card.on('beforeRemove', function (card) {\n      toastr.info('Before remove event fired!');\n      return confirm('Are you sure to remove this card ?'); // remove card after user confirmation\n    });\n    card.on('afterRemove', function (card) {\n      setTimeout(function () {\n        toastr.warning('After remove event fired!');\n      }, 2000);\n    }); // Reload event handlers\n\n    card.on('reload', function (card) {\n      toastr.info('Leload event fired!');\n      KTApp.block(card.getSelf(), {\n        type: 'loader',\n        state: 'primary',\n        message: 'Please wait...'\n      }); // update the content here\n\n      setTimeout(function () {\n        KTApp.unblock(card.getSelf());\n      }, 2000);\n    });\n  };\n\n  return {\n    //main function to initiate the module\n    init: function init() {\n      initToastr(); // init demos\n\n      demo1();\n      demo2();\n      demo3();\n      demo4();\n    }\n  };\n}();\n\njQuery(document).ready(function () {\n  KTCardTools.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvZmVhdHVyZXMvY2FyZHMvdG9vbHMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsSUFBSUEsV0FBVyxHQUFHLFlBQVk7QUFDMUI7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQ3hCQyxJQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsWUFBZixHQUE4QixJQUE5QjtBQUNILEdBRkQsQ0FGMEIsQ0FNMUI7OztBQUNBLE1BQUlDLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVc7QUFDbkI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBSUMsTUFBSixDQUFXLFdBQVgsQ0FBWCxDQUZtQixDQUluQjs7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxFQUFMLENBQVEsZ0JBQVIsRUFBMEIsVUFBU0YsSUFBVCxFQUFlO0FBQ3JDRyxNQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQlAsUUFBQUEsTUFBTSxDQUFDUSxJQUFQLENBQVksOEJBQVo7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0gsS0FKRDtBQU1BSixJQUFBQSxJQUFJLENBQUNFLEVBQUwsQ0FBUSxlQUFSLEVBQXlCLFVBQVNGLElBQVQsRUFBZTtBQUNwQ0csTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJQLFFBQUFBLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlLDhCQUFmO0FBQ0gsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEtBSkQ7QUFNQUwsSUFBQUEsSUFBSSxDQUFDRSxFQUFMLENBQVEsY0FBUixFQUF3QixVQUFTRixJQUFULEVBQWU7QUFDbkNHLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCUCxRQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWSw0QkFBWjtBQUNILE9BRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxLQUpEO0FBTUFKLElBQUFBLElBQUksQ0FBQ0UsRUFBTCxDQUFRLGFBQVIsRUFBdUIsVUFBU0YsSUFBVCxFQUFlO0FBQ2xD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QUFXO0FBQ2xCSSxRQUFBQSxLQUFLLENBQUNRLE9BQU4sQ0FBY2YsSUFBSSxDQUFDUyxPQUFMLEVBQWQ7QUFDSCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsS0FkRDtBQWVILEdBMUREOztBQTREQSxTQUFPO0FBQ0g7QUFDQVcsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2R6QixNQUFBQSxVQUFVLEdBREksQ0FHZDs7QUFDQUksTUFBQUEsS0FBSztBQUNMaUIsTUFBQUEsS0FBSztBQUNMQyxNQUFBQSxLQUFLO0FBQ0xFLE1BQUFBLEtBQUs7QUFDUjtBQVZFLEdBQVA7QUFZSCxDQTFRaUIsRUFBbEI7O0FBNFFBRSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsWUFBVztBQUM5QjdCLEVBQUFBLFdBQVcsQ0FBQzBCLElBQVo7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL21ldHJvbmljL2pzL3BhZ2VzL2ZlYXR1cmVzL2NhcmRzL3Rvb2xzLmpzPzc4ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgS1RDYXJkVG9vbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBUb2FzdHJcclxuICAgIHZhciBpbml0VG9hc3RyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9hc3RyLm9wdGlvbnMuc2hvd0R1cmF0aW9uID0gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZW1vIDFcclxuICAgIHZhciBkZW1vMSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFRoaXMgY2FyZCBpcyBsYXp5IGluaXRpYWxpemVkIHVzaW5nIGRhdGEtY2FyZD1cInRydWVcIiBhdHRyaWJ1dGUuIFlvdSBjYW4gYWNjZXNzIHRvIHRoZSBjYXJkIG9iamVjdCBhcyBzaG93biBiZWxvdyBhbmQgb3ZlcnJpZGUgaXRzIGJlaGF2aW9yXHJcbiAgICAgICAgdmFyIGNhcmQgPSBuZXcgS1RDYXJkKCdrdF9jYXJkXzEnKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgY2FyZC5vbignYmVmb3JlQ29sbGFwc2UnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbygnQmVmb3JlIGNvbGxhcHNlIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJkLm9uKCdhZnRlckNvbGxhcHNlJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0JlZm9yZSBjb2xsYXBzZSBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2JlZm9yZUV4cGFuZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgZXhwYW5kIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJkLm9uKCdhZnRlckV4cGFuZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKCdBZnRlciBleHBhbmQgZXZlbnQgZmlyZWQhJyk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBjYXJkLm9uKCdiZWZvcmVSZW1vdmUnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgcmVtb3ZlIGV2ZW50IGZpcmVkIScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyBjYXJkID8nKTsgIC8vIHJlbW92ZSBjYXJkIGFmdGVyIHVzZXIgY29uZmlybWF0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2FmdGVyUmVtb3ZlJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0FmdGVyIHJlbW92ZSBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbG9hZCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIGNhcmQub24oJ3JlbG9hZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmluZm8oJ0xlbG9hZCBldmVudCBmaXJlZCEnKTtcclxuXHJcbiAgICAgICAgICAgIEtUQXBwLmJsb2NrKGNhcmQuZ2V0U2VsZigpLCB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Q29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsb2FkZXInLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgICAgICAgICAgIHNpemU6ICdsZydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGNvbnRlbnQgaGVyZVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIEtUQXBwLnVuYmxvY2soY2FyZC5nZXRTZWxmKCkpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZW1vIDJcclxuICAgIHZhciBkZW1vMiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFRoaXMgY2FyZCBpcyBsYXp5IGluaXRpYWxpemVkIHVzaW5nIGRhdGEtY2FyZD1cInRydWVcIiBhdHRyaWJ1dGUuIFlvdSBjYW4gYWNjZXNzIHRvIHRoZSBjYXJkIG9iamVjdCBhcyBzaG93biBiZWxvdyBhbmQgb3ZlcnJpZGUgaXRzIGJlaGF2aW9yXHJcbiAgICAgICAgdmFyIGNhcmQgPSBuZXcgS1RDYXJkKCdrdF9jYXJkXzInKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgY2FyZC5vbignYmVmb3JlQ29sbGFwc2UnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbygnQmVmb3JlIGNvbGxhcHNlIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJkLm9uKCdhZnRlckNvbGxhcHNlJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0JlZm9yZSBjb2xsYXBzZSBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2JlZm9yZUV4cGFuZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgZXhwYW5kIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJkLm9uKCdhZnRlckV4cGFuZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKCdBZnRlciBleHBhbmQgZXZlbnQgZmlyZWQhJyk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBjYXJkLm9uKCdiZWZvcmVSZW1vdmUnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgcmVtb3ZlIGV2ZW50IGZpcmVkIScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyBjYXJkID8nKTsgIC8vIHJlbW92ZSBjYXJkIGFmdGVyIHVzZXIgY29uZmlybWF0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2FmdGVyUmVtb3ZlJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0FmdGVyIHJlbW92ZSBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbG9hZCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIGNhcmQub24oJ3JlbG9hZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmluZm8oJ0xlbG9hZCBldmVudCBmaXJlZCEnKTtcclxuXHJcbiAgICAgICAgICAgIEtUQXBwLmJsb2NrKGNhcmQuZ2V0U2VsZigpLCB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Q29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdzcGlubmVyJyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjA1LFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogJ2xnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgY29udGVudCBoZXJlXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgS1RBcHAudW5ibG9jayhjYXJkLmdldFNlbGYoKSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbW8gM1xyXG4gICAgdmFyIGRlbW8zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjYXJkIGlzIGxhenkgaW5pdGlhbGl6ZWQgdXNpbmcgZGF0YS1jYXJkPVwidHJ1ZVwiIGF0dHJpYnV0ZS4gWW91IGNhbiBhY2Nlc3MgdG8gdGhlIGNhcmQgb2JqZWN0IGFzIHNob3duIGJlbG93IGFuZCBvdmVycmlkZSBpdHMgYmVoYXZpb3JcclxuICAgICAgICB2YXIgY2FyZCA9IG5ldyBLVENhcmQoJ2t0X2NhcmRfMycpO1xyXG5cclxuICAgICAgICAvLyBUb2dnbGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBjYXJkLm9uKCdiZWZvcmVDb2xsYXBzZScsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgY29sbGFwc2UgZXZlbnQgZmlyZWQhJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2FmdGVyQ29sbGFwc2UnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZygnQmVmb3JlIGNvbGxhcHNlIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FyZC5vbignYmVmb3JlRXhwYW5kJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oJ0JlZm9yZSBleHBhbmQgZXZlbnQgZmlyZWQhJyk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2FmdGVyRXhwYW5kJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0FmdGVyIGV4cGFuZCBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIGNhcmQub24oJ2JlZm9yZVJlbW92ZScsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmluZm8oJ0JlZm9yZSByZW1vdmUgZXZlbnQgZmlyZWQhJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHRvIHJlbW92ZSB0aGlzIGNhcmQgPycpOyAgLy8gcmVtb3ZlIGNhcmQgYWZ0ZXIgdXNlciBjb25maXJtYXRpb25cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FyZC5vbignYWZ0ZXJSZW1vdmUnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZygnQWZ0ZXIgcmVtb3ZlIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVsb2FkIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgY2FyZC5vbigncmVsb2FkJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICB0b2FzdHIuaW5mbygnTGVsb2FkIGV2ZW50IGZpcmVkIScpO1xyXG5cclxuICAgICAgICAgICAgS1RBcHAuYmxvY2soY2FyZC5nZXRTZWxmKCksIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdsb2FkZXInLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugd2FpdC4uLidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGNvbnRlbnQgaGVyZVxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIEtUQXBwLnVuYmxvY2soY2FyZC5nZXRTZWxmKCkpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZW1vIDRcclxuICAgIHZhciBkZW1vNCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFRoaXMgY2FyZCBpcyBsYXp5IGluaXRpYWxpemVkIHVzaW5nIGRhdGEtY2FyZD1cInRydWVcIiBhdHRyaWJ1dGUuIFlvdSBjYW4gYWNjZXNzIHRvIHRoZSBjYXJkIG9iamVjdCBhcyBzaG93biBiZWxvdyBhbmQgb3ZlcnJpZGUgaXRzIGJlaGF2aW9yXHJcbiAgICAgICAgdmFyIGNhcmQgPSBuZXcgS1RDYXJkKCdrdF9jYXJkXzQnKTtcclxuXHJcbiAgICAgICAgLy8gVG9nZ2xlIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgY2FyZC5vbignYmVmb3JlQ29sbGFwc2UnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbygnQmVmb3JlIGNvbGxhcHNlIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJkLm9uKCdhZnRlckNvbGxhcHNlJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0JlZm9yZSBjb2xsYXBzZSBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2JlZm9yZUV4cGFuZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgZXhwYW5kIGV2ZW50IGZpcmVkIScpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJkLm9uKCdhZnRlckV4cGFuZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKCdBZnRlciBleHBhbmQgZXZlbnQgZmlyZWQhJyk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBjYXJkLm9uKCdiZWZvcmVSZW1vdmUnLCBmdW5jdGlvbihjYXJkKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ci5pbmZvKCdCZWZvcmUgcmVtb3ZlIGV2ZW50IGZpcmVkIScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB0byByZW1vdmUgdGhpcyBjYXJkID8nKTsgIC8vIHJlbW92ZSBjYXJkIGFmdGVyIHVzZXIgY29uZmlybWF0aW9uXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcmQub24oJ2FmdGVyUmVtb3ZlJywgZnVuY3Rpb24oY2FyZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoJ0FmdGVyIHJlbW92ZSBldmVudCBmaXJlZCEnKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbG9hZCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIGNhcmQub24oJ3JlbG9hZCcsIGZ1bmN0aW9uKGNhcmQpIHtcclxuICAgICAgICAgICAgdG9hc3RyLmluZm8oJ0xlbG9hZCBldmVudCBmaXJlZCEnKTtcclxuXHJcbiAgICAgICAgICAgIEtUQXBwLmJsb2NrKGNhcmQuZ2V0U2VsZigpLCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnbG9hZGVyJyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHdhaXQuLi4nXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBjb250ZW50IGhlcmVcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBLVEFwcC51bmJsb2NrKGNhcmQuZ2V0U2VsZigpKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL21haW4gZnVuY3Rpb24gdG8gaW5pdGlhdGUgdGhlIG1vZHVsZVxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5pdFRvYXN0cigpO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5pdCBkZW1vc1xyXG4gICAgICAgICAgICBkZW1vMSgpO1xyXG4gICAgICAgICAgICBkZW1vMigpO1xyXG4gICAgICAgICAgICBkZW1vMygpO1xyXG4gICAgICAgICAgICBkZW1vNCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVENhcmRUb29scy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RDYXJkVG9vbHMiLCJpbml0VG9hc3RyIiwidG9hc3RyIiwib3B0aW9ucyIsInNob3dEdXJhdGlvbiIsImRlbW8xIiwiY2FyZCIsIktUQ2FyZCIsIm9uIiwic2V0VGltZW91dCIsImluZm8iLCJ3YXJuaW5nIiwiY29uZmlybSIsIktUQXBwIiwiYmxvY2siLCJnZXRTZWxmIiwib3ZlcmxheUNvbG9yIiwidHlwZSIsInN0YXRlIiwib3BhY2l0eSIsInNpemUiLCJ1bmJsb2NrIiwiZGVtbzIiLCJkZW1vMyIsIm1lc3NhZ2UiLCJkZW1vNCIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/features/cards/tools.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/metronic/js/pages/features/cards/tools.js"]();
/******/ 	
/******/ })()
;