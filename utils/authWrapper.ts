"use client";
import useUserStore from "@/app/lib/store";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { user } = useUserStore();
  const router = useRouter();

  if (!user) {
    router.replace("/");
    return null;
  }

  return children;
};

export default AuthWrapper;
