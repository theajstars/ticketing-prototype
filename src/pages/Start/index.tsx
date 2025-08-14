import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  CreditCard,
  Train,
  ArrowRight,
  ChevronDown,
  Search,
  Star,
} from "lucide-react";
import "./styles.scss";

interface Station {
  id: string;
  name: string;
  city: string;
  code: string;
}

interface TrainOption {
  id: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  seats: number;
  type: "Express" | "Local" | "Premium";
}

const stations: Station[] = [
  { id: "1", name: "Central Station", city: "New York", code: "NYS" },
  { id: "2", name: "Grand Central Terminal", city: "New York", code: "GCT" },
  { id: "3", name: "Penn Station", city: "New York", code: "PEN" },
  { id: "4", name: "Union Station", city: "Washington DC", code: "WAS" },
  { id: "5", name: "Chicago Union Station", city: "Chicago", code: "CHI" },
  {
    id: "6",
    name: "Los Angeles Union Station",
    city: "Los Angeles",
    code: "LAX",
  },
  { id: "7", name: "Boston South Station", city: "Boston", code: "BOS" },
  {
    id: "8",
    name: "Philadelphia 30th Street",
    city: "Philadelphia",
    code: "PHL",
  },
];

const trainOptions: TrainOption[] = [
  {
    id: "1",
    departureTime: "09:00",
    arrivalTime: "11:30",
    duration: "2h 30m",
    price: 45.0,
    seats: 156,
    type: "Express",
  },
  {
    id: "2",
    departureTime: "10:15",
    arrivalTime: "13:45",
    duration: "3h 30m",
    price: 32.5,
    seats: 89,
    type: "Local",
  },
  {
    id: "3",
    departureTime: "11:30",
    arrivalTime: "13:45",
    duration: "2h 15m",
    price: 67.0,
    seats: 45,
    type: "Premium",
  },
  {
    id: "4",
    departureTime: "13:00",
    arrivalTime: "15:30",
    duration: "2h 30m",
    price: 42.0,
    seats: 203,
    type: "Express",
  },
];

const StartPage: React.FC = () => {
  const [departureStation, setDepartureStation] = useState<Station | null>(
    null
  );
  const [arrivalStation, setArrivalStation] = useState<Station | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTrain, setSelectedTrain] = useState<TrainOption | null>(null);
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStep, setCurrentStep] = useState<
    "stations" | "trains" | "payment"
  >("stations");

  const filteredStations = stations.filter(
    (station) =>
      station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStationSelect = (
    station: Station,
    type: "departure" | "arrival"
  ) => {
    if (type === "departure") {
      setDepartureStation(station);
      setShowDepartureDropdown(false);
    } else {
      setArrivalStation(station);
      setShowArrivalDropdown(false);
    }
    setSearchQuery("");
  };

  const handleContinue = () => {
    if (departureStation && arrivalStation && selectedDate) {
      setCurrentStep("trains");
    }
  };

  const handleTrainSelect = (train: TrainOption) => {
    setSelectedTrain(train);
    setCurrentStep("payment");
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert("Payment processed successfully! Redirecting to ticket...");
  };

  const canContinue = departureStation && arrivalStation && selectedDate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl border-b border-white/20 p-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <Train className="w-6 h-6 text-dark-900" />
            </div>
            <h1 className="text-xl font-bold text-white">RailFlow</h1>
          </div>

          {/* Progress Steps */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${
                currentStep === "stations" ? "text-white" : "text-dark-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === "stations"
                    ? "bg-white text-dark-900"
                    : "bg-white/20 text-white"
                }`}
              >
                1
              </div>
              <span className="text-sm">Stations</span>
            </div>
            <ArrowRight className="w-4 h-4 text-dark-400" />
            <div
              className={`flex items-center space-x-2 ${
                currentStep === "trains" ? "text-white" : "text-dark-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === "trains"
                    ? "bg-white text-dark-900"
                    : "bg-white/20 text-white"
                }`}
              >
                2
              </div>
              <span className="text-sm">Trains</span>
            </div>
            <ArrowRight className="w-4 h-4 text-dark-400" />
            <div
              className={`flex items-center space-x-2 ${
                currentStep === "payment" ? "text-white" : "text-dark-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep === "payment"
                    ? "bg-white text-dark-900"
                    : "bg-white/20 text-white"
                }`}
              >
                3
              </div>
              <span className="text-sm">Payment</span>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Step 1: Station Selection */}
        {currentStep === "stations" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Plan Your Journey
              </h2>
              <p className="text-dark-300">
                Select your departure and arrival stations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Departure Station */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white">
                  From
                </label>
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowDepartureDropdown(!showDepartureDropdown)
                    }
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-left text-white hover:bg-white/20 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-dark-400" />
                      <span>
                        {departureStation
                          ? `${departureStation.name}, ${departureStation.city}`
                          : "Select departure station"}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-dark-400 transition-transform ${
                        showDepartureDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showDepartureDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl z-50">
                      <div className="p-3 border-b border-white/20">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark-400" />
                          <input
                            type="text"
                            placeholder="Search stations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredStations.map((station) => (
                          <button
                            key={station.id}
                            onClick={() =>
                              handleStationSelect(station, "departure")
                            }
                            className="w-full p-3 text-left text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-b-0"
                          >
                            <div className="font-medium">{station.name}</div>
                            <div className="text-sm text-dark-300">
                              {station.city} • {station.code}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrival Station */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-white">
                  To
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowArrivalDropdown(!showArrivalDropdown)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-left text-white hover:bg-white/20 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-dark-400" />
                      <span>
                        {arrivalStation
                          ? `${arrivalStation.name}, ${arrivalStation.city}`
                          : "Select arrival station"}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-dark-400 transition-transform ${
                        showArrivalDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showArrivalDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-2xl z-50">
                      <div className="p-3 border-b border-white/20">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark-400" />
                          <input
                            type="text"
                            placeholder="Search stations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredStations.map((station) => (
                          <button
                            key={station.id}
                            onClick={() =>
                              handleStationSelect(station, "arrival")
                            }
                            className="w-full p-3 text-left text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-b-0"
                          >
                            <div className="font-medium">{station.name}</div>
                            <div className="text-sm text-dark-300">
                              {station.city} • {station.code}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-white">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-400 text-dark-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
            >
              <span>Continue to Train Selection</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Step 2: Train Selection */}
        {currentStep === "trains" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Choose Your Train
              </h2>
              <p className="text-dark-300">
                {departureStation?.name} → {arrivalStation?.name} •{" "}
                {selectedDate}
              </p>
            </div>

            <div className="space-y-4">
              {trainOptions.map((train) => (
                <motion.div
                  key={train.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => handleTrainSelect(train)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-dark-400" />
                          <span className="text-white font-medium">
                            {train.departureTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-dark-400" />
                        <div className="flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-dark-400" />
                          <span className="text-white font-medium">
                            {train.arrivalTime}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-dark-300">
                        <span>Duration: {train.duration}</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{train.seats} seats available</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <div className="text-2xl font-bold text-white">
                        ${train.price}
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          train.type === "Premium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : train.type === "Express"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {train.type}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setCurrentStep("stations")}
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Back to Station Selection
            </button>
          </motion.div>
        )}

        {/* Step 3: Payment */}
        {currentStep === "payment" && selectedTrain && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Complete Your Booking
              </h2>
              <p className="text-dark-300">Secure payment for your journey</p>
            </div>

            {/* Journey Summary */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Journey Summary
              </h3>
              <div className="space-y-3 text-white">
                <div className="flex justify-between">
                  <span className="text-dark-300">Route:</span>
                  <span>
                    {departureStation?.name} → {arrivalStation?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Date:</span>
                  <span>{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Departure:</span>
                  <span>{selectedTrain.departureTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Arrival:</span>
                  <span>{selectedTrain.arrivalTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Duration:</span>
                  <span>{selectedTrain.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Train Type:</span>
                  <span>{selectedTrain.type}</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-2xl">${selectedTrain.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Payment Method
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    defaultChecked
                    className="w-4 h-4 text-white bg-white/10 border-white/20 focus:ring-white/50"
                  />
                  <CreditCard className="w-5 h-5 text-dark-400" />
                  <span className="text-white">Credit/Debit Card</span>
                </label>
                <label className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="wallet"
                    className="w-4 h-4 text-white bg-white/10 border-white/20 focus:ring-white/50"
                  />
                  <div className="w-5 h-5 bg-blue-600 rounded"></div>
                  <span className="text-white">Digital Wallet</span>
                </label>
                <label className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    className="w-4 h-4 text-white bg-white/10 border-white/20 focus:ring-white/50"
                  />
                  <div className="w-5 h-5 bg-green-600 rounded"></div>
                  <span className="text-white">Bank Transfer</span>
                </label>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              className="w-full bg-white hover:bg-gray-100 text-dark-900 font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pay ${selectedTrain.price}</span>
            </button>

            <button
              onClick={() => setCurrentStep("trains")}
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Back to Train Selection
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StartPage;
