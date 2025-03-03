"use client";
import Link from "next/link";
import React from "react";
import Form from "next/form";
import { Button } from "./ui/button";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
const Headers = () => {
  const { user } = useUser();
  console.log("user", user);
  return (
    <div className="flex flex-wrap items-center justify-between px-2 py-4">
      <div className="flex w-full flex-wrap items-center justify-between ">
        <Link href="/" className="text-blue-300 font-extrabold">
          Shopr
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:x-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search products here..."
            className="border-1 rounded-sm px-2 py-1 border-gray-200 placeholder-gray-300 w-full  bg-stone-100"
          />
        </Form>
        <div className="flex items-center gap-1">
          <Button className="cursor-pointer">My Basket</Button>
          <ClerkLoaded>
            {user ? (
              <>
                <Button>My Orders</Button>
                <UserButton />
              </>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Headers;
