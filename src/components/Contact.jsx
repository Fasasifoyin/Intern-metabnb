import React from "react";

const Contact = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <div className="w-100 d-flex justify-content-center">
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
          }}
          className="d-flex flex-column gap-3 align-items-center"
        >
          <div className="text-center">
            <h1 className="texting-white font mb-3">ANY QUESTIONS?</h1>
            <p className="text-white fs-5" style={{ opacity: "0.7" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing el. Color sit,
              amet consectetur adipisicing{" "}
            </p>
          </div>
          <div style={{ width: "75%" }}>
            <form >
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Telephone Number" />
                <textarea  placeholder="Your Message"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
