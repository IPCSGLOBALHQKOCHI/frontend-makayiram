import { FormEvent, useEffect, useState } from "react";
import Contact from "../../assets/ContactUs.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://makayiram-mailer.vercel.app/api/send-email`,
        // `http://localhost:8000/`,
        // `https://makayiram.com/backend/phpMailer/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", comment: "" });
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      style={{ "--image-url": `url(${Contact})` } as any}
      className={`w-full flex justify-center font-pop bg-[image:var(--image-url)] min-h-[80vh] bg-cover bg-center'`}
    >
      <div className="bg-black/50 w-full flex justify-center ">
        <div className="flex flex-col lg:flex-row justify-between max-w-screen-xl lg:py-5">
          <div className="w-full lg:w-1/2 px-2 md:px-10 lg:px-0 py-10 lg:py-0 !ml-10">
            <div className="bg-[#016401] w-fit p-2 rounded text-white font-semibold min-w-[200px] md:min-w-[300px] text-center">
              <h1>Contact Us</h1>
            </div>
            <div className="py-4 text-white space-y-5 text-sm md:text-lg ">
              <h1 className="text-5xl font-bold mt-4">Makayiram Retreat</h1>
              <div>
                <p className="text-xl font-medium mt-2">( A unit of Makayiram Plantations Pvt. Ltd )</p>
                <p className="text-xl font-medium mt-2">Periyachola, Pothamedu, Munnar - 685612</p>
              </div>
              <div className="flex gap-5">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt />
                  <p className="text-2xl font-medium mt-2">+91 81389 27080</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt />
                  <p className="text-2xl font-medium mt-2">+91 85909 87080</p>
                </div>
              </div>
              <p className="text-2xl text-justify w-[89%] leading-normal font-medium">
                The route to Makayiram Retreat shown in Google Maps has steep
                curves on the way.We advice you to proceed in the Munnar
                direction and take the right turn towards Bison Valley at the
                Headworks Dam.
              </p>
              <h2 className="text-lg">Registered Office:</h2>
              <p className="text-2xl w-[90%]">
                6th Floor,Metro Plaza,Market Road, Kochi, Kerala - 682 014
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-5 md:px-20 py-5">
            <form
              onSubmit={handleSubmit}
              className="space-y-7 bg-green-600/30 p-10 rounded-lg"
            >
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Your Comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white text-[#016401] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
