import { useRouter } from 'next/router';
import Home from '.';

const HomeButton = () => {
  const router = useRouter();

  return (
    <span
      onClick={() => router.push('/')}
      className="cursor-pointer text-blue-600 underline hover:text-blue-800"
    >
      Home
    </span>
  );
};

const Privacy = () => {
  const router = useRouter();

  return (
    <span
        onClick={() => router.push('/privacy')}
        className="cursor-pointer underline hover:text-gray-800 mx-2"
      >
        Privacy Policy
      </span>
  );
}

export default function Info() {

    function EmailLink() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:serena@blakepsychology.com';
  };

  return (
    <button
      onClick={handleEmailClick}
      className="text-blue-600 underline hover:text-blue-800"
    >
      serena@blakepsychology.com
    </button>
  );
}
    return (
        <div className="info-section">
        <h2>Dr. Serena Blake, PsyD (Clinical Psychologist) </h2>
        <br></br>
        <span onClick={() => window.location.href = 'mailto:serena@blakepsychology.com'}
        className="cursor-pointer text-green-600 underline hover:text-green-800">
            serena@blakepsychology.com
        </span>
        <p>Phone: <span onClick={() => window.location.href = 'tel:(323) 555-0192'} 
            className="cursor-pointer text-green-600 underline hover:text-gree-800"> (323) 555-0192 </span></p>
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <HomeButton /> <Privacy />
    </div>
    );
}