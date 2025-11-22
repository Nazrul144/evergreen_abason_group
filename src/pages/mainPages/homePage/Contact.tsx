"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, SquareUser, MapPin } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Swal from "sweetalert2";

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

// ---------------- Component ----------------
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
            icon: "success"
          });
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="lg:px-44 md:px-10 py-16 dark:bg-gray-900">
      <h1
        className={`${playfair.className} text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 bg-clip-text text-transparent`}
      >
        Contact Us
      </h1>

      <div
        className="
          max-w-4xl mx-auto p-10 rounded-2xl 
          backdrop-blur-xl bg-white/10 dark:bg-gray-800/30 
          border border-white/20 dark:border-gray-700/30 
          shadow-xl
        "
      >
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(sendEmail)}
            className="space-y-10"
          >
            {/* Inquiry + Region */}
            <div className="grid lg:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="inquiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-200 flex items-center gap-2">
                      <SquareUser size={16} /> Inquiry Type
                    </FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        name="inquiry"
                        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-3 rounded-md focus:ring-2 focus:ring-teal-400"
                      >
                        <option value="">Select</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-200 flex items-center gap-2">
                      <MapPin size={16} /> Region
                    </FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        name="region"
                        className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-3 rounded-md focus:ring-2 focus:ring-teal-400"
                      >
                        <option value="">Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                      </select>
                    </FormControl>
                    <FormMessage />
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
                    <FormLabel className="dark:text-gray-200">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        name="firstName"
                        placeholder="John"
                        className="dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-200">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        name="lastName"
                        placeholder="Doe"
                        className="dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
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
                    <FormLabel className="dark:text-gray-200 flex items-center gap-2">
                      <Mail size={16} /> Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        name="email"
                        type="email"
                        placeholder="example@mail.com"
                        className="dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-gray-200 flex items-center gap-2">
                      <Phone size={16} /> Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        name="phoneNumber"
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                      />
                    </FormControl>
                    <FormMessage />
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
                  <FormLabel className="dark:text-gray-200">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      name="description"
                      rows={5}
                      placeholder="Tell us more..."
                      className="dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="px-10 py-3 text-lg bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 text-white shadow-md rounded-xl hover:opacity-90 transition cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
