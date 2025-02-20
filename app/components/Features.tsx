// app/components/Features.tsx
import { Shield, Lock, Key } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Protecting your business assets with advanced encryption and security measures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "Secure Storage",
              description: "Military-grade encryption for all your sensitive business data."
            },
            {
              icon: Shield,
              title: "Access Control",
              description: "Granular permissions and role-based access management."
            },
            {
              icon: Key,
              title: "Compliance Ready",
              description: "Built to meet enterprise security and compliance requirements."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              <feature.icon className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}