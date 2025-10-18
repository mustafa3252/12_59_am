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
"[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CompetitorGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function CompetitorGrid({ competitors, onCompetitorClick }) {
    if (!competitors || competitors.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/CompetitorGrid.tsx:25:6",
            "data-orchids-name": "div",
            className: "text-center py-12 text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    "data-orchids-id": "src/components/CompetitorGrid.tsx:26:8",
                    "data-orchids-name": "TrendingUp",
                    className: "h-16 w-16 mx-auto mb-4 opacity-30"
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "data-orchids-id": "src/components/CompetitorGrid.tsx:27:8",
                    "data-orchids-name": "p",
                    className: "text-lg",
                    children: "No competitor data available"
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/CompetitorGrid.tsx:33:4",
        "data-orchids-name": "div",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CompetitorGrid.tsx:34:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/CompetitorGrid.tsx:35:8",
                    "data-orchids-name": "div",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/components/CompetitorGrid.tsx:36:10",
                            "data-orchids-name": "h2",
                            className: "text-3xl font-bold",
                            children: "Competition Analysis"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/CompetitorGrid.tsx:37:10",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground mt-2",
                            children: [
                                competitors.length,
                                " competitor",
                                competitors.length !== 1 ? 's' : '',
                                " identified in your market"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CompetitorGrid.tsx:43:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: competitors.map((competitor, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-map-index": idx,
                        "data-orchids-id": "src/components/CompetitorGrid.tsx:45:10@competitors",
                        "data-orchids-name": "div",
                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 p-6 group cursor-pointer",
                        onClick: ()=>onCompetitorClick?.(competitor),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CompetitorGrid.tsx:51:12@competitors",
                                "data-orchids-name": "div",
                                className: "flex items-start justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:52:14@competitors",
                                        "data-orchids-name": "div",
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:53:16@competitors",
                                                "data-orchids-name": "h3",
                                                className: "text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors",
                                                children: competitor.name
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            competitor.funding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:57:18@competitors",
                                                "data-orchids-name": "Badge",
                                                variant: "outline",
                                                className: "text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:58:20@competitors",
                                                        "data-orchids-name": "DollarSign",
                                                        className: "h-3 w-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 21
                                                    }, this),
                                                    competitor.funding,
                                                    " raised"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:63:14@competitors",
                                        "data-orchids-name": "ChevronRight",
                                        className: "h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            competitor.pricing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CompetitorGrid.tsx:68:14@competitors",
                                "data-orchids-name": "div",
                                className: "mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:69:16@competitors",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: "Pricing"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:70:16@competitors",
                                        "data-orchids-name": "p",
                                        className: "text-lg font-semibold text-foreground",
                                        children: competitor.pricing
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this),
                            competitor.features && competitor.features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CompetitorGrid.tsx:76:14@competitors",
                                "data-orchids-name": "div",
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:77:16@competitors",
                                        "data-orchids-name": "p",
                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                        children: "Key Features"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:78:16@competitors",
                                        "data-orchids-name": "div",
                                        className: "space-y-1",
                                        children: [
                                            competitor.features.slice(0, 3).map((feature, fIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/CompetitorGrid.tsx:80:20",
                                                    "data-orchids-name": "div",
                                                    className: "text-sm text-foreground flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/CompetitorGrid.tsx:81:22",
                                                            "data-orchids-name": "span",
                                                            className: "text-primary mt-1",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/CompetitorGrid.tsx:82:22",
                                                            "data-orchids-name": "span",
                                                            className: "flex-1",
                                                            children: feature
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, fIdx, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)),
                                            competitor.features.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:86:20",
                                                "data-orchids-name": "p",
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: [
                                                    "+",
                                                    competitor.features.length - 3,
                                                    " more features"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CompetitorGrid.tsx:95:12@competitors",
                                "data-orchids-name": "div",
                                className: "grid grid-cols-2 gap-3 mb-4",
                                children: [
                                    competitor.strengths && competitor.strengths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:97:16@competitors",
                                        "data-orchids-name": "div",
                                        className: "p-2 rounded-lg bg-green-500/10 border border-green-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:98:18@competitors",
                                                "data-orchids-name": "p",
                                                className: "text-xs font-medium text-green-400 mb-1",
                                                children: "Strengths"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:99:18@competitors",
                                                "data-orchids-name": "p",
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    competitor.strengths.length,
                                                    " identified"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    competitor.weaknesses && competitor.weaknesses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:105:16@competitors",
                                        "data-orchids-name": "div",
                                        className: "p-2 rounded-lg bg-orange-500/10 border border-orange-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:106:18@competitors",
                                                "data-orchids-name": "p",
                                                className: "text-xs font-medium text-orange-400 mb-1",
                                                children: "Gaps"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CompetitorGrid.tsx:107:18@competitors",
                                                "data-orchids-name": "p",
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    competitor.weaknesses.length,
                                                    " identified"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            competitor.differentiation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CompetitorGrid.tsx:116:14@competitors",
                                "data-orchids-name": "div",
                                className: "pt-4 border-t border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:117:16@competitors",
                                        "data-orchids-name": "p",
                                        className: "text-xs font-medium text-primary mb-2",
                                        children: "💡 Your Advantage"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:118:16@competitors",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground line-clamp-2",
                                        children: competitor.differentiation
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CompetitorGrid.tsx:125:12@competitors",
                                "data-orchids-name": "div",
                                className: "mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:126:14@competitors",
                                        "data-orchids-name": "span",
                                        children: "Click for full analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CompetitorGrid.tsx:127:14@competitors",
                                        "data-orchids-name": "ChevronRight",
                                        className: "h-4 w-4 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CommunityDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const platformIcons = {
    reddit: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
    youtube: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
    startup: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
};
const platformColors = {
    reddit: 'from-orange-500 to-red-500',
    facebook: 'from-blue-500 to-indigo-500',
    youtube: 'from-red-500 to-pink-500',
    startup: 'from-green-500 to-emerald-500'
};
const sentimentColors = {
    'Positive': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Frustrated': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Mixed': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Neutral': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
};
function CommunityDetails({ platforms, totalReach, engagementLevel, keyInsights }) {
    if (!platforms || platforms.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/CommunityDetails.tsx:51:6",
            "data-orchids-name": "div",
            className: "text-center py-12 text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    "data-orchids-id": "src/components/CommunityDetails.tsx:52:8",
                    "data-orchids-name": "Users",
                    className: "h-16 w-16 mx-auto mb-4 opacity-30"
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "data-orchids-id": "src/components/CommunityDetails.tsx:53:8",
                    "data-orchids-name": "p",
                    className: "text-lg",
                    children: "No community data available"
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    // Group platforms by type
    const redditPlatforms = platforms.filter((p)=>p.type === 'reddit');
    const facebookPlatforms = platforms.filter((p)=>p.type === 'facebook');
    const youtubePlatforms = platforms.filter((p)=>p.type === 'youtube');
    const startupPlatforms = platforms.filter((p)=>p.type === 'startup');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/CommunityDetails.tsx:65:4",
        "data-orchids-name": "div",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CommunityDetails.tsx:67:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between flex-wrap gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:68:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:69:10",
                                "data-orchids-name": "h2",
                                className: "text-3xl font-bold",
                                children: "Community Signals"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:70:10",
                                "data-orchids-name": "p",
                                className: "text-muted-foreground mt-2",
                                children: [
                                    "Real community data from ",
                                    platforms.length,
                                    " platforms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:76:8",
                        "data-orchids-name": "div",
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:77:10",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:78:12",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Reach"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:79:12",
                                        "data-orchids-name": "p",
                                        className: "text-2xl font-bold text-primary",
                                        children: totalReach
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:81:10",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:82:12",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: "Engagement"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:83:12",
                                        "data-orchids-name": "Badge",
                                        variant: "outline",
                                        className: `text-sm font-bold ${engagementLevel === 'High' ? 'text-green-400 border-green-500/30' : engagementLevel === 'Medium' ? 'text-yellow-400 border-yellow-500/30' : 'text-gray-400 border-gray-500/30'}`,
                                        children: engagementLevel
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            keyInsights && keyInsights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CommunityDetails.tsx:99:8",
                "data-orchids-name": "div",
                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:100:10",
                        "data-orchids-name": "h3",
                        className: "text-lg font-semibold mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:101:12",
                                "data-orchids-name": "TrendingUp",
                                className: "h-5 w-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            "Key Insights"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:104:10",
                        "data-orchids-name": "div",
                        className: "space-y-2",
                        children: keyInsights.map((insight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CommunityDetails.tsx:106:14@keyInsights",
                                "data-orchids-name": "div",
                                className: "flex items-start gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:107:16@keyInsights",
                                        "data-orchids-name": "span",
                                        className: "text-primary font-bold mt-0.5",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:108:16@keyInsights",
                                        "data-orchids-name": "p",
                                        className: "text-muted-foreground flex-1",
                                        children: insight
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            redditPlatforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CommunityDetails.tsx:117:8",
                "data-orchids-name": "div",
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:118:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:119:12",
                                "data-orchids-name": "div",
                                className: `p-2 rounded-lg bg-gradient-to-br ${platformColors.reddit}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    "data-orchids-id": "src/components/CommunityDetails.tsx:120:14",
                                    "data-orchids-name": "MessageSquare",
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:122:12",
                                "data-orchids-name": "h3",
                                className: "text-xl font-semibold",
                                children: "Reddit Communities"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:123:12",
                                "data-orchids-name": "Badge",
                                variant: "secondary",
                                children: redditPlatforms.length
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:126:10",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: redditPlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CommunityDetails.tsx:128:14@redditPlatforms",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:132:16@redditPlatforms",
                                        "data-orchids-name": "div",
                                        className: "flex items-start justify-between mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:133:18@redditPlatforms",
                                                "data-orchids-name": "h4",
                                                className: "font-semibold text-foreground",
                                                children: platform.name
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            platform.sentiment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:135:20@redditPlatforms",
                                                "data-orchids-name": "Badge",
                                                variant: "outline",
                                                className: `text-xs ${sentimentColors[platform.sentiment]}`,
                                                children: platform.sentiment
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:144:16@redditPlatforms",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-4 text-sm mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:145:18@redditPlatforms",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-1 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CommunityDetails.tsx:146:20@redditPlatforms",
                                                        "data-orchids-name": "Users",
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CommunityDetails.tsx:147:20@redditPlatforms",
                                                        "data-orchids-name": "span",
                                                        className: "font-semibold text-foreground",
                                                        children: platform.memberCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:149:18@redditPlatforms",
                                                "data-orchids-name": "Badge",
                                                variant: "secondary",
                                                className: "text-xs",
                                                children: platform.activity
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    platform.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:155:18@redditPlatforms",
                                        "data-orchids-name": "p",
                                        className: "text-xs text-muted-foreground line-clamp-2 mt-2",
                                        children: platform.details
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 155,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            facebookPlatforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CommunityDetails.tsx:167:8",
                "data-orchids-name": "div",
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:168:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:169:12",
                                "data-orchids-name": "div",
                                className: `p-2 rounded-lg bg-gradient-to-br ${platformColors.facebook}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                    "data-orchids-id": "src/components/CommunityDetails.tsx:170:14",
                                    "data-orchids-name": "Facebook",
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:172:12",
                                "data-orchids-name": "h3",
                                className: "text-xl font-semibold",
                                children: "Facebook Groups"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:173:12",
                                "data-orchids-name": "Badge",
                                variant: "secondary",
                                children: facebookPlatforms.length
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:176:10",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: facebookPlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CommunityDetails.tsx:178:14@facebookPlatforms",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:182:16@facebookPlatforms",
                                        "data-orchids-name": "h4",
                                        className: "font-semibold text-foreground mb-3",
                                        children: platform.name
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:184:16@facebookPlatforms",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:185:18@facebookPlatforms",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-1 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CommunityDetails.tsx:186:20@facebookPlatforms",
                                                        "data-orchids-name": "Users",
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CommunityDetails.tsx:187:20@facebookPlatforms",
                                                        "data-orchids-name": "span",
                                                        className: "font-semibold text-foreground",
                                                        children: platform.memberCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:189:18@facebookPlatforms",
                                                "data-orchids-name": "Badge",
                                                variant: "secondary",
                                                className: "text-xs",
                                                children: platform.activity
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this),
            youtubePlatforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CommunityDetails.tsx:201:8",
                "data-orchids-name": "div",
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:202:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:203:12",
                                "data-orchids-name": "div",
                                className: `p-2 rounded-lg bg-gradient-to-br ${platformColors.youtube}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                    "data-orchids-id": "src/components/CommunityDetails.tsx:204:14",
                                    "data-orchids-name": "Youtube",
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:206:12",
                                "data-orchids-name": "h3",
                                className: "text-xl font-semibold",
                                children: "YouTube Channels"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:207:12",
                                "data-orchids-name": "Badge",
                                variant: "secondary",
                                children: youtubePlatforms.length
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:210:10",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: youtubePlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CommunityDetails.tsx:212:14@youtubePlatforms",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:216:16@youtubePlatforms",
                                        "data-orchids-name": "h4",
                                        className: "font-semibold text-foreground mb-3",
                                        children: platform.name
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:218:16@youtubePlatforms",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:219:18@youtubePlatforms",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-1 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CommunityDetails.tsx:220:20@youtubePlatforms",
                                                        "data-orchids-name": "Users",
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/CommunityDetails.tsx:221:20@youtubePlatforms",
                                                        "data-orchids-name": "span",
                                                        className: "font-semibold text-foreground",
                                                        children: [
                                                            platform.memberCount,
                                                            " subscribers"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/CommunityDetails.tsx:223:18@youtubePlatforms",
                                                "data-orchids-name": "Badge",
                                                variant: "secondary",
                                                className: "text-xs",
                                                children: platform.activity
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            startupPlatforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/CommunityDetails.tsx:235:8",
                "data-orchids-name": "div",
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:236:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:237:12",
                                "data-orchids-name": "div",
                                className: `p-2 rounded-lg bg-gradient-to-br ${platformColors.startup}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    "data-orchids-id": "src/components/CommunityDetails.tsx:238:14",
                                    "data-orchids-name": "TrendingUp",
                                    className: "h-5 w-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/CommunityDetails.tsx:240:12",
                                "data-orchids-name": "h3",
                                className: "text-xl font-semibold",
                                children: "Startup Activity"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/CommunityDetails.tsx:243:10",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: startupPlatforms.map((platform, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/CommunityDetails.tsx:245:14@startupPlatforms",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:249:16@startupPlatforms",
                                        "data-orchids-name": "h4",
                                        className: "font-semibold text-foreground mb-2",
                                        children: platform.name
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:250:16@startupPlatforms",
                                        "data-orchids-name": "p",
                                        className: "text-2xl font-bold text-primary mb-2",
                                        children: platform.memberCount
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:251:16@startupPlatforms",
                                        "data-orchids-name": "Badge",
                                        variant: "secondary",
                                        className: "text-xs mb-3",
                                        children: platform.activity
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    platform.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/CommunityDetails.tsx:255:18@startupPlatforms",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: platform.details
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                        lineNumber: 255,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ExecutionPhaseModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ExecutionPhaseModal({ open, onClose, phase }) {
    if (!phase) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:30:4",
        "data-orchids-name": "Dialog",
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:31:6",
            "data-orchids-name": "DialogContent",
            className: "max-w-4xl max-h-[90vh] glass-card backdrop-blur-xl bg-card/95 border-primary/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:32:8",
                    "data-orchids-name": "DialogHeader",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:33:10",
                            "data-orchids-name": "DialogTitle",
                            className: "flex items-center gap-3 text-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:34:12",
                                    "data-orchids-name": "div",
                                    className: "p-2 rounded-lg bg-gradient-to-br from-primary/30 to-blue-500/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:35:14",
                                        "data-orchids-name": "Target",
                                        className: "h-6 w-6 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                phase.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:39:10",
                            "data-orchids-name": "DialogDescription",
                            className: "flex items-center gap-2 text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:40:12",
                                    "data-orchids-name": "Clock",
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                phase.timeline
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:45:8",
                    "data-orchids-name": "ScrollArea",
                    className: "h-[600px] pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:46:10",
                        "data-orchids-name": "div",
                        className: "space-y-6 mt-4",
                        children: [
                            phase.activities && phase.activities.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:49:14",
                                "data-orchids-name": "div",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:50:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:51:18",
                                                "data-orchids-name": "div",
                                                className: "p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:52:20",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "h-5 w-5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:54:18",
                                                "data-orchids-name": "h3",
                                                className: "text-lg font-semibold",
                                                children: "Activities & Tasks"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:57:16",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:58:18",
                                            "data-orchids-name": "ul",
                                            className: "space-y-3",
                                            children: phase.activities.map((activity, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:60:22",
                                                    "data-orchids-name": "li",
                                                    className: "flex items-start gap-3 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:61:24",
                                                            "data-orchids-name": "div",
                                                            className: "mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:62:24",
                                                            "data-orchids-name": "span",
                                                            className: "text-sm text-foreground flex-1",
                                                            children: activity
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this),
                            phase.milestones && phase.milestones.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:72:14",
                                "data-orchids-name": "div",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:73:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:74:18",
                                                "data-orchids-name": "div",
                                                className: "p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:75:20",
                                                    "data-orchids-name": "Target",
                                                    className: "h-5 w-5 text-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:77:18",
                                                "data-orchids-name": "h3",
                                                className: "text-lg font-semibold",
                                                children: "Key Milestones"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:80:16",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-purple-500/20 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:81:18",
                                            "data-orchids-name": "ul",
                                            className: "space-y-3",
                                            children: phase.milestones.map((milestone, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:83:22",
                                                    "data-orchids-name": "li",
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:84:24",
                                                            "data-orchids-name": "Badge",
                                                            variant: "outline",
                                                            className: "text-xs font-bold text-purple-400 border-purple-500/30 flex-shrink-0",
                                                            children: [
                                                                "M",
                                                                idx + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:87:24",
                                                            "data-orchids-name": "span",
                                                            className: "text-sm text-foreground flex-1",
                                                            children: milestone
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            phase.deliverables && phase.deliverables.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:97:14",
                                "data-orchids-name": "div",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:98:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:99:18",
                                                "data-orchids-name": "div",
                                                className: "p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:100:20",
                                                    "data-orchids-name": "Package",
                                                    className: "h-5 w-5 text-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:102:18",
                                                "data-orchids-name": "h3",
                                                className: "text-lg font-semibold",
                                                children: "Deliverables"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:105:16",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-green-500/20 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:106:18",
                                            "data-orchids-name": "ul",
                                            className: "space-y-3",
                                            children: phase.deliverables.map((deliverable, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:108:22",
                                                    "data-orchids-name": "li",
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:109:24",
                                                            "data-orchids-name": "CheckCircle2",
                                                            className: "h-5 w-5 text-green-400 flex-shrink-0 mt-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:110:24",
                                                            "data-orchids-name": "span",
                                                            className: "text-sm text-foreground flex-1",
                                                            children: deliverable
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            phase.successMetrics && phase.successMetrics.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:120:14",
                                "data-orchids-name": "div",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:121:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:122:18",
                                                "data-orchids-name": "div",
                                                className: "p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:123:20",
                                                    "data-orchids-name": "TrendingUp",
                                                    className: "h-5 w-5 text-orange-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:125:18",
                                                "data-orchids-name": "h3",
                                                className: "text-lg font-semibold",
                                                children: "Success Metrics"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:128:16",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-orange-500/20 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:129:18",
                                            "data-orchids-name": "ul",
                                            className: "space-y-3",
                                            children: phase.successMetrics.map((metric, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:131:22",
                                                    "data-orchids-name": "li",
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:132:24",
                                                            "data-orchids-name": "div",
                                                            className: "h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:133:26",
                                                                "data-orchids-name": "span",
                                                                className: "text-xs font-bold text-orange-400",
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:135:24",
                                                            "data-orchids-name": "span",
                                                            className: "text-sm text-foreground flex-1",
                                                            children: metric
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            phase.resources && phase.resources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:145:14",
                                "data-orchids-name": "div",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:146:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:147:18",
                                                "data-orchids-name": "div",
                                                className: "p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:148:20",
                                                    "data-orchids-name": "Users",
                                                    className: "h-5 w-5 text-yellow-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:150:18",
                                                "data-orchids-name": "h3",
                                                className: "text-lg font-semibold",
                                                children: "Resources Needed"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:153:16",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-yellow-500/20 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:154:18",
                                            "data-orchids-name": "ul",
                                            className: "space-y-3",
                                            children: phase.resources.map((resource, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:156:22",
                                                    "data-orchids-name": "li",
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:157:24",
                                                            "data-orchids-name": "div",
                                                            className: "mt-1 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:158:24",
                                                            "data-orchids-name": "span",
                                                            className: "text-sm text-foreground flex-1",
                                                            children: resource
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            phase.transitionCriteria && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:168:14",
                                "data-orchids-name": "div",
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:169:16",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:170:18",
                                                "data-orchids-name": "div",
                                                className: "p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:171:20",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "h-5 w-5 text-indigo-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:173:18",
                                                "data-orchids-name": "h3",
                                                className: "text-lg font-semibold",
                                                children: "Ready to Move Forward?"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:176:16",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-indigo-500/20 p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:177:18",
                                            "data-orchids-name": "p",
                                            className: "text-sm text-muted-foreground leading-relaxed",
                                            children: phase.transitionCriteria
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:186:8",
                    "data-orchids-name": "div",
                    className: "flex justify-end gap-2 mt-4 pt-4 border-t border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:187:10",
                            "data-orchids-name": "Button",
                            variant: "outline",
                            onClick: onClose,
                            className: "px-6",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src/components/ExecutionPhaseModal.tsx:190:10",
                            "data-orchids-name": "Button",
                            className: "px-6",
                            children: "Mark as Complete"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContentAssets)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ContentAssets({ landingPage, ads, brand, wireframes, aiPrompts }) {
    const [copiedIndex, setCopiedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const copyToClipboard = async (text, id)=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(id);
            setTimeout(()=>setCopiedIndex(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    const CopyButton = ({ text, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
            "data-orchids-id": "src/components/ContentAssets.tsx:82:4",
            "data-orchids-name": "Button",
            variant: "outline",
            size: "sm",
            onClick: ()=>copyToClipboard(text, id),
            className: "gap-2",
            children: copiedIndex === id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:90:10",
                        "data-orchids-name": "Check",
                        className: "h-4 w-4 text-green-500"
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    "Copied!"
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:95:10",
                        "data-orchids-name": "Copy",
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    "Copy"
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
            lineNumber: 82,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ContentAssets.tsx:103:4",
        "data-orchids-name": "div",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ContentAssets.tsx:104:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ContentAssets.tsx:105:8",
                    "data-orchids-name": "div",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "src/components/ContentAssets.tsx:106:10",
                            "data-orchids-name": "h2",
                            className: "text-3xl font-bold flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-8 w-8 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                "Content & Marketing Assets"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "src/components/ContentAssets.tsx:110:10",
                            "data-orchids-name": "p",
                            className: "text-muted-foreground mt-2",
                            children: "Ready-to-use copy and AI prompts for your business"
                        }, void 0, false, {
                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                "data-orchids-id": "src/components/ContentAssets.tsx:116:6",
                "data-orchids-name": "Tabs",
                defaultValue: "landing",
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:117:8",
                        "data-orchids-name": "TabsList",
                        className: "grid grid-cols-4 gap-2 bg-muted/50 p-2 h-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src/components/ContentAssets.tsx:118:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "landing",
                                className: "flex flex-col items-center gap-2 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:119:12",
                                        "data-orchids-name": "FileText",
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:120:12",
                                        "data-orchids-name": "span",
                                        className: "text-xs",
                                        children: "Landing Page"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src/components/ContentAssets.tsx:122:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "ads",
                                className: "flex flex-col items-center gap-2 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:123:12",
                                        "data-orchids-name": "Megaphone",
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:124:12",
                                        "data-orchids-name": "span",
                                        className: "text-xs",
                                        children: "Ad Creatives"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src/components/ContentAssets.tsx:126:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "brand",
                                className: "flex flex-col items-center gap-2 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:127:12",
                                        "data-orchids-name": "Palette",
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:128:12",
                                        "data-orchids-name": "span",
                                        className: "text-xs",
                                        children: "Brand Package"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                "data-orchids-id": "src/components/ContentAssets.tsx:130:10",
                                "data-orchids-name": "TabsTrigger",
                                value: "wireframes",
                                className: "flex flex-col items-center gap-2 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:131:12",
                                        "data-orchids-name": "Layout",
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:132:12",
                                        "data-orchids-name": "span",
                                        className: "text-xs",
                                        children: "Wireframes"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:137:8",
                        "data-orchids-name": "TabsContent",
                        value: "landing",
                        className: "mt-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ContentAssets.tsx:138:10",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl border border-primary/30 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:139:12",
                                        "data-orchids-name": "div",
                                        className: "flex items-start justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:140:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:141:16",
                                                        "data-orchids-name": "h3",
                                                        className: "text-lg font-semibold flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "h-5 w-5 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 19
                                                            }, this),
                                                            "AI Prompt for Landing Page"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:145:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mt-1",
                                                        children: "Use this prompt with ChatGPT, Claude, or v0.dev to generate your landing page"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:149:14",
                                                "data-orchids-name": "CopyButton",
                                                text: aiPrompts.landingPagePrompt,
                                                id: "landing-prompt"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:152:12",
                                        "data-orchids-name": "ScrollArea",
                                        className: "h-[300px] w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            "data-orchids-id": "src/components/ContentAssets.tsx:153:14",
                                            "data-orchids-name": "pre",
                                            className: "text-sm text-foreground whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-lg border border-primary/20",
                                            children: aiPrompts.landingPagePrompt
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ContentAssets.tsx:159:10",
                                "data-orchids-name": "div",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:160:12",
                                        "data-orchids-name": "h3",
                                        className: "text-xl font-semibold",
                                        children: "Landing Page Sections"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    landingPage.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": idx,
                                            "data-orchids-id": "src/components/ContentAssets.tsx:163:14@landingPage",
                                            "data-orchids-name": "div",
                                            className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src/components/ContentAssets.tsx:167:16@landingPage",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-start justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src/components/ContentAssets.tsx:168:18@landingPage",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    "data-map-index": idx,
                                                                    "data-orchids-id": "src/components/ContentAssets.tsx:169:20@landingPage",
                                                                    "data-orchids-name": "Badge",
                                                                    variant: "outline",
                                                                    className: "mb-2",
                                                                    children: section.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 21
                                                                }, this),
                                                                section.headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    "data-map-index": idx,
                                                                    "data-orchids-id": "src/components/ContentAssets.tsx:171:22@landingPage",
                                                                    "data-orchids-name": "h4",
                                                                    className: "text-lg font-bold text-foreground",
                                                                    children: section.headline
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 23
                                                                }, this),
                                                                section.subheadline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    "data-map-index": idx,
                                                                    "data-orchids-id": "src/components/ContentAssets.tsx:174:22@landingPage",
                                                                    "data-orchids-name": "p",
                                                                    className: "text-sm text-muted-foreground mt-1",
                                                                    children: section.subheadline
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src/components/ContentAssets.tsx:177:18@landingPage",
                                                            "data-orchids-name": "CopyButton",
                                                            text: section.content,
                                                            id: `section-${idx}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                section.items && section.items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src/components/ContentAssets.tsx:181:18@landingPage",
                                                    "data-orchids-name": "ul",
                                                    className: "space-y-2 mt-3",
                                                    children: section.items.map((item, itemIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            "data-orchids-id": "src/components/ContentAssets.tsx:183:22",
                                                            "data-orchids-name": "li",
                                                            className: "flex items-start gap-2 text-sm text-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "src/components/ContentAssets.tsx:184:24",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-primary mt-1",
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "src/components/ContentAssets.tsx:185:24",
                                                                    "data-orchids-name": "span",
                                                                    className: "flex-1",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, itemIdx, true, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src/components/ContentAssets.tsx:190:18@landingPage",
                                                    "data-orchids-name": "p",
                                                    className: "text-sm text-foreground mt-3 leading-relaxed",
                                                    children: section.content
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:198:8",
                        "data-orchids-name": "TabsContent",
                        value: "ads",
                        className: "mt-6 space-y-6",
                        children: ads.map((ad, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/ContentAssets.tsx:200:12@ads",
                                "data-orchids-name": "div",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/ContentAssets.tsx:201:14@ads",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:202:16@ads",
                                                "data-orchids-name": "div",
                                                className: "flex items-start justify-between mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:203:18@ads",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:204:20@ads",
                                                                "data-orchids-name": "h3",
                                                                className: "text-lg font-semibold flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        className: "h-5 w-5 text-purple-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 205,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "AI Prompt for ",
                                                                    ad.platform,
                                                                    " Ad #",
                                                                    idx + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:208:20@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-sm text-muted-foreground mt-1",
                                                                children: "Use this with ChatGPT or Canva to create your ad creative"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:212:18@ads",
                                                        "data-orchids-name": "CopyButton",
                                                        text: aiPrompts.adPrompts[idx] || '',
                                                        id: `ad-prompt-${idx}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:215:16@ads",
                                                "data-orchids-name": "ScrollArea",
                                                className: "h-[200px] w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src/components/ContentAssets.tsx:216:18@ads",
                                                    "data-orchids-name": "pre",
                                                    className: "text-sm text-foreground whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-lg border border-purple-500/20",
                                                    children: aiPrompts.adPrompts[idx]
                                                }, void 0, false, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/ContentAssets.tsx:222:14@ads",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:223:16@ads",
                                                "data-orchids-name": "div",
                                                className: "flex items-start justify-between mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": idx,
                                                    "data-orchids-id": "src/components/ContentAssets.tsx:224:18@ads",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src/components/ContentAssets.tsx:225:20@ads",
                                                            "data-orchids-name": "Badge",
                                                            className: "bg-gradient-to-r from-purple-500 to-pink-500",
                                                            children: ad.platform
                                                        }, void 0, false, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            "data-map-index": idx,
                                                            "data-orchids-id": "src/components/ContentAssets.tsx:228:20@ads",
                                                            "data-orchids-name": "h4",
                                                            className: "text-lg font-semibold",
                                                            children: [
                                                                "Ad Concept #",
                                                                idx + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:232:16@ads",
                                                "data-orchids-name": "div",
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:233:18@ads",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:234:20@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-xs font-medium text-muted-foreground mb-1",
                                                                children: "HEADLINE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:235:20@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-base font-bold text-foreground",
                                                                children: ad.headline
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:238:18@ads",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:239:20@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-xs font-medium text-muted-foreground mb-1",
                                                                children: "BODY COPY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:240:20@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-sm text-foreground leading-relaxed",
                                                                children: ad.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:243:18@ads",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:244:20@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-xs font-medium text-muted-foreground mb-1",
                                                                children: "CALL-TO-ACTION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:245:20@ads",
                                                                "data-orchids-name": "Badge",
                                                                variant: "secondary",
                                                                className: "font-semibold",
                                                                children: ad.cta
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    ad.targeting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:249:20@ads",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:250:22@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-xs font-medium text-muted-foreground mb-1",
                                                                children: "TARGET AUDIENCE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:251:22@ads",
                                                                "data-orchids-name": "p",
                                                                className: "text-sm text-foreground",
                                                                children: ad.targeting
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this),
                                                    ad.midjourney_prompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:256:20@ads",
                                                        "data-orchids-name": "div",
                                                        className: "pt-4 border-t border-border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:257:22@ads",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-start justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:258:24",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-xs font-medium text-muted-foreground",
                                                                        children: "MIDJOURNEY PROMPT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 258,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:259:24",
                                                                        "data-orchids-name": "CopyButton",
                                                                        text: ad.midjourney_prompt,
                                                                        id: `mj-${idx}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                "data-map-index": idx,
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:261:22@ads",
                                                                "data-orchids-name": "pre",
                                                                className: "text-xs text-foreground whitespace-pre-wrap font-mono bg-black/20 p-3 rounded-lg border border-primary/20",
                                                                children: ad.midjourney_prompt
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:273:8",
                        "data-orchids-name": "TabsContent",
                        value: "brand",
                        className: "mt-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ContentAssets.tsx:274:10",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:275:12",
                                        "data-orchids-name": "div",
                                        className: "flex items-start justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:276:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:277:16",
                                                        "data-orchids-name": "h3",
                                                        className: "text-lg font-semibold flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "h-5 w-5 text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Complete Brand Package"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:281:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mt-1",
                                                        children: "Use this as your brand foundation for all materials"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:285:14",
                                                "data-orchids-name": "CopyButton",
                                                text: aiPrompts.brandPrompt,
                                                id: "brand-prompt"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:288:12",
                                        "data-orchids-name": "ScrollArea",
                                        className: "h-[200px] w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            "data-orchids-id": "src/components/ContentAssets.tsx:289:14",
                                            "data-orchids-name": "pre",
                                            className: "text-sm text-foreground whitespace-pre-wrap font-mono bg-black/20 p-4 rounded-lg border border-amber-500/20",
                                            children: aiPrompts.brandPrompt
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ContentAssets.tsx:295:10",
                                "data-orchids-name": "div",
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:297:12",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:298:14",
                                                "data-orchids-name": "h4",
                                                className: "text-lg font-semibold mb-4",
                                                children: "Color Palette"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:299:14",
                                                "data-orchids-name": "div",
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:300:16",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:301:18",
                                                                "data-orchids-name": "div",
                                                                className: "h-12 w-12 rounded-lg border border-border shadow-lg",
                                                                style: {
                                                                    backgroundColor: brand.colors.primary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:305:18",
                                                                "data-orchids-name": "div",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:306:20",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-sm font-medium text-foreground",
                                                                        children: "Primary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:307:20",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-xs text-muted-foreground font-mono",
                                                                        children: brand.colors.primary
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    brand.colors.secondary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:311:18",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:312:20",
                                                                "data-orchids-name": "div",
                                                                className: "h-12 w-12 rounded-lg border border-border shadow-lg",
                                                                style: {
                                                                    backgroundColor: brand.colors.secondary
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:316:20",
                                                                "data-orchids-name": "div",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:317:22",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-sm font-medium text-foreground",
                                                                        children: "Secondary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 317,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:318:22",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-xs text-muted-foreground font-mono",
                                                                        children: brand.colors.secondary
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this),
                                                    brand.colors.accent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:323:18",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:324:20",
                                                                "data-orchids-name": "div",
                                                                className: "h-12 w-12 rounded-lg border border-border shadow-lg",
                                                                style: {
                                                                    backgroundColor: brand.colors.accent
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:328:20",
                                                                "data-orchids-name": "div",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:329:22",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-sm font-medium text-foreground",
                                                                        children: "Accent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:330:22",
                                                                        "data-orchids-name": "p",
                                                                        className: "text-xs text-muted-foreground font-mono",
                                                                        children: brand.colors.accent
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:338:12",
                                        "data-orchids-name": "div",
                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:339:14",
                                                "data-orchids-name": "h4",
                                                className: "text-lg font-semibold mb-4",
                                                children: "Typography"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:340:14",
                                                "data-orchids-name": "div",
                                                className: "space-y-4",
                                                children: [
                                                    brand.typography.heading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:342:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:343:20",
                                                                "data-orchids-name": "p",
                                                                className: "text-sm font-medium text-muted-foreground mb-1",
                                                                children: "Headings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:344:20",
                                                                "data-orchids-name": "p",
                                                                className: "text-base font-bold text-foreground",
                                                                children: brand.typography.heading
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this),
                                                    brand.typography.body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:348:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:349:20",
                                                                "data-orchids-name": "p",
                                                                className: "text-sm font-medium text-muted-foreground mb-1",
                                                                children: "Body Text"
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:350:20",
                                                                "data-orchids-name": "p",
                                                                className: "text-base text-foreground",
                                                                children: brand.typography.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ContentAssets.tsx:357:10",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:358:12",
                                        "data-orchids-name": "h4",
                                        className: "text-lg font-semibold mb-4",
                                        children: "Brand Voice & Positioning"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 358,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ContentAssets.tsx:359:12",
                                        "data-orchids-name": "div",
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:360:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:361:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                                        children: "Voice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:362:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-base text-foreground leading-relaxed",
                                                        children: brand.voice
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:364:14",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:365:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                                        children: "Positioning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:366:16",
                                                        "data-orchids-name": "p",
                                                        className: "text-base text-foreground leading-relaxed",
                                                        children: brand.positioning
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this),
                                            brand.mission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ContentAssets.tsx:369:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:370:18",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                                        children: "Mission"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:371:18",
                                                        "data-orchids-name": "p",
                                                        className: "text-base text-foreground leading-relaxed",
                                                        children: brand.mission
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 357,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                        "data-orchids-id": "src/components/ContentAssets.tsx:379:8",
                        "data-orchids-name": "TabsContent",
                        value: "wireframes",
                        className: "mt-6 space-y-6",
                        children: wireframes.map((wireframe, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": idx,
                                "data-orchids-id": "src/components/ContentAssets.tsx:381:12@wireframes",
                                "data-orchids-name": "div",
                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/ContentAssets.tsx:385:14@wireframes",
                                        "data-orchids-name": "h3",
                                        className: "text-xl font-semibold mb-4",
                                        children: [
                                            wireframe.page,
                                            " Page"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": idx,
                                        "data-orchids-id": "src/components/ContentAssets.tsx:387:14@wireframes",
                                        "data-orchids-name": "div",
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            wireframe.sections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:389:18@wireframes",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:390:20@wireframes",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                                        children: "Sections"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:391:20@wireframes",
                                                        "data-orchids-name": "ul",
                                                        className: "space-y-1",
                                                        children: wireframe.sections.map((section, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:393:24",
                                                                "data-orchids-name": "li",
                                                                className: "text-sm text-foreground flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:394:26",
                                                                        "data-orchids-name": "span",
                                                                        className: "text-primary",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 394,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:395:26",
                                                                        "data-orchids-name": "span",
                                                                        children: section
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, sIdx, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this),
                                            wireframe.components.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:403:18@wireframes",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:404:20@wireframes",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                                        children: "Components"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:405:20@wireframes",
                                                        "data-orchids-name": "ul",
                                                        className: "space-y-1",
                                                        children: wireframe.components.map((component, cIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:407:24",
                                                                "data-orchids-name": "li",
                                                                className: "text-sm text-foreground flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:408:26",
                                                                        "data-orchids-name": "span",
                                                                        className: "text-primary",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:409:26",
                                                                        "data-orchids-name": "span",
                                                                        children: component
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 409,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, cIdx, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this),
                                            wireframe.interactions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": idx,
                                                "data-orchids-id": "src/components/ContentAssets.tsx:417:18@wireframes",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:418:20@wireframes",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm font-medium text-muted-foreground mb-2",
                                                        children: "Interactions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        "data-map-index": idx,
                                                        "data-orchids-id": "src/components/ContentAssets.tsx:419:20@wireframes",
                                                        "data-orchids-name": "ul",
                                                        className: "space-y-1",
                                                        children: wireframe.interactions.map((interaction, iIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                "data-orchids-id": "src/components/ContentAssets.tsx:421:24",
                                                                "data-orchids-name": "li",
                                                                className: "text-sm text-foreground flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:422:26",
                                                                        "data-orchids-name": "span",
                                                                        className: "text-primary",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ContentAssets.tsx:423:26",
                                                                        "data-orchids-name": "span",
                                                                        children: interaction
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                        lineNumber: 423,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, iIdx, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
}}),
"[project]/hc & j stuff/12_59_am/src/lib/parsers/community-parser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseCommunityData": (()=>parseCommunityData)
});
function parseCommunityData(results) {
    const platforms = [];
    const insights = [];
    // Query 0: Reddit Analysis
    if (results[0]?.content) {
        const content = results[0].content;
        // Extract subreddits with regex
        const subredditMatches = content.matchAll(/r\/(\w+)[^\d]*?([\d.]+[KMB]?)\s*members?/gi);
        for (const match of subredditMatches){
            platforms.push({
                name: `r/${match[1]}`,
                type: 'reddit',
                memberCount: match[2],
                activity: 'Active',
                sentiment: extractSentiment(content),
                details: content.substring(0, 200)
            });
        }
        // Extract pain points as insights
        const painPointMatch = content.match(/pain point[s]?:([^]*?)(?=\n\n|\d\.|$)/i);
        if (painPointMatch) {
            insights.push(painPointMatch[1].trim().substring(0, 150));
        }
    }
    // Query 1: Facebook Groups
    if (results[1]?.content) {
        const content = results[1].content;
        const groupMatches = content.matchAll(/['"]([^'"]+)['"][^\d]*?([\d.]+[KMB]?)\s*members?/gi);
        for (const match of groupMatches){
            platforms.push({
                name: match[1],
                type: 'facebook',
                memberCount: match[2],
                activity: 'Active',
                details: content.substring(0, 200)
            });
        }
    }
    // Query 2: YouTube Analysis
    if (results[2]?.content) {
        const content = results[2].content;
        const channelMatches = content.matchAll(/(?:channel|creator)[:]\s*([^,\n]+)[^\d]*?([\d.]+[KMB]?)\s*subscriber/gi);
        for (const match of channelMatches){
            platforms.push({
                name: match[1].trim(),
                type: 'youtube',
                memberCount: match[2],
                activity: 'Active',
                details: content.substring(0, 200)
            });
        }
    }
    // Query 3: Startup Activity
    if (results[3]?.content) {
        const content = results[3].content;
        const startupCountMatch = content.match(/([\d.]+[KMB]?)\s*(?:new\s*)?startups?/i);
        if (startupCountMatch) {
            platforms.push({
                name: 'Startup Ecosystem',
                type: 'startup',
                memberCount: startupCountMatch[1],
                activity: 'Growing',
                details: content.substring(0, 200)
            });
        }
        // Extract market momentum
        const momentumMatch = content.match(/momentum[:\s]*(\w+)/i);
        if (momentumMatch) {
            insights.push(`Market momentum: ${momentumMatch[1]}`);
        }
    }
    // Calculate total reach
    let totalReach = 0;
    platforms.forEach((p)=>{
        const num = parseFloat(p.memberCount);
        const multiplier = p.memberCount.includes('M') ? 1000000 : p.memberCount.includes('K') ? 1000 : 1;
        totalReach += num * multiplier;
    });
    return {
        platforms: platforms.slice(0, 12),
        totalReach: formatNumber(totalReach),
        engagementLevel: platforms.length > 8 ? 'High' : platforms.length > 4 ? 'Medium' : 'Low',
        keyInsights: insights
    };
}
function extractSentiment(text) {
    if (/frustrated|angry|disappointed|terrible/i.test(text)) return 'Frustrated';
    if (/positive|excited|love|great|excellent/i.test(text)) return 'Positive';
    if (/mixed|moderate|neutral/i.test(text)) return 'Mixed';
    return 'Neutral';
}
function formatNumber(num) {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
}
}}),
"[project]/hc & j stuff/12_59_am/src/lib/parsers/trends-parser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseTrendsData": (()=>parseTrendsData)
});
function parseTrendsData(results) {
    const keywords = [];
    const dataPoints = [];
    const insights = [];
    let overallGrowth = 'N/A';
    let forecast = '';
    let seasonality = '';
    // Query 0: Search Keywords and Volumes
    if (results[0]?.content) {
        const content = results[0].content;
        // Extract keywords with volumes
        const keywordMatches = content.matchAll(/['"]([^'"]+?)['"][^\d]*?([\d,]+)\s*(?:searches?|volume|\/mo)/gi);
        for (const match of keywordMatches){
            keywords.push({
                keyword: match[1].trim(),
                volume: match[2].replace(/,/g, '')
            });
        }
        // Alternative pattern: "keyword - 12,400 searches"
        const altKeywordMatches = content.matchAll(/(?:keyword|term)[:\s]+['"]?([^'":\n]+?)['"]?\s*[-–]\s*([\d,]+[KMB]?)/gi);
        for (const match of altKeywordMatches){
            if (!keywords.find((k)=>k.keyword === match[1].trim())) {
                keywords.push({
                    keyword: match[1].trim(),
                    volume: match[2].replace(/,/g, '')
                });
            }
        }
        // Extract monthly data points from content like "Jan: 12,400" or "January 2024: 15,200"
        const monthDataMatches = content.matchAll(/(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s*(?:\d{4})?\s*[:\s]\s*([\d,]+)/gi);
        for (const match of monthDataMatches){
            dataPoints.push({
                date: match[0].split(':')[0].trim(),
                value: parseInt(match[1].replace(/,/g, ''))
            });
        }
    }
    // Query 1: Growth Trends
    if (results[1]?.content) {
        const content = results[1].content;
        // Extract growth percentage
        const growthMatch = content.match(/(?:growth|increase|rise)[^\d]*?([\d.]+)%/i);
        if (growthMatch) {
            overallGrowth = `${growthMatch[1]}%`;
        }
        // Extract year-over-year growth
        const yoyMatch = content.match(/(?:year[- ]over[- ]year|YoY)[^\d]*?([\d.]+)%/i);
        if (yoyMatch) {
            overallGrowth = `${yoyMatch[1]}% YoY`;
        }
        // Extract growth insights
        const growthInsightMatch = content.match(/(?:trend|growth|momentum)[:\s]+([^.]+\.)/i);
        if (growthInsightMatch) {
            insights.push(growthInsightMatch[1].trim());
        }
        // Add keyword growth data to keywords array
        const keywordGrowthMatches = content.matchAll(/['"]([^'"]+?)['"][^\d]*?([\d.]+)%\s*(?:growth|increase)/gi);
        for (const match of keywordGrowthMatches){
            const existing = keywords.find((k)=>k.keyword === match[1].trim());
            if (existing) {
                existing.growth = `${match[2]}%`;
            } else {
                keywords.push({
                    keyword: match[1].trim(),
                    growth: `${match[2]}%`
                });
            }
        }
    }
    // Query 2: Historical Data
    if (results[2]?.content) {
        const content = results[2].content;
        // Extract historical data points (quarters, years)
        const quarterMatches = content.matchAll(/(?:Q[1-4]\s*(?:\d{4})|(?:20\d{2}))[^\d]*?([\d,]+[KMB]?)/gi);
        for (const match of quarterMatches){
            dataPoints.push({
                date: match[0].split(/[\s:]/)[0],
                value: parseVolumeString(match[1])
            });
        }
        // Extract seasonality info
        const seasonalityMatch = content.match(/seasonality[:\s]+([^.]+\.)/i);
        if (seasonalityMatch) {
            seasonality = seasonalityMatch[1].trim();
        }
    }
    // Query 3: Future Forecasts
    if (results[3]?.content) {
        const content = results[3].content;
        // Extract forecast
        const forecastMatch = content.match(/(?:forecast|projected?|expected?)[^\d]*?([\d.]+[KMB]?)\s*(?:by|in)\s*(\d{4})/i);
        if (forecastMatch) {
            forecast = `${forecastMatch[1]} by ${forecastMatch[2]}`;
        }
        // Extract forecast growth rate
        const forecastGrowthMatch = content.match(/(?:projected|forecasted|expected)\s*(?:growth|CAGR)[^\d]*?([\d.]+)%/i);
        if (forecastGrowthMatch && !overallGrowth.includes('%')) {
            overallGrowth = `${forecastGrowthMatch[1]}% (projected)`;
        }
        // Extract trending topics
        const trendingMatch = content.match(/trending[:\s]+([^.]+\.)/i);
        if (trendingMatch) {
            insights.push(`Trending: ${trendingMatch[1].trim()}`);
        }
    }
    // Sort keywords by volume (descending)
    keywords.sort((a, b)=>{
        const volA = parseVolumeString(a.volume || '0');
        const volB = parseVolumeString(b.volume || '0');
        return volB - volA;
    });
    // Sort data points by date
    dataPoints.sort((a, b)=>{
        // Simple date comparison - can be enhanced
        return a.date.localeCompare(b.date);
    });
    return {
        keywords: keywords.slice(0, 10),
        dataPoints: dataPoints.slice(0, 12),
        overallGrowth,
        forecast,
        seasonality,
        insights: insights.slice(0, 5)
    };
}
function parseVolumeString(str) {
    const num = parseFloat(str.replace(/,/g, ''));
    if (str.includes('M')) return num * 1000000;
    if (str.includes('K')) return num * 1000;
    if (str.includes('B')) return num * 1000000000;
    return num;
}
}}),
"[project]/hc & j stuff/12_59_am/src/lib/parsers/execution-parser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseExecutionData": (()=>parseExecutionData)
});
function parseExecutionData(results) {
    const roadmap = [];
    const segments = [];
    const channels = [];
    const pricingTiers = [];
    const growthLoops = [];
    const risks = [];
    const teamPlan = [];
    // Query 0: 12-Month Roadmap
    if (results[0]?.content) {
        const content = results[0].content;
        // Extract phases - look for "Phase N:" or "Month X-Y:"
        const phaseMatches = content.matchAll(/(?:Phase\s+(\d+)|Months?\s+([\d-]+))[:\s]+([^\n]+)/gi);
        for (const match of phaseMatches){
            const phaseName = match[3].trim();
            const timeline = match[2] || `Phase ${match[1]}`;
            // Find the section for this phase
            const phaseRegex = new RegExp(`${escapeRegex(phaseName)}[\\s\\S]{0,800}`, 'i');
            const phaseSection = content.match(phaseRegex)?.[0] || '';
            roadmap.push({
                name: phaseName,
                timeline: timeline,
                activities: extractListItems(phaseSection, /(?:activities?|tasks?|actions?)[:\s]/i),
                milestones: extractListItems(phaseSection, /milestones?[:\s]/i),
                deliverables: extractListItems(phaseSection, /deliverables?[:\s]/i),
                successMetrics: extractListItems(phaseSection, /(?:success\s*metrics?|KPIs?)[:\s]/i),
                resources: extractListItems(phaseSection, /resources?(?:\s*needed)?[:\s]/i),
                transitionCriteria: extractFirstLine(phaseSection, /transition\s*criteria[:\s]/i)
            });
        }
        // If no phases found, try alternative format
        if (roadmap.length === 0) {
            const sections = content.split(/\n\n+/);
            sections.forEach((section, idx)=>{
                if (section.length > 50 && idx < 5) {
                    const firstLine = section.split('\n')[0];
                    roadmap.push({
                        name: firstLine.substring(0, 100),
                        timeline: `Phase ${idx + 1}`,
                        activities: extractListItems(section, /(?:activities?|tasks?)[:\s]/i),
                        milestones: extractListItems(section, /milestones?[:\s]/i),
                        deliverables: extractListItems(section, /deliverables?[:\s]/i),
                        successMetrics: extractListItems(section, /metrics?[:\s]/i),
                        resources: extractListItems(section, /resources?[:\s]/i)
                    });
                }
            });
        }
    }
    // Query 1: GTM Strategy
    if (results[1]?.content) {
        const content = results[1].content;
        // Extract customer segments
        const segmentMatches = content.matchAll(/Segment\s+(\d+)[:\s]+([^\n]+?)(?:\n|$)/gi);
        for (const match of segmentMatches){
            segments.push({
                name: match[2].trim(),
                description: extractFirstLine(content, new RegExp(`${escapeRegex(match[2])}[:\\s]+([^\\n]+)`, 'i')) || '',
                priority: parseInt(match[1])
            });
        }
        // Extract acquisition channels
        const channelMatches = content.matchAll(/Channel[:\s]+([^\n(]+?)(?:\(([^)]+)\))?[^\n]*?(?:Priority[:\s]+(High|Medium|Low)|CAC[:\s]+\$?([\d,]+))?/gi);
        for (const match of channelMatches){
            const channelName = match[1].trim();
            const channelSection = content.substring(match.index, match.index + 400);
            channels.push({
                name: channelName,
                priority: match[3] || 'Medium',
                cac: match[4] ? `$${match[4]}` : undefined,
                tactics: extractListItems(channelSection, /(?:tactics?|strategies?)[:\s]/i),
                timeline: extractFirstLine(channelSection, /timeline[:\s]/i)
            });
        }
        // Extract pricing tiers
        const tierMatches = content.matchAll(/(?:Tier|Plan)[:\s]+([^\n$]+?)[:\s]+\$?([\d,]+)(?:\/mo|\/month)?/gi);
        for (const match of tierMatches){
            const tierSection = content.substring(match.index, match.index + 300);
            pricingTiers.push({
                name: match[1].trim(),
                price: `$${match[2]}/mo`,
                features: extractListItems(tierSection, /features?[:\s]/i)
            });
        }
        // Extract growth loops
        const loopMatches = content.matchAll(/(?:Loop|Growth\s+Loop)\s*\d*[:\s]+([^.\n]+)/gi);
        for (const match of loopMatches){
            growthLoops.push(match[1].trim());
        }
    }
    // Query 2: Risk Assessment
    if (results[2]?.content) {
        const content = results[2].content;
        // Extract risks
        const riskMatches = content.matchAll(/Risk\s*\d*[:\s]+([^\n]+)/gi);
        for (const match of riskMatches){
            const riskName = match[1].trim();
            const riskSection = content.substring(match.index, Math.min(match.index + 500, content.length));
            const severityMatch = riskSection.match(/Severity[:\s]+(High|Medium|Low)/i);
            const mitigationMatch = riskSection.match(/Mitigation[:\s]+([^.\n]+)/i);
            const contingencyMatch = riskSection.match(/Contingency[:\s]+([^.\n]+)/i);
            risks.push({
                category: riskName,
                severity: severityMatch?.[1] || 'Medium',
                description: extractFirstLine(riskSection, /(?:Description|Risk)[:\s]/i) || riskName,
                mitigation: mitigationMatch?.[1]?.trim() || 'To be determined',
                contingency: contingencyMatch?.[1]?.trim()
            });
        }
    }
    // Query 3: Team Building Plan
    if (results[3]?.content) {
        const content = results[3].content;
        // Extract roles with hiring timeline
        const roleMatches = content.matchAll(/(?:Month|Year)\s+([\d-]+)[:\s]+(?:Hire\s+)?([^($\n]+?)(?:\(?\$?([\d,]+K?))?/gi);
        for (const match of roleMatches){
            const roleSection = content.substring(match.index, Math.min(match.index + 400, content.length));
            teamPlan.push({
                role: match[2].trim(),
                timeline: `Month ${match[1]}`,
                salary: match[3] ? `$${match[3]}` : undefined,
                skills: extractListItems(roleSection, /(?:skills?|requirements?)[:\s]/i)
            });
        }
        // Alternative pattern: "Role: Full-stack Engineer"
        if (teamPlan.length === 0) {
            const altRoleMatches = content.matchAll(/Role[:\s]+([^\n]+)/gi);
            for (const match of altRoleMatches){
                const roleSection = content.substring(match.index, Math.min(match.index + 400, content.length));
                const timelineMatch = roleSection.match(/(?:Timeline|When)[:\s]+([^\n]+)/i);
                const salaryMatch = roleSection.match(/Salary[:\s]+\$?([\d,]+K?)/i);
                teamPlan.push({
                    role: match[1].trim(),
                    timeline: timelineMatch?.[1]?.trim() || 'TBD',
                    salary: salaryMatch ? `$${salaryMatch[1]}` : undefined,
                    skills: extractListItems(roleSection, /skills?[:\s]/i)
                });
            }
        }
    }
    return {
        roadmap: roadmap.slice(0, 6),
        gtmStrategy: {
            segments: segments.slice(0, 5),
            channels: channels.slice(0, 8),
            pricingTiers: pricingTiers.slice(0, 4),
            growthLoops: growthLoops.slice(0, 5)
        },
        risks: risks.slice(0, 8),
        teamPlan: teamPlan.slice(0, 10)
    };
}
// Helper function to extract bullet points or numbered lists
function extractListItems(text, headerPattern) {
    const items = [];
    const headerMatch = text.match(headerPattern);
    if (!headerMatch) return items;
    const startIndex = headerMatch.index + headerMatch[0].length;
    const section = text.substring(startIndex, Math.min(startIndex + 500, text.length));
    // Match bullet points (-, *, •) or numbered lists (1., 2.)
    const listMatches = section.matchAll(/(?:^|\n)\s*(?:[-*•]|\d+\.)\s+([^\n]+)/g);
    for (const match of listMatches){
        items.push(match[1].trim());
    }
    return items.slice(0, 8);
}
// Helper function to extract first line after a pattern
function extractFirstLine(text, pattern) {
    const match = text.match(pattern);
    if (!match) return undefined;
    const startIndex = match.index + match[0].length;
    const remaining = text.substring(startIndex);
    const firstLine = remaining.split('\n')[0].trim();
    return firstLine.substring(0, 200);
}
// Helper function to escape regex special characters
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
}}),
"[project]/hc & j stuff/12_59_am/src/lib/parsers/content-parser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "parseContentData": (()=>parseContentData)
});
function parseContentData(results) {
    const landingPage = [];
    const ads = [];
    let brand = {
        colors: {
            primary: '#000000'
        },
        typography: {},
        voice: '',
        positioning: ''
    };
    const wireframes = [];
    // Query 0: Landing Page Copy
    if (results[0]?.content) {
        const content = results[0].content;
        // Extract Hero Section
        const heroHeadline = extractFirstMatch(content, /(?:Hero\s*)?Headline[:\s]+['"]?([^'"\n]+)/i);
        const heroSubheadline = extractFirstMatch(content, /Subheadline[:\s]+['"]?([^'"\n]+)/i);
        if (heroHeadline) {
            landingPage.push({
                type: 'hero',
                headline: heroHeadline,
                subheadline: heroSubheadline || '',
                content: `${heroHeadline}\n${heroSubheadline || ''}`
            });
        }
        // Extract Problem Section
        const problemSection = extractSection(content, /Problem[:\s]/i, 300);
        if (problemSection) {
            landingPage.push({
                type: 'problem',
                content: problemSection,
                items: extractListItems(problemSection)
            });
        }
        // Extract Solution/Benefits Section
        const benefitsSection = extractSection(content, /(?:Benefits?|Solution)[:\s]/i, 400);
        if (benefitsSection) {
            landingPage.push({
                type: 'benefits',
                content: benefitsSection,
                items: extractListItems(benefitsSection)
            });
        }
        // Extract Features Section
        const featuresSection = extractSection(content, /Features?[:\s]/i, 400);
        if (featuresSection) {
            landingPage.push({
                type: 'features',
                content: featuresSection,
                items: extractListItems(featuresSection)
            });
        }
        // Extract FAQ Section
        const faqSection = extractSection(content, /FAQ|Frequently Asked/i, 500);
        if (faqSection) {
            landingPage.push({
                type: 'faq',
                content: faqSection,
                items: extractFAQs(faqSection)
            });
        }
        // Extract CTA
        const ctaMatch = extractFirstMatch(content, /(?:CTA|Call[- ]to[- ]Action)[:\s]+['"]?([^'"\n]+)/i);
        if (ctaMatch) {
            landingPage.push({
                type: 'cta',
                content: ctaMatch
            });
        }
    }
    // Query 1: Ad Concepts
    if (results[1]?.content) {
        const content = results[1].content;
        // Extract individual ad concepts
        const adMatches = content.matchAll(/(?:Ad\s*Concept\s*#?\d+|Platform)[:\s]+(Facebook|Instagram|LinkedIn|Google|Twitter|TikTok)[^\n]*/gi);
        for (const match of adMatches){
            const platform = match[1];
            const adSection = content.substring(match.index, Math.min(match.index + 600, content.length));
            const headline = extractFirstMatch(adSection, /Headline[:\s]+['"]?([^'"\n]+)/i);
            const body = extractFirstMatch(adSection, /Body[:\s]+['"]?([^'"\n]+)/i);
            const cta = extractFirstMatch(adSection, /CTA[:\s]+['"]?([^'"\n]+)/i);
            const targeting = extractFirstMatch(adSection, /Target(?:ing)?(?:\s+Audience)?[:\s]+([^.\n]+)/i);
            const imageDesc = extractFirstMatch(adSection, /Image[:\s]+([^\n]+)/i);
            if (headline && body) {
                ads.push({
                    platform,
                    headline,
                    body,
                    cta: cta || 'Learn More',
                    targeting,
                    imageDescription: imageDesc,
                    midjourney_prompt: imageDesc ? generateMidjourneyPrompt(imageDesc, platform) : undefined
                });
            }
        }
    }
    // Query 2: Brand Package
    if (results[2]?.content) {
        const content = results[2].content;
        // Extract colors
        const primaryColor = extractFirstMatch(content, /Primary\s*Color[:\s]+([#A-F0-9]{6,7})/i);
        const secondaryColor = extractFirstMatch(content, /Secondary\s*Color[:\s]+([#A-F0-9]{6,7})/i);
        const accentColor = extractFirstMatch(content, /Accent\s*Color[:\s]+([#A-F0-9]{6,7})/i);
        // Alternative: "Color: #4CAF50 (Green - description)"
        const colorMatch = content.match(/Color[:\s]+([#A-F0-9]{6,7})/i);
        // Extract typography
        const headingFont = extractFirstMatch(content, /(?:Heading|Primary)\s*(?:Font|Typography)[:\s]+([^\n(]+)/i);
        const bodyFont = extractFirstMatch(content, /(?:Body|Secondary)\s*(?:Font|Typography)[:\s]+([^\n(]+)/i);
        // Extract brand voice
        const voiceSection = extractSection(content, /(?:Brand\s*)?Voice[:\s]/i, 200);
        const positioningSection = extractSection(content, /Positioning[:\s]/i, 200);
        const missionSection = extractSection(content, /Mission[:\s]/i, 200);
        brand = {
            colors: {
                primary: primaryColor || colorMatch?.[1] || '#3B82F6',
                secondary: secondaryColor,
                accent: accentColor
            },
            typography: {
                heading: headingFont?.trim(),
                body: bodyFont?.trim()
            },
            voice: voiceSection || 'Professional, friendly, and approachable',
            positioning: positioningSection || '',
            mission: missionSection
        };
    }
    // Query 3: Wireframes
    if (results[3]?.content) {
        const content = results[3].content;
        // Extract wireframe for each page type
        const pageTypes = [
            'Landing',
            'Pricing',
            'Signup',
            'Dashboard',
            'Home'
        ];
        for (const pageType of pageTypes){
            const pageSection = extractSection(content, new RegExp(`${pageType}\\s*Page[:\s]`, 'i'), 600);
            if (pageSection) {
                wireframes.push({
                    page: pageType,
                    sections: extractListItems(pageSection, /Sections?[:\s]/i),
                    components: extractListItems(pageSection, /Components?[:\s]/i),
                    interactions: extractListItems(pageSection, /Interactions?[:\s]/i)
                });
            }
        }
    }
    // Generate AI Prompts
    const aiPrompts = generateAIPrompts(landingPage, ads, brand);
    return {
        landingPage,
        ads: ads.slice(0, 5),
        brand,
        wireframes,
        aiPrompts
    };
}
// Helper: Extract first match from regex
function extractFirstMatch(text, pattern) {
    const match = text.match(pattern);
    return match?.[1]?.trim().substring(0, 200);
}
// Helper: Extract a section after a header
function extractSection(text, headerPattern, maxLength = 300) {
    const match = text.match(headerPattern);
    if (!match) return undefined;
    const startIndex = match.index + match[0].length;
    const section = text.substring(startIndex, Math.min(startIndex + maxLength, text.length));
    // Get until next major section (double newline or next header)
    const endMatch = section.match(/\n\n|(?:\n[A-Z][a-z]+:)/);
    const endIndex = endMatch ? endMatch.index : section.length;
    return section.substring(0, endIndex).trim();
}
// Helper: Extract list items (bullets or numbered)
function extractListItems(text, headerPattern) {
    const items = [];
    let searchText = text;
    if (headerPattern) {
        const match = text.match(headerPattern);
        if (match) {
            searchText = text.substring(match.index + match[0].length, Math.min(match.index + 600, text.length));
        } else {
            return items;
        }
    }
    const listMatches = searchText.matchAll(/(?:^|\n)\s*(?:[-*•]|\d+\.)\s+([^\n]+)/g);
    for (const match of listMatches){
        items.push(match[1].trim());
    }
    return items.slice(0, 10);
}
// Helper: Extract FAQ items
function extractFAQs(text) {
    const faqs = [];
    // Pattern: "Q: question" or "Question: text"
    const faqMatches = text.matchAll(/(?:Q(?:uestion)?|FAQ)\s*\d*[:\s]+([^?\n]+\?)/gi);
    for (const match of faqMatches){
        faqs.push(match[1].trim());
    }
    return faqs.slice(0, 6);
}
// Helper: Generate Midjourney prompt
function generateMidjourneyPrompt(imageDesc, platform) {
    return `/imagine ${imageDesc}, professional ${platform} ad creative, high quality, modern aesthetic, clean composition, vibrant colors --ar 1:1 --v 6`;
}
// Helper: Generate AI prompts for users to use with ChatGPT/Claude/etc
function generateAIPrompts(landingPage, ads, brand) {
    // Landing Page Prompt
    const heroSection = landingPage.find((s)=>s.type === 'hero');
    const benefitsSection = landingPage.find((s)=>s.type === 'benefits');
    const featuresSection = landingPage.find((s)=>s.type === 'features');
    const landingPagePrompt = `Create a modern, responsive landing page with the following structure:

HERO SECTION:
Headline: ${heroSection?.headline || '[Your headline here]'}
Subheadline: ${heroSection?.subheadline || '[Your subheadline here]'}

BENEFITS:
${benefitsSection?.items?.map((item)=>`• ${item}`).join('\n') || '[List key benefits]'}

FEATURES:
${featuresSection?.items?.map((item)=>`• ${item}`).join('\n') || '[List main features]'}

DESIGN STYLE:
- Color scheme: ${brand.colors.primary} (primary)${brand.colors.secondary ? `, ${brand.colors.secondary} (secondary)` : ''}
- Typography: ${brand.typography.heading || 'Modern sans-serif'} for headings
- Brand voice: ${brand.voice}

Please create the HTML/CSS code for this landing page with a modern, clean design.`;
    // Ad Prompts
    const adPrompts = ads.map((ad, idx)=>`AD CONCEPT #${idx + 1} - ${ad.platform}

Headline: "${ad.headline}"
Body Copy: "${ad.body}"
Call-to-Action: "${ad.cta}"
Target Audience: ${ad.targeting || 'Target audience based on product'}

IMAGE GENERATION PROMPT (for Midjourney/DALL-E):
${ad.midjourney_prompt || `Create a ${ad.platform} ad image: ${ad.imageDescription || 'eye-catching visual'}`}

Use this to create ad creative in Canva or generate the image using AI image generators.`);
    // Brand Prompt
    const brandPrompt = `BRAND PACKAGE SUMMARY

COLORS:
Primary: ${brand.colors.primary}
${brand.colors.secondary ? `Secondary: ${brand.colors.secondary}` : ''}
${brand.colors.accent ? `Accent: ${brand.colors.accent}` : ''}

TYPOGRAPHY:
${brand.typography.heading ? `Headings: ${brand.typography.heading}` : 'Use a bold, modern sans-serif'}
${brand.typography.body ? `Body: ${brand.typography.body}` : 'Use a clean, readable sans-serif'}

BRAND VOICE: ${brand.voice}

POSITIONING: ${brand.positioning}

${brand.mission ? `MISSION: ${brand.mission}` : ''}

Use this brand package as a foundation for all your marketing materials, website design, and communication.`;
    return {
        landingPagePrompt,
        adPrompts,
        brandPrompt
    };
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
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ui/progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$SourcesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/SourcesModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$CompetitorGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/CompetitorGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$CommunityDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/CommunityDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ExecutionPhaseModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ExecutionPhaseModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ContentAssets$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/components/ContentAssets.tsx [app-ssr] (ecmascript)");
// Import all parsers
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$community$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/parsers/community-parser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$trends$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/parsers/trends-parser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$execution$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/parsers/execution-parser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$content$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hc & j stuff/12_59_am/src/lib/parsers/content-parser.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
function ResultsPage({ idea, report, onBack }) {
    const [sourcesOpen, setSourcesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPhase, setSelectedPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Parse all data from report
    const communityData = report?.community ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$community$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCommunityData"])(report.community) : null;
    const trendsData = report?.trends ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$trends$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseTrendsData"])(report.trends) : null;
    const executionData = report?.execution ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$execution$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseExecutionData"])(report.execution) : null;
    const contentData = report?.content ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$lib$2f$parsers$2f$content$2d$parser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseContentData"])(report.content) : null;
    // Calculate real scores from actual data
    const calculateScores = ()=>{
        const scores = {
            marketViability: 75,
            problemSeverity: 75,
            competitionLevel: 75,
            communityInterest: 75,
            executionFeasibility: 75,
            whyNowScore: 75
        };
        // Market Viability - based on TAM and CAGR from market data
        if (report?.market && Array.isArray(report.market)) {
            const marketContent = report.market.map((r)=>r.content || '').join(' ');
            const tamMatch = marketContent.match(/([\d.]+)\s*B(?:illion)?/i);
            const cagrMatch = marketContent.match(/(\d+)%.*?CAGR/i);
            if (tamMatch && parseFloat(tamMatch[1]) > 10) scores.marketViability = 90;
            else if (tamMatch && parseFloat(tamMatch[1]) > 5) scores.marketViability = 80;
            if (cagrMatch && parseInt(cagrMatch[1]) > 15) scores.marketViability = Math.min(95, scores.marketViability + 10);
        }
        // Community Interest - based on parsed community data
        if (communityData && communityData.platforms.length > 0) {
            if (communityData.engagementLevel === 'High') scores.communityInterest = 92;
            else if (communityData.engagementLevel === 'Medium') scores.communityInterest = 78;
            else scores.communityInterest = 65;
        }
        // Competition Level - inverse score (more competition = lower score)
        if (report?.competition && Array.isArray(report.competition)) {
            const compCount = report.competition.length;
            if (compCount > 10) scores.competitionLevel = 60;
            else if (compCount > 5) scores.competitionLevel = 70;
            else scores.competitionLevel = 85;
        }
        // Trends Growth - based on parsed trends data
        if (trendsData && trendsData.overallGrowth) {
            const growthMatch = trendsData.overallGrowth.match(/(\d+)/);
            if (growthMatch) {
                const growth = parseInt(growthMatch[1]);
                if (growth > 50) scores.problemSeverity = 90;
                else if (growth > 20) scores.problemSeverity = 80;
            }
        }
        return scores;
    };
    const scores = calculateScores();
    const overallScore = Math.round(Object.values(scores).reduce((a, b)=>a + b, 0) / Object.values(scores).length);
    const scoreCards = [
        {
            title: "Market Viability",
            score: scores.marketViability,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-green-500",
            description: "Market demand and growth potential"
        },
        {
            title: "Community Interest",
            score: scores.communityInterest,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-blue-500",
            description: "Active community engagement and demand"
        },
        {
            title: "Competition Level",
            score: scores.competitionLevel,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-orange-500",
            description: "Competitive landscape analysis"
        },
        {
            title: "Trend Growth",
            score: scores.problemSeverity,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-purple-500",
            description: "Search volume and interest trends"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ResultsPage.tsx:125:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:127:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:130:6",
                "data-orchids-name": "div",
                className: "border-b border-primary/20 bg-card/70 backdrop-blur-xl sticky top-0 z-40 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ResultsPage.tsx:131:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:132:10",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:133:12",
                                "data-orchids-name": "Button",
                                variant: "ghost",
                                size: "icon",
                                onClick: onBack,
                                className: "hover:bg-primary/20 hover:text-primary transition-all duration-300 rounded-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    "data-orchids-id": "src/components/ResultsPage.tsx:139:14",
                                    "data-orchids-name": "ArrowLeft",
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:141:12",
                                "data-orchids-name": "div",
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:142:14",
                                        "data-orchids-name": "h1",
                                        className: "text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent",
                                        children: "Analysis Results"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:145:14",
                                        "data-orchids-name": "p",
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            '"',
                                            idea,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:147:12",
                                "data-orchids-name": "Button",
                                variant: "outline",
                                onClick: ()=>setSourcesOpen(true),
                                className: "flex items-center gap-2 hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:152:14",
                                        "data-orchids-name": "ExternalLink",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    "View Sources"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:155:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-3 glass-card px-4 py-2 rounded-xl border border-primary/30 backdrop-blur-xl bg-card/80 shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:156:14",
                                        "data-orchids-name": "Award",
                                        className: "h-8 w-8 text-primary animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:157:14",
                                        "data-orchids-name": "div",
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:158:16",
                                                "data-orchids-name": "p",
                                                className: "text-3xl font-bold text-primary",
                                                children: overallScore
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:159:16",
                                                "data-orchids-name": "p",
                                                className: "text-xs text-muted-foreground",
                                                children: "Overall Score"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ResultsPage.tsx:166:6",
                "data-orchids-name": "div",
                className: "container mx-auto px-4 py-8 space-y-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:168:8",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:169:10",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:170:12",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:171:14",
                                                "data-orchids-name": "Award",
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this),
                                            "Executive Summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:174:12",
                                        "data-orchids-name": "CardDescription",
                                        className: "text-base",
                                        children: "AI-powered analysis of your business idea"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:176:10",
                                "data-orchids-name": "CardContent",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:177:12",
                                        "data-orchids-name": "p",
                                        className: "text-foreground leading-relaxed text-lg",
                                        children: report?.executiveSummary || "Your idea shows strong potential in the current market landscape. Analysis includes market research, competition insights, community validation, and execution roadmap."
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:180:12",
                                        "data-orchids-name": "div",
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            overallScore > 80 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:182:16",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "High Potential"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            communityData && communityData.platforms.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:187:16",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "Active Community"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            executionData && executionData.roadmap.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:192:16",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border border-purple-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "Clear Roadmap"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            trendsData && trendsData.keywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:197:16",
                                                "data-orchids-name": "Badge",
                                                variant: "default",
                                                className: "bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-500/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium",
                                                children: "Growing Demand"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ResultsPage.tsx:206:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:207:10",
                                "data-orchids-name": "h2",
                                className: "text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent",
                                children: "Performance Metrics"
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ResultsPage.tsx:210:10",
                                "data-orchids-name": "div",
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: scoreCards.map((card)=>{
                                    const Icon = card.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:214:16@scoreCards",
                                        "data-orchids-name": "Card",
                                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/20 shadow-xl hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-300 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:218:18@scoreCards",
                                                "data-orchids-name": "CardHeader",
                                                className: "pb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:219:20@scoreCards",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:220:22@scoreCards",
                                                                "data-orchids-name": "div",
                                                                className: `p-2 rounded-xl bg-gradient-to-br ${card.color.replace('text-', 'from-')}/20 to-transparent border border-${card.color.replace('text-', '')}/30`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    "data-orchids-id": "src/components/ResultsPage.tsx:221:24@scoreCards",
                                                                    "data-orchids-name": "Icon",
                                                                    className: `h-6 w-6 ${card.color}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:223:22@scoreCards",
                                                                "data-orchids-name": "span",
                                                                className: "text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300",
                                                                children: card.score
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:227:20@scoreCards",
                                                        "data-orchids-name": "CardTitle",
                                                        className: "text-base mt-3",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:229:18@scoreCards",
                                                "data-orchids-name": "CardContent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: card.score,
                                                        className: "h-2.5 mb-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:231:20@scoreCards",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-muted-foreground leading-relaxed",
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, card.title, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    report?.competition && report.competition.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$CompetitorGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:241:10",
                        "data-orchids-name": "CompetitorGrid",
                        competitors: [],
                        onCompetitorClick: (comp)=>{
                            // Show competitor modal
                            console.log('Competitor clicked:', comp);
                        }
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    communityData && communityData.platforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$CommunityDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:252:10",
                        "data-orchids-name": "CommunityDetails",
                        platforms: communityData.platforms,
                        totalReach: communityData.totalReach,
                        engagementLevel: communityData.engagementLevel,
                        keyInsights: communityData.keyInsights
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this),
                    trendsData && trendsData.keywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:262:10",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:263:12",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:264:14",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:265:16",
                                                "data-orchids-name": "TrendingUp",
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this),
                                            "Trend Analysis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:268:14",
                                        "data-orchids-name": "CardDescription",
                                        className: "text-base",
                                        children: [
                                            "Tracking ",
                                            trendsData.keywords.length,
                                            " keywords with ",
                                            trendsData.overallGrowth,
                                            " growth"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:272:12",
                                "data-orchids-name": "CardContent",
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:274:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:275:16",
                                                "data-orchids-name": "p",
                                                className: "text-sm font-medium text-muted-foreground mb-3",
                                                children: "Top Keywords:"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:276:16",
                                                "data-orchids-name": "div",
                                                className: "flex flex-wrap gap-2",
                                                children: trendsData.keywords.slice(0, 8).map((kw, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:278:20",
                                                        "data-orchids-name": "Badge",
                                                        variant: "outline",
                                                        className: "px-3 py-1.5",
                                                        children: [
                                                            kw.keyword,
                                                            kw.volume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:280:36",
                                                                "data-orchids-name": "span",
                                                                className: "ml-2 text-primary",
                                                                children: kw.volume
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 37
                                                            }, this),
                                                            kw.growth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:281:36",
                                                                "data-orchids-name": "span",
                                                                className: "ml-1 text-green-400",
                                                                children: [
                                                                    "↑",
                                                                    kw.growth
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:288:14",
                                        "data-orchids-name": "div",
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:289:16",
                                                "data-orchids-name": "div",
                                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:290:18",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mb-1",
                                                        children: "Overall Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:291:18",
                                                        "data-orchids-name": "p",
                                                        className: "text-3xl font-bold text-green-400",
                                                        children: trendsData.overallGrowth
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            trendsData.forecast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:294:18",
                                                "data-orchids-name": "div",
                                                className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/30 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:295:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mb-1",
                                                        children: "Forecast"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:296:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xl font-bold text-foreground",
                                                        children: trendsData.forecast
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, this),
                                    trendsData.insights && trendsData.insights.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:303:16",
                                        "data-orchids-name": "div",
                                        className: "space-y-2",
                                        children: trendsData.insights.map((insight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:305:20",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:306:22",
                                                        "data-orchids-name": "span",
                                                        className: "text-primary",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, this),
                                                    insight
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    executionData && executionData.roadmap.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:318:10",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:319:12",
                                "data-orchids-name": "CardHeader",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:320:14",
                                        "data-orchids-name": "CardTitle",
                                        className: "flex items-center gap-2 text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:321:16",
                                                "data-orchids-name": "TrendingUp",
                                                className: "h-6 w-6 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            "Execution Timeline"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:324:14",
                                        "data-orchids-name": "CardDescription",
                                        className: "text-base",
                                        children: "Click any phase to see detailed guide"
                                    }, void 0, false, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:328:12",
                                "data-orchids-name": "CardContent",
                                className: "space-y-4",
                                children: executionData.roadmap.map((phase, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:330:16",
                                        "data-orchids-name": "div",
                                        className: "flex gap-4 group cursor-pointer",
                                        onClick: ()=>setSelectedPhase(phase),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:335:18",
                                                "data-orchids-name": "div",
                                                className: "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:336:20",
                                                        "data-orchids-name": "div",
                                                        className: "w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all duration-300 shadow-lg bg-gradient-to-br from-primary/30 to-blue-500/30 text-primary border border-primary/40 group-hover:scale-110",
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    index < executionData.roadmap.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:340:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-1 h-full bg-gradient-to-b from-primary/50 to-border mt-2 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:343:18",
                                                "data-orchids-name": "div",
                                                className: "flex-1 pb-8 glass-card backdrop-blur-md bg-card/30 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:344:20",
                                                        "data-orchids-name": "p",
                                                        className: "font-semibold text-foreground text-lg mb-1",
                                                        children: phase.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:345:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground mb-2",
                                                        children: phase.timeline
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:346:20",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-primary",
                                                        children: "Click to see detailed guide →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    executionData && executionData.gtmStrategy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:356:10",
                        "data-orchids-name": "Card",
                        className: "glass-card backdrop-blur-xl bg-card/70 border-primary/30 shadow-2xl hover:border-primary/50 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:357:12",
                                "data-orchids-name": "CardHeader",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    "data-orchids-id": "src/components/ResultsPage.tsx:358:14",
                                    "data-orchids-name": "CardTitle",
                                    className: "flex items-center gap-2 text-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            "data-orchids-id": "src/components/ResultsPage.tsx:359:16",
                                            "data-orchids-name": "TrendingUp",
                                            className: "h-6 w-6 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this),
                                        "Go-to-Market Strategy"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                "data-orchids-id": "src/components/ResultsPage.tsx:363:12",
                                "data-orchids-name": "CardContent",
                                className: "space-y-6",
                                children: [
                                    executionData.gtmStrategy.segments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:366:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:367:18",
                                                "data-orchids-name": "h4",
                                                className: "text-lg font-semibold mb-3",
                                                children: "Target Segments"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:368:18",
                                                "data-orchids-name": "div",
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                children: executionData.gtmStrategy.segments.map((seg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:370:22",
                                                        "data-orchids-name": "div",
                                                        className: "glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:371:24",
                                                                "data-orchids-name": "p",
                                                                className: "font-semibold text-foreground",
                                                                children: seg.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:372:24",
                                                                "data-orchids-name": "p",
                                                                className: "text-sm text-muted-foreground mt-1",
                                                                children: seg.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 368,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this),
                                    executionData.gtmStrategy.channels.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ResultsPage.tsx:381:16",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:382:18",
                                                "data-orchids-name": "h4",
                                                className: "text-lg font-semibold mb-3",
                                                children: "Acquisition Channels"
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 382,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/ResultsPage.tsx:383:18",
                                                "data-orchids-name": "div",
                                                className: "space-y-2",
                                                children: executionData.gtmStrategy.channels.slice(0, 5).map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/ResultsPage.tsx:385:22",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center justify-between p-3 glass-card backdrop-blur-md bg-card/50 rounded-lg border border-primary/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:386:24",
                                                                "data-orchids-name": "span",
                                                                className: "font-medium text-foreground",
                                                                children: ch.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/components/ResultsPage.tsx:387:24",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    ch.cac && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:388:37",
                                                                        "data-orchids-name": "span",
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: [
                                                                            "CAC: ",
                                                                            ch.cac
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 38
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        "data-orchids-id": "src/components/ResultsPage.tsx:389:26",
                                                                        "data-orchids-name": "Badge",
                                                                        variant: ch.priority === 'High' ? 'default' : 'secondary',
                                                                        children: ch.priority
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                        lineNumber: 389,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this),
                    contentData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ContentAssets$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "src/components/ResultsPage.tsx:404:10",
                        "data-orchids-name": "ContentAssets",
                        landingPage: contentData.landingPage,
                        ads: contentData.ads,
                        brand: contentData.brand,
                        wireframes: contentData.wireframes,
                        aiPrompts: contentData.aiPrompts
                    }, void 0, false, {
                        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$SourcesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/components/ResultsPage.tsx:415:6",
                "data-orchids-name": "SourcesModal",
                open: sourcesOpen,
                onClose: ()=>setSourcesOpen(false),
                sources: report?.sources || {}
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hc__$26$__j__stuff$2f$12_59_am$2f$src$2f$components$2f$ExecutionPhaseModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "src/components/ResultsPage.tsx:421:6",
                "data-orchids-name": "ExecutionPhaseModal",
                open: !!selectedPhase,
                onClose: ()=>setSelectedPhase(null),
                phase: selectedPhase
            }, void 0, false, {
                fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hc & j stuff/12_59_am/src/components/ResultsPage.tsx",
        lineNumber: 125,
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

//# sourceMappingURL=hc%20%26%20j%20stuff_12_59_am_src_f666f77b._.js.map