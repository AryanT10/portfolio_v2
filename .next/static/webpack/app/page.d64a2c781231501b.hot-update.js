"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ProjectSection.jsx":
/*!*******************************************!*\
  !*** ./app/components/ProjectSection.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"Task Tracker (React)\",\n        description: \"saccadcads\",\n        image: \"/images/projects/taskTracker.png\",\n        tag: [\n            \"All\"\n        ],\n        gitUrl: \"https://github.com/AryanT10/react-task-tracker.git\",\n        previewUrl: \"https://reacttasktrackingapp.netlify.app/\"\n    },\n    {\n        id: 2,\n        title: \"YouTube Clone\",\n        description: \"saccadcads\",\n        image: \"/images/projects/ytclone.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/AryanT10/youtubeClone_React.git\",\n        previewUrl: \"https://64d6b150aee173228c8eff59--melodious-lolly-00dd58.netlify.app/\"\n    },\n    {\n        id: 3,\n        title: \"Gym App React\",\n        description: \"The Workout App is a web application built using React that provides users with exercises and workout-related information. Users can browse through various exercises, watch exercise videos, and find similar exercises based on different criteria.\",\n        image: \"/images/projects/gymreact.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/AryanT10/workoutApp_React.git\",\n        previewUrl: \"https://gymappreact.netlify.app/\"\n    },\n    {\n        id: 4,\n        title: \"Spotify (using Spotify API)\",\n        description: \"A Spotify clone built using React and the Spotify Web API. This project aims to replicate some of the core features of the Spotify music streaming service, allowing users to browse playlists, play tracks, and manage their music library.\",\n        image: \"/images/projects/gymreact.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/AryanT10/workoutApp_React.git\",\n        previewUrl: \"https://gymappreact.netlify.app/\"\n    }\n];\nconst ProjectSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"• MY PROJECTS •\"\n            }, void 0, false, {\n                fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"School\",\n                        isSelected: tag === \"School\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imageURL: project.image,\n                            tags: project,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, void 0, false, {\n                            fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 7\n                        }, undefined)\n                    }, project.id, false, {\n                        fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aryantuwar/source/portfolio/portfolio_v2/app/components/ProjectSection.jsx\",\n        lineNumber: 64,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ProjectSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytDO0FBQ1I7QUFDRDtBQUNXO0FBQ2pELE1BQU1PLGVBQWU7SUFDcEI7UUFDQ0MsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7U0FBTTtRQUNaQyxRQUFTO1FBQ1RDLFlBQWE7SUFDZDtJQUNBO1FBQ0NOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUztRQUNUQyxZQUFhO0lBQ2Q7SUFDQTtRQUNDTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVM7UUFDVEMsWUFBYTtJQUNkO0lBQ0E7UUFDQ04sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFTO1FBQ1RDLFlBQWE7SUFDZDtDQUNBO0FBRUQsTUFBTUMsaUJBQWlCOztJQUN0QixNQUFNLENBQUNILEtBQUtJLE9BQU8sR0FBR2YsK0NBQVFBLENBQUM7SUFDL0IsTUFBTWdCLE1BQU1mLDZDQUFNQSxDQUFDO0lBQ25CLE1BQU1nQixXQUFXYix3REFBU0EsQ0FBQ1ksS0FBSztRQUFFRSxNQUFNO0lBQUs7SUFFN0MsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3hCTCxPQUFPSztJQUNSO0lBRUEsTUFBTUMsbUJBQW1CZixhQUFhZ0IsTUFBTSxDQUFDLENBQUNDLFVBQzdDQSxRQUFRWixHQUFHLENBQUNhLFFBQVEsQ0FBQ2I7SUFHdEIsTUFBTWMsZUFBZTtRQUNwQkMsU0FBUztZQUFFQyxHQUFHO1lBQUlDLFNBQVM7UUFBRTtRQUM3QkMsU0FBUztZQUFFRixHQUFHO1lBQUdDLFNBQVM7UUFBRTtJQUM3QjtJQUVBLHFCQUNDLDhEQUFDRTtRQUFRdkIsSUFBRzs7MEJBQ1gsOERBQUN3QjtnQkFBR0MsV0FBVTswQkFBK0Q7Ozs7OzswQkFHN0UsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDZCw4REFBQzdCLG1EQUFVQTt3QkFBQytCLFNBQVNmO3dCQUFpQmdCLE1BQUs7d0JBQU1DLFlBQVl6QixRQUFROzs7Ozs7a0NBQ3JFLDhEQUFDUixtREFBVUE7d0JBQUMrQixTQUFTZjt3QkFBaUJnQixNQUFLO3dCQUFNQyxZQUFZekIsUUFBUTs7Ozs7O2tDQUNyRSw4REFBQ1IsbURBQVVBO3dCQUFDK0IsU0FBU2Y7d0JBQWlCZ0IsTUFBSzt3QkFBU0MsWUFBWXpCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFFekUsOERBQUMwQjtnQkFBR3JCLEtBQUtBO2dCQUFLZ0IsV0FBVTswQkFDdEJYLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDZix3QkFDdEIsOERBQUNsQixpREFBTUEsQ0FBQ2tDLEVBQUU7d0JBQWtCQyxVQUFVZjt3QkFBY0MsU0FBUTt3QkFBVUcsU0FBU1osV0FBVyxZQUFZO3dCQUFXd0IsWUFBWTs0QkFBRUMsVUFBVTt3QkFBSTtrQ0FDNUksNEVBQUN4QyxvREFBV0E7NEJBQ1hNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ2tDLFVBQVVwQixRQUFRYixLQUFLOzRCQUN2QmtDLE1BQU1yQjs0QkFDTlgsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7Ozs7Ozt1QkFQaEJVLFFBQVFoQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBYy9CO0dBNUNNTzs7UUFHWVYsb0RBQVNBOzs7S0FIckJVO0FBOENOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLmpzeD84Mzg1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJy4vUHJvamVjdENhcmQnXG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tICcuL1Byb2plY3RUYWcnO1xuaW1wb3J0IHsgdXNlSW5WaWV3LCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5jb25zdCBwcm9qZWN0c0RhdGEgPSBbXG5cdHtcblx0XHRpZDogMSxcblx0XHR0aXRsZTogXCJUYXNrIFRyYWNrZXIgKFJlYWN0KVwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcInNhY2NhZGNhZHNcIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL3Rhc2tUcmFja2VyLnBuZ1wiLFxuXHRcdHRhZzogW1wiQWxsXCJdLFxuXHRcdGdpdFVybDogYGh0dHBzOi8vZ2l0aHViLmNvbS9BcnlhblQxMC9yZWFjdC10YXNrLXRyYWNrZXIuZ2l0YCxcblx0XHRwcmV2aWV3VXJsOiBgaHR0cHM6Ly9yZWFjdHRhc2t0cmFja2luZ2FwcC5uZXRsaWZ5LmFwcC9gLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dGl0bGU6IFwiWW91VHViZSBDbG9uZVwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcInNhY2NhZGNhZHNcIixcblx0XHRpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzL3l0Y2xvbmUucG5nXCIsXG5cdFx0dGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG5cdFx0Z2l0VXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL0FyeWFuVDEwL3lvdXR1YmVDbG9uZV9SZWFjdC5naXRgLFxuXHRcdHByZXZpZXdVcmw6IGBodHRwczovLzY0ZDZiMTUwYWVlMTczMjI4YzhlZmY1OS0tbWVsb2Rpb3VzLWxvbGx5LTAwZGQ1OC5uZXRsaWZ5LmFwcC9gLFxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dGl0bGU6IFwiR3ltIEFwcCBSZWFjdFwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlRoZSBXb3Jrb3V0IEFwcCBpcyBhIHdlYiBhcHBsaWNhdGlvbiBidWlsdCB1c2luZyBSZWFjdCB0aGF0IHByb3ZpZGVzIHVzZXJzIHdpdGggZXhlcmNpc2VzIGFuZCB3b3Jrb3V0LXJlbGF0ZWQgaW5mb3JtYXRpb24uIFVzZXJzIGNhbiBicm93c2UgdGhyb3VnaCB2YXJpb3VzIGV4ZXJjaXNlcywgd2F0Y2ggZXhlcmNpc2UgdmlkZW9zLCBhbmQgZmluZCBzaW1pbGFyIGV4ZXJjaXNlcyBiYXNlZCBvbiBkaWZmZXJlbnQgY3JpdGVyaWEuXCIsXG5cdFx0aW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy9neW1yZWFjdC5wbmdcIixcblx0XHR0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcblx0XHRnaXRVcmw6IGBodHRwczovL2dpdGh1Yi5jb20vQXJ5YW5UMTAvd29ya291dEFwcF9SZWFjdC5naXRgLFxuXHRcdHByZXZpZXdVcmw6IGBodHRwczovL2d5bWFwcHJlYWN0Lm5ldGxpZnkuYXBwL2AsXG5cdH0sXG5cdHtcblx0XHRpZDogNCxcblx0XHR0aXRsZTogXCJTcG90aWZ5ICh1c2luZyBTcG90aWZ5IEFQSSlcIixcblx0XHRkZXNjcmlwdGlvbjogXCJBIFNwb3RpZnkgY2xvbmUgYnVpbHQgdXNpbmcgUmVhY3QgYW5kIHRoZSBTcG90aWZ5IFdlYiBBUEkuIFRoaXMgcHJvamVjdCBhaW1zIHRvIHJlcGxpY2F0ZSBzb21lIG9mIHRoZSBjb3JlIGZlYXR1cmVzIG9mIHRoZSBTcG90aWZ5IG11c2ljIHN0cmVhbWluZyBzZXJ2aWNlLCBhbGxvd2luZyB1c2VycyB0byBicm93c2UgcGxheWxpc3RzLCBwbGF5IHRyYWNrcywgYW5kIG1hbmFnZSB0aGVpciBtdXNpYyBsaWJyYXJ5LlwiLFxuXHRcdGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvZ3ltcmVhY3QucG5nXCIsXG5cdFx0dGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG5cdFx0Z2l0VXJsOiBgaHR0cHM6Ly9naXRodWIuY29tL0FyeWFuVDEwL3dvcmtvdXRBcHBfUmVhY3QuZ2l0YCxcblx0XHRwcmV2aWV3VXJsOiBgaHR0cHM6Ly9neW1hcHByZWFjdC5uZXRsaWZ5LmFwcC9gLFxuXHR9LFxuXTtcblxuY29uc3QgUHJvamVjdFNlY3Rpb24gPSAoKSA9PiB7XG5cdGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcblx0Y29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcblxuXHRjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XG5cdFx0c2V0VGFnKG5ld1RhZyk7XG5cdH07XG5cblx0Y29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XG5cdFx0cHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxuXHQpO1xuXG5cdGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcblx0XHRpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXG5cdFx0YW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGlkPSdwcm9qZWN0cyc+XG5cdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG5cdFx0XHRcdOKAoiBNWSBQUk9KRUNUUyDigKJcblx0XHRcdDwvaDI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB5LTZcIj5cblx0XHRcdFx0PFByb2plY3RUYWcgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfSBuYW1lPVwiQWxsXCIgaXNTZWxlY3RlZD17dGFnID09PSBcIkFsbFwifSAvPlxuXHRcdFx0XHQ8UHJvamVjdFRhZyBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9IG5hbWU9XCJXZWJcIiBpc1NlbGVjdGVkPXt0YWcgPT09IFwiV2ViXCJ9IC8+XG5cdFx0XHRcdDxQcm9qZWN0VGFnIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX0gbmFtZT1cIlNjaG9vbFwiIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJTY2hvb2xcIn0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxuXHRcdFx0XHR7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcblx0XHRcdFx0XHQ8bW90aW9uLmxpIGtleT17cHJvamVjdC5pZH0gdmFyaWFudHM9e2NhcmRWYXJpYW50c30gaW5pdGlhbD1cImluaXRpYWxcIiBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fT5cblx0XHRcdFx0XHRcdDxQcm9qZWN0Q2FyZFxuXHRcdFx0XHRcdFx0XHR0aXRsZT17cHJvamVjdC50aXRsZX1cblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdGltYWdlVVJMPXtwcm9qZWN0LmltYWdlfVxuXHRcdFx0XHRcdFx0XHR0YWdzPXtwcm9qZWN0fVxuXHRcdFx0XHRcdFx0XHRnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxuXHRcdFx0XHRcdFx0XHRwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdWw+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZWN0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RUYWciLCJ1c2VJblZpZXciLCJtb3Rpb24iLCJwcm9qZWN0c0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZyIsImdpdFVybCIsInByZXZpZXdVcmwiLCJQcm9qZWN0U2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsIm5hbWUiLCJpc1NlbGVjdGVkIiwidWwiLCJtYXAiLCJsaSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiaW1hZ2VVUkwiLCJ0YWdzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ProjectSection.jsx\n"));

/***/ })

});