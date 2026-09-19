"use client";

import { useRef, useState } from "react";
import {
  FiCheckCircle,
  FiFileText,
  FiPaperclip,
  FiSend,
  FiTrash2,
  FiUploadCloud,
} from "react-icons/fi";

export default function JobApplication() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setError("");
    setSent(false);

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedExtensions = [".pdf", ".doc", ".docx"];

    const extension = selectedFile.name
      .toLowerCase()
      .slice(selectedFile.name.lastIndexOf("."));

    if (
      !allowedTypes.includes(selectedFile.type) &&
      !allowedExtensions.includes(extension)
    ) {
      setError("Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setError("Your CV must be smaller than 10 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setSent(false);
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const sendApplication = () => {
    if (!file) {
      setError("Please select your CV first.");
      return;
    }

    // Temporary UI-only submission.
    // Backend submission will be connected later.
    setSent(true);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${Math.round(bytes / 1024)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiFileText size={21} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Apply for this job
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Upload your CV and submit your application.
          </p>
        </div>
      </div>

      {!file ? (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="mt-6 flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-blue-300 hover:bg-blue-50/40"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
            <FiUploadCloud size={23} />
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-900">
            Upload your CV
          </p>

          <p className="mt-1 text-xs text-slate-500">
            PDF, DOC or DOCX · Maximum 10 MB
          </p>
        </button>
      ) : (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <FiFileText size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">
                {file.name}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {formatFileSize(file.size)}
              </p>
            </div>

            {!sent && (
              <button
                type="button"
                onClick={removeFile}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                aria-label="Remove CV"
              >
                <FiTrash2 size={17} />
              </button>
            )}
          </div>

          {!sent && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              <FiPaperclip size={16} />
              Change CV
            </button>
          )}
        </div>
      )}

      {error && (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {!sent ? (
        <button
          type="button"
          onClick={sendApplication}
          disabled={!file}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          <FiSend size={17} />
          Send Application
        </button>
      ) : (
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-start gap-3">
            <FiCheckCircle
              size={22}
              className="mt-0.5 shrink-0 text-emerald-600"
            />

            <div>
              <p className="font-semibold text-emerald-800">
                Application sent successfully
              </p>

              <p className="mt-1 text-sm leading-6 text-emerald-700">
                Your CV has been selected and your application has been recorded
                successfully.
              </p>

              <p className="mt-2 break-all text-xs font-medium text-emerald-600">
                {file?.name}
              </p>
            </div>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
