// components/WhatsAppButton.tsx
type WhatsAppButtonProps = {
    phone: string;
    message?: string;
    className?: string;
    label?: string;
    ariaLabel?: string;
    onClick?: () => void;
  };
  
  const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.17 1.6 5.99L0 24l6.26-1.59A11.95 11.95 0 0012 24c6.63 0 12-5.35 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.5c-1.81 0-3.55-.5-5.07-1.44l-.36-.21-3.72.95.98-3.63-.23-.37A9.5 9.5 0 012.5 12 9.5 9.5 0 1112 21.5z"/>
      <path d="M17.18 14.11c-.27-.14-1.59-.78-1.84-.87-.24-.09-.42-.14-.6.14-.18.27-.71.87-.87 1.05-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.36-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.33-.02-.48-.07-.14-.6-1.44-.82-1.98-.22-.53-.45-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.33-.25.25-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.14.18 1.9 2.95 4.6 4.02 3.2 1.26 3.2.84 3.77.79.57-.05 1.85-.75 2.11-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.18-.57-.32z"/>
    </svg>
  );
  
  export default function WhatsAppButton({
    phone,
    message,
    className = "",
    label = "Contact via WhatsApp",
    ariaLabel,
    onClick,
  }: WhatsAppButtonProps) {
    if (!phone) return null;
  
    const msg = message ? `?text=${encodeURIComponent(message)}` : "";
    const href = `https://wa.me/${phone}${msg}`;
  
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ?? label}
        title={label}
        onClick={onClick}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        <WhatsAppIcon className="w-12 h-12 text-green-500" />
      </a>
    );
  }
  