import { useContext, createElement } from 'react';

export const forwardContext = (Context) => (Component) => ({ children, ...props }) => {
    const value = useContext(Context);
    const wrapped = createElement(Context.Provider, { value }, children);
    return createElement(Component, props, wrapped);
};