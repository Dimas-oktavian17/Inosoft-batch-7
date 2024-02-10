/* __placeholder__ */

import { reactive } from 'vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const listMenu = reactive([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.'
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`
    }
])

const __VLS_componentsOption = {};

let __VLS_name!: 'app';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {}
 & { 'pt-10'?: boolean };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
& __VLS_WithComponent<'DefaultLayout', typeof __VLS_localComponents, "DefaultLayout", "DefaultLayout", "DefaultLayout">
& __VLS_WithComponent<'IconVue', typeof __VLS_localComponents, "IconVue", "IconVue", "IconVue">
& __VLS_WithComponent<'CartVue', typeof __VLS_localComponents, "CartVue", "CartVue", "CartVue">
;
__VLS_components.DefaultLayout;__VLS_components.DefaultLayout;
// @ts-ignore
[DefaultLayout,DefaultLayout,];
__VLS_intrinsicElements.aside;__VLS_intrinsicElements.aside;__VLS_intrinsicElements.aside;__VLS_intrinsicElements.aside;
__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;
__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;
__VLS_intrinsicElements.footer;__VLS_intrinsicElements.footer;
__VLS_intrinsicElements.a;__VLS_intrinsicElements.a;
__VLS_components.IconVue;__VLS_components.IconVue;
// @ts-ignore
[IconVue,IconVue,];
__VLS_intrinsicElements.article;__VLS_intrinsicElements.article;__VLS_intrinsicElements.article;__VLS_intrinsicElements.article;
__VLS_intrinsicElements.h5;__VLS_intrinsicElements.h5;
__VLS_intrinsicElements.p;__VLS_intrinsicElements.p;
__VLS_components.CartVue;
// @ts-ignore
[CartVue,];
{
const __VLS_0 = ({} as 'DefaultLayout' extends keyof typeof __VLS_ctx ? { 'DefaultLayout': typeof __VLS_ctx.DefaultLayout }: typeof __VLS_resolvedLocalAndGlobalComponents).DefaultLayout;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ }, }));
({} as { DefaultLayout: typeof __VLS_0 }).DefaultLayout;
({} as { DefaultLayout: typeof __VLS_0 }).DefaultLayout;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["aside"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{ }, class: ("row text-light "), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, class: ("row text-light "), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{ }, class: ("col-lg-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, class: ("col-lg-6"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["header"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{ }, class: ("text-light h1 fw-semibold"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ }, class: ("text-light h1 fw-semibold"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["footer"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{ }, class: ("py-1  text-light h6 fw-medium opacity-50 "), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ }, class: ("py-1  text-light h6 fw-medium opacity-50 "), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(__VLS_23.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["a"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{ }, title: ("Let's Go!"), class: ("btn btn-primary"), href: ("#menu"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ }, title: ("Let's Go!"), class: ("btn btn-primary"), href: ("#menu"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
(__VLS_28.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{ }, class: ("col-lg-6 "), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ }, class: ("col-lg-6 "), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as 'IconVue' extends keyof typeof __VLS_ctx ? { 'IconVue': typeof __VLS_ctx.IconVue }: typeof __VLS_resolvedLocalAndGlobalComponents).IconVue;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({...{ }, icon: ("mdi:food"), class: ("w-50  h-auto   "), }));
({} as { IconVue: typeof __VLS_35 }).IconVue;
const __VLS_37 = __VLS_36({ ...{ }, icon: ("mdi:food"), class: ("w-50  h-auto   "), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{ }, icon: ("mdi:food"), class: ("w-50  h-auto   "), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
(__VLS_33.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["aside"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{ }, class: ("row text-light pt-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ }, class: ("row text-light pt-10"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["div"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{ }, class: ("col-12 text-center "), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{ }, class: ("col-12 text-center "), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
const __VLS_50 = __VLS_intrinsicElements["header"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{ }, class: ("text-light h1 fw-semibold"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{ }, class: ("text-light h1 fw-semibold"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
(__VLS_53.slots!).default;
}
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
{
const __VLS_55 = __VLS_intrinsicElements["article"];
const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
const __VLS_57 = __VLS_56({ ...{ }, id: ("menu"), class: ("row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center "), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{ }, id: ("menu"), class: ("row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center "), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
for (const [{ title, logo, deskripsi, index }] of __VLS_getVForSourceType((__VLS_ctx.listMenu)!)) {
{
const __VLS_60 = __VLS_intrinsicElements["div"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{ }, key: ((index)), class: ("col-lg-4 pt-5 pt-lg-0 "), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{ }, key: ((index)), class: ("col-lg-4 pt-5 pt-lg-0 "), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
{
const __VLS_65 = __VLS_intrinsicElements["div"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{ }, class: ("card bg-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{ }, class: ("card bg-dark"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
{
const __VLS_70 = __VLS_intrinsicElements["div"];
const __VLS_71 = __VLS_elementAsFunctionalComponent(__VLS_70);
const __VLS_72 = __VLS_71({ ...{ }, class: ("card-body"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{ }, class: ("card-body"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
{
const __VLS_75 = ({} as 'IconVue' extends keyof typeof __VLS_ctx ? { 'IconVue': typeof __VLS_ctx.IconVue }: typeof __VLS_resolvedLocalAndGlobalComponents).IconVue;
const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({...{ }, icon: ((logo)), class: ("text-light w-25 h-auto "), }));
({} as { IconVue: typeof __VLS_75 }).IconVue;
const __VLS_77 = __VLS_76({ ...{ }, icon: ((logo)), class: ("text-light w-25 h-auto "), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_75, typeof __VLS_77> & Record<string, unknown>) => void)({ ...{ }, icon: ((logo)), class: ("text-light w-25 h-auto "), });
const __VLS_78 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77)!;
let __VLS_79!: __VLS_NormalizeEmits<typeof __VLS_78.emit>;
}
{
const __VLS_80 = __VLS_intrinsicElements["h5"];
const __VLS_81 = __VLS_elementAsFunctionalComponent(__VLS_80);
const __VLS_82 = __VLS_81({ ...{ }, class: ("card-title text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_80, typeof __VLS_82> & Record<string, unknown>) => void)({ ...{ }, class: ("card-title text-light"), });
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
let __VLS_84!: __VLS_NormalizeEmits<typeof __VLS_83.emit>;
( title );
(__VLS_83.slots!).default;
}
{
const __VLS_85 = __VLS_intrinsicElements["p"];
const __VLS_86 = __VLS_elementAsFunctionalComponent(__VLS_85);
const __VLS_87 = __VLS_86({ ...{ }, class: ("card-text text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_85, typeof __VLS_87> & Record<string, unknown>) => void)({ ...{ }, class: ("card-text text-light"), });
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
let __VLS_89!: __VLS_NormalizeEmits<typeof __VLS_88.emit>;
( deskripsi );
(__VLS_88.slots!).default;
}
(__VLS_73.slots!).default;
}
(__VLS_68.slots!).default;
}
(__VLS_63.slots!).default;
}
// @ts-ignore
[listMenu,];
}
(__VLS_58.slots!).default;
}
{
const __VLS_90 = __VLS_intrinsicElements["article"];
const __VLS_91 = __VLS_elementAsFunctionalComponent(__VLS_90);
const __VLS_92 = __VLS_91({ ...{ }, class: ("pt-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_90, typeof __VLS_92> & Record<string, unknown>) => void)({ ...{ }, class: ("pt-10"), });
const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92)!;
let __VLS_94!: __VLS_NormalizeEmits<typeof __VLS_93.emit>;
{
const __VLS_95 = ({} as 'CartVue' extends keyof typeof __VLS_ctx ? { 'CartVue': typeof __VLS_ctx.CartVue }: typeof __VLS_resolvedLocalAndGlobalComponents).CartVue;
const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({...{ }, TitleMenu: ("Semua Menu"), CheckoutMenu: ("Keranjang Belanja"), }));
({} as { CartVue: typeof __VLS_95 }).CartVue;
const __VLS_97 = __VLS_96({ ...{ }, TitleMenu: ("Semua Menu"), CheckoutMenu: ("Keranjang Belanja"), }, ...__VLS_functionalComponentArgsRest(__VLS_96));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_95, typeof __VLS_97> & Record<string, unknown>) => void)({ ...{ }, TitleMenu: ("Semua Menu"), CheckoutMenu: ("Keranjang Belanja"), });
const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_95, __VLS_97)!;
let __VLS_99!: __VLS_NormalizeEmits<typeof __VLS_98.emit>;
}
(__VLS_93.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["row"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["col-lg-6"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["h1"];
__VLS_styleScopedClasses["fw-semibold"];
__VLS_styleScopedClasses["py-1"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["h6"];
__VLS_styleScopedClasses["fw-medium"];
__VLS_styleScopedClasses["opacity-50"];
__VLS_styleScopedClasses["btn"];
__VLS_styleScopedClasses["btn-primary"];
__VLS_styleScopedClasses["col-lg-6"];
__VLS_styleScopedClasses["w-50"];
__VLS_styleScopedClasses["h-auto"];
__VLS_styleScopedClasses["row"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["pt-10"];
__VLS_styleScopedClasses["col-12"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["h1"];
__VLS_styleScopedClasses["fw-semibold"];
__VLS_styleScopedClasses["row"];
__VLS_styleScopedClasses["pt-5"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["flex-column"];
__VLS_styleScopedClasses["flex-lg-row"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["justify-content-center"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["col-lg-4"];
__VLS_styleScopedClasses["pt-5"];
__VLS_styleScopedClasses["pt-lg-0"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["bg-dark"];
__VLS_styleScopedClasses["card-body"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["w-25"];
__VLS_styleScopedClasses["h-auto"];
__VLS_styleScopedClasses["card-title"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["card-text"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["pt-10"];
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
listMenu: listMenu as typeof listMenu,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
};
},
});