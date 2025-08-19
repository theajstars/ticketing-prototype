import { motion } from "framer-motion";
import { ArrowRight, Lock, Mail } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import logo from "../../logo.svg";
import {
  PasswordInput,
  TextInput,
  Checkbox,
  TextInputProps,
  PasswordInputProps,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Images } from "../../lib/data";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<{
    email: string;
    password: string;
    rememberMe: boolean;
  }>({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: {
      email: (value: string) =>
        /\S+@\S+\.\S+/.test(value) ? null : "Please enter a valid email",
      password: (value: string) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (values: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/start");
    }, 1500);
  };

  const inputProps: TextInputProps & PasswordInputProps = {
    styles: {
      label: {
        fontSize: 15,
        marginBottom: 4,

        marginLeft: 4,
      },
    },
    size: "md",
    required: true,
    withAsterisk: true,
    className: "text-white",
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-full flex justify-center">
            <img
              src={Images.Logo}
              alt="Logo"
              className="w-20 h-20 text-dark-900"
            />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Delta State Government of Nigeria EV Bus System Portal
          </h1>
          <p className="text-dark-300">Welcome back to your journey</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-6">
            {/* Email Field */}

            <TextInput
              name="email"
              label="Email Address"
              {...inputProps}
              placeholder="Enter your email"
              leftSection={<Mail className="h-5 w-5 text-dark-400" />}
              {...form.getInputProps("email")}
            />

            {/* Password Field */}

            <PasswordInput
              label="Password"
              {...inputProps}
              placeholder="Enter your password"
              leftSection={<Lock className="h-5 w-5 text-dark-400" />}
              {...form.getInputProps("password")}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                {...form.getInputProps("rememberMe", { type: "checkbox" })}
              />
              <button
                type="button"
                className="text-sm text-white hover:text-gray-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-400 text-dark-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
          {/* Divider */}
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-dark-300">
            Don't have an account?{" "}
            <button className="text-white hover:text-gray-300 font-medium transition-colors">
              Sign up
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
