import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        title="Hotel Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7095706270093!2d77.4223410749559!3d28.608488385173114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7ebb188099%3A0xebad23695e356f7c!2sBanana%20Blossom%20Rooftop%20Fine%20Dine%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1748927121120!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
