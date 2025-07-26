"use client";
import { useState, useEffect } from "react";
import Notification from "./Notification";

type FormProps = {
  formType: string;
  onClose: () => void;
  submitLabel?: string; // Optional prop for customizing the submit button label
};

export default function EnquiryForm({
  formType,
  onClose,
  submitLabel = "Send Request",
}: FormProps) {
  console.log(`Rendering Form with formType: ${formType}`);

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    website: "",
    message: "",
  });
  const [suggestions, setSuggestions] = useState<{
    email: string[];
    name: string[];
  }>({
    email: [],
    name: [],
  });

  useEffect(() => {
    // Load suggestions from localStorage
    const cachedSuggestions = JSON.parse(
      localStorage.getItem("suggestions") || "{}",
    );
    setSuggestions((prev) => ({ ...prev, ...cachedSuggestions }));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setNotification({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const payload = {
        ...formData,
        title:
          formType === "audit"
            ? `Audit Request from ${formData.name}`
            : getFormTitle(),
        ...(formType === "audit" && { website: formData.website }), // Include website only for audit
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Form submitted successfully!",
        });

        // Save form data to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Update suggestions
        const updatedSuggestions = {
          email: Array.from(
            new Set([...(suggestions.email || []), formData.email]),
          ),
          name: Array.from(
            new Set([...(suggestions.name || []), formData.name]),
          ),
        };
        setSuggestions(updatedSuggestions);
        localStorage.setItem("suggestions", JSON.stringify(updatedSuggestions));

        // Close the form after successful submission
        onClose();
      } else {
        const errorData = await response.json();
        setNotification({
          type: "error",
          message: errorData.error || "Something went wrong",
        });
      }
    } catch {
      setNotification({
        type: "error",
        message: "Error submitting the form. Please try again later.",
      });
    }
  };

  const getFormTitle = () => {
    switch (formType) {
      case "audit":
        return "Website Audit";
      case "Enquire":
        return "Enquire";
      case "quote":
        return "Get a Quote";
      case "feedback":
        return "Submit Feedback";
      case "web-development":
        return "Web Development";
      case "web-design":
        return "Web Design";
      case "seo":
        return "SEO";
      case "digital-marketing":
        return "Digital Marketing";
      default:
        return "Form";
    }
  };

  const getPlaceholder = (field: string) => {
    if (formType === "quote" && field === "message") {
      return "Describe your project requirements";
    }
    if (formType === "feedback" && field === "message") {
      return "Share your feedback";
    }
    return field === "message" ? "Message" : `${field}`;
  };

  return (
    <div className="relative">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/80 px-1 landscape:items-start landscape:pt-2">
        <form
          className="flex items-center justify-center rounded-lg bg-black"
          onSubmit={handleSubmit}
        >
          <fieldset className="font-mon relative fieldset min-h-[20rem] w-full rounded-lg border-2 border-primary/25 bg-primary/10 font-mono text-xl text-primary sm:m-8 sm:mx-2 sm:w-xs sm:text-xl">
            {/* Title */}
            <div className="px -2 px-0 font-mono text-xl font-medium text-primary sm:mt-1">
              {getFormTitle()} Enquiry
            </div>
            <hr className="border-t-primary/25" />
            <div className="grid-rows grid gap-2 p-3 sm:p-3">
              {/* Close Button */}
              <div className="absolute inset-0 -z-20 rounded-lg bg-black"></div>
              <button
                type="button"
                onClick={onClose}
                className="absolute top-0 right-2 cursor-pointer rounded-full text-xl font-bold text-slate-500 focus:ring-2 focus:ring-white focus:outline-none"
                aria-label="Close form"
              >
                x
              </button>
              {/* Form Fields */}
              {/* Email Field */}
              <div className="py-1 font-mono text-lg">Contact Details</div>
              <div className="flex-cols-2 flex gap-3">
                <label className="label text-primary/70" htmlFor="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="rounded-sm text-primary/70"
                  >
                    <path
                      fill="currentColor"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                    />
                  </svg>{" "}
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  list="email-suggestions"
                  className="input h-9 rounded-md bg-black-sabath pr-10 text-base text-slate-300 placeholder:font-mono placeholder:font-light placeholder:text-white/30 placeholder:italic focus:ring-2 focus:ring-white/30 focus:outline-none"
                  placeholder="Email address"
                  autoComplete="email"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                />
                <datalist id="email-suggestions">
                  {suggestions.email.map((email) => (
                    <option key={email} value={email} />
                  ))}
                </datalist>
              </div>
              {/* Name Field */}
              <div className="flex-cols-2 flex gap-3">
                <label className="label text-primary/70" htmlFor="name">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="rounded-sm text-primary/70"
                  >
                    <path
                      fill="currentColor"
                      d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"
                    />
                  </svg>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  list="name-suggestions"
                  className="input h-9 rounded-md bg-black-sabath pr-10 text-lg text-slate-300 placeholder:font-mono placeholder:font-light placeholder:text-white/30 placeholder:italic focus:ring-2 focus:ring-white/30 focus:outline-none sm:text-lg"
                  placeholder="Name"
                  autoComplete="name"
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                />
                <datalist id="name-suggestions">
                  {suggestions.name.map((name) => (
                    <option key={name} value={name} />
                  ))}
                </datalist>
              </div>
              {formType === "audit" && (
                <>
                  {/* Website Field */}
                  <label
                    className="text-shadow label gap-3 py-1 pt-2 pl-1 text-primary/70"
                    htmlFor="website"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className="rounded-sm text-slate-400"
                    >
                      <path
                        fill="currentColor"
                        d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                      />
                    </svg> */}
                    <div className="font-mono text-lg text-primary">
                      Website
                    </div>
                  </label>
                  <input
                    id="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="input h-9 rounded-md bg-black-sabath text-lg text-slate-300 placeholder:font-mono placeholder:font-light placeholder:text-white/30 placeholder:italic focus:ring-2 focus:ring-white/30 focus:outline-none sm:text-lg"
                    placeholder="Your website address"
                    autoComplete="website"
                  />
                </>
              )}
              <label
                className="label gap-3 py-1 pt-2 pl-1 text-primary/70"
                htmlFor="message"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  className="text-slate-400"
                >
                  <path
                    fill="currentColor"
                    d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"
                  />
                </svg> */}
                <div className="font-mono text-lg text-primary">
                  Message (optional)
                </div>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="h-19 overflow-y-hidden rounded-md bg-black-sabath px-3 py-2 text-base text-slate-300 placeholder:font-mono placeholder:font-light placeholder:text-white/30 placeholder:italic focus:ring-2 focus:ring-white/30 focus:outline-none sm:h-26"
                placeholder={getPlaceholder("How can I help you?")}
                autoComplete="off"
              />
              <button
                type="submit"
                aria-label={submitLabel}
                className="btn my-5 rounded-lg border-2 border-primary/50 bg-transparent font-mono text-lg text-primary/80 shadow-sm duration-300 btn-outline hover:border-primary/50 hover:bg-primary/5 hover:text-primary/90 focus:ring-2 focus:ring-info focus:outline-none sm:my-4 sm:w-auto sm:min-w-[8rem] sm:text-xl"
              >
                {submitLabel}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
