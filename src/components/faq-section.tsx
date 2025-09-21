import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  calculatorName?: string;
  title?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultOhmsLawFaqs: FaqItem[] = [
  {
    question: "What is Ohm's Law and why is it important?",
    answer: "Ohm's Law is the fundamental relationship between voltage, current, and resistance in electrical circuits, expressed as <strong>V = I × R</strong>. Discovered by Georg Simon Ohm in 1827, this law states that current is directly proportional to voltage and inversely proportional to resistance.<br/><br/><strong>Why it's crucial:</strong><br/>• Foundation for all electrical circuit analysis<br/>• Essential for component selection and sizing<br/>• Required for electrical safety calculations<br/>• Basis for power consumption analysis<br/><br/>Every electrical engineer, technician, and electrician uses Ohm's Law daily for circuit design, troubleshooting, and safety verification."
  },
  {
    question: "How do you calculate voltage using Ohm's Law?",
    answer: "To find voltage when you know current and resistance, use: <strong>V = I × R</strong><br/><br/><strong>Step-by-step process:</strong><br/>1. Identify the current (I) in amperes<br/>2. Identify the resistance (R) in ohms<br/>3. Multiply current by resistance<br/>4. Result is voltage in volts<br/><br/><strong>Example:</strong> If 2 amperes flows through a 12-ohm resistor:<br/>V = 2A × 12Ω = 24 volts<br/><br/>This calculation is essential for determining supply voltage requirements, voltage drops across components, and verifying circuit design specifications."
  },
  {
    question: "How do you calculate current using Ohm's Law?",
    answer: "To find current when you know voltage and resistance, use: <strong>I = V ÷ R</strong><br/><br/><strong>Step-by-step process:</strong><br/>1. Identify the voltage (V) in volts<br/>2. Identify the resistance (R) in ohms<br/>3. Divide voltage by resistance<br/>4. Result is current in amperes<br/><br/><strong>Example:</strong> A 120-volt supply across a 60-ohm load:<br/>I = 120V ÷ 60Ω = 2 amperes<br/><br/>Current calculations are critical for wire sizing, fuse selection, and ensuring components operate within safe limits."
  },
  {
    question: "How do you calculate resistance using Ohm's Law?",
    answer: "To find resistance when you know voltage and current, use: <strong>R = V ÷ I</strong><br/><br/><strong>Step-by-step process:</strong><br/>1. Identify the voltage (V) in volts<br/>2. Identify the current (I) in amperes<br/>3. Divide voltage by current<br/>4. Result is resistance in ohms<br/><br/><strong>Example:</strong> A circuit with 24 volts and 3 amperes:<br/>R = 24V ÷ 3A = 8 ohms<br/><br/>Resistance calculations help identify component values, detect faulty components, and analyze circuit behavior during troubleshooting."
  },
  {
    question: "What are the power formulas related to Ohm's Law?",
    answer: "Ohm's Law extends to power calculations using three key formulas:<br/><br/><strong>P = V × I</strong> (Power = Voltage × Current)<br/>• Use when you know voltage and current<br/>• Most direct power calculation<br/><br/><strong>P = I² × R</strong> (Power = Current² × Resistance)<br/>• Use when you know current and resistance<br/>• Shows how current has squared effect on power<br/><br/><strong>P = V² ÷ R</strong> (Power = Voltage² ÷ Resistance)<br/>• Use when you know voltage and resistance<br/>• Useful for resistive heating calculations<br/><br/>These formulas help determine component power ratings, heat generation, and energy consumption in electrical circuits."
  },
  {
    question: "Does Ohm's Law work for AC circuits?",
    answer: "Ohm's Law works for AC circuits, but with important considerations:<br/><br/><strong>For purely resistive AC loads:</strong> Ohm's Law applies directly using RMS (root-mean-square) values of voltage and current.<br/><br/><strong>For reactive AC loads</strong> (inductors, capacitors, motors): Replace resistance (R) with impedance (Z), which includes both resistance and reactance.<br/><br/><strong>Key points:</strong><br/>• Use RMS values, not peak values<br/>• Consider phase relationships in reactive circuits<br/>• Impedance varies with frequency<br/>• Power calculations become more complex<br/><br/>For basic AC resistive circuits like heaters and incandescent lights, standard Ohm's Law calculations work perfectly."
  },
  {
    question: "What are common mistakes when applying Ohm's Law?",
    answer: "<strong>Common mistakes include:</strong><br/><br/><strong>Mixing up units:</strong> Always use volts, amperes, and ohms consistently. Convert milliamps to amps, kilovolts to volts, etc.<br/><br/><strong>Ignoring component tolerances:</strong> Real resistors have ±5% or ±1% tolerance, affecting actual values.<br/><br/><strong>Temperature effects:</strong> Resistance changes with temperature, especially in incandescent bulbs and heating elements.<br/><br/><strong>Non-linear components:</strong> LEDs, diodes, and some other components don't follow Ohm's Law perfectly.<br/><br/><strong>AC vs DC confusion:</strong> Ensure you're using appropriate values (RMS for AC, steady-state for DC).<br/><br/><strong>Parallel vs series confusion:</strong> Ohm's Law applies to individual components, not automatically to complex circuit combinations."
  },
  {
    question: "How does Ohm's Law apply to series and parallel circuits?",
    answer: "<strong>Series circuits:</strong> Current is the same through all components, but voltage divides proportionally to resistance.<br/>• Total resistance: R_total = R1 + R2 + R3...<br/>• Each component: V = I × R (same current for all)<br/><br/><strong>Parallel circuits:</strong> Voltage is the same across all components, but current divides inversely proportional to resistance.<br/>• Total resistance: 1/R_total = 1/R1 + 1/R2 + 1/R3...<br/>• Each component: I = V ÷ R (same voltage for all)<br/><br/>Ohm's Law applies to each individual component within the circuit, while Kirchhoff's laws help analyze the overall circuit behavior."
  },
  {
    question: "When does Ohm's Law not apply?",
    answer: "Ohm's Law assumes <strong>linear resistance</strong>, but some components are non-linear:<br/><br/><strong>Semiconductors:</strong> Diodes, transistors, and LEDs have exponential voltage-current relationships.<br/><br/><strong>Incandescent bulbs:</strong> Filament resistance increases significantly as temperature rises with current.<br/><br/><strong>Arc discharges:</strong> Gas discharge lamps and welding arcs have negative resistance characteristics.<br/><br/><strong>Superconductors:</strong> Zero resistance below critical temperature and current.<br/><br/><strong>Variable resistors:</strong> Thermistors and photoresistors change resistance based on environmental conditions.<br/><br/>For these components, use manufacturer specifications or measure actual voltage-current relationships rather than relying on simple Ohm's Law calculations."
  },
  {
    question: "What safety considerations relate to Ohm's Law calculations?",
    answer: "<strong>Current safety:</strong> Even low voltages can be dangerous with high current. Calculate actual current flow to ensure safe operation.<br/><br/><strong>Power dissipation:</strong> Use P = I²R to calculate heat generation. Components must be rated for calculated power plus safety margin.<br/><br/><strong>Voltage verification:</strong> Always verify calculated voltages match expected values before energizing circuits.<br/><br/><strong>Short circuit analysis:</strong> Calculate potential short-circuit current (I = V ÷ R) to size protective devices properly.<br/><br/><strong>Component ratings:</strong> Ensure all components are rated for calculated voltage, current, and power levels.<br/><br/><strong>Ground fault considerations:</strong> Use Ohm's Law to understand ground fault current paths and ensure proper GFCI protection.<br/><br/><strong>Remember:</strong> Calculations are only as good as your measurements and assumptions. Always verify results with proper test equipment and follow electrical safety procedures."
  }
];

export function FaqSection({ 
  calculatorName = "Ohm's Law",
  title,
  description,
  faqs = defaultOhmsLawFaqs 
}: FaqSectionProps) {
  const sectionTitle = title || `${calculatorName} - Frequently Asked Questions`;
  const sectionDescription = description || `Get answers to common questions about ${calculatorName} and electrical calculations.`;

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: 'var(--brand-background)',
              border: `2px solid var(--brand-primary-light)`
            }}
          >
            <span 
              className="text-sm font-medium"
              style={{ color: 'var(--brand-primary)' }}
            >
              {calculatorName} Calculator
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            {title || "Frequently Asked Questions"}
          </h2>
          
          <p 
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
          >
            {sectionDescription}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div 
          className="rounded-3xl p-8 border shadow-lg"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: 'var(--brand-primary-light)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-2xl overflow-hidden border-2 transition-all duration-200 hover:shadow-md"
                style={{ 
                  borderColor: 'var(--brand-primary-light)',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)'
                }}
              >
                <AccordionTrigger 
                  className="text-left font-semibold hover:no-underline px-6 py-5 transition-all duration-200"
                  style={{ 
                    color: 'var(--brand-text-accent)',
                    fontSize: '1.1rem',
                    lineHeight: '1.4'
                  }}
                >
                  <span className="pr-4">{faq.question}</span>
                </AccordionTrigger>
                
                <AccordionContent 
                  className="px-6 pb-6 pt-2 leading-relaxed text-base"
                  style={{ 
                    color: 'var(--brand-text-accent)', 
                    opacity: '0.85',
                    lineHeight: '1.6'
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p 
            className="text-lg mb-6"
            style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
          >
            Still have questions about Ohm's Law calculations?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'var(--brand-primary)',
                color: 'white'
              }}
            >
              Try the Calculator
            </button>
            
            <button 
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
                backgroundColor: 'transparent'
              }}
            >
              View More Calculators
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}