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
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
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
        "data-orchids-id": "src/components/HomePage.tsx:96:4",
        "data-orchids-name": "div",
        className: "jsx-6639e4eac6b78d61" + " " + "min-h-screen bg-background relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/HomePage.tsx:98:6",
                "data-orchids-name": "div",
                className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/HomePage.tsx:101:6",
                "data-orchids-name": "div",
                className: "jsx-6639e4eac6b78d61" + " " + "relative z-10 container mx-auto px-4 pt-16 pb-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/HomePage.tsx:102:8",
                    "data-orchids-name": "div",
                    className: "jsx-6639e4eac6b78d61" + " " + "text-center space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:104:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "inline-block mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                "data-orchids-id": "src/components/HomePage.tsx:105:12",
                                "data-orchids-name": "img",
                                src: "/assets/12_59_am_logo/12_59_am_light.png",
                                alt: "12:59 AM",
                                width: 1198,
                                height: 507,
                                className: "w-auto h-32 md:h-40",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:116:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    "data-orchids-id": "src/components/HomePage.tsx:117:12",
                                    "data-orchids-name": "h1",
                                    className: "jsx-6639e4eac6b78d61" + " " + "text-4xl md:text-5xl font-bold tracking-tight",
                                    children: "Prove your idea works"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/HomePage.tsx:120:12",
                                    "data-orchids-name": "p",
                                    className: "jsx-6639e4eac6b78d61" + " " + "text-xl text-muted-foreground max-w-2xl mx-auto",
                                    children: "An idea analyser powered by sophisticated AI Agents and Grounded information."
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:126:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "relative max-w-2xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/HomePage.tsx:127:12@searchBarRef",
                                "data-orchids-name": "div",
                                ref: searchBarRef,
                                className: "jsx-6639e4eac6b78d61" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/HomePage.tsx:132:14",
                                        "data-orchids-name": "div",
                                        style: {
                                            background: `radial-gradient(circle 200px at calc(50% + ${glowPos.x}px) calc(50% + ${glowPos.y}px), oklch(0.7 0.3 250 / 0.6), transparent 70%)`,
                                            filter: 'blur(30px)'
                                        },
                                        className: "jsx-6639e4eac6b78d61" + " " + "absolute -inset-4 pointer-events-none rounded-full opacity-75 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/HomePage.tsx:141:14",
                                        "data-orchids-name": "div",
                                        style: {
                                            background: `radial-gradient(circle 150px at calc(50% + ${glowPos.x}px) calc(50% + ${glowPos.y}px), oklch(0.7 0.3 250 / 0.4), transparent 60%)`,
                                            filter: 'blur(20px)'
                                        },
                                        className: "jsx-6639e4eac6b78d61" + " " + "absolute -inset-2 pointer-events-none rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        "data-orchids-id": "src/components/HomePage.tsx:150:14@handleSubmit",
                                        "data-orchids-name": "form",
                                        onSubmit: handleSubmit,
                                        className: "jsx-6639e4eac6b78d61" + " " + "relative glass-card rounded-full p-2 flex items-center gap-2 shadow-2xl border border-primary/50 backdrop-blur-xl bg-card/80 hover:border-primary/70 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                "data-orchids-id": "src/components/HomePage.tsx:154:16",
                                                "data-orchids-name": "Search",
                                                className: "ml-3 h-5 w-5 text-primary animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                "data-orchids-id": "src/components/HomePage.tsx:155:16",
                                                "data-orchids-name": "Input",
                                                type: "text",
                                                placeholder: "Describe your business idea...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/HomePage.tsx:162:16",
                                                "data-orchids-name": "Button",
                                                type: "submit",
                                                size: "sm",
                                                className: "rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/HomePage.tsx:176:6",
                "data-orchids-name": "div",
                className: "jsx-6639e4eac6b78d61" + " " + "relative z-10 pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/HomePage.tsx:177:8",
                    "data-orchids-name": "div",
                    className: "jsx-6639e4eac6b78d61" + " " + "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/components/HomePage.tsx:178:10",
                            "data-orchids-name": "h2",
                            className: "jsx-6639e4eac6b78d61" + " " + "text-2xl font-semibold mb-8 text-center",
                            children: "Sample Ideas to Explore"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/HomePage.tsx:179:10",
                            "data-orchids-name": "div",
                            className: "jsx-6639e4eac6b78d61" + " " + "flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide",
                            children: sampleIdeas.map((idea)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/HomePage.tsx:181:14@sampleIdeas",
                                    "data-orchids-name": "div",
                                    onClick: ()=>onSearch(idea.title),
                                    className: "jsx-6639e4eac6b78d61" + " " + "flex-shrink-0 w-80 glass-card rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 snap-start group border border-primary/20 backdrop-blur-xl bg-card/70 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/HomePage.tsx:186:16@sampleIdeas",
                                            "data-orchids-name": "div",
                                            className: "jsx-6639e4eac6b78d61" + " " + "relative h-48 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:187:18@sampleIdeas",
                                                    "data-orchids-name": "img",
                                                    src: idea.image,
                                                    alt: idea.title,
                                                    className: "jsx-6639e4eac6b78d61" + " " + "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:192:18@sampleIdeas",
                                                    "data-orchids-name": "div",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:195:18@sampleIdeas",
                                                    "data-orchids-name": "div",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "absolute top-4 right-4 p-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 group-hover:bg-primary/30 transition-all duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "h-4 w-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/HomePage.tsx:199:16@sampleIdeas",
                                            "data-orchids-name": "div",
                                            className: "jsx-6639e4eac6b78d61" + " " + "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:200:18@sampleIdeas",
                                                    "data-orchids-name": "h3",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300",
                                                    children: idea.title
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/HomePage.tsx:201:18@sampleIdeas",
                                                    "data-orchids-name": "p",
                                                    className: "jsx-6639e4eac6b78d61" + " " + "text-muted-foreground text-sm leading-relaxed",
                                                    children: idea.description
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idea.id, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6639e4eac6b78d61",
                children: ".scrollbar-hide.jsx-6639e4eac6b78d61::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-6639e4eac6b78d61{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/HomePage.tsx",
        lineNumber: 96,
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
        id: "market",
        name: "Market Researcher",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        defaultStatus: "Analyzing market trends...",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "trends",
        name: "Trend Analyst",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        defaultStatus: "Scanning global trends...",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "community",
        name: "Community Expert",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        defaultStatus: "Gathering community insights...",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: "execution",
        name: "Strategy Planner",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        defaultStatus: "Building execution plan...",
        color: "from-orange-500 to-red-500"
    },
    {
        id: "competition",
        name: "Competition Analyzer",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        defaultStatus: "Identifying opportunities...",
        color: "from-yellow-500 to-amber-500"
    },
    {
        id: "content",
        name: "Content Generator",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        defaultStatus: "Synthesizing insights...",
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
function LoadingScreen({ idea, agentUpdates, error }) {
    const [funnyTextIndex, setFunnyTextIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Rotate funny texts
        const textInterval = setInterval(()=>{
            setFunnyTextIndex((prev)=>(prev + 1) % funnyTexts.length);
        }, 2000);
        return ()=>{
            clearInterval(textInterval);
        };
    }, []);
    // Calculate overall progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const totalAgents = Object.keys(agentUpdates).length;
        if (totalAgents === 0) return;
        const completedAgents = Object.values(agentUpdates).filter((agent)=>agent.status === 'complete').length;
        const newProgress = completedAgents / totalAgents * 100;
        setProgress(newProgress);
    }, [
        agentUpdates
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/LoadingScreen.tsx:105:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/LoadingScreen.tsx:107:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background animate-gradient-shift"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/LoadingScreen.tsx:109:6",
                "data-orchids-name": "div",
                className: "max-w-6xl w-full space-y-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/LoadingScreen.tsx:111:8",
                        "data-orchids-name": "div",
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:112:10",
                                "data-orchids-name": "div",
                                className: "inline-block glass-card px-6 py-3 rounded-2xl border border-primary/30 backdrop-blur-xl bg-card/70 shadow-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src/components/LoadingScreen.tsx:113:12",
                                    "data-orchids-name": "h2",
                                    className: "text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent",
                                    children: "Analyzing Your Idea"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:117:10",
                                "data-orchids-name": "p",
                                className: "text-xl text-foreground font-medium",
                                children: [
                                    '"',
                                    idea,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:118:10",
                                "data-orchids-name": "p",
                                className: "text-primary text-lg font-medium animate-pulse",
                                children: funnyTexts[funnyTextIndex]
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/LoadingScreen.tsx:124:8",
                        "data-orchids-name": "div",
                        className: "max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:125:10",
                                "data-orchids-name": "div",
                                className: "glass-card h-3 rounded-full overflow-hidden border border-primary/30 backdrop-blur-xl bg-card/50 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/LoadingScreen.tsx:126:12",
                                    "data-orchids-name": "div",
                                    className: "h-full bg-gradient-to-r from-primary via-blue-500 to-primary transition-all duration-300 ease-out shimmer shadow-lg shadow-primary/50",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:131:10",
                                "data-orchids-name": "p",
                                className: "text-center text-sm text-muted-foreground mt-2 font-medium",
                                children: [
                                    Math.round(progress),
                                    "% Complete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/LoadingScreen.tsx:137:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: agents.map((agent, index)=>{
                            const Icon = agent.icon;
                            const agentStatus = agentUpdates[agent.id] || {
                                status: 'waiting',
                                progress: 0
                            };
                            const isActive = agentStatus.status === 'active';
                            const isComplete = agentStatus.status === 'complete';
                            const statusMessage = agentStatus.message || agent.defaultStatus;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": index,
                                "data-orchids-id": "src/components/LoadingScreen.tsx:146:14@agents",
                                "data-orchids-name": "div",
                                className: `glass-card rounded-2xl p-6 transition-all duration-500 backdrop-blur-xl bg-card/70 border shadow-xl ${isActive ? 'opacity-100 scale-100 border-primary/40 shadow-primary/20 animate-pulse' : isComplete ? 'opacity-100 scale-100 border-green-400/40 shadow-green-400/20' : 'opacity-50 scale-95 border-border'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/LoadingScreen.tsx:156:16@agents",
                                        "data-orchids-name": "div",
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/LoadingScreen.tsx:157:18@agents",
                                                "data-orchids-name": "div",
                                                className: `p-3 rounded-xl bg-gradient-to-br ${agent.color} shadow-lg ${isActive ? 'animate-pulse shadow-xl' : ''}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/LoadingScreen.tsx:162:20@agents",
                                                    "data-orchids-name": "Icon",
                                                    className: "h-6 w-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/LoadingScreen.tsx:164:18@agents",
                                                "data-orchids-name": "div",
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/LoadingScreen.tsx:165:20@agents",
                                                        "data-orchids-name": "h3",
                                                        className: `font-semibold mb-1 transition-colors ${isActive || isComplete ? 'text-foreground' : 'text-muted-foreground'}`,
                                                        children: agent.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/LoadingScreen.tsx:168:20@agents",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: statusMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/LoadingScreen.tsx:171:20@agents",
                                                "data-orchids-name": "span",
                                                className: "text-green-400 text-xl",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/LoadingScreen.tsx:177:18@agents",
                                        "data-orchids-name": "div",
                                        className: "mt-4 h-1.5 bg-muted/50 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/LoadingScreen.tsx:178:20@agents",
                                            "data-orchids-name": "div",
                                            className: "h-full bg-gradient-to-r from-transparent via-primary to-transparent shimmer"
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, this),
                                    isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/LoadingScreen.tsx:184:18@agents",
                                        "data-orchids-name": "div",
                                        className: "mt-4 h-1.5 bg-green-400/50 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, agent.id, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/LoadingScreen.tsx:193:10",
                        "data-orchids-name": "div",
                        className: "mt-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/LoadingScreen.tsx:194:12",
                            "data-orchids-name": "p",
                            className: "text-red-400 text-center",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/LoadingScreen.tsx:199:8",
                        "data-orchids-name": "div",
                        className: "flex justify-center gap-2",
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/LoadingScreen.tsx:201:12",
                                "data-orchids-name": "div",
                                className: "h-3 w-3 rounded-full bg-primary animate-bounce",
                                style: {
                                    animationDelay: `${i * 0.15}s`
                                }
                            }, i, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/LoadingScreen.tsx",
        lineNumber: 105,
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
"[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:12:9",
        "data-orchids-name": "DialogPrimitive.Root",
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:18:9",
        "data-orchids-name": "DialogPrimitive.Trigger",
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:24:9",
        "data-orchids-name": "DialogPrimitive.Portal",
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:30:9",
        "data-orchids-name": "DialogPrimitive.Close",
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:38:4",
        "data-orchids-name": "DialogPrimitive.Overlay",
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-orchids-id": "src/components/ui/dialog.tsx:58:4",
        "data-orchids-name": "DialogPortal",
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {
                "data-orchids-id": "src/components/ui/dialog.tsx:59:6",
                "data-orchids-name": "DialogOverlay"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-orchids-id": "src/components/ui/dialog.tsx:60:6",
                "data-orchids-name": "DialogPrimitive.Content",
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-orchids-id": "src/components/ui/dialog.tsx:70:10",
                        "data-orchids-name": "DialogPrimitive.Close",
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                "data-orchids-id": "src/components/ui/dialog.tsx:74:12",
                                "data-orchids-name": "XIcon"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/components/ui/dialog.tsx:75:12",
                                "data-orchids-name": "span",
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/dialog.tsx:85:4",
        "data-orchids-name": "div",
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/dialog.tsx:95:4",
        "data-orchids-name": "div",
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:111:4",
        "data-orchids-name": "DialogPrimitive.Title",
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-orchids-id": "src/components/ui/dialog.tsx:124:4",
        "data-orchids-name": "DialogPrimitive.Description",
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/tabs.tsx:13:4",
        "data-orchids-name": "TabsPrimitive.Root",
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-orchids-id": "src/components/ui/tabs.tsx:26:4",
        "data-orchids-name": "TabsPrimitive.List",
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "src/components/ui/tabs.tsx:42:4",
        "data-orchids-name": "TabsPrimitive.Trigger",
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-orchids-id": "src/components/ui/tabs.tsx:58:4",
        "data-orchids-name": "TabsPrimitive.Content",
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 outline-none", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/scroll-area.tsx:14:4",
        "data-orchids-name": "ScrollAreaPrimitive.Root",
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-orchids-id": "src/components/ui/scroll-area.tsx:19:6",
                "data-orchids-name": "ScrollAreaPrimitive.Viewport",
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {
                "data-orchids-id": "src/components/ui/scroll-area.tsx:25:6",
                "data-orchids-name": "ScrollBar"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {
                "data-orchids-id": "src/components/ui/scroll-area.tsx:26:6",
                "data-orchids-name": "ScrollAreaPrimitive.Corner"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-orchids-id": "src/components/ui/scroll-area.tsx:37:4",
        "data-orchids-name": "ScrollAreaPrimitive.ScrollAreaScrollbar",
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-orchids-id": "src/components/ui/scroll-area.tsx:50:6",
            "data-orchids-name": "ScrollAreaPrimitive.ScrollAreaThumb",
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SourcesModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const agentConfig = {
    market: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        color: "from-blue-500 to-cyan-500",
        label: "Market Research"
    },
    trends: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        color: "from-purple-500 to-pink-500",
        label: "Trend Analysis"
    },
    community: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: "from-green-500 to-emerald-500",
        label: "Community Intelligence"
    },
    execution: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: "from-orange-500 to-red-500",
        label: "Execution Strategy"
    },
    competition: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        color: "from-yellow-500 to-amber-500",
        label: "Competition Analysis"
    },
    content: {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        color: "from-indigo-500 to-violet-500",
        label: "Content Generation"
    }
};
function SourcesModal({ open, onClose, sources }) {
    const [selectedAgent, setSelectedAgent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("market");
    const totalSources = Object.values(sources).reduce((acc, agentSources)=>acc + agentSources.length, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        "data-orchids-id": "src/components/SourcesModal.tsx:39:4",
        "data-orchids-name": "Dialog",
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            "data-orchids-id": "src/components/SourcesModal.tsx:40:6",
            "data-orchids-name": "DialogContent",
            className: "max-w-6xl max-h-[90vh] glass-card backdrop-blur-xl bg-card/95 border-primary/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    "data-orchids-id": "src/components/SourcesModal.tsx:41:8",
                    "data-orchids-name": "DialogHeader",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            "data-orchids-id": "src/components/SourcesModal.tsx:42:10",
                            "data-orchids-name": "DialogTitle",
                            className: "flex items-center gap-3 text-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/SourcesModal.tsx:43:12",
                                    "data-orchids-name": "div",
                                    className: "p-2 rounded-lg bg-gradient-to-br from-primary/30 to-blue-500/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        "data-orchids-id": "src/components/SourcesModal.tsx:44:14",
                                        "data-orchids-name": "ExternalLink",
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                "Research Sources"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            "data-orchids-id": "src/components/SourcesModal.tsx:48:10",
                            "data-orchids-name": "DialogDescription",
                            className: "text-base",
                            children: [
                                totalSources,
                                " sources used across all AI agents"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                    "data-orchids-id": "src/components/SourcesModal.tsx:53:8",
                    "data-orchids-name": "Tabs",
                    value: selectedAgent,
                    onValueChange: setSelectedAgent,
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                            "data-orchids-id": "src/components/SourcesModal.tsx:54:10",
                            "data-orchids-name": "TabsList",
                            className: "grid grid-cols-6 gap-2 bg-muted/50 p-2",
                            children: Object.entries(agentConfig).map(([key, config])=>{
                                const Icon = config.icon;
                                const count = sources[key]?.length || 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    "data-orchids-id": "src/components/SourcesModal.tsx:60:16",
                                    "data-orchids-name": "TabsTrigger",
                                    value: key,
                                    className: "flex flex-col items-center gap-1 py-3 data-[state=active]:bg-primary/20 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SourcesModal.tsx:65:18",
                                            "data-orchids-name": "div",
                                            className: `p-2 rounded-lg bg-gradient-to-br ${config.color}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                "data-orchids-id": "src/components/SourcesModal.tsx:66:20",
                                                "data-orchids-name": "Icon",
                                                className: "h-4 w-4 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src/components/SourcesModal.tsx:68:18",
                                            "data-orchids-name": "span",
                                            className: "text-xs text-center leading-tight",
                                            children: config.label
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            "data-orchids-id": "src/components/SourcesModal.tsx:69:18",
                                            "data-orchids-name": "Badge",
                                            variant: "secondary",
                                            className: "text-xs",
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            "data-orchids-id": "src/components/SourcesModal.tsx:77:10",
                            "data-orchids-name": "ScrollArea",
                            className: "h-[550px] mt-6 pr-4",
                            children: Object.entries(agentConfig).map(([key, config])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    "data-orchids-id": "src/components/SourcesModal.tsx:79:14",
                                    "data-orchids-name": "TabsContent",
                                    value: key,
                                    className: "space-y-4 mt-0",
                                    children: sources[key] && sources[key].length > 0 ? sources[key].map((source, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SourcesModal.tsx:82:20",
                                            "data-orchids-name": "div",
                                            className: "p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/SourcesModal.tsx:86:22",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-start justify-between gap-4 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            "data-orchids-id": "src/components/SourcesModal.tsx:87:24",
                                                            "data-orchids-name": "Badge",
                                                            variant: "outline",
                                                            className: "text-xs",
                                                            children: [
                                                                "Source #",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            "data-orchids-id": "src/components/SourcesModal.tsx:90:24",
                                                            "data-orchids-name": "a",
                                                            href: source.url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex-shrink-0",
                                                            title: "Open in new tab",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                "data-orchids-id": "src/components/SourcesModal.tsx:97:26",
                                                                "data-orchids-name": "ExternalLink",
                                                                className: "h-4 w-4 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 23
                                                }, this),
                                                source.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    "data-orchids-id": "src/components/SourcesModal.tsx:102:24",
                                                    "data-orchids-name": "h4",
                                                    className: "font-semibold text-lg text-foreground mb-3 leading-snug",
                                                    children: source.title
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/components/SourcesModal.tsx:107:22",
                                                    "data-orchids-name": "a",
                                                    href: source.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-sm text-primary/80 hover:text-primary hover:underline break-all mb-3 block transition-colors",
                                                    children: source.url
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 23
                                                }, this),
                                                source.snippet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/SourcesModal.tsx:117:24",
                                                    "data-orchids-name": "p",
                                                    className: "text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 py-1",
                                                    children: source.snippet
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SourcesModal.tsx:124:18",
                                        "data-orchids-name": "div",
                                        className: "text-center py-16 text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                "data-orchids-id": "src/components/SourcesModal.tsx:125:20",
                                                "data-orchids-name": "ExternalLink",
                                                className: "h-16 w-16 mx-auto mb-4 opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/SourcesModal.tsx:126:20",
                                                "data-orchids-name": "p",
                                                className: "text-lg",
                                                children: "No sources available for this agent"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/SourcesModal.tsx:127:20",
                                                "data-orchids-name": "p",
                                                className: "text-sm mt-2 opacity-70",
                                                children: "This agent may not have used external sources"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this)
                                }, key, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/SourcesModal.tsx:135:8",
                    "data-orchids-name": "div",
                    className: "flex justify-end gap-2 mt-4 pt-4 border-t border-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        "data-orchids-id": "src/components/SourcesModal.tsx:136:10",
                        "data-orchids-name": "Button",
                        variant: "outline",
                        onClick: onClose,
                        className: "px-6",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ResultsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$SourcesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
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
        year: "2022",
        volume: 720
    },
    {
        year: "2023",
        volume: 1350
    },
    {
        year: "2024",
        volume: 2900
    },
    {
        year: "2025",
        volume: 4400
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
function ResultsPage({ idea, report, onBack }) {
    const [sourcesOpen, setSourcesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const overallScore = Math.round(scoreCards.reduce((sum, card)=>sum + card.score, 0) / scoreCards.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ResultsPage.tsx:79:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:81:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:84:6",
                "data-orchids-name": "div",
                className: "border-b border-primary/20 bg-card/70 backdrop-blur-xl sticky top-0 z-40 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ResultsPage.tsx:85:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:86:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:87:12",
                                "data-orchids-name": "Button",
                                variant: "ghost",
                                size: "icon",
                                onClick: onBack,
                                className: "hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    "data-orchids-id": "src/components/ResultsPage.tsx:93:14",
                                    "data-orchids-name": "ArrowLeft",
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:95:12",
                                "data-orchids-name": "div",
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:96:14",
                                        "data-orchids-name": "h1",
                                        className: "text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent",
                                        children: "Analysis Results"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:99:14",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            '"',
                                            idea,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:101:12",
                                "data-orchids-name": "Button",
                                variant: "outline",
                                onClick: ()=>setSourcesOpen(true),
                                className: "flex items-center gap-2 hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:106:14",
                                        "data-orchids-name": "ExternalLink",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    "View Sources"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:109:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-3 glass-card px-4 py-2 rounded-xl border border-primary/30 backdrop-blur-xl bg-card/80 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:110:14",
                                        "data-orchids-name": "Award",
                                        className: "h-8 w-8 text-primary animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:111:14",
                                        "data-orchids-name": "div",
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:112:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-primary",
                                                children: overallScore
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:113:16",
                                                "data-orchids-name": "p",
                                                className: "text-xs text-muted-foreground",
                                                children: "Overall Score"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:120:6",
                "data-orchids-name": "div",
                className: "container mx-auto px-4 py-8 space-y-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:122:8",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:123:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:124:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:125:14",
                                                "data-orchids-name": "Award",
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            "Executive Summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:128:12",
                                        "data-orchids-name": "CardDescription",
                                        className: "text-base",
                                        children: "AI-powered analysis of your business idea"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:130:10",
                                "data-orchids-name": "CardContent",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:131:12",
                                        "data-orchids-name": "p",
                                        className: "text-foreground leading-relaxed text-lg",
                                        children: "Your idea shows strong potential in the current market landscape. The concept addresses a clear need with growing demand, particularly among tech-savvy consumers aged 25-45. While there is existing competition, your unique approach offers differentiation opportunities through personalization and AI integration."
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:137:12",
                                        "data-orchids-name": "div",
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:138:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "High Demand"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:141:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "Clear Target Market"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:144:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "Scalable Model"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 144,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:147:14",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "Moderate Risk"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:155:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:156:10",
                                "data-orchids-name": "h2",
                                className: "text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent",
                                children: "Performance Metrics"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:159:10",
                                "data-orchids-name": "div",
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: scoreCards.map((card)=>{
                                    const Icon = card.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:163:16@scoreCards",
                                        "data-orchids-name": "Card",
                                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:167:18@scoreCards",
                                                "data-orchids-name": "CardHeader",
                                                className: "pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:168:20@scoreCards",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:169:22@scoreCards",
                                                                "data-orchids-name": "div",
                                                                className: `p-2 rounded-xl bg-gradient-to-br ${card.color.replace('text-', 'from-')}/20 to-transparent border border-${card.color.replace('text-', '')}/30`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    "data-orchids-id": "src/components/ResultsPage.tsx:170:24@scoreCards",
                                                                    "data-orchids-name": "Icon",
                                                                    className: `h-6 w-6 ${card.color}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                    lineNumber: 170,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:172:22@scoreCards",
                                                                "data-orchids-name": "span",
                                                                className: "text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300",
                                                                children: card.score
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:176:20@scoreCards",
                                                        "data-orchids-name": "CardTitle",
                                                        className: "text-base mt-3",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:178:18@scoreCards",
                                                "data-orchids-name": "CardContent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: card.score,
                                                        className: "h-2.5 mb-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:180:20@scoreCards",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-muted-foreground leading-relaxed",
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, card.title, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:189:8",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:190:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:191:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:192:14",
                                                "data-orchids-name": "TrendingUp",
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, this),
                                            "Trend Analysis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:195:12",
                                        "data-orchids-name": "CardDescription",
                                        className: "text-base",
                                        children: "Search volume growth over time"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:197:10",
                                "data-orchids-name": "CardContent",
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:198:12",
                                        "data-orchids-name": "ResponsiveContainer",
                                        width: "100%",
                                        height: 300,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                                            "data-orchids-id": "src/components/ResultsPage.tsx:199:14@trendData",
                                            "data-orchids-name": "LineChart",
                                            data: trendData,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:200:16",
                                                    "data-orchids-name": "CartesianGrid",
                                                    strokeDasharray: "3 3",
                                                    stroke: "rgba(255,255,255,0.1)"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:201:16",
                                                    "data-orchids-name": "XAxis",
                                                    dataKey: "year",
                                                    stroke: "rgba(255,255,255,0.5)",
                                                    style: {
                                                        fontSize: '14px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:206:16",
                                                    "data-orchids-name": "YAxis",
                                                    stroke: "rgba(255,255,255,0.5)",
                                                    style: {
                                                        fontSize: '14px'
                                                    },
                                                    tickFormatter: (value)=>`${(value / 1000).toFixed(1)}k`
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:211:16",
                                                    "data-orchids-name": "Tooltip",
                                                    contentStyle: {
                                                        backgroundColor: 'rgba(0,0,0,0.8)',
                                                        border: '1px solid rgba(96, 165, 250, 0.3)',
                                                        borderRadius: '8px',
                                                        color: '#fff'
                                                    },
                                                    formatter: (value)=>[
                                                            `${value}`,
                                                            'volume'
                                                        ],
                                                    labelStyle: {
                                                        color: '#60a5fa'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                                                    type: "monotone",
                                                    dataKey: "volume",
                                                    stroke: "#60a5fa",
                                                    strokeWidth: 3,
                                                    dot: {
                                                        fill: '#60a5fa',
                                                        strokeWidth: 2,
                                                        r: 6
                                                    },
                                                    activeDot: {
                                                        r: 8,
                                                        fill: '#60a5fa'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:232:12",
                                        "data-orchids-name": "div",
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:233:14",
                                                "data-orchids-name": "div",
                                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:234:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mb-1",
                                                        children: "Search Volume"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:235:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-3xl font-bold text-foreground",
                                                        children: "4.4K"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:237:14",
                                                "data-orchids-name": "div",
                                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:238:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mb-1",
                                                        children: "Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:239:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-3xl font-bold text-green-400",
                                                        children: "+511%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:245:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:247:10",
                                "data-orchids-name": "Card",
                                className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:248:12",
                                        "data-orchids-name": "CardHeader",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:249:14",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:250:16",
                                                        "data-orchids-name": "Users",
                                                        className: "h-6 w-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Community Signals"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:253:14",
                                                "data-orchids-name": "CardDescription",
                                                className: "text-base",
                                                children: "Social media sentiment analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:255:12",
                                        "data-orchids-name": "CardContent",
                                        className: "space-y-4",
                                        children: communitySignals.map((signal)=>{
                                            const Icon = signal.icon;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:259:18@communitySignals",
                                                "data-orchids-name": "div",
                                                className: "flex items-center justify-between p-4 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:263:20@communitySignals",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:264:22@communitySignals",
                                                                "data-orchids-name": "div",
                                                                className: "p-3 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-xl group-hover:scale-110 transition-transform duration-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    "data-orchids-id": "src/components/ResultsPage.tsx:265:24@communitySignals",
                                                                    "data-orchids-name": "Icon",
                                                                    className: "h-5 w-5 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:267:22@communitySignals",
                                                                "data-orchids-name": "div",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:268:24@communitySignals",
                                                                        "data-orchids-name": "p",
                                                                        className: "font-semibold text-foreground",
                                                                        children: signal.platform
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:269:24@communitySignals",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            signal.engagement.toLocaleString(),
                                                                            " mentions"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:272:20@communitySignals",
                                                        "data-orchids-name": "Badge",
                                                        variant: "default",
                                                        className: "bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm px-3 py-1",
                                                        children: signal.sentiment
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, signal.platform, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:282:10",
                                "data-orchids-name": "Card",
                                className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:283:12",
                                        "data-orchids-name": "CardHeader",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:284:14",
                                                "data-orchids-name": "CardTitle",
                                                className: "flex items-center gap-2 text-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:285:16",
                                                        "data-orchids-name": "Calendar",
                                                        className: "h-6 w-6 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Execution Timeline"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:288:14",
                                                "data-orchids-name": "CardDescription",
                                                className: "text-base",
                                                children: "Recommended implementation phases"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:290:12",
                                        "data-orchids-name": "CardContent",
                                        className: "space-y-4",
                                        children: executionTimeline.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/ResultsPage.tsx:292:16@executionTimeline",
                                                "data-orchids-name": "div",
                                                className: "flex gap-4 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:293:18@executionTimeline",
                                                        "data-orchids-name": "div",
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:294:20@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: `w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all duration-300 shadow-lg ${phase.status === 'critical' ? 'bg-gradient-to-br from-red-500/30 to-red-600/30 text-red-400 border border-red-500/40 group-hover:scale-110' : phase.status === 'important' ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/30 text-orange-400 border border-orange-500/40 group-hover:scale-110' : phase.status === 'future' ? 'bg-muted/50 text-muted-foreground border border-border' : 'bg-gradient-to-br from-primary/30 to-blue-500/30 text-primary border border-primary/40 group-hover:scale-110'}`,
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this),
                                                            index < executionTimeline.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:308:22@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: "w-1 h-full bg-gradient-to-b from-primary/50 to-border mt-2 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:311:18@executionTimeline",
                                                        "data-orchids-name": "div",
                                                        className: "flex-1 pb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:312:20@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-2 mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:313:22@executionTimeline",
                                                                        "data-orchids-name": "p",
                                                                        className: "font-semibold text-foreground text-lg",
                                                                        children: phase.phase
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    phase.status === 'critical' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:315:24@executionTimeline",
                                                                        "data-orchids-name": "AlertCircle",
                                                                        className: "h-5 w-5 text-red-400 animate-pulse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 315,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": index,
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:318:20@executionTimeline",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-2 text-sm text-muted-foreground",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:319:22@executionTimeline",
                                                                        "data-orchids-name": "Clock",
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-map-index": index,
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:320:22@executionTimeline",
                                                                        "data-orchids-name": "span",
                                                                        className: "font-medium",
                                                                        children: phase.duration
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, phase.phase, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:330:8",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-gradient-to-br from-primary/10 via-card/70 to-card/70 border-primary/50 shadow-2xl hover:border-primary/70 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:331:10",
                                "data-orchids-name": "CardHeader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    "data-orchids-id": "src/components/ResultsPage.tsx:332:12",
                                    "data-orchids-name": "CardTitle",
                                    className: "flex items-center gap-2 text-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                            "data-orchids-id": "src/components/ResultsPage.tsx:333:14",
                                            "data-orchids-name": "Target",
                                            className: "h-6 w-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        "Key Recommendations"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:337:10",
                                "data-orchids-name": "CardContent",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:338:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-4 p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:339:14",
                                                "data-orchids-name": "div",
                                                className: "p-3 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-500/40 group-hover:scale-110 transition-transform duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:340:16",
                                                    "data-orchids-name": "DollarSign",
                                                    className: "h-6 w-6 text-green-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:342:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:343:16",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold mb-2 text-lg text-foreground",
                                                        children: "Start with MVP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:344:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground leading-relaxed",
                                                        children: "Focus on core features first. Estimate $15-25K initial investment for a lean launch."
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:349:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-4 p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:350:14",
                                                "data-orchids-name": "div",
                                                className: "p-3 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-500/40 group-hover:scale-110 transition-transform duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:351:16",
                                                    "data-orchids-name": "Users",
                                                    className: "h-6 w-6 text-blue-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 350,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:353:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:354:16",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold mb-2 text-lg text-foreground",
                                                        children: "Build Community Early"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:355:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground leading-relaxed",
                                                        children: "Engage with potential users on Reddit and Twitter to validate assumptions and build momentum."
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:360:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-4 p-5 glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:361:14",
                                                "data-orchids-name": "div",
                                                className: "p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/40 group-hover:scale-110 transition-transform duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    "data-orchids-id": "src/components/ResultsPage.tsx:362:16",
                                                    "data-orchids-name": "Zap",
                                                    className: "h-6 w-6 text-purple-400 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:364:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:365:16",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold mb-2 text-lg text-foreground",
                                                        children: "Leverage AI Differentiation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:366:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground leading-relaxed",
                                                        children: "Your AI-powered personalization is a key differentiator. Make it central to your marketing message."
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$SourcesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/components/ResultsPage.tsx:376:6",
                "data-orchids-name": "SourcesModal",
                open: sourcesOpen,
                onClose: ()=>setSourcesOpen(false),
                sources: report?.sources || {}
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
        lineNumber: 79,
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
    const [agentUpdates, setAgentUpdates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Force dark mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.add("dark");
    }, []);
    const handleSearch = async (query)=>{
        setSearchQuery(query);
        setScreen("loading");
        setError(null);
        // Initialize agent statuses
        const agents = [
            'market',
            'competition',
            'community',
            'trends',
            'execution',
            'content'
        ];
        const initialStatuses = {};
        agents.forEach((agent)=>{
            initialStatuses[agent] = {
                status: 'waiting',
                progress: 0
            };
        });
        setAgentUpdates(initialStatuses);
        try {
            const response = await fetch('/api/analyze-idea', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idea: query
                })
            });
            if (!response.ok) {
                throw new Error('Failed to analyze idea');
            }
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            if (!reader) {
                throw new Error('No response body');
            }
            let buffer = '';
            while(true){
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, {
                    stream: true
                });
                buffer += chunk;
                const lines = buffer.split('\n');
                buffer = lines.pop() || '' // Keep incomplete line in buffer
                ;
                for (const line of lines){
                    if (line.startsWith('data: ')) {
                        try {
                            const jsonStr = line.slice(6);
                            const data = JSON.parse(jsonStr);
                            if (data.type === 'complete') {
                                setReport(data.report);
                                setScreen("results");
                            } else if (data.type === 'error') {
                                setError(data.error);
                            } else if (data.agent) {
                                setAgentUpdates((prev)=>({
                                        ...prev,
                                        [data.agent]: {
                                            status: data.status,
                                            progress: data.progress || 0,
                                            message: data.message
                                        }
                                    }));
                            }
                        } catch (parseError) {
                            console.error('JSON parse error:', parseError);
                            console.error('Problematic line:', line.slice(0, 200));
                        // Continue to next line instead of crashing
                        }
                    }
                }
            }
        } catch (err) {
            console.error('Analysis error:', err);
            setError(err instanceof Error ? err.message : 'An error occurred');
        }
    };
    const handleBack = ()=>{
        setScreen("home");
        setSearchQuery("");
        setReport(null);
        setAgentUpdates({});
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            screen === "home" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$HomePage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:116:28@handleSearch",
                "data-orchids-name": "HomePage",
                onSearch: handleSearch
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 29
            }, this),
            screen === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$LoadingScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:118:8",
                "data-orchids-name": "LoadingScreen",
                idea: searchQuery,
                agentUpdates: agentUpdates,
                error: error
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/app/page.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            screen === "results" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ResultsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/app/page.tsx:124:31@handleBack",
                "data-orchids-name": "ResultsPage",
                idea: searchQuery,
                report: report,
                onBack: handleBack
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/app/page.tsx",
                lineNumber: 124,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=hc%20%26%20j%20stuff_12_59_am_src_e36c82aa._.js.map