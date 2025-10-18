module.exports = {

"[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src/components/ui/input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/input.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const sampleIdeas = [
    {
        id: 1,
        title: "AI-Powered Meal Planner",
        description: "Personalized meal plans based on dietary preferences and budget",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Smart Home Energy Optimizer",
        description: "Reduce energy bills with intelligent automation",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Virtual Fitness Coach",
        description: "AI-driven personalized workout plans and motivation",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Local Service Marketplace",
        description: "Connect with trusted local professionals instantly",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Eco-Friendly Delivery Service",
        description: "Carbon-neutral last-mile delivery for local businesses",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop"
    }
];
function HomePage({ onSearch }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [glowPos, setGlowPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const searchBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mouse tracking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            if (searchBarRef.current) {
                const rect = searchBarRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                setMousePos({
                    x: e.clientX - centerX,
                    y: e.clientY - centerY
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    // Smooth lerp animation for glow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lerp = (start, end, factor)=>{
            return start + (end - start) * factor;
        };
        const animate = ()=>{
            setGlowPos((prev)=>({
                    x: lerp(prev.x, mousePos.x, 0.1),
                    y: lerp(prev.y, mousePos.y, 0.1)
                }));
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);
        return ()=>cancelAnimationFrame(animationId);
    }, [
        mousePos
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/HomePage.tsx:95:4",
        "data-orchids-name": "div",
        className: "jsx-6639e4eac6b78d61" + " " + "min-h-screen bg-background relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/HomePage.tsx:97:6",
                "data-orchids-name": "div",
                className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/HomePage.tsx:100:6",
                "data-orchids-name": "div",
                className: "jsx-6639e4eac6b78d61" + " " + "relative z-10 container mx-auto px-4 pt-20 pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/HomePage.tsx:101:8",
                    "data-orchids-name": "div",
                    className: "jsx-6639e4eac6b78d61" + " " + "text-center space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:103:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "inline-block glass-card px-8 py-4 rounded-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/HomePage.tsx:104:12",
                                "data-orchids-name": "p",
                                className: "jsx-6639e4eac6b78d61" + " " + "text-5xl font-bold text-primary tabular-nums tracking-tight",
                                children: "12:59 AM"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:110:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    "data-orchids-id": "src/components/HomePage.tsx:111:12",
                                    "data-orchids-name": "h1",
                                    className: "jsx-6639e4eac6b78d61" + " " + "text-4xl md:text-5xl font-bold tracking-tight",
                                    children: "Prove your idea works"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/HomePage.tsx:114:12",
                                    "data-orchids-name": "p",
                                    className: "jsx-6639e4eac6b78d61" + " " + "text-xl text-muted-foreground max-w-2xl mx-auto",
                                    children: "An idea analyser powered by sophisticated AI Agents and Grounded information."
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:120:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "relative max-w-2xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/HomePage.tsx:121:12@searchBarRef",
                                "data-orchids-name": "div",
                                ref: searchBarRef,
                                className: "jsx-6639e4eac6b78d61" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/HomePage.tsx:126:14",
                                        "data-orchids-name": "div",
                                        style: {
                                            background: `radial-gradient(circle 150px at ${glowPos.x + 50}% ${glowPos.y + 50}%, rgba(96, 165, 250, 0.4), transparent 70%)`,
                                            filter: 'blur(20px)'
                                        },
                                        className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 pointer-events-none rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        "data-orchids-id": "src/components/HomePage.tsx:135:14@handleSubmit",
                                        "data-orchids-name": "form",
                                        onSubmit: handleSubmit,
                                        className: "jsx-6639e4eac6b78d61" + " " + "relative glass-card rounded-full p-2 flex items-center gap-2 shadow-2xl border-2 border-primary/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                "data-orchids-id": "src/components/HomePage.tsx:139:16",
                                                "data-orchids-name": "Search",
                                                className: "ml-3 h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src/components/HomePage.tsx:140:16",
                                                "data-orchids-name": "Input",
                                                type: "text",
                                                placeholder: "Describe your business idea...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/HomePage.tsx:147:16",
                                                "data-orchids-name": "Button",
                                                type: "submit",
                                                size: "sm",
                                                className: "rounded-full bg-primary hover:bg-primary/90",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/HomePage.tsx:161:6",
                "data-orchids-name": "div",
                className: "jsx-6639e4eac6b78d61" + " " + "relative z-10 pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/HomePage.tsx:162:8",
                    "data-orchids-name": "div",
                    className: "jsx-6639e4eac6b78d61" + " " + "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/components/HomePage.tsx:163:10",
                            "data-orchids-name": "h2",
                            className: "jsx-6639e4eac6b78d61" + " " + "text-2xl font-semibold mb-8 text-center",
                            children: "Sample Ideas to Explore"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:164:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide",
                            children: sampleIdeas.map((idea)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/HomePage.tsx:166:14@sampleIdeas",
                                    "data-orchids-name": "div",
                                    onClick: ()=>onSearch(idea.title),
                                    className: "jsx-6639e4eac6b78d61" + " " + "flex-shrink-0 w-80 glass-card rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 snap-start group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/HomePage.tsx:171:16@sampleIdeas",
                                            "data-orchids-name": "div",
                                            className: "jsx-6639e4eac6b78d61" + " " + "relative h-48 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:172:18@sampleIdeas",
                                                    "data-orchids-name": "img",
                                                    src: idea.image,
                                                    alt: idea.title,
                                                    className: "jsx-6639e4eac6b78d61" + " " + "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:177:18@sampleIdeas",
                                                    "data-orchids-name": "div",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-gradient-to-t from-card to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/HomePage.tsx:179:16@sampleIdeas",
                                            "data-orchids-name": "div",
                                            className: "jsx-6639e4eac6b78d61" + " " + "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:180:18@sampleIdeas",
                                                    "data-orchids-name": "h3",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "text-xl font-semibold mb-2",
                                                    children: idea.title
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:181:18@sampleIdeas",
                                                    "data-orchids-name": "p",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "text-muted-foreground text-sm",
                                                    children: idea.description
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idea.id, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide.jsx-6639e4eac6b78d61::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-6639e4eac6b78d61{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
"use client";
;
;
;
const agents = [
    {
        id: 1,
        name: "Market Researcher",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        status: "Analyzing market trends...",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        name: "Trend Analyst",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        status: "Scanning global trends...",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        name: "Community Expert",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        status: "Gathering community insights...",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 4,
        name: "Strategy Planner",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        status: "Building execution plan...",
        color: "from-orange-500 to-red-500"
    },
    {
        id: 5,
        name: "Innovation Scout",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        status: "Identifying opportunities...",
        color: "from-yellow-500 to-amber-500"
    },
    {
        id: 6,
        name: "AI Synthesizer",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        status: "Synthesizing insights...",
        color: "from-indigo-500 to-violet-500"
    }
];
const funnyTexts = [
    "Teaching AI to think outside the box...",
    "Consulting with our virtual crystal ball...",
    "Asking the magic 8-ball for business advice...",
    "Brewing some innovation coffee...",
    "Summoning the entrepreneurial spirits...",
    "Running idea through the genius machine...",
    "Calculating the probability of success...",
    "Channeling business wisdom from the universe...",
    "Warming up the idea engines...",
    "Polishing your brilliant concept..."
];
function LoadingScreen({ idea }) {
    const [funnyTextIndex, setFunnyTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Rotate funny texts
        const textInterval = setInterval(()=>{
            setFunnyTextIndex((prev)=>(prev + 1) % funnyTexts.length);
        }, 2000);
        // Simulate progress
        const progressInterval = setInterval(()=>{
            setProgress((prev)=>{
                if (prev >= 95) return prev;
                return prev + Math.random() * 5;
            });
        }, 300);
        return ()=>{
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/LoadingScreen.tsx:93:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/LoadingScreen.tsx:94:6",
            "data-orchids-name": "div",
            className: "max-w-6xl w-full space-y-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/LoadingScreen.tsx:96:8",
                    "data-orchids-name": "div",
                    className: "text-center space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:97:10",
                            "data-orchids-name": "h2",
                            className: "text-4xl font-bold",
                            children: "Analyzing Your Idea"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:98:10",
                            "data-orchids-name": "p",
                            className: "text-xl text-muted-foreground",
                            children: [
                                '"',
                                idea,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:99:10",
                            "data-orchids-name": "p",
                            className: "text-primary text-lg font-medium animate-pulse",
                            children: funnyTexts[funnyTextIndex]
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/LoadingScreen.tsx:105:8",
                    "data-orchids-name": "div",
                    className: "max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:106:10",
                            "data-orchids-name": "div",
                            className: "h-2 bg-muted rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:107:12",
                                "data-orchids-name": "div",
                                className: "h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ease-out shimmer",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:112:10",
                            "data-orchids-name": "p",
                            className: "text-center text-sm text-muted-foreground mt-2",
                            children: [
                                Math.round(progress),
                                "% Complete"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/LoadingScreen.tsx:118:8",
                    "data-orchids-name": "div",
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: agents.map((agent, index)=>{
                        const Icon = agent.icon;
                        const isActive = progress > index * 15;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-map-index": index,
                            "data-orchids-id": "src/components/LoadingScreen.tsx:124:14@agents",
                            "data-orchids-name": "div",
                            className: `glass-card rounded-xl p-6 transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": index,
                                    "data-orchids-id": "src/components/LoadingScreen.tsx:130:16@agents",
                                    "data-orchids-name": "div",
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/LoadingScreen.tsx:131:18@agents",
                                            "data-orchids-name": "div",
                                            className: `p-3 rounded-lg bg-gradient-to-br ${agent.color} ${isActive ? 'animate-pulse' : ''}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/LoadingScreen.tsx:132:20@agents",
                                                "data-orchids-name": "Icon",
                                                className: "h-6 w-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/LoadingScreen.tsx:134:18@agents",
                                            "data-orchids-name": "div",
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/LoadingScreen.tsx:135:20@agents",
                                                    "data-orchids-name": "h3",
                                                    className: "font-semibold mb-1",
                                                    children: agent.name
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/LoadingScreen.tsx:136:20@agents",
                                                    "data-orchids-name": "p",
                                                    className: "text-sm text-muted-foreground",
                                                    children: agent.status
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": index,
                                    "data-orchids-id": "src/components/LoadingScreen.tsx:142:18@agents",
                                    "data-orchids-name": "div",
                                    className: "mt-4 h-1 bg-muted rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/LoadingScreen.tsx:143:20@agents",
                                        "data-orchids-name": "div",
                                        className: "h-full bg-gradient-to-r from-transparent via-primary to-transparent shimmer"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                    lineNumber: 142,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, agent.id, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/LoadingScreen.tsx:152:8",
                    "data-orchids-name": "div",
                    className: "flex justify-center gap-2",
                    children: [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:154:12",
                            "data-orchids-name": "div",
                            className: "h-3 w-3 rounded-full bg-primary animate-bounce",
                            style: {
                                animationDelay: `${i * 0.15}s`
                            }
                        }, i, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/badge.tsx:38:4",
        "data-orchids-name": "Comp",
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/progress.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Progress": (()=>Progress)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/@radix-ui/react-progress/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/progress.tsx:14:4",
        "data-orchids-name": "ProgressPrimitive.Root",
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-orchids-id": "src/components/ui/progress.tsx:22:6",
            "data-orchids-name": "ProgressPrimitive.Indicator",
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const scoreCards = [
    {
        title: "Market Viability",
        score: 87,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        color: "text-green-500",
        description: "Strong market demand with growing trends"
    },
    {
        title: "Competition Level",
        score: 65,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "text-orange-500",
        description: "Moderate competition with differentiation opportunities"
    },
    {
        title: "Target Audience",
        score: 92,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: "text-blue-500",
        description: "Clear and accessible target demographic"
    },
    {
        title: "Execution Feasibility",
        score: 78,
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "text-purple-500",
        description: "Achievable with proper planning and resources"
    }
];
const trendData = [
    {
        month: "Jan",
        interest: 45
    },
    {
        month: "Feb",
        interest: 52
    },
    {
        month: "Mar",
        interest: 61
    },
    {
        month: "Apr",
        interest: 68
    },
    {
        month: "May",
        interest: 75
    },
    {
        month: "Jun",
        interest: 82
    }
];
const communitySignals = [
    {
        platform: "Reddit",
        engagement: 1247,
        sentiment: "Positive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"]
    },
    {
        platform: "Twitter",
        engagement: 3891,
        sentiment: "Very Positive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"]
    },
    {
        platform: "ProductHunt",
        engagement: 542,
        sentiment: "Positive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"]
    }
];
const executionTimeline = [
    {
        phase: "Research & Planning",
        duration: "2-3 weeks",
        status: "critical"
    },
    {
        phase: "MVP Development",
        duration: "6-8 weeks",
        status: "important"
    },
    {
        phase: "Beta Testing",
        duration: "3-4 weeks",
        status: "normal"
    },
    {
        phase: "Launch & Marketing",
        duration: "4-6 weeks",
        status: "normal"
    },
    {
        phase: "Scale & Optimize",
        duration: "Ongoing",
        status: "future"
    }
];
function ResultsPage({ idea, onBack }) {
    const overallScore = Math.round(scoreCards.reduce((sum, card)=>sum + card.score, 0) / scoreCards.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ResultsPage.tsx:77:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:79:6",
                "data-orchids-name": "div",
                className: "border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ResultsPage.tsx:80:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:81:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:82:12",
                                "data-orchids-name": "Button",
                                variant: "ghost",
                                size: "icon",
                                onClick: onBack,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    "data-orchids-id": "src/components/ResultsPage.tsx:83:14",
                                    "data-orchids-name": "ArrowLeft",
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:85:12",
                                "data-orchids-name": "div",
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:86:14",
                                        "data-orchids-name": "h1",
                                        className: "text-2xl font-bold",
                                        children: "Analysis Results"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:87:14",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            '"',
                                            idea,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:89:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:90:14",
                                        "data-orchids-name": "Award",
                                        className: "h-8 w-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:91:14",
                                        "data-orchids-name": "div",
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:92:16",
                                                "data-orchids-name": "p",
                                                className: "text-2xl font-bold text-primary",
                                                children: overallScore
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:93:16",
                                                "data-orchids-name": "p",
                                                className: "text-xs text-muted-foreground",
                                                children: "Overall Score"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:100:6",
                "data-orchids-name": "div",
                className: "container mx-auto px-4 py-8 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:102:8",
                        "data-orchids-name": "Card",
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:103:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:104:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:105:14",
                                                "data-orchids-name": "Award",
                                                className: "h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            "Executive Summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:108:12",
                                        "data-orchids-name": "CardDescription",
                                        children: "AI-powered analysis of your business idea"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:110:10",
                                "data-orchids-name": "CardContent",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:111:12",
                                        "data-orchids-name": "p",
                                        className: "text-foreground leading-relaxed",
                                        children: "Your idea shows strong potential in the current market landscape. The concept addresses a clear need with growing demand, particularly among tech-savvy consumers aged 25-45. While there is existing competition, your unique approach offers differentiation opportunities through personalization and AI integration."
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:117:12",
                                        "data-orchids-name": "div",
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:118:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-green-500/20 text-green-500 hover:bg-green-500/30",
                                                children: "High Demand"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:121:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
                                                children: "Clear Target Market"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:124:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30",
                                                children: "Scalable Model"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:127:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30",
                                                children: "Moderate Risk"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:135:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:136:10",
                                "data-orchids-name": "h2",
                                className: "text-2xl font-bold mb-4",
                                children: "Performance Metrics"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:137:10",
                                "data-orchids-name": "div",
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: scoreCards.map((card)=>{
                                    const Icon = card.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:141:16@scoreCards",
                                        "data-orchids-name": "Card",
                                        className: "glass-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:142:18@scoreCards",
                                                "data-orchids-name": "CardHeader",
                                                className: "pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:143:20@scoreCards",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:144:22@scoreCards",
                                                                "data-orchids-name": "Icon",
                                                                className: `h-5 w-5 ${card.color}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:145:22@scoreCards",
                                                                "data-orchids-name": "span",
                                                                className: "text-3xl font-bold",
                                                                children: card.score
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:147:20@scoreCards",
                                                        "data-orchids-name": "CardTitle",
                                                        className: "text-base",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:149:18@scoreCards",
                                                "data-orchids-name": "CardContent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: card.score,
                                                        className: "h-2 mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:151:20@scoreCards",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-muted-foreground",
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, card.title, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:160:8",
                        "data-orchids-name": "Card",
                        className: "glass-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:161:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:162:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:163:14",
                                                "data-orchids-name": "TrendingUp",
                                                className: "h-5 w-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            "Market Interest Trend"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:166:12",
                                        "data-orchids-name": "CardDescription",
                                        children: "6-month search and engagement data"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:168:10",
                                "data-orchids-name": "CardContent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:169:12",
                                        "data-orchids-name": "div",
                                        className: "h-64 flex items-end justify-between gap-4",
                                        children: trendData.map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/ResultsPage.tsx:171:16@trendData",
                                                "data-orchids-name": "div",
                                                className: "flex-1 flex flex-col items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:172:18@trendData",
                                                        "data-orchids-name": "div",
                                                        className: "w-full relative",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": index,
                                                            "data-orchids-id": "src/components/ResultsPage.tsx:173:20@trendData",
                                                            "data-orchids-name": "div",
                                                            className: "w-full bg-gradient-to-t from-primary to-primary/50 rounded-t-lg transition-all duration-500",
                                                            style: {
                                                                height: `${data.interest * 2.5}px`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:178:18@trendData",
                                                        "data-orchids-name": "span",
                                                        className: "text-xs text-muted-foreground",
                                                        children: data.month
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, data.month, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:182:12",
                                        "data-orchids-name": "div",
                                        className: "mt-4 p-4 bg-muted/50 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/components/ResultsPage.tsx:183:14",
                                            "data-orchids-name": "p",
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:184:16",
                                                    "data-orchids-name": "TrendingUp",
                                                    className: "h-4 w-4 inline mr-2 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                "Interest has increased by ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:185:42",
                                                    "data-orchids-name": "span",
                                                    className: "font-semibold text-foreground",
                                                    children: "82%"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 43
                                                }, this),
                                                " over the last 6 months"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:191:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:193:10",
                                "data-orchids-name": "Card",
                                className: "glass-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:194:12",
                                        "data-orchids-name": "CardHeader",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:195:14",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:196:16",
                                                        "data-orchids-name": "Users",
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Community Signals"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:199:14",
                                                "data-orchids-name": "CardDescription",
                                                children: "Social media sentiment analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:201:12",
                                        "data-orchids-name": "CardContent",
                                        className: "space-y-4",
                                        children: communitySignals.map((signal)=>{
                                            const Icon = signal.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:205:18@communitySignals",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-between p-4 bg-muted/50 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:206:20@communitySignals",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:207:22@communitySignals",
                                                                "data-orchids-name": "div",
                                                                className: "p-2 bg-primary/20 rounded-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    "data-orchids-id": "src/components/ResultsPage.tsx:208:24@communitySignals",
                                                                    "data-orchids-name": "Icon",
                                                                    className: "h-5 w-5 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:210:22@communitySignals",
                                                                "data-orchids-name": "div",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:211:24@communitySignals",
                                                                        "data-orchids-name": "p",
                                                                        className: "font-semibold",
                                                                        children: signal.platform
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:212:24@communitySignals",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            signal.engagement.toLocaleString(),
                                                                            " mentions"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:215:20@communitySignals",
                                                        "data-orchids-name": "Badge",
                                                        variant: "default",
                                                        className: "bg-green-500/20 text-green-500",
                                                        children: signal.sentiment
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, signal.platform, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:225:10",
                                "data-orchids-name": "Card",
                                className: "glass-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:226:12",
                                        "data-orchids-name": "CardHeader",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:227:14",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:228:16",
                                                        "data-orchids-name": "Calendar",
                                                        className: "h-5 w-5 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Execution Timeline"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:231:14",
                                                "data-orchids-name": "CardDescription",
                                                children: "Recommended implementation phases"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:233:12",
                                        "data-orchids-name": "CardContent",
                                        className: "space-y-4",
                                        children: executionTimeline.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/ResultsPage.tsx:235:16@executionTimeline",
                                                "data-orchids-name": "div",
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:236:18@executionTimeline",
                                                        "data-orchids-name": "div",
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:237:20@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: `w-8 h-8 rounded-full flex items-center justify-center ${phase.status === 'critical' ? 'bg-red-500/20 text-red-500' : phase.status === 'important' ? 'bg-orange-500/20 text-orange-500' : phase.status === 'future' ? 'bg-muted text-muted-foreground' : 'bg-primary/20 text-primary'}`,
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this),
                                                            index < executionTimeline.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:246:22@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: "w-0.5 h-full bg-border mt-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:249:18@executionTimeline",
                                                        "data-orchids-name": "div",
                                                        className: "flex-1 pb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:250:20@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:251:22@executionTimeline",
                                                                        "data-orchids-name": "p",
                                                                        className: "font-semibold",
                                                                        children: phase.phase
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    phase.status === 'critical' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:253:24@executionTimeline",
                                                                        "data-orchids-name": "AlertCircle",
                                                                        className: "h-4 w-4 text-red-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:256:20@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:257:22@executionTimeline",
                                                                        "data-orchids-name": "Clock",
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    phase.duration
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, phase.phase, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:268:8",
                        "data-orchids-name": "Card",
                        className: "glass-card border-primary/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:269:10",
                                "data-orchids-name": "CardHeader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    "data-orchids-id": "src/components/ResultsPage.tsx:270:12",
                                    "data-orchids-name": "CardTitle",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            "data-orchids-id": "src/components/ResultsPage.tsx:271:14",
                                            "data-orchids-name": "Target",
                                            className: "h-5 w-5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        "Key Recommendations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:275:10",
                                "data-orchids-name": "CardContent",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:276:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-3 p-4 bg-primary/10 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:277:14",
                                                "data-orchids-name": "DollarSign",
                                                className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:278:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:279:16",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold mb-1",
                                                        children: "Start with MVP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:280:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Focus on core features first. Estimate $15-25K initial investment for a lean launch."
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:285:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-3 p-4 bg-primary/10 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:286:14",
                                                "data-orchids-name": "Users",
                                                className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:287:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:288:16",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold mb-1",
                                                        children: "Build Community Early"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:289:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Engage with potential users on Reddit and Twitter to validate assumptions and build momentum."
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 287,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:294:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-3 p-4 bg-primary/10 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:295:14",
                                                "data-orchids-name": "Zap",
                                                className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:296:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:297:16",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold mb-1",
                                                        children: "Leverage AI Differentiation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:298:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Your AI-powered personalization is a key differentiator. Make it central to your marketing message."
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$HomePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ResultsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Force dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.add("dark");
    }, []);
    const handleSearch = (query)=>{
        setSearchQuery(query);
        setScreen("loading");
        // Simulate loading for 5 seconds
        setTimeout(()=>{
            setScreen("results");
        }, 5000);
    };
    const handleBack = ()=>{
        setScreen("home");
        setSearchQuery("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$HomePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:34:28@handleSearch",
                "data-orchids-name": "HomePage",
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/app/page.tsx",
                lineNumber: 34,
                columnNumber: 29
            }, this),
            screen === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:35:31",
                "data-orchids-name": "LoadingScreen",
                idea: searchQuery
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 32
            }, this),
            screen === "results" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ResultsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:36:31@handleBack",
                "data-orchids-name": "ResultsPage",
                idea: searchQuery,
                onBack: handleBack
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/app/page.tsx",
                lineNumber: 36,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=hc%20%26%20j%20stuff_12_59_am_src_5110c50a._.js.map