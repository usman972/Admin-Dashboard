import { createContext , useState , useMemo } from "react";
import  { createTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";
import { Typography } from "@mui/material";

//color tokens
export const tokens =(mode) =>({
    ...(mode === 'dark'
        ? 
        {
            grey: {
                900: "#141414",
                800: "#292929",
                700: "#3d3d3d",
                600: "#525252",
                500: "#666666",
                400: "#858585",
                300: "#a3a3a3",
                200: "#c2c2c2",
                100: "#e0e0e0",
            },
            primary: {
                900: "#040509",
                800: "#080b12",
                700: "#0c101b",
                600: "#101624",
                500: "#141b2d",
                400: "#434957",
                300: "#727681",
                200: "#a1a4ab",
                100: "#d0d1d5",
            },
            greenAccent: {
                900: "#0f2922",
                800: "#1e5245",
                700: "#2e7c67",
                600: "#3da58a",
                500: "#4cceac",
                400: "#70d8bd",
                300: "#94e2cd",
                200: "#b7ebde",
                100: "#dbf5ee",
            },
            redAccent: {
                900: "#2c100f",
                800: "#58201e",
                700: "#832f2c",
                600: "#af3f3b",
                500: "#db4f4a",
                400: "#e2726e",
                300: "#e99592",
                200: "#f1b9b7",
                100: "#f8dcdb",
            },
            blueAccent: {
                900: "#151632",
                800: "#2a2d64",
                700: "#3e4396",
                600: "#535ac8",
                500: "#6870fa",
                400: "#868dfb",
                300: "#a4a9fc",
                200: "#c3c6fd",
                100: "#e1e2fe",
            },
            
        }
        :{}
    ) ,
})

//mui theme setting
export const themeSettings = (mode)=>{
    const colors = tokens(mode);

    return{
        pallete:{
            mode:mode,
            ...(mode === 'dark'
                ?{
                    primary:{
                        main: colors.primary[500]
                    },
                    secondary:{
                        main: colors.greenAccent[500],
                    },
                    neutral:{
                        dark: colors.grey[700],
                        main:colors.grey[500],
                        light :colors.grey[100],
                    },
                    background:{
                        default: colors.primary[500]
                    }
                } :{
                    primary:{
                        main: colors.primary[100]
                    },
                    secondary:{
                        main: colors.greenAccent[500],
                    },
                    neutral:{
                        dark: colors.grey[700],
                        main:colors.grey[500],
                        light :colors.grey[100],
                    },
                    background:{
                        default: "#fcfcfc"
                    },
                }
            ),

        },
        typography:{
            fontFamily:["Source Sans Pro","sans-serif"].join(","),
            fontSize: 12,
            h1:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:40
            },
            h2:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:32
            },
            h3:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:24
            },
            h4:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:20
            },
            h5:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:16
            },
            h6:{
                fontFamily:["Source Sans Pro","sans-serif"].join(","),
                fontSize:14
            },
        }
    };
};

//context for colorMode
export const colorModeContext = createdContext({
    toggleColorMode:()=>{}
});

export const useMode = () =>{
    const [mode,setMode]= useState("dark")

    const colorMode =useMemo(
        ()=>({
            toggleColorMode:()=>
                setMode((prev)=>(prev ==="light" ? "dark" :"light"))
        }),
        []
    )
    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

     return[theme, colorMode]
}
