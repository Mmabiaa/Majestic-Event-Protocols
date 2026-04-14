type EventsLightboxProps = {
  imageSrc: string | null;
  onClose: () => void;
};

export function EventsLightbox({ imageSrc, onClose }: EventsLightboxProps) {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <img
        src={imageSrc}
        alt="Event preview"
        className="max-w-full max-h-[90vh] rounded-2xl object-contain"
      />
    </div>
  );
}
