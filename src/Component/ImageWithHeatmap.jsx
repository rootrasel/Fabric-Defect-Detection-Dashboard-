export function ImageWithHeatmap({ imageUrl, heatmapUrl, opacity }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border bg-white">
      {imageUrl ? (
        <img src={imageUrl} alt="uploaded" className="w-full object-contain max-h-[420px]" />
      ) : (
        <div className="w-full aspect-video grid place-items-center text-gray-400">Image Preview</div>
      )}
      {heatmapUrl && (
        <img
          src={heatmapUrl}
          alt="heatmap"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none mix-blend-multiply"
          style={{ opacity }}
        />
      )}
    </div>
  );
}
