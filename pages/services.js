import Navbar from '../components/Navbar'

export default function Services() {
  const services = [
    {
      title: 'Anxiety & Stress Management',
      desc: 'Learn to manage worry, panic, and overthinking with proven techniques like CBT and mindfulness.',
      img : '/healthcare.jpeg',
    },
    {
      title: 'Relationship Counseling',
      desc: 'Improve communication, rebuild trust, and deepen emotional connection with your partner or loved ones.',
      img : '/relationship.jpeg',
    },
    {
      title: 'Trauma Recovery',
      desc: 'Heal from emotional wounds with a gentle, guided approach using evidence-based trauma therapy.',
      img : '/trauma.jpeg',
    },
  ]

  return (
  <div className='focus-section'>
    <h2 className="why-title text-3xl sm:text-4xl font-semibold mb-4 text-[#1f3c2f]">
        It’s not about being broken—it’s about becoming more whole.
      </h2>
      <p className="why-desc text-base sm:text-lg text-gray-700 mb-4">
        Therapy is a safe and supportive space to explore your emotions, navigate challenges, and grow from within.
        Whether you&apos;re seeking clarity, connection, or change, therapy can be the first step toward a more grounded and fulfilling life. Therapy offers you the time and space to work toward wellness and peace.


      </p>
      <hr className="why-divider mt-10 border-t border-[#1f3c2f] opacity-30" />

    <section>
  <h2 className="focus-title">Areas of Focus</h2>
  <div className="focus-grid">
    {services.map((area, index) => (
      <div key={index} className="focus-card">
        <img src={area.img} alt={area.title} className="focus-img" />
        <h3 className="focus-heading">{area.title}</h3>
        <p className="focus-desc">{area.desc}</p>
      </div>
    ))}
  </div>
</section>
  </div>
);
}
