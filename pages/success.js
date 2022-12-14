import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])

  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Money, Money, Money, Money, Money</h2>
            <p className="email-msg">Check mail now</p>
            <p className="description">
                No refund
                <a className="email" href="mailto:testaccoconut@gmail.com">
                    testaccoconut@gmail.com
                </a>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        give me more
                    </button>
                </Link>
            </p>
        </div>
    </div>
  )
};

export default Success;
