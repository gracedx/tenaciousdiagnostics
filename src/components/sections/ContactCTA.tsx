import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-teal-600">
      <div className="section-container text-center">
        <h2 className="text-headline font-bold text-white mb-4">
          Ready to Learn More?
        </h2>
        <p className="text-lg text-teal-100 max-w-2xl mx-auto mb-10">
          Whether you are a patient seeking options, a clinician looking for clinical data,
          or a payer reviewing our evidence package — we are here to help.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:info@tenaciousdiagnostics.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-teal-700 font-semibold text-lg hover:bg-teal-50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-600"
          >
            Email Us
          </a>
          <Button href="/investors" variant="outline" size="lg" className="border-white text-white hover:bg-teal-700">
            Investor Relations
          </Button>
        </div>
        <p className="mt-8 text-teal-200 text-sm">
          info@tenaciousdiagnostics.com
        </p>
      </div>
    </section>
  );
}
