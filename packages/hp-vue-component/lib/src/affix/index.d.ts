export declare const HpAffix: import("@hp-vue-component/utils").SFCWithInstall<import("vue").DefineComponent<{
    offsetTop: {
        type: NumberConstructor;
        required: false;
    };
    offsetBottom: {
        type: NumberConstructor;
        required: false;
    };
    target: {
        type: null;
        required: false;
        default: () => Window & typeof globalThis;
    };
}, {
    props: {
        offsetTop?: number | undefined;
        offsetBottom?: number | undefined;
        target: Window | HTMLElement;
    };
    emits: (e: "change", fixed: "top" | "bottom" | undefined) => void;
    affixRoot: import("vue").Ref<HTMLDivElement | undefined>;
    fixed: import("vue").Ref<"top" | "bottom" | undefined>;
    offset: import("vue").Ref<number>;
    windowSize: {
        width: import("vue").Ref<number>;
        height: import("vue").Ref<number>;
    };
    rootRect: {
        height: import("vue").Ref<number>;
        bottom: import("vue").Ref<number>;
        left: import("vue").Ref<number>;
        right: import("vue").Ref<number>;
        top: import("vue").Ref<number>;
        width: import("vue").Ref<number>;
        x: import("vue").Ref<number>;
        y: import("vue").Ref<number>;
        update: () => void;
    };
    targetRect: import("vue").ComputedRef<{
        height: import("vue").Ref<number>;
        bottom: import("vue").Ref<number>;
        left: import("vue").Ref<number>;
        right: import("vue").Ref<number>;
        top: import("vue").Ref<number>;
        width: import("vue").Ref<number>;
        x: import("vue").Ref<number>;
        y: import("vue").Ref<number>;
        update: () => void;
    }>;
    rootStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    affixStyle: import("vue").ComputedRef<{
        top: string;
        bottom: string;
        width: string;
        height: string;
    } | {
        top?: undefined;
        bottom?: undefined;
        width?: undefined;
        height?: undefined;
    }>;
    update: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    offsetTop: {
        type: NumberConstructor;
        required: false;
    };
    offsetBottom: {
        type: NumberConstructor;
        required: false;
    };
    target: {
        type: null;
        required: false;
        default: () => Window & typeof globalThis;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    target: any;
}>> & Record<string, any>;
export default HpAffix;
