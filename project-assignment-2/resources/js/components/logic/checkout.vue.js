/* __placeholder__ */


const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_emit = defineEmits(['handleCheckout'])

const __VLS_componentsOption = {};

let __VLS_name!: 'checkout';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
& __VLS_WithComponent<'BtnVue', typeof __VLS_localComponents, "BtnVue", "BtnVue", "BtnVue">
;
__VLS_components.BtnVue;
// @ts-ignore
[BtnVue,];
{
const __VLS_0 = ({} as 'BtnVue' extends keyof typeof __VLS_ctx ? { 'BtnVue': typeof __VLS_ctx.BtnVue }: typeof __VLS_resolvedLocalAndGlobalComponents).BtnVue;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ onClick: {} as any, }, title: ("Checkout"), styleBtn: ("btn btn-success "), }));
({} as { BtnVue: typeof __VLS_0 }).BtnVue;
const __VLS_2 = __VLS_1({ ...{ onClick: {} as any, }, title: ("Checkout"), styleBtn: ("btn btn-success "), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, title: ("Checkout"), styleBtn: ("btn btn-success "), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
let __VLS_5 = { 'click': __VLS_pickEvent(__VLS_4['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_1, typeof __VLS_2>).onClick) };
__VLS_5 = { click: $event => {
__VLS_ctx.$emit('handleCheckout');
// @ts-ignore
[$emit,];
}
 };
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
$emit: __VLS_emit,
};
},
});
export default (await import('vue')).defineComponent({
setup() {
return {
$emit: __VLS_emit,
};
},
});
