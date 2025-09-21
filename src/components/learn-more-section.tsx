import { BookOpen, Lightbulb, Target, Zap } from 'lucide-react';

export function LearnMoreSection() {
  const sections = [
    {
      icon: BookOpen,
      title: "Understanding Ohm's Law",
      content: "Ohm's Law is a fundamental principle in electrical engineering that describes the relationship between voltage, current, and resistance in an electrical circuit. It states that the current through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance."
    },
    {
      icon: Zap,
      title: "The Mathematical Formula",
      content: "The basic formula is V = I × R, where V represents voltage (measured in volts), I represents current (measured in amperes), and R represents resistance (measured in ohms). This simple equation can be rearranged to solve for any unknown variable when the other two are known."
    },
    {
      icon: Target,
      title: "Practical Applications",
      content: "Ohm's Law is essential for designing electrical circuits, calculating power consumption, determining appropriate wire sizes, and troubleshooting electrical problems. It's used in everything from simple household circuits to complex industrial electrical systems."
    },
    {
      icon: Lightbulb,
      title: "Key Concepts",
      content: "Understanding the relationship between these three variables helps electricians and engineers ensure circuits operate safely and efficiently. Higher resistance reduces current flow, while higher voltage increases current flow for a given resistance."
    }
  ];

  return (
    <section className="py-20 px-6 px-[24px] py-[10px]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-6"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            Learn More About Ohm's Law
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
          >
            Master the fundamental principles that govern electrical circuits and power calculations.
          </p>
        </div>

        {/* Single comprehensive card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40">
          <div className="space-y-8">
            {/* What is Ohm's Law */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                What is Ohm's Law?
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Ohm's Law is the fundamental principle that describes the relationship between voltage, current, and resistance in electrical circuits. Discovered by German physicist Georg Simon Ohm in 1827, this law states that the current flowing through a conductor is directly proportional to the voltage applied across it and inversely proportional to its resistance.
              </p>
            </div>

            {/* The Formula */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                The Formula: V = I × R
              </h3>
              <div className="mb-4">
                <p className="leading-relaxed mb-2" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                  <strong>V</strong> = Voltage (measured in volts)<br/>
                  <strong>I</strong> = Current (measured in amperes)<br/>
                  <strong>R</strong> = Resistance (measured in ohms)
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                  From this basic relationship, we can derive three essential formulas:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                  <li><strong>V = I × R</strong> (Find voltage when you know current and resistance)</li>
                  <li><strong>I = V ÷ R</strong> (Find current when you know voltage and resistance)</li>
                  <li><strong>R = V ÷ I</strong> (Find resistance when you know voltage and current)</li>
                </ul>
              </div>
            </div>

            {/* Power Calculations */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                Power Calculations with Ohm's Law
              </h3>
              <p className="leading-relaxed mb-2" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Power (P) measured in watts can be calculated using:
              </p>
              <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <li><strong>P = V × I</strong> (Power equals voltage times current)</li>
                <li><strong>P = I² × R</strong> (Power equals current squared times resistance)</li>
                <li><strong>P = V² ÷ R</strong> (Power equals voltage squared divided by resistance)</li>
              </ul>
            </div>

            {/* Real-World Applications */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                Real-World Applications
              </h3>
              
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Electronics Design
              </h4>
              <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <li><strong>LED Circuit Design</strong>: Calculate current-limiting resistors to prevent LED damage</li>
                <li><strong>Sensor Circuits</strong>: Determine proper bias voltages and currents</li>
                <li><strong>Power Supply Design</strong>: Size components for specific voltage and current requirements</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Electrical Installation
              </h4>
              <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <li><strong>Wire Sizing</strong>: Determine proper conductor size based on expected current</li>
                <li><strong>Circuit Protection</strong>: Size fuses and breakers for safe operation</li>
                <li><strong>Voltage Drop Analysis</strong>: Calculate losses in long wire runs</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Troubleshooting
              </h4>
              <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <li><strong>Fault Finding</strong>: Use Ohm's Law to identify shorts, opens, and high resistance connections</li>
                <li><strong>Load Testing</strong>: Verify equipment is drawing proper current</li>
                <li><strong>Safety Verification</strong>: Ensure circuits operate within safe parameters</li>
              </ul>
            </div>

            {/* Common Mistakes */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                Common Mistakes to Avoid
              </h3>
              
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                1. AC vs DC Confusion
              </h4>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Ohm's Law applies directly to DC circuits and resistive AC circuits. For reactive AC circuits (with inductors and capacitors), you need to consider impedance instead of simple resistance.
              </p>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                2. Temperature Effects
              </h4>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Resistance changes with temperature. Most conductors increase resistance as temperature rises, which can affect your calculations in high-power applications.
              </p>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                3. Non-Linear Components
              </h4>
              <p className="leading-relaxed" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Ohm's Law assumes linear resistance. Components like diodes, transistors, and incandescent bulbs don't follow Ohm's Law perfectly.
              </p>
            </div>

            {/* Safety Considerations */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                Safety Considerations
              </h3>
              
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Current Limits
              </h4>
              <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <li><strong>1-5 mA</strong>: Barely perceptible</li>
                <li><strong>5-10 mA</strong>: Painful shock</li>
                <li><strong>10-20 mA</strong>: Muscular control lost</li>
                <li><strong>50-100 mA</strong>: Ventricular fibrillation (potentially fatal)</li>
                <li><strong>100-200 mA</strong>: Usually fatal</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Voltage Awareness
              </h4>
              <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <li><strong>Below 50V</strong>: Generally considered safe for dry conditions</li>
                <li><strong>50-1000V</strong>: Low voltage, but can be dangerous with wet conditions</li>
                <li><strong>Above 1000V</strong>: High voltage, extremely dangerous</li>
              </ul>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Power Heat Generation
              </h4>
              <p className="leading-relaxed" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Power dissipated as heat follows P = I²R. High current in small resistances generates significant heat that must be managed through proper heat sinking and ventilation.
              </p>
            </div>

            {/* Practical Examples */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                Practical Examples
              </h3>
              
              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Example 1: LED Current Limiting
              </h4>
              <p className="leading-relaxed mb-3" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <strong>Given</strong>: 12V supply, LED forward voltage 2.1V, desired current 20mA<br/>
                <strong>Find</strong>: Required resistor value<br/>
                <strong>Solution</strong>: R = (12V - 2.1V) ÷ 0.02A = 495Ω (use 470Ω standard value)
              </p>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Example 2: Heater Power Calculation
              </h4>
              <p className="leading-relaxed mb-3" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <strong>Given</strong>: 240V heater with 15Ω resistance<br/>
                <strong>Find</strong>: Power consumption<br/>
                <strong>Solution</strong>: P = V²/R = (240V)² ÷ 15Ω = 3,840W
              </p>

              <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-text-accent)' }}>
                Example 3: Wire Size Determination
              </h4>
              <p className="leading-relaxed" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                <strong>Given</strong>: 20A load, 12V system<br/>
                <strong>Find</strong>: Minimum wire gauge for 3% voltage drop over 50 feet<br/>
                <strong>Solution</strong>: Calculate resistance limit, then select appropriate AWG
              </p>
            </div>

            {/* Conclusion */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-text-accent)' }}>
                Conclusion
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}>
                Ohm's Law is more than just a formula—it's the foundation for understanding electrical behavior. Whether you're designing circuits, troubleshooting problems, or ensuring safety, mastering Ohm's Law and its applications is essential for anyone working with electricity.
              </p>
              <p className="leading-relaxed font-semibold" style={{ color: 'var(--brand-primary-dark)' }}>
                Remember: electrical work can be dangerous. When in doubt, consult with a qualified electrician or electrical engineer, especially for high-voltage or high-current applications.
              </p>
            </div>

            {/* Essential Formulas Section */}
            <div className="border-t pt-8" style={{ borderColor: 'var(--brand-primary-light)' }}>
              <h3 
                className="text-2xl font-bold text-center mb-8"
                style={{ color: 'var(--brand-text-accent)' }}
              >
                Essential Formulas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { formula: 'V = I × R', description: 'Calculate Voltage' },
                  { formula: 'I = V ÷ R', description: 'Calculate Current' },
                  { formula: 'R = V ÷ I', description: 'Calculate Resistance' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-white/60">
                    <div 
                      className="text-2xl font-bold mb-2"
                      style={{ color: 'var(--brand-primary)' }}
                    >
                      {item.formula}
                    </div>
                    <div 
                      className="text-sm font-medium"
                      style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
                    >
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}