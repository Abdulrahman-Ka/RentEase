"use client";

import { AuthProvider } from "@/authContext";

const AuthWrappeer = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
export default AuthWrappeer;
