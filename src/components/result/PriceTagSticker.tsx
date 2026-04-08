"use client";

import { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { stickerPrint, fadeInUp } from "@/lib/animations";

interface PriceTagStickerProps {
  total: number;
}

export function PriceTagSticker({ total }: PriceTagStickerProps) {
  const stickerRef = useRef<HTMLDivElement>(null);
  const [sharing, setSharing] = useState(false);

  // Generate deterministic barcode widths
  const barcodeWidths = useMemo(
    () => Array.from({ length: 30 }, (_, i) => (i * 7 + 3) % 5 > 2 ? 3 : 1),
    []
  );

  async function handleShare() {
    if (!stickerRef.current || sharing) return;
    setSharing(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      await document.fonts.ready;
      const canvas = await html2canvas(stickerRef.current, {
        scale: 2,
        backgroundColor: "#FFFFFF",
        useCORS: true,
        logging: false,
      });
      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b!), "image/png", 1.0)
      );
      const file = new File([blob], "my-digital-price-tag.png", {
        type: "image/png",
      });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "My Digital Price Tag",
          text: `My data is worth $${total.toFixed(2)}/year to advertisers. Find out yours at trafi.cc`,
          files: [file],
        });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "my-digital-price-tag.png";
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch {
      // User cancelled share or error
    } finally {
      setSharing(false);
    }
  }

  return (
    <motion.section
      id="price-tag"
      className="flex flex-col items-center scroll-mt-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={stickerPrint} style={{ originY: 0 }}>
        {/* Capture target — inline styles for html2canvas */}
        <div
          ref={stickerRef}
          style={{
            width: 340,
            padding: 32,
            background: "#FFFFFF",
            borderRadius: 16,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <div
            style={{
              borderBottom: "2px dashed #E2E8F0",
              paddingBottom: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: 3,
                fontWeight: 600,
              }}
            >
              Your Digital Price Tag
            </div>
          </div>

          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#0A0A0F",
              fontFamily: "'JetBrains Mono', monospace",
              lineHeight: 1,
            }}
          >
            ${total.toFixed(2)}
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#64748B",
              marginTop: 4,
              fontWeight: 500,
            }}
          >
            per year
          </div>

          {/* Barcode decoration */}
          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 2,
              height: 40,
              alignItems: "stretch",
            }}
          >
            {barcodeWidths.map((w, i) => (
              <div
                key={i}
                style={{
                  width: w,
                  background: "#0A0A0F",
                  height: "100%",
                }}
              />
            ))}
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "#94A3B8",
              letterSpacing: 1,
            }}
          >
            trafi.cc
          </div>
        </div>
      </motion.div>

      <motion.button
        onClick={handleShare}
        disabled={sharing}
        variants={fadeInUp}
        className="mt-6 px-8 py-3 rounded-full bg-accent text-white font-medium text-sm hover:brightness-110 transition-all cursor-pointer disabled:opacity-50"
      >
        {sharing ? "Generating..." : "📤 Share Price Tag"}
      </motion.button>
    </motion.section>
  );
}
