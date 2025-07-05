export default function Home() {
  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center bg-[#105d01] bg-opacity-50 text-white overflow-hidden">
      <div className="inset-0 flex justify-center items-center">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video w-full h-full object-cover"
        >
          <source src="/bg-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      <div className="video-overlay"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="header text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6 text-center px-4">
            Psychological Care for <br /> Change, Insight, and Well-Being
          </h1>
          <p className="hero-content ttext-base sm:text-lg md:text-xl mb-6 font-light text-center px-4">
            Offering individual and couple therapy for adults via telehealth in LA and <span className="cursor-pointer underline" onClick={() => window.open("https://psypact.gov/page/psypactmap")}>other states</span> of California.
          </p>
          <button className="hero-button bg-[#aac8c1] hover:bg-[#94b4ae] text-gray-900 font-medium uppercase tracking-wide font-lora py-3 px-6 sm:px-8 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out mx-auto block" onClick={() => window.open("https://forms.gle/MZUCctRdQqFLMvQ66")}>
  Schedule a Consultation
</button>
        </div>
      </div>
      </div>
  );
}