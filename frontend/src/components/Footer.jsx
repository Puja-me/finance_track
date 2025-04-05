const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">TradeWise</h2>
            <p className="text-gray-400 mt-2">
              Your trusted platform for tracking stocks and financial markets.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Stocks</a></li>
              <li><a href="#" className="hover:text-white">Financial Tools</a></li>
              <li><a href="#" className="hover:text-white">Learn</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-gray-400 mt-2">📍 123 Finance Street, NY</p>
            <p className="text-gray-400">📞 +1 234 567 890</p>
            <p className="text-gray-400">✉️ support@tradewise.com</p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} TradeWise. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  