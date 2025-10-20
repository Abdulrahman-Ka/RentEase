"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { FaBuilding, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import destroySession from "@/actions/destroySession";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import checkAuth from "@/actions/checkAuth";
import { useAuth } from "@/authContext";

const Header = () => {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const response = await destroySession();
    console.log(response);
    if (response.success) {
      toast.success("Logged Out");
      setIsAuthenticated(false);
      router.push("/login");
    } else toast.error(response.error);
  };

  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="h-12 w-12"
                src={logo}
                alt="RentEase"
                priority={true}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/rooms"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Houses
                </Link>
                {isAuthenticated && (
                  <>
                    <Link
                      href="/bookings"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                    >
                      Bookings
                    </Link>
                    <Link
                      href="/add-house"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                    >
                      Add House
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {!isAuthenticated && (
                <>
                  <Link
                    href="/login"
                    className="mr-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaSignInAlt className="inline mr-1" /> Login
                  </Link>
                  <Link
                    href="/signup"
                    className="mr-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaUser className="inline mr-1" /> Register
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <>
                  <Link
                    href="/"
                    className="mr-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaBuilding className="inline mr-1" /> My Houses
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mr-3 text-gray-800 hover:text-gray-600"
                  >
                    <FaSignOutAlt className="inline mr-1" /> Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href={"/"}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Houses
          </Link>
          <Link
            href={"/"}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Booking
          </Link>
          <Link
            href={"/"}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add House
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
