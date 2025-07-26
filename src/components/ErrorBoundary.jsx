import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 p-4 rounded">
          <h3 className="text-red-800 font-medium">Product Loading Failed</h3>
          <p className="text-red-700">This product couldn't be displayed properly.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;