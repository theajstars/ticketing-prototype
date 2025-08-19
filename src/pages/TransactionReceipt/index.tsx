import React from "react";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  CheckCircle,
  Download,
  Share2,
  Train,
  MapPin,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

interface TicketData {
  id: string;
  departureStation: string;
  arrivalStation: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  busType: string;
  price: number;
  passengerName: string;
  seatNumber: string;
  transactionId: string;
  paymentMethod: string;
  timestamp: string;
}

const TransactionReceipt: React.FC = () => {
  const navigate = useNavigate();

  // Mock ticket data - in real app this would come from navigation state or API
  const ticketData: TicketData = {
    id: "TKT-2024-001",
    departureStation: "Warri Central Terminal",
    arrivalStation: "Asaba Main Station",
    date: "Dec 20, 2024",
    departureTime: "09:00",
    arrivalTime: "11:30",
    duration: "2h 30m",
    busType: "Express",
    price: 67500,
    passengerName: "John Doe",
    seatNumber: "A12",
    transactionId: "TXN-2024-001",
    paymentMethod: "Credit Card",
    timestamp: new Date().toLocaleString(),
  };

  const generateQRData = () => {
    return JSON.stringify({
      ticketId: ticketData.id,
      departure: ticketData.departureStation,
      arrival: ticketData.arrivalStation,
      date: ticketData.date,
      time: ticketData.departureTime,
      passenger: ticketData.passengerName,
      seat: ticketData.seatNumber,
      transactionId: ticketData.transactionId,
    });
  };

  const handleDownloadTicket = () => {
    // In a real app, this would generate and download a PDF ticket
    alert("Ticket download started!");
  };

  const handleShareTicket = () => {
    // In a real app, this would share the ticket
    if (navigator.share) {
      navigator.share({
        title: "My Bus Ticket",
        text: `Ticket from ${ticketData.departureStation} to ${ticketData.arrivalStation}`,
        url: window.location.href,
      });
    } else {
      alert("Sharing not supported on this device");
    }
  };

  const handleBackToHome = () => {
    navigate("/start");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl border-b border-white/20 p-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Train className="w-6 h-6 text-dark-900" />
            </div>
            <h1 className="text-xl font-bold text-white">EVBusFlow</h1>
          </div>
          <button
            onClick={handleBackToHome}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-dark-300">
            Your ticket has been booked successfully. You can now travel!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ticket Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Train className="w-6 h-6 text-blue-400" />
                <span>Ticket Details</span>
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-dark-300">Ticket ID:</span>
                  <span className="text-white font-mono font-semibold">
                    {ticketData.id}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-dark-300">Passenger:</span>
                  <span className="text-white font-semibold">
                    {ticketData.passengerName}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-dark-300">Seat Number:</span>
                  <span className="text-white font-semibold">
                    {ticketData.seatNumber}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-dark-300">Bus Type:</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {ticketData.busType}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Journey Information</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {ticketData.departureTime}
                    </div>
                    <div className="text-sm text-dark-300">Departure</div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-px bg-white/20 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">
                      {ticketData.arrivalTime}
                    </div>
                    <div className="text-sm text-dark-300">Arrival</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-dark-300">
                    Duration: {ticketData.duration}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-sm text-dark-300 mb-1">From</div>
                    <div className="text-white font-medium">
                      {ticketData.departureStation}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-dark-300 mb-1">To</div>
                    <div className="text-white font-medium">
                      {ticketData.arrivalStation}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <div className="text-sm text-dark-300 mb-1">Travel Date</div>
                  <div className="text-white font-semibold">
                    {ticketData.date}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* QR Code and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {/* QR Code */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Scan QR Code
              </h3>
              <div className="bg-white p-4 rounded-lg inline-block mb-4">
                <QRCodeSVG
                  value={generateQRData()}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-dark-300">
                This Code will be used to generate your ticket
              </p>
            </div>

            {/* Payment Details */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-purple-400" />
                <span>Payment Details</span>
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-300">Amount Paid:</span>
                  <span className="text-2xl font-bold text-white">
                    ₦{ticketData.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-dark-300">Payment Method:</span>
                  <span className="text-white">{ticketData.paymentMethod}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-dark-300">Transaction ID:</span>
                  <span className="text-white font-mono text-sm">
                    {ticketData.transactionId}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-dark-300">Payment Time:</span>
                  <span className="text-white text-sm">
                    {ticketData.timestamp}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadTicket}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Ticket</span>
              </button>

              <button
                onClick={handleShareTicket}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Share2 className="w-5 h-5" />
                <span>Share Ticket</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-3">
            Important Information
          </h3>
          <ul className="space-y-2 text-sm text-blue-300">
            <li>• Please arrive at the station 15 minutes before departure</li>
            <li>• Have your QR code ready for scanning</li>
            <li>• Valid ID may be required for verification</li>
            <li>• No refunds for missed departures</li>
            <li>• Keep this ticket safe throughout your journey</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TransactionReceipt;
