import { useEffect, useRef } from "react";

const PlayDoom = () => {
  const dosRef = useRef(null);
  const emulatorRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (window.Dos) {
      // @ts-ignore
      const Dos = window.Dos;
      emulatorRef.current = Dos(dosRef.current, {
        url: "https://cdn.dos.zone/custom/dos/doom.jsdos",
        // @ts-ignore
        onDosReady: (fs, main) => {
          // @ts-ignore
          const canvas = dosRef.current.querySelector("canvas");
          if (canvas) {
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.objectFit = "contain";
            canvas.style.display = "block";
            canvas.style.margin = "0 auto"; // Center the canvas within the container
          }

          // Hide sidebar elements
          // @ts-ignore
          const sidebar = dosRef.current.querySelector(".sidebar");
          if (sidebar) {
            sidebar.style.display = "none";
          }
        },
      });
    } else {
      console.error("JS-DOS library not loaded.");
    }

    // Cleanup the emulator when the component unmounts
    return () => {
      if (emulatorRef.current) {
        // @ts-ignore
        emulatorRef.current.stop();
        emulatorRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Play Doom</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Ready to relive the iconic experience of Doom? Use the emulator below to dive right in. No downloads needed!
      </p>

      <div
        ref={dosRef}
        className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-lg"
        style={{ width: "640px", height: "400px", position: "relative" }}
      ></div>

      <p className="text-sm text-gray-400 mt-4 text-center">
        Disclaimer: Doom is a trademark of id Software. This is a tribute and uses publicly available resources.
      </p>
    </div>
  );
};

export default PlayDoom;
