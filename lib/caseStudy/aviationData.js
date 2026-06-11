export const AIRCRAFT_LIST = [
  {
    id: "b787",
    name: "Boeing 787-9 Dreamliner",
    fleetId: "FL-0982",
    tailNumber: "N789LS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfBvAXDTJlzZF6wVyqotwBcmRuzJdX03Z5svsj_me_lBlU3zhg5YjDarYAm6Tq1dUA-ay0Wsu1ErTRwfJNXmvTzO25Za5GnVscMtzTVXP__GG25lPwPuOYfjASamqCXKUtpL9pt61ZfN9_kfl_4AbsQHZZrcHVQb3ng0mwPybie5mi9z8wNPhgGx7Rsl-aEEInVbVwlkA0KCEU4DObufmIO6Ik6mqvKuSpuiCrfmh4WrybCwCxt9nin_4mu0Grpij3L9gC5T2ubVQ",
    hangarLocation: "Hangar 4 - Primary Line Base",
    status: "Maintenance AOG",
  },
  {
    id: "a350",
    name: "Airbus A350-941 Ultra",
    fleetId: "FL-1204",
    tailNumber: "N350LS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG_MUnaZaGt_Q1N9d1bbPm0R8cmwfn5JUmJlc91eTwZGf2-4TfWdNVvwNn5HX3YKyT_zx6yG9ye34oTpkaVnM4nUrQYYGz6BbmUu9-77ZG8hBomTEJm1QwUtgULT2_jq8tAW2u6PY-6cVmPPmeUUUg6kCd8RqdDnf9-8697p6AYJKYSuGbv2R9qryUj7SHoZqyL7wVYkSJuosHLKQ1xM9AX1rGbYC7UVaQ1KZBhySAxj8v9S_HQTwR5w4xUOWF-LMzSVM1fWbpQrU",
    hangarLocation: "Hangar 4 - Section B",
    status: "In Service",
  },
  {
    id: "b777",
    name: "Boeing 777-300ER Heavy",
    fleetId: "FL-0044",
    tailNumber: "N777LS",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBw4QLc_8G80ukCCbuh0APxpZ000nUxUxfOrnWsSTbBaOKJ0xrNlNVj_eLz70rEUL4pkUjo7FBx0-zHpuwd5GlszzBOSQ5ONRxnGhTTpZWwjPsmpXkEqQ2KmhyNkWbwUSVNz9780MZ-eejywPfiYUjJ56B863aAUt659D8qzPh21nHlsCu3Q7lNSAGjymvXI8tX-wC8k00k2x-EB4d0D2TS5ZmV6lsYPYFClEIFh0xcmvNn5T3xuZx23Te_H0nlzNpqpRZLu9x0Ip0",
    hangarLocation: "Hangar 2 - Overhaul Overlap",
    status: "Scheduled Check",
  },
];

export const FAULT_PRESETS = [
  {
    id: "f1",
    title: "Fault Code 49-11-02: APU Ignition Fail",
    category: "Engine",
    description: "The auxiliary power unit fails to initialize ignition during ground tests. EICAS alerts indicate APU starter duty limitation reached.",
    severity: "CRITICAL",
  },
  {
    id: "f2",
    title: "Hydraulic Leak in Main Landing Gear Valve",
    category: "Hydraulics",
    description: "System green hydraulic pressure drop noticed on taxi check. Fluid pooling observed beneath the left main landing gear bay door actuator seal.",
    severity: "HIGH",
  },
  {
    id: "f3",
    title: "EICAS Alert: ENG 2 OIL TEMP HI",
    category: "Engine",
    description: "Oil scavenge temperature sensors reporting high range warnings (138°C) under high thrust. High bypass rotor balance is normal.",
    severity: "CRITICAL",
  },
  {
    id: "f4",
    title: "Airworthiness Directive AD 2025-14-11 Compliance",
    category: "Airframe",
    description: "Inspect turbine case structural welds on Trent 1000 engines for microstress indicators. Standard visual inspection manual check required.",
    severity: "MEDIUM",
  },
  {
    id: "f5",
    title: "Primary Flight Display (PFD) Left Flicker",
    category: "Avionics",
    description: "PFD experiencing intermittent frame drops and backlighting power stutter during system bus transfers, indicating power converter wear.",
    severity: "HIGH",
  },
];

export const DOCUMENTATION_SILOS = [
  {
    id: "d1",
    type: "AMM",
    title: "Aircraft Maintenance Manual Section 49-11: Auxiliary Power Unit Starter Control Configuration",
    reference: "AMM 49-11-02-04-A",
    date: "Aug 2024",
    excerpt: "Standard procedure to bleed, isolate, and replace primary electronic starter components. Requires system de-energization and specific calibrated tools.",
  },
  {
    id: "d2",
    type: "FIM",
    title: "Fault Isolation Manual Chapter 32: Hydration Systems and Landing Gear Pressure Decay Check",
    reference: "FIM 32-09-12-82-A",
    date: "Nov 2024",
    excerpt: "Diagnostic chart for isolating actuator seal degradations. Check auxiliary seal alignment prior to complete actuator sleeve removal.",
  },
  {
    id: "d3",
    type: "SB",
    title: "Service Bulletin B787-E-1025: Engine Lubrication Line Sensor Modification and Upgrade",
    reference: "SB 787-E-1025 Rev 2",
    date: "Jan 2025",
    excerpt: "Applicable to Trent 1000 series. Introduces highly resilient temperature probe housing assemblies to mitigate false overheating reports.",
  },
  {
    id: "d4",
    type: "AD",
    title: "FAA Airworthiness Directive AD 2025-14-11: Structural Case Inspection & Stress Relief",
    reference: "AD 2025-14-11",
    date: "May 2025",
    excerpt: "Mandatory compliance mandate requiring deep eddy-current examination on turbine casing support ribs within 150 flight cycles.",
  },
];

// Mock diagnosis results keyed by fault id
export const MOCK_DIAGNOSES = {
  f1: {
    summary: "APU starter duty cycle exceeded limits. Root cause: degraded EGT sensor causing premature duty termination. Cross-referenced with AMM 49-11-02 — starter relay contactor requires replacement. EICAS code 49-11-02 correlates with SB 787-49-0022.",
    confidenceRating: "94.7%",
    nodesTraversed: 312,
    sourceReferences: ["AMM 49-11-02-04-A", "SB 787-49-0022 Rev 3", "AD 2023-08-14"],
    diagnostics: ["EGT sensor out of calibration range", "Starter relay contactor phase degradation detected", "Duty cycle counter at 98% threshold"],
    resolutionSteps: ["De-energize APU bus and confirm ESDS protocol", "Replace EGT sensor assembly P/N 49-882-1102", "Test relay contactor resistance: must read <0.5Ω", "Reset duty counter via maintenance terminal", "Perform 3-cycle ground APU test before return to service"],
    requiredTools: ["Calibrated Torque Wrench 8-40 Nm", "Digital Multimeter FLUKE 87V", "APU Test Harness P/N MX-49-11"],
    consumables: [{ name: "EGT Sensor Assembly", partNumber: "49-882-1102" }, { name: "Relay Contactor", partNumber: "RC-49-001-B" }],
    complianceNote: "AD 2023-08-14 compliance confirmed. Log entry required in airframe maintenance record within 4 hours of completion.",
  },
  f2: {
    summary: "Hydraulic system pressure decay isolated to left MLG actuator secondary seal failure. Fluid analysis confirms Skydrol contamination. FIM 32-09 procedure required with full actuator sleeve inspection.",
    confidenceRating: "91.2%",
    nodesTraversed: 278,
    sourceReferences: ["FIM 32-09-12-82-A", "AMM 32-40-00", "SB B737-32-1047"],
    diagnostics: ["Left MLG actuator pressure decay rate: 120 PSI/min (limit 50)", "Skydrol fluid contamination confirmed", "Actuator sleeve micro-fracture likely"],
    resolutionSteps: ["Isolate system green hydraulic circuit", "Depressurise and purge MLG actuator line", "Remove actuator sleeve per AMM 32-40-00", "Inspect seal housings for micro-fractures", "Replace secondary seal pack P/N HY-32-9901", "Repressurize and verify zero decay over 30-minute hold"],
    requiredTools: ["Hydraulic Test Stand", "Seal Press Kit", "Fluid Sampling Kit"],
    consumables: [{ name: "Secondary Seal Pack", partNumber: "HY-32-9901" }, { name: "Skydrol 500B-4 Fluid", partNumber: "SK-500B-1L" }],
    complianceNote: "Return to service requires dual-signature MEL entry and hydraulic system leak-off test documentation.",
  },
  default: {
    summary: "Diagnostic analysis complete. Cross-referenced fault parameters against active airworthiness directives and maintenance manuals. Resolution sequence generated from knowledge graph traversal.",
    confidenceRating: "88.5%",
    nodesTraversed: 245,
    sourceReferences: ["AMM General Chapter", "FIM Cross-Reference Index", "AD Compliance Register"],
    diagnostics: ["System telemetry anomaly confirmed", "Historical fault pattern match: 73%", "Compliance check completed"],
    resolutionSteps: ["Isolate affected system per standard ESDS protocol", "Cross-reference applicable AMM chapter", "Perform visual inspection per maintenance manual", "Document findings in aircraft maintenance record", "Obtain dual-signature approval before return to service"],
    requiredTools: ["Standard Aviation Toolkit", "Digital Multimeter", "Inspection Mirror Set"],
    consumables: [{ name: "General Consumable Kit", partNumber: "GEN-CONS-001" }],
    complianceNote: "Ensure all maintenance actions are logged in the Aircraft Technical Log. AD compliance verification required prior to next flight.",
  },
};
