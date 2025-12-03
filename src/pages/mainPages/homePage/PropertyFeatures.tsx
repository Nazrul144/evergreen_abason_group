import { Home, Shield, Bed, Zap, Camera, Car } from "lucide-react";
import Link from "next/link";

const PropertyFeatures = () => {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      text: "Modern architectural design",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Earthquake-resistant RCC structure",
    },
    {
      icon: <Bed className="w-6 h-6" />,
      text: "Interior Features: 4 Bed rooms, 3 Bathrooms, 3 Balcony, Drawing Dinning, Family Living, Kitchen",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "2 Lifts, generator & rooftop garden",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      text: "24 hrs CCTV surveillance",
    },
    {
      icon: <Car className="w-6 h-6" />,
      text: "Car parking and community space",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-bounce">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-green-400 via-emerald-500 to-teal-500 text-transparent bg-clip-text px-8 py-4 rounded-lg shadow-2xl">
              FEATURES
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-emerald-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-linear-to-r from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
            Book Your Land Share Now
          </h3>
          <p className="text-2xl md:text-3xl text-gray-300 font-semibold">&</p>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-red-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
            Get Honda SP 125cc
          </h4>

          <Link href="/contact">
            <button className="mt-8 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-600 text-white font-bold text-lg rounded-full hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 cursor-pointer">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PropertyFeatures;
