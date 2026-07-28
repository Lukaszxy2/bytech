(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DURATION",
    ()=>DURATION,
    "EASE_BRAND",
    ()=>EASE_BRAND,
    "fadeIn",
    ()=>fadeIn,
    "fadeSide",
    ()=>fadeSide,
    "fadeUp",
    ()=>fadeUp,
    "fadeUpSmall",
    ()=>fadeUpSmall,
    "floatTransition",
    ()=>floatTransition,
    "floatY",
    ()=>floatY,
    "hoverLift",
    ()=>hoverLift,
    "hoverScale",
    ()=>hoverScale,
    "revealOnce",
    ()=>revealOnce,
    "revealOnceTall",
    ()=>revealOnceTall,
    "scaleIn",
    ()=>scaleIn,
    "staggerContainer",
    ()=>staggerContainer,
    "transitionBrand",
    ()=>transitionBrand,
    "transitionHover",
    ()=>transitionHover
]);
'use client';
const EASE_BRAND = [
    0.22,
    1,
    0.36,
    1
];
const DURATION = {
    hover: 0.28,
    entrance: 0.7,
    slow: 1.1
};
const transitionBrand = {
    duration: DURATION.entrance,
    ease: EASE_BRAND
};
const transitionHover = {
    duration: DURATION.hover,
    ease: EASE_BRAND
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitionBrand
    }
};
const fadeUpSmall = {
    hidden: {
        opacity: 0,
        y: 12
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: EASE_BRAND
        }
    }
};
const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: transitionBrand
    }
};
const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.94
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitionBrand
    }
};
const fadeSide = (from = 'left', distance = 32)=>({
        hidden: {
            opacity: 0,
            x: from === 'left' ? -distance : distance
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: transitionBrand
        }
    });
const staggerContainer = (stagger = 0.08, delayChildren = 0)=>({
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren
            }
        }
    });
const revealOnce = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: {
        once: true,
        amount: 0.25
    }
};
const revealOnceTall = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: {
        once: true,
        amount: 0.1
    }
};
const hoverScale = {
    whileHover: {
        scale: 1.03,
        transition: transitionHover
    },
    whileTap: {
        scale: 0.99,
        transition: transitionHover
    }
};
const hoverLift = {
    whileHover: {
        y: -6,
        transition: transitionHover
    }
};
const floatTransition = (duration = 6, delay = 0)=>({
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
    });
const floatY = (distance = 14, duration = 6, delay = 0)=>({
        animate: {
            y: [
                0,
                -distance,
                0
            ]
        },
        transition: floatTransition(duration, delay)
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Logo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Logo({ className = '', href = '/', size = 26 }) {
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center gap-[11px] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size * 1.28,
                height: size,
                viewBox: "0 0 40 32",
                fill: "none",
                "aria-hidden": "true",
                className: "shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "bt-chev-a",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#FF7A3C"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Logo.js",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#F2551F"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Logo.js",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Logo.js",
                                lineNumber: 16,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "bt-chev-b",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#FA5A24"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Logo.js",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#E8402C"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Logo.js",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Logo.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "bt-chev-c",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#F04A1E"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Logo.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#D82D18"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Logo.js",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Logo.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "skewX(-9)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4 4 16 16 4 28",
                                stroke: "url(#bt-chev-a)",
                                strokeWidth: "5.4",
                                strokeLinecap: "square",
                                strokeLinejoin: "miter"
                            }, void 0, false, {
                                fileName: "[project]/components/Logo.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M14 4 26 16 14 28",
                                stroke: "url(#bt-chev-b)",
                                strokeWidth: "5.4",
                                strokeLinecap: "square",
                                strokeLinejoin: "miter"
                            }, void 0, false, {
                                fileName: "[project]/components/Logo.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M24 4 36 16 24 28",
                                stroke: "url(#bt-chev-c)",
                                strokeWidth: "5.4",
                                strokeLinecap: "square",
                                strokeLinejoin: "miter"
                            }, void 0, false, {
                                fileName: "[project]/components/Logo.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-black tracking-[-0.01em] leading-none",
                style: {
                    fontSize: size * 0.88
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-text-primary",
                        children: "BY"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-red",
                        children: "TECH"
                    }, void 0, false, {
                        fileName: "[project]/components/Logo.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Logo.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
    if (!href) return content;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        "aria-label": "ByTech home",
        className: "inline-flex items-center",
        children: content
    }, void 0, false, {
        fileName: "[project]/components/Logo.js",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRightIcon",
    ()=>ArrowRightIcon,
    "BatteryIcon",
    ()=>BatteryIcon,
    "BatterySwapIcon",
    ()=>BatterySwapIcon,
    "BoltIcon",
    ()=>BoltIcon,
    "CalendarIcon",
    ()=>CalendarIcon,
    "ChargePortIcon",
    ()=>ChargePortIcon,
    "ChevronLeftIcon",
    ()=>ChevronLeftIcon,
    "ChevronRightIcon",
    ()=>ChevronRightIcon,
    "ChipIcon",
    ()=>ChipIcon,
    "ClockIcon",
    ()=>ClockIcon,
    "CloseIcon",
    ()=>CloseIcon,
    "ConsoleIcon",
    ()=>ConsoleIcon,
    "ControllerIcon",
    ()=>ControllerIcon,
    "FacebookIcon",
    ()=>FacebookIcon,
    "HdmiIcon",
    ()=>HdmiIcon,
    "HeadphonesIcon",
    ()=>HeadphonesIcon,
    "KeyFobIcon",
    ()=>KeyFobIcon,
    "LaptopIcon",
    ()=>LaptopIcon,
    "MailIcon",
    ()=>MailIcon,
    "MicrosolderIcon",
    ()=>MicrosolderIcon,
    "PhoneIcon",
    ()=>PhoneIcon,
    "PinIcon",
    ()=>PinIcon,
    "QuoteIcon",
    ()=>QuoteIcon,
    "ScreenIcon",
    ()=>ScreenIcon,
    "ShieldCheckIcon",
    ()=>ShieldCheckIcon,
    "SolderIcon",
    ()=>SolderIcon,
    "StarIcon",
    ()=>StarIcon,
    "TabletIcon",
    ()=>TabletIcon,
    "ZoomInIcon",
    ()=>ZoomInIcon,
    "ZoomOutIcon",
    ()=>ZoomOutIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/* Line icons drawn to the reference's stroke language:
   1.7 stroke, round caps/joins, currentColor. */ const base = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
};
function CalendarIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "16",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 10h18M8 3v4M16 3v4"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "15.5",
                r: "1.1",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CalendarIcon;
function ArrowRightIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 12h15M13 6l6 6-6 6"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c1 = ArrowRightIcon;
function PhoneIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "2.5",
                width: "12",
                height: "19",
                rx: "2.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.5 18.4h3"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = PhoneIcon;
function BoltIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.6 2.5 5.8 13.2h5.1l-.9 8.3 8.2-11h-5.4z"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c3 = BoltIcon;
function ShieldCheckIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2.6 4.8 5.7v5.8c0 4.4 3 8.2 7.2 9.9 4.2-1.7 7.2-5.5 7.2-9.9V5.7z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12.1l2.2 2.2 4-4.3"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c4 = ShieldCheckIcon;
function ChipIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7.2",
                y: "7.2",
                width: "9.6",
                height: "9.6",
                rx: "1.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10.3",
                y: "10.3",
                width: "3.4",
                height: "3.4",
                rx: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 4v3.2M14 4v3.2M10 16.8V20M14 16.8V20M4 10h3.2M4 14h3.2M16.8 10H20M16.8 14H20"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c5 = ChipIcon;
function BatteryIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.6",
                y: "7.4",
                width: "16.2",
                height: "9.2",
                rx: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.4 10.6v2.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.8 10.4v3.2M9 10.4v3.2M12.2 10.4v3.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c6 = BatteryIcon;
function SolderIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 3 12.8 11.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.4 1.6 22.4 5.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.8 11.2 9.6 14.4l2 2 3.2-3.2z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.4 20.4h17.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.4 20.4a2.1 2.1 0 0 1 4.2 0"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c7 = SolderIcon;
function MicrosolderIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10.4",
                cy: "10.4",
                r: "6.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m15.4 15.4 5.2 5.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7.7",
                y: "7.7",
                width: "5.4",
                height: "5.4",
                rx: "1.1"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.3 6.1v1.6M11.5 6.1v1.6M9.3 13.1v1.6M11.5 13.1v1.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.1 9.3h1.6M6.1 11.5h1.6M13.1 9.3h1.6M13.1 11.5h1.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c8 = MicrosolderIcon;
function HdmiIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.4 8.6V6.8a1.2 1.2 0 0 1 1.2-1.2h8.8a1.2 1.2 0 0 1 1.2 1.2v1.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.2 8.6h17.6v3.3l-2.5 3.5H5.7l-2.5-3.5z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.7 10.7h10.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.4 12.7h7.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c9 = HdmiIcon;
function ChargePortIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "12.6",
                width: "18",
                height: "6",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6.2",
                y: "14.7",
                width: "11.6",
                height: "1.8",
                rx: "0.9"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.8 2.6 10.2 7.6h3l-1.4 3.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c10 = ChargePortIcon;
function ScreenIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.6",
                y: "2.2",
                width: "14.8",
                height: "19.6",
                rx: "2.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.8 2.2h4.4"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m7.6 8.2 3.1 2.7-1.9 2.7 3.5 2.4-1.1 2.4"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m13.4 9.6 3.2-1.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c11 = ScreenIcon;
function BatterySwapIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.2",
                y: "9.4",
                width: "14.4",
                height: "9.2",
                rx: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.2 12.4v3.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11 11.4 8.6 14.6h3l-2.2 2.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.2 6.6a6.4 6.4 0 0 1 9.6 0"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.9 3.6v3.1h-3.1"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_c12 = BatterySwapIcon;
function ConsoleIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.6 7.4h8.8a5 5 0 0 1 4.9 4l.7 4.3a2.6 2.6 0 0 1-4.8 1.8l-1.3-2.1H8.1l-1.3 2.1A2.6 2.6 0 0 1 2 15.7l.7-4.3a5 5 0 0 1 4.9-4Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.6 11.6v2.2M5.5 12.7h2.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16.4",
                cy: "12",
                r: "0.9",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18.4",
                cy: "13.6",
                r: "0.9",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_c13 = ConsoleIcon;
function LaptopIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.2",
                y: "5",
                width: "15.6",
                height: "10.4",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 18.6h20"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_c14 = LaptopIcon;
function TabletIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.6",
                y: "2.6",
                width: "14.8",
                height: "18.8",
                rx: "2.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.4 18.6h3.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_c15 = TabletIcon;
function ControllerIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 8h8a5.4 5.4 0 0 1 5.3 4.4l.5 3a2.7 2.7 0 0 1-5 1.8L15.4 15H8.6l-1.4 2.2a2.7 2.7 0 0 1-5-1.8l.5-3A5.4 5.4 0 0 1 8 8Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11.4v2.2M5.9 12.5h2.2M16.6 11.6h.01M18.2 13.2h.01"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_c16 = ControllerIcon;
function HeadphonesIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 14.4v-2a8 8 0 0 1 16 0v2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.4",
                y: "13.6",
                width: "4.6",
                height: "7",
                rx: "2.1"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "17",
                y: "13.6",
                width: "4.6",
                height: "7",
                rx: "2.1"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
_c17 = HeadphonesIcon;
function KeyFobIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6.4",
                y: "9",
                width: "11.2",
                height: "12.4",
                rx: "3.4"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.6 12.6h4.8M9.6 16.2h4.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 9V4.2h2.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.8 2.6v3.2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_c18 = KeyFobIcon;
function ClockIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6.8V12l3.4 2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_c19 = ClockIcon;
function PinIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10.2",
                r: "2.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
_c20 = PinIcon;
function FacebookIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.5 21.9v-8.6h2.9l.44-3.36H13.5V7.79c0-.97.27-1.63 1.66-1.63h1.78V3.15A23.9 23.9 0 0 0 14.36 3c-2.57 0-4.33 1.57-4.33 4.45v2.48H7.1v3.36h2.93v8.6h3.47Z"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 237,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c21 = FacebookIcon;
function MailIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2.6",
                y: "4.8",
                width: "18.8",
                height: "14.4",
                rx: "2.4"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3.4 7 8.6 6 8.6-6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_c22 = MailIcon;
function CloseIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 6l12 12M18 6 6 18"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 254,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_c23 = CloseIcon;
function ZoomInIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10.6",
                cy: "10.6",
                r: "6.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m15.6 15.6 4.8 4.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.6 7.8v5.6M7.8 10.6h5.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 264,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_c24 = ZoomInIcon;
function ZoomOutIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "10.6",
                cy: "10.6",
                r: "6.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m15.6 15.6 4.8 4.8"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.8 10.6h5.6"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 274,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c25 = ZoomOutIcon;
function ChevronLeftIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15 5l-7 7 7 7"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 282,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_c26 = ChevronLeftIcon;
function ChevronRightIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m9 5 7 7-7 7"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 290,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_c27 = ChevronRightIcon;
function QuoteIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9.4 5.2C6 6.7 3.9 9.9 3.9 13.6c0 3.2 1.9 5.2 4.4 5.2 2.2 0 3.9-1.6 3.9-3.8 0-2.1-1.5-3.6-3.5-3.6-.4 0-.9.1-1 .1.4-1.7 2-3.5 3.7-4.4l-2-1.9Zm10.3 0c-3.4 1.5-5.5 4.7-5.5 8.4 0 3.2 1.9 5.2 4.4 5.2 2.2 0 3.9-1.6 3.9-3.8 0-2.1-1.5-3.6-3.5-3.6-.4 0-.9.1-1 .1.4-1.7 2-3.5 3.7-4.4l-2-1.9Z"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 298,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
_c28 = QuoteIcon;
function StarIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95z"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 306,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
_c29 = StarIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29;
__turbopack_context__.k.register(_c, "CalendarIcon");
__turbopack_context__.k.register(_c1, "ArrowRightIcon");
__turbopack_context__.k.register(_c2, "PhoneIcon");
__turbopack_context__.k.register(_c3, "BoltIcon");
__turbopack_context__.k.register(_c4, "ShieldCheckIcon");
__turbopack_context__.k.register(_c5, "ChipIcon");
__turbopack_context__.k.register(_c6, "BatteryIcon");
__turbopack_context__.k.register(_c7, "SolderIcon");
__turbopack_context__.k.register(_c8, "MicrosolderIcon");
__turbopack_context__.k.register(_c9, "HdmiIcon");
__turbopack_context__.k.register(_c10, "ChargePortIcon");
__turbopack_context__.k.register(_c11, "ScreenIcon");
__turbopack_context__.k.register(_c12, "BatterySwapIcon");
__turbopack_context__.k.register(_c13, "ConsoleIcon");
__turbopack_context__.k.register(_c14, "LaptopIcon");
__turbopack_context__.k.register(_c15, "TabletIcon");
__turbopack_context__.k.register(_c16, "ControllerIcon");
__turbopack_context__.k.register(_c17, "HeadphonesIcon");
__turbopack_context__.k.register(_c18, "KeyFobIcon");
__turbopack_context__.k.register(_c19, "ClockIcon");
__turbopack_context__.k.register(_c20, "PinIcon");
__turbopack_context__.k.register(_c21, "FacebookIcon");
__turbopack_context__.k.register(_c22, "MailIcon");
__turbopack_context__.k.register(_c23, "CloseIcon");
__turbopack_context__.k.register(_c24, "ZoomInIcon");
__turbopack_context__.k.register(_c25, "ZoomOutIcon");
__turbopack_context__.k.register(_c26, "ChevronLeftIcon");
__turbopack_context__.k.register(_c27, "ChevronRightIcon");
__turbopack_context__.k.register(_c28, "QuoteIcon");
__turbopack_context__.k.register(_c29, "StarIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Navbar({ links = [], cta, heroAligned = false }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = menuOpen ? 'hidden' : '';
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 pt-[14px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `transition-[max-width,padding] duration-hover ease-brand ${heroAligned && !scrolled ? 'container-nav-hero' : 'container-wide'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                    className: `flex h-[56px] items-center justify-between rounded-[19px] pl-[27px] pr-[19px] transition-[background-color,border-color,box-shadow,backdrop-filter] duration-hover ease-brand ${scrolled ? 'glass-panel-light' : 'border border-white/[0.07] bg-white/[0.02]'}`,
                    initial: {
                        opacity: 0,
                        y: -14
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-[45px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden items-center gap-[52px] lg:flex",
                                    children: links.map((link)=>{
                                        const resolvedHref = link.href && link.href.startsWith('#') ? `/${link.href}` : link.href;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: resolvedHref,
                                            className: "text-[15px] font-normal text-text-primary/85 transition-colors duration-hover ease-brand hover:text-text-primary",
                                            children: link.label
                                        }, link.label, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 50,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: cta.href,
                                                    className: "btn-base button-outline-red hidden h-[41px] gap-[13px] px-[26px] text-[15px] font-normal sm:inline-flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                            width: 21,
                                                            height: 21
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.js",
                                                            lineNumber: 67,
                                                            columnNumber: 21
                                                        }, this),
                                                        cta.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/track-repair",
                                                    className: "btn-base button-outline-blue hidden h-[41px] gap-[13px] px-[26px] text-[15px] font-normal sm:inline-flex",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                            width: 21,
                                                            height: 21
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.js",
                                                            lineNumber: 75,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Track a Repair"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setMenuOpen(true),
                                            "aria-label": "Open menu",
                                            className: "flex h-11 w-11 items-center justify-center rounded-xl text-text-primary lg:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 7h18M3 12h18M3 17h18",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.7",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.js",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.js",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-xl lg:hidden",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.28,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-wide flex h-[70px] items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: 26
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMenuOpen(false),
                                    "aria-label": "Close menu",
                                    className: "flex h-11 w-11 items-center justify-center rounded-xl text-text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
                                        width: 22,
                                        height: 22
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "container-wide mt-8 flex flex-col gap-2",
                            children: [
                                links.map((link)=>{
                                    const resolvedHref = link.href && link.href.startsWith('#') ? `/${link.href}` : link.href;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: resolvedHref,
                                        onClick: ()=>setMenuOpen(false),
                                        className: "border-b border-white/[0.07] py-4 text-heading-sm text-text-primary",
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/components/Navbar.js",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, this);
                                }),
                                cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: cta.href,
                                    onClick: ()=>setMenuOpen(false),
                                    className: "btn-base button-primary mt-6 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                            width: 20,
                                            height: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.js",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        cta.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.js",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.js",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.js",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.js",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Navbar, "0FTCTa/wSwaXFgLT2GlKcn4CdyU=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/useParallax.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCursorParallax",
    ()=>useCursorParallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useCursorParallax(ref, { stiffness = 90, damping = 20 } = {}) {
    _s();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const rawX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const rawY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawX, {
        stiffness,
        damping,
        mass: 0.6
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(rawY, {
        stiffness,
        damping,
        mass: 0.6
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCursorParallax.useEffect": ()=>{
            const el = ref.current;
            if (!el || reduceMotion) return;
            const handleMove = {
                "useCursorParallax.useEffect.handleMove": (event)=>{
                    const rect = el.getBoundingClientRect();
                    rawX.set((event.clientX - rect.left) / rect.width * 2 - 1);
                    rawY.set((event.clientY - rect.top) / rect.height * 2 - 1);
                }
            }["useCursorParallax.useEffect.handleMove"];
            const handleLeave = {
                "useCursorParallax.useEffect.handleLeave": ()=>{
                    rawX.set(0);
                    rawY.set(0);
                }
            }["useCursorParallax.useEffect.handleLeave"];
            el.addEventListener('pointermove', handleMove);
            el.addEventListener('pointerleave', handleLeave);
            return ({
                "useCursorParallax.useEffect": ()=>{
                    el.removeEventListener('pointermove', handleMove);
                    el.removeEventListener('pointerleave', handleLeave);
                }
            })["useCursorParallax.useEffect"];
        }
    }["useCursorParallax.useEffect"], [
        ref,
        rawX,
        rawY,
        reduceMotion
    ]);
    return {
        x,
        y,
        reduceMotion
    };
}
_s(useCursorParallax, "WrR6QnCjKd8TH9aMRFoCX9tFsMk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/HeroBackdrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Hero background stack, bottom to top:
   base navy → navy bloom → circuit grid → red-orange glow →
   sphere arc → vignette. Sampled from the reference at 1344x752. */ __turbopack_context__.s([
    "default",
    ()=>HeroBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function HeroBackdrop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#01060F]"
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(78% 62% at 54% 6%, rgba(18,30,66,0.95) 0%, rgba(10,20,48,0.55) 38%, rgba(1,6,15,0) 72%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(52% 48% at 14% 46%, rgba(12,26,58,0.7) 0%, rgba(1,6,15,0) 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.55]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircuitTexture, {}, void 0, false, {
                    fileName: "[project]/components/hero/HeroBackdrop.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(46% 58% at 97% 94%, rgba(255,92,40,0.95) 0%, rgba(232,64,44,0.62) 26%, rgba(150,32,18,0.28) 50%, rgba(1,6,15,0) 74%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-[7%] -right-[22%] aspect-square h-auto w-[74%] rounded-full blur-[2px] sm:-bottom-[26%] sm:-right-[6%] sm:aspect-auto sm:h-[62%] sm:w-[34%]",
                style: {
                    background: 'radial-gradient(circle at 34% 24%, #FF7A45 0%, #F5451C 34%, #C22712 62%, rgba(120,24,14,0.35) 82%, rgba(120,24,14,0) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(38% 30% at 78% 78%, rgba(255,88,38,0.2) 0%, rgba(1,6,15,0) 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: 'radial-gradient(120% 96% at 50% 42%, rgba(0,0,0,0) 42%, rgba(0,3,10,0.55) 78%, rgba(0,2,8,0.9) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/HeroBackdrop.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = HeroBackdrop;
/* Fine PCB-style trace field. Two scales so it reads as circuitry
   rather than a plain grid, kept under 6% opacity like the reference. */ function CircuitTexture() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-full w-full",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: "bt-trace-fine",
                        width: "44",
                        height: "44",
                        patternUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 22h12l6-6h14M22 44V32l6-6V12M44 22H32l-6 6H12",
                                fill: "none",
                                stroke: "rgba(150,190,255,0.5)",
                                strokeWidth: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "18",
                                cy: "16",
                                r: "1.5",
                                fill: "rgba(150,190,255,0.55)"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "28",
                                cy: "26",
                                r: "1.5",
                                fill: "rgba(150,190,255,0.4)"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/HeroBackdrop.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: "bt-trace-coarse",
                        width: "180",
                        height: "180",
                        patternUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 90h44l22-22h56l22 22h36M90 0v40l-22 22v56l22 22v40",
                                fill: "none",
                                stroke: "rgba(120,170,255,0.35)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "80",
                                y: "80",
                                width: "20",
                                height: "20",
                                rx: "3",
                                fill: "none",
                                stroke: "rgba(120,170,255,0.4)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/HeroBackdrop.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "bt-trace-fade",
                        cx: "62%",
                        cy: "34%",
                        r: "72%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#fff",
                                stopOpacity: "0.14"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "55%",
                                stopColor: "#fff",
                                stopOpacity: "0.06"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#fff",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroBackdrop.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/HeroBackdrop.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "bt-trace-mask",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "url(#bt-trace-fade)"
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroBackdrop.js",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroBackdrop.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#bt-trace-mask)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#bt-trace-fine)"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroBackdrop.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#bt-trace-coarse)"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroBackdrop.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroBackdrop.js",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/HeroBackdrop.js",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c1 = CircuitTexture;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroBackdrop");
__turbopack_context__.k.register(_c1, "CircuitTexture");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/HeroDevice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroDevice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HeroDevice({ px, py }) {
    _s();
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(px, [
        -1,
        1
    ], [
        -20,
        -8
    ]);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(py, [
        -1,
        1
    ], [
        7,
        -1
    ]);
    const shiftX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(px, [
        -1,
        1
    ], [
        -14,
        14
    ]);
    const shiftY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(py, [
        -1,
        1
    ], [
        -10,
        10
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative",
        style: {
            perspective: 1400,
            x: shiftX,
            y: shiftY
        },
        initial: {
            opacity: 0,
            scale: 0.93,
            y: 28
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        transition: {
            duration: 1.1,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
            delay: 0.15
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -inset-16 blur-3xl",
                style: {
                    background: 'radial-gradient(52% 46% at 52% 46%, rgba(255,86,38,0.22) 0%, rgba(255,86,38,0) 70%)'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative",
                style: {
                    rotateY,
                    rotateX,
                    rotateZ: -3.6,
                    transformStyle: 'preserve-3d'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-[9/11] w-full overflow-hidden rounded-[30px] border border-white/[0.18]",
                    style: {
                        boxShadow: '0 50px 120px -30px rgba(0,0,0,0.85), 0 0 60px -10px rgba(232,64,44,0.28), inset 0 1px 0 0 rgba(255,255,255,0.28)',
                        background: 'linear-gradient(150deg, #0A1428 0%, #050D1E 46%, #0B1628 100%)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BoardField, {}, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0",
                            style: {
                                background: 'linear-gradient(146deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 22%, rgba(255,255,255,0) 46%)'
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0",
                            style: {
                                background: 'radial-gradient(60% 44% at 92% 96%, rgba(255,92,40,0.3) 0%, rgba(255,92,40,0) 70%)'
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 rounded-[30px]",
                            style: {
                                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07), inset 0 -1px 0 0 rgba(255,255,255,0.12)'
                            },
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero/HeroDevice.js",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/HeroDevice.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HeroDevice, "DhKvAIcZZJkDGvlrZadrFPRC0bU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HeroDevice;
/* PCB trace field with the three brand chevrons glowing at its centre. */ function BoardField() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute inset-0 h-full w-full",
        viewBox: "0 0 460 560",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "bt-dev-chevron",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#FF8A4C"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "55%",
                                stopColor: "#FF5A24"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#E02A0C"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "bt-dev-glow",
                        x: "-60%",
                        y: "-60%",
                        width: "220%",
                        height: "220%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "9",
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/HeroDevice.js",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/HeroDevice.js",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "bt-dev-softglow",
                        x: "-60%",
                        y: "-60%",
                        width: "220%",
                        height: "220%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "3.4",
                                result: "b"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "b"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/HeroDevice.js",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/HeroDevice.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero/HeroDevice.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#2C5C9E",
                strokeWidth: "1.4",
                fill: "none",
                opacity: "0.55",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M-10 92h74l30-30h96M-10 150h50l34 34h120M-10 236h96l28-28h84"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M-10 330h64l32 32h108M-10 420h120l30-30h70M-10 486h86l26 26h140"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M470 120h-90l-34 34H228M470 210h-70l-30-30H250M470 300h-104l-28 28H236"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M470 396h-80l-32-32H244M470 470h-110l-26 26H240"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M60 -10v70l26 26v96M138 -10v42l30 30v120M330 570v-80l-28-28V330"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M392 570v-60l26-26V320M232 570v-46l-24-24V400"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#E8532A",
                strokeWidth: "1.5",
                fill: "none",
                opacity: "0.85",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M-10 190h58l36 36h104l30 30h140"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M470 250h-84l-30 30H214l-28 28H-10"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M-10 360h74l34-34h122l32 32h130"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M100 570v-64l30-30V360"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M356 -10v58l-28 28v86"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#4E86D8",
                opacity: "0.85",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "64",
                        cy: "92",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "84",
                        cy: "184",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "96",
                        cy: "236",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "380",
                        cy: "120",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "366",
                        cy: "300",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "360",
                        cy: "470",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "130",
                        cy: "420",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#FF7A45",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "48",
                        cy: "190",
                        r: "3.4"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "386",
                        cy: "250",
                        r: "3.4"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "74",
                        cy: "360",
                        r: "3.4"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "130",
                        cy: "476",
                        r: "3.4"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "328",
                        cy: "48",
                        r: "3.4"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "150",
                        cy: "60",
                        r: "2.2",
                        fill: "#7FB4FF",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "290",
                        cy: "96",
                        r: "1.8",
                        fill: "#FF9060",
                        opacity: "0.9"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "404",
                        cy: "182",
                        r: "2",
                        fill: "#7FB4FF",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "196",
                        cy: "140",
                        r: "1.6",
                        fill: "#FF9060",
                        opacity: "0.7"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "76",
                        cy: "286",
                        r: "2",
                        fill: "#7FB4FF",
                        opacity: "0.75"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "336",
                        cy: "366",
                        r: "1.8",
                        fill: "#FF9060",
                        opacity: "0.85"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "180",
                        cy: "500",
                        r: "2.2",
                        fill: "#7FB4FF",
                        opacity: "0.7"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "400",
                        cy: "520",
                        r: "1.8",
                        fill: "#FF9060",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "252",
                        cy: "452",
                        r: "1.6",
                        fill: "#7FB4FF",
                        opacity: "0.65"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#bt-dev-glow)",
                opacity: "0.95",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    fill: "none",
                    stroke: "url(#bt-dev-chevron)",
                    strokeWidth: "17",
                    strokeLinecap: "square",
                    strokeLinejoin: "miter",
                    transform: "translate(126 200) skewX(-8)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 0 66 66 0 132",
                            className: "animate-pulse-trace",
                            style: {
                                animationDelay: '0s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M56 0 122 66 56 132",
                            className: "animate-pulse-trace",
                            style: {
                                animationDelay: '0.35s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M112 0 178 66 112 132",
                            className: "animate-pulse-trace",
                            style: {
                                animationDelay: '0.7s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/hero/HeroDevice.js",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero/HeroDevice.js",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#FF6A38",
                strokeWidth: "2",
                fill: "none",
                opacity: "0.6",
                filter: "url(#bt-dev-softglow)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M-10 266h80l38-38"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M470 300h-72l-34 34"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroDevice.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroDevice.js",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/HeroDevice.js",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c1 = BoardField;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroDevice");
__turbopack_context__.k.register(_c1, "BoardField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/HeroChip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroChip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function HeroChip({ icon, label, className = '', px, py, depth = 18, floatDuration = 6, floatDelay = 0, delay = 0, reduceMotion = false }) {
    _s();
    const offsetX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(px, [
        -1,
        1
    ], [
        -depth,
        depth
    ]);
    const offsetY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(py, [
        -1,
        1
    ], [
        -depth * 0.7,
        depth * 0.7
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `absolute ${className}`,
        style: {
            x: offsetX,
            y: offsetY
        },
        initial: {
            opacity: 0,
            scale: 0.85
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.8,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
            delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: reduceMotion ? undefined : {
                y: [
                    0,
                    -12,
                    0
                ]
            },
            transition: reduceMotion ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["floatTransition"])(floatDuration, floatDelay),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-panel-heavy flex w-[calc(140*var(--hero-u))] flex-col items-center justify-center gap-[calc(12*var(--hero-u))] rounded-[calc(24*var(--hero-u))] px-[calc(16*var(--hero-u))] py-[calc(24*var(--hero-u))] text-center",
                style: {
                    boxShadow: '0 24px 60px -12px rgba(0,0,0,0.7), 0 0 34px -8px rgba(232,64,44,0.3), inset 0 1px 0 0 rgba(255,255,255,0.2)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-brand-red-bright",
                        style: {
                            filter: 'drop-shadow(0 0 10px rgba(255,106,56,0.55))'
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroChip.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "whitespace-pre-line text-[calc(13*var(--hero-u))] font-medium leading-[1.25] text-text-primary",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/hero/HeroChip.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/HeroChip.js",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/hero/HeroChip.js",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/hero/HeroChip.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(HeroChip, "WED6xFeGfg0wls0Gsc3rY8zf5Ao=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HeroChip;
var _c;
__turbopack_context__.k.register(_c, "HeroChip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/LensFlare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LensFlare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function LensFlare({ className = '', delay = 0.9 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        "aria-hidden": "true",
        className: `pointer-events-none absolute ${className}`,
        initial: {
            opacity: 0,
            scale: 0.6
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 1.2,
            ease: [
                0.22,
                1,
                0.36,
                1
            ],
            delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative block h-0 w-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute left-1/2 top-0 h-[1.5px] w-[86px] origin-center -translate-x-1/2 -translate-y-1/2 rotate-[38deg]",
                    style: {
                        background: 'linear-gradient(90deg, rgba(255,190,150,0) 0%, rgba(255,225,200,0.7) 50%, rgba(255,190,150,0) 100%)',
                        filter: 'blur(0.8px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/hero/LensFlare.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute left-1/2 top-0 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                    style: {
                        background: 'radial-gradient(circle, #FFF6EE 0%, #FFC79B 42%, rgba(255,140,80,0) 78%)',
                        filter: 'blur(0.6px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/hero/LensFlare.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute left-1/2 top-0 h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 rounded-full",
                    style: {
                        background: 'radial-gradient(circle, rgba(255,150,95,0.42) 0%, rgba(255,120,60,0) 70%)',
                        filter: 'blur(5px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/hero/LensFlare.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/hero/LensFlare.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/hero/LensFlare.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = LensFlare;
var _c;
__turbopack_context__.k.register(_c, "LensFlare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero/Hero.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useParallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useParallax.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/HeroBackdrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroDevice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/HeroDevice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroChip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/HeroChip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$LensFlare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero/LensFlare.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const STAT_ICONS = {
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"],
    bolt: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClockIcon"],
    shield: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShieldCheckIcon"]
};
const CHIP_ICONS = {
    chip: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChipIcon"],
    battery: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatteryIcon"],
    hdmi: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HdmiIcon"],
    charge: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChargePortIcon"],
    screen: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenIcon"],
    solder: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolderIcon"]
};
function Hero({ eyebrow, headlineLines, subheadline, primaryCta, secondaryCta, stats = [], chips = [], showScrollCue = true }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { x: px, y: py, reduceMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useParallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursorParallax"])(sectionRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative isolate min-h-screen w-full overflow-hidden",
        "aria-label": "ByTech device repair",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroBackdrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/hero/Hero.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-hero relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid min-h-screen grid-cols-1 items-stretch gap-10 pb-14 pt-[148px] sm:gap-12 sm:pb-24 sm:pt-[140px] lg:min-h-screen lg:grid-cols-[minmax(0,calc(620*var(--hero-u)))_minmax(0,1fr)] lg:items-start lg:gap-[calc(32*var(--hero-u))] lg:pb-0 lg:pt-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `relative flex h-full flex-col justify-between max-w-[calc(620*var(--hero-u))] lg:block lg:h-auto ${eyebrow ? 'lg:pt-[calc(137*var(--hero-u))]' : 'lg:pt-[calc(174*var(--hero-u))]'}`,
                            variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.09),
                            initial: "hidden",
                            animate: "visible",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: {
                                        hidden: {},
                                        visible: {}
                                    },
                                    className: "lg:contents",
                                    children: [
                                        eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                            className: "text-[calc(13*var(--hero-u))] font-bold uppercase leading-none tracking-[0.18em] text-brand-red-bright",
                                            children: eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                            className: `text-[clamp(2.5rem,7.068vw,calc(95*var(--hero-u)))] font-extrabold leading-[1.016em] text-text-primary ${eyebrow ? 'mt-[calc(24*var(--hero-u))]' : ''}`,
                                            children: headlineLines.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    style: {
                                                        fontSize: line.scale && line.scale !== 1 ? `${line.scale}em` : undefined,
                                                        letterSpacing: line.tracking
                                                    },
                                                    children: line.runs.map((run, runIndex)=>run.accent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative inline-block ml-[0.05em]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gradient-red text-accent-forged",
                                                                    children: run.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero/Hero.js",
                                                                    lineNumber: 126,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$LensFlare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "left-[58%] top-[7%]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero/Hero.js",
                                                                    lineNumber: 127,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, runIndex, true, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 125,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-metallic",
                                                            children: run.text
                                                        }, runIndex, false, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 130,
                                                            columnNumber: 25
                                                        }, this))
                                                }, lineIndex, false, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                            className: "mt-[calc(17*var(--hero-u))] max-w-[calc(520*var(--hero-u))] whitespace-pre-line text-[14px] leading-[1.55] text-text-muted sm:text-[calc(16.5*var(--hero-u))] sm:leading-[calc(27*var(--hero-u))]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:hidden",
                                                    children: "Precision repairs. Expert soldering. Real results."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden text-[17px] sm:inline",
                                                    children: subheadline
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                            className: "relative z-10 mt-9 flex flex-col items-center gap-2.5 sm:mt-[calc(22*var(--hero-u))] sm:flex-row sm:flex-wrap sm:items-center sm:gap-[calc(32*var(--hero-u))] [&_.btn-base]:h-10 [&_.btn-base]:rounded-lg [&_.btn-base]:text-[13px] sm:[&_.btn-base]:h-[calc(64*var(--hero-u))] sm:[&_.btn-base]:rounded-[calc(14*var(--hero-u))] sm:[&_.btn-base]:text-[calc(18*var(--hero-u))]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: primaryCta.href,
                                                    className: "btn-base button-primary mt-[69px] w-[160px] justify-center gap-[calc(20*var(--hero-u))] px-[calc(37*var(--hero-u))] sm:mt-0 sm:w-auto sm:justify-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                            className: "h-[calc(24*var(--hero-u))] w-[calc(24*var(--hero-u))]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 155,
                                                            columnNumber: 19
                                                        }, this),
                                                        primaryCta.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: secondaryCta.href,
                                                    className: "btn-base button-secondary w-[160px] justify-center gap-2 px-4 sm:w-auto sm:justify-start sm:gap-[calc(40*var(--hero-u))] sm:pl-[calc(26*var(--hero-u))] sm:pr-[calc(34*var(--hero-u))]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: secondaryCta.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                                            className: "h-4 w-4 sm:h-[calc(24*var(--hero-u))] sm:w-[calc(24*var(--hero-u))]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero/Hero.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    "aria-hidden": "true",
                                    className: "pointer-events-none absolute inset-x-0 top-[170px] z-0 flex justify-center opacity-50 lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-[210px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroDevice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            px: px,
                                            py: py
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.js",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.js",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                stats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].dl, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    className: "grid grid-cols-3 gap-2 sm:mt-[calc(36*var(--hero-u))] sm:flex sm:items-stretch",
                                    children: stats.map((stat, index)=>{
                                        const Icon = STAT_ICONS[stat.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-stretch",
                                            children: [
                                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rule-glass hidden w-px self-stretch sm:mx-[calc(30*var(--hero-u))] sm:block",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 194,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 sm:gap-[calc(15*var(--hero-u))]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "h-5 w-5 shrink-0 text-brand-red sm:h-[calc(30*var(--hero-u))] sm:w-[calc(30*var(--hero-u))]",
                                                            style: {
                                                                filter: 'drop-shadow(0 0 10px rgba(232,64,44,0.45))'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                    className: "text-[13px] font-bold leading-[1.12] tracking-[-0.02em] text-text-primary sm:text-[calc(23*var(--hero-u))]",
                                                                    children: stat.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero/Hero.js",
                                                                    lineNumber: 205,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                    className: "mt-0.5 text-[10px] leading-[1.2] text-white sm:mt-[calc(3*var(--hero-u))] sm:text-[calc(15*var(--hero-u))] sm:text-text-muted",
                                                                    children: stat.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/hero/Hero.js",
                                                                    lineNumber: 208,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/hero/Hero.js",
                                                            lineNumber: 204,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/hero/Hero.js",
                                                    lineNumber: 199,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, stat.label, true, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/hero/Hero.js",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero/Hero.js",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto w-[74%] lg:max-w-[calc(430*var(--hero-u))] lg:translate-x-[6%] lg:translate-y-[calc(140*var(--hero-u))]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroDevice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        px: px,
                                        py: py
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero/Hero.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    chips.map((chip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2f$HeroChip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            icon: renderChipIcon(chip.icon),
                                            label: chip.label,
                                            /* Chips hang off the edges of the device box, so they
                     only appear once the visual sits in its own column at
                     lg. Below xl the box is still too narrow to seat all
                     four, so the secondary pair waits for xl. */ className: `${chip.position} ${chip.showFrom === 'xl' ? 'hidden xl:block' : 'hidden lg:block'}`,
                                            px: px,
                                            py: py,
                                            depth: chip.depth ?? 26,
                                            floatDuration: chip.floatDuration ?? 6.5,
                                            floatDelay: chip.floatDelay ?? 0,
                                            delay: chip.delay ?? 0.55 + index * 0.08,
                                            reduceMotion: reduceMotion
                                        }, chip.label, false, {
                                            fileName: "[project]/components/hero/Hero.js",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero/Hero.js",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero/Hero.js",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero/Hero.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero/Hero.js",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            showScrollCue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                href: "#services",
                "aria-label": "Scroll to services",
                className: "absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
                    delay: 1.1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-scroll-cue text-text-muted",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "46",
                            viewBox: "0 0 18 46",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9 0v38M2 31l7 7 7-7",
                                stroke: "currentColor",
                                strokeWidth: "1.4",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/components/hero/Hero.js",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero/Hero.js",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.js",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-[5px] w-[5px] rounded-full bg-brand-red"
                    }, void 0, false, {
                        fileName: "[project]/components/hero/Hero.js",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero/Hero.js",
                lineNumber: 254,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero/Hero.js",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Hero, "PAFv7YLJBzoMevtzztnN/S3T7K0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useParallax$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursorParallax"]
    ];
});
_c = Hero;
function renderChipIcon(name) {
    const Icon = CHIP_ICONS[name] ?? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChipIcon"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        className: "h-[calc(30*var(--hero-u))] w-[calc(30*var(--hero-u))]"
    }, void 0, false, {
        fileName: "[project]/components/hero/Hero.js",
        lineNumber: 276,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Services.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const ICONS = {
    solder: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolderIcon"],
    microsolder: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicrosolderIcon"],
    hdmi: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HdmiIcon"],
    charge: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChargePortIcon"],
    screen: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenIcon"],
    battery: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatterySwapIcon"]
};
/* Uneven bento: one tall featured panel plus five tiles of differing
   span, so no two cells share a footprint. */ const SPANS = [
    'lg:col-span-4',
    'lg:col-span-3',
    'lg:col-span-4',
    'lg:col-span-3',
    'lg:col-span-12'
];
/* Each tile crops a different part of the device plate, so the texture
   never repeats identically across the bento. */ const PLATE_POSITIONS = [
    '14% 28%',
    '80% 30%',
    '34% 74%',
    '88% 66%',
    '50% 22%'
];
/* Device artwork washed into a tile, sitting under its content and
   lifting slightly on hover along with the rest of the glass. */ function ServicePlate({ position, opacity = '0.1', hoverOpacity = '0.17' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0",
        "aria-hidden": "true",
        style: {
            '--plate-o': opacity,
            '--plate-h': hoverOpacity
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/brand/devices-overlay.png",
            alt: "",
            style: {
                objectPosition: position
            },
            className: "h-full w-full object-cover opacity-[var(--plate-o)] transition-opacity duration-hover ease-brand group-hover:opacity-[var(--plate-h)]"
        }, void 0, false, {
            fileName: "[project]/components/sections/Services.js",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Services.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = ServicePlate;
function Services({ eyebrow, heading, intro, featured, items = [] }) {
    const FeaturedIcon = ICONS[featured.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolderIcon"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "relative overflow-hidden py-20 md:py-[120px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                "aria-hidden": "true",
                style: {
                    background: 'radial-gradient(46% 40% at 84% 8%, rgba(232,64,44,0.14) 0%, rgba(3,11,30,0) 68%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Services.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mb-8 grid grid-cols-1 gap-6 md:mb-[56px] md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end",
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "text-label-sm uppercase text-brand-red-bright",
                                        children: eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.js",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "mt-5 max-w-[620px] text-heading-lg text-text-primary",
                                        children: heading
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Services.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "text-body-md text-text-muted lg:pb-2",
                                children: intro
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Services.js",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Services.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12",
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.07),
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnceTall"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "group glass-panel-heavy hover-lift hover-glow-red relative overflow-hidden rounded-panel-lg p-6 sm:col-span-2 sm:p-9 lg:col-span-5 lg:row-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicePlate, {
                                        position: "22% 34%",
                                        opacity: "0.13",
                                        hoverOpacity: "0.2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.js",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-70 transition-opacity duration-hover ease-brand group-hover:opacity-100",
                                        "aria-hidden": "true",
                                        style: {
                                            background: 'radial-gradient(circle, rgba(232,64,44,0.3) 0%, rgba(232,64,44,0) 70%)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Services.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex h-full flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex h-[52px] w-[52px] items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.06] text-brand-red-bright transition-transform duration-hover ease-brand group-hover:-rotate-6 group-hover:scale-110 sm:h-[74px] sm:w-[74px] sm:rounded-[22px]",
                                                style: {
                                                    filter: 'drop-shadow(0 0 14px rgba(255,106,56,0.4))'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedIcon, {
                                                        width: 26,
                                                        height: 26,
                                                        className: "sm:hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Services.js",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedIcon, {
                                                        width: 38,
                                                        height: 38,
                                                        className: "hidden sm:block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Services.js",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Services.js",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-5 text-heading-md text-text-primary sm:mt-8",
                                                children: featured.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Services.js",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 max-w-[420px] text-body-sm text-text-muted sm:mt-4 sm:text-body-md",
                                                children: featured.blurb
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Services.js",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-auto pt-6 text-[13px] font-medium uppercase tracking-[0.14em] text-brand-red-bright/80 sm:pt-9",
                                                children: featured.meta
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Services.js",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Services.js",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Services.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            items.map((item, index)=>{
                                const Icon = ICONS[item.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolderIcon"];
                                const isBanner = SPANS[index] === 'lg:col-span-12';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                    className: `group glass-panel-light hover-lift relative overflow-hidden rounded-panel p-5 transition-colors hover:border-brand-red/50 sm:p-7 ${SPANS[index]} ${isBanner ? 'sm:col-span-2 lg:flex lg:items-center lg:justify-between lg:gap-8' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicePlate, {
                                            position: PLATE_POSITIONS[index % PLATE_POSITIONS.length]
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Services.js",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-hover ease-brand group-hover:opacity-100",
                                            "aria-hidden": "true",
                                            style: {
                                                background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(232,64,44,0.08) 100%)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Services.js",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative ${isBanner ? 'lg:flex lg:items-center lg:gap-6' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-[11px] border border-white/[0.08] bg-white/[0.05] text-brand-red-bright transition-transform duration-hover ease-brand group-hover:-translate-y-1 group-hover:scale-110 sm:h-[46px] sm:w-[46px] sm:rounded-[14px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            width: 18,
                                                            height: 18,
                                                            className: "sm:hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.js",
                                                            lineNumber: 149,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            width: 24,
                                                            height: 24,
                                                            className: "hidden sm:block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.js",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Services.js",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: isBanner ? 'mt-3 lg:mt-0 sm:mt-5' : 'mt-3 sm:mt-5',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-[15px] font-semibold leading-snug text-text-primary sm:text-heading-sm",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.js",
                                                            lineNumber: 153,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1.5 text-[12px] leading-relaxed text-text-muted sm:mt-2 sm:text-body-sm",
                                                            children: item.blurb
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Services.js",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/Services.js",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Services.js",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        isBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/book-repair",
                                            className: "button-ghost relative mt-6 lg:mt-0",
                                            children: [
                                                "Book this repair",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                                    className: "button-ghost-arrow",
                                                    width: 18,
                                                    height: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Services.js",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Services.js",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.title, true, {
                                    fileName: "[project]/components/sections/Services.js",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Services.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Services.js",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Services.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c1 = Services;
var _c, _c1;
__turbopack_context__.k.register(_c, "ServicePlate");
__turbopack_context__.k.register(_c1, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/CategoryVisual.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Placeholder artwork for gallery tiles until real repair photos are
 * dropped in. `seed` varies the trace layout so no two tiles repeat.
 * Pass `src` on a category image to render a real photo instead.
 */ __turbopack_context__.s([
    "default",
    ()=>CategoryVisual
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CategoryVisual({ accent = '#E8402C', seed = 0, className = '' }) {
    const id = `cv-${seed}`;
    const rows = 5 + seed % 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `h-full w-full ${className}`,
        viewBox: "0 0 400 500",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${id}-bg`,
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#0C1730"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/CategoryVisual.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "55%",
                                stopColor: "#060E22"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/CategoryVisual.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#0A1428"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/CategoryVisual.js",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: `${id}-glow`,
                        cx: "72%",
                        cy: "76%",
                        r: "62%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: accent,
                                stopOpacity: "0.42"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/CategoryVisual.js",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: accent,
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/CategoryVisual.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "400",
                height: "500",
                fill: "#070F22"
            }, void 0, false, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "400",
                height: "500",
                fill: `url(#${id}-bg)`,
                opacity: "0.9"
            }, void 0, false, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "400",
                height: "500",
                fill: `url(#${id}-glow)`
            }, void 0, false, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#2E5FA4",
                strokeWidth: "1.1",
                fill: "none",
                opacity: "0.5",
                children: Array.from({
                    length: rows
                }).map((_, i)=>{
                    const y = 60 + i * (380 / rows) + seed * 13 % 20;
                    const mid = 90 + (i * 47 + seed * 29) % 200;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M-10 ${y}h${mid}l26 26h${260 - mid}`,
                        opacity: 0.4 + i % 3 * 0.2
                    }, i, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: accent,
                strokeWidth: "1.3",
                fill: "none",
                opacity: "0.75",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M-10 ${140 + seed % 4 * 40}h120l30-30h180`
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M410 ${300 + seed % 3 * 34}h-140l-28 28H-10`
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: accent,
                opacity: "0.9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 78 + seed * 31 % 180,
                        cy: 132 + seed * 17 % 220,
                        r: "3.2"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 250 - seed * 23 % 140,
                        cy: 368 - seed * 19 % 180,
                        r: "3.2"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#5E93E0",
                opacity: "0.75",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 140 + seed * 41 % 160,
                        cy: 220 + seed * 11 % 160,
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: 300 - seed * 37 % 150,
                        cy: 110 + seed * 43 % 200,
                        r: "2.6"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CategoryVisual.js",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: 128 + seed * 7 % 40,
                y: 196 + seed * 11 % 60,
                width: "112",
                height: "112",
                rx: "14",
                fill: "#0A1428",
                stroke: "rgba(255,255,255,0.14)",
                strokeWidth: "1.2"
            }, void 0, false, {
                fileName: "[project]/components/sections/CategoryVisual.js",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/CategoryVisual.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = CategoryVisual;
var _c;
__turbopack_context__.k.register(_c, "CategoryVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/useDragScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDragScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useDragScroll({ enabled = true } = {}) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        active: false,
        startX: 0,
        startLeft: 0,
        moved: 0
    });
    const snapTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* Scroll snapping fights direct scrollLeft writes, so it's parked for
     the duration of the gesture and restored once the rail goes idle —
     which lands the nearest tile on the snap point. */ const suspendSnap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragScroll.useCallback[suspendSnap]": (el)=>{
            el.style.scrollSnapType = 'none';
            clearTimeout(snapTimer.current);
            snapTimer.current = setTimeout({
                "useDragScroll.useCallback[suspendSnap]": ()=>{
                    el.style.scrollSnapType = '';
                }
            }["useDragScroll.useCallback[suspendSnap]"], 170);
        }
    }["useDragScroll.useCallback[suspendSnap]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDragScroll.useEffect": ()=>{
            const el = ref.current;
            if (!el || !enabled) return undefined;
            const onWheel = {
                "useDragScroll.useEffect.onWheel": (e)=>{
                    // A real horizontal gesture is already going the right way.
                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
                    if (el.scrollWidth <= el.clientWidth) return;
                    suspendSnap(el);
                    const before = el.scrollLeft;
                    el.scrollLeft += e.deltaY;
                    // Only claim the wheel if the rail actually moved. Comparing
                    // against the edges directly doesn't work — snap padding keeps
                    // scrollLeft off zero — and swallowing a no-op would trap the
                    // page's own scroll under the cursor.
                    if (el.scrollLeft !== before) e.preventDefault();
                }
            }["useDragScroll.useEffect.onWheel"];
            el.addEventListener('wheel', onWheel, {
                passive: false
            });
            return ({
                "useDragScroll.useEffect": ()=>{
                    el.removeEventListener('wheel', onWheel);
                    clearTimeout(snapTimer.current);
                }
            })["useDragScroll.useEffect"];
        }
    }["useDragScroll.useEffect"], [
        suspendSnap,
        enabled
    ]);
    // A gesture already in flight must not survive the rail being locked.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDragScroll.useEffect": ()=>{
            if (!enabled) {
                drag.current.active = false;
                setDragging(false);
            }
        }
    }["useDragScroll.useEffect"], [
        enabled
    ]);
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragScroll.useCallback[onPointerDown]": (e)=>{
            if (!enabled || e.pointerType === 'touch' || e.button !== 0) return;
            const el = ref.current;
            if (!el) return;
            drag.current = {
                active: true,
                startX: e.clientX,
                startLeft: el.scrollLeft,
                moved: 0
            };
            setDragging(true);
        }
    }["useDragScroll.useCallback[onPointerDown]"], [
        enabled
    ]);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragScroll.useCallback[onPointerMove]": (e)=>{
            const d = drag.current;
            if (!d.active) return;
            const el = ref.current;
            if (!el) return;
            const dx = e.clientX - d.startX;
            if (Math.abs(dx) > d.moved) d.moved = Math.abs(dx);
            if (d.moved > 3) {
                // Capture only once it's clearly a drag, so plain clicks on the
                // tiles still reach the button.
                if (el.hasPointerCapture?.(e.pointerId) === false) el.setPointerCapture(e.pointerId);
                suspendSnap(el);
                el.scrollLeft = d.startLeft - dx;
            }
        }
    }["useDragScroll.useCallback[onPointerMove]"], [
        suspendSnap
    ]);
    const endDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragScroll.useCallback[endDrag]": (e)=>{
            if (!drag.current.active) return;
            drag.current.active = false;
            setDragging(false);
            const el = ref.current;
            if (el?.hasPointerCapture?.(e.pointerId)) el.releasePointerCapture(e.pointerId);
        }
    }["useDragScroll.useCallback[endDrag]"], []);
    // A drag that ends on top of a tile must not also open its gallery.
    const onClickCapture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDragScroll.useCallback[onClickCapture]": (e)=>{
            if (drag.current.moved > 6) {
                e.preventDefault();
                e.stopPropagation();
                drag.current.moved = 0;
            }
        }
    }["useDragScroll.useCallback[onClickCapture]"], []);
    return {
        ref,
        dragging,
        handlers: {
            onPointerDown,
            onPointerMove,
            onPointerUp: endDrag,
            onPointerCancel: endDrag,
            onClickCapture
        }
    };
}
_s(useDragScroll, "t2LMGwurvS0AiJf+SX79H4rwbg0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Devices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Devices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CategoryVisual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/CategoryVisual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDragScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useDragScroll.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const ICONS = {
    console: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConsoleIcon"],
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"],
    laptop: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LaptopIcon"],
    controller: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControllerIcon"],
    tablet: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabletIcon"]
};
function Devices({ eyebrow, heading, categories = [] }) {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoomed, setZoomed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // The rail locks while a gallery is open, so the category you picked
    // stays put underneath it instead of sliding away.
    const { ref: scrollerRef, dragging, handlers: railHandlers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDragScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        enabled: openId === null
    });
    const active = categories.find((c)=>c.id === openId) ?? null;
    // Bring the opened gallery up into view, clear of the fixed navbar.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Devices.useEffect": ()=>{
            if (!openId) return undefined;
            const id = setTimeout({
                "Devices.useEffect.id": ()=>{
                    const el = galleryRef.current;
                    if (!el) return;
                    // The wrapper's top stays put while it expands downward, so this
                    // target is stable even mid-animation.
                    const top = el.getBoundingClientRect().top + window.scrollY - 96;
                    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    window.scrollTo({
                        top,
                        behavior: reduced ? 'auto' : 'smooth'
                    });
                }
            }["Devices.useEffect.id"], 260);
            return ({
                "Devices.useEffect": ()=>clearTimeout(id)
            })["Devices.useEffect"];
        }
    }["Devices.useEffect"], [
        openId
    ]);
    const scrollBy = (dir)=>{
        const el = scrollerRef.current;
        if (el) el.scrollBy({
            left: dir * 440,
            behavior: 'smooth'
        });
    };
    const closeLightbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Devices.useCallback[closeLightbox]": ()=>{
            setLightbox(null);
            setZoomed(false);
        }
    }["Devices.useCallback[closeLightbox]"], []);
    const step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Devices.useCallback[step]": (delta)=>{
            if (!active || lightbox === null) return;
            // Stepping to a new photo always starts fit-to-frame again.
            setZoomed(false);
            setLightbox({
                "Devices.useCallback[step]": (i)=>(i + delta + active.images.length) % active.images.length
            }["Devices.useCallback[step]"]);
        }
    }["Devices.useCallback[step]"], [
        active,
        lightbox
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Devices.useEffect": ()=>{
            if (lightbox === null) return;
            const onKey = {
                "Devices.useEffect.onKey": (e)=>{
                    // Escape backs out of zoom first, then out of the lightbox.
                    if (e.key === 'Escape') {
                        if (zoomed) setZoomed(false);
                        else closeLightbox();
                    }
                    if (e.key === 'ArrowRight') step(1);
                    if (e.key === 'ArrowLeft') step(-1);
                }
            }["Devices.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            document.body.style.overflow = 'hidden';
            return ({
                "Devices.useEffect": ()=>{
                    window.removeEventListener('keydown', onKey);
                    document.body.style.overflow = '';
                }
            })["Devices.useEffect"];
        }
    }["Devices.useEffect"], [
        lightbox,
        closeLightbox,
        step,
        zoomed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "devices",
        className: "relative overflow-hidden py-20 md:py-[120px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "container-site mb-12 flex flex-wrap items-end justify-between gap-6",
                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "text-label-sm uppercase text-brand-red-bright",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "mt-5 max-w-[560px] text-heading-lg text-text-primary",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Devices.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselButton, {
                                label: "Previous",
                                onClick: ()=>scrollBy(-1),
                                disabled: openId !== null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselButton, {
                                label: "Next",
                                onClick: ()=>scrollBy(1),
                                disabled: openId !== null,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Devices.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Devices.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollerRef,
                ...railHandlers,
                className: `no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:gap-6 md:px-[60px] ${openId !== null ? 'cursor-default' : dragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`,
                children: categories.map((cat, index)=>{
                    const Icon = ICONS[cat.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"];
                    const isOpen = openId === cat.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        type: "button",
                        onClick: ()=>setOpenId(isOpen ? null : cat.id),
                        "aria-expanded": isOpen,
                        className: "group relative aspect-[4/5] w-[300px] shrink-0 cursor-[inherit] snap-start overflow-hidden rounded-panel-lg border border-white/[0.08] text-left sm:w-[360px] lg:w-[400px]",
                        initial: {
                            opacity: 0,
                            y: 26
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        transition: {
                            duration: 0.7,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
                            delay: index * 0.06
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 transition-transform duration-[600ms] ease-brand group-hover:scale-[1.06]",
                                children: cat.images?.[0]?.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: cat.images[0].src,
                                    alt: "",
                                    draggable: false,
                                    className: "h-full w-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 151,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CategoryVisual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accent: cat.accent,
                                    seed: index + 1
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 153,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0",
                                style: {
                                    background: 'linear-gradient(180deg, rgba(3,11,30,0) 32%, rgba(3,11,30,0.72) 74%, rgba(3,11,30,0.94) 100%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-5 bottom-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel-outline overflow-hidden rounded-panel px-5 py-4 transition-colors duration-hover ease-brand group-hover:border-brand-red/55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    width: 22,
                                                    height: 22,
                                                    className: "text-brand-red-bright"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-heading-sm text-text-primary",
                                                    children: cat.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-body-sm text-text-muted",
                                                    children: cat.count
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Devices.js",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-rows-[0fr] transition-[grid-template-rows] duration-[380ms] ease-brand group-hover:grid-rows-[1fr]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "pt-3 text-body-sm text-text-muted",
                                                        children: cat.blurb
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Devices.js",
                                                        lineNumber: 174,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "button-ghost mt-3",
                                                        children: [
                                                            isOpen ? 'Hide Gallery' : 'View Gallery',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                                                className: "button-ghost-arrow",
                                                                width: 17,
                                                                height: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Devices.js",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Devices.js",
                                                        lineNumber: 175,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Devices.js",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/components/sections/Devices.js",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sections/Devices.js",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.55,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: galleryRef,
                        className: "container-site pt-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-7 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-heading-md text-text-primary",
                                        children: [
                                            active.title,
                                            " recent work"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Devices.js",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setOpenId(null),
                                        className: "button-ghost text-text-muted hover:text-text-primary",
                                        children: [
                                            "Close",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
                                                width: 17,
                                                height: 17
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Devices.js",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "columns-2 gap-4 sm:columns-3 lg:columns-4 xl:columns-5 [&>*]:mb-4",
                                children: active.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "button",
                                        onClick: ()=>setLightbox(i),
                                        className: "group block w-full break-inside-avoid overflow-hidden rounded-panel border border-white/[0.08] text-left",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
                                            delay: i * 0.05
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `relative overflow-hidden ${img.tall ? 'h-[260px]' : 'h-[180px]'}`,
                                                children: img.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: img.src,
                                                    alt: img.caption,
                                                    className: "h-full w-full object-cover transition-transform duration-[600ms] ease-brand group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 224,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full w-full transition-transform duration-[600ms] ease-brand group-hover:scale-105",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CategoryVisual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        accent: active.accent,
                                                        seed: i + 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Devices.js",
                                                        lineNumber: 227,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 226,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel-light flex items-center justify-between gap-2 border-0 border-t px-3.5 py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate text-body-sm text-text-primary",
                                                        children: img.caption
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Devices.js",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                                        width: 14,
                                                        height: 14,
                                                        className: "shrink-0 text-brand-red-bright opacity-0 transition-opacity duration-hover ease-brand group-hover:opacity-100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Devices.js",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, img.src ?? img.caption, true, {
                                        fileName: "[project]/components/sections/Devices.js",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Devices.js",
                        lineNumber: 199,
                        columnNumber: 13
                    }, this)
                }, active.id, false, {
                    fileName: "[project]/components/sections/Devices.js",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Devices.js",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: active && lightbox !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 z-[120] flex items-center justify-center bg-background-primary/88 p-5 backdrop-blur-md",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.28,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                    },
                    onClick: closeLightbox,
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": `${active.title} gallery`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "glass-panel-heavy relative w-full max-w-[min(1240px,94vw)] overflow-hidden rounded-panel-lg",
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.96
                        },
                        transition: {
                            duration: 0.34,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative flex h-[68vh] min-h-[320px] w-full items-center justify-center bg-black/25 ${zoomed ? 'overflow-auto' : 'overflow-hidden'}`,
                                children: active.images[lightbox].src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: active.images[lightbox].src,
                                    alt: active.images[lightbox].caption,
                                    onClick: ()=>setZoomed((z)=>!z),
                                    className: zoomed ? 'max-w-none shrink-0 cursor-zoom-out' : 'h-full w-full cursor-zoom-in object-contain'
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 273,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$CategoryVisual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    accent: active.accent,
                                    seed: lightbox + 5
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 284,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4 px-7 py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-heading-sm text-text-primary",
                                                children: active.images[lightbox].caption
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-body-sm text-text-muted",
                                                children: [
                                                    active.title,
                                                    " · ",
                                                    lightbox + 1,
                                                    " of ",
                                                    active.images.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Devices.js",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselButton, {
                                                label: zoomed ? 'Fit to frame' : 'Zoom to full size',
                                                onClick: ()=>setZoomed((z)=>!z),
                                                children: zoomed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomOutIcon"], {
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 299,
                                                    columnNumber: 31
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomInIcon"], {
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 299,
                                                    columnNumber: 72
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselButton, {
                                                label: "Previous image",
                                                onClick: ()=>step(-1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 302,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselButton, {
                                                label: "Next image",
                                                onClick: ()=>step(1),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {
                                                    width: 20,
                                                    height: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Devices.js",
                                                    lineNumber: 305,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Devices.js",
                                                lineNumber: 304,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Devices.js",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeLightbox,
                                "aria-label": "Close",
                                className: "glass-panel-outline absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-colors duration-hover ease-brand hover:border-brand-red/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Devices.js",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Devices.js",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Devices.js",
                        lineNumber: 257,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Devices.js",
                    lineNumber: 246,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Devices.js",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Devices.js",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(Devices, "y5uEvTUiZiXci1e388zJbZISKN0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDragScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Devices;
function CarouselButton({ children, label, onClick, disabled = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        disabled: disabled,
        "aria-label": label,
        className: "glass-panel-outline flex h-11 w-11 items-center justify-center rounded-full text-text-primary transition-all duration-hover ease-brand hover:scale-[1.03] hover:border-brand-red/60 hover:text-brand-red-bright disabled:pointer-events-none disabled:opacity-35",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/sections/Devices.js",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_c1 = CarouselButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "Devices");
__turbopack_context__.k.register(_c1, "CarouselButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/HowItWorks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
'use client';
;
;
;
/* Node badge that sits on the rule: an opaque core so the trace
   terminates into it, a hairline rim, a slowly rotating tick ring, a
   red arc that swings round on hover, and cardinal nodes that light up
   like solder points. */ function StepBadge({ number, size = 76 }) {
    const mid = size / 2;
    const r = mid - 4;
    const circumference = 2 * Math.PI * r;
    const spin = {
        transformBox: 'fill-box',
        transformOrigin: 'center'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group/badge relative",
        style: {
            width: size,
            height: size
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute -inset-4 rounded-full opacity-0 transition-opacity duration-hover ease-brand group-hover/badge:opacity-100",
                style: {
                    background: 'radial-gradient(circle, rgba(232,64,44,0.34) 0%, rgba(232,64,44,0) 68%)'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/HowItWorks.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full w-full rounded-full bg-background-primary transition-transform duration-hover ease-brand group-hover/badge:scale-[1.06]",
                style: {
                    boxShadow: '0 0 26px -8px rgba(232,64,44,0.6)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: `0 0 ${size} ${size}`,
                        className: "absolute inset-0 h-full w-full",
                        fill: "none",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: mid,
                                cy: mid,
                                r: r,
                                stroke: "rgba(255,255,255,0.14)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: mid,
                                cy: mid,
                                r: r - 6,
                                stroke: "rgba(255,255,255,0.17)",
                                strokeWidth: "1.4",
                                strokeDasharray: "1.5 5.5",
                                strokeLinecap: "round",
                                style: spin,
                                className: "opacity-70 transition-opacity duration-hover ease-brand motion-safe:animate-[spin_26s_linear_infinite] group-hover/badge:opacity-100"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: mid,
                                cy: mid,
                                r: r,
                                stroke: "#E8402C",
                                strokeWidth: "1.7",
                                strokeLinecap: "round",
                                strokeDasharray: `${circumference * 0.26} ${circumference}`,
                                style: spin,
                                className: "-rotate-90 transition-transform duration-[750ms] ease-brand group-hover/badge:rotate-[200deg]"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            [
                                [
                                    0,
                                    -1
                                ],
                                [
                                    1,
                                    0
                                ],
                                [
                                    0,
                                    1
                                ],
                                [
                                    -1,
                                    0
                                ]
                            ].map(([dx, dy])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: mid + dx * r,
                                    cy: mid + dy * r,
                                    r: "1.9",
                                    fill: "#FF6A38",
                                    className: "opacity-45 transition-opacity duration-hover ease-brand group-hover/badge:opacity-100"
                                }, `${dx}${dy}`, false, {
                                    fileName: "[project]/components/sections/HowItWorks.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HowItWorks.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-[9px] flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-[17px] font-bold tabular-nums tracking-[-0.01em] text-text-primary transition-colors duration-hover ease-brand group-hover/badge:border-brand-red/60 group-hover/badge:text-brand-red-bright",
                        children: number
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HowItWorks.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HowItWorks.js",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/HowItWorks.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = StepBadge;
function HowItWorks({ eyebrow, heading, steps = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "how-it-works",
        className: "relative overflow-hidden py-20 md:py-[130px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/brand/circuit-overlay.png",
                    alt: "",
                    className: "h-full w-full object-cover opacity-[0.18]",
                    style: {
                        maskImage: 'linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/HowItWorks.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/HowItWorks.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "max-w-[620px]",
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "text-label-sm uppercase text-brand-red-bright",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "mt-5 text-heading-lg text-text-primary",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HowItWorks.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-[92px] hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[420px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute left-0 right-0 top-1/2 h-px origin-left -translate-y-1/2",
                                    style: {
                                        background: 'linear-gradient(90deg, rgba(232,64,44,0) 0%, #E8402C 12%, #FF6A38 50%, #E8402C 88%, rgba(232,64,44,0) 100%)',
                                        boxShadow: '0 0 18px rgba(232,64,44,0.75), 0 0 42px rgba(232,64,44,0.4)'
                                    },
                                    initial: {
                                        scaleX: 0
                                    },
                                    whileInView: {
                                        scaleX: 1
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.4
                                    },
                                    transition: {
                                        duration: 1.1,
                                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HowItWorks.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative grid h-full grid-cols-4",
                                    children: steps.map((step, index)=>{
                                        const above = index % 2 === 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "relative flex h-full flex-col items-center",
                                            initial: {
                                                opacity: 0,
                                                y: above ? -18 : 18
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: true,
                                                amount: 0.4
                                            },
                                            transition: {
                                                duration: 0.65,
                                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
                                                delay: 0.25 + index * 0.13
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute w-[248px] text-center ${above ? 'bottom-1/2 mb-[74px]' : 'top-1/2 mt-[74px]'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-heading-sm text-text-primary",
                                                            children: step.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/HowItWorks.js",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2.5 text-body-sm text-text-muted",
                                                            children: step.body
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/HowItWorks.js",
                                                            lineNumber: 153,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/HowItWorks.js",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-1/2 w-px -translate-x-1/2 ${above ? 'bottom-1/2 mb-[41px] h-[30px]' : 'top-1/2 mt-[41px] h-[30px]'}`,
                                                    style: {
                                                        background: above ? 'linear-gradient(to top, rgba(232,64,44,0.85), rgba(232,64,44,0))' : 'linear-gradient(to bottom, rgba(232,64,44,0.85), rgba(232,64,44,0))'
                                                    },
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/HowItWorks.js",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-1/2 -translate-y-1/2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepBadge, {
                                                        number: step.number,
                                                        size: 76
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/HowItWorks.js",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/HowItWorks.js",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, step.number, true, {
                                            fileName: "[project]/components/sections/HowItWorks.js",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HowItWorks.js",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/HowItWorks.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HowItWorks.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-14 lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute bottom-4 left-[32px] top-4 w-px",
                                style: {
                                    background: 'linear-gradient(to bottom, rgba(232,64,44,0), #E8402C 10%, #FF6A38 55%, rgba(232,64,44,0))',
                                    boxShadow: '0 0 16px rgba(232,64,44,0.6)'
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ol, {
                                className: "space-y-9",
                                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                                children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        className: "relative flex gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepBadge, {
                                                    number: step.number,
                                                    size: 64
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/HowItWorks.js",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/HowItWorks.js",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-heading-sm text-text-primary",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/HowItWorks.js",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-body-sm text-text-muted",
                                                        children: step.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/HowItWorks.js",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/HowItWorks.js",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, step.number, true, {
                                        fileName: "[project]/components/sections/HowItWorks.js",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HowItWorks.js",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HowItWorks.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HowItWorks.js",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/HowItWorks.js",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c1 = HowItWorks;
var _c, _c1;
__turbopack_context__.k.register(_c, "StepBadge");
__turbopack_context__.k.register(_c1, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Stats.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function Stats({ stats = [] }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.4
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative overflow-hidden border-y border-white/[0.06] py-16 md:py-[92px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-brand-navy/35",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/Stats.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "texture-circuit absolute inset-0 opacity-[0.35]",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/sections/Stats.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                "aria-hidden": "true",
                style: {
                    background: 'radial-gradient(60% 120% at 50% 120%, rgba(232,64,44,0.2) 0%, rgba(3,11,30,0) 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Stats.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                    className: "grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0",
                    children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `relative px-2 text-center lg:px-8 ${index > 0 ? 'lg:before:absolute lg:before:inset-y-1 lg:before:left-0 lg:before:w-px lg:before:bg-white/[0.14] lg:before:content-[""]' : ''}`,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : undefined,
                            transition: {
                                duration: 0.7,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"],
                                delay: index * 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                    className: "sr-only",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Stats.js",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-counter-xl text-brand-red-bright",
                                            style: {
                                                filter: 'drop-shadow(0 0 34px rgba(232,64,44,0.45))'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                                    to: stat.value,
                                                    start: inView
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Stats.js",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                stat.suffix
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/Stats.js",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-3 block text-[14px] uppercase tracking-[0.16em] text-text-muted",
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Stats.js",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Stats.js",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stat.label, true, {
                            fileName: "[project]/components/sections/Stats.js",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Stats.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Stats.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Stats.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Stats, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Stats;
function Counter({ to, start, duration = 1600 }) {
    _s1();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reduceMotion ? to : 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (!start || reduceMotion) return;
            let raf;
            const t0 = performance.now();
            const tick = {
                "Counter.useEffect.tick": (now)=>{
                    const p = Math.min((now - t0) / duration, 1);
                    // ease-out so the count decelerates into its final value
                    setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) raf = requestAnimationFrame(tick);
                }
            }["Counter.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "Counter.useEffect": ()=>cancelAnimationFrame(raf)
            })["Counter.useEffect"];
        }
    }["Counter.useEffect"], [
        start,
        to,
        duration,
        reduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: value
    }, void 0, false);
}
_s1(Counter, "Sl/866taBWV1vdGRgKDgPGV0InE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = Counter;
var _c, _c1;
__turbopack_context__.k.register(_c, "Stats");
__turbopack_context__.k.register(_c1, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Testimonials.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDragScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useDragScroll.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Testimonials({ eyebrow, heading, featured, others = [] }) {
    _s();
    const all = [
        featured,
        ...others
    ];
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const active = all[activeIndex];
    const { ref: thumbRef, dragging, handlers: thumbHandlers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDragScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reviews",
        className: "glass-on-light relative overflow-hidden bg-background-offwhite py-20 md:py-[120px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                "aria-hidden": "true",
                style: {
                    background: 'radial-gradient(48% 44% at 88% 6%, rgba(232,64,44,0.1) 0%, rgba(244,242,239,0) 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Testimonials.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                        className: "max-w-[640px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "text-label-sm uppercase text-brand-red",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Testimonials.js",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "mt-5 text-heading-lg text-text-inverse",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Testimonials.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Testimonials.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].figure, {
                        className: "glass-on-light glass-panel-heavy relative mt-14 rounded-panel-lg px-8 py-12 sm:px-14 lg:px-20 lg:py-16",
                        initial: {
                            opacity: 0,
                            y: 22
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuoteIcon"], {
                                width: 92,
                                height: 92,
                                className: "absolute -top-4 left-6 text-brand-red/12 lg:left-10",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Testimonials.js",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,250px)] lg:gap-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "text-[18px] font-medium leading-[1.42] tracking-[-0.015em] text-text-inverse sm:text-[26px] md:text-[32px]",
                                        children: [
                                            "“",
                                            active.quote,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Testimonials.js",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        className: "lg:pt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 flex gap-1 text-brand-red",
                                                children: Array.from({
                                                    length: active.rating ?? 5
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                        width: 17,
                                                        height: 17
                                                    }, i, false, {
                                                        fileName: "[project]/components/sections/Testimonials.js",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.js",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-heading-sm text-text-inverse",
                                                children: active.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.js",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1.5 text-body-sm text-text-inverse-muted",
                                                children: active.role
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.js",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-6 block h-px w-16 bg-brand-red/50",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.js",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Testimonials.js",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Testimonials.js",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, activeIndex, true, {
                        fileName: "[project]/components/sections/Testimonials.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: thumbRef,
                        ...thumbHandlers,
                        className: `no-scrollbar mt-9 flex gap-3 overflow-x-auto pb-2 ${dragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`,
                        children: all.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveIndex(index),
                                "aria-pressed": index === activeIndex,
                                className: `flex shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 transition-all duration-hover ease-brand hover:scale-[1.03] ${index === activeIndex ? 'border-brand-red/60 bg-brand-red/10' : 'border-brand-navy/12 bg-transparent hover:border-brand-navy/25'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white",
                                        style: {
                                            background: index === activeIndex ? 'linear-gradient(140deg,#FF7A45,#E8402C)' : 'linear-gradient(140deg,#26324B,#101A31)'
                                        },
                                        children: initials(item.name)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Testimonials.js",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[14px] font-semibold text-text-inverse",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.js",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[12px] text-text-inverse-muted",
                                                children: item.role
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.js",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Testimonials.js",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/components/sections/Testimonials.js",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Testimonials.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Testimonials.js",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Testimonials.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "QIjqy8f0aXaDALnyLE6T85pAdg4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useDragScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Testimonials;
function initials(name) {
    return name.split(' ').map((p)=>p[0]).join('').slice(0, 2).toUpperCase();
}
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RepairRequestForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RepairRequestForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DELIVERY_OPTIONS = [
    {
        value: 'drop-off',
        title: 'Drop It Off',
        helper: 'Bring your device to our workshop'
    },
    {
        value: 'delivery',
        title: 'Deliver It For Me',
        helper: 'We arrange collection and return'
    }
];
function RepairRequestForm({ deviceTypes = [] }) {
    _s();
    const [delivery, setDelivery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('drop-off');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [ticket, setTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (event)=>{
        event.preventDefault();
        setStatus('submitting');
        setError('');
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());
        try {
            const res = await fetch('/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    deliveryMethod: delivery
                })
            });
            const json = await res.json();
            if (!res.ok || !json.success) {
                setError(json.error || 'Something went wrong. Please try again.');
                setStatus('idle');
                return;
            }
            setTicket(json.ticketNumber);
            setStatus('done');
            form.reset();
            setDelivery('drop-off');
        } catch  {
            setError('Could not reach the server. Please try again.');
            setStatus('idle');
        }
    };
    if (status === 'done') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "py-10 text-center",
            initial: {
                opacity: 0,
                y: 16
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-label-sm uppercase text-brand-red-bright",
                    children: "Request received"
                }, void 0, false, {
                    fileName: "[project]/components/RepairRequestForm.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-heading-md text-text-primary",
                    children: [
                        "Ticket ",
                        ticket
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RepairRequestForm.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-4 max-w-[440px] text-body-md text-text-muted",
                    children: "Save this number. It’s how you track the repair, and we’ll be in touch shortly."
                }, void 0, false, {
                    fileName: "[project]/components/RepairRequestForm.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 flex flex-wrap items-center justify-center gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/track-repair?ticketNumber=${ticket}`,
                            className: "btn-base button-primary",
                            children: "Track this repair"
                        }, void 0, false, {
                            fileName: "[project]/components/RepairRequestForm.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setStatus('idle'),
                            className: "button-ghost",
                            children: [
                                "Book another",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                    className: "button-ghost-arrow",
                                    width: 18,
                                    height: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/RepairRequestForm.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/RepairRequestForm.js",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RepairRequestForm.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/RepairRequestForm.js",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Full name",
                        name: "fullName",
                        placeholder: "Your name",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Email",
                        name: "email",
                        type: "email",
                        placeholder: "you@example.com",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Phone",
                        name: "phone",
                        placeholder: "Phone number",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Device",
                        name: "deviceType",
                        as: "select",
                        options: deviceTypes,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                    label: "Issue description",
                    name: "issueDescription",
                    as: "textarea",
                    placeholder: "Tell us what happened and what the device is doing now",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/components/RepairRequestForm.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "text-heading-sm text-text-primary",
                        children: "How would you like to get it to us?"
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-4 sm:grid-cols-2",
                        children: DELIVERY_OPTIONS.map((option)=>{
                            const active = delivery === option.value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setDelivery(option.value),
                                "aria-pressed": active,
                                className: `rounded-panel border p-5 text-left transition-all duration-hover ease-brand hover:scale-[1.02] ${active ? 'border-brand-red/70 bg-brand-red/10 shadow-glow-red' : 'border-white/[0.1] bg-white/[0.03] hover:border-white/25'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-body-md font-semibold text-text-primary",
                                        children: option.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/RepairRequestForm.js",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 block text-body-sm text-text-muted",
                                        children: option.helper
                                    }, void 0, false, {
                                        fileName: "[project]/components/RepairRequestForm.js",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, option.value, true, {
                                fileName: "[project]/components/RepairRequestForm.js",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: delivery === 'delivery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: 'auto'
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.32,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_BRAND"]
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Collection address",
                            name: "address",
                            placeholder: "Enter your address",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/components/RepairRequestForm.js",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/RepairRequestForm.js",
                    lineNumber: 128,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 text-body-sm text-brand-red-bright",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 142,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: status === 'submitting',
                className: "btn-base button-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70",
                children: status === 'submitting' ? 'Submitting…' : 'Submit Request'
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RepairRequestForm.js",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(RepairRequestForm, "+nHSiHZngamqhRKDru/31NTpLyk=");
_c = RepairRequestForm;
function Field({ label, name, as = 'input', type = 'text', placeholder, options = [], required }) {
    const base = 'w-full rounded-[12px] border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted/60 outline-none transition-colors duration-hover ease-brand focus:border-brand-red/70 focus:bg-white/[0.06]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mb-2 block text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            as === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                rows: 5,
                placeholder: placeholder,
                required: required,
                className: `${base} resize-y`
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 165,
                columnNumber: 9
            }, this) : as === 'select' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: name,
                required: required,
                defaultValue: options[0],
                className: `${base} appearance-none`,
                children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: opt,
                        className: "bg-background-primary",
                        children: opt
                    }, opt, false, {
                        fileName: "[project]/components/RepairRequestForm.js",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 167,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: name,
                type: type,
                placeholder: placeholder,
                required: required,
                className: base
            }, void 0, false, {
                fileName: "[project]/components/RepairRequestForm.js",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RepairRequestForm.js",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_c1 = Field;
var _c, _c1;
__turbopack_context__.k.register(_c, "RepairRequestForm");
__turbopack_context__.k.register(_c1, "Field");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Contact.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RepairRequestForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RepairRequestForm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Contact({ eyebrow, heading, intro, deviceTypes = [], business }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative overflow-hidden py-20 md:py-[120px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                "aria-hidden": "true",
                style: {
                    background: 'radial-gradient(44% 46% at 12% 88%, rgba(232,64,44,0.14) 0%, rgba(3,11,30,0) 68%)'
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-site relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                        className: "max-w-[620px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "text-label-sm uppercase text-brand-red-bright",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "mt-5 text-heading-lg text-text-primary",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.js",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                className: "mt-5 text-body-md text-text-muted",
                                children: intro
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Contact.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeSide"])('left', 30),
                                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                                className: "glass-panel-heavy rounded-panel-lg p-8 sm:p-10 lg:-rotate-[0.6deg] lg:translate-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:rotate-[0.6deg]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RepairRequestForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        deviceTypes: deviceTypes
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Contact.js",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Contact.js",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Contact.js",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeSide"])('right', 30),
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                                        className: "relative h-[220px] overflow-hidden rounded-panel-lg border border-white/[0.08] lg:-translate-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapPlaceholder, {}, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.js",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel-light absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-panel px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinIcon"], {
                                                        width: 20,
                                                        height: 20,
                                                        className: "shrink-0 text-brand-red-bright"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 57,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-body-sm text-text-primary",
                                                        children: business.address
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 58,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Contact.js",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Contact.js",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeSide"])('right', 30),
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                                        className: "glass-panel-light rounded-panel p-6 lg:translate-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                                        width: 20,
                                                        height: 20,
                                                        className: "text-brand-red-bright"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 68,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-heading-sm text-text-primary",
                                                        children: "Opening hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Contact.js",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                className: "mt-4 space-y-2.5",
                                                children: business.hours.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 text-body-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "text-text-muted",
                                                                children: row.days
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Contact.js",
                                                                lineNumber: 74,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                className: "text-text-primary",
                                                                children: row.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Contact.js",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, row.days, true, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.js",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Contact.js",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeSide"])('right', 30),
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealOnce"],
                                        className: "glass-panel-outline rounded-panel p-6 lg:translate-x-[-14px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-heading-sm text-text-primary",
                                                children: "Rather just message us?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Contact.js",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: business.facebook,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "glass-panel-light flex items-center gap-2.5 rounded-full px-4 py-2.5 text-body-sm text-text-primary transition-all duration-hover ease-brand hover:scale-[1.03] hover:border-brand-red/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                                                                width: 17,
                                                                height: 17,
                                                                className: "text-brand-red-bright"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Contact.js",
                                                                lineNumber: 94,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Facebook"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${business.email}`,
                                                        className: "glass-panel-light flex items-center gap-2.5 rounded-full px-4 py-2.5 text-body-sm text-text-primary transition-all duration-hover ease-brand hover:scale-[1.03] hover:border-brand-red/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailIcon"], {
                                                                width: 17,
                                                                height: 17,
                                                                className: "text-brand-red-bright"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Contact.js",
                                                                lineNumber: 101,
                                                                columnNumber: 19
                                                            }, this),
                                                            business.email
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Contact.js",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Contact.js",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Contact.js",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Contact.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Contact.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Contact.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Contact;
/* Stylised map block — swap for an embed once a provider is chosen. */ function MapPlaceholder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "h-full w-full",
        viewBox: "0 0 400 220",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "400",
                height: "220",
                fill: "#081124"
            }, void 0, false, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#1B2C4E",
                strokeWidth: "8",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M-10 70h180l40 40h200M-10 160h120l50-50"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M120 -10v90l40 40v100M300 -10v60l-40 40v130"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Contact.js",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "#0F1F3C",
                strokeWidth: "3",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M-10 30h150M40 -10v240M240 -10v240M-10 200h420"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Contact.js",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "205",
                cy: "112",
                r: "26",
                fill: "rgba(232,64,44,0.18)"
            }, void 0, false, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "205",
                cy: "112",
                r: "8",
                fill: "#E8402C"
            }, void 0, false, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "205",
                cy: "112",
                r: "13",
                fill: "none",
                stroke: "#FF6A38",
                strokeWidth: "1.6",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/sections/Contact.js",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Contact.js",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c1 = MapPlaceholder;
var _c, _c1;
__turbopack_context__.k.register(_c, "Contact");
__turbopack_context__.k.register(_c1, "MapPlaceholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0nkipb5._.js.map