// app/components/Testimonials.tsx
export default function Testimonials() {
    return (
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See why leading companies choose Vaulty2 for their security needs.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Vaulty2 has transformed how we handle sensitive data. Their security features are unmatched.",
                author: "Sarah Chen",
                role: "CTO at TechCorp"
              },
              {
                quote: "The level of security and ease of use makes Vaulty2 the clear choice for enterprise data protection.",
                author: "Michael Roberts",
                role: "Security Director at SecureNet"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl bg-white/5 border border-white/10"
              >
                <blockquote className="text-lg text-white/90 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-white/70">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }