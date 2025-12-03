
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://static.readdy.ai/image/21157b32f65a0c4c24b8101274f60641/11caa737723ac06453aea8f10ecff760.png" 
              alt="London Strategy Centre"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Leading business consulting firm delivering strategic solutions and sustainable growth for companies worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                <i className="ri-linkedin-fill"></i>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                <i className="ri-youtube-fill"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/business-strategy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Business Strategy</Link></li>
              <li><Link href="/operations-optimization" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Operations Optimization</Link></li>
              <li><Link href="/growth-acceleration" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Growth Acceleration</Link></li>
              <li><Link href="/organizational-design" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Organizational Design</Link></li>
              <li><Link href="/financial-advisory" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Financial Advisory</Link></li>
              <li><Link href="/market-entry" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Market Entry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><Link href="/technology" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Technology</Link></li>
              <li><Link href="/financial-services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Financial Services</Link></li>
              <li><Link href="/healthcare" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Healthcare</Link></li>
              <li><Link href="/manufacturing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Manufacturing</Link></li>
              <li><Link href="/retail" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Retail & Consumer</Link></li>
              <li><Link href="/energy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Energy & Utilities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <i className="ri-map-pin-line mt-1"></i>
                <span>25 Cavendish Square<br />London W1G 0PN<br />United Kingdom</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>+44 20 7123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>hello@londonstrategy.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="ri-time-line"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 London Strategy Centre. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">Cookie Policy</Link>
            <Link href="https://readdy.ai/?origin=logo" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">Made with Readdy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}