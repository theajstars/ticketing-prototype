import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Train,
  Smartphone,
  CreditCard,
  QrCode,
  Receipt,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import "./App.css";

const slides = [
  {
    id: 1,
    title: "Next-Gen Ticketing Solution",
    subtitle:
      "Revolutionizing public transportation with seamless digital ticketing",
    icon: <Train className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="slide-title gradient-text">RailFlow</h1>
          <p className="slide-subtitle">
            A comprehensive digital ticketing platform that transforms how
            passengers purchase, manage, and validate their train tickets
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center space-x-8"
        >
          <div className="feature-card">
            <Smartphone className="w-16 h-16 text-accent-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Mobile & Web App
            </h3>
            <p className="text-white/80">Cross-platform accessibility</p>
          </div>
          <div className="feature-card">
            <QrCode className="w-16 h-16 text-accent-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              QR Code Tickets
            </h3>
            <p className="text-white/80">Instant digital validation</p>
          </div>
          <div className="feature-card">
            <Shield className="w-16 h-16 text-accent-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure Payments
            </h3>
            <p className="text-white/80">Multiple payment options</p>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "User Experience Journey",
    subtitle: "From selection to boarding - seamless in 3 simple steps",
    icon: <Users className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="slide-title">User Journey</h2>
          <p className="slide-subtitle">
            Experience the simplicity of our ticketing process
          </p>
        </motion.div>

        <div className="flex justify-center items-center space-x-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-full w-24 h-24 flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl font-bold text-white">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Select Route
            </h3>
            <p className="text-white/80 max-w-xs">
              Choose destination and current location
            </p>
          </motion.div>

          <ArrowRight className="w-12 h-12 text-white/60" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-full w-24 h-24 flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl font-bold text-white">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Make Payment
            </h3>
            <p className="text-white/80 max-w-xs">
              Secure digital payment processing
            </p>
          </motion.div>

          <ArrowRight className="w-12 h-12 text-white/60" />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-full w-24 h-24 flex items-center justify-center mb-4 mx-auto">
              <span className="text-3xl font-bold text-white">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Get QR Code
            </h3>
            <p className="text-white/80 max-w-xs">
              Instant digital ticket generation
            </p>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Mobile App Interface",
    subtitle: "Beautiful, intuitive design for seamless ticket booking",
    icon: <Smartphone className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="flex items-center justify-center space-x-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mobile-mockup"
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">RailFlow</h3>
              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-medium">From: Central Station</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="font-medium">To: Downtown Terminal</span>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">Departure: 2:30 PM</span>
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold">
                Book Ticket - $4.50
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-left max-w-md"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Mobile-First Design
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white/90">Intuitive route selection</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white/90">Real-time pricing</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white/90">Multiple payment methods</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-white/90">Offline ticket access</span>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "QR Code Ticketing System",
    subtitle: "Instant validation and seamless boarding experience",
    icon: <QrCode className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="flex items-center justify-center space-x-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="qr-code"
        >
          <div className="w-48 h-48 bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 64 }, (_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 ${
                    Math.random() > 0.5 ? "bg-white" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">RailFlow Ticket</p>
            <p className="text-xs text-gray-500">Valid until 2:30 PM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-left max-w-md"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Smart Validation
          </h3>
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Scanning Stations
              </h4>
              <p className="text-white/80">
                Automated QR code scanners at ticketing offices
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Instant Receipt
              </h4>
              <p className="text-white/80">
                Printed receipt for boarding verification
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                Real-time Updates
              </h4>
              <p className="text-white/80">
                Live status and platform information
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Payment & Security",
    subtitle: "Multiple payment options with enterprise-grade security",
    icon: <Shield className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="slide-title">Payment Solutions</h2>
          <p className="slide-subtitle">
            Secure, flexible payment options for every passenger
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="feature-card"
          >
            <CreditCard className="w-20 h-20 text-accent-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Credit/Debit Cards
            </h3>
            <p className="text-white/80">Visa, Mastercard, American Express</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-8 h-6 bg-blue-600 rounded"></div>
              <div className="w-8 h-6 bg-red-600 rounded"></div>
              <div className="w-8 h-6 bg-green-600 rounded"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="feature-card"
          >
            <Smartphone className="w-20 h-20 text-accent-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Digital Wallets
            </h3>
            <p className="text-white/80">Apple Pay, Google Pay, Samsung Pay</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-8 h-6 bg-black rounded"></div>
              <div className="w-8 h-6 bg-blue-500 rounded"></div>
              <div className="w-8 h-6 bg-green-500 rounded"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="feature-card"
          >
            <Shield className="w-20 h-20 text-accent-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Bank Transfers
            </h3>
            <p className="text-white/80">Direct bank integration</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-8 h-6 bg-blue-800 rounded"></div>
              <div className="w-8 h-6 bg-green-800 rounded"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Security Features
          </h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/90">End-to-end encryption</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/90">PCI DSS compliance</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/90">Fraud detection</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/90">Secure authentication</span>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Business Benefits",
    subtitle: "Transform your transportation business with digital innovation",
    icon: <TrendingUp className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="slide-title">Business Impact</h2>
          <p className="slide-subtitle">
            Measurable benefits for transportation operators and passengers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              For Operators
            </h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Revenue Growth
                  </h4>
                </div>
                <p className="text-white/80">
                  Increase ticket sales by 25% through digital channels
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Operational Efficiency
                  </h4>
                </div>
                <p className="text-white/80">Reduce manual processing by 60%</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Customer Satisfaction
                  </h4>
                </div>
                <p className="text-white/80">
                  Improve passenger experience scores by 40%
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              For Passengers
            </h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Convenience
                  </h4>
                </div>
                <p className="text-white/80">
                  Book tickets anytime, anywhere in seconds
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Time Savings
                  </h4>
                </div>
                <p className="text-white/80">Skip queues and board faster</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Security</h4>
                </div>
                <p className="text-white/80">
                  Digital tickets can't be lost or stolen
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Implementation Roadmap",
    subtitle: "Phased rollout for smooth transition and maximum impact",
    icon: <Zap className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="slide-title">Implementation Plan</h2>
          <p className="slide-subtitle">
            Strategic phases for successful deployment and adoption
          </p>
        </motion.div>

        <div className="flex justify-center items-center space-x-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 w-64">
              <div className="text-4xl font-bold text-white mb-2">Phase 1</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Foundation
              </h3>
              <div className="text-white/90 text-sm space-y-2">
                <p>• Core platform development</p>
                <p>• Mobile app beta</p>
                <p>• Payment integration</p>
                <p>• Security testing</p>
              </div>
              <div className="text-white/70 text-xs mt-4">Weeks 1-8</div>
            </div>
          </motion.div>

          <ArrowRight className="w-12 h-12 text-white/60" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 w-64">
              <div className="text-4xl font-bold text-white mb-2">Phase 2</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Pilot Launch
              </h3>
              <div className="text-white/90 text-sm space-y-2">
                <p>• Limited user testing</p>
                <p>• QR code validation</p>
                <p>• Staff training</p>
                <p>• Performance optimization</p>
              </div>
              <div className="text-white/70 text-xs mt-4">Weeks 9-16</div>
            </div>
          </motion.div>

          <ArrowRight className="w-12 h-12 text-white/60" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 w-64">
              <div className="text-4xl font-bold text-white mb-2">Phase 3</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Full Rollout
              </h3>
              <div className="text-white/90 text-sm space-y-2">
                <p>• Public launch</p>
                <p>• Marketing campaign</p>
                <p>• Support system</p>
                <p>• Analytics dashboard</p>
              </div>
              <div className="text-white/70 text-xs mt-4">Weeks 17-24</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Success Metrics
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">25%</div>
              <div className="text-white/80">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">60%</div>
              <div className="text-white/80">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">40%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Get Started Today",
    subtitle: "Transform your transportation business with RailFlow",
    icon: <Star className="w-32 h-32 text-white opacity-20" />,
    content: (
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="slide-title">Ready to Begin?</h2>
          <p className="slide-subtitle">
            Join the digital revolution in public transportation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Next Steps</h3>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <span className="text-white/90">
                Schedule a consultation call
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <span className="text-white/90">
                Review technical requirements
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <span className="text-white/90">
                Customize solution for your needs
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <span className="text-white/90">Begin implementation</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="text-2xl font-semibold text-white mb-4">
            Contact Information
          </div>
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-lg font-semibold text-accent-400 mb-2">
                Email
              </div>
              <div className="text-white/80">hello@railflow.com</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-accent-400 mb-2">
                Phone
              </div>
              <div className="text-white/80">+1 (555) 123-4567</div>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-12 py-4 rounded-2xl text-xl font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    ),
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-white/20 backdrop-blur-lg rounded-full p-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ArrowRight className="w-6 h-6 transform rotate-180" />
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 backdrop-blur-lg text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Slide Counter */}
      <div className="fixed bottom-4 right-4 z-40 bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Current Slide */}
      <div className="slide">
        {slides[currentSlide].icon && (
          <div className="floating-element top-10 right-10">
            {slides[currentSlide].icon}
          </div>
        )}

        {slides[currentSlide].content}
      </div>

      {/* Keyboard Navigation */}
      <div className="fixed bottom-4 left-4 z-40 bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm">
        Use ← → keys or click to navigate
      </div>
    </div>
  );
}

export default App;
