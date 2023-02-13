import { makeVar } from "@apollo/client";

/*
appolo => reactive-variables 
- npm i @apollo/client
*/

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
