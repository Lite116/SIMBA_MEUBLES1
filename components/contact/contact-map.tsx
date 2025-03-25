export function ContactMap() {
  return (
    <div className="aspect-[16/9] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80939.8313994466!2d4.992272359966017!3d50.6573954295117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c10c03e1f6b76d%3A0x40099ab2f4d68c0!2s4280%20Hannut%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1733170199209!5m2!1sfr!2sfr"
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}