import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com';
import React from "react";



export const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    // EmailJS integration
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
          .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                setFormData({ name: "", email: "", message: "" }); // Clear form after submission
          })
          .catch((error) => {
                console.error(error.text);
                alert('Failed to send message. Please try again later.');
          });
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-black px-4">
        <RevealOnScroll>
            <div className="max-w-2xl w-full border border-gray-700 rounded-xl text-center mx-auto p-8">
                <div className="px-4 w-100 hover:-translate-y-1 transition-all max-w-xl mx-auto rounded-xl p-8 border border-white/10 bg-gray-900/40">
                    <h2 className="font-bold text-3xl md:text-6xl mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter Your Name" 
                                required className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            />

                        </div>
                        <div className="relative">
                            <input type="text" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="email@gmail.com" 
                                required className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            />

                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write Your Message Here..."
                                required 
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />

                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
                    </form>
                </div>
            </div>
        </RevealOnScroll>


    </section>
}