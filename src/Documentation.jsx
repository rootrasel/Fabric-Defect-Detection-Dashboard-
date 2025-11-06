import React from "react";
import { Footer } from "./Component/Footer";
import { Header } from "./Component/Header";

const Documentation = () => {
  return (
    <div className="min-h-dvh  transition-colors duration-300">
      <Header />

      <div className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 border-b pb-4">
          Fabric Defect Detection – Documentation
        </h1>

        {/* Section 1: Model Description */}
        <section className="rounded-xl border p-8 mb-12">
          <h2 className="text-3xl font-bold mb-5 border-b pb-2">
            Model Description: Fabric Defect Detection
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            In this project, an <strong>object detection-based model (YOLOv8m)</strong> was implemented to accurately identify fabric defects. While initial
            requirements considered a classification approach, the dataset’s
            structure, featuring bounding box annotations rather than separate
            "Defective" and "Non-Defective" categories, necessitated a detection
            model for efficient processing.
          </p>
          <p className="text-lg leading-relaxed">
            When a defect is successfully detected, the model classifies the
            fabric as <strong>“Defective”</strong> and provides a corresponding
            confidence score. Conversely, if no defects are found, the fabric is
            classified as <strong>“Non-Defective.”</strong> This method allows
            for practical binary classification by leveraging detection results
            without altering the original dataset format.
          </p>
        </section>

        {/* Section 2: Why YOLOv8m Model is Suitable */}
        <section className="rounded-xl border p-8 mb-12">
          <h2 className="text-3xl font-bold mb-5 border-b pb-2">
            Why YOLOv8m Model is Ideal for Fabric Defect Detection
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The <strong>YOLOv8m</strong> model stands out for its balanced
            performance across <strong>speed, accuracy,</strong> and{" "}
            <strong>feature extraction</strong>. Fabric defects are often small
            and subtle, posing a significant challenge. YOLOv8m excels in this
            domain due to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-3 text-lg pl-4">
            <li>
              A <strong>CSPDarknet-based backbone</strong> that efficiently
              learns fine textures and small patterns.
            </li>
            <li>
              The <strong>medium (m) version</strong> balances detailed feature
              capture and high inference speed.
            </li>
            <li>
              An <strong>anchor-free detection head</strong> improves performance
              on irregular and tiny defects.
            </li>
            <li>
              Advanced features like <strong>auto-shape</strong> and{" "}
              <strong>mosaic augmentation</strong> enhance adaptability to
              lighting and scale changes.
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed">
            In essence, <code className="px-2 py-1 rounded-md border">yolov8m.pt</code>{" "}
            guarantees fast, accurate, and consistent detection of fabric
            imperfections.
          </p>
        </section>

        {/* Section 3: Model Training Configuration */}
        <section className="rounded-xl border p-8 mb-12">
          <h2 className="text-3xl font-bold mb-5 border-b pb-2">
            Model Training Configuration
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The model was trained using the <strong>YOLOv8m</strong> architecture
            on the <code className="px-2 py-1 rounded-md border">fabric_defect_dataset</code>{" "}
            with its configuration file{" "}
            <code className="px-2 py-1 rounded-md border">data.yaml</code>.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-3 text-lg pl-4">
            <li>Pre-trained model: yolov8m.pt</li>
            <li>Epochs: 100</li>
            <li>Image size: 960 × 960</li>
            <li>Batch size: 8</li>
            <li>Device: GPU (device=0)</li>
            <li>AMP & Cache: Enabled for faster training</li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed">
            Various augmentations such as hue, brightness, scale, translate, and
            mosaic were applied. The final trained model is saved under{" "}
            <code className="px-2 py-1 rounded-md border">
              /content/runs_fabric/yolov8mp6_fabric_model
            </code>
            .
          </p>
        </section>

        {/* Section 4: Dataset Description */}
        <section className="rounded-xl border p-8 mb-12">
          <h2 className="text-3xl font-bold mb-5 border-b pb-2">
            Dataset Description
          </h2>

          <div className="rounded-lg border p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Dataset Overview</h3>
            <p className="text-lg leading-relaxed mb-5">
              The <strong>Fabric Defect Dataset</strong> contains annotated
              fabric images for defect detection. Each bounding box marks the
              defect region. The dataset is split into training, validation, and
              testing sets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-5 rounded-lg border text-center">
                <div className="text-sm mb-1">Training images</div>
                <div className="text-3xl font-extrabold">3,747</div>
              </div>
              <div className="p-5 rounded-lg border text-center">
                <div className="text-sm mb-1">Validation images</div>
                <div className="text-3xl font-extrabold">382</div>
              </div>
              <div className="p-5 rounded-lg border text-center">
                <div className="text-sm mb-1">Test images</div>
                <div className="text-3xl font-extrabold">197</div>
              </div>
            </div>

            <p className="text-base mt-6 text-center">
              <strong>Total images:</strong> 4,326
            </p>
          </div>

          <div className="rounded-lg border p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Class Info</h3>
            <ul className="list-disc list-inside text-lg space-y-3 pl-4">
              <li>
                <strong>Defective</strong> — Images containing annotated defects.
              </li>
              <li>
                <strong>Non-Defective</strong> — Images without bounding boxes.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Annotation Format</h3>
            <p className="text-lg leading-relaxed mb-5">
              Defects are annotated using YOLO-style bounding boxes, one
              <code className="px-1 mx-1 rounded-md border">.txt</code> file per
              image.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full rounded-lg border">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Annotation type</td>
                    <td className="py-3 px-4">Bounding boxes (YOLO format)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Multiple defects</td>
                    <td className="py-3 px-4">Supported</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Primary use case</td>
                    <td className="py-3 px-4">
                      Object detection → binary classification
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border p-6">
            <ul className="list-disc list-inside text-lg space-y-3 pl-4">
              <li>Includes diverse textures and lighting conditions.</li>
              <li>Contains small and subtle defects requiring high resolution.</li>
              <li>
                Annotations support quantitative metrics like mAP and IoU.
              </li>
              <li>Data split ensures no leakage between train/val/test sets.</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
