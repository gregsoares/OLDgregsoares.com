// input Component and attribute test and it will find data-test=attribute given
export const findByTestAttr = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};