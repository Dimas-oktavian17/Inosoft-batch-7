/* __placeholder__ */

import { reactive, ref, toRefs, computed } from 'vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps(['TitleMenu', 'CheckoutMenu'])
const CheckoutData = ref([])
const listMenu = ref([
    {
        logo: 'game-icons:fast-noodles',
        title: 'Mie Gelas',
        deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.',
        price: 3900,
        stok: 10,
        checkout: 'Add to cart',
        status: true
    },
    {
        logo: 'fluent-emoji-high-contrast:cut-of-meat',
        title: 'Daging Wagyu A5',
        deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`,
        price: 10000,
        stok: 80,
        checkout: 'Add to cart',
        status: true
    },
    {
        logo: 'bxs:coffee-bean',
        title: 'Kopikap',
        deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`,
        price: 1500,
        stok: 3,
        checkout: 'Add to cart',
        status: true
    }
])

const handleProduct = (title, price, stok) => {
    const productMenu = listMenu.value.find((item) => item.title === title)
    if (stok > 0) {
        productMenu.stok--
        CheckoutData.value.push({
            nama: title,
            harga: price,
            jumlah: 1
        })

        productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
    }
}
const checkoutHandler = () => console.log('tes ah');

const __VLS_componentsOption = {};

let __VLS_name!: 'cart';
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
& __VLS_WithComponent<'IconVue', typeof __VLS_localComponents, "IconVue", "IconVue", "IconVue">
& __VLS_WithComponent<'BtnVue', typeof __VLS_localComponents, "BtnVue", "BtnVue", "BtnVue">
& __VLS_WithComponent<'CheckoutVue', typeof __VLS_localComponents, "CheckoutVue", "CheckoutVue", "CheckoutVue">
;
__VLS_intrinsicElements.aside;__VLS_intrinsicElements.aside;__VLS_intrinsicElements.aside;__VLS_intrinsicElements.aside;
__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;
__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;__VLS_intrinsicElements.header;
__VLS_intrinsicElements.article;__VLS_intrinsicElements.article;__VLS_intrinsicElements.article;__VLS_intrinsicElements.article;
__VLS_components.IconVue;
// @ts-ignore
[IconVue,];
__VLS_intrinsicElements.h5;__VLS_intrinsicElements.h5;
__VLS_intrinsicElements.p;__VLS_intrinsicElements.p;__VLS_intrinsicElements.p;__VLS_intrinsicElements.p;
__VLS_components.BtnVue;__VLS_components.BtnVue;
// @ts-ignore
[BtnVue,BtnVue,];
__VLS_intrinsicElements.table;__VLS_intrinsicElements.table;
__VLS_intrinsicElements.thead;__VLS_intrinsicElements.thead;
__VLS_intrinsicElements.tr;__VLS_intrinsicElements.tr;__VLS_intrinsicElements.tr;__VLS_intrinsicElements.tr;
__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;__VLS_intrinsicElements.th;
__VLS_intrinsicElements.tbody;__VLS_intrinsicElements.tbody;
__VLS_intrinsicElements.td;__VLS_intrinsicElements.td;__VLS_intrinsicElements.td;__VLS_intrinsicElements.td;__VLS_intrinsicElements.td;__VLS_intrinsicElements.td;
__VLS_components.CheckoutVue;
// @ts-ignore
[CheckoutVue,];
{
const __VLS_0 = __VLS_intrinsicElements["aside"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{ }, class: ("row text-light pt-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, class: ("row text-light pt-10"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{ }, class: ("col-12 text-center "), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, class: ("col-12 text-center "), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["header"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{ }, class: ("text-light h1 fw-semibold"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, class: ("text-light h1 fw-semibold"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
( __VLS_ctx.TitleMenu );
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["article"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{ }, id: ("menu"), class: ("row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center "), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ }, id: ("menu"), class: ("row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center "), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
for (const [{ title, logo, deskripsi, price, stok, checkout, status, index }] of __VLS_getVForSourceType((__VLS_ctx.listMenu)!)) {
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{ }, key: ((index)), class: ("col-lg-4 pt-5 pt-lg-0 "), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{ }, key: ((index)), class: ("col-lg-4 pt-5 pt-lg-0 "), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{ }, class: ("card bg-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ }, class: ("card bg-dark"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{ }, class: ("card-body"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ }, class: ("card-body"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = ({} as 'IconVue' extends keyof typeof __VLS_ctx ? { 'IconVue': typeof __VLS_ctx.IconVue }: typeof __VLS_resolvedLocalAndGlobalComponents).IconVue;
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({...{ }, icon: ((logo)), class: ("text-light w-25 h-auto "), }));
({} as { IconVue: typeof __VLS_35 }).IconVue;
const __VLS_37 = __VLS_36({ ...{ }, icon: ((logo)), class: ("text-light w-25 h-auto "), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{ }, icon: ((logo)), class: ("text-light w-25 h-auto "), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
{
const __VLS_40 = __VLS_intrinsicElements["h5"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{ }, class: ("card-title text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ }, class: ("card-title text-light"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
( title );
(__VLS_43.slots!).default;
}
{
const __VLS_45 = __VLS_intrinsicElements["p"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{ }, class: ("card-text text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{ }, class: ("card-text text-light"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
( deskripsi );
(__VLS_48.slots!).default;
}
{
const __VLS_50 = __VLS_intrinsicElements["p"];
const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
const __VLS_52 = __VLS_51({ ...{ }, class: ("card-text text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{ }, class: ("card-text text-light"), });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
( stok );
( price );
(__VLS_53.slots!).default;
}
{
const __VLS_55 = ({} as 'BtnVue' extends keyof typeof __VLS_ctx ? { 'BtnVue': typeof __VLS_ctx.BtnVue }: typeof __VLS_resolvedLocalAndGlobalComponents).BtnVue;
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({...{ onClick: {} as any, }, disabled: ((status === false)), title: ((checkout)), styleBtn: ("btn btn-secondary"), }));
({} as { BtnVue: typeof __VLS_55 }).BtnVue;
const __VLS_57 = __VLS_56({ ...{ onClick: {} as any, }, disabled: ((status === false)), title: ((checkout)), styleBtn: ("btn btn-secondary"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, disabled: ((status === false)), title: ((checkout)), styleBtn: ("btn btn-secondary"), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
let __VLS_60 = { 'click': __VLS_pickEvent(__VLS_59['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_57>).onClick) };
__VLS_60 = { click: $event => {
__VLS_ctx.handleProduct(title, price, stok);
// @ts-ignore
[TitleMenu,listMenu,handleProduct,];
}
 };
}
(__VLS_33.slots!).default;
}
(__VLS_28.slots!).default;
}
(__VLS_23.slots!).default;
}
}
(__VLS_18.slots!).default;
}
{
const __VLS_61 = __VLS_intrinsicElements["aside"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{ }, class: ("row text-light pt-10"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{ }, class: ("row text-light pt-10"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
{
const __VLS_66 = __VLS_intrinsicElements["div"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{ }, class: ("col-12 text-center "), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{ }, class: ("col-12 text-center "), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
{
const __VLS_71 = __VLS_intrinsicElements["header"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{ }, class: ("text-light h1 fw-semibold"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{ }, class: ("text-light h1 fw-semibold"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
( __VLS_ctx.CheckoutMenu );
(__VLS_74.slots!).default;
}
(__VLS_69.slots!).default;
}
(__VLS_64.slots!).default;
}
{
const __VLS_76 = __VLS_intrinsicElements["article"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{ }, id: ("menu"), class: ("container row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center "), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{ }, id: ("menu"), class: ("container row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center  align-items-center "), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
{
const __VLS_81 = __VLS_intrinsicElements["table"];
const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
const __VLS_83 = __VLS_82({ ...{ }, class: ("table table-striped table-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{ }, class: ("table table-striped table-dark"), });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
{
const __VLS_86 = __VLS_intrinsicElements["thead"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
{
const __VLS_91 = __VLS_intrinsicElements["tr"];
const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
const __VLS_93 = __VLS_92({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
{
const __VLS_96 = __VLS_intrinsicElements["th"];
const __VLS_97 = __VLS_elementAsFunctionalComponent(__VLS_96);
const __VLS_98 = __VLS_97({ ...{ }, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_96, typeof __VLS_98> & Record<string, unknown>) => void)({ ...{ }, scope: ("col"), });
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
let __VLS_100!: __VLS_NormalizeEmits<typeof __VLS_99.emit>;
(__VLS_99.slots!).default;
}
{
const __VLS_101 = __VLS_intrinsicElements["th"];
const __VLS_102 = __VLS_elementAsFunctionalComponent(__VLS_101);
const __VLS_103 = __VLS_102({ ...{ }, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_101, typeof __VLS_103> & Record<string, unknown>) => void)({ ...{ }, scope: ("col"), });
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
let __VLS_105!: __VLS_NormalizeEmits<typeof __VLS_104.emit>;
(__VLS_104.slots!).default;
}
{
const __VLS_106 = __VLS_intrinsicElements["th"];
const __VLS_107 = __VLS_elementAsFunctionalComponent(__VLS_106);
const __VLS_108 = __VLS_107({ ...{ }, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_106, typeof __VLS_108> & Record<string, unknown>) => void)({ ...{ }, scope: ("col"), });
const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108)!;
let __VLS_110!: __VLS_NormalizeEmits<typeof __VLS_109.emit>;
(__VLS_109.slots!).default;
}
{
const __VLS_111 = __VLS_intrinsicElements["th"];
const __VLS_112 = __VLS_elementAsFunctionalComponent(__VLS_111);
const __VLS_113 = __VLS_112({ ...{ }, scope: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_112));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_111, typeof __VLS_113> & Record<string, unknown>) => void)({ ...{ }, scope: ("col"), });
const __VLS_114 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113)!;
let __VLS_115!: __VLS_NormalizeEmits<typeof __VLS_114.emit>;
(__VLS_114.slots!).default;
}
(__VLS_94.slots!).default;
}
(__VLS_89.slots!).default;
}
for (const [{ nama, harga, jumlah, index }] of __VLS_getVForSourceType((__VLS_ctx.CheckoutData)!)) {
{
const __VLS_116 = __VLS_intrinsicElements["tbody"];
const __VLS_117 = __VLS_elementAsFunctionalComponent(__VLS_116);
const __VLS_118 = __VLS_117({ ...{ }, key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_116, typeof __VLS_118> & Record<string, unknown>) => void)({ ...{ }, key: ((index)), });
const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118)!;
let __VLS_120!: __VLS_NormalizeEmits<typeof __VLS_119.emit>;
{
const __VLS_121 = __VLS_intrinsicElements["tr"];
const __VLS_122 = __VLS_elementAsFunctionalComponent(__VLS_121);
const __VLS_123 = __VLS_122({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_122));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_121, typeof __VLS_123> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_124 = __VLS_pickFunctionalComponentCtx(__VLS_121, __VLS_123)!;
let __VLS_125!: __VLS_NormalizeEmits<typeof __VLS_124.emit>;
{
const __VLS_126 = __VLS_intrinsicElements["th"];
const __VLS_127 = __VLS_elementAsFunctionalComponent(__VLS_126);
const __VLS_128 = __VLS_127({ ...{ }, scope: ("row"), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_126, typeof __VLS_128> & Record<string, unknown>) => void)({ ...{ }, scope: ("row"), });
const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128)!;
let __VLS_130!: __VLS_NormalizeEmits<typeof __VLS_129.emit>;
( nama );
(__VLS_129.slots!).default;
}
{
const __VLS_131 = __VLS_intrinsicElements["td"];
const __VLS_132 = __VLS_elementAsFunctionalComponent(__VLS_131);
const __VLS_133 = __VLS_132({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_132));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_131, typeof __VLS_133> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_131, __VLS_133)!;
let __VLS_135!: __VLS_NormalizeEmits<typeof __VLS_134.emit>;
( jumlah );
(__VLS_134.slots!).default;
}
{
const __VLS_136 = __VLS_intrinsicElements["td"];
const __VLS_137 = __VLS_elementAsFunctionalComponent(__VLS_136);
const __VLS_138 = __VLS_137({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_137));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_136, typeof __VLS_138> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138)!;
let __VLS_140!: __VLS_NormalizeEmits<typeof __VLS_139.emit>;
( harga );
(__VLS_139.slots!).default;
}
{
const __VLS_141 = __VLS_intrinsicElements["td"];
const __VLS_142 = __VLS_elementAsFunctionalComponent(__VLS_141);
const __VLS_143 = __VLS_142({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_142));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_141, typeof __VLS_143> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_144 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143)!;
let __VLS_145!: __VLS_NormalizeEmits<typeof __VLS_144.emit>;
{
const __VLS_146 = ({} as 'BtnVue' extends keyof typeof __VLS_ctx ? { 'BtnVue': typeof __VLS_ctx.BtnVue }: typeof __VLS_resolvedLocalAndGlobalComponents).BtnVue;
const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({...{ }, title: ("Delete"), styleBtn: ("btn btn-danger"), }));
({} as { BtnVue: typeof __VLS_146 }).BtnVue;
const __VLS_148 = __VLS_147({ ...{ }, title: ("Delete"), styleBtn: ("btn btn-danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_146, typeof __VLS_148> & Record<string, unknown>) => void)({ ...{ }, title: ("Delete"), styleBtn: ("btn btn-danger"), });
const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148)!;
let __VLS_150!: __VLS_NormalizeEmits<typeof __VLS_149.emit>;
}
(__VLS_144.slots!).default;
}
(__VLS_124.slots!).default;
}
(__VLS_119.slots!).default;
}
// @ts-ignore
[CheckoutMenu,CheckoutData,];
}
(__VLS_84.slots!).default;
}
{
const __VLS_151 = ({} as 'CheckoutVue' extends keyof typeof __VLS_ctx ? { 'CheckoutVue': typeof __VLS_ctx.CheckoutVue }: typeof __VLS_resolvedLocalAndGlobalComponents).CheckoutVue;
const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({...{ onHandleCheckout: {} as any, }, }));
({} as { CheckoutVue: typeof __VLS_151 }).CheckoutVue;
const __VLS_153 = __VLS_152({ ...{ onHandleCheckout: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_152));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_153> & Record<string, unknown>) => void)({ ...{ onHandleCheckout: {} as any, }, });
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
let __VLS_155!: __VLS_NormalizeEmits<typeof __VLS_154.emit>;
let __VLS_156 = { 'handleCheckout': __VLS_pickEvent(__VLS_155['handleCheckout'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_152, typeof __VLS_153>).onHandleCheckout) };
__VLS_156 = { handleCheckout: (__VLS_ctx.checkoutHandler) };
}
(__VLS_79.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
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
__VLS_styleScopedClasses["card-text"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["row"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["pt-10"];
__VLS_styleScopedClasses["col-12"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["h1"];
__VLS_styleScopedClasses["fw-semibold"];
__VLS_styleScopedClasses["container"];
__VLS_styleScopedClasses["row"];
__VLS_styleScopedClasses["pt-5"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["flex-column"];
__VLS_styleScopedClasses["flex-lg-row"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["justify-content-center"];
__VLS_styleScopedClasses["align-items-center"];
__VLS_styleScopedClasses["table"];
__VLS_styleScopedClasses["table-striped"];
__VLS_styleScopedClasses["table-dark"];
}
var __VLS_slots!:{
};
// @ts-ignore
[checkoutHandler,];
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
$props: __VLS_makeOptional(__VLS_props),
...__VLS_props,
CheckoutData: CheckoutData as typeof CheckoutData,
listMenu: listMenu as typeof listMenu,
handleProduct: handleProduct as typeof handleProduct,
checkoutHandler: checkoutHandler as typeof checkoutHandler,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
$props: __VLS_makeOptional(__VLS_props),
...__VLS_props,
};
},
});
