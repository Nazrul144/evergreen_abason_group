"use client"
import { motion } from "framer-motion";
import { Lock, Eye, Database } from "lucide-react";


export function Policy() {
return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 py-12">
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="max-w-4xl mx-auto"
>
<div className="flex items-center gap-3 mb-6">
<Lock className="w-8 h-8 text-green-600" />
<h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">
Privacy Policy
</h1>
</div>


<div className="space-y-6 text-lg leading-relaxed">
<p>
This Privacy Policy explains how Evergreen Abason Group collects, uses,
and protects user information when accessing our website or contacting us.
</p>


<section>
<h2 className="flex items-center gap-2 text-2xl font-semibold mb-2">
<Eye className="w-6 h-6 text-green-500" /> Information Collection
</h2>
<p>
We may collect user-provided information such as name, contact details,
and inquiry messages to improve our communication and services.
</p>
</section>


<section>
<h2 className="flex items-center gap-2 text-2xl font-semibold mb-2">
<Database className="w-6 h-6 text-green-500" /> Data Usage
</h2>
<p>
Collected data is used solely for customer support, service improvement,
and providing accurate project information. We do not share personal
data with third parties without consent.
</p>
</section>


<p>
For any questions regarding our policy, users may contact our support
team directly. By using our website, you agree to this Privacy Policy.
</p>
</div>
</motion.div>
</div>
);
}