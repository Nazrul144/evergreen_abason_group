"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, SquareUser, MapPin, Send, Sparkles } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ---------------- Schema ----------------
const formSchema = z.object({
  inquiry: z.string().min(1, "Please select an inquiry type."),
  region: z.string().min(1, "Please select a region."),
  firstName: z.string().min(2, "First name is too short."),
  lastName: z.string().min(2, "Last name is too short."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(7, "Phone number is too short.").max(15),
  description: z.string().min(10, "Please provide more details."),
});

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiry: "",
      region: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      description: "",
    },
  });

  const sendEmail = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        formRef.current,
        `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        () => {
          Swal.fire({
            title: "Message has been sent successfully!",
            text: "Click ok to close!",
            icon: "success",
          });
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="relative lg:px-44 md:px-10 px-6 py-20 dark:bg-gray-900 overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            duration: 0.8,
          }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-teal-400 animate-pulse" />
              <h1
                className={`${playfair.className} text-5xl md:text-6xl font-extrabold bg-linear-to-r from-green-500 via-teal-400 to-blue-500 bg-clip-text text-transparent`}
              >
                Contact Us
              </h1>
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
            </div>
            <div className="h-1.5 bg-linear-to-r from-transparent via-teal-400 to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 60,
            duration: 0.8,
          }}
        >
          <div
            className="
              relative p-1 rounded-3xl 
              bg-linear-to-r from-green-500 via-teal-400 to-blue-500
              shadow-2xl shadow-teal-500/20
            "
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12">
              <Form {...form}>
                <form
                  ref={formRef}
                  onSubmit={form.handleSubmit(sendEmail)}
                  className="space-y-8"
                >
                  {/* Inquiry + Region */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="inquiry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-linear-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                              <SquareUser size={16} className="text-white" />
                            </div>
                            Inquiry Type
                          </FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              name="inquiry"
                              className="w-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 outline-none cursor-pointer hover:border-teal-300"
                            >
                              <option value="">Select an inquiry type</option>
                              <option value="Product">Product Inquiry</option>
                              <option value="Service">Service Inquiry</option>
                              <option value="Pricing">Pricing Inquiry</option>
                              <option value="Support">Support / Technical Inquiry</option>
                              <option value="Feedback">Feedback / Suggestion</option>
                              <option value="Complaint">Complaint</option>
                            </select>
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="region"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                              <MapPin size={16} className="text-white" />
                            </div>
                            Region
                          </FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              name="region"
                              className="w-full border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 outline-none cursor-pointer hover:border-teal-300"
                            >
                              <option value="">Select your region</option>
                              <option value="Dhaka">Dhaka</option>
                              <option value="Barishal">Barishal</option>
                              <option value="Chittagong">Chittagong</option>
                              <option value="Rangpur">Rangpur</option>
                              <option value="Rajshahi">Rajshahi</option>
                              <option value="Khulna">Khulna</option>
                              <option value="Sylhet">Sylhet</option>
                            </select>
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* First & Last Name */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold mb-3 block">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              name="firstName"
                              placeholder="John"
                              className="dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 border-2 border-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 hover:border-teal-300"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold mb-3 block">
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              name="lastName"
                              placeholder="Doe"
                              className="dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 border-2 border-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 hover:border-teal-300"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-linear-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                              <Mail size={16} className="text-white" />
                            </div>
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              name="email"
                              type="email"
                              placeholder="example@mail.com"
                              className="dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 border-2 border-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 hover:border-teal-300"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-linear-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                              <Phone size={16} className="text-white" />
                            </div>
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              name="phoneNumber"
                              type="tel"
                              placeholder="+88 01 XXX XXX XXX"
                              className="dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 border-2 border-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 hover:border-teal-300"
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-sm mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Description */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="dark:text-gray-200 text-gray-700 font-semibold mb-3 block">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            name="description"
                            rows={5}
                            placeholder="Tell us more about your inquiry..."
                            className="dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 border-2 border-gray-200 p-4 rounded-xl focus:ring-4 focus:ring-teal-400/30 focus:border-teal-400 transition-all duration-300 resize-none hover:border-teal-300"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <motion.div
                    className="flex justify-center pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 60,
                      duration: 0.8,
                    }}
                  >
                    <Button
                      type="submit"
                      className="group relative px-12 py-6 text-lg font-bold bg-linear-to-r from-green-500 via-teal-400 to-blue-500 text-white shadow-2xl shadow-teal-500/50 rounded-2xl hover:shadow-teal-500/70 hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        Submit Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-green-600 via-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-3 mt-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;