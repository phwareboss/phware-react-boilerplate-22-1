/*
Error boundaries are React components that catch JavaScript errors anywhere in their 
child component tree, log those errors, and display a fallback UI instead of the component 
tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, 
and in constructors of the whole tree below them.

Wrap a component in a  <ErrorBoundary /> Object (below) to catch cryptic errors.
            <ErrorBoundary>
                <MyCompnantWithErrors />
            <ErrorBoundary />
*/

import React from 'react';
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service you own
       // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}