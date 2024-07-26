import React, { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
 
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Actualiza el estado para que el siguiente renderizado muestre la UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Puedes también registrar el error en un servicio de reporte de errores.
    console.error("Uncaught error:", error, errorInfo);
    // Aquí puedes enviar el error a un servicio externo de monitoreo, como Sentry, Bugsnag, etc.
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier UI alternativa.
      return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>Algo salió mal.</h1>
          <p>Lo sentimos, ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
