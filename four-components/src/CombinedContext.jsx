import { CounterProvider } from "./context/CounterContext";
import { ThemeProvider } from "./context/ThemeContext";


const CombinedProvider = ({ children }) => (
    <ThemeProvider>
      <CounterProvider>
        {children}
      </CounterProvider>
    </ThemeProvider>
  );

export default CombinedProvider;