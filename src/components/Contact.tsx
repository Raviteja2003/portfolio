import React, { useState } from "react";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import { Mail, Send, Loader2 } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  contact: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const sendEmail: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
      formData.append("name", `${data.firstName} ${data.lastName || ''}`);
      formData.append("email", data.email);
      formData.append("phone", data.contact);
      formData.append("message", data.message);
      formData.append("from_name", "Portfolio Contact Form");
      formData.append("to_email", "ravitejat0406@gmail.com");
      formData.append("subject", `New Message from ${data.firstName} ${data.lastName || ''}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      console.error('Web3Forms Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ravitejat0406@gmail.com",
      href: "mailto:ravitejat0406@gmail.com",
    },
  ];

  return (
    <div className="py-20" id="contact">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Whether you have questions or you would just like to say hello, I&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Get in Touch
              </h3>
              <p className="mb-6 text-gray-600">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md group"
                  >
                    <div className="p-3 text-blue-600 transition-colors duration-300 bg-blue-100 rounded-full group-hover:bg-indigo-200">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(sendEmail)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className={`${errors.firstName ? "border-red-500 focus:border-red-500" : ""}`}
                        {...register("firstName", {
                          required: "First name is required",
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" {...register("lastName")} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Phone Number *</Label>
                    <Input
                      id="contact"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={`${errors.contact ? "border-red-500 focus:border-red-500" : ""}`}
                      {...register("contact", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.contact && (
                      <p className="text-sm text-red-500">{errors.contact.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      className={`resize-none ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters long",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;