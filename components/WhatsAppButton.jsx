export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94777060211"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed z-[70]
        bottom-[max(1.25rem,env(safe-area-inset-bottom))]
        right-[max(1.25rem,env(safe-area-inset-right))]
        bg-green-500 hover:bg-green-600
        text-white font-semibold
        w-14 h-14 rounded-full
        flex items-center justify-center
        shadow-lg transition
      "
      title="WhatsApp"
    >
      💬
    </a>
  );
}