import React from "react";
import Header from "./navbar";
import { Footer } from "./Component/Footer";

const Documentation = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 font-sans">
      <Header />

      <div className="min-h-[calc(100vh-4rem)] max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-800">
          Fabric Defect Detection – Documentation
        </h1>

        {/* Section 1: Model Description */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-indigo-100">
          <h2 className="text-3xl font-bold text-indigo-700 mb-5 border-b-2 pb-2 border-indigo-200">
            Model Description: Fabric Defect Detection
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In this project, an{" "}
            <strong className="text-indigo-600">
              object detection-based model (YOLOv8m)
            </strong>{" "}
            was implemented to accurately identify fabric defects. While initial
            requirements considered a classification approach, the dataset's
            structure, featuring bounding box annotations rather than separate
            "Defective" and "Non-Defective" categories, necessitated a detection
            model for efficient processing.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When a defect is successfully detected, the model classifies the
            fabric as <strong className="text-green-600">“Defective”</strong>{" "}
            and provides a corresponding confidence score. Conversely, if no
            defects are found, the fabric is classified as{" "}
            <strong className="text-red-600">“Non-Defective.”</strong> This
            method allows for practical binary classification by leveraging
            detection results without altering the original dataset format.
          </p>
        </section>

        {/* Section 2: Why YOLOv8m Model is Suitable */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-indigo-100">
          <h2 className="text-3xl font-bold text-indigo-700 mb-5 border-b-2 pb-2 border-indigo-200">
            Why YOLOv8m Model is Ideal for Fabric Defect Detection
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The <strong className="text-indigo-600">YOLOv8m</strong> model
            stands out for its balanced performance across{" "}
            <strong className="text-indigo-600">speed, accuracy,</strong> and{" "}
            <strong className="text-indigo-600">feature extraction</strong>.
            Fabric defects are often minuscule and subtle, posing a significant
            detection challenge. YOLOv8m excels in this domain due to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-3 text-lg text-gray-700 pl-4">
            <li>
              A <strong className="font-semibold">CSPDarknet-based backbone</strong>{" "}
              that efficiently learns fine textures and small patterns, crucial
              for intricate fabric details.
            </li>
            <li>
              The <strong className="font-semibold">medium (m) version</strong>{" "}
              strikes an optimal balance between detailed feature capture and
              high inference speed, essential for real-time applications.
            </li>
            <li>
              An <strong className="font-semibold">anchor-free detection head</strong>{" "}
              enables superior performance on irregular and tiny defects, which
              are common in fabric manufacturing.
            </li>
            <li>
              Advanced features like{" "}
              <strong className="font-semibold">auto-shape</strong> and{" "}
              <strong className="font-semibold">mosaic augmentation</strong>{" "}
              for improved adaptability to lighting variations and scale
              changes, ensuring robust detection in diverse conditions.
            </li>
          </ul>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            In essence, <code className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-mono text-base">yolov8m.pt</code>{" "}
            guarantees fast, accurate, and consistent detection of even the
            smallest fabric imperfections, making it a reliable choice for
            quality control.
          </p>
        </section>

        {/* Section 3: Model Training Configuration */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-indigo-100">
          <h2 className="text-3xl font-bold text-indigo-700 mb-5 border-b-2 pb-2 border-indigo-200">
            Model Training Configuration
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The model was meticulously trained using the{" "}
            <strong className="text-indigo-600">YOLOv8m</strong> architecture
            on the{" "}
            <code className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-mono text-base">
              fabric_defect_dataset
            </code>{" "}
            with its dedicated configuration file{" "}
            <code className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-mono text-base">
              data.yaml
            </code>
            . Key parameters critical to the training process include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-3 text-lg text-gray-700 pl-4">
            <li>
              <strong className="font-semibold">Pre-trained model:</strong>{" "}
              yolov8m.pt
            </li>
            <li>
              <strong className="font-semibold">Epochs:</strong> 100
            </li>
            <li>
              <strong className="font-semibold">Image size:</strong> 960 × 960
            </li>
            <li>
              <strong className="font-semibold">Batch size:</strong> 8
            </li>
            <li>
              <strong className="font-semibold">Device:</strong> GPU (device=0)
            </li>
            <li>
              <strong className="font-semibold">AMP & Cache:</strong> Enabled
              for faster and more efficient training, optimizing resource usage.
            </li>
          </ul>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            To enhance the model's robustness, various augmentations such as
            hue, brightness, scale, translate, and mosaic were applied. This
            ensures the model performs reliably under diverse lighting
            conditions and scale variations. The final trained model is
            conveniently saved under{" "}
            <code className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md font-mono text-base">
              /content/runs_fabric/yolov8mp6_fabric_model
            </code>
            .
          </p>
        </section>

        {/* Section 4: Dataset Description */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-indigo-100">
          <h2 className="text-3xl font-bold text-indigo-700 mb-5 border-b-2 pb-2 border-indigo-200">
            Dataset Description
          </h2>

          <div className="bg-gray-50 rounded-lg shadow-inner p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Dataset Overview
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              The <strong className="text-indigo-600">Fabric Defect Dataset</strong>{" "}
              utilized in this project comprises high-resolution fabric images,
              each meticulously annotated for defect detection. Annotations are
              provided as bounding boxes that precisely mark the defective
              regions. The dataset is carefully split to support robust model
              training, validation, and a final independent evaluation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-5 bg-indigo-100 rounded-lg text-center shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Training images</div>
                <div className="text-3xl font-extrabold text-indigo-800">3,747</div>
              </div>
              <div className="p-5 bg-indigo-100 rounded-lg text-center shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Validation images</div>
                <div className="text-3xl font-extrabold text-indigo-800">382</div>
              </div>
              <div className="p-5 bg-indigo-100 rounded-lg text-center shadow-sm">
                <div className="text-sm text-gray-600 mb-1">Test images</div>
                <div className="text-3xl font-extrabold text-indigo-800">197</div>
              </div>
            </div>

            <p className="text-base text-gray-600 mt-6 text-center">
              <strong className="font-semibold">Total images:</strong> 4,326
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-inner p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Class Info</h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The dataset intrinsically supports a binary outcome derived from
              its annotations:
            </p>

            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 pl-4">
              <li>
                <strong className="text-green-600">Defective</strong> — Images
                that clearly contain one or more annotated defects (e.g.,
                stains, holes, weaving irregularities).
              </li>
              <li>
                <strong className="text-red-600">Non-Defective</strong> —
                Images without any bounding-box annotations, treated as pristine
                fabric samples.
              </li>
            </ul>

            <p className="text-base text-gray-600 italic mt-5">
              Note: Individual images may contain multiple bounding boxes when
              several defect regions are present, providing richer data.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-inner p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Annotation Format
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-5">
              Defects are annotated using bounding boxes, fully compatible with
              YOLO-style label files (one <code className="bg-indigo-100 text-indigo-700 px-1 rounded-md font-mono text-base">.txt</code>{" "}
              file per image). Each bounding box provides crucial information
              regarding the location and size of a defect, enabling both precise
              localization and accurate presence/absence decision-making.
            </p>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-sm border border-gray-200">
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">
                      Annotation type
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      Bounding boxes (YOLO format)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">
                      Multiple defects
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      Supported (one image can have many boxes)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-700 whitespace-nowrap">
                      Primary use case
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      Object detection → binary classification (Defect vs No
                      Defect)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-inner p-6">

            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 pl-4">
              <li>
                Features real-world fabric samples with diverse textures and
                challenging lighting conditions.
              </li>
              <li>
                Contains small and subtle defects that necessitate
                high-resolution input for accurate identification.
              </li>
              <li>
                Annotations are ideally suited for localization and rigorous
                quantitative evaluation (e.g., mAP, IoU).
              </li>
              <li>
                Includes a carefully prepared split for training, validation,
                and testing to prevent data leakage and ensure reliable model
                assessment.
              </li>
            </ul>

    
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;