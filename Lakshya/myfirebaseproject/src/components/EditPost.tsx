//@ts-nocheck
import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { useOpenContext } from "@/ContextAPI";

const InputForm = ({
  item,
  onSubmit = () => {},
  onCancel = () => {},
  titlePlaceholder = "Enter title...",
  descriptionPlaceholder = "Enter description...",
  submitLabel = "Enter",
  cancelLabel = "Cancel",
  maxTitleLength = 100,
  maxDescriptionLength = 500,
  required = true,
}) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = required ? title.trim() && description.trim() : true;
  const titleCharsLeft = maxTitleLength - title.length;
  const descCharsLeft = maxDescriptionLength - description.length;
  const titleOverLimit = titleCharsLeft < 0;
  const descOverLimit = descCharsLeft < 0;

  const {handleClose}=useOpenContext();

  const handleSubmit = async () => {
    if (!isValid || titleOverLimit || descOverLimit) return;

    setIsSubmitting(true);


    try {
      await onSubmit({
        title: title.trim(),
        description: description.trim(),
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
      handleClose();
    }
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    handleClose();
    onCancel();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit();
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg  mx-auto">
      <div className="p-6 space-y-4">
        {/* Title Input */}
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title {required && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={titlePlaceholder}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                titleOverLimit
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300"
              }`}
              maxLength={maxTitleLength + 50} // Allow typing beyond limit for better UX
            />
            <div
              className={`absolute top-2 right-2 text-xs ${
                titleOverLimit
                  ? "text-red-500"
                  : titleCharsLeft < 10
                  ? "text-yellow-600"
                  : "text-gray-400"
              }`}
            >
              {titleCharsLeft}
            </div>
          </div>
          {titleOverLimit && (
            <p className="text-xs text-red-500">Title exceeds maximum length</p>
          )}
        </div>
        {/* Description Input */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description {required && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={descriptionPlaceholder}
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                descOverLimit
                  ? "border-red-300 focus:ring-red-500"
                  : "border-gray-300"
              }`}
              maxLength={maxDescriptionLength + 50}
            />
            <div
              className={`absolute bottom-2 right-2 text-xs ${
                descOverLimit
                  ? "text-red-500"
                  : descCharsLeft < 50
                  ? "text-yellow-600"
                  : "text-gray-400"
              }`}
            >
              {descCharsLeft}
            </div>
          </div>
          {descOverLimit && (
            <p className="text-xs text-red-500">
              Description exceeds maximum length
            </p>
          )}
        </div>

        {/* Keyboard Shortcuts Hint */}
        <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
          <strong>Shortcuts:</strong> Ctrl+Enter to submit, Escape to cancel
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2">
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
            <span>{cancelLabel}</span>
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={
              !isValid || titleOverLimit || descOverLimit || isSubmitting
            }
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors flex-1 justify-center ${
              !isValid || titleOverLimit || descOverLimit || isSubmitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Check className="w-4 h-4" />
            <span>{isSubmitting ? "Submitting..." : submitLabel}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage
const EditPost = ({item}) => {
  const [showForm, setShowForm] = useState(true);
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);
    setSubmissions((prev) => [
      ...prev,
      { ...data, id: Date.now(), timestamp: new Date() },
    ]);
    setShowForm(false);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    setShowForm(false);
  };

  return (
    <div className=" bg-gray-50  text-black w-1/3 py-8">
      <div className="mx-auto  px-4">

        {showForm && (
          <InputForm
            onSubmit={handleSubmit}
            
            onCancel={handleCancel}
            titlePlaceholder="What's the title?"
            descriptionPlaceholder="Tell us more about it..."
            required={true}
          />
        )}

      </div>
    </div>
  );
};

export default EditPost;
