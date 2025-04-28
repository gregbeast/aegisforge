import axios from "axios";

// Scans email for breaches using your Node proxy
export async function scanEmail(email) {
  const res = await axios.post("/api/scan/email", { email });
  // Result: { breaches: [...] }
  return res.data;
}

