import React, { Component } from "react";


//Error boundary class that catch the error and render the fall back ui
export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.FallbackComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
