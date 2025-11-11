'use client'
import { useState } from 'react';

export default function Page(){
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e){
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thank you! We will contact you within 24 hours.' });
        e.currentTarget.reset();
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section bg-gradient-mesh">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="accent-line mx-auto mb-6"></div>
          <h1 className="heading-lg mb-4">Request Your Implementation Plan</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Fill out the form and our team will respond within 24 hours with a tailored strategy.
          </p>
        </div>

        {/* Form Card */}
        <div className="card-elegant animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <form onSubmit={onSubmit} className="space-y-6">
            {/* Name & Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-900 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-brand-900 mb-2">
                  Company *
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Acme Corporation"
                  className="input"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-900 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@acme.com"
                className="input"
                required
              />
            </div>

            {/* Project Type & Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-brand-900 mb-2">
                  Project Type
                </label>
                <select id="projectType" name="projectType" className="select">
                  <option>AI & Automation</option>
                  <option>Website & Digital Growth</option>
                  <option>Custom App Development</option>
                  <option>Blockchain & Compliance</option>
                  <option>Multiple Services</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-brand-900 mb-2">
                  Estimated Budget
                </label>
                <select id="budget" name="budget" className="select">
                  <option>&lt; $10k</option>
                  <option>$10k – $30k</option>
                  <option>$30k – $100k</option>
                  <option>$100k+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-brand-900 mb-2">
                Tell us about your goals
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Describe your project, challenges, and objectives..."
                className="textarea"
                rows={6}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full justify-center text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Request
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div className={`p-4 rounded-2xl border-2 ${
                status.type === 'success'
                  ? 'bg-accent-50 border-accent-200 text-accent-800'
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                <div className="flex items-center gap-3">
                  {status.type === 'success' ? (
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <p className="font-medium">{status.message}</p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Additional info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-100 text-accent-600 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-brand-900 mb-1">24h Response</h3>
            <p className="text-sm text-neutral-600">Quick turnaround guaranteed</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-600 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-brand-900 mb-1">Free Consultation</h3>
            <p className="text-sm text-neutral-600">No obligation, no cost</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 text-violet-600 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-brand-900 mb-1">Custom Plan</h3>
            <p className="text-sm text-neutral-600">Tailored to your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
}