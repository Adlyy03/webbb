(function () {
  // Load Tailwind CSS dynamically
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
  document.head.appendChild(link);

  // Customization code (example)
  const config = {
    theme: {
      extend: {
        colors: {
          customColor: '#3490dc'
        },
      },
    },
  };

  // Inject the custom Tailwind config
  window.tailwind.config = config;
})();

// Nomor WhatsApp tujuan (tanpa tanda +, cukup kode negara dan nomor)
const phoneNumber = "628123456789"; 

// Pesan custom yang ingin dikirim
const customMessage = "Halo, saya ingin bertanya tentang produk Anda.";

// Encode pesan agar URL aman
const encodedMessage = encodeURIComponent(customMessage);

// Buat link WhatsApp
const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

console.log("Link WhatsApp custom:", waLink);
