import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
    title: "Support Page - Solid SaaS Boilerplate",
    description: "This is Support page for Solid Pro",
    // other metadata
};

const PrivacyPolicyPage = () => {
    return (
        <div className="pb-20 pt-4">
            <PrivacyPolicy />
        </div>);
};

export default PrivacyPolicyPage;
