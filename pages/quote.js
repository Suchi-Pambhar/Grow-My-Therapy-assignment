export default function Quote() {
  return (
    <div className="relative w-full h-[70vh] bg-cover bg-center quote-section">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <h2 className="quote text-white text-2xl sm:text-3xl md:text-4xl font-serif leading-relaxed max-w-3xl">
          "You don’t have to control your thoughts. You just have to stop letting them control you."
        </h2>
      </div>
      <p className="text-white relative z-10 flex items-center justify-center h-full px-6 text-center"> — Dan Millman </p>
    </div>
  );
}