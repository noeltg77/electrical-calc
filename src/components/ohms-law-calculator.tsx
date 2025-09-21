import { useState } from 'react';
import { Calculator, Zap, Activity, Gauge, Power } from 'lucide-react';
import { Card } from './ui/card';

interface CalculatorValues {
  voltage: string;
  current: string;
  resistance: string;
  power: string;
}

interface CalculatorResults {
  voltage?: number;
  current?: number;
  resistance?: number;
  power?: number;
}

export function OhmsLawCalculator() {
  const [values, setValues] = useState<CalculatorValues>({
    voltage: '',
    current: '',
    resistance: '',
    power: ''
  });
  
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [error, setError] = useState<string>('');

  const handleInputChange = (field: keyof CalculatorValues, value: string) => {
    // Improved validation: allow only valid positive numbers with max one decimal
    if (value === '' || (/^\d*\.?\d*$/.test(value) && value !== '.' && !value.includes('..'))) {
      setValues(prev => ({ ...prev, [field]: value }));
      setError('');
    }
  };

  const calculate = () => {
    setError('');
    
    // Convert string values to numbers, filter out empty values
    const inputValues = Object.entries(values).reduce((acc, [key, value]) => {
      if (value !== '' && value !== '.') {
        const numValue = parseFloat(value);
        if (!isNaN(numValue) && numValue > 0) {
          acc[key as keyof CalculatorValues] = numValue;
        } else {
          setError('All values must be positive numbers greater than zero.');
          return acc;
        }
      }
      return acc;
    }, {} as Record<string, number>);

    // Check if we have at least 2 values
    const providedValues = Object.keys(inputValues);
    if (providedValues.length < 2) {
      setError('Please enter at least 2 values to calculate the others.');
      return;
    }

    // Check for zero values
    if (Object.values(inputValues).some(val => val === 0)) {
      setError('Values cannot be zero.');
      return;
    }

    try {
      const calculated: CalculatorResults = {};
      
      // Ohm's Law calculations: V = I × R, P = V × I, P = I² × R, P = V² / R
      
      if (inputValues.voltage !== undefined && inputValues.current !== undefined) {
        // V and I provided
        calculated.resistance = inputValues.voltage / inputValues.current;
        calculated.power = inputValues.voltage * inputValues.current;
      } else if (inputValues.voltage !== undefined && inputValues.resistance !== undefined) {
        // V and R provided
        calculated.current = inputValues.voltage / inputValues.resistance;
        calculated.power = (inputValues.voltage * inputValues.voltage) / inputValues.resistance;
      } else if (inputValues.current !== undefined && inputValues.resistance !== undefined) {
        // I and R provided
        calculated.voltage = inputValues.current * inputValues.resistance;
        calculated.power = inputValues.current * inputValues.current * inputValues.resistance;
      } else if (inputValues.voltage !== undefined && inputValues.power !== undefined) {
        // V and P provided
        calculated.current = inputValues.power / inputValues.voltage;
        calculated.resistance = (inputValues.voltage * inputValues.voltage) / inputValues.power;
      } else if (inputValues.current !== undefined && inputValues.power !== undefined) {
        // I and P provided
        calculated.voltage = inputValues.power / inputValues.current;
        calculated.resistance = inputValues.power / (inputValues.current * inputValues.current);
      } else if (inputValues.resistance !== undefined && inputValues.power !== undefined) {
        // R and P provided
        calculated.current = Math.sqrt(inputValues.power / inputValues.resistance);
        calculated.voltage = Math.sqrt(inputValues.power * inputValues.resistance);
      }

      // Add the provided values to results
      Object.entries(inputValues).forEach(([key, value]) => {
        calculated[key as keyof CalculatorResults] = value;
      });

      setResults(calculated);
    } catch (err) {
      setError('An error occurred during calculation. Please check your inputs.');
    }
  };

  const clear = () => {
    setValues({
      voltage: '',
      current: '',
      resistance: '',
      power: ''
    });
    setResults(null);
    setError('');
  };

  const formatResult = (value: number | undefined): string => {
    if (value === undefined) return '';
    if (value >= 1000000) return `${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(2)}k`;
    if (value < 0.001) return value.toExponential(2);
    return value.toFixed(3);
  };

  const getCurrentClassification = (current: number | undefined): string => {
    if (!current) return '';
    if (current < 0.001) return 'Microelectronics level - PCB traces';
    if (current < 0.1) return 'Low current - sensors and control circuits';
    if (current < 1) return 'Electronics level - LED circuits, small devices';
    if (current <= 15) return 'Residential level - standard household circuits';
    if (current <= 50) return 'Commercial level - appliances and equipment';
    if (current <= 100) return 'Industrial level - motors and heavy equipment';
    if (current <= 400) return 'Heavy industrial - large motors and machinery';
    return 'Utility level - transmission and distribution';
  };

  const getPowerClassification = (power: number | undefined): string => {
    if (!power) return '';
    if (power < 0.1) return 'Very low power - microelectronics';
    if (power < 1) return 'Low power - electronic components, LEDs';
    if (power <= 50) return 'Moderate power - small appliances, chargers';
    if (power <= 500) return 'Medium power - household appliances';
    if (power <= 2000) return 'High power - major appliances, tools';
    if (power <= 10000) return 'Very high power - HVAC, industrial equipment';
    if (power <= 50000) return 'Industrial power - large motors, machinery';
    return 'Utility scale power - substations, transmission';
  };

  const getWireGaugeRecommendation = (current: number | undefined): string => {
    if (!current) return '';
    
    // Wire sizing based on NEC ampacity ratings (75°C copper THWN)
    if (current <= 0.5) return '18 AWG (0.5A max)';
    if (current <= 1) return '16 AWG (1A max)';
    if (current <= 3) return '14 AWG (15A circuit)';
    if (current <= 15) return '14 AWG (15A circuit)';
    if (current <= 20) return '12 AWG (20A circuit)';
    if (current <= 25) return '10 AWG (30A circuit)';
    if (current <= 30) return '10 AWG (30A circuit)';
    if (current <= 40) return '8 AWG (50A circuit)';
    if (current <= 55) return '6 AWG (65A circuit)';
    if (current <= 75) return '4 AWG (85A circuit)';
    if (current <= 95) return '3 AWG (100A circuit)';
    if (current <= 110) return '2 AWG (115A circuit)';
    if (current <= 125) return '1 AWG (130A circuit)';
    if (current <= 145) return '1/0 AWG (150A circuit)';
    if (current <= 165) return '2/0 AWG (175A circuit)';
    if (current <= 195) return '3/0 AWG (200A circuit)';
    if (current <= 225) return '4/0 AWG (230A circuit)';
    if (current <= 260) return '250 MCM (255A circuit)';
    if (current <= 290) return '300 MCM (285A circuit)';
    if (current <= 320) return '350 MCM (310A circuit)';
    if (current <= 350) return '400 MCM (335A circuit)';
    if (current <= 380) return '500 MCM (380A circuit)';
    if (current <= 420) return '600 MCM (420A circuit)';
    if (current <= 460) return '750 MCM (475A circuit)';
    if (current <= 520) return '1000 MCM (545A circuit)';
    
    return `${Math.ceil(current)}A - Consult electrical engineer for proper sizing`;
  };

  return (
    <div className="space-y-8">
      {/* Calculator Input */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-lg">
        <div className="text-center mb-8">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: 'var(--brand-primary-light)' }}
          >
            <Calculator size={32} style={{ color: 'var(--brand-primary-dark)' }} />
          </div>
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            Ohm's Law Calculator
          </h2>
          <p 
            className="text-lg"
            style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
          >
            Enter any two values to calculate the others
          </p>
        </div>

        <div 
          className="border-2 border-dashed rounded-2xl p-8 text-center"
          style={{ borderColor: 'var(--brand-primary)' }}
        >
          <div 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--brand-primary)' }}
          >
            V = I × R &nbsp;&nbsp; P = V × I
          </div>
          
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { key: 'voltage' as const, label: 'Voltage (V)', icon: Zap, unit: 'V' },
              { key: 'current' as const, label: 'Current (I)', icon: Activity, unit: 'A' },
              { key: 'resistance' as const, label: 'Resistance (R)', icon: Gauge, unit: 'Ω' },
              { key: 'power' as const, label: 'Power (P)', icon: Power, unit: 'W' }
            ].map((field) => {
              const IconComponent = field.icon;
              return (
                <div key={field.key} className="space-y-2">
                  <label 
                    className="flex items-center justify-center gap-2 text-sm font-medium"
                    style={{ color: 'var(--brand-text-accent)' }}
                  >
                    <IconComponent size={16} />
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={values[field.key]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      placeholder="Enter value"
                      className="w-full h-12 px-4 pr-8 rounded-xl border-2 text-center transition-all duration-200 focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: 'var(--brand-primary-light)',
                        backgroundColor: 'rgba(94, 234, 212, 0.1)',
                        color: 'var(--brand-text-accent)'
                      }}
                    />
                    <span 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium"
                      style={{ color: 'var(--brand-primary)' }}
                    >
                      {field.unit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={calculate}
              className="px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--brand-primary)' }}
            >
              Calculate
            </button>
            <button 
              onClick={clear}
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
                backgroundColor: 'transparent'
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <Card className="bg-white/90 backdrop-blur-sm border border-white/40 shadow-lg">
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: 'var(--brand-text-accent)' }}
              >
                Calculation Results
              </h3>
              <p 
                className="text-lg"
                style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
              >
                Complete electrical circuit parameters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { 
                  key: 'voltage' as const, 
                  label: 'Voltage', 
                  icon: Zap, 
                  unit: 'V', 
                  color: '#3b82f6',
                  bgColor: 'rgba(59, 130, 246, 0.1)'
                },
                { 
                  key: 'current' as const, 
                  label: 'Current', 
                  icon: Activity, 
                  unit: 'A', 
                  color: '#10b981',
                  bgColor: 'rgba(16, 185, 129, 0.1)'
                },
                { 
                  key: 'resistance' as const, 
                  label: 'Resistance', 
                  icon: Gauge, 
                  unit: 'Ω', 
                  color: '#f59e0b',
                  bgColor: 'rgba(245, 158, 11, 0.1)'
                },
                { 
                  key: 'power' as const, 
                  label: 'Power', 
                  icon: Power, 
                  unit: 'W', 
                  color: '#ef4444',
                  bgColor: 'rgba(239, 68, 68, 0.1)'
                }
              ].map((field) => {
                const IconComponent = field.icon;
                const value = results[field.key];
                
                return (
                  <div 
                    key={field.key}
                    className="p-6 rounded-2xl border-2 transition-all duration-200 hover:scale-105"
                    style={{ 
                      borderColor: field.color,
                      backgroundColor: field.bgColor
                    }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: field.color }}
                      >
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p 
                        className="text-sm font-medium mb-1"
                        style={{ color: field.color }}
                      >
                        {field.label}
                      </p>
                      <p 
                        className="text-2xl font-bold"
                        style={{ color: 'var(--brand-text-accent)' }}
                      >
                        {formatResult(value)}
                        <span className="text-sm font-normal ml-1">{field.unit}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Results Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-green-50 border-2 border-green-200">
                <h4 className="text-lg font-semibold mb-3 text-green-800">Current Analysis</h4>
                <p className="text-green-700 mb-2">{getCurrentClassification(results.current)}</p>
                <p className="text-sm text-green-600">
                  <strong>Recommended Wire:</strong> {getWireGaugeRecommendation(results.current)}
                </p>
                {results.current && results.current > 100 && (
                  <p className="text-sm text-red-600 mt-2">
                    ⚠️ High current - requires specialized installation
                  </p>
                )}
              </div>

              <div className="p-6 rounded-2xl bg-orange-50 border-2 border-orange-200">
                <h4 className="text-lg font-semibold mb-3 text-orange-800">Power Analysis</h4>
                <p className="text-orange-700 mb-2">{getPowerClassification(results.power)}</p>
                {results.power && results.power > 50 && (
                  <p className="text-sm text-orange-600">
                    ⚠️ Consider heat dissipation requirements
                  </p>
                )}
                {results.power && results.power > 2000 && (
                  <p className="text-sm text-red-600 mt-1">
                    🔥 High power - professional installation required
                  </p>
                )}
              </div>
            </div>

            {/* Additional Calculations */}
            {/* <div className="p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 mb-8">
              <h4 className="text-lg font-semibold mb-4 text-blue-800">Additional Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-700">Energy per Hour:</p>
                  <p className="text-blue-600">{results.power ? (results.power / 1000).toFixed(3) : '0'} kWh</p>
                </div>
                <div>
                  <p className="font-medium text-blue-700">Heat Generated:</p>
                  <p className="text-blue-600">{results.power ? (results.power * 3.412).toFixed(1) : '0'} BTU/hr</p>
                </div>
                <div>
                  <p className="font-medium text-blue-700">Current Density:</p>
                  <p className="text-blue-600">Use proper conductor sizing</p>
                </div>
              </div>
            </div> */}

            {/* Related Calculators */}
            {/* <div className="p-6 rounded-2xl bg-purple-50 border-2 border-purple-200">
              <h4 className="text-lg font-semibold mb-4 text-purple-800">Related Calculations</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-3 rounded-lg bg-white border border-purple-300 hover:bg-purple-100 transition-colors">
                  <p className="font-medium text-purple-700">Wire Size Calculator</p>
                  <p className="text-sm text-purple-600">Size wire for {formatResult(results.current)}A</p>
                </button>
                <button className="p-3 rounded-lg bg-white border border-purple-300 hover:bg-purple-100 transition-colors">
                  <p className="font-medium text-purple-700">Voltage Drop Calculator</p>
                  <p className="text-sm text-purple-600">Check voltage drop</p>
                </button>
                <button className="p-3 rounded-lg bg-white border border-purple-300 hover:bg-purple-100 transition-colors">
                  <p className="font-medium text-purple-700">Circuit Breaker Sizing</p>
                  <p className="text-sm text-purple-600">Select proper protection</p>
                </button>
              </div>
            </div> */}

            {/* Formulas Used */}
            <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: 'var(--brand-background)' }}>
              <h4 
                className="text-lg font-semibold mb-3 text-center"
                style={{ color: 'var(--brand-text-accent)' }}
              >
                Formulas Applied
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div>
                  <p 
                    className="font-mono text-lg"
                    style={{ color: 'var(--brand-primary-dark)' }}
                  >
                    V = I × R
                  </p>
                  <p className="text-sm opacity-75">Ohm's Law</p>
                </div>
                <div>
                  <p 
                    className="font-mono text-lg"
                    style={{ color: 'var(--brand-primary-dark)' }}
                  >
                    P = V × I
                  </p>
                  <p className="text-sm opacity-75">Power Formula</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}