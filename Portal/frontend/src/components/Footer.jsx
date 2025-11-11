import React from "react";
import bag_icon from "../assets/bag_icon.png"; // ✅ Make sure this path is correct

const Footer = () => {
  return (
    <>
      <style>{`
        footer {
          background: linear-gradient(135deg, #5E17EB, #9C27B0);
          color: white;
          text-align: center;
          padding: 30px 10px;
        }

        footer img {
          width: 40px;
          height: 40px;
          margin-bottom: 10px;
        }

        footer a {
          color: #FFD700;
          text-decoration: none;
          font-weight: 500;
        }

        footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <footer>
        <img src={bag_icon} alt="JobFindr Logo" />
        <h2 className="text-lg font-semibold">JobFindr</h2>
        <p>Find your dream job or the perfect candidate with ease.</p>
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} JobFindr. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
