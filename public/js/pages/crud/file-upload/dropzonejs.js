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

/***/ "./resources/metronic/js/pages/crud/file-upload/dropzonejs.js":
/*!********************************************************************!*\
  !*** ./resources/metronic/js/pages/crud/file-upload/dropzonejs.js ***!
  \********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDropzoneDemo = function () {\n  // Private functions\n  var demo1 = function demo1() {\n    // single file upload\n    $('#kt_dropzone_1').dropzone({\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 1,\n      maxFilesize: 5,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    }); // multiple file upload\n\n    $('#kt_dropzone_2').dropzone({\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    }); // file type validation\n\n    $('#kt_dropzone_3').dropzone({\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      acceptedFiles: \"image/*,application/pdf,.psd\",\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var demo2 = function demo2() {\n    // set the dropzone container id\n    var id = '#kt_dropzone_4'; // set the preview element template\n\n    var previewNode = $(id + \" .dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parent('.dropzone-items').html();\n    previewNode.remove();\n    var myDropzone4 = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      parallelUploads: 20,\n      previewTemplate: previewTemplate,\n      maxFilesize: 1,\n      // Max filesize in MB\n      autoQueue: false,\n      // Make sure the files aren't queued until manually added\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone4.on(\"addedfile\", function (file) {\n      // Hookup the start button\n      file.previewElement.querySelector(id + \" .dropzone-start\").onclick = function () {\n        myDropzone4.enqueueFile(file);\n      };\n\n      $(document).find(id + ' .dropzone-item').css('display', '');\n      $(id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'inline-block');\n    }); // Update the total progress bar\n\n    myDropzone4.on(\"totaluploadprogress\", function (progress) {\n      $(this).find(id + \" .progress-bar\").css('width', progress + \"%\");\n    });\n    myDropzone4.on(\"sending\", function (file) {\n      // Show the total progress bar when upload starts\n      $(id + \" .progress-bar\").css('opacity', '1'); // And disable the start button\n\n      file.previewElement.querySelector(id + \" .dropzone-start\").setAttribute(\"disabled\", \"disabled\");\n    }); // Hide the total progress bar when nothing's uploading anymore\n\n    myDropzone4.on(\"complete\", function (progress) {\n      var thisProgressBar = id + \" .dz-complete\";\n      setTimeout(function () {\n        $(thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress, \" + thisProgressBar + \" .dropzone-start\").css('opacity', '0');\n      }, 300);\n    }); // Setup the buttons for all transfers\n\n    document.querySelector(id + \" .dropzone-upload\").onclick = function () {\n      myDropzone4.enqueueFiles(myDropzone4.getFilesWithStatus(Dropzone.ADDED));\n    }; // Setup the button for remove all files\n\n\n    document.querySelector(id + \" .dropzone-remove-all\").onclick = function () {\n      $(id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\n      myDropzone4.removeAllFiles(true);\n    }; // On all files completed upload\n\n\n    myDropzone4.on(\"queuecomplete\", function (progress) {\n      $(id + \" .dropzone-upload\").css('display', 'none');\n    }); // On all files removed\n\n    myDropzone4.on(\"removedfile\", function (file) {\n      if (myDropzone4.files.length < 1) {\n        $(id + \" .dropzone-upload, \" + id + \" .dropzone-remove-all\").css('display', 'none');\n      }\n    });\n  };\n\n  var demo3 = function demo3() {\n    // set the dropzone container id\n    var id = '#kt_dropzone_5'; // set the preview element template\n\n    var previewNode = $(id + \" .dropzone-item\");\n    previewNode.id = \"\";\n    var previewTemplate = previewNode.parent('.dropzone-items').html();\n    previewNode.remove();\n    var myDropzone5 = new Dropzone(id, {\n      // Make the whole body a dropzone\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      parallelUploads: 20,\n      maxFilesize: 1,\n      // Max filesize in MB\n      previewTemplate: previewTemplate,\n      previewsContainer: id + \" .dropzone-items\",\n      // Define the container to display the previews\n      clickable: id + \" .dropzone-select\" // Define the element that should be used as click trigger to select files.\n\n    });\n    myDropzone5.on(\"addedfile\", function (file) {\n      // Hookup the start button\n      $(document).find(id + ' .dropzone-item').css('display', '');\n    }); // Update the total progress bar\n\n    myDropzone5.on(\"totaluploadprogress\", function (progress) {\n      $(id + \" .progress-bar\").css('width', progress + \"%\");\n    });\n    myDropzone5.on(\"sending\", function (file) {\n      // Show the total progress bar when upload starts\n      $(id + \" .progress-bar\").css('opacity', \"1\");\n    }); // Hide the total progress bar when nothing's uploading anymore\n\n    myDropzone5.on(\"complete\", function (progress) {\n      var thisProgressBar = id + \" .dz-complete\";\n      setTimeout(function () {\n        $(thisProgressBar + \" .progress-bar, \" + thisProgressBar + \" .progress\").css('opacity', '0');\n      }, 300);\n    });\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      demo1();\n      demo2();\n      demo3();\n    }\n  };\n}();\n\nKTUtil.ready(function () {\n  KTDropzoneDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9maWxlLXVwbG9hZC9kcm9wem9uZWpzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUNBOztBQUVBLElBQUlBLGNBQWMsR0FBRyxZQUFZO0FBQzdCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBWTtBQUNwQjtBQUNBQyxJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkMsUUFBcEIsQ0FBNkI7QUFDekJDLE1BQUFBLEdBQUcsRUFBRSx5Q0FEb0I7QUFDdUI7QUFDaERDLE1BQUFBLFNBQVMsRUFBRSxNQUZjO0FBRU47QUFDbkJDLE1BQUFBLFFBQVEsRUFBRSxDQUhlO0FBSXpCQyxNQUFBQSxXQUFXLEVBQUUsQ0FKWTtBQUlUO0FBQ2hCQyxNQUFBQSxjQUFjLEVBQUUsSUFMUztBQU16QkMsTUFBQUEsTUFBTSxFQUFFLGdCQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDekIsWUFBSUQsSUFBSSxDQUFDRSxJQUFMLElBQWEsa0JBQWpCLEVBQXFDO0FBQ2pDRCxVQUFBQSxJQUFJLENBQUMsa0JBQUQsQ0FBSjtBQUNILFNBRkQsTUFFTztBQUNIQSxVQUFBQSxJQUFJO0FBQ1A7QUFDSjtBQVp3QixLQUE3QixFQUZvQixDQWlCcEI7O0FBQ0FULElBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CQyxRQUFwQixDQUE2QjtBQUN6QkMsTUFBQUEsR0FBRyxFQUFFLHlDQURvQjtBQUN1QjtBQUNoREMsTUFBQUEsU0FBUyxFQUFFLE1BRmM7QUFFTjtBQUNuQkMsTUFBQUEsUUFBUSxFQUFFLEVBSGU7QUFJekJDLE1BQUFBLFdBQVcsRUFBRSxFQUpZO0FBSVI7QUFDakJDLE1BQUFBLGNBQWMsRUFBRSxJQUxTO0FBTXpCQyxNQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLElBQVQsRUFBZUMsSUFBZixFQUFxQjtBQUN6QixZQUFJRCxJQUFJLENBQUNFLElBQUwsSUFBYSxrQkFBakIsRUFBcUM7QUFD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QVUsQ0FBQyxZQUFVO0FBQ2pCcEMsUUFBQUEsQ0FBQyxDQUFFbUMsZUFBZSxHQUFHLGtCQUFsQixHQUF1Q0EsZUFBdkMsR0FBeUQsWUFBM0QsQ0FBRCxDQUEwRUgsR0FBMUUsQ0FBOEUsU0FBOUUsRUFBeUYsR0FBekY7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0gsS0FMRDtBQU1KLEdBekNEOztBQTJDQSxTQUFPO0FBQ0g7QUFDQWEsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2I5QyxNQUFBQSxLQUFLO0FBQ0xhLE1BQUFBLEtBQUs7QUFDTCtCLE1BQUFBLEtBQUs7QUFDUjtBQU5FLEdBQVA7QUFRSCxDQWhMb0IsRUFBckI7O0FBa0xBRyxNQUFNLENBQUNDLEtBQVAsQ0FBYSxZQUFXO0FBQ3BCakQsRUFBQUEsY0FBYyxDQUFDK0MsSUFBZjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9maWxlLXVwbG9hZC9kcm9wem9uZWpzLmpzPzlmMmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxuXHJcbnZhciBLVERyb3B6b25lRGVtbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZGVtbzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc2luZ2xlIGZpbGUgdXBsb2FkXHJcbiAgICAgICAgJCgnI2t0X2Ryb3B6b25lXzEnKS5kcm9wem9uZSh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2tlZW50aGVtZXMuY29tL3NjcmlwdHMvdm9pZC5waHBcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxyXG4gICAgICAgICAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxyXG4gICAgICAgICAgICBtYXhGaWxlczogMSxcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDUsIC8vIE1CXHJcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxyXG4gICAgICAgICAgICBhY2NlcHQ6IGZ1bmN0aW9uKGZpbGUsIGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT0gXCJqdXN0aW5iaWViZXIuanBnXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKFwiTmFoYSwgeW91IGRvbid0LlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG11bHRpcGxlIGZpbGUgdXBsb2FkXHJcbiAgICAgICAgJCgnI2t0X2Ryb3B6b25lXzInKS5kcm9wem9uZSh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2tlZW50aGVtZXMuY29tL3NjcmlwdHMvdm9pZC5waHBcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxyXG4gICAgICAgICAgICBwYXJhbU5hbWU6IFwiZmlsZVwiLCAvLyBUaGUgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byB0cmFuc2ZlciB0aGUgZmlsZVxyXG4gICAgICAgICAgICBtYXhGaWxlczogMTAsXHJcbiAgICAgICAgICAgIG1heEZpbGVzaXplOiAxMCwgLy8gTUJcclxuICAgICAgICAgICAgYWRkUmVtb3ZlTGlua3M6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PSBcImp1c3RpbmJpZWJlci5qcGdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoXCJOYWhhLCB5b3UgZG9uJ3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZmlsZSB0eXBlIHZhbGlkYXRpb25cclxuICAgICAgICAkKCcja3RfZHJvcHpvbmVfMycpLmRyb3B6b25lKHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8va2VlbnRoZW1lcy5jb20vc2NyaXB0cy92b2lkLnBocFwiLCAvLyBTZXQgdGhlIHVybCBmb3IgeW91ciB1cGxvYWQgc2NyaXB0IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXHJcbiAgICAgICAgICAgIG1heEZpbGVzOiAxMCxcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEwLCAvLyBNQlxyXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcclxuICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogXCJpbWFnZS8qLGFwcGxpY2F0aW9uL3BkZiwucHNkXCIsXHJcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUubmFtZSA9PSBcImp1c3RpbmJpZWJlci5qcGdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoXCJOYWhhLCB5b3UgZG9uJ3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVtbzIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBkcm9wem9uZSBjb250YWluZXIgaWRcclxuICAgICAgICB2YXIgaWQgPSAnI2t0X2Ryb3B6b25lXzQnO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHByZXZpZXcgZWxlbWVudCB0ZW1wbGF0ZVxyXG4gICAgICAgIHZhciBwcmV2aWV3Tm9kZSA9ICQoaWQgKyBcIiAuZHJvcHpvbmUtaXRlbVwiKTtcclxuICAgICAgICBwcmV2aWV3Tm9kZS5pZCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHByZXZpZXdUZW1wbGF0ZSA9IHByZXZpZXdOb2RlLnBhcmVudCgnLmRyb3B6b25lLWl0ZW1zJykuaHRtbCgpO1xyXG4gICAgICAgIHByZXZpZXdOb2RlLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICB2YXIgbXlEcm9wem9uZTQgPSBuZXcgRHJvcHpvbmUoaWQsIHsgLy8gTWFrZSB0aGUgd2hvbGUgYm9keSBhIGRyb3B6b25lXHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2tlZW50aGVtZXMuY29tL3NjcmlwdHMvdm9pZC5waHBcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxyXG4gICAgICAgICAgICBwYXJhbGxlbFVwbG9hZHM6IDIwLFxyXG4gICAgICAgICAgICBwcmV2aWV3VGVtcGxhdGU6IHByZXZpZXdUZW1wbGF0ZSxcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDEsIC8vIE1heCBmaWxlc2l6ZSBpbiBNQlxyXG4gICAgICAgICAgICBhdXRvUXVldWU6IGZhbHNlLCAvLyBNYWtlIHN1cmUgdGhlIGZpbGVzIGFyZW4ndCBxdWV1ZWQgdW50aWwgbWFudWFsbHkgYWRkZWRcclxuICAgICAgICAgICAgcHJldmlld3NDb250YWluZXI6IGlkICsgXCIgLmRyb3B6b25lLWl0ZW1zXCIsIC8vIERlZmluZSB0aGUgY29udGFpbmVyIHRvIGRpc3BsYXkgdGhlIHByZXZpZXdzXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogaWQgKyBcIiAuZHJvcHpvbmUtc2VsZWN0XCIgLy8gRGVmaW5lIHRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgYXMgY2xpY2sgdHJpZ2dlciB0byBzZWxlY3QgZmlsZXMuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG15RHJvcHpvbmU0Lm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgLy8gSG9va3VwIHRoZSBzdGFydCBidXR0b25cclxuICAgICAgICAgICAgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKGlkICsgXCIgLmRyb3B6b25lLXN0YXJ0XCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHsgbXlEcm9wem9uZTQuZW5xdWV1ZUZpbGUoZmlsZSk7IH07XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoIGlkICsgJyAuZHJvcHpvbmUtaXRlbScpLmNzcygnZGlzcGxheScsICcnKTtcclxuICAgICAgICAgICAgJCggaWQgKyBcIiAuZHJvcHpvbmUtdXBsb2FkLCBcIiArIGlkICsgXCIgLmRyb3B6b25lLXJlbW92ZS1hbGxcIikuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIHByb2dyZXNzIGJhclxyXG4gICAgICAgIG15RHJvcHpvbmU0Lm9uKFwidG90YWx1cGxvYWRwcm9ncmVzc1wiLCBmdW5jdGlvbihwcm9ncmVzcykge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoIGlkICsgXCIgLnByb2dyZXNzLWJhclwiKS5jc3MoJ3dpZHRoJywgcHJvZ3Jlc3MgKyBcIiVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG15RHJvcHpvbmU0Lm9uKFwic2VuZGluZ1wiLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgIC8vIFNob3cgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIHVwbG9hZCBzdGFydHNcclxuICAgICAgICAgICAgJCggaWQgKyBcIiAucHJvZ3Jlc3MtYmFyXCIpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgICAgIC8vIEFuZCBkaXNhYmxlIHRoZSBzdGFydCBidXR0b25cclxuICAgICAgICAgICAgZmlsZS5wcmV2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKGlkICsgXCIgLmRyb3B6b25lLXN0YXJ0XCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIG5vdGhpbmcncyB1cGxvYWRpbmcgYW55bW9yZVxyXG4gICAgICAgIG15RHJvcHpvbmU0Lm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNQcm9ncmVzc0JhciA9IGlkICsgXCIgLmR6LWNvbXBsZXRlXCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoIHRoaXNQcm9ncmVzc0JhciArIFwiIC5wcm9ncmVzcy1iYXIsIFwiICsgdGhpc1Byb2dyZXNzQmFyICsgXCIgLnByb2dyZXNzLCBcIiArIHRoaXNQcm9ncmVzc0JhciArIFwiIC5kcm9wem9uZS1zdGFydFwiKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICB9LCAzMDApXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCB0aGUgYnV0dG9ucyBmb3IgYWxsIHRyYW5zZmVyc1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGlkICsgXCIgLmRyb3B6b25lLXVwbG9hZFwiKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG15RHJvcHpvbmU0LmVucXVldWVGaWxlcyhteURyb3B6b25lNC5nZXRGaWxlc1dpdGhTdGF0dXMoRHJvcHpvbmUuQURERUQpKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBTZXR1cCB0aGUgYnV0dG9uIGZvciByZW1vdmUgYWxsIGZpbGVzXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCArIFwiIC5kcm9wem9uZS1yZW1vdmUtYWxsXCIpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCggaWQgKyBcIiAuZHJvcHpvbmUtdXBsb2FkLCBcIiArIGlkICsgXCIgLmRyb3B6b25lLXJlbW92ZS1hbGxcIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgbXlEcm9wem9uZTQucmVtb3ZlQWxsRmlsZXModHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gT24gYWxsIGZpbGVzIGNvbXBsZXRlZCB1cGxvYWRcclxuICAgICAgICBteURyb3B6b25lNC5vbihcInF1ZXVlY29tcGxldGVcIiwgZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICAkKCBpZCArIFwiIC5kcm9wem9uZS11cGxvYWRcIikuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gT24gYWxsIGZpbGVzIHJlbW92ZWRcclxuICAgICAgICBteURyb3B6b25lNC5vbihcInJlbW92ZWRmaWxlXCIsIGZ1bmN0aW9uKGZpbGUpe1xyXG4gICAgICAgICAgICBpZihteURyb3B6b25lNC5maWxlcy5sZW5ndGggPCAxKXtcclxuICAgICAgICAgICAgICAgICQoIGlkICsgXCIgLmRyb3B6b25lLXVwbG9hZCwgXCIgKyBpZCArIFwiIC5kcm9wem9uZS1yZW1vdmUtYWxsXCIpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVtbzMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIC8vIHNldCB0aGUgZHJvcHpvbmUgY29udGFpbmVyIGlkXHJcbiAgICAgICAgIHZhciBpZCA9ICcja3RfZHJvcHpvbmVfNSc7XHJcblxyXG4gICAgICAgICAvLyBzZXQgdGhlIHByZXZpZXcgZWxlbWVudCB0ZW1wbGF0ZVxyXG4gICAgICAgICB2YXIgcHJldmlld05vZGUgPSAkKGlkICsgXCIgLmRyb3B6b25lLWl0ZW1cIik7XHJcbiAgICAgICAgIHByZXZpZXdOb2RlLmlkID0gXCJcIjtcclxuICAgICAgICAgdmFyIHByZXZpZXdUZW1wbGF0ZSA9IHByZXZpZXdOb2RlLnBhcmVudCgnLmRyb3B6b25lLWl0ZW1zJykuaHRtbCgpO1xyXG4gICAgICAgICBwcmV2aWV3Tm9kZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgIHZhciBteURyb3B6b25lNSA9IG5ldyBEcm9wem9uZShpZCwgeyAvLyBNYWtlIHRoZSB3aG9sZSBib2R5IGEgZHJvcHpvbmVcclxuICAgICAgICAgICAgIHVybDogXCJodHRwczovL2tlZW50aGVtZXMuY29tL3NjcmlwdHMvdm9pZC5waHBcIiwgLy8gU2V0IHRoZSB1cmwgZm9yIHlvdXIgdXBsb2FkIHNjcmlwdCBsb2NhdGlvblxyXG4gICAgICAgICAgICAgcGFyYWxsZWxVcGxvYWRzOiAyMCxcclxuICAgICAgICAgICAgIG1heEZpbGVzaXplOiAxLCAvLyBNYXggZmlsZXNpemUgaW4gTUJcclxuICAgICAgICAgICAgIHByZXZpZXdUZW1wbGF0ZTogcHJldmlld1RlbXBsYXRlLFxyXG4gICAgICAgICAgICAgcHJldmlld3NDb250YWluZXI6IGlkICsgXCIgLmRyb3B6b25lLWl0ZW1zXCIsIC8vIERlZmluZSB0aGUgY29udGFpbmVyIHRvIGRpc3BsYXkgdGhlIHByZXZpZXdzXHJcbiAgICAgICAgICAgICBjbGlja2FibGU6IGlkICsgXCIgLmRyb3B6b25lLXNlbGVjdFwiIC8vIERlZmluZSB0aGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIGFzIGNsaWNrIHRyaWdnZXIgdG8gc2VsZWN0IGZpbGVzLlxyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIG15RHJvcHpvbmU1Lm9uKFwiYWRkZWRmaWxlXCIsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgIC8vIEhvb2t1cCB0aGUgc3RhcnQgYnV0dG9uXHJcbiAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCBpZCArICcgLmRyb3B6b25lLWl0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnJyk7XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcm9ncmVzcyBiYXJcclxuICAgICAgICAgbXlEcm9wem9uZTUub24oXCJ0b3RhbHVwbG9hZHByb2dyZXNzXCIsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAkKCBpZCArIFwiIC5wcm9ncmVzcy1iYXJcIikuY3NzKCd3aWR0aCcsIHByb2dyZXNzICsgXCIlXCIpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIG15RHJvcHpvbmU1Lm9uKFwic2VuZGluZ1wiLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgICAgICAvLyBTaG93IHRoZSB0b3RhbCBwcm9ncmVzcyBiYXIgd2hlbiB1cGxvYWQgc3RhcnRzXHJcbiAgICAgICAgICAgICAkKCBpZCArIFwiIC5wcm9ncmVzcy1iYXJcIikuY3NzKCdvcGFjaXR5JywgXCIxXCIpO1xyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIC8vIEhpZGUgdGhlIHRvdGFsIHByb2dyZXNzIGJhciB3aGVuIG5vdGhpbmcncyB1cGxvYWRpbmcgYW55bW9yZVxyXG4gICAgICAgICBteURyb3B6b25lNS5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICB2YXIgdGhpc1Byb2dyZXNzQmFyID0gaWQgKyBcIiAuZHotY29tcGxldGVcIjtcclxuICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAkKCB0aGlzUHJvZ3Jlc3NCYXIgKyBcIiAucHJvZ3Jlc3MtYmFyLCBcIiArIHRoaXNQcm9ncmVzc0JhciArIFwiIC5wcm9ncmVzc1wiKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAgfSwgMzAwKVxyXG4gICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGVtbzEoKTtcclxuICAgICAgICAgICAgZGVtbzIoKTtcclxuICAgICAgICAgICAgZGVtbzMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG5LVFV0aWwucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVERyb3B6b25lRGVtby5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1REcm9wem9uZURlbW8iLCJkZW1vMSIsIiQiLCJkcm9wem9uZSIsInVybCIsInBhcmFtTmFtZSIsIm1heEZpbGVzIiwibWF4RmlsZXNpemUiLCJhZGRSZW1vdmVMaW5rcyIsImFjY2VwdCIsImZpbGUiLCJkb25lIiwibmFtZSIsImFjY2VwdGVkRmlsZXMiLCJkZW1vMiIsImlkIiwicHJldmlld05vZGUiLCJwcmV2aWV3VGVtcGxhdGUiLCJwYXJlbnQiLCJodG1sIiwicmVtb3ZlIiwibXlEcm9wem9uZTQiLCJEcm9wem9uZSIsInBhcmFsbGVsVXBsb2FkcyIsImF1dG9RdWV1ZSIsInByZXZpZXdzQ29udGFpbmVyIiwiY2xpY2thYmxlIiwib24iLCJwcmV2aWV3RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNsaWNrIiwiZW5xdWV1ZUZpbGUiLCJkb2N1bWVudCIsImZpbmQiLCJjc3MiLCJwcm9ncmVzcyIsInNldEF0dHJpYnV0ZSIsInRoaXNQcm9ncmVzc0JhciIsInNldFRpbWVvdXQiLCJlbnF1ZXVlRmlsZXMiLCJnZXRGaWxlc1dpdGhTdGF0dXMiLCJBRERFRCIsInJlbW92ZUFsbEZpbGVzIiwiZmlsZXMiLCJsZW5ndGgiLCJkZW1vMyIsIm15RHJvcHpvbmU1IiwiaW5pdCIsIktUVXRpbCIsInJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/crud/file-upload/dropzonejs.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/metronic/js/pages/crud/file-upload/dropzonejs.js"]();
/******/ 	
/******/ })()
;