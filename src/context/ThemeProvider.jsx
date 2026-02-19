import React, { createContext, useState } from "react";

// step 1
// initiate the context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    // step 2
    // what are the hook i need to pass to the great grand child
     const [theme, setTheme] = useState(false);
     
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext };

export default ThemeProvider;
