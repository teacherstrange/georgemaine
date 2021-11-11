export default function getSwiperTranslate(axis = "x", el) {
  const params = el.params;
  const translate = el.params.translate;

  if (params.virtualTranslate) {
    return params.rtlTranslate ? -translate : translate;
  }
}
