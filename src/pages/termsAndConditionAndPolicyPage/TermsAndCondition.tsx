"use client";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Scale } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl font-bold bg-linear-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to Evergreen Abason Group. By accessing or using our
            website, you agree to comply with the following terms and
            conditions. Please read them carefully before using our services.
          </p>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-2">
              <FileText className="w-6 h-6 text-green-500" /> Usage Policy
            </h2>
            <p>
              All information provided on this website is intended to give users
              an understanding of our land and housing projects. Users are not
              permitted to misuse, copy, or republish content without
              permission.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-semibold mb-2">
              <Scale className="w-6 h-6 text-green-500" /> Legal Disclaimer
            </h2>
            <p>
              Evergreen Abason Group reserves the right to update project
              information, pricing, and availability at any time. All decisions
              made based on website information are the user&apos;s
              responsibility.
            </p>
          </section>

          <p>
            By using our website, you acknowledge that you have read and
            understood these terms. If you do not agree, please discontinue
            using our services.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
